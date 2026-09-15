---
title: "Google (Gemini / Vertex AI)"
description: "Google's AI product surface mapped: Gemini apps, the Gemini API on AI Studio, Vertex AI, Gemini CLI, ADK, and the Gemini 3 model family — with official docs, deprecation, data-governance, and when-to-choose guidance."
vendor: google
covers: ["consumer-app", "coding-agent", "api", "cloud-platform", "open-model"]
verifiedAt: "2026-09-15"
related:
  - /learn/agent-frameworks/google-adk
  - /learn/cli-agents
  - /learn/genai-app-dev/provider-layer-cheatsheet
  - /learn/structured-outputs/cross-provider-structured-output-differences
sources:
  - google-gemini-docs
  - google-gemini-models
  - google-gemini-deprecations
  - google-gemini-rate-limits
  - google-gemini-terms
  - google-vertex-models
  - google-vertex-data-governance
  - google-cloud-status
  - google-adk-docs
  - gemini-cli-repo
  - google-gemma-docs
---

## What this page covers

Google's AI surface is the widest of the three big providers — five distinct products sharing the Gemini model family: **Gemini apps** (consumer), the **Gemini API** on AI Studio (developer entry), **Vertex AI** (the cloud platform surface, now also branded for agents), **Gemini CLI** (open-source coding agent), and **Gemma** (the open-weight family). Verified against official docs on 2026-09-15.

## Product map

**Consumer.** Gemini apps for research, multimodal work, Workspace integration, and Gems — outside this page's scope except as the model family's showcase.

**Gemini API (AI Studio).** The developer entry point: `ai.google.dev`, API-key auth, free tier for experimentation. The surface is broad:

- **Models** — Gemini 3.x text family (see below), plus specialized: Nano Banana (image generation/editing), Veo and Gemini Omni Flash (video), Lyria (music), Transcribe, TTS, Live Translate (70+ languages), embeddings.
- **Live API** — real-time bidirectional voice/video over WebSockets, with ephemeral tokens for client-side use.
- **Agents** — managed agents, environments, hooks, Deep Research agent; Antigravity is the agentic dev product.
- **Built-in tools** — Google Search and Maps grounding, code execution, URL context, computer use, file search.
- **OpenAI compatibility** — an official endpoint that accepts OpenAI-shaped requests, easing migration tests.
- **Efficiency** — Batch API, Flex/Priority inference tiers, context caching, webhooks, background execution.

**Vertex AI (cloud platform).** The enterprise surface: OAuth/service-account auth, IAM, VPC, the Gemini Enterprise Agent Platform, Model Garden (which also hosts partner and open models), data-governance guarantees distinct from AI Studio's terms. Production enterprise work on Google almost always means Vertex, not AI Studio.

**Coding agent.** Gemini CLI — open-source terminal agent (repo public), authenticates with a Google account or API key.

**Gemma.** The open-weight sibling family — separate docs, downloadable weights, a different license story. Covered in the open-model hubs; don't conflate "Gemini" and "Gemma" in docs.

**Model lineup** (Gemini API, verified 2026-09-15): Gemini 3.8 Flash newest stable; 3.7/3.6/3.5 Flash and Flash-Lite tiers; Gemini 3.1 Pro and 3 Flash in preview. Endpoint strings follow `gemini-<version>-<tier>` (`gemini-3.8-flash`); image models carry `-image` suffixes; Live/specialized models have their own IDs. Stability labels — Stable / Preview / Legacy — are printed per model on the models page; only "Stable" belongs in production.

## Official links

- Docs: `ai.google.dev/gemini-api/docs` · Vertex: `cloud.google.com/vertex-ai/generative-ai/docs`
- Models: `/docs/models` · Deprecations: `/docs/deprecations` · Rate limits: `/docs/rate-limits`
- Terms (AI Studio): `ai.google.dev/gemini-api/terms` · Vertex data governance: `cloud.google.com/vertex-ai/generative-ai/docs/data-governance`
- Status: `status.cloud.google.com` (+ the API status page linked from the docs)

