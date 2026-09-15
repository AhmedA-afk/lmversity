---
title: "Worked Example: Where a 128k Context Window Actually Went"
track: "context-engineering"
status: live
summary: "One real conversation's token budget itemized — the system prompt, the tool outputs, the history — and the compaction decision the numbers force."
duration: "10 min read"
---

Context budgets fail invisibly: the conversation works until it doesn't, and nobody knows which layer ate the window. This example itemizes a real 40-turn agent run and forces the compaction decision the numbers demand.

## The setup

A coding agent on a 128k-token model. At turn 40 the responses have gone subtly wrong — ignoring a constraint set in the system prompt, repeating a decision already made. The model isn't broken; the context is. Where did 128k tokens go?

## The itemization

| Layer | Content | Tokens |
|---|---|---|
| System prompt | Instructions, persona, tool descriptions | 3,200 |
| Tool schemas | 14 tools, full JSON schemas | 8,400 |
| Conversation history | 40 turns of user/assistant | 22,000 |
| Tool outputs | 38 calls — file contents, search results, error traces | 71,000 |
| Retrieved context | RAG-fetched code snippets | 18,000 |
| **Total** | | **122,600** |

The window is 95% full — and the tool outputs alone are 58% of it. The constraint the model is "ignoring" is in the system prompt — still present, but drowned under 71k tokens of tool output the model has stopped attending to.

## The decision the numbers force

The problem isn't "the context is full" — it's that 71k of it is tool output that was useful once and isn't now. The fix isn't a bigger window; it's a compaction policy on the layer that's actually consuming the budget:

- **Tool outputs** — truncate to a summary after the turn they're used: the first 200 lines of a file read, not all 4,000.
- **History** — compact turns older than ~10 into a running summary; the recent turns stay verbatim.
- **Retrieved context** — pin only the snippets still relevant; drop the ones from earlier sub-tasks.

Applying just the tool-output truncation: 71k → ~14k. The window drops to 66k — the system prompt's constraint is now a real signal again, and the "context rot" disappears.

## What the itemization teaches

- **The budget is a budget.** "128k" isn't capacity — it's a fixed allocation across layers, and the biggest consumer decides where to cut.
- **Tool output is the silent hog.** It accumulates faster than conversation and is the least useful once its turn has passed.
- **Compaction is targeted, not global.** You compact the layer that's consuming the budget, not "the context" — the numbers tell you which.

## The check

Itemize the window before tuning it. The fix is always specific — "truncate tool outputs past 200 lines," not "manage context better" — and you only know which layer to cut when the numbers show which one ate the budget.

**Related:** [Context management service project](/learn/context-engineering/context-management-service-project), [Detecting context degradation](/learn/context-engineering/detecting-context-degradation), [Token budgeting strategies](/learn/context-engineering/token-budgeting-strategies)
