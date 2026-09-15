---
title: "Sarvam AI"
description: "Sarvam's Indus platform mapped: Saaras STT, Bulbul TTS, Sarvam-105B chat, Mayura translation, Sarvam Vision document AI — trained for 22 Indian languages plus English, not adapted from an English-first baseline."
vendor: sarvam
covers: ["consumer-app", "api", "coding-agent"]
verifiedAt: "2026-09-15"
related:
  - /learn/genai-app-dev/realtime-voice-agent-project
  - /learn/genai-app-dev/provider-layer-cheatsheet
sources:
  - sarvam-api-docs
  - sarvam-status
---

## What this page covers

Sarvam's **Indus platform** — a full-stack AI platform whose models are *trained* for 22 Indian languages and English rather than adapted from an English-first baseline. That distinction is the product: code-mixed speech, Indic scripts, and regional accents are first-class inputs, not edge cases. Verified against official docs on 2026-09-15.

## Product map

**Model APIs** (one API key, REST/WebSocket/batch, Python + JS SDKs):

- **Saaras v3** — speech-to-text: 23 languages, transcribe/translate/verbatim/translit/codemix output modes, realtime WebSocket API (`saaras:v3-realtime` — partial transcripts, mid-stream reconfig, VAD tuning) added August 2026.
- **Bulbul v3** — text-to-speech: 11 languages, pitch/pace/speaker control.
- **Sarvam-105B** — flagship chat model, 128K context, tuned for Indic reasoning.
- **Mayura** — translation/transliteration/language-detection, 11 languages.
- **Sarvam Vision** — document intelligence: OCR + structured output across 23 languages, handwritten forms included.
- **Hosted open models** — GLM-5.2 and Gemma 4 31B available (beta) through `/v2/chat/completions`.

**Products above the APIs:** Voice Agents (build/deploy/monitor phone + chat agents in 10 Indian languages — LiveKit, Pipecat, Vapi, Twilio, Exotel integrations; bring your own telephony or rent numbers), Doc Agents (no-code document extraction), Content Studio (browser dubbing/voice cloning), Cowork (agentic workspace), and a Coding Agent for terminal/IDE.

**Deployment:** self-hosted options on AWS SageMaker (Saaras, Bulbul, Vision in your own VPC) — the data-residency answer for regulated Indic workloads.

## Official links

- Docs: `docs.sarvam.ai` (`llms.txt` + `llms-full.txt` published; MCP server for doc-aware agents)
- Status: `status.sarvam.ai` · Pricing/rate limits/errors: inside the docs
- Dashboard: `dashboard.sarvam.ai` · Cookbook repo: `github.com/sarvamai/sarvam-ai-cookbook`

## Getting started shape

API key + REST or WebSocket; official Python/JS SDKs plus integrations for LangChain (`langchain-sarvam`), Vercel AI SDK, n8n. The shape that matters: language is a first-class parameter — `language_code` and output mode (`transcribe`/`translate`/`codemix`) are part of the request contract, not an afterthought.

## Naming, aliases, deprecation

Model IDs carry versions (`saaras:v3`, `saaras:v3-realtime`, `bulbul:v3`, `sarvam-105b`). The docs publish a changelog (the August 2026 realtime + hosted-open-model additions came through it). Pin explicit versions.

## Data policy and enterprise controls

Self-hosted deployment on SageMaker is the enterprise answer — your VPC, your boundary. For the hosted API, Sarvam's terms and privacy policy apply; for telephony agents, remember the call audio itself is PII before it ever reaches the model.

## Minimal lab

The lab writes itself here: transcribe a code-mixed audio clip with Saaras (English+Hindi in one utterance — the case every English-first STT mangles), translate the transcript with Mayura, synthesize a reply with Bulbul, then ask Sarvam-105B the same question in English and in Hindi and compare quality. That pipeline is the provider-neutral equivalent too: run the same code-mixed clip through a big-three STT and compare honestly.

## When to choose it

**Choose Sarvam when** Indian-language speech, documents, or code-mixed input is the core workload — that's what the models are trained for, and the telephony integrations make phone agents the obvious product fit. Also when Indic document intelligence (KYC forms, land deeds, handwriting) is the workload, or when self-hosted Indic models inside your VPC are a compliance requirement.

**When not to choose it.** If your workload is English-first text generation, the frontier providers still lead on general reasoning — Sarvam-105B's edge is Indic understanding, not beating GPT-class models on English benchmarks. Image/video generation isn't offered. And outside the 22-language focus, coverage is thinner by design.

**Migration considerations.** The APIs are proprietary in shape (language/mode parameters don't map 1:1 to other vendors), but the hosted-open-model endpoint (`/v2/chat/completions` with GLM/Gemma) gives a compatibility bridge for general chat traffic. The self-hosted SageMaker path is the real exit ramp — same models, your infrastructure.
