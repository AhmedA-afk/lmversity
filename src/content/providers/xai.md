---
title: "xAI (Grok)"
description: "xAI's surface mapped: Grok consumer apps and the API — Grok 4.x text models, Imagine image/video, Voice API, server-side search tools — with the documented alias conventions, pricing tiers, and when-to-choose guidance."
vendor: xai
covers: ["consumer-app", "api"]
verifiedAt: "2026-09-15"
related:
  - /learn/genai-app-dev/provider-layer-cheatsheet
  - /learn/structured-outputs/cross-provider-structured-output-differences
sources:
  - xai-grok-docs
  - xai-status
---

## What this page covers

Two surfaces: the **Grok consumer products** (in X and standalone) and the **xAI developer API** (`docs.x.ai`). Verified against official docs on 2026-09-15.

## Product map

**API platform.** One API covering:

- **Grok text models** — the Grok 4.x series: `grok-4.6` (newest, 500k context, knowledge cutoff Feb 2026), `grok-4.5`, `grok-4.3` (1M context), and `grok-4.20` variants including `-reasoning`, `-non-reasoning`, `-multi-agent`, plus `grok-build-0.1` for code-focused work.
- **Imagine** — image generation (`grok-imagine-image-2.0` and variants) and video generation (`grok-imagine-video-1.5`, priced per second).
- **Voice API** — speech-to-speech (`grok-voice-think-fast-2.0`), speech-to-text (REST and streaming), text-to-speech.
- **Server-side search tools** — Web Search and X Search; notable because Grok's docs state plainly that models have no realtime-event knowledge unless these tools are enabled.
- **Structured output and tools** — function calling and JSON schema output are documented per model.
- **Batch API** — exists, but not every model accepts batch requests (per-model docs list which do).

**Consumer.** Grok inside X and as a standalone app — the distribution channel, not the developer surface.

## Official links

- Docs: `docs.x.ai` (models, pricing, tools, API reference)
- Status: `status.x.ai` (note: returns 403 to automated probes — check in a browser)
- Pricing: the models page carries per-model input/cached/output token pricing, including **long-context tiers** — requests crossing a 200k-prompt-token threshold bill at a higher rate for the whole request.

## Getting started shape

OpenAI-compatible API shape: API key, chat-completions-style requests, per-model capability flags. The practical notes from the docs worth keeping: `logprobs`/`top_logprobs` are silently ignored on grok-4.20+, image input is supported on text models (jpg/png, up to 20MiB), and system/user/assistant roles can appear in any order.

## Naming, aliases, deprecation

The alias convention is **documented**: `<modelname>` aliases the latest stable, `<modelname>-latest` tracks the newest version, `<modelname>-<date>` pins a specific release. For production, pin the dated form — the docs recommend aliases for convenience but consistency demands the pinned string.

## Data policy and enterprise controls

xAI's data practices live in its terms and privacy policy; enterprise controls (SSO, audit, residency) are a thinner documented surface than the big three's as of verification. If procurement needs a trust-center-style review, treat it as a conversation to have with xAI rather than a page to cite.

## Minimal lab

Four-call smoke test: one `grok-4.6` completion, one streamed, one structured-output call, one with Web Search enabled (to see the realtime-tooling difference firsthand — the model itself is explicit about needing it). Provider-neutral equivalent: same calls through your adapter.

## When to choose it

**Choose xAI when** X-search integration is genuinely valuable (native access to X's firehose is the unique capability), when you want frontier-class text at aggressive pricing (long-context tier pricing notwithstanding), or when you need image + video + voice generation alongside text from one vendor.

**When not to choose it.** Enterprise governance surface is thinner than the incumbents'; the model lineup churns fast (three 4.x generations visible at once); and the consumer-product association means brand-safety review may apply in some contexts. No open weights, no dedicated coding-agent product.

**Migration considerations.** OpenAI-compatible shape eases the inbound path; the proprietary bits (X Search, Imagine, multi-agent variants) don't port out. Pin dated model IDs — the alias convenience will otherwise move under you.
