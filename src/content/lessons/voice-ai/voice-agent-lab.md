---
title: "Lab: build a minimal voice agent (provider-neutral)"
track: "voice-ai"
status: live
summary: "A hands-on lab wiring VAD→ASR→LLM→TTS with streaming and barge-in — the provider-neutral shape that transfers to any vendor stack."
duration: "12 min read"
sources: ["pipecat-docs", "livekit-docs", "openai-realtime-docs"]
---

## What you'll build

A minimal but real voice agent: microphone → VAD → streaming ASR → LLM →
streaming TTS → speaker, with barge-in and per-stage latency logging. The
point isn't vendor code — it's the pipeline *shape*, which is identical
whether your stages are Deepgram/GPT/ElevenLabs or all-local.

## The architecture

```
┌─ mic ─→ audio buffer ─→ VAD ──────────────┐
│                            │              │
│                     ASR (streaming)       │
│                            │              │
│                     LLM (streaming)       │
│                            │              │
│                     TTS (chunked)         │
│                            │              │
└─ speaker ←── audio out ←──┘               │
   barge-in: VAD during output → stop TTS ──┘
```

## The stages — pick your vendors

**1. Transport + VAD.** Get audio in with a VAD gating "is speech". For a
local lab, WebSocket + a VAD library works; for browser-based, WebRTC
through a LiveKit-class layer handles echo/jitter for you. Deliverable:
VAD events logged (speech-start, speech-end) with timestamps.

**2. ASR.** Stream audio to your ASR; handle partials (log, don't commit)
and finals (commit to the LLM). Deliverable: partial/final transcript
stream + endpointing latency measured.

**3. LLM.** Send final transcripts to a streaming LLM with a voice-shaped
prompt (short sentences, speakable output, confirm-before-acting).
Deliverable: streaming text out, first-token latency logged.

**4. TTS.** Chunk the LLM stream on sentence boundaries → synthesize per
chunk → play. Deliverable: time-to-first-audio per turn.

**5. Barge-in.** While TTS plays, keep VAD live; on user speech, stop
playback, discard buffered audio, route speech to ASR. Deliverable: an
interruption during agent speech that correctly starts a new turn.

## The acceptance criteria — measure, don't vibe

- **Time-to-first-audio** (speech-end → first agent sound) < 1.5s on
  commodity hardware — the number users feel.
- **Barge-in works**: interrupting mid-sentence starts a new turn without
  the agent finishing its thought over you.
- **Dead-air p95** across 20 scripted turns < 2s.
- **Transcript log** shows the full loop: VAD events, partial→final ASR,
  LLM turns, TTS chunks — observable, not a black box.

## Provider-neutral by construction

Every stage is an interface: `transcribe(audioStream) → transcriptStream`,
`generate(textStream) → textStream`, `synthesize(textStream) →
audioStream`. Swap any vendor by implementing the interface — the lab's
value is the seams, which is where production voice agents actually
integrate. For a hosted alternative, a speech-to-speech API collapses
stages 2–4 into one call — build the cascade first so you know what the
S2S model is hiding from you.

## Where this bites in production

This lab is the skeleton every production voice agent has under the
framework: LiveKit/Pipecat-class frameworks wire exactly these stages
with the interruption handling pre-built. Do the lab once so the
frameworks are legible; then use them — the framework owns the plumbing,
you own the prompts, tools, and evals.
