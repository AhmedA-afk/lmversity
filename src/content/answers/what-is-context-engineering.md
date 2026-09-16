---
title: "What is context engineering?"
description: "Context engineering is designing everything an AI model sees — instructions, retrieved docs, history, tool results — so the right information is in the window at the right time."
intent: definition
updated: "2026-09-16"
featured: true
faq:
  - q: "Is context engineering just RAG?"
    a: "RAG is one tool inside it. Retrieval fills the window with relevant documents; context engineering is the whole job — what goes in, in what order, at what token cost, what gets compacted or dropped, and how you know the window helped instead of hurt. A system can have perfect retrieval and still fail from a bloated, stale, or mis-ordered context."
  - q: "Why not just use a bigger context window?"
    a: "Because a bigger window makes context engineering matter more, not less. Everything in the window costs tokens (money and latency), competes for the model's attention, and can carry stale or injected content. Models also use long contexts unevenly — relevant facts in the middle of a huge window get used worse than relevant facts up front. Filling the window is easy; filling it with what helps is the discipline."
  - q: "What are the main context engineering techniques?"
    a: "The recurring set: retrieval to pull in relevant material at query time; compaction and summarization to keep long histories affordable; just-in-time loading to fetch detail only when needed; budgeting so every token earns its place; and observation (measuring what actually fills the window) so you know which of those is working. Cache-aware design matters too — a stable prefix can be cached and priced cheaper."
  - q: "How is context engineering different from prompt engineering?"
    a: "Prompt engineering writes the fixed instruction — the task and the output contract. Context engineering manages the variable part — everything that flows into the window per request: retrieved docs, history, tool results, memory. In production, the instruction is rarely the failing part; the context is."
related:
  - /learn/context-engineering
  - /learn/context-engineering/context-engineering-vocabulary
  - /learn/context-engineering/context-window-anatomy
  - /learn/context-engineering/measuring-what-fills-the-window
  - /answers/prompt-engineering-vs-context-engineering
  - /answers/what-is-rag
---

Context engineering is designing and managing everything a model sees when it generates an answer — the system instructions, the retrieved documents, the conversation history, the tool results, the memory — so the window contains what helps and not what doesn't. It is the discipline that appeared once the bottleneck moved from "how do I phrase the instruction" to "what should the model be looking at right now."

## The short version

- The context window is the model's working memory — everything it can consider at once, priced per token.
- Most production failures are context failures: the right document wasn't retrieved, the history grew stale, or a tool result crowded out the instruction.
- The core skills: retrieve what matters, budget what fits, compact what accumulates, and measure what actually filled the window.
- A bigger window raises the stakes — more tokens means more cost, more noise, and more places for the wrong thing to sit.
- Context engineering subsumes RAG; retrieval is how context gets *in*, not what you do with it once it is there.

## Why it became its own discipline

Early chatbot work treated the prompt as the whole lever — the context was a single user message. Real systems changed that: a support agent sees the ticket, the customer's history, retrieved policy docs, and the last tool call's output all at once. When those systems fail, the autopsy is almost never "the instruction was poorly worded" — it is that the model was looking at the wrong thing. The retrieved doc was outdated. The summarized history dropped the one fact that mattered. Ten tool results buried the answer. Context engineering is the set of decisions that prevents that: selection, ordering, budget, freshness, and verification.

## What the work actually looks like

In practice it is a budget under pressure. Every request assembles a window from competing parts — instructions, history, retrieval, tool output — and each part costs tokens, latency, and attention. The engineering is in the policy: what gets included unconditionally, what gets retrieved just-in-time, what gets compacted when the window fills, what gets dropped entirely, and what gets cached because it never changes. Then the unglamorous half: instrumenting the pipeline so you can answer "what did the model actually see when it gave that answer" — the question every production incident asks.

## Where it sits relative to RAG and prompting

RAG is the best-known context technique and also the most over-applied — retrieval fills the window, but deciding *whether* to retrieve, *what* to retrieve, and *how much* is the engineering. Prompt engineering still matters, but it governs the stable frame; context engineering governs everything that flows through it. The two compound: a precisely-worded instruction fed garbage context still produces garbage.

## Learn it properly

The [context engineering track](/learn/context-engineering) builds it in order — window anatomy, budgets, retrieval patterns, compaction, caching, and observability — with the failure modes alongside each technique. If you came here from "prompt engineering vs context engineering," that [answer](/answers/prompt-engineering-vs-context-engineering) draws the boundary precisely.
