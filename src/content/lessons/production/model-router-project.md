---
title: "Project: A Model Router by Task, Policy, Latency, and Measured Quality"
track: "production"
status: live
summary: "Build routing that earns its complexity — policy as data, measured quality per task, and a fallback path that doesn't just pick the expensive model."
duration: "25 min read"
---

"Route easy queries to the cheap model" is a sentence; a router is a system. The questions it must answer are empirical — which model is actually good at *this* task class, what does each route cost in latency and dollars, what happens when the cheap model is wrong — and this project builds the machinery that answers them with data instead of vibes.

## The brief

Build a routing layer that classifies each request into a task class, applies a routing policy (task class + latency budget + cost ceiling → model), and records measured quality per route so the policy is tunable on evidence. The router is only justified if it can show, per task class, that the cheap route meets a quality floor — so the quality measurement harness is part of the deliverable, not an afterthought.

## Prerequisites

- [Model routing by task complexity](/learn/production/model-routing-by-task-complexity) — the patterns this implements
- [Token and cost tracking](/learn/production/token-and-cost-tracking) — the economics routing must beat
- [Latency and cost SLOs](/learn/production/latency-and-cost-slos) — the latency constraint in the policy

## Supplied assets and mock mode

Runs fully offline: mock models with scripted latency/cost/quality profiles (a fast-cheap-ok one, a slow-expensive-good one, a flaky one) are a required fixture — the routing *decisions* are what is tested, and mocks make them deterministic. Quality measurement runs against a labeled fixture set: sample requests per task class with the answer that counts as correct.

## Acceptance criteria

- [ ] Requests classify into task classes — the classifier is explicit (rules, a small model, or both) and its accuracy is measured on the fixture set, not assumed
- [ ] Routing policy is data, not code — a versioned config maps (task class, latency budget, cost ceiling) to a model, and a test reloads a policy change without redeploy
- [ ] Quality is measured per route — the eval fixture runs per (task class, model) pair and the report shows the quality/cost/latency trade-off table, not a single winner claim
- [ ] A fallback path exists for classifier uncertainty — low-confidence classification routes to the safe default, and a test proves it
- [ ] The router records route, reason, latency, cost per request — the routing decisions are auditable
- [ ] A "router off" control exists — one flag sends everything to the default model, and the test proves the flag works

## Failure injection (required)

- [ ] The cheap model for a task class degrades (fixture quality drops below floor) — the report shows it and the policy change to reroute is a config edit, tested
- [ ] The chosen model errors — the router falls back up the cascade, and the caller sees one response, not a retry storm
- [ ] The classifier itself fails — requests route to the safe default and the event is logged, never a crash

## Milestones

1. **Classification first** — the task-class taxonomy and its measured accuracy; routing a request you can't classify is guessing.
2. **The policy table** — versioned config; the reload test.
3. **The eval fixture** — per-(class, model) quality numbers; the trade-off table exists.
4. **The fallback path** — classifier uncertainty, model errors, the router-off flag.
5. **The audit record** — route + reason per request; answer "why did this go to the expensive model" from the logs.

## What good looks like

The policy table's diff history is the interesting artifact — each change cites the measured numbers that motivated it. If asked "is the cheap model good enough for task class X," the answer is a number from the eval fixture with a date, not an opinion. If the router can't show it beats a single-model baseline on the cost-quality frontier, the honest output is "don't ship the router yet" — and the harness can prove either answer.

## For your portfolio

Show the trade-off table — (task class × model) → quality, cost, latency — and one policy change it motivated. That demonstrates the measurement habit that separates a router from a random-number generator.

## Defend this build

1. A request took the expensive route — show the audit record: what class was it, what did policy say, was the classification right?
2. Your classifier is 88% accurate on class X — where do the misclassified requests go, and what does that cost?
3. How do you know the cheap model is good enough for class Y — show the fixture and the number.
4. What does "router off" do, and when did you last verify it?

The pass bar: every claim about routing quality cites the eval fixture; every claim about decisions cites the audit record.

**Related:** [Model routing by task complexity](/learn/production/model-routing-by-task-complexity), [Token and cost tracking](/learn/production/token-and-cost-tracking), [Latency and cost SLOs](/learn/production/latency-and-cost-slos), [LLM gateway and provider abstraction](/learn/production/llm-gateway-and-provider-abstraction)
