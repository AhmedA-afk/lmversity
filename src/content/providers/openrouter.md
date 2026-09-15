---
title: "OpenRouter"
description: "OpenRouter mapped: one API over hundreds of models with automatic fallbacks and cost routing, the latest-alias convention, app attribution, and the privacy/provider-selection considerations the checklist requires."
vendor: openrouter
covers: ["api"]
verifiedAt: "2026-09-15"
related:
  - /providers/vercel-ai-gateway
  - /learn/genai-app-dev/provider-layer-cheatsheet
  - /learn/production/llm-gateway-and-provider-abstraction
sources:
  - openrouter-docs
---

## What this page covers

**OpenRouter** — a single API endpoint over hundreds of models across vendors, with automatic fallbacks and cost-aware routing. The largest of the model-aggregator gateways. Verified against OpenRouter docs on 2026-09-15, including the attribution and routing mechanics the checklist asks you to review before adopting.

## Product map

- **The API** — `/api/v1/chat/completions`, OpenAI-compatible (point the OpenAI SDK at the base URL); streaming supported; full model catalog browsable at `/models` and via `GET /api/v1/models`.
- **Model naming** — namespaced slugs (`~openai/gpt-sol-latest`); **latest aliases** resolve to the newest model in a family so code tracks releases without redeploys.
- **Routing** — automatic fallbacks and cost-effective provider selection per request; provider-selection controls let you constrain or pin where requests actually go.
- **SDKs** — `@openrouter/sdk` (TS) and `openrouter` (Python) client SDKs; `@openrouter/agent` — a higher-level Agent SDK with `callModel` handling tool loops and state.
- **Attribution** — optional `HTTP-Referer`/`X-OpenRouter-Title` headers put your app on OpenRouter's public leaderboards.

## The privacy and attribution review — do it before adopting

Three things the checklist flags explicitly:

1. **Requests route to third-party inference providers.** OpenRouter is the router, not always the endpoint — your payload reaches whichever provider serves that model, under that provider's data terms. Provider-selection controls exist precisely because this matters.
2. **Attribution headers are optional but defaulted-in by habit.** The leaderboard headers are marketing mechanics — set them only if you want the visibility.
3. **Latest aliases trade reproducibility for freshness.** `~openai/gpt-sol-latest` silently moves to new models — pin dated slugs where behavior stability matters; the same alias-versus-pin tradeoff every provider makes.

## When to choose it

**Choose OpenRouter when** model breadth behind one API is the requirement (prototyping across vendors, accessing niche models without N accounts), when cost-aware routing and automatic fallback buy you reliability/economics, or when the OpenAI-compatible surface drops into existing code cleanly.

**When not to choose it.** Regulated workloads should think hard — "your data goes to whichever provider serves the model" is a compliance question, not a footnote, even with provider constraints configured. Latest-model chasing via aliases is wrong for reproducible evals. And the aggregator adds a dependency layer your direct-vendor path doesn't have.

**Migration considerations.** The OpenAI-compatible surface makes it the *least* lock-in-heavy aggregator — it's often used *as* the portability layer (one integration, many backends). The risk isn't lock-in; it's the routing/privacy review above.