## Getting started shape

Two auth worlds: **API key** (AI Studio — `x-goog-api-key`, zero ceremony) or **OAuth/service account** (Vertex). The official SDK is the GenAI SDK (`google-genai`); a `generate_content` call takes model + contents; streaming is a variant on the same call; structured output is a `responseSchema` + `responseMimeType: application/json`; function calling, thinking, and grounding tools are config objects on the request. One surface detail worth knowing: the Interactions API is the newer agent-oriented layer — the docs carry a migration guide and a dated breaking-changes note; check which generation the tutorial you're reading targets.

```python
from google import genai
client = genai.Client()  # reads GEMINI_API_KEY or GOOGLE_API_KEY
resp = client.models.generate_content(
    model="gemini-3.8-flash",  # newest stable Flash at verification date — confirm on the models page
    contents="Summarize this diff.",
)
print(resp.text)
```

## Data policy, retention, enterprise controls

This is the sharpest split among the big three. **AI Studio terms** apply to the Gemini API on the free/developer tier — read the terms and abuse-monitoring pages directly; paid tiers carry different terms. **Vertex AI data governance** is the enterprise contract: Google documents non-training commitments, regional processing, and CMEK there. The practical rule: prototype on AI Studio if you like, but anything touching customer data or compliance review should be on Vertex, where the governance terms actually apply. Verify the current terms at contract time — these pages change.

## Naming, aliases, deprecation

Model IDs are `gemini-<version>-<tier>[-<modality>]`; the models page marks each Stable/Preview/Legacy and the deprecations page publishes shutdown dates. Preview models can change or disappear — fine for evals, wrong for production. **Pin full IDs, never float on "latest"**, and watch the deprecations page alongside release notes; Google's versioning cadence is fast and the stable line moves.

## Context and capability claims

Gemini's headline claims — very long context, native multimodality — are real differentiators, but "advertised context" ≠ "usable context" on retrieval-heavy tasks, and vendor benchmark tables are vendor tables. If long-context is why you're here, eval it on your document mix before committing; the alternative (RAG) often wins on cost anyway.

## Minimal lab

Five-call smoke test: `generate_content`, streamed variant, structured output via `responseSchema`, one function call, one Google-Search-grounded call. Provider-neutral equivalent: same five through your adapter — and try the OpenAI-compatibility endpoint as the adapter's cheap porting path.

## Common errors and operations

The API-errors page is the taxonomy; production hits `RESOURCE_EXHAUSTED` (rate limits — tiered, check yours on the rate-limits page), `INVALID_ARGUMENT` (strict schema validation on tools/responseSchema), `DEADLINE_EXCEEDED`/`UNAVAILABLE` (retry with backoff), and `PERMISSION_DENIED` (API-key restrictions or Vertex IAM). Status: `status.cloud.google.com` for Vertex; the docs' status page covers the AI Studio surface.

## When to choose it

**Choose Google when** multimodality is the workload (native image/video/audio plus the specialized media models), when long-context is a requirement not a nice-to-have, when you want a managed path from prototype (AI Studio) to enterprise (Vertex) without switching vendors, or when you're already inside GCP and want IAM/VPC/unified billing. The open-source Gemini CLI and ADK make it the most tool-rich agent ecosystem of the three.

**When not to choose it.** If your team wants one API contract across vendors, Google's two-surface split (AI Studio vs Vertex) adds a wrinkle others don't have. Preview-model cadence means version churn needs active management. And if open weights are the requirement, Gemma is the answer — Gemini itself is hosted-only.

**Migration considerations.** The GenAI SDK request shape is proprietary, but the OpenAI-compatibility endpoint gives you a real bridge: point your adapter at it for A/B tests before committing. Between AI Studio and Vertex, the same models behave differently only in auth, limits, and terms — code ports, contracts don't.
