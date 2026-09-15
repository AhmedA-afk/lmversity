---
title: "OLMo (open weights)"
description: "AI2's OLMo family: the fully-open option — weights, training data, code, and logs published — Apache-2.0, built for research and audit rather than leaderboard-chasing."
vendor: ai2
covers: ["open-model"]
verifiedAt: "2026-09-15"
related:
  - /learn/llm-foundations
  - /learn/llm-security/llm-supply-chain-security
sources:
  - hf-allenai-olmo
---

## What this page covers

AI2's **OLMo** — the *most* open family in open models: not just weights but training data, training code, checkpoints, and logs published. The point is auditability and research, not leaderboard position. Verified against Hugging Face cards on 2026-09-15.

## Family and license map

Main-line OLMo releases carry **Apache 2.0** — clean and usable. Some adjacent releases (OlmoEarth earth-observation models) carry `other` — as always, per-card check. What sets OLMo apart isn't the license text but the disclosure depth: if you need to answer "what exactly was this trained on," OLMo is the family that can answer.

## Model cards and prompt format

Cards are unusually complete — training data composition, code, intermediate checkpoints, logs. For teaching and research, this transparency is the feature: you can trace capability to data in a way no commercial-adjacent family allows.

## Quantization, serving, hardware

Standard runtime support (Ollama, llama.cpp, vLLM); sizes target research-realistic hardware — you can actually train/fine-tune/serve these on academic-scale infrastructure, which is the design intent.

## When to choose it

**Choose OLMo when** transparency is the requirement — research, audits, teaching, regulatory review, or any case where "what's inside" must be answerable — or when you want a genuinely open base for fine-tuning with full data provenance.

**When not to choose it.** If you want maximum capability per parameter — OLMo trades leaderboard position for openness. Ecosystem tooling is thinner than Llama/Qwen's. Production-at-scale deployments work but it's not where the family's effort goes.

**Migration considerations.** Fully open means fully portable — weights, data, and code move together. If your concern is a vendor changing terms later, OLMo's published-everything model is the strongest hedge that exists.
