---
title: "Common Mistakes: Shipping AI Features to Production"
track: "production"
status: live
summary: "The eight ways a model-backed feature fails in production — the fallback that wasn't tested, the cost nobody measured, and the prompt that broke at launch."
duration: "8 min read"
---

Production failures are different from demo failures: they're about cost, latency, degradation, and the edge case that only real traffic finds. Each entry names the mistake and the check that catches it.

## 1. A fallback path that was never exercised

**Wrong:** The code has a fallback to a second provider — but it was never tested, and on the first real outage it fails on an unexercised code path.
**Right:** A fallback you haven't run is a fallback you don't have. Test the failover path deliberately — inject the outage, watch the fallback fire, and prove the degraded response is acceptable.

## 2. Cost measured at the end of the month

**Wrong:** The bill arrives and it's 10× what was budgeted — the retry loop or the context blowout was spending all month, and the invoice was the first signal.
**Right:** Track cost per request and per feature in telemetry. A monthly bill is a lagging indicator — the signal you want is the per-request cost trend that alerts before the spend does.

## 3. The prompt that broke on real data

**Wrong:** The prompt worked on the demo inputs — then production data arrives: longer, messier, adversarial — and the carefully-tuned behavior collapses.
**Right:** Eval against the production input distribution, not the demo set. The prompt was tuned to the data you tested; if the real data differs, the behavior differs.

## 4. Streaming that dies silently mid-response

**Wrong:** The provider's stream drops mid-token — the client sees a truncated answer that looks complete, and the user acts on a half-finished response.
**Right:** A stream interruption needs a terminal event the client recognizes — never a silently-truncated response that reads as finished. A cut stream and a complete answer must be distinguishable.

## 5. A retry storm wearing a resilience costume

**Wrong:** On a provider timeout, the client retries immediately — thousands of requests retrying at once, the provider never recovers, and the "resilience" caused the outage.
**Right:** Retries need backoff and a cap. An unbounded retry under load is a self-inflicted denial of service — the circuit breaker exists so the system can stop trying.

## 6. Secrets in the observability pipeline

**Wrong:** The trace pipeline logs every model call — including the API key in the header and the user data in the payload — and the observability store becomes the leak.
**Right:** Redact at the boundary before the trace is written. An observability pipeline that records secrets is a breach that happened quietly and looks like instrumentation.

## 7. A rollback lever that's a code change

**Wrong:** A bad prompt or model version ships — and "rollback" means editing code, rebuilding, and redeploying while the incident is live.
**Right:** Prompts and model versions are config, not code. Rollback is a lever — a version pointer flip — not a deploy. If reverting requires a build, you don't have a rollback.

## 8. Assuming the eval that passed at launch still holds

**Wrong:** The feature shipped, the eval passed, and nobody re-ran it — the model was updated by the provider, the input distribution shifted, and the shipped behavior drifted with nobody watching.
**Right:** A launch eval is a point in time. The model, the inputs, and the provider all drift — the eval needs to be re-run on a schedule, or the launch number is a memory, not a measurement.

## If you take one habit

Instrument before you need it. Every production failure on this list was invisible until it cost money or trust — the metric, the trace, the fallback test all exist so the incident finds you before your users do.

**Related:** [LLM observability foundations](/learn/production/llm-observability-foundations), [Load shedding and graceful degradation](/learn/production/load-shedding-and-graceful-degradation), [Canary and shadow releases](/learn/production/canary-and-shadow-releases), [Incident simulation lab](/learn/production/incident-simulation-lab)
