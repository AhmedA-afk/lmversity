---
title: "What is a context window (in an LLM)?"
description: "An LLM's context window is the fixed amount of text it can consider at once — instructions, documents, and history all compete for the same limited space."
intent: definition
updated: "2026-09-16"
featured: false
faq:
  - q: "What happens when text exceeds the context window?"
    a: "The oldest or lowest-priority content has to leave — by truncation, summarization, or a system error. Nothing in the model reminds you it happened; the model simply answers as if the dropped text never existed. That is why production systems track token counts and decide deliberately what to drop rather than letting the platform truncate silently."
  - q: "Is a bigger context window always better?"
    a: "Not automatically. Bigger windows cost more per call (every input token is billed and adds latency), give irrelevant content more room to distract the model, and are used unevenly — models reliably use the start and end of a long window better than the middle. A window bigger than your real need buys you cost and noise, not capability."
  - q: "Does the context window include the model's answer?"
    a: "Yes — output tokens count against the same budget on most APIs. A window advertised as 200K tokens has to hold your input *and* leave room for the reply, which is why prompts that fill the window to the brim produce truncated or degraded answers."
  - q: "Is the context window the same as the model's memory?"
    a: "Only in the moment. The window is working memory — it exists for one call and is gone when the call ends. Anything resembling long-term memory (remembering a user across sessions, learned facts) is a system built around the model that writes things down and reloads them into the window later."
related:
  - /learn/context-engineering/context-window-anatomy
  - /learn/context-engineering/context-window-as-working-memory
  - /learn/context-engineering/measuring-what-fills-the-window
  - /learn/context-engineering/million-token-window-strategies
  - /learn/llm-foundations
  - /answers/what-is-context-engineering
---

A context window is the maximum amount of text — measured in tokens — that a language model can take into account when producing its next piece of output. Everything the model "knows" about your request has to fit inside it: the instructions, the documents you supplied, the conversation so far, and the answer it is in the middle of writing.

## The short version

- It is a hard budget: whatever does not fit is invisible to the model, as if it was never sent.
- Everything shares the space — system prompt, retrieved docs, chat history, tool output, and the model's own reply.
- It is per-call working memory, not permanent storage — nothing persists between calls unless your system puts it back in.
- Filling it is not free: every input token costs money and latency, and content in the middle of a stuffed window is used less reliably.
- The engineering question is never "how big is the window" but "what earned its place in it."

## Why it matters more than the spec sheet suggests

Model announcements lead with window size — 200K, 1M tokens — but the number describes capacity, not reliability. Two things get lost in the marketing: attention and cost. Models do not read a million tokens the way a person reads a page; relevant facts buried in the middle of a very long window are picked up less consistently than facts near the start or end. And every token in the window is billed input, so "just paste the whole codebase in" is a real invoice line, not a free lunch.

## What actually lives in the window

On a real application call, the window is assembled from parts that compete with each other: the system or developer instructions that set durable behavior; whatever was retrieved for this request; the conversation history or a summary of it; tool definitions and their latest results; the user's message; and headroom for the output. When a production system misbehaves, the diagnosis usually starts by reconstructing exactly which of those parts occupied the window at the moment of the bad answer — and which ones silently didn't make it in.

## Where to go deeper

The mechanics — tokens, positions, and what actually happens at the boundary — are in [context window anatomy](/learn/context-engineering/context-window-anatomy). Treating the window as a managed resource rather than a spec number is the heart of [context engineering](/learn/context-engineering) as a whole.
