---
title: "Speech across languages"
track: "multilingual-ai"
status: live
summary: "Extend voice systems beyond English — ASR accuracy by language and dialect, code-mixed speech, multilingual TTS, and when specialist speech providers win."
duration: "10 min read"
sources:
  - sarvam-api-docs
  - openai-speech-docs
---

Voice multiplies every multilingual problem. Text users at least type a language you can detect; voice users speak dialects, accents, and code-mixed sentences that ASR systems — like LLMs — serve unevenly.

## ASR: the accuracy gap is per-language and per-dialect

Speech recognition quality follows training data even more steeply than text models. Major providers cover major languages well; coverage drops for low-resource languages, and drops *again* for dialects and accented speech within a covered language. Two numbers to measure before committing: word error rate on *your* audio (domain vocabulary, real microphones, real accents) — never the vendor's demo audio — and language-identification accuracy if you auto-route.

**Code-mixed speech is its own problem.** Spoken code-mixing is more common than written — bilingual speakers switch mid-sentence constantly. ASR systems that expect one language per utterance produce garbage on mixed speech; systems trained on mixed corpora handle it. If your market is bilingual, test specifically with natural mixed-speech recordings. Specialists exist here too — for Indian languages, providers like [Sarvam](/providers/sarvam) build ASR specifically for these acoustic and mixing patterns.

## Multilingual TTS: naturalness and voice identity

Text-to-speech quality varies per language independently of ASR. A provider can transcribe a language beautifully and synthesize it stiffly. Check: prosody naturalness (robotic rhythm is the tell), correct handling of code-mixed text (does it switch pronunciation models mid-sentence?), numeral/date/entity rendering in-language, and whether available voices match your users' expectations — a mismatch between voice persona and language register is immediately audible to native speakers.

The mechanics — streaming synthesis, latency budgets, barge-in — are language-independent and covered in [Voice AI Engineering](/learn/voice-ai/voice-ai-pipeline-overview); this lesson is about the parts that aren't.

## Architecture consequences

- **Component choice may split by language.** Your English traffic can run one ASR/TTS pair while another language needs a specialist — router-by-language is normal, not a hack.
- **End-to-end latency grows.** Specialist providers may sit in different regions; measure the whole turn (utterance end → first audio byte) per language, not the median across all.
- **Eval must be per-language.** Aggregate WER hides a terrible language behind two good ones. Keep per-language-and-dialect scorecards, and include code-mixed audio as its own slice — the same stratification discipline as [Designing multilingual evaluations](/learn/evals-red-teaming/multilingual-evaluation-design).

## When speech is the whole product

If voice is the primary interface for a low-resource-language market, the specialist-versus-generalist decision is the product decision — test it with real users' voices before anything else. The lab in the [voice track](/learn/voice-ai/voice-agent-lab) generalizes; swap the speech components and keep the harness.

**Related:** [Voice AI pipeline overview](/learn/voice-ai/voice-ai-pipeline-overview), [Multilingual model landscape](/learn/multilingual-ai/multilingual-model-landscape), [Designing multilingual evaluations](/learn/evals-red-teaming/multilingual-evaluation-design)
