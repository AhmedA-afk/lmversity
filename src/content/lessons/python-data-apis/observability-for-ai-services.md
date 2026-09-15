---
title: "Add observability to a Python AI service"
track: "python-data-apis"
status: live
summary: "Instrument a Python service that calls a model with structured logs, traces, and metrics — so a bad answer is debuggable from data, not from a user complaint."
duration: "4 min read"
---

## The short answer

A Python service that calls a model needs three kinds of instrumentation:
structured logs that record what was sent and returned, traces that show where
latency went, and metrics that aggregate error rates and costs over time.
Without them, "the model gave a bad answer" is undebuggable — you can't tell a
retrieval failure from a rate limit from a prompt regression. The standard
library's `logging` plus an OpenTelemetry SDK covers all three.

## What to record per model call

Every model call should emit one structured log record with, at minimum: a
request ID, the model and provider called, token counts in and out, latency,
status, and — if anything failed — the error class. The request ID is the
load-bearing field: it ties the log line to the trace span and to the
conversation a user is complaining about.

```python
import logging, time, uuid

log = logging.getLogger("ai.calls")

def call_model(prompt: str) -> str:
    rid = uuid.uuid4().hex[:12]
    t0 = time.monotonic()
    try:
        resp = client.chat(prompt)
        log.info("model_call", extra={
            "request_id": rid, "model": MODEL, "status": "ok",
            "latency_ms": int((time.monotonic() - t0) * 1000),
            "tokens_in": resp.usage_in, "tokens_out": resp.usage_out,
        })
        return resp.text
    except Exception as e:
        log.warning("model_call", extra={
            "request_id": rid, "model": MODEL, "status": "error",
            "error_class": type(e).__name__,
            "latency_ms": int((time.monotonic() - t0) * 1000),
        })
        raise
```

Two rules that prevent the common mistakes: log structured fields (`extra={}`)
rather than interpolating values into the message string, and never log raw
prompt or completion content by default — it carries user data into your log
pipeline; see [PII redaction in LLM logs](/learn/production/pii-redaction-in-llm-logs)
for the handling.

## Traces show where the time went

A single AI feature call usually fans out — input validation, retrieval, the
model call, output parsing. A trace with one span per step shows the
distribution instead of the average: is the p95 tail the model or your
parsing? OpenTelemetry's Python SDK instruments this with decorators or
context managers, and the GenAI semantic conventions standardize attribute
names for model calls — covered in
[OpenTelemetry GenAI conventions](/learn/production/opentelemetry-genai-semantic-conventions).

## Metrics aggregate what logs can't

Counters and histograms answer the questions logs can't: calls per minute by
model, error rate by provider, token spend per feature per day. Export them to
whatever your metrics stack is; the point is that cost spikes and error-rate
regressions surface in a dashboard before they surface in a complaint.

## The exercise

Take the service built in
[structuring a Python AI service](/learn/python-data-apis/structuring-a-python-ai-service).
Add one structured log line per model call, wrap the call in a trace span, and
count errors by class. Then break something deliberately — a bad API key, a
slow endpoint — and confirm you can see it in all three signals.

## Go deeper

- [Structured logging for LLM calls](/learn/production/structured-logging-for-llm-calls) — the field-level conventions at production scale.
- [PII redaction in LLM logs](/learn/production/pii-redaction-in-llm-logs) — what must not reach the log pipeline.
- [Token and cost tracking](/learn/production/token-and-cost-tracking) — turning the metrics into a budget signal.
- [Structuring a Python AI service](/learn/python-data-apis/structuring-a-python-ai-service) — the service this instruments.
