---
title: "How much does an LLM app cost to run?"
description: "LLM cost is tokens in plus tokens out, multiplied by a price per million — so the bill is driven by your context size, output length, retries, and loops, not just the model's sticker price."
intent: howto
updated: "2026-09-15"
featured: false
faq:
  - q: "What actually drives the cost of an LLM feature?"
    a: "Four things: how many input tokens you send (context, instructions, retrieved documents), how many output tokens the model produces, how many model calls happen per user request (retries, validation loops, agent steps), and the per-token price of the model you chose. The multipliers — retries and loops — are usually where surprises come from."
  - q: "Is a cheaper model always the way to cut cost?"
    a: "No. The biggest wins are usually structural: caching the stable part of your prompt, not resending context that doesn't change the answer, routing easy requests to a smaller model, and capping retry loops. Switching models is one lever among several, and it trades against quality."
  - q: "How do I find out where the money is going?"
    a: "Log per request: input tokens, output tokens, cached tokens, model, endpoint, and a request type you assign. Provider dashboards give you monthly totals, which hide the pathologies — per-request logs expose them."
  - q: "Do I need to self-host to control costs?"
    a: "Only at steady, high volume or under hard data-residency requirements. Self-hosting trades per-token pricing for fixed infrastructure plus operational work; below a real volume threshold it usually costs more, not less."
related:
  - /guides/cut-your-llm-bill
  - /learn/production/token-and-cost-tracking
  - /learn/production/model-routing-by-task-complexity
  - /learn/production/prompt-and-semantic-caching
  - /learn/context-engineering/context-observability-and-token-accounting
  - /learn/production
---

An LLM app's cost is not a fixed price — it is tokens in plus tokens out, multiplied by your model's per-token rate, times however many calls a single user request triggers. Two features with the same sticker-priced model can differ by an order of magnitude because one resends a long system prompt every call and retries without a ceiling while the other caches and caps.

## The short version

- Cost = (input tokens + output tokens) × price per token, per call — and a single user request can trigger many calls.
- The usual drivers, in order: a large stable prompt prefix resent every call, retry and agent loops without ceilings, routing every request to the biggest model, and long unbounded outputs.
- Prompt caching and semantic caching cut the input side; routing and output caps cut the rest.
- Measure per request — input, output, cached tokens, model, call count — or the monthly total will hide which feature is expensive.
- Self-hosting changes the cost *shape* (fixed infrastructure instead of per-token), not the cost *size* — it wins only at sustained volume or under hard privacy constraints.

## Where the money actually goes

Most bills have the same anatomy. A **stable prefix** — system prompt, tool definitions, few-shot examples — rides along on every request; if it is thousands of tokens, it is thousands of tokens billed per call until you cache it. **Context that doesn't change the answer** — a whole document when a paragraph would do — is pure spend. **Multiplication** is the quiet one: a validation retry, an agent that loops six steps, a judge call to grade the first call — each doubles the per-request cost without changing what the user sees. And **uniform routing** sends the trivial "is this spam?" request to the same frontier model as the genuinely hard one.

Each of those maps to a lever: [prompt and semantic caching](/learn/production/prompt-and-semantic-caching) for the prefix, context discipline for the input, caps on loops and output length for the multipliers, and [routing by task complexity](/learn/production/model-routing-by-task-complexity) so easy requests hit a cheap model. The guide [Cut your LLM bill](/guides/cut-your-llm-bill) walks the levers in order of saving-per-hour-of-work.

## Measure before you optimise

You cannot find the expensive part from a provider's monthly total — it is an average of everything. Log every request with input tokens, output tokens, cached tokens, model, endpoint, and a request type you assign yourself, then cost out the top request types. The [token and cost tracking](/learn/production/token-and-cost-tracking) lesson covers the instrumentation; [context observability and token accounting](/learn/context-engineering/context-observability-and-token-accounting) covers seeing *what* filled the context, not just how much.

## Where LMVersity fits

Cost is a first-class topic in the [production track](/learn/production), which covers tracking, routing, caching, budgeting, and graceful degradation. The [cut your LLM bill](/guides/cut-your-llm-bill) guide is the hands-on pass. Free, self-paced, no certificate.

## Go deeper

- [Cut your LLM bill](/guides/cut-your-llm-bill) — the seven levers, ordered.
- [Token and cost tracking](/learn/production/token-and-cost-tracking) — the per-request logging that makes the rest possible.
- [Model routing by task complexity](/learn/production/model-routing-by-task-complexity) — stop paying frontier prices for easy calls.
