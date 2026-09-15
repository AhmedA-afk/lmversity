---
title: "Capstone: The AI Platform — Gateway, Trace Pipeline, Budgets, Release Controls"
track: "production"
status: live
summary: "The platform-engineer capstone: assemble the four systems that make model-backed products operable — and defend the seams between them."
duration: "30 min read"
---

The earlier capstones built features; this one builds the platform those features run on. A model gateway, a trace pipeline, a cost-budget system, and release controls are each well-understood alone — the platform engineering is in the seams: a release that ships through the gateway, appears in traces, and is bound by a budget. This capstone assembles them.

## The brief

Build the internal platform a product team would build on: (1) a provider gateway normalizing requests, errors, and fallback; (2) a trace pipeline capturing every model call with inputs, outputs, latency, cost, and the request that caused it; (3) a budget system that can cap spend per feature and per caller; (4) release controls — versioned prompts and config, canary deploys, and a rollback lever that works mid-incident.

## Prerequisites

- [Project: provider gateway](/learn/production/provider-gateway-project) — the gateway layer this builds on
- [Tracing multi-step AI pipelines](/learn/production/tracing-multi-step-ai-pipelines) — the trace pipeline design
- [Canary and shadow releases](/learn/production/canary-and-shadow-releases) — the release-control patterns
- [Per-tenant token budgets and quotas](/learn/production/per-tenant-token-budgets-and-quotas) — the budget system design

## Supplied assets and mock mode

Runs fully local: mock providers for the gateway, a local trace store (SQLite/Postgres/ClickHouse — or files), and a budget ledger. No paid APIs needed; the platform's value is the seams, which mocks exercise better than real providers do.

## Acceptance criteria

- [ ] Every model call flows through the gateway — no path exists that bypasses it, and a test attempts a bypass
- [ ] Every gateway call emits a trace — the trace names the feature, caller, provider, model, latency, token counts, and cost; a sample call's trace is inspectable end to end
- [ ] A budget cap can fire — set a per-feature cap, exceed it, and the platform sheds load or degrades honestly, with the event recorded in traces
- [ ] A release is a versioned artifact — a prompt/config change deploys as version N+1, the gateway can split traffic by version, and rollback to N is a lever, not a code edit
- [ ] A canary works — release N+1 to 5% of traffic, compare its traces to N, and promote or roll back on evidence from the trace pipeline
- [ ] An incident drill runs the seams — a bad release detected by a trace-derived metric, mitigated by the rollback lever, with the timeline reconstructable from traces

## Failure injection (required)

- [ ] Release a bad prompt version — the canary's trace metrics catch it before promotion, and rollback restores the old behavior
- [ ] A caller pattern blows a feature budget — the cap fires, the trace shows the shed, and the runbook answers "why did feature X degrade"
- [ ] Provider outage mid-canary — the gateway falls back, the traces show both the canary comparison and the fallback, and the two events are distinguishable

## Milestones

1. **The gateway is the only door** — every call normalized, bypass tested.
2. **Traces answer questions** — "what did this request cost" and "why was it slow" are trace queries, not log greps.
3. **Budgets are real** — a cap that fires, a trace that shows it.
4. **Releases are versioned** — the canary deploy, the metric comparison, the rollback lever.
5. **The drill** — the bad-release incident, worked end to end on the platform's own telemetry.

## What good looks like

A product team shipping a prompt change touches only the release system — the platform carries it through the gateway, measures it in traces, and binds it to a budget. The drill is the proof: an incident worked entirely on the platform's own signals, with the timeline reconstructable afterward. If any seam requires heroics — a manual grep, an undeployable rollback, a budget that can't fire — the platform isn't done.

## For your portfolio

Show the canary trace comparison and the drill timeline — the two artifacts that prove the seams work. The platform's value is operability, and operability is only credible when demonstrated, not described.

## Defend this build

1. Walk a release from config edit to canary verdict — which system made each decision?
2. A feature's budget fired — reconstruct the event from traces: what was shed, what did users see, who was notified?
3. Show a call's full trace — what does it tell you that a log line doesn't?
4. Which seam is weakest — and what is the first thing you'd build to strengthen it?

The pass bar: every answer navigates the platform's own telemetry — the trace, the budget record, the release history — not the architecture diagram.

**Related:** [LLM gateway and provider abstraction](/learn/production/llm-gateway-and-provider-abstraction), [Tracing multi-step AI pipelines](/learn/production/tracing-multi-step-ai-pipelines), [Canary and shadow releases](/learn/production/canary-and-shadow-releases), [Deployment versioning and incidents](/learn/production/deployment-versioning-and-incidents)
