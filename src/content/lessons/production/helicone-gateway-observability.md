---
title: "Helicone: observability at the gateway, not the SDK"
track: "production"
status: live
summary: "Helicone observes LLM traffic by proxying it — requests route through a gateway that logs, caches, rate-limits, and traces — a different architecture from SDK instrumentation with different tradeoffs."
duration: "7 min read"
sources: ["helicone-docs"]
---

## The short answer

Helicone's observability lives in a different place than Langfuse or
LangSmith: it's a **gateway**. Point your OpenAI-compatible base URL at
Helicone's proxy and every request gets logged — no decorators, no SDK
wrapping, no code changes beyond the endpoint and a key. Because the
traffic already flows through it, the gateway can also cache responses,
rate-limit, set per-user budgets, and block by policy — observability
and control at the choke point, not sprinkled through the codebase.

## The two observability architectures

- **SDK instrumentation** (Langfuse, LangSmith, Phoenix): your code emits
  spans — sees everything *your code* knows (function names, business
  context, custom metadata), but every service must integrate it.
- **Gateway proxy** (Helicone): the proxy sees every request/response on
  the wire — sees everything *the API* knows (model, tokens, latency,
  cost), works for any code that hits the endpoint, but only sees the
  call itself, not the spans around it.

They're complementary more than competitors: the gateway catches the
bill and the blast radius; the SDK catches the business logic.

## What the gateway position buys

- **Zero-integration coverage** — a base-URL change instruments legacy
  services, third-party code, and scripts you don't control the source
  of. For an org with LLM calls scattered across codebases, that's the
  whole pitch.
- **Control features ride along** — response caching, rate limits,
  per-user/API-key budgets, and provider failover policies live at the
  same choke point — the
  [LLM gateway pattern](/learn/production/llm-gateway-and-provider-abstraction)
  with observability as the built-in.
- **Provider-neutral logging** — every provider behind the proxy logs
  into one schema; cost tracking across providers is automatic
  ([token and cost tracking](/learn/production/token-and-cost-tracking)).

## The honest tradeoffs

- **All your prompts transit a third party** — hosted Helicone sees every
  request body. For privacy-bound workloads that's the same boundary
  decision as any hosted platform; a self-host option exists and is the
  real answer there.
- **The proxy is in the critical path** — it adds a network hop and a
  dependency; latency and availability of your LLM calls now include
  the gateway.
- **Wire-level only** — the gateway sees the API call, not your
  retrieval step or tool dispatch; for span-level debugging you still
  need SDK instrumentation alongside.

## The exercise

Route one service's OpenAI calls through the gateway and watch the
dashboard populate — tokens, cost, latency — with zero instrumentation
code. Then notice what *isn't* there: the spans before and after the
call, which is the line between gateway and SDK observability.

## Go deeper

- [LLM observability foundations](/learn/production/llm-observability-foundations) — the vocabulary both architectures share.
- [Langfuse](/learn/production/langfuse-observability) — the SDK-side counterpart.
- [Instrumenting one app two ways](/learn/production/instrumenting-one-app-two-ways) — running both architectures on one app.
