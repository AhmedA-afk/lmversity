---
title: "Phi (open weights)"
description: "Microsoft's Phi open-model family: MIT-licensed small models built on curated 'textbook-quality' data — the case study in capability-per-parameter for edge and cheap serving."
vendor: microsoft
covers: ["open-model"]
verifiedAt: "2026-09-15"
related:
  - /learn/local-inference/mlx-lm-on-apple-silicon
  - /learn/local-inference/ollama-first-run
sources:
  - hf-microsoft-phi
---

## What this page covers

Microsoft's **Phi** family — small open models built on the "data quality beats data scale" bet: curated, textbook-quality training data producing outsized capability per parameter. Verified against Hugging Face cards on 2026-09-15.

## Family and license map

**MIT license** across the line — the cleanest grant there is. Current releases include `Phi-4-reasoning-vision-15B` (multimodal + reasoning in a 15B package) alongside the broader Phi-4 text family and adjacent releases like VibeVoice ASR models (also MIT). Small by design — the family tops out well under the frontier.

## Model cards and prompt format

Detailed cards per release with the honest caveat the family is known for: capability is real within its design envelope, and evals should respect that envelope. Chat template is Phi conventions — runtime-supported. The reasoning variants mark thinking behavior explicitly.

## Quantization, serving, hardware

Phi's whole point is deployability: runs on phones, laptops, edge boxes, cheap single-GPU serving. Full runtime coverage (Ollama, llama.cpp, ONNX Runtime — Microsoft's own, vLLM, MLX). This is the family people reach for when "runs anywhere" is the requirement.

## When to choose it

**Choose Phi when** capability-per-parameter is the metric — on-device features, cost-sensitive serving, fine-tuning bases where a small strong base beats a big weak one — or when MIT licensing removes all legal review from the table.

**When not to choose it.** If you need frontier open-model capability, Phi isn't trying to be that — size is the feature, not the limitation. Long-context and heavy-reasoning workloads exceed its design envelope; the reasoning variants help but don't close that gap.

**Migration considerations.** MIT means zero friction; the small size means porting between runtimes is trivial. Swapping Phi for a bigger family when you outgrow it is a model-string change, not a re-architecture — if you built the adapter discipline early.
