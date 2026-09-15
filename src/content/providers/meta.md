---
title: "Meta (Model API / Muse / Llama)"
description: "Meta's AI surface mapped: Meta Model API, the Muse model family (Spark, Image, Voice Transcribe, open-weight Glimmer), Muse Code, and the Llama open-model lineage — with auth, protocols, and when-to-choose guidance."
vendor: meta
covers: ["consumer-app", "coding-agent", "api", "open-model"]
verifiedAt: "2026-09-15"
related:
  - /learn/local-inference/ollama-first-run
  - /learn/agent-frameworks/framework-comparison-and-escape-hatches
  - /learn/structured-outputs/cross-provider-structured-output-differences
sources:
  - meta-model-api-docs
  - meta-llama-resources
  - purple-llama-repo
---

## What this page covers

Four surfaces, one company: **Meta Model API** (`api.meta.ai` — the hosted developer platform), the **Muse model family** it serves, **Muse Code** (the coding-agent CLI built on Muse Spark), and the **Llama** open-model lineage that predates the Muse API. Meta AI, the consumer app, is a fifth surface outside this page's scope. Verified against official docs on 2026-09-15.

## Product map

**Meta Model API.** Base URL `https://api.meta.ai/v1`, Bearer-token auth, and — unusually — **three protocol choices**: Responses API, Chat Completions API, or Messages API. It's drop-in compatible with the OpenAI SDK, the Anthropic SDK, and OpenAI-compatible agent CLIs — point your existing client's base URL at Meta and keep the rest of your code. Capabilities documented: tool calling and tool search, search grounding, image understanding and generation, speech-to-text, video understanding, file handling, reasoning, structured output, prompt caching.

**Muse family** (served over Model API):

- **Muse Spark** — the flagship: agent-ready primitives (parallel tool calls, streamed tool-call args, reasoning that carries across turns), 1M-token context. IDs: `muse-spark-1.3` / `1.2` / `1.1` standard tier, `-contributor` tier variants.
- **Muse Image** — image generation and multi-turn editing (`muse-image-1.0`).
- **Muse Voice Transcribe** — streaming + file speech-to-text with speaker attribution and turn detection (25 evaluated languages); transcription only — no speech synthesis.
- **Muse Glimmer** — the open-weight multimodal model, Apache 2.0 licensed, distilled from Spark; downloaded and self-hosted (vLLM, SGLang, llama.cpp, ExecuTorch) rather than called over the API.

**Muse Code.** Meta's coding agent for terminal and CI — plans, edits, runs commands with approvals and an OS sandbox on from first run. Same model, same auth, same billing as the API: run it ready-made or connect your own agent to Model API instead.

**Llama.** The older open-model family and its ecosystem (Llama Guard for safety classification) remain distributed through Meta's Llama site and the Purple Llama repo — a separate docs lineage from the Muse/Model API surface.

## Official links

- Docs: `llama.developer.meta.com/docs` (Model API + Muse + Muse Code)
- Llama resources: `ai.meta.com/llama` · Purple Llama (safety): `github.com/meta-llama/PurpleLlama`
- Pricing and rate limits, error handling, and status: all inside the same docs tree

## Getting started shape

Bearer `MODEL_API_KEY` against `https://api.meta.ai/v1`. The differentiator is protocol choice: pick Responses, Chat Completions, or Messages shape explicitly — existing OpenAI- or Anthropic-shaped code keeps working with a base-URL swap. Streaming, structured output, tool calling, and prompt caching are documented per protocol.

```python
from openai import OpenAI
client = OpenAI(api_key="...", base_url="https://api.meta.ai/v1")
resp = client.chat.completions.create(
    model="muse-spark-1.3", messages=[{"role": "user", "content": "Summarize this diff."}])
```

## Naming, aliases, deprecation

Model IDs are versioned (`muse-spark-1.3`) and tiered (`-contributor` suffixes); the docs carry a changelog per product (Muse Code has its own). No alias convention is documented as of verification — pin explicit IDs.

## Data policy and enterprise controls

The docs tree covers authentication and billing; data-retention and training-use terms sit in Meta's terms and privacy policies — verify them at contract time, and note that consumer Meta AI data practices are a different policy surface than the Model API's.

## Minimal lab

Three-call smoke test: one chat completion on each of two protocols (prove the compat claim yourself), one tool-calling round trip, plus a `muse-image-1.0` generation if media matters. Provider-neutral equivalent: the same calls through your adapter — Meta's three-protocol surface makes it the cheapest second-provider test you'll ever run.

## When to choose it

**Choose Meta when** you want a second provider with zero client-code changes (OpenAI/Anthropic SDK compat is the pitch and it holds), when agentic coding is the workload and Muse Code's sandbox/approvals model fits, or when you want the API (Spark) and self-hosted (Glimmer) versions of the same model lineage for hybrid deployment.

**When not to choose it.** The ecosystem is youngest here — less third-party tooling depth, less eval literature, and enterprise controls documentation is thinner than the hyperscalers'. If your requirement is a battle-tested enterprise contract, that's still AWS/Azure/GCP territory. Voice *synthesis* isn't offered (transcription only).

**Migration considerations.** Migration is the product — the three-protocol design exists so OpenAI- and Anthropic-shaped code ports with a base-URL change. That cuts both ways: leaving is equally easy, which is the point. Glimmer gives you the rare hosted→self-hosted exit ramp inside one family.
