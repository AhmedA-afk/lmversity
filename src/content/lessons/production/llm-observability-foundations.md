---
title: "LLM observability: the vocabulary every platform shares"
track: "production"
status: live
summary: "Traces, spans, observations, sessions, prompt versions, datasets, experiments, evaluators, and dashboards — the shared vocabulary of LLM observability platforms, plus the operating rules that keep traces safe."
duration: "9 min read"
sources: ["openllmetry-repo"]
---

## The short answer

Every observability platform in this space — Langfuse, LangSmith, Phoenix,
Weave, Helicone, Braintrust — speaks the same vocabulary, and learning it
once makes every vendor page legible: a **trace** is one end-to-end request
through your system; **spans/observations** are the nested steps inside it
(LLM calls, tool calls, retrievals); a **session** groups related traces;
**prompt versions** pin the prompt that produced a trace; **datasets** are
curated inputs+expectations for evals; **experiments** run a dataset
against a version; **evaluators** score outputs (code checks or
LLM-as-judge); **dashboards** aggregate it all into cost/latency/quality
signals. The platforms differ in packaging, not vocabulary.

## The trace anatomy

```
trace: "answer support ticket #4821"
├── span: retrieve_docs        (tool call, 180ms)
├── span: draft_response       (chat gpt-5, 2.1s, 1400→180 tokens)
├── span: check_policy         (chat gpt-5-mini, 0.8s)
└── span: send_reply           (tool call)
```

That nesting is what debugging an agent needs that logs can't give:
*which* step burned the tokens, *which* retrieval fed the wrong answer,
*where* the latency went. The [OTel GenAI conventions](/learn/production/opentelemetry-genai-semantic-conventions)
standardize the attribute names so this shape survives a vendor swap.

**Who writes the spans?** You don't have to instrument by hand —
**OpenLLMetry** (Traceloop's open-source project) ships OTel
auto-instrumentation for the OpenAI/Anthropic/LangChain/LlamaIndex
libraries: wrap the app once and LLM calls emit conventional OTel spans
that land in *any* OTel-compatible backend — Phoenix, Jaeger, your own
collector. That's the architectural point: the conventions standardize
the shape, auto-instrumentation standardizes the capture, and the backend
becomes swappable.

## Where prompts, datasets, and evals attach

Observability isn't only watching — the same platforms close the loop:
a trace becomes a **dataset** row (real production input + expected
behavior), a dataset drives an **experiment** (run the new prompt/model
against it), an **evaluator** scores results (deterministic checks where
possible, LLM-judges where not — see
[datasets, rubrics, and judges](/learn/evals-red-teaming/datasets-rubrics-and-judges)),
and a **prompt version** links every trace to the exact prompt that made
it — so "the quality drop started Tuesday" becomes a diffable artifact,
not a guess.

## The operating rules

The part vendor landing pages skip — the conventions that keep tracing
from becoming a liability:

- **Redact before you ship** — traces carry user data and secrets by
  default. Scrub PII and credentials at instrumentation time, not in a
  cleanup job later ([PII redaction](/learn/production/pii-redaction-in-llm-logs)).
- **Sample deliberately** — 100% tracing on high volume is a bill and a
  storage problem; head-sampling for volume + always-trace for errors and
  flagged sessions is the usual compromise.
- **Set retention by data class** — traces with user content need a
  retention policy and a deletion path, like any user data
  ([retention policy](/learn/production/data-retention-and-privacy-policy)).
- **Separate environments** — dev/staging/prod traces in separate
  projects; a prompt experiment should never touch prod data.
- **Calibrate evaluators** — an LLM judge is a model with its own biases;
  spot-check it against human labels on a sample before trusting its
  scores ([judge calibration](/learn/evals-red-teaming/llm-judge-bias-and-calibration)).
- **Close the feedback loop** — a trace that can't become a dataset row
  is half the value; production-failure → dataset → regression-gate is
  the loop that makes observability pay ([regression testing](/learn/evals-red-teaming/building-a-regression-suite)).

## The exercise

Instrument one LLM call and open the trace: find the input/output tokens,
the latency, the prompt that produced it. That legibility — one request
as a structured artifact — is the thing every platform in the next
lessons builds on.

## Go deeper

- [Tracing multi-step AI pipelines](/learn/production/tracing-multi-step-ai-pipelines) — the span model in depth.
- [OTel GenAI semantic conventions](/learn/production/opentelemetry-genai-semantic-conventions) — the vendor-neutral attribute schema.
- [Langfuse](/learn/production/langfuse-observability) — the open-source platform built on this vocabulary.
