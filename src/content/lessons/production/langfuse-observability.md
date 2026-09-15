---
title: "Langfuse: the open-source observability platform"
track: "production"
status: live
summary: "Langfuse is the self-hostable LLM observability platform — traces, sessions, prompt management, datasets, experiments, annotation, evaluators, and dashboards — with the full feature set open-sourced."
duration: "9 min read"
sources: ["langfuse-docs"]
---

## The short answer

Langfuse is the open-source answer to LLM observability — the platform you
can run yourself. SDKs (Python/TS, framework integrations for LangChain,
LlamaIndex, OpenAI, Vercel AI SDK) capture **traces** with nested
**observations** grouped into **sessions**; on top of tracing it layers
**prompt management** (versioned prompts you can deploy without a code
change), **datasets** (curated test cases, often built from real traces),
**experiments** (dataset runs against a version), **human annotation**
(score outputs by hand in the UI), **evaluators** (code checks and
LLM-as-judge scoring), and **dashboards**. The differentiator is the
license: MIT for the core, self-hostable via Docker — traces never leave
your infrastructure unless you choose the cloud.

## The feature map

```python
from langfuse import observe, get_client

@observe()                       # decorator → every call becomes a span
def answer(question):
    docs = retrieve(question)    # nested child observations
    return llm_call(question, docs)

lf = get_client()
lf.create_dataset_item(dataset_name="support-golden",
                       input={"q": "..."}, expected_output="...")
```

- **Tracing** — `@observe()` decorators or framework auto-instrumentation
  produce the [trace anatomy](/learn/production/llm-observability-foundations)
  with tokens, latency, model, and cost per span.
- **Prompt management** — prompts live in Langfuse with versions and
  labels; code fetches `get_prompt("name", label="production")`, so prompt
  deploys are config, not releases — with full version history of which
  prompt produced which trace.
- **Datasets + experiments** — curate inputs+expectations (frequently
  promoted from real failing traces), run them against a prompt version
  or model swap, compare scores across experiment runs.
- **Annotation + evaluators** — humans score in the UI; code evaluators
  and LLM-judges score automatically — the two feedback channels that
  feed [evaluator calibration](/learn/evals-red-teaming/llm-judge-bias-and-calibration).
- **Self-hosting** — Docker Compose gets you the full platform; the data
  stays in your Postgres+ClickHouse, which is the answer for
  privacy-bound teams.

## What it adds over logging

The [foundations lesson](/learn/production/llm-observability-foundations)
listed what observability needs to do; Langfuse is the checklist as a
product — the trace is searchable, the prompt is versioned, the failing
production trace is one click from becoming a dataset row, and the
dashboard shows cost/quality over time. Versus the hosted platforms its
edge is deployment freedom and price (self-host = infra cost only);
versus them its cost is *you* run Postgres, ClickHouse, Redis, and
migrations.

## The honest limits

Self-hosting is real ops: it's a multi-service stack, not a pip install,
and upgrades/migrations are yours to run. And like every platform in this
family, Langfuse watches and scores — it doesn't write your rubric, and
it won't tell you when your evaluator is measuring the wrong thing.

## The exercise

Self-host with Docker Compose, trace one decorated call, then promote it
into a dataset row and annotate it — the loop trace→dataset→score is the
product in miniature.

## Go deeper

- [LLM observability foundations](/learn/production/llm-observability-foundations) — the vocabulary Langfuse implements.
- [LangSmith, Phoenix, Weave](/learn/production/langsmith-phoenix-weave) — the hosted/ ecosystem alternatives.
- [Helicone](/learn/production/helicone-gateway-observability) — the gateway-model alternative.
