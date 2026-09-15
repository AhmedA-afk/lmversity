---
title: "Vercel AI Gateway"
description: "Vercel's AI Gateway mapped: one managed gateway to models across providers, routing/fallback, budgets, BYOK, request logging, the AI SDK ecosystem — usable from any infrastructure, not just Vercel."
vendor: vercel
covers: ["api", "cloud-platform"]
verifiedAt: "2026-09-15"
related:
  - /providers/openrouter
  - /providers/cloudflare-workers-ai
  - /learn/agent-frameworks/vercel-ai-sdk
sources:
  - vercel-ai-gateway-docs
---

## What this page covers

**Vercel AI Gateway** — a managed gateway to models across providers, callable from any infrastructure (not just Vercel deployments): one credential, request logs, budgets, routing, and provider failover. GA as of the 2026-09 verification.

## Product map

- **Unified access** — models across providers through one endpoint (`ai-gateway.vercel.sh`), namespaced model strings (`openai/gpt-6-astra`); modalities: text, image, video, speech, transcription, realtime, embeddings, reranking.
- **Control plane** — request logs (model, provider attempts, latency, tokens, cost, every routing attempt), budgets per team/project/key/member, provider ordering + model fallbacks.
- **BYOK** — bring your own provider credentials alongside system credentials; BYOK spend meters separately, with fallback to system credentials on BYOK failure. **Zero markup on provider token prices** either way.
- **Surfaces** — AI SDK (native), OpenAI Chat Completions, Responses API, Anthropic Messages API — the existing-code compatibility story; plus supported coding agents via Vercel CLI, and framework integrations.
- **Auth** — team-scoped API keys anywhere; OIDC from Vercel deployments.

## The architectural point

This is the **gateway category** done at platform quality: the value is centralizing credentials/logging/spend/failover without operating your own proxy+control-plane. It's competing with OpenRouter and Cloudflare AI Gateway — not with model vendors. Your app doesn't need to run on Vercel; the gateway is infra-agnostic, which is the important nuance vs "it's a Vercel feature."

## The AI SDK ecosystem

The gateway is the server side of Vercel's AI SDK bet: `generateText({ model: 'openai/gpt-6-astra' })` — provider-prefixed strings resolve through the gateway. The SDK's provider abstraction is covered in [/learn/agent-frameworks/vercel-ai-sdk](/learn/agent-frameworks/vercel-ai-sdk); gateway adds the ops layer the SDK doesn't.

## When to choose it

**Choose Vercel AI Gateway when** you want managed multi-provider ops (logging, budgets, failover) without building it, when the AI SDK is already your client, or when BYOK lets you keep existing provider contracts while gaining the control plane.

**When not to choose it.** If you don't need multi-provider routing or centralized ops, it's a layer you don't need. Budget semantics are soft-cap (rejects *new* system-credential requests after breach) — zero-overshoot hard limits need reviewing the BYOK/budget docs for your exact semantics.

**Migration considerations.** The OpenAI/Anthropic-compatible surfaces are the migration-friendliness story — point existing clients at the gateway endpoint. The control plane (budgets, provider ordering) is Vercel-specific but config-level, not code-level.
