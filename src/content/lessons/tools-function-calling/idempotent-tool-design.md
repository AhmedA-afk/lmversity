---
title: "Design idempotent tools so retries can't double-act"
track: "tools-function-calling"
status: live
summary: "Make retried tool calls safe: idempotency keys, natural dedup points, and the difference between a retry-safe tool and one that sends the same invoice twice."
duration: "8 min read"
---

## The short answer

An idempotent tool does the same thing whether it's called once or ten times with the same intent. You get there with an idempotency key — a stable identifier the caller generates and the tool deduplicates on — or by designing the operation to be naturally idempotent. Without it, every retry policy you add is a duplicate-action machine.

## Why this matters

Retries are not optional in agent systems — the model will re-call a tool after a timeout, after a truncated response, after a network blip it can't see. If your `charge_card` or `send_email` tool isn't idempotent, the retry doesn't just fail; it *succeeds again*. The failure shows up as a customer who was emailed or charged twice, which is the worst kind of tool bug: silent, real-world, and caused by your retry logic doing its job.

## The mechanism

**The idempotency key** is the standard answer: the caller generates a stable ID for the intended operation — not per attempt, per *intent* — and the tool records it. Second call with the same key returns the first result instead of re-executing.

```python
# caller side: one key per intended action, reused across retries
result = tools.call("send_invoice", args, idempotency_key=f"invoice-{invoice_id}")
```

**Naturally idempotent operations** need no key: reads, "set status to X" (not "increment"), upserts keyed on a real identifier, deletes that succeed-or-noop. Prefer these shapes when you control the tool's design — a `PUT /documents/{id}` is self-healing in a way `POST /documents` never is.

## Where the boundary sits

Not everything can or should be idempotent:

- **Reads and lookups** — already safe; don't add machinery.
- **State writes** — make idempotent by keying on the entity ID, not the request.
- **Side-effect actions** (send, charge, publish, delete) — require an explicit idempotency key or a dedup record. These are the dangerous ones.
- **Append-only logs** — dedup on a content hash or event ID.

The rule: if a retried call could produce a second real-world effect, it needs a key. The caller generates it; the tool honors it.

## How it interacts with the rest of the loop

Idempotency is what makes [error handling and retries](/learn/tools-function-calling/handling-errors-and-retries) safe to turn on — a retry policy without idempotent tools is a duplication policy. It pairs with [approval gates](/learn/tools-function-calling/approval-gates-for-sensitive-tools): the gate decides *whether* to act, idempotency decides *how many times* it lands.

## The lab version

Wrap a fake "send email" tool with a call counter. Retry it five times without a key — count the sends. Add an idempotency key and a seen-keys set — retry again — count one send. That single counter is the whole lesson.

## Go deeper

- [Handling errors and retries](/learn/tools-function-calling/handling-errors-and-retries) — the retry policies this makes safe.
- [Classifying tool risk tiers](/learn/tools-function-calling/classifying-tool-risk-tiers) — which tools need keys, and which need gates.
- [Executing tool calls safely](/learn/tools-function-calling/executing-tool-calls-safely) — the wider execution-safety picture.
