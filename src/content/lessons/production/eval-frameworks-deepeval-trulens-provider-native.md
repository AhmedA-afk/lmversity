---
title: "DeepEval, TruLens, and provider-native evals: the rest of the field"
track: "production"
status: live
summary: "DeepEval's pytest-shaped metrics, TruLens's feedback-function tracing, and the eval tools providers ship themselves — the remaining eval landscape after Promptfoo, Braintrust, and Ragas."
duration: "8 min read"
sources: ["deepeval-docs", "trulens-docs"]
---

## The short answer

The [eval tooling landscape](/learn/evals-red-teaming/eval-tooling-landscape)
covered Promptfoo (CI comparisons), Braintrust (evals+observability), and
Ragas (RAG metrics). Three more families complete the field: **DeepEval**
brings pytest-shaped eval metrics into your test suite; **TruLens** ties
feedback functions to instrumented app traces (the OSS observability-eval
hybrid); and **provider-native evals** — the grading/eval features
providers ship in their own platforms (OpenAI's Evals tooling, Anthropic's
console evals) — cover the case where the eval runner is wherever your
prompt already lives.

## The three shapes

- **DeepEval** — evals as unit tests: `assert_test()` cases run metrics
  (answer relevancy, faithfulness, hallucination, custom G-Eval rubrics)
  inside pytest, so evals live next to code and gate CI like tests.
  Its mental model is "test framework for LLM output," which makes it
  the closest fit for teams who think in pytest.
- **TruLens** — eval tied to instrumentation: wrap your app (LangChain/
  LlamaIndex/custom), TruLens logs the runs, and **feedback functions**
  (provider-graded or custom) score each trace — a feedback-on-traces
  loop where the eval rides the observability. It's the OSS sibling of
  the Braintrust shape, closer to Phoenix in spirit.
- **Provider-native evals** — grading where the model lives: OpenAI's
  eval tooling and Anthropic's console evals run datasets against your
  prompts without leaving the platform. The honest trade: zero
  integration, tight fit to that provider's features (graders, prompt
  workflows) — and results that don't port. For a provider-pinned app
  they're the cheapest start; for anything multi-provider they're a
  silo.

## Where they fit against the earlier landscape

The selector from the [landscape lesson](/learn/evals-red-teaming/eval-tooling-landscape)
extends: pytest-shaped CI gates → DeepEval (or Promptfoo); eval-on-traces
in OSS → TruLens (or Phoenix); RAG metrics → Ragas regardless of runner;
single-provider shop → the provider's own evals might be enough.
The meta-point all of these share, and the [landscape](/learn/evals-red-teaming/eval-tooling-landscape)
stated first: every tool assumes you've already decided what "correct"
means — none of them write your rubric
([golden datasets](/learn/evals-red-teaming/building-a-golden-dataset)).

## The honest limits

Eval libraries proliferate because the metric is easy and the judgment is
hard — adding another metrics package doesn't make your eval measure
better, it makes it measure *more*. And provider-native evals quietly
anchor you: a rubric written against one vendor's grader interface is
migration debt wearing a convenience costume.

## The exercise

Take one eval that already runs in your harness and port it to DeepEval's
pytest form — the exercise is noticing the metric is the same, only the
runner's shape changed.

## Go deeper

- [Eval tooling landscape](/learn/evals-red-teaming/eval-tooling-landscape) — Promptfoo, Braintrust, Ragas covered there.
- [Building a regression suite](/learn/evals-red-teaming/building-a-regression-suite) — what these runners gate.
- [Instrumenting one app two ways](/learn/production/instrumenting-one-app-two-ways) — observability the evals can ride.
