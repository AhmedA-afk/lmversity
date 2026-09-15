---
title: "Evaluating voice agents: the metrics that predict real UX"
track: "voice-ai"
status: live
summary: "Testing voice systems: WER and its limits, perceptual quality, latency percentiles, scripted-call evals, and regression-testing the pipeline per stage and end-to-end."
duration: "9 min read"
sources: ["deepgram-docs", "pipecat-docs"]
---

## The short answer

Voice agents fail in ways text evals can't see: the ASR was right but the
turn-taking cut the user off; the answer was correct but took 3 seconds of
dead air; the voice drifted after a provider model update. Voice evaluation
is per-stage (WER, synthesis quality), systems-level (latency
percentiles, barge-in success), and conversational (did the call
accomplish its goal) — measured on *your* audio, not vendor benchmarks.

## Per-stage metrics

**ASR**: WER as the baseline plus domain-keyword accuracy (the errors that
cost you) and endpointing latency — on a labeled set built from real
calls. **TTS**: perceptual quality via listening tests (MOS-style human
ratings on samples) — there's no good automatic proxy; regression-check
pronunciation on your domain dictionary after every provider model
update (voices drift silently). **LLM**: the same text-level evals you
already run, but scored on the *transcript* of what the agent said —
ASR errors upstream mean the LLM's effective input differs from what the
user said.

## Systems-level: latency and interruption

The two UX-defining measurements: **dead-air distribution** (p50/p95/p99
silence per turn — the mean hides the tail users remember) and
**barge-in success rate** (fraction of interruptions handled correctly —
detected, TTS stopped, new turn routed — split by real-interruption vs
backchannel). Add **time-to-first-audio** (speech-end to agent's first
sound) as your headline latency — it's the number users feel.

## Conversational evals: scripted calls

Unit metrics don't tell you the agent *works*. The production pattern:
**scripted call scenarios** — recorded or simulated conversations with a
goal (book the appointment, resolve the ticket) — run through the real
pipeline, scored on task completion, turn-taking quality, and failure
modes (looped clarifications, dropped context, hallucinated offers).
Run a fixed call suite as regression coverage on every pipeline change:
a model swap that improves WER can regress endpointing and make the
agent worse.

## Regression testing the pipeline

The voice pipeline has N moving parts that version independently: ASR
model, LLM, TTS model/voice, VAD tuning, prompts. Pin each, version-test
each on change (the provider-model-drift problem hits voice hardest —
your ASR and TTS providers update under you), and keep the golden set of
real-call audio + transcripts + expected behavior as the gate. Log raw
audio (within consent/privacy bounds) in production — when evals regress,
the audio is how you tell whether the world changed or the model did.
