---
title: "Project: A Context Management Service With Compaction and Regression Tests"
track: "context-engineering"
status: live
summary: "Build the service that decides what the model sees — assembly, compaction, audit — and the regression suite that catches silent context rot."
duration: "25 min read"
---

Context rot is the failure nobody budgets for: the conversation works at turn 3, subtly wrong at turn 40, and no one can say which information the model actually saw. This project builds the service that owns that boundary — context assembly as a first-class system with a compaction policy and a regression suite that would catch a silent quality drop.

## The brief

Build a context service that, given a conversation state and a token budget, produces the exact model input: a system layer, a pinned-facts layer, a compacted-history layer, and the current turn — each budgeted and each auditable. Compaction must be lossy-*accountable*: what was dropped is recorded, and a regression fixture proves the summary retains the facts a task needs.

## Prerequisites

- [Token budgeting strategies](/learn/context-engineering/token-budgeting-strategies) — what the budget is for
- [Summarization for compaction](/learn/context-engineering/summarization-for-compaction) — the compaction mechanics
- [Context rot](/learn/context-engineering/context-rot) — the failure this prevents

## Supplied assets and mock mode

Runs fully local and deterministic: canned conversation transcripts, a local or scripted summarizer, and a real tokenizer for honest counts. The regression fixture is a set of long transcripts each annotated with *the facts a later query needs* — the suite asserts compaction retains them. No paid API needed; if you use a real summarizer, the tests stub it with a scripted one.

## Acceptance criteria

- [ ] The service exposes `assemble(state, budget) → modelInput` and the output names every layer with its token cost — the input is auditable, not a string
- [ ] Compaction triggers at a stated threshold and the compaction record lists what was dropped and what was pinned — nothing is silently lost
- [ ] A regression suite runs long conversations through compaction and asserts retrieval of the annotated must-keep facts — `pytest` catches a compaction regression without any human reading
- [ ] Ordering rules are enforced by construction — system layer first, tool outputs adjacent to calls — and a test attempts a bad ordering and fails
- [ ] Token accounting is honest: the reported per-layer cost matches a real tokenizer, within a stated margin

## Failure injection (required)

- [ ] A conversation that overflows even the uncompacted budget — the service degrades gracefully (drop lowest-priority layer, log the drop) rather than truncating mid-thought
- [ ] A compaction that drops a must-keep fact — the regression suite fails and the compaction record shows the dropped span
- [ ] A pinned-facts layer exceeding its sub-budget — explicit error identifying the overflow, not silent spill into history budget

## Milestones

1. **Layered assembly** — the four layers, each budgeted, auditable output.
2. **The tokenizer is real** — honest counting before any policy is tuned.
3. **Compaction with a record** — threshold, drops, pins all logged.
4. **The regression fixture** — annotated transcripts; the suite proves must-keep facts survive.
5. **The degradation path** — overflow handling and the mid-thought-truncation test.

## What good looks like

Ask "why did the model answer wrong at turn 38" and the service answers with the assembled input and the compaction record — the answer is inspectable, not theorized. The regression suite is the moat: compaction changes get diffed against must-keep facts before they ship.

## For your portfolio

Show the audit output — the layered input with per-layer token costs — and one regression failure the suite caught. That pair demonstrates the two habits hiring teams actually look for: inspectability and tested quality.

## Defend this build

1. Show the assembled input for a turn-40 request — what did the model actually see?
2. Compaction dropped something a later query needed — where does your suite catch it, and what does the failure look like?
3. Why is pinning facts better than hoping the summarizer keeps them — and what does your record prove?
4. Where would you cut budget first under pressure, and how does the service make that decision inspectable?

The pass bar: answers reference the audit record and the fixture, not summarization theory.

**Related:** [Summarization and compaction](/learn/context-engineering/summarization-for-compaction), [Detecting context degradation](/learn/context-engineering/detecting-context-degradation), [The multi-agent context problem](/learn/context-engineering/multi-agent-context-problem)
