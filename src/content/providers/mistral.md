---
title: "Mistral AI"
description: "Mistral's surface mapped: La Plateforme API, Le Chat, the open-weight and commercial model families (Medium, Large, Small, Ministral, Codestral, Voxtral, OCR), its dated-ID convention and lifecycle policy — plus when-to-choose guidance."
vendor: mistral
covers: ["consumer-app", "api", "open-model"]
verifiedAt: "2026-09-15"
related:
  - /learn/local-inference/ollama-first-run
  - /learn/genai-app-dev/provider-layer-cheatsheet
sources:
  - mistral-model-docs
  - mistral-pricing
  - mistral-status
---

## What this page covers

Three surfaces: **La Plateforme** (the API, `docs.mistral.ai`), **Le Chat** (the consumer/work assistant), and Mistral's **open-weight releases** (downloadable models you can self-host). Verified against official docs on 2026-09-15.

## Product map

**API platform (La Plateforme).** Chat completions plus specialized endpoints: OCR, embeddings, moderation, audio transcription, code (Codestral/FIM), agents, and batch. Distinctive documented features: a **model lifecycle policy** page (deprecation → retirement schedule with alternatives), **regional inference** options, and a **Priority Tier**. Mistral also hosts select third-party open models (e.g. Z.ai GLM) alongside its own.

**Model lineup** (verified 2026-09-15):

- **Frontier/commercial** — Mistral Medium 3.5 (multimodal, agentic/coding, Modified MIT license).
- **Open-weight generalist** — Mistral Large 3, Mistral Small 4 (hybrid instruct/reasoning/coding), Ministral 3 in 3B/8B/14B (all Apache 2.0).
- **Code** — Codestral (Premier license — code completion, FIM) and Codestral Embed.
- **Document** — OCR 4.1/4.0/3 (Premier): paragraph-level bounding boxes, structural labels, confidence scores.
- **Audio** — Voxtral family: TTS (CC BY-NC — non-commercial!), Mini Transcribe (Apache 2.0 / Premier variants), realtime transcription, Voxtral Small audio-input instruct.
- **Safety** — Shieldstral (Apache 2.0 multimodal moderation) and Mistral Moderation 2.
- **Specialist** — Leanstral for Lean 4 formal proofs; Mistral Embed.
- **Deprecated table** — the docs publish a deprecation schedule with date-versioned API names (`mistral-medium-2508`), deprecation/retirement dates, and named successors — a model for how to do this.

**Le Chat.** The consumer/team assistant — web search, canvas, enterprise deployment options; the showcase rather than the dev surface.

**Open weights.** Large 3, Small 4, Ministral 3 (Apache 2.0) and earlier releases are downloadable — the self-hosting path runs through the local-inference runtimes (vLLM, llama.cpp, Ollama).

## Official links

- Docs: `docs.mistral.ai` · Pricing: `mistral.ai/pricing` · Console: `console.mistral.ai`
- Status: `status.mistral.ai` (returns 403 to automated probes — check in a browser)
- Model lifecycle policy: inside the docs' Inference section

## Getting started shape

API key + chat completions endpoint; OpenAI-compatible shape makes porting trivial. Capabilities documented: streaming, JSON mode/structured output, function calling, embeddings, OCR, moderation, batch. The FIM endpoint (fill-in-the-middle) on Codestral is the interesting one for editor-style completions.

## Naming, aliases, deprecation

Date-versioned IDs (`mistral-medium-2508`, `mistral-small-2506`) pin exact builds; the lifecycle policy publishes deprecation and retirement dates plus the successor model per row — the clearest migration contract among mid-size providers. License per release matters: Apache 2.0, Modified MIT, Premier, and CC BY-NC all appear in one lineup — **check the license field on the model card before you ship**, because the Voxtral TTS model is non-commercial.

## Minimal lab

Four-call smoke test: one Medium 3.5 completion, one streamed, one function-calling round trip, one OCR call on a real PDF (it's the capability competitors don't match at this size). Provider-neutral equivalent: same calls through your adapter, plus pull a Ministral 3 model in Ollama to prove the self-hosted ramp works.

## When to choose it

**Choose Mistral when** you want open weights without giving up a managed API (Apache 2.0 releases + hosted identicals), when EU data residency or European-procurement considerations matter, when OCR/document AI is a real workload, or when efficient small models (Ministral 3) beat renting frontier tokens for your task.

**When not to choose it.** If you need the largest frontier reasoning models, Medium 3.5 is frontier-class but the big three's flagships still lead on some evals — verify on yours. Voxtral TTS's non-commercial license rules it out for commercial voice. The ecosystem and eval literature are thinner than OpenAI/Anthropic/Google's.

**Migration considerations.** OpenAI-compatible shape plus downloadable Apache-2.0 weights give the best exit ramp in the industry: API today, self-host the same weights tomorrow if pricing or policy shifts. The lifecycle policy makes upgrades plannable instead of surprising.
