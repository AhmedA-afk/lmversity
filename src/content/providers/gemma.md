---
title: "Gemma (open weights)"
description: "Google's Gemma open-model family: Apache-2.0 licensed weights distilling Gemini-class architecture, current sizes, prompt format, serving paths — and where it fits against Llama and Qwen."
vendor: google
covers: ["open-model"]
verifiedAt: "2026-09-15"
related:
  - /providers/google
  - /learn/local-inference/ollama-first-run
  - /learn/local-inference/mlx-lm-on-apple-silicon
sources:
  - google-gemma-docs
  - hf-google-gemma
---

## What this page covers

**Gemma** — Google's open-weight family, sharing architecture DNA with the proprietary Gemini line but licensed for download and self-hosting. Verified against official sources on 2026-09-15 — notably, Gemma 4 cards carry **Apache 2.0**, a materially freer grant than earlier generations' custom terms.

## Family and license map

Gemma 4 releases (e.g. `gemma-4-12b-it-assistant`) list `apache-2.0` on their model cards — one of the cleanest licenses in the open-model world: use, modify, redistribute, commercial, no usage-tier clauses. Verify per card anyway — older Gemma generations carried custom "Gemma Terms of Use" with use restrictions, and the license on the card you pull is the one that governs.

The family spans small on-device sizes up to tens of billions of parameters, in base and instruction-tuned (`-it`) variants, plus specialized lines (the hosted providers page covers where Gemma models also appear inside Google/Sarvam platforms).

## Model cards and prompt format

Google ships model cards per release with capabilities and intended-use notes; instruct variants use Gemma's chat template (`<start_of_turn>` conventions) — runtimes template it correctly. Small sizes are the point: these are designed to run where a 70B can't.

## Quantization, serving, hardware

First-class in Ollama, llama.cpp, vLLM, SGLang, MLX (Gemma is a common Apple-silicon pick), plus hosted availability through providers like Sarvam's open-model endpoint. Small parameter counts mean realistic laptop deployment even at moderate quants; the larger sizes serve like any open model of their class.

## When to choose it

**Choose Gemma when** Apache-2.0-clean licensing is a requirement (procurement-safe, no usage restrictions), when small-but-capable is the target (edge, on-device, cheap serving), or when you want Gemini-lineage architecture without Gemini's hosted-only constraint.

**When not to choose it.** If you need the largest open models — Gemma tops out well below the frontier open releases; for maximum open-model capability, look at Llama's or DeepSeek's flagships. Domain-specialized needs (code, multilingual) may be better served by purpose-built families.

**Migration considerations.** Apache 2.0 means zero license friction in or out; the chat-template details differ from Llama's, so template-correctness is the one thing to verify when swapping.
