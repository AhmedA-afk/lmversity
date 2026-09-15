---
title: "Project: A Stateful Agent With Checkpoints and Resumable Execution"
track: "agentic-ai"
status: live
summary: "Build an agent that survives crashes — durable checkpoints, deterministic resume, and a test that kills it mid-task."
duration: "25 min read"
---

Most agent demos die with the process. A real agent run is a sequence of expensive steps — tool calls, model calls, approvals — and losing state at step 14 means paying for steps 1–13 again, or worse, re-executing side effects. This project builds the checkpoint machinery that makes an agent resumable.

## The brief

Build an agent loop whose state is externalized: every step's inputs, outputs, and decisions land in a checkpoint store. Killing the process at any step must produce a resumable run — the agent restarts from the last checkpoint with the same trajectory it would have had. Side-effecting steps must be idempotent or gated so resume never double-executes.

## Prerequisites

- [The agent loop](/learn/agentic-ai/the-agent-loop) — what each step is
- [State, memory, and recovery](/learn/agentic-ai/state-memory-and-recovery) — what belongs in durable state
- [Error handling and retries](/learn/agentic-ai/error-handling-and-retries) — the failure taxonomy

## Supplied assets and mock mode

Everything runs locally: a SQLite or JSON-file checkpoint store, a mock model (a function returning scripted responses is enough — the checkpoint machinery is what is under test), and mock tools. If you wire a real model, put it behind a function the tests never call.

## Acceptance criteria

- [ ] Each completed step writes a checkpoint: step index, tool/model inputs, outputs, and the decision made — readable by a human
- [ ] Killing the process at a random step, then resuming, produces the same final state as an uninterrupted run — a test proves this on a scripted task
- [ ] A side-effecting step (write file, send request) is marked effectful and either idempotent-keyed or resume-gated — resume never sends the same action twice
- [ ] Checkpoints are versioned with a schema version field — an old checkpoint from last week's format loads or fails loudly, never silently misreads
- [ ] Resume cost is measured: the log shows which steps were skipped because their checkpoints were valid

## Failure injection (required)

- [ ] Kill after a tool call succeeded but before the checkpoint write — the resume re-runs that step and the idempotency key prevents a double effect
- [ ] Corrupt one checkpoint file — resume detects the corruption and falls back to the last valid checkpoint, logged
- [ ] Resume against a code version where a tool signature changed — the checkpoint records the schema version and refuses cleanly instead of replaying garbage

## Milestones

1. **A run that forgets nothing** — the loop writes every step to disk before it takes the next one.
2. **Kill and resume** — the scripted task, interrupted at every step in a looped test, always reaches the same end state.
3. **The idempotent step** — one effectful tool with a dedup key; prove a retried call effects once.
4. **Checkpoint schema versioning** — a v1 checkpoint loads in v2 code or fails with a readable error.
5. **The economics** — log tokens/cost saved by resume vs restart on a 20-step task.

## What good looks like

`kill -9` is a test case, not a disaster. The checkpoint log reads like a flight recorder — you can replay what the agent decided and why, not just what it did. The cost-saved line in the resume log is the number that justifies the whole design.

## For your portfolio

Show the kill-at-random-step test — it is the single artifact that separates "ran an agent" from "built a durable agent." The checkpoint schema diff between versions is the second artifact worth showing.

## Defend this build

1. Show a checkpoint — what is in it, and what did you deliberately leave out?
2. A step is "call the refund API." How does resume know whether it already ran?
3. Your checkpoint format changes next month — what breaks, and what did you build so it fails safely?
4. What is the cost of checkpointing every step, and where would you sample instead?

The pass bar: answers point at the checkpoint schema, the idempotency mechanism, and the test — not at the idea of durability.

**Related:** [State, memory, and recovery](/learn/agentic-ai/state-memory-and-recovery), [Common agent failure modes](/learn/agentic-ai/common-agent-failure-modes), [Handling tool errors and retries](/learn/tools-function-calling/handling-tool-errors-and-retries)
