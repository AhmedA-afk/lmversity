---
title: "Production Cheatsheet"
track: "production"
status: live
summary: "The production decision table — which layer owns which concern, and the telemetry that answers 'why is this slow / expensive / wrong.'"
duration: "6 min read"
---

The production track compressed to the layer that owns each concern and the signal that catches each failure.

## Which layer owns which concern

| Concern | Layer | The failure if it lives elsewhere |
|---|---|---|
| Request normalization | The gateway | Provider lock-in in every call site |
| Error vocabulary | The gateway | Each provider's errors leaking into app logic |
| Fallback / failover | The gateway | A provider outage becoming a product outage |
| Rate limiting / budgets | The gateway + budget system | A retry loop or runaway context spending silently |
| Prompt/model versioning | The release system | A rollback that's a code deploy |
| Canary / shadow | The release system | A bad version discovered by users |
| Traces / metrics | The observability pipeline | An incident reconstructed from memory |
| Redaction | The observability boundary | Secrets in the trace store |

## The telemetry that answers the question

- **"Why is this slow?"** → per-call latency split by provider / model / feature; the trace, not the log line.
- **"Why is this expensive?"** → per-request token count and per-feature spend; the budget record, not the invoice.
- **"Why did this fail?"** → the normalized error class + the provider's raw detail; the gateway record, not the 500.
- **"Did the release break it?"** → canary traces vs baseline, per dimension; the version comparison, not the support ticket.

## The controls that must exist before launch

- **A tested fallback** — the failover path exercised, not just written.
- **A cost ceiling** — per-feature, and it can actually fire.
- **A rollback lever** — version pointer, not a rebuild.
- **A kill switch** — one flag that takes the feature down without a deploy.
- **A redacted trace** — the observability pipeline that doesn't record secrets.

## The failure modes in one line each

- **Untested fallback** — the failover path fails on first real use.
- **Cost discovered at invoice** — the runaway was spending all month.
- **Stream truncation read as complete** — a dropped stream passed off as a finished answer.
- **Retry storm** — the resilience mechanism became the load.
- **Rollback = redeploy** — reverting a bad prompt means a build while the incident is live.

## Which lesson for which question

- "How do I normalize providers?" → [Provider gateway project](/learn/production/provider-gateway-project)
- "How do I catch a bad release?" → [Canary and shadow releases](/learn/production/canary-and-shadow-releases)
- "How do I see what it's doing?" → [LLM observability foundations](/learn/production/llm-observability-foundations)
- "How do I rehearse an incident?" → [Incident simulation lab](/learn/production/incident-simulation-lab)

**Related:** [Production mistakes](/learn/production/production-mistakes), [Platform engineer capstone](/learn/production/platform-engineer-capstone), [Production practice](/practice/production)
