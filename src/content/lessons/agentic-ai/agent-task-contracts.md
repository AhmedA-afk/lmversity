---
title: "Write a task contract for an agent"
track: "agentic-ai"
status: live
summary: "Define what an agent must produce before it runs — done conditions, scope boundaries, budget limits, and the artifact — so autonomy has a spec, not a vibe."
duration: "9 min read"
---

## The short answer

A task contract is the spec an agent runs against: the deliverable, the done conditions, the boundaries it must not cross, and the budget it burns. "Research competitors" is not a contract; "produce a one-page brief with three cited sources, don't touch the production repo, stop after 20 minutes" is. Agents fail on under-specified tasks in predictable ways — and the contract is where you catch it before the run, not after.

## Why this matters

Without a contract, "done" is whatever the model feels like producing. Agents loop past their usefulness, wander outside the intended scope, or return a plausible artifact that answers the wrong question — and there's no agreed spec to check it against. The contract turns "the agent went rogue" into "the agent violated clause three", which is a debuggable statement.

## The contract fields

Four fields cover most agent tasks:

| Field | The question it answers | Example |
| --- | --- | --- |
| **Deliverable** | What artifact must exist at the end? | "A markdown brief at `docs/competitor-scan.md`, under 500 words" |
| **Done conditions** | How do we know it's finished and correct? | "Three named competitors, each with a cited source; every claim traceable" |
| **Boundaries** | What must it not touch or do? | "Read-only on the repo; no external posts; no purchases" |
| **Budget** | How much can it spend trying? | "Stop after 15 tool calls or 10 minutes, whichever first" |

The deliverable and done conditions are where most contracts are too thin. "Research X" has neither; the agent fills the gap with its own interpretation — and its interpretation is optimized for sounding complete, not being correct.

## What a contract prevents

- **Scope creep** — boundaries stop the agent from "helpfully" editing files, sending messages, or widening the task.
- **Infinite loops** — the budget is a hard stop; a contract without one lets a stuck agent burn tokens forever.
- **Unverifiable output** — done conditions force the artifact to be checkable; "produce a summary" can't be verified, "produce a summary with every claim cited" can.
- **Wrong-task success** — the deliverable pins down *what* is wanted, so a fluent answer to the wrong question fails the contract instead of passing as plausible.

## Writing one

The test for each field: could a reviewer who never saw the run check it? "Did it produce the file? Under 500 words? Three cited sources?" If the answer needs the run's context, the contract is too loose. A contract you can't check is just a prompt with extra words.

## The lab version

Take an agent task you've run — or one you're about to. Write the four fields. Then ask: if the agent returned, could you verify done-ness without watching the trace? If not, tighten the done conditions until you could.

## Go deeper

- [The agent loop](/learn/agentic-ai/the-agent-loop) — the loop the contract constrains.
- [Stopping conditions for agents](/learn/agentic-ai/stopping-conditions-for-agents) — the budget field in detail.
- [Autonomy vs control](/learn/agentic-ai/autonomy-vs-control) — how tight to make the boundaries.
- [Reading an agent's trace](/learn/agentic-ai/evaluating-agent-behavior-in-dev) — verifying a run against its contract after the fact.
