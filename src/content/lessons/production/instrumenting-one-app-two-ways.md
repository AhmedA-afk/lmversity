---
title: "Lab: instrument one app with two observability paths"
track: "production"
status: live
summary: "One small app instrumented through SDK tracing and a gateway proxy — the hands-on comparison that shows what each observability architecture sees, misses, and costs."
duration: "10 min read"
sources: ["langfuse-docs", "helicone-docs"]
---

## The short answer

The observability lessons name two architectures — SDK instrumentation
([Langfuse](/learn/production/langfuse-observability)-style) and gateway
proxy ([Helicone](/learn/production/helicone-gateway-observability)-style).
This lab runs both on one app: a three-step pipeline (retrieve → draft →
policy-check) instrumented with a tracing SDK *and* routed through a
gateway. The point is seeing the same request from both altitudes —
and noticing what each can't see.

## The app

```python
def answer(question):
    docs = retrieve(question)          # step 1: retrieval
    draft = llm.call(DRAFT_PROMPT, question, docs)   # step 2
    checked = llm.call(POLICY_PROMPT, draft)         # step 3
    return checked
```

Two LLM calls and a retrieval — enough structure that "which step cost
what" is a real question.

## Path 1: SDK instrumentation

Decorate the pipeline so each step becomes a span:

```python
from langfuse import observe

@observe()
def answer(question): ...

@observe(name="retrieve")
def retrieve(q): ...
```

What the trace shows: the full call tree — `answer` → `retrieve` +
two `chat` spans — with per-span latency, token counts, and your custom
metadata. What it misses: nothing about the *business logic*, but it only
covers code you instrumented — a call made by an uninstrumented script
is invisible.

## Path 2: gateway proxy

Point the LLM client at the gateway — no code changes beyond the
endpoint:

```python
client = OpenAI(base_url="https://gateway.example/v1",
                default_headers={"Helicone-Auth": "Bearer ..."})
```

What the dashboard shows: both `chat` calls with tokens, cost, latency,
model — every request on the wire, including ones from code you never
touched. What it misses: `retrieve` isn't an LLM call, so it doesn't
exist to the gateway; the two `chat` spans arrive as separate requests
with no trace linking them unless you add correlation headers.

## The comparison that matters

| | SDK trace | Gateway |
|---|---|---|
| Sees LLM calls | Only in instrumented code | All, including uninstrumented |
| Sees non-LLM steps | Yes — retrieval, tools, logic | No |
| Links steps into traces | Native | Needs correlation headers |
| Cost/budget/rate-limit control | No | At the choke point |
| Setup cost | Per-service integration | One base-URL change |
| Data boundary | Your backend (self-hostable) | Prompts transit the proxy (or self-host) |

The conclusion most production systems reach: **the architectures are
complementary** — gateway for the bill, the blast radius, and
uninstrumented coverage; SDK for the business logic and step-level
debugging. Teams that treat it as either/or end up blind in one layer.

## The exercise

Run the app once with both paths live, then answer from each: "which
step used the most tokens?" (SDK answers; gateway can't see `retrieve`)
and "what did the account spend this hour?" (gateway answers; the SDK
has no account view). Two questions, two altitudes — that's the whole
lesson.

## Go deeper

- [LLM observability foundations](/learn/production/llm-observability-foundations) — the shared vocabulary.
- [Helicone](/learn/production/helicone-gateway-observability) — the gateway architecture.
- [Langfuse](/learn/production/langfuse-observability) — the SDK architecture.
- [LangSmith, Phoenix, Weave](/learn/production/langsmith-phoenix-weave) — the platform alternatives.
