---
title: "LangSmith, Arize Phoenix, Weave: three platforms, three bets"
track: "production"
status: live
summary: "LangSmith, Arize Phoenix, and Weights & Biases Weave cover the same observability vocabulary with different center-of-gravity — ecosystem integration, open-source OTel-native, and ML-platform lineage."
duration: "8 min read"
sources: ["langsmith-docs", "phoenix-docs", "weave-docs"]
---

## The short answer

Three platforms implement the [observability vocabulary](/learn/production/llm-observability-foundations)
with different bets: **LangSmith** is LangChain's sibling platform —
deepest where LangGraph/LangChain runs, hosted-first. **Arize Phoenix**
is open-source and OTel-native — tracing and evals you run yourself, built
on the open standards. **W&B Weave** is Weights & Biases' entry — tracking
and evals inside the ML-experiment platform teams may already pay for.
The vocabulary is shared; the ecosystem fit is the choice.

## The three bets

- **LangSmith** — the LangChain bet: if you build on
  [LangGraph](/learn/agent-frameworks/langgraph-durable-agents) or
  LangChain, instrumentation is nearly free (env vars turn on tracing),
  and LangSmith adds datasets, evaluators, prompt workflows (prompt
  versioning + playgrounds), and annotation queues on top. Hosted SaaS
  primarily; an enterprise self-host option exists at the high tier.
  The honest trade: it's the smoothest experience *inside* the LangChain
  ecosystem and the stickiest dependency — non-LangChain code can still
  use it, but the gravity is obvious.
- **Arize Phoenix** — the open bet: open-source, OpenTelemetry-native,
  runs locally or self-hosted. Traces land in standard OTel shapes (see
  [OTel GenAI conventions](/learn/production/opentelemetry-genai-semantic-conventions)),
  so instrumentation isn't Phoenix-specific — your spans work in any
  OTel backend. Evals and datasets live in the same app. For teams who
  want Langfuse-class openness with standards-body plumbing, Phoenix is
  the sibling answer.
- **W&B Weave** — the platform bet: if your team already tracks ML
  experiments in Weights & Biases, Weave adds LLM tracing and evaluation
  in the same workspace — calls logged with a decorator, scored,
  compared. Its advantage is incumbency: one vendor for classical-ML and
  LLM work. For teams not already on W&B, adopting it *for* observability
  is a bigger ask.

## Choosing between them — and the fourth option

The axes that actually decide: **where your code lives** (LangChain shop →
LangSmith is nearly free; framework-agnostic → Phoenix/Langfuse),
**where your data can live** (self-host narrows to Phoenix or
[Langfuse](/learn/production/langfuse-observability)), and **what you
already pay for** (W&B shops get Weave nearly free). All three cover
traces/datasets/evals/dashboards — the differentiator is fit, not features.

## The honest limits

Every hosted platform here puts your traces — user inputs, model outputs,
sometimes secrets — on vendor infrastructure; that's a data-boundary
decision per the [foundations' operating rules](/learn/production/llm-observability-foundations),
not a footnote. And all three share the family limit: they score and
observe, they don't define "correct" for your task.

## The exercise

Instrument the same app in two of these (or vs Langfuse) — the comparison
is the point: same spans, different ecosystems. If the trace shape barely
changes, that's the OTel standardization working.

## Go deeper

- [LLM observability foundations](/learn/production/llm-observability-foundations) — the shared vocabulary.
- [Langfuse](/learn/production/langfuse-observability) — the self-hostable fourth option.
- [Instrumenting one app two ways](/learn/production/instrumenting-one-app-two-ways) — the hands-on comparison.
