---
title: "Project: A Provider Gateway — Normalized Requests, Errors, Streaming, Fallback"
track: "production"
status: live
summary: "Build the layer that decouples your app from any one model provider — one request format, one error vocabulary, streaming that survives failure."
duration: "25 min read"
---

Provider lock-in is invisible until an outage, a deprecation, or a price change forces the question. The gateway is where that coupling gets cut: your app speaks one protocol, the gateway translates to N providers, and a provider failure becomes a fallback event instead of a product outage. This project builds that layer.

## The brief

Build a gateway service that accepts requests in a provider-neutral format and routes them to one of several model backends: normalize the request, translate to provider API, normalize the response and every error back, stream incrementally, and fall back to a second provider on specified failure classes — with the fallback visible in telemetry, not hidden.

## Prerequisites

- [LLM gateway and provider abstraction](/learn/production/llm-gateway-and-provider-abstraction) — the design this implements
- [Rate limiting LLM apps](/learn/production/rate-limiting-llm-apps) — the failure classes the gateway normalizes
- [Multi-provider failover and redundancy](/learn/production/multi-provider-failover-and-redundancy) — the failover contract

## Supplied assets and mock mode

Fully testable without a real provider: the gateway's provider adapters take a `call()` interface, and tests run against scripted mock providers (a fast one, a slow one, a failing one). That mock set is a required deliverable — a gateway you can only test against real APIs is a gateway you cannot test. If you wire real providers, key handling goes through env config and no key appears in tests.

## Acceptance criteria

- [ ] One request schema serves every provider — the app never sees provider-specific fields
- [ ] One error vocabulary across providers — rate-limit, auth, timeout, provider-error, bad-request each map to a canonical class with the provider's raw detail attached, not flattened away
- [ ] Streaming is incremental and interruption-safe — a mid-stream provider error emits a terminal error event, never a silently truncated stream
- [ ] Fallback triggers on defined classes only (timeout, 5xx, rate-limit) and never on client errors (bad request, auth) — a test proves the trigger set
- [ ] Telemetry records provider, latency, retries, and which provider served — you can answer "what fraction of requests fell back this week" from the gateway's own logs
- [ ] A deterministic test suite runs the whole matrix: each mock provider × each failure class × expected normalized outcome

## Failure injection (required)

- [ ] Provider A times out mid-stream — the stream emits the error event and, if policy allows, the fallback provider's stream continues from a resumable point or restarts with a marker
- [ ] Provider A returns malformed JSON — normalized to `provider-error` with raw payload preserved for the incident review
- [ ] Both providers fail — the error is the *primary* provider's class, and the log shows both attempts; callers get one honest error, not a fallback-loop ambiguity

## Milestones

1. **One provider, normalized** — the neutral schema in, the normalized response out.
2. **The error vocabulary** — the canonical classes and the mapping table that produces them.
3. **Streaming done right** — incremental chunks, the terminal-error event, no silent truncation.
4. **Fallback with a trigger set** — the test that proves client errors never fall back.
5. **The telemetry layer** — provider-served, retries, fallback rate: the numbers that make the gateway operable.

## What good looks like

An outage in provider A shows up as a fallback-rate spike on a dashboard, not a support ticket. The test suite runs against mocks in seconds and covers the failure matrix — the real providers are for integration smoke tests, not correctness. The fallback policy is a config file, versioned like code.

## For your portfolio

Show the mock-provider test matrix — it proves you understand where provider boundaries actually break. The fallback-trigger table is the second artifact: knowing which errors should *not* retry is a production instinct.

## Defend this build

1. A request fell back — trace it through the logs: what class triggered, what did the caller see, what did each provider record?
2. Why does a 400 never fall back — and what test proves that rule?
3. A provider stream dies mid-response — what does your client see, and what does your log record?
4. What does the gateway cost in added latency, and where is that budget spent?

The pass bar: answers name the normalized class, the log field, and the test — not the concept of abstraction.

**Related:** [LLM gateway and provider abstraction](/learn/production/llm-gateway-and-provider-abstraction), [Latency and cost SLOs](/learn/production/latency-and-cost-slos), [Multi-provider failover and redundancy](/learn/production/multi-provider-failover-and-redundancy)
