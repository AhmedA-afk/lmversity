---
title: "Hugging Face Hub + Inference"
description: "Hugging Face mapped: the Hub as model/dataset/space registry, Inference Providers (serverless, multi-backend), dedicated Inference Endpoints, and where HF sits in the serving-decision landscape."
vendor: huggingface
covers: ["cloud-platform", "api", "open-model"]
verifiedAt: "2026-09-15"
related:
  - /providers/hosted-inference
  - /learn/local-inference/huggingface-tgi-and-tei
  - /learn/llm-security/llm-supply-chain-security
sources:
  - huggingface-inference-providers-docs
  - huggingface-inference-endpoints-docs
  - hf-transformers-docs
---

## What this page covers

**Hugging Face** — the model/dataset registry *plus* three distinct serving surfaces people routinely conflate: Inference Providers (serverless, multi-backend), dedicated Inference Endpoints, and the self-host libraries. Verified against HF docs on 2026-09-15.

## Product map — three surfaces, three roles

- **The Hub** — the registry: model cards, weights, datasets, Spaces demos, license metadata. This is the canonical source the ecosystem's supply chain runs through — which is why the [model supply-chain security](/learn/llm-security/llm-supply-chain-security) lesson treats it as infrastructure, not just a download site.
- **Inference Providers** — serverless inference routed to whichever backend serves the model (HF's own plus partner providers like Together, Fireworks, Groq, Replicate, Cerebras, and more). One HF API key → many backends; the aggregator play from the registry side.
- **Inference Endpoints** — *dedicated* deployments: your own model on provisioned hardware with a stable endpoint — the production-tier answer vs the serverless Providers tier.
- **The library layer** — Transformers, TGI/TEI, `huggingface_hub` — what you'd run yourself; covered in the [local-inference track](/learn/local-inference/huggingface-tgi-and-tei).

## The positioning point

HF is the only player that's simultaneously the *registry* (where the world's weights live), a *serverless aggregator* (Providers), and a *dedicated-serving platform* (Endpoints). The decision tree it implies: prototype on Providers → productionize on Endpoints if a managed surface fits → self-host (the library layer) when control/compliance demands it. Each tier is a different product with different SLAs — teams conflate them.

## The supply-chain angle

Because the Hub *is* where weights come from, HF's security surface matters beyond its own products: model-card verification, license metadata (the audit your [open-model hubs](/providers) rely on), and the pickling/serialization risks covered in supply-chain security — treating "downloaded from HF" as "safe" is the mistake the security lesson exists to prevent.

## When to choose it

**Choose Inference Providers when** you want one API over many open models without standing up infrastructure — the multi-backend routing is the convenience. **Choose Inference Endpoints when** you need dedicated capacity, your own fine-tuned weights, or production SLAs on HF-hosted models. **Choose the Hub** regardless — it's the ecosystem's registry; you don't choose it so much as already depend on it.

**When not to choose them.** Providers' serverless tier isn't a production-SLA product for latency-critical paths. Endpoints on HF mean trusting HF's hosting ops — regulated workloads may need your own serving (the self-host tier) instead.

**Migration considerations.** Providers → Endpoints → self-host is a designed gradient, not a migration cliff: the same model artifacts serve all three. The API shapes follow the OpenAI-compatible convention where applicable.
