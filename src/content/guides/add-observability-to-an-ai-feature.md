---
title: "Add observability to an AI feature"
description: "Instrument a working AI feature — traces per request, prompt versions, per-user cost, quality signals — with the two-path choice between an LLM observability platform and plain OpenTelemetry."
question: "How do I add observability to my LLM application?"
level: "intermediate"
duration: "30 min"
published: "2026-09-16"
tags: ["Observability", "OpenTelemetry", "Langfuse"]
steps:
  - "Decide what questions the instrumentation must answer"
  - "Choose the two paths: LLM platform or OpenTelemetry"
  - "Instrument the request lifecycle as one trace"
  - "Attach prompt versions and model identifiers"
  - "Emit cost, latency, and quality signals"
  - "Verify the trace answers real questions"
related:
  - "/learn/production/llm-observability-foundations"
  - "/learn/production/langfuse-observability"
  - "/learn/production/instrumenting-one-app-two-ways"
  - "/learn/production/token-and-cost-tracking"
---

An AI feature without observability is a demo: you can't say why it's slow, what it costs per user, which prompt version regressed, or what the model actually saw. This guide instruments a working feature in one sitting.

## 1. The questions first

Instrument to answer: *what did the model see and return* (trace), *what did it cost* (tokens × price per call), *how long did the user wait* (latency breakdown), *which version produced this* (prompt/model IDs), and *was the output any good* (quality signal). Any span or event that doesn't serve one of these is noise you pay to store.

## 2. Pick the path

**LLM observability platforms** (Langfuse, LangSmith, Helicone — the landscape is in [Observability and eval foundations](/learn/production/llm-observability-foundations)) give you LLM-shaped traces, prompt management, and eval hooks out of the box. **OpenTelemetry** gives you vendor-neutral spans the rest of your stack already understands, via the GenAI semantic conventions. The [instrumenting one app two ways](/learn/production/instrumenting-one-app-two-ways) lesson builds the same feature both paths so you can see the difference. Either works; pick per who-else-needs-the-data, not per logo.

## 3. One trace per request

Wrap the whole request lifecycle in a single trace: user input → retrieval → prompt assembly → model call(s) → post-processing → response. Each step is a span with its own latency and metadata. The payoff is the waterfall — you see that 80% of the wait is retrieval, not the model, without guessing.

```ts
// One trace per request; each stage is a child span.
import { trace } from "@opentelemetry/api";

const tracer = trace.getTracer("ai-feature");

export async function answer(req: Request) {
  return tracer.startActiveSpan("ai.request", async (root) => {
    root.setAttribute("app.version", process.env.APP_VERSION);
    try {
      const docs = await tracer.startActiveSpan("retrieve", (s) =>
        retrieve(req).finally(() => s.end()));
      const prompt = assemblePrompt(req, docs);
      const reply = await tracer.startActiveSpan("model.call", (s) => {
        s.setAttribute("llm.model", MODEL_ID);
        s.setAttribute("llm.prompt_version", prompt.version);
        return callModel(prompt).finally(() => s.end());
      });
      root.setAttribute("llm.usage.input_tokens", reply.usage.in);
      root.setAttribute("llm.usage.output_tokens", reply.usage.out);
      return reply;
    } finally {
      root.end();
    }
  });
}
```

## 4. Version everything

Attach to every trace: the model identifier (exact version, not the alias), the prompt/template version, and your app version. When behavior changes and nothing in your code moved, this is how you find out the provider shipped a new snapshot. The discipline doubles as your rollback record — see [Langfuse observability](/learn/production/langfuse-observability) for prompt-version tracking in practice.

## 5. Emit the cost and quality signals

Per call: input/output token counts, computed cost at current pricing, and cache-hit status. Per feature: whatever quality signal you can measure — thumbs feedback, downstream task success, eval scores on logged samples. [Instrumenting token spend](/learn/production/token-and-cost-tracking) covers making the cost side trustworthy — including the per-tenant view once you have more than one customer.

## 6. Verify against real questions

End the work by answering your own questions from the data: the p95 latency and where it goes, yesterday's cost per user, the trace of the last bad output. If the instrumentation can't answer them, instrument the gap — don't declare victory at "data flows."

## Where to go next

Quality signal in place, wire evaluation: [Write your first eval for an AI feature](/guides/write-your-first-eval-for-an-ai-feature) turns logged samples into a regression suite, and the [observability lessons](/learn/production/llm-observability-foundations) cover vendor-neutral tracing depth.
