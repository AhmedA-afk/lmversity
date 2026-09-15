---
title: "DeepSeek"
description: "DeepSeek's surface mapped: the API with published alias→version mapping, thinking mode, OpenAI and Anthropic compatibility, off-peak pricing and context caching — plus open-release and self-hosting context."
vendor: deepseek
covers: ["consumer-app", "api", "open-model"]
verifiedAt: "2026-09-15"
related:
  - /learn/genai-app-dev/provider-layer-cheatsheet
  - /learn/local-inference/ollama-first-run
sources:
  - deepseek-api-docs
  - deepseek-api-reference
  - deepseek-status
---

## What this page covers

Three surfaces: the **DeepSeek API** (`api.deepseek.com`, docs at `api-docs.deepseek.com`), the **consumer chat app**, and DeepSeek's **open releases** (weights published for self-hosting). Verified against official docs on 2026-09-15.

## Product map

**API.** Two models exposed over `https://api.deepseek.com`:

- `deepseek-flash` → currently maps to **DeepSeek-V4.1-Flash**
- `deepseek-v4-pro` → currently maps to **DeepSeek-V4-Pro-0813**

The docs publish this alias→version table explicitly — aliases float, the mapped version is what actually runs. Both support **thinking and non-thinking modes** (thinking is default; it's a switch, not a separate model), 1M context, up to 384K output.

Capability table (verified): JSON output, tool calls, **Responses API compatibility**, **Anthropic API compatibility** (dedicated `/anthropic` base path), chat prefix completion (beta), FIM completion (beta, non-thinking mode only), Vision (flash only), Files API, context caching.

**Pricing structure worth knowing:** per-token pricing with **cache-hit vs cache-miss rates** and **off-peak vs peak discounts** — the cache-aware + time-aware pricing is unusual and can dominate your cost model. Published concurrency limits per model.

**Open releases.** DeepSeek's research line ships weights publicly; the API models are the served versions. For self-hosting, the open releases run on the standard local-inference stack.

## Official links

- Docs: `api-docs.deepseek.com` (quickstart, guides, API reference, news, changelog, FAQ)
- Platform/console: `www.deepseek.com/platform`
- Status: `status.deepseek.com` · Error codes and rate-limit/isolation docs inside the docs tree

## Getting started shape

OpenAI-compatible by default — same `chat/completions` shape, `Authorization: Bearer` key. The deliberate twist: **two compatibility surfaces** — call it OpenAI-shaped or call `/anthropic` for Messages-API shape. Thinking mode is toggled per request; FIM and prefix-completion modes serve code-completion use cases most APIs don't.

## Naming, aliases, deprecation

The published table is the contract: aliases (`deepseek-flash`, `deepseek-v4-pro`) map to dated versions (`V4-Pro-0813`). **If your evals were run against a specific mapped version, record it** — the alias will move. The changelog page tracks releases.

## Data policy and enterprise controls

DeepSeek's terms and privacy policy apply; the docs' rate-limit page documents per-model concurrency and isolation. Enterprise controls (audit, residency, SSO) are thinner documented surface than US hyperscalers; teams with data-residency requirements should evaluate where API traffic is processed — a real review item, not boilerplate.

## Minimal lab

Five-call smoke test: one `deepseek-flash` completion, one thinking-mode call on the pro model (watch the reasoning surface change), one JSON-output call, one tool-call round trip, one through the `/anthropic` endpoint (verify the compat claim yourself). Provider-neutral equivalent: the same calls through your adapter.

## When to choose it

**Choose DeepSeek when** cost dominates at scale — the cache-hit + off-peak pricing structure rewards shaped traffic aggressively — when you want thinking-mode on demand rather than a separate model line, when dual OpenAI/Anthropic compatibility eases a migration, or when open weights give you a self-hosting fallback.

**When not to choose it.** Data-residency and governance requirements in some jurisdictions exclude it by policy, not by quality. Vision is flash-model-only. The alias mapping means "the model changed under me" is a documented possibility, not paranoia — pin versions for evals. Enterprise contract surface is thinner than the incumbents'.

**Migration considerations.** Inbound migration is nearly free (two compat surfaces); outbound is equally easy for the same reason — DeepSeek is the least sticky provider on this list, which is a feature for you. Keep the mapped model version in your config, not just the alias.
