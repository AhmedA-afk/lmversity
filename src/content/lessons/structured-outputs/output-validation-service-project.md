---
title: "Project: A Model-Output Validation Service"
track: "structured-outputs"
status: live
summary: "Build the layer that stands between model output and your code — parse, validate, repair, route, and count every failure class."
duration: "25 min read"
---

Structured output fails in production in ways tutorials never show: valid JSON with wrong values, truncated objects, refusals that bypass the schema entirely, and repair loops that quietly fabricate data. This project builds the service that owns that boundary — and instruments it so failure classes are visible, not anecdotal.

## The brief

Build a small service that accepts model output plus a schema identifier, and returns one of: `valid`, `repaired`, `refused`, or `failed` — with the failure class recorded per call. It must handle JSON repair for syntactic errors, reject semantic repair, version its schemas, and expose the failure-rate telemetry that catches prompt/schema drift.

## Prerequisites

- [The contract between model and code](/learn/structured-outputs/the-contract-between-model-and-code) — what validation is for
- [Incremental JSON repair explained](/learn/structured-outputs/incremental-json-repair-explained) — the repair mechanics
- [Refusals and partial outputs](/learn/structured-outputs/refusals-and-partial-outputs) — the outputs that are not your schema

## Supplied assets and mock mode

No model calls needed — the service consumes *canned model output* from a fixture directory. Ship a `fixtures/` folder of raw outputs: clean JSON, trailing-comma JSON, truncated JSON, a refusal string, schema-valid-but-wrong output. The service is deterministic and fully testable offline; the model is just a producer of strings.

## Acceptance criteria

- [ ] A deterministic test suite covers every failure class in the fixture set — each fixture has an expected verdict (`valid`/`repaired`/`refused`/`failed`) and the test asserts it
- [ ] Repair handles only syntax: unclosed brackets, trailing commas, stray fences — never fills in missing semantic content
- [ ] Refusals route to their own verdict instead of crashing the schema validator
- [ ] Schemas are versioned — `invoice@v1` and `invoice@v2` coexist, and a call names which it wants
- [ ] Per-class failure counts are emitted as metrics or a queryable log — you can answer "what fraction of calls needed repair this week" from the service's own records
- [ ] A valid-but-semantically-wrong fixture (right shape, impossible value) fails at the semantic-check layer, proving two validation layers exist

## Failure injection (required)

- [ ] Truncated mid-string output — the service detects truncation and refuses to complete the content
- [ ] A repair that would require inventing a field — the service marks it `failed`, not `repaired`
- [ ] A schema version that does not exist — explicit error, not fallback to latest

## Milestones

1. **Parse and validate** — JSON in, schema verdict out, nothing else.
2. **The repair path** — syntactic fixes only, with a test proving semantic content is never fabricated.
3. **The refusal channel** — a first-class variant, tested.
4. **Telemetry** — counters per verdict per schema version; the drift signal this whole service exists to produce.
5. **The residual analysis** — take the fixtures that still fail and classify them by hand; that classification is the design document for v2.

## What good looks like

The service is boring: deterministic, fast, no model calls. The interesting artifact is the failure taxonomy it produces — a dashboard or query showing repair-rate by schema version over time. If you cannot answer "did last week's prompt change break extraction" from the service's own data, the instrumentation milestone is not done.

## For your portfolio

Show the fixture directory and the verdict metrics — they demonstrate you know where model output actually breaks. The parsing code is not the impressive part; the taxonomy is.

## Defend this build

1. A fixture fails — walk the exact path it takes through your service and name where each branch happens.
2. Your repair function sees `{ "name": "Ada", "age":` — what does it return and why?
3. A teammate wants semantic repair ("just fill plausible fields"). What failure does that create, and where in your service is it refused?
4. Which metric would alert first if the provider silently changed output formatting?

The pass bar: answers name the code path and the counter, not the intention.

**Related:** [Diagnosing five real failures](/learn/structured-outputs/diagnosing-five-real-failures), [When not to repair](/learn/structured-outputs/when-not-to-repair), [Monitoring structured output in production](/learn/structured-outputs/monitoring-structured-output-in-production), [Schema versioning and migration](/learn/structured-outputs/schema-versioning-and-migration)
