---
title: "Granite (open weights)"
description: "IBM's Granite open-model family: Apache-2.0 enterprise-grade open models with indemnification posture, current 4.x lineup, and the conservative enterprise angle on open weights."
vendor: ibm
covers: ["open-model"]
verifiedAt: "2026-09-15"
related:
  - /learn/local-inference/vllm-production-serving
  - /learn/llm-security/llm-supply-chain-security
sources:
  - hf-ibm-granite
---

## What this page covers

IBM's **Granite** open-model family — the enterprise-conservative option in open weights: Apache-2.0 licensing, corporate backing, published model governance, and distribution that includes watsonx and the usual open channels. Verified against Hugging Face cards on 2026-09-15.

## Family and license map

**Apache 2.0** across the Granite 4.2 line (`granite-4.2-30b`, `-8b`, `-3b` + GGUF/NVFP4/MXFP4 quantized variants). IBM's enterprise posture adds what other families don't: indemnification positioning for enterprise customers and published data-governance practices — relevant if your legal team asks "who stands behind this model." Some adjacent releases (timeseries foundation models) carry `openmdw-1.0` — check per card.

## Model cards and prompt format

Thorough cards with training-data documentation IBM is known for being unusually transparent about. Chat template is standard; quantized variants ship officially (GGUF/NVFP4/MXFP4) rather than community-only.

## Quantization, serving, hardware

Official quant variants plus standard runtime support (vLLM, llama.cpp, Ollama, TGI). The 3B–30B range targets enterprise serving budgets deliberately — sized for single-GPU and small-cluster deployment, not consumer laptops.

## When to choose it

**Choose Granite when** enterprise procurement is the frame: Apache-2.0 + IBM backing + governance documentation + indemnification posture answers the questions legal actually asks. Also when you want a boringly-solid open model sized for real serving budgets rather than the biggest thing available.

**When not to choose it.** If you want the strongest open model per benchmark — Granite competes on trust and fit, not on topping leaderboards. Consumer/edge deployment isn't the target. And the family is narrower (no big multimodal or code-specialized line at Llama/Qwen breadth).

**Migration considerations.** Apache-2.0 + standard formats make it a clean citizen in any runtime. IBM's watsonx distribution gives a managed path alongside self-hosting — unusual flexibility for an open family.
