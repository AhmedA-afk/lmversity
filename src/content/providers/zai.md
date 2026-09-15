---
title: "Z.ai / Zhipu (GLM)"
description: "Z.ai's surface mapped: the GLM model family (GLM-5.3 flagship, multimodal Flash, image, video), the GLM Coding Plan for agent CLIs, OpenAI-compatible API, and the open-source GLM lineage — with when-to-choose guidance."
vendor: zai
covers: ["consumer-app", "api", "open-model"]
verifiedAt: "2026-09-15"
related:
  - /learn/cli-agents
  - /learn/genai-app-dev/provider-layer-cheatsheet
sources:
  - zai-docs
  - zai-platform
---

## What this page covers

Z.ai (the international arm of Zhipu AI) runs three surfaces: the **Z.AI Open Platform API** (`api.z.ai`), the **GLM Coding Plan** (a subscription that feeds third-party coding agents), and the **open-source GLM releases**. Consumer GLM chat is a fourth surface outside this page's scope. Verified against official docs on 2026-09-15.

## Product map

**API platform.** OpenAI-compatible REST at `https://api.z.ai/api/paas/v4/` plus official Python (`zai-sdk`) and Java SDKs. Capabilities documented: chat completions, streaming, function calling, multimodal input on the Flash model, image generation, video generation.

**Model lineup** (verified):

- **GLM-5.3** — flagship text model, positioned for software engineering and agent work.
- **GLM-5.3-FLASH** — multimodal coding model with visual-programming specialization.
- **GLM-Image** — text-to-image, claimed open-source SOTA in complex scenarios.
- **CogVideoX-3** — video generation with frame interpolation.
- **Open releases** — GLM open-source models ship weights (Mistral's platform hosts GLM-5.2 open as a third-party model — verified there independently).

**GLM Coding Plan.** The interesting product: a monthly subscription whose endpoint plugs into **Claude Code, Cline, and other agent CLIs** — you keep your tool, swap the model behind it. That inverts the usual "our CLI or nothing" play and makes Z.ai relevant even if you never touch its API directly.

## Official links

- Docs: `docs.z.ai` (quickstart, guides, API reference; `llms.txt` index published)
- Platform/console: `z.ai/model-api` · API keys and billing: `z.ai/manage-apikey`

## Getting started shape

Bearer key + OpenAI-compatible `chat/completions` — the docs literally ship OpenAI-SDK examples with `base_url` swapped. Python/Java official SDKs exist for typed access. Coding Plan users get a dedicated endpoint configured per their agent's docs.

```python
from openai import OpenAI
client = OpenAI(api_key="...", base_url="https://api.z.ai/api/paas/v4/")
resp = client.chat.completions.create(model="glm-5.3",
    messages=[{"role": "user", "content": "Summarize this diff."}])
```

## Naming, aliases, deprecation

Model IDs are versioned (`glm-5.3`, `glm-5.3-flash`). No documented alias/deprecation policy on the international docs as of verification — pin explicit IDs and watch the docs' changelog.

## Data policy and enterprise controls

Terms and privacy live on z.ai; the international platform is a separate surface from the Chinese Zhipu offerings — verify which entity and jurisdiction your contract sits with, since that distinction is the entire point of the Z.ai brand. Enterprise governance documentation is thinner than US hyperscalers'.

## Minimal lab

Three-call smoke test: one GLM-5.3 completion, one multimodal call on Flash with an image, one through the Coding Plan endpoint inside your actual agent CLI (that last one is the real product). Provider-neutral equivalent: same calls through your adapter — the OpenAI-compatible shape means the test is free.

## When to choose it

**Choose Z.ai when** you want a capable coding model behind your existing agent CLI without re-platforming (the Coding Plan is the standout), when open-weight GLM releases give you a self-hosting option, or when aggressive pricing makes a second provider worth testing.

**When not to choose it.** Jurisdiction and procurement review apply — for many organizations that's the deciding factor, honestly assessed not assumed. Ecosystem and eval literature are thinner than the big providers'; deprecation policy isn't publicly documented at the level Anthropic or Mistral publish. Regional availability can vary by product.

**Migration considerations.** OpenAI-compatible inbound; the Coding Plan means you're never more than an endpoint change away from another model — the stickiest thing on offer is a subscription, not an API contract.
