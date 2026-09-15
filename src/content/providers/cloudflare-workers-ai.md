---
title: "Cloudflare Workers AI + AI Gateway"
description: "Cloudflare's AI surface mapped: Workers AI serverless GPU inference on the global network, the 50+ open-model catalog, AI Gateway's caching/routing/observability layer, and the Vectorize pairing."
vendor: cloudflare
covers: ["cloud-platform", "api"]
verifiedAt: "2026-09-15"
related:
  - /providers/vercel-ai-gateway
  - /learn/local-inference/vllm-production-serving
  - /learn/production/deployment-variants-cloud-and-portable
sources:
  - cloudflare-workers-ai-docs
---

## What this page covers

**Cloudflare Workers AI** — serverless GPU inference on Cloudflare's global network — and **AI Gateway**, the separate caching/observability/routing layer that works with any provider. They're often conflated; they're distinct products. Verified against Cloudflare docs on 2026-09-15.

## Product map

- **Workers AI** — run models on Cloudflare's GPUs serverlessly: invoke from Workers, Pages, or the REST API. Catalog of **50+ open-source models** (text generation, image classification, object detection, embeddings, speech). Pay-per-use pricing on Free and Paid plans; now GA.
- **AI Gateway** — the control plane *for whatever providers you use*: caching, rate limiting, request retries, model fallback, and observability over AI traffic. It's not an inference service — it's the layer you put in front of one.
- **The constellation** — Vectorize (vector DB), Workers/Pages (compute), R2 (storage without egress fees), D1, Durable Objects, KV — the "build the whole app on the edge" story.

## The architectural point

Two different bets in one brand: Workers AI is **inference at the edge** (small-ish open models, globally distributed, serverless economics); AI Gateway is **traffic management for any provider** — useful even if your inference lives at OpenAI or Anthropic. Evaluate them separately; teams routinely compare Workers AI against frontier-API platforms and miss that it's the open-model edge tier, not a frontier-API competitor.

## Enterprise controls

Cloudflare's standard posture (account-level controls, WAF-adjacent network position); AI Gateway adds caching/logging/rate-limiting over your AI traffic specifically. Custom models/higher limits need the custom-requirements path.

## When to choose it

**Choose Workers AI when** your app is already on Cloudflare (the integration is the value), when edge-local inference on open models serves your latency/privacy case, or when serverless GPU economics beat running your own serving tier for moderate volume. **Choose AI Gateway** whenever you want caching/fallback/observability in front of providers without operating your own proxy — it competes with the gateway category, not the model category.

**When not to choose them.** Workers AI's catalog is open models only — frontier APIs live elsewhere. AI Gateway is a control layer; it doesn't reduce the need to pick your inference supplier.

**Migration considerations.** Workers AI bindings are Cloudflare-specific; the REST API is portable-ish. AI Gateway sits in front of standard provider APIs — it *is* the migration-friendliness play.
