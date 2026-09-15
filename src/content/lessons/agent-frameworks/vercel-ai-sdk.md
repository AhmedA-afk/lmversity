---
title: "Vercel AI SDK: streaming, tools, and generative UI"
track: "agent-frameworks"
status: live
summary: "The Vercel AI SDK is TypeScript plumbing for LLM apps — provider-agnostic calls, token streaming into React, tool calling, structured output — the layer below agent frameworks, not a framework itself."
duration: "7 min read"
sources: ["vercel-ai-sdk-docs"]
---

## The short answer

The Vercel AI SDK is the TypeScript **plumbing** layer: a unified
`generateText`/`streamText`/`generateObject` API across providers, React
hooks (`useChat`, `useCompletion`) that stream tokens into UI, tool
calling, and structured output via Zod schemas. It is *not* an agent
framework — it's the transport and UI-binding layer that TS agent code
(including [Mastra](/learn/agent-frameworks/mastra-typescript-agents))
builds on. If your job is "LLM inside a web app," this is usually the right
altitude.

## The surface

```typescript
import { generateText, streamText, generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";

// one call shape across providers — swap @ai-sdk/openai for another package
const { text } = await generateText({
  model: openai("gpt-5"),
  prompt: "Summarize this ticket.",
  tools: { lookupOrder: { parameters: z.object({ id: z.string() }),
    execute: async ({ id }) => db.orders.get(id) } },
});

// structured output — validated by the Zod schema, not regex'd after
const { object } = await generateObject({
  model: openai("gpt-5"),
  schema: z.object({ priority: z.enum(["low","med","high"]), reason: z.string() }),
  prompt: "Triage this ticket: ...",
});
```

- **`streamText` + `useChat`** — server streams tokens/deltas; the React
  hook consumes them into message state. Streaming is the default UX, not
  an afterthought.
- **Tools** — `parameters` as a Zod schema, `execute` as your function;
  the SDK runs the tool loop (`maxSteps`) or hands you the steps.
- **`generateObject`** — structured output against a Zod schema: the TS
  counterpart of [PydanticAI's output_type](/learn/agent-frameworks/pydanticai-typed-agents)
  and the runtime version of
  [schema design](/learn/structured-outputs/schema-design-for-reliability).
- **Generative UI** — streaming *components*, not just text: a tool's
  result can render as a React element mid-conversation (weather card,
  chart), which is where "AI app" stops meaning "chat transcript."

## What it adds over the raw loop

Web plumbing rather than agent structure. The
[raw baseline](/learn/agent-frameworks/raw-sdk-agent-baseline) in a Node
route gives you the loop but no streaming protocol, no React binding, no
provider normalization — the SDK is those three, productionized. What it
doesn't give you: durable execution, multi-agent orchestration, checkpointed
state — that's framework territory (Mastra, LangGraph), one layer up.

## When plain code is enough

Plain code wins for non-web uses — a script, a CLI, a batch job doesn't
need streaming-into-React — and honestly for a single `fetch` to one
provider where SDK weight exceeds utility. Reach for the AI SDK the moment
an LLM call touches a web UI: streaming UX, tool loops, and structured
output are each a solved problem here, and solving them yourself is
re-solving them. It's also the right call when provider flexibility matters
at the *call* level — the swap is a package import, not a rewrite.

## The exercise

Build a route that streams a response with `streamText`, then add one tool
with a Zod schema and `maxSteps` — watching the tool call appear in the
stream mid-response is the piece raw `fetch` doesn't give you.

## Go deeper

- [The raw-SDK baseline](/learn/agent-frameworks/raw-sdk-agent-baseline) — the loop this plumbs into the web.
- [Mastra: the TypeScript agent framework](/learn/agent-frameworks/mastra-typescript-agents) — the framework layer above.
- [Structured outputs](/learn/structured-outputs/cross-provider-landscape) — what `generateObject` normalizes.
