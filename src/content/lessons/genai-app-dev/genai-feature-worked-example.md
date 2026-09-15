---
title: "Worked Example: A GenAI Feature From Demo to Production"
track: "genai-app-dev"
status: live
summary: "One support-summarization feature walked end to end — the demo that worked, the four production gaps, and the eval that caught them."
duration: "10 min read"
---

The distance between a working demo and a production feature is where GenAI work actually happens. This example walks one feature — a support-ticket summarizer — through the four gaps the demo hid.

## The demo

A prompt that summarizes a support ticket into three fields: `issue`, `sentiment`, `suggested_action`. On five test tickets it works beautifully. The demo is real — the gaps are what it doesn't show.

## Gap 1: the schema that almost held

Production tickets are longer and messier. The model occasionally returns `"sentiment": "frustrated-angry"` — a compound value the downstream code doesn't handle — or drops `suggested_action` when the ticket is ambiguous.

The fix: a validation layer between the model and the code — schema-checked, with a defined behavior for the invalid case (reject and re-prompt, or route to a human queue). The demo's "it usually works" becomes "the contract is enforced."

## Gap 2: the latency nobody budgeted

The demo took 4 seconds — acceptable for a demo. In production, a 4-second synchronous call blocks the ticket page; at 200 tickets/hour it's a bottleneck.

The fix: the call goes async — the summary populates when ready, the page isn't blocked. The budget is a decision, not an observation: what latency is acceptable, and is the design inside it?

## Gap 3: the cost that wasn't a line item

200 tickets/hour × ~800 tokens each × the model's price — a monthly number nobody computed. At scale it's a budget line that needed approval before launch, not a surprise after.

The fix: per-request token telemetry from day one. The cost is a number on a dashboard, not a discovery at the end of the month.

## Gap 4: the failure that had no path

The model occasionally returns a summary that's wrong — not malformed, just wrong (misreads the ticket, invents a detail). In the demo it was charming; in production it's a support agent acting on a fabricated issue.

The fix: a confidence-and-review path — low-confidence or high-stakes summaries go to a human queue; the model assists, it doesn't autonomously decide.

## What the four gaps teach

- **The demo proves feasibility, not readiness.** Each gap is a layer the demo didn't need and production does.
- **Every gap is a design decision.** Schema enforcement, latency budget, cost telemetry, review path — all engineering, not model quality.
- **The eval is the through-line.** Each gap is caught by a check — a schema test, a latency budget, a cost metric, a review threshold — that the demo never ran.

## The check

Before calling a GenAI feature "done," ask which of the four gaps it still has: is the output contract enforced, is the latency budgeted, is the cost measured, and does the failure have a path? A demo that hasn't answered all four isn't a feature yet.

**Related:** [Ship a GenAI assistant capstone](/learn/genai-app-dev/capstone-ship-a-genai-assistant), [Structured outputs](/learn/structured-outputs/why-structured-output), [Production mistakes](/learn/production/production-mistakes)
