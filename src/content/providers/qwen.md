---
title: "Qwen (open weights)"
description: "Alibaba's Qwen open-model family: the widest size range in open weights, a mixed license map (Apache-2.0 on smaller releases, an attribution-clause license on the flagship), and the serving story."
vendor: qwen
covers: ["open-model"]
verifiedAt: "2026-09-15"
related:
  - /learn/local-inference/ollama-first-run
  - /learn/local-inference/vllm-production-serving
sources:
  - hf-qwen
---

## What this page covers

Alibaba's **Qwen** open-weight family — the broadest size ladder in open models, from sub-billion edge models to multi-trillion-parameter MoE flagships. Verified against Hugging Face model cards on 2026-09-15.

## Family and license map — the mixed picture

Qwen is the clearest case study in "check the license per release":

- **Smaller/mainline releases** (e.g. `Qwen3.8-27B`, `Qwen3.8-2.4T-A95B` variants of some sizes, `Qwen-Drive`, `Qwen3-ASR`): **Apache 2.0** — clean.
- **Flagship releases** (e.g. `Qwen3.8-2.4T-A95B`, the `Qwen3.8-Max` license): a custom permissive license with a **scale clause** — if your product exceeds 100M monthly users or $20M monthly revenue, the model name must be displayed on the UI. Permissive for almost everyone, but a real clause for scale.
- Some quantized/FP8 variants carry `other` — read the card on the exact repo you pull.

The current line is **Qwen 3.8** (Flash variants, 27B, and the 2.4T-A95B MoE flagship), plus specialized lines: ASR models, coding variants, vision-language models.

## Model cards and prompt format

Qwen ships detailed model cards per release (architecture, context, evals); chat template uses `<|im_start|>` conventions — supported natively across runtimes. The family is also the most common *base* for community fine-tunes — much "open model" capability in the wild is a Qwen derivative.

## Quantization, serving, hardware

Full runtime support (Ollama, llama.cpp, vLLM, SGLang, TGI); official FP8 variants ship alongside community GGUF/AWQ quants. The size ladder means there's a Qwen for every hardware budget — 0.6B on a phone to multi-GPU serving for the MoE flagship (the A95B naming tells you: ~95B active params of a 2.4T total).

## When to choose it

**Choose Qwen when** you want the deepest size/mode catalog (something always fits your hardware), when small-model capability per GB matters (Qwen's small models are consistently strong), when you need coding/vision/ASR variants from one family, or when Apache-2.0 licensing on the specific model you need fits.

**When not to choose it.** If the flagship's scale clause is a problem at your scale — read it before betting the product. Some orgs' China-provenance policies apply. And the mixed license map means "we use Qwen" isn't a compliance statement — "we use Qwen3.8-27B under Apache-2.0" is.

**Migration considerations.** Apache-2.0 releases are friction-free; flagship-license compliance travels with the weights. As the most fine-tuned base family, much migration knowledge transfers to/from the community ecosystem around it.
