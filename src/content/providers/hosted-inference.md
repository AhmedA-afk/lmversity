---
title: "Hosted Inference: Together, Fireworks, Groq, Cerebras, Replicate, Modal"
description: "The hosted-inference providers mapped as a category: per-vendor shapes (serverless open-model APIs, custom silicon, model marketplaces, GPU compute) and the managed-API vs dedicated vs serverless vs self-host decision."
vendor: together
covers: ["api", "cloud-platform"]
verifiedAt: "2026-09-15"
related:
  - /providers/huggingface
  - /learn/local-inference/vllm-production-serving
  - /learn/production/deployment-variants-cloud-and-portable
sources:
  - together-docs
  - fireworks-docs
  - groq-docs
  - cerebras-docs
  - replicate-docs
  - modal-docs
---

## What this page covers

**Hosted inference** — the category of vendors that run open/third-party models for you, as distinct from frontier providers (their own models) and gateways (routing, not serving). Six vendors, six different shapes — treating them as interchangeable is the mistake this page exists to prevent. All docs verified 2026-09-15.

## The six shapes

| Vendor | What it actually is |
|---|---|
| **Together AI** | Open-model inference API + fine-tuning + dedicated endpoints + GPU clusters — the full-stack open-model cloud. |
| **Fireworks AI** | Fast open-model serving platform: serverless + dedicated deployments, function calling, fine-tuning — production-inference-focused. |
| **Groq** | Custom LPU silicon — deterministic, very high token throughput on a curated open-model set. The speed play: hardware is the differentiator. |
| **Cerebras** | Wafer-scale (CS-3) inference — extreme throughput on supported models. Also a hardware differentiator, different silicon bet. |
| **Replicate** | Model marketplace-as-API: run any public/community model by API call, or deploy your own (via Cog). Pay per second of compute. The breadth play. |
| **Modal** | Serverless GPU *compute*, not a model catalog — you bring your code/weights, Modal provides the infra. Closest to self-host-economics-as-a-service. |

The sub-categories matter: **open-model API platforms** (Together, Fireworks) compete on serving quality/features; **custom silicon** (Groq, Cerebras) competes on throughput where the model is supported; **Replicate** competes on catalog breadth including long-tail models; **Modal** competes with *operating your own* infra, not with model APIs.

## The four-tier serving decision — the real comparison

| Tier | What you get | Choose when |
|---|---|---|
| **Managed frontier API** (OpenAI, Anthropic, Gemini) | The frontier models, full feature surfaces | You need the frontier models themselves |
| **Hosted open-model inference** (this page, HF Providers, Bedrock/Foundry catalogs) | Open models served for you | Open weights suffice + you don't want serving ops |
| **Dedicated endpoints** (Fireworks dedicated, HF Endpoints, Bedrock provisioned) | Reserved capacity, SLAs, your weights | Production load, compliance, or fine-tuned models |
| **Self-host** (vLLM/SGLang/TGI — the local-inference track) | Full control | Volume/compliance/architecture justifies the ops cost |

## When to choose hosted inference

**Choose the category when** open models meet the capability bar and you want serving without ops — the default for most teams below self-host-scale volume. **Pick within it by shape:** Groq/Cerebras where throughput is the constraint and the model is supported; Together/Fireworks for full-platform open-model work; Replicate for breadth/long-tail; Modal when you want infra-as-service without a catalog.

**When not to choose it.** Frontier-only tasks (the frontier models aren't here). Latency-critical paths need the dedicated tier, not serverless. And per-vendor model catalogs differ — "hosted inference" doesn't mean every model is everywhere.

**Migration considerations.** The OpenAI-compatible convention makes most of these drop-in swappable at the API level — the genuine multi-supplier hedge. The vendor-specific features (fine-tuning APIs, Cog deployments, Modal's compute primitives) are the lock-in layer.
