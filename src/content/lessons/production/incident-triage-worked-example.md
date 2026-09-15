---
title: "Worked Example: Triaging a Production LLM Incident"
track: "production"
status: live
summary: "A 'responses are slow and wrong' page — walked through the telemetry split that found a provider failover sending traffic to an untested model."
duration: "10 min read"
---

The incident was "responses are slow and subtly wrong." This example walks the triage — the telemetry split that localized it, and the control that should have caught it before users did.

## The page

At 14:07 the on-call is paged: p95 latency is up 3× and user reports say answers "feel off." Nothing was deployed. The system didn't change — so what did?

## The triage

**Step 1: split the latency.** Per-request traces split by provider: the primary provider's latency is flat; the fallback provider's latency is 3× baseline. Traffic is routing to the fallback — the first signal that something upstream shifted.

**Step 2: check the failover path.** The primary provider is returning elevated 429s (rate limiting) — the gateway's fallback rule is routing ~40% of traffic to the secondary provider. The failover is working as configured; the fallback path is the problem.

**Step 3: check the model on the fallback.** The fallback provider's configured model is `model-lite` — a smaller, cheaper model chosen for cost, never eval'd for this use case. The "subtly wrong" responses are `model-lite` being less capable — the failover preserved availability but silently degraded quality.

## The root cause

Not a bug — a design gap. The failover rule was written for availability ("if primary fails, use secondary") without a quality gate ("only if the fallback's model meets the quality bar"). The system did exactly what it was configured to do; the configuration was the incident.

## The fix

- **Quality-gated failover** — the fallback path only routes if the secondary's model is on an approved-for-this-feature list; otherwise the error propagates and the page is honest.
- **A failover alert** — traffic shifting to the fallback pages immediately, not discovered via user reports.
- **Eval the fallback path** — the secondary's model is eval'd on the feature's golden set before it's an allowed fallback.

## What the triage teaches

- **"Nothing changed" is never true.** The provider's rate limit changed; the system responded as configured. The invariant is the config, not the code.
- **The failover path is a code path.** An untested fallback is a latent bug — it only runs in the worst case, and that's exactly when it fails.
- **Availability ≠ quality.** A failover that preserves uptime by degrading the model isn't resilience — it's a silent quality regression with a different name.

## The check

For every failover, ask: does the fallback meet the quality bar, and is the failover itself monitored? An unmonitored, ungated fallback is a quiet degradation waiting for a bad day.

**Related:** [Incident simulation lab](/learn/production/incident-simulation-lab), [Production mistakes](/learn/production/production-mistakes), [Provider gateway project](/learn/production/provider-gateway-project)
