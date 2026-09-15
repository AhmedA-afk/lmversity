---
title: "Snowflake Cortex AI"
description: "Snowflake's AI layer mapped: SQL-native AI functions (COMPLETE/CLASSIFY/FILTER/EMBED/EXTRACT), in-perimeter model deployment, the REST low-latency path, and what Cortex is — and isn't — for."
vendor: snowflake
covers: ["cloud-platform", "api"]
verifiedAt: "2026-09-15"
related:
  - /providers/databricks-mosaic
  - /learn/genai-app-dev/provider-landscape-and-tradeoffs
  - /learn/production/llm-gateway-and-provider-abstraction
sources:
  - snowflake-cortex-docs
---

## What this page covers

**Snowflake Cortex AI** — LLM capability delivered as SQL functions inside Snowflake: the "AI where the data lives" bet, with models from OpenAI, Anthropic, Meta, Mistral, and DeepSeek deployed inside the Snowflake service perimeter. Verified against Snowflake docs on 2026-09-15.

## Product map

The unusual shape: AI functions **are SQL functions**, callable in SELECT/WHERE/JOIN —

- **Generative** — `AI_COMPLETE` (text+image), `AI_SUMMARIZE(_AGG)`, `AI_AGG` (multi-row aggregation beyond context limits)
- **Analytic** — `AI_CLASSIFY`, `AI_FILTER` (boolean predicate for WHERE/JOIN), `AI_SENTIMENT`, `AI_SIMILARITY`
- **Extraction** — `AI_EXTRACT`, `AI_PARSE_DOCUMENT` (OCR/layout), `AI_REDACT` (PII), `AI_TRANSCRIBE` (audio/video), `AI_TRANSLATE`
- **Embeddings** — `AI_EMBED` for vector search, clustering, classification
- **Low-latency REST** — Complete/Embed/Agents REST APIs for interactive use (the SQL functions are throughput-optimized, not latency-optimized — the docs say this explicitly)
- **Python access** — the same functions callable programmatically

## The governance point — and the limits

All models run **inside the Snowflake perimeter**: if data governance is why you're on Snowflake, the AI layer inherits it — no third-party egress, region-bound, per-function GA vs Preview labeling (check status before production). Access needs `USE AI FUNCTIONS` + `CORTEX_USER`/`AI_FUNCTIONS_USER` roles. **Not available in the PRC.**

## When to choose it

**Choose Cortex when** the workload is analytics-shaped (classify/extract/summarize across table columns — the AI_AGG pattern is genuinely differentiated), when governance forbids data egress, or when your team's interface is SQL anyway.

**When not to choose it.** Interactive agents and low-latency apps are a different design point — the REST path exists but the center of gravity is batch analytics. Model choice is Snowflake's curated list, not the catalog breadth of a gateway.

**Migration considerations.** SQL functions aren't portable (nobody else's `AI_AGG` exists); the REST APIs are closer to standard shapes. Treat Cortex as the analytics layer, not the app-inference layer — the checklist's architecture lesson draws exactly this boundary.
