---
title: "Lab: Production Incident Simulation With an On-Call Runbook"
track: "production"
status: live
summary: "Break a model-backed service on purpose, then page yourself — detect it, triage it, write the runbook that would have saved you."
duration: "20 min read"
---

The only incident response that works at 3 AM is the one you rehearsed at 3 PM. This lab injects real failures into a running model-backed service — provider outage, silent quality regression, cost runaway — and makes you work them with telemetry and a runbook, then finish by writing the runbook you wished you had.

## The brief

Take any model-backed service (one you built, or the mock one supplied below) and run three incident scenarios end to end: detection → triage → mitigation → post-incident note. The deliverable is not "fixed it" — it is the runbook entry each scenario produces, written while the telemetry is still open.

## Prerequisites

- [LLM observability foundations](/learn/production/llm-observability-foundations) — what the telemetry is for
- [Latency and cost SLOs](/learn/production/latency-and-cost-slos) — when to page
- [Load shedding and graceful degradation](/learn/production/load-shedding-and-graceful-degradation) — the mitigation tools

## Supplied assets and mock mode

Any service with a model call works — a mock model endpoint is fine and makes the scenarios deterministic. If you have no service, build a minimal one: an HTTP endpoint that calls a scripted "model" you can make fail on demand. The point is the response process, not the service's sophistication.

## Scenario 1: provider outage

- [ ] Inject: the model endpoint returns 503s for 10 minutes
- [ ] Detect from telemetry (error-rate alert or SLO burn), not from a user report — write down which metric fired first
- [ ] Mitigate: fallback path, circuit breaker, or honest degradation — and record what the user actually saw during the window
- [ ] Runbook entry: "provider X down" → first check, mitigation flag, escalation contact, expected user experience

## Scenario 2: silent quality regression

- [ ] Inject: the model endpoint starts returning subtly wrong outputs (a scripted degradation — e.g. ignores the system prompt's format requirement)
- [ ] Detect: which signal catches this — an output-validation failure rate, an eval canary, a user report? If nothing catches it, that *is* the finding
- [ ] Mitigate: roll back the prompt/model version or route around it; record the detection gap explicitly
- [ ] Runbook entry: "output quality dropped" → the validation metric to check, the rollback lever, the eval to rerun

## Scenario 3: cost runaway

- [ ] Inject: a retry loop or a context blowout — a caller pattern that multiplies token spend 10× without erroring
- [ ] Detect: which cost telemetry shows it, and how fast? A monthly bill is not detection
- [ ] Mitigate: the kill switch or budget cap, applied and verified
- [ ] Runbook entry: "spend anomaly" → the alert threshold, the per-caller cost query, the cap lever

## Acceptance criteria

- [ ] All three scenarios ran against the service, not just written about
- [ ] Each scenario produced a runbook entry with: detection signal, triage steps, mitigation lever, expected user experience — specific enough that a stranger could follow it
- [ ] At least one detection gap was found and named — the scenarios exist to expose them
- [ ] A post-incident note for each: timeline, what the telemetry showed, what it didn't, one prevention item

## What good looks like

The runbook is real — each entry has a checkable first step and a named lever, not "investigate and fix." The most valuable artifact is the detection gap you found: the scenario where your telemetry was blind is the next thing to instrument, and now it's written down.

## For your portfolio

Show one runbook entry and the post-incident note that produced it — the artifact that proves you think in detection → mitigation → prevention, not just "fix it fast." Never present the outage itself as the achievement.

## Defend this build

1. Walk scenario 2 — what metric caught it, and how long was the blind window?
2. In scenario 1, what did users actually see during the mitigation gap?
3. Which scenario's runbook entry is weakest, and what telemetry would strengthen it?
4. What did you change after the scenarios — name the prevention item you'd ship first.

The pass bar: answers cite the telemetry field and the runbook step, not the concept of incident response.

**Related:** [LLM observability foundations](/learn/production/llm-observability-foundations), [Load shedding and graceful degradation](/learn/production/load-shedding-and-graceful-degradation), [Latency and cost SLOs](/learn/production/latency-and-cost-slos)
