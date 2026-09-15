---
title: "Mastra: the TypeScript agent framework"
track: "agent-frameworks"
status: live
summary: "Mastra is the TypeScript-native agent framework — agents, typed workflows with suspend/resume, memory, RAG tooling, and evals — for JS/TS backends rather than Python-first stacks."
duration: "7 min read"
sources: ["mastra-docs"]
---

## The short answer

Most agent frameworks assume Python; **Mastra assumes TypeScript**. It's a
JS/TS-native framework with the usual primitives — `Agent`
(model/instructions/tools), `Workflow` (typed step graphs that can suspend
and resume), `Memory`, RAG tooling, and evals — plus a dev server and
deployment paths that fit Node backends and serverless. For a TypeScript
shop, it's the difference between adopting a framework and porting your
stack to adopt one.

## The primitives

```typescript
const agent = new Agent({
  name: "support",
  instructions: "Answer from the docs; escalate billing disputes.",
  model: "openai/gpt-5",
  tools: { searchDocs, createTicket },
});

const workflow = new Workflow({ ... })
  .then(triageStep)
  .then(agentStep);          // agents run as steps in typed graphs
```

- **Agent** — model + instructions + typed tools; speaks to providers
  through the Vercel AI SDK layer, so provider choice stays open (see
  [Vercel AI SDK](/learn/agent-frameworks/vercel-ai-sdk) — the two are
  siblings in the TS ecosystem, SDK vs framework).
- **Workflow** — a typed step graph: steps have input/output schemas,
  control flow is code, and runs can **suspend for human input and
  resume** — the TS answer to LangGraph's durability story, lighter but
  the same instinct.
- **Memory + RAG** — thread/semantic memory and retrieval helpers
  (chunking, embedding, vector-store integrations) are framework
  features, not libraries you assemble.
- **Evals + observability** — built-in eval scorers and tracing, because
  shipping an agent without either is how regressions ship quietly.

## What it adds over the raw loop

An ecosystem match, mostly. The [raw loop](/learn/agent-frameworks/raw-sdk-agent-baseline)
in TypeScript is fine — but every Python-first framework port is a
compromise, and Mastra's is that *you're the native user*: typed
workflows, suspend/resume, memory, and evals designed for a Node service,
with a dev server (Mastra Playground) for inspecting agents and runs.

## When plain code is enough

Plain code wins for edge functions and one-shot LLM calls — a
single-purpose endpoint in a Next.js app needs the Vercel AI SDK's
streaming helpers, not an agent framework (and the two are easy to
confuse: AI SDK is the *streaming/tool-calling plumbing*, Mastra is the
*agent framework above it*). Reach for Mastra when the backend is
TypeScript and you want the framework shape — durable workflows,
multi-agent coordination, built-in memory/evals — without running a
Python service beside your app.

## The exercise

Build the raw-loop agent in TS with the AI SDK, then the same agent in
Mastra with a two-step workflow that suspends for approval — the
suspend/resume is the thing raw code doesn't hand you.

## Go deeper

- [The raw-SDK baseline](/learn/agent-frameworks/raw-sdk-agent-baseline) — the loop Mastra types.
- [Vercel AI SDK](/learn/agent-frameworks/vercel-ai-sdk) — the plumbing layer underneath.
- [Agents vs workflows](/learn/agentic-ai/agents-vs-workflows) — the boundary Workflow formalizes.
