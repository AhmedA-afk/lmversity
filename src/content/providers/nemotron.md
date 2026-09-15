---
title: "Nemotron (open weights)"
description: "NVIDIA's Nemotron open-model family: OpenMDW-licensed models tuned for NVIDIA hardware, reasoning and specialist variants, and the GPU-vendor angle on open weights."
vendor: nvidia
covers: ["open-model"]
verifiedAt: "2026-09-15"
related:
  - /learn/local-inference/vllm-production-serving
  - /learn/fine-tuning/pinning-your-training-stack-lab
sources:
  - hf-nvidia-nemotron
  - nvidia-dli
---

## What this page covers

NVIDIA's **Nemotron** family — open models from the GPU vendor, tuned to show NVIDIA hardware at its best and increasingly covering specialist lines (reasoning, math, voice) alongside general models. Verified against Hugging Face cards on 2026-09-15.

## Family and license map

Licenses vary per release — **this family requires per-card checking**: `Nemotron-3-Labs` specialist variants carry **`openmdw-1.1`** (Open Model Data Weight license — permissive for use/modify/share with its own terms), some adjacent releases carry `other`, and NVIDIA also publishes *quantized repacks* of other vendors' models (e.g. DeepSeek-NVFP4 builds) under the original model's license. The NVFP4/FP8 builds are the signature: NVIDIA-quantized for NVIDIA silicon.

## Model cards and prompt format

Cards document training methodology (NVIDIA publishes more training detail than most), reasoning variants are explicit about thinking behavior. Chat templates are standard Nemotron conventions — runtime-supported.

## Quantization, serving, hardware

This is the family's differentiator: **official NVFP4/FP8 quantized builds** tuned for Blackwell-class silicon, plus standard safetensors for general serving. If you're on NVIDIA infrastructure — which production inference usually is — Nemotron is built to extract maximum throughput from it.

## When to choose it

**Choose Nemotron when** you're on NVIDIA hardware and want models tuned to exploit it (the vendor knows its own silicon), when specialist lines (math-RL, voice) match your workload, or when you want official quantized builds rather than community quants.

**When not to choose it.** License complexity per release requires checking — not a blocker, but a step. The specialist focus means the general-purpose line is thinner than Llama/Qwen's breadth. And the obvious caveat: tuned-for-NVIDIA is an advantage on NVIDIA hardware, less so elsewhere.

**Migration considerations.** Standard formats make it portable; the NVIDIA-specific optimizations (NVFP4 builds) are the part that doesn't transfer off-NVIDIA — keep a generic-precision variant in your serving config if hardware flexibility matters.
