---
title: "OpenAI"
description: "OpenAI's product surface mapped: ChatGPT, Codex, and the API platform (Responses API, Agents, Realtime, media), with official docs, data-policy, naming, deprecation, and when-to-choose guidance."
vendor: openai
covers: ["consumer-app", "coding-agent", "api"]
verifiedAt: "2026-09-15"
related:
  - /learn/genai-app-dev/provider-adapter-anthropic-openai
  - /learn/genai-app-dev/provider-layer-cheatsheet
  - /learn/agent-frameworks/openai-agents-sdk
  - /learn/structured-outputs/cross-provider-structured-output-differences
sources:
  - openai-platform-docs
  - openai-models-docs
  - openai-pricing
  - openai-deprecations
  - openai-your-data
  - openai-error-codes
  - openai-rate-limits
  - openai-status
  - openai-agents-sdk-docs
  - openai-codex-docs
---

## What this page covers

Three distinct surfaces that share a brand but not a contract: the **ChatGPT consumer app** (plus its workspace-agent, plugin, commerce, and ads surfaces), **Codex** (the coding agent), and the **API platform** (Responses API and everything under it). "Using OpenAI" means different things on each — this page maps all three, verified against the official docs on 2026-09-15.

## Product map

**Consumer.** ChatGPT is the flagship app. Around it sit: workspace agents (trigger published agents from outside the app), plugins (MCP servers + skills packaged for ChatGPT), commerce flows, and an ads surface. These are distribution channels as much as features — if you build a plugin, ChatGPT is where users find it.

**Coding agent.** Codex runs as a CLI, IDE integration, and cloud service, with its own docs area under the OpenAI developer site. It consumes the same models as the API but is a product, not an API.

**API platform.** The current center of gravity is the **Responses API** — one endpoint covering text, reasoning, tools, streaming, background mode, conversation state, and file inputs. Around it:

- **Agents API and Agents SDK** — hosted agent runtime (sessions, environments, sandboxes, tracing) plus a library for defining agents and orchestration.
- **ChatKit** — embeddable chat UI.
- **Tools** — web search, file search, code interpreter, computer use, shell, MCP connections, skills, programmatic tool calling.
- **Realtime API and audio** — WebRTC/WebSocket voice, transcription, translation, TTS; the realtime line is branded GPT-Live.
- **Media** — image generation, video generation, vision input.
- **Specialized models** — deep research, embeddings, moderation.
- **Legacy surface** — the Assistants API is legacy with a published migration guide; Evals and fine-tuning (SFT, DPO, RFT) sit in the legacy list too. Treat anything labeled legacy as planned-work to migrate, not new surface to adopt.

**Models.** The model catalog on the docs site is the authoritative list; the quickstart currently steers new users to GPT-6 Astra. Families span general text/code, reasoning models, realtime voice, image, video, embeddings, and moderation. Model pages carry per-model context windows, capabilities, and pricing — never hard-code a list; resolve "current model" at read time from the catalog or your own pinned config.

## Official links

- Docs: `platform.openai.com/docs` (API), `openai.com/codex` docs (Codex)
- Pricing: `platform.openai.com/docs/pricing`
- Deprecations: `platform.openai.com/docs/deprecations`
- Your data / policies: `platform.openai.com/docs/guides/your-data`
- Errors: `platform.openai.com/docs/guides/error-codes` · Rate limits: `docs/guides/rate-limits`
- Status: `status.openai.com`

## Getting started shape

Auth is a Bearer API key scoped by project; organization and project IDs gate billing and model access. The minimal call is one `responses.create` — input plus a model string. From there the increments are mechanical: `stream: true` for token streaming, a `text.format` JSON-schema object for structured output, `tools` entries for function/built-in tools, `previous_response_id` or a conversation object for state. Every capability on the platform hangs off that same request shape — which is the deliberate design.

```python
from openai import OpenAI
client = OpenAI()  # reads OPENAI_API_KEY
resp = client.responses.create(model="gpt-6-astra",  # quickstart model at verification date — confirm in the model catalog
                               input="Summarize this diff.")
print(resp.output_text)
```

## Data policy, retention, enterprise controls

The "Your data" docs page and the privacy portal are the authoritative policies — read them at contract time, not from memory. The load-bearing distinctions: API traffic and consumer ChatGPT traffic are governed by different policies; data-residency, zero-retention, and training-opt-out terms differ by product tier; and enterprise controls (service accounts, projects, IP allowlists, Private Link, workload identity federation, audit logs, Terraform provider) live on the platform's infrastructure section. For regulated workloads, pin the policy version you agreed to — these pages change.

## Naming, aliases, deprecation

Model IDs are versioned strings; convenience aliases track the latest stable release. Deprecations are announced on the deprecations page with sunset dates, and the Assistants-API migration guide shows the pattern: announcement → overlap window → shutdown. **Pin model IDs in config, treat aliases as a convenience for prototypes**, and put the deprecation feed in whatever watches your dependencies.

## Context and capability claims

Advertised context windows and "usable" context diverge: effective working context shrinks with output reservation, tool schemas, and the degradation every long-context model shows on retrieval-heavy tasks. Benchmark claims on model pages are vendor numbers — for anything load-bearing, run your own eval on your own distribution before committing.

## Minimal lab

Smoke test worth keeping in the repo: create a response, stream a second, force a structured output, call one tool, print token usage. Provider-neutral equivalent: the same five steps through your adapter layer against a second provider — it takes an afternoon and turns "we could switch" from hope into a measurement.

## Common errors and operations

The error-codes page enumerates the taxonomy; the ones that bite in production are `rate_limit_exceeded` (respect `Retry-After`, back off with jitter, watch your RPM/TPM tier), `context_length_exceeded` (truncate or compact upstream), `invalid_api_key` (usually project scoping), and server 5xx (retry idempotent calls only). Status page: `status.openai.com` — subscribe before launch, not during the incident.

## When to choose it

**Choose OpenAI when** you want the broadest single-vendor surface — text, reasoning, agents, realtime voice, images, video, embeddings, moderation behind one auth and one bill — or when your distribution plan runs through ChatGPT plugins/workspace agents.

**When not to choose it.** If your risk model demands a second supplier from day one, build behind an adapter anyway and split traffic early. If open weights or self-hosting is a hard requirement, OpenAI offers neither — look at the open-model families. And if cost dominates at high volume, price your actual traffic shape across providers; the cheapest tier for your mix is an empirical question.

**Migration considerations.** The Responses API is proprietary in shape (conversations, background mode, built-in tools don't port verbatim); the legacy Chat Completions shape is closer to a de-facto industry dialect and several competitors emulate it. Code written against the Responses API should isolate that dependency the day it's written, not the day you need to move.
