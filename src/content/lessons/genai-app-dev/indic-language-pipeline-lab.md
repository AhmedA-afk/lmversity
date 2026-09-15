---
title: "Lab: build an Indic-language pipeline end to end"
track: "genai-app-dev"
status: live
summary: "Hands-on lab: code-mixed speech in, translated and synthesized speech out, plus Indic document extraction — the pipeline pattern that powers real Indian-language features."
duration: "14 min read"
---

## What you're building

The reference pipeline for Indic-language products: **speech in → understand → respond → speech out**, plus a document-extraction branch. You can build it on any provider with Indic coverage — [Sarvam](/providers/sarvam) is the purpose-built option (Saaras/Bulbul/Mayura/Vision, telephony integrations), the big providers' multilingual models are the generalist alternative. The lab is written provider-neutral with Sarvam as the concrete example.

## Step 1 — Code-mixed speech-to-text

The discriminating test: an utterance that mixes languages mid-sentence — "मेरा order kal aana tha, tracking update chahiye" — the normal way people actually speak.

```python
# Sarvam Saaras — codemix output mode is a first-class parameter
resp = client.speech_to_text.transcribe(
    file=open("mixed_audio.wav", "rb"),
    model="saaras:v3",
    mode="codemix",      # transcribe the mix as-spoken, don't force one language
)
```

What to check: does the transcript preserve the mix (Hindi in Devanagari + English in Latin script), or does it flatten everything into one script? Flattened output is a correctness failure for downstream use, even if the words are right. Try the same clip through a generalist STT — comparing where each fails is the real lesson.

## Step 2 — Language detection and transliteration

Two utilities that look small and carry real product weight:

- **Detection before routing.** Detect input language per message, not per user — people switch mid-conversation. A wrong language assumption upstream corrupts everything downstream.
- **Transliteration ≠ translation.** "Ramesh" → "रमेश" is transliteration (same sound, different script); "Hello" → "नमस्ते" is translation. Confusing them is the classic bug: names, brands, and addresses need transliteration, meaning needs translation. Mayura-style text-processing APIs expose both — call the right one per field.

## Step 3 — Response generation in-language

Ask the chat model in the user's language, for the user's locale — not just "answer in Hindi" but "answer for a reader in Jaipur." Units, date formats, currency, forms of address, and idiom choice are where in-language generation succeeds or reads like translated English. If output smells like translationese, the fix is usually locale specification in the prompt, not a bigger model.

## Step 4 — Speech synthesis back

TTS closes the loop. The parameters that matter beyond voice choice: pitch and pace (Indian-language TTS that runs English pacing sounds wrong), speaker selection per language, and — for voice agents — streaming synthesis so the response doesn't wait for full generation. Bulbul-class APIs take language + speaker + controls per request.

## Step 5 — The document branch

Indic document AI is its own workload: KYC forms, land records, handwritten forms, mixed-script documents (printed Devanagari + handwritten English numerals). The document-intelligence call returns structured fields plus layout — test on *real form shapes*, not clean PDFs: handwriting, stamps over text, poor scans, mixed scripts in one document. That variance is the workload.

## Evaluation hook

Wire the pipeline into the [multilingual eval design](/learn/evals-red-teaming/multilingual-evaluation-design) discipline: per-language scores, code-mixed as its own category, native-speaker review on samples. A pipeline that "works in the demo" and fails on real code-mixed audio is the failure this lab exists to surface early.

## Common mistakes

- Assuming English-model quality transfers — measure per language, always.
- Treating code-mixing as an error case — it's the common case.
- Translation where transliteration was needed (and vice versa).
- Testing on clean formal text — the long tail is informal, abbreviated, code-mixed.
- Forgetting response-language checks in the eval — fluent English answers to Hindi inputs.

## Go deeper

- [Sarvam provider hub](/providers/sarvam) — the full Indus platform map.
- [AI4Bharat](/providers/ai4bharat) — open Indic datasets and benchmarks for your eval set.
- [Bhashini](/providers/bhashini) — the public-infrastructure alternative for citizen-facing work.
- [Realtime voice agent project](/learn/genai-app-dev/realtime-voice-agent-project) — the streaming architecture this pipeline plugs into.
