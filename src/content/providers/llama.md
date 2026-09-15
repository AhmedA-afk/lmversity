---
title: "Llama (open weights)"
description: "Meta's Llama open-model family: the community-license reality, gated repos, current lineup, prompt format, quantization and serving paths — and when downloadable weights beat an API."
vendor: meta
covers: ["open-model"]
verifiedAt: "2026-09-15"
related:
  - /providers/meta
  - /learn/local-inference/ollama-first-run
  - /learn/local-inference/vllm-production-serving
sources:
  - meta-llama-resources
  - hf-meta-llama
  - purple-llama-repo
---

## What this page covers

The **open-weight Llama family** — downloadable models you run yourself — distinct from Meta's hosted Muse/Model API line covered in the [Meta provider hub](/providers/meta). Verified against official sources on 2026-09-15.

## Family and license map

The load-bearing fact: **Llama weights are gated and license-restricted, not open-source in the OSI sense.** Repos require accepting the Llama Community License (`license_name: llama4` on the model cards); the license grants broad use but carries acceptable-use terms and restrictions on very large commercial deployments. "Downloadable" ≠ "unrestricted" — read the actual license attached to the card you pull.

Current line: the Llama 4 series (e.g. `Llama-4-Scout-17B-16E-Instruct` — mixture-of-experts naming: 17B active params, 16 experts, instruct-tuned). The ecosystem also carries the safety models — **Llama Guard** for input/output classification — under the Purple Llama umbrella.

## Model cards and prompt format

Each release ships a model card with capabilities, context window, and safety notes — read the card for the specific checkpoint, because instruct/base/multimodal variants differ. Prompt format is Llama-chat conventions (special tokens for system/user/assistant turns); every major runtime templates it correctly — hand-rolling the template is how subtle behavior bugs happen.

## Quantization, serving, hardware

The family is the de-facto reference for local inference: first-class support in Ollama, llama.cpp (GGUF quants), vLLM, SGLang, TGI, MLX. Official FP8/quantized variants ship for some releases; community GGUFs cover the rest. Hardware scales from laptop (small quants) to multi-GPU serving for the MoE flagships — check VRAM math against the quant size, not the parameter count.

## When to choose it

**Choose Llama when** you need a well-supported open family with the deepest tooling ecosystem — every runtime, quantizer, and fine-tuning tool treats Llama as the reference case — when the license terms fit your use (they fit most), or when ecosystem depth matters more than having the single strongest open model.

**When not to choose it.** If you need Apache-2.0-clean licensing (Qwen, Gemma, Granite, OLMo offer that), if gated-repo friction blocks your pipeline, or if your use hits the license's restrictions — that's a legal read, not a technical one. For pure capability per GB, benchmark newer families on your task before defaulting to the incumbent.

**Migration considerations.** Open weights are the ultimate portability — but "Llama-compatible" formats (GGUF, safetensors) and chat templates differ subtly per family; pin your runtime version and template.
