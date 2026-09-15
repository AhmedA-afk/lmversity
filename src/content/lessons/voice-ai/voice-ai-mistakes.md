---
title: "Voice AI: Common Mistakes"
track: "voice-ai"
status: live
summary: "The eight voice-agent mistakes — the endpointing that cuts people off, the TTS that waits for the whole response, and the latency nobody measured."
duration: "8 min read"
---

The voice mistakes that make a technically-working agent feel broken to talk to.

## 1. Waiting for the final transcript

**The mistake.** The pipeline waits for the STT "final" before starting the LLM — a full extra pause where partial transcripts could have started the work.

**The fix.** Kick off the LLM on stable partials; the final transcript confirms, it doesn't gate. The latency saved is the user's wait.

## 2. TTS that doesn't stream

**The mistake.** The full response is generated, then synthesized, then played — the user hears silence through the whole generation.

**The fix.** Stream TTS sentence-by-sentence; the first sentence plays while the rest generate. Time-to-first-audio is the metric, not total duration.

## 3. Endpointing tuned on clean audio

**The mistake.** The VAD delay tuned in the lab — on real calls with pauses, background noise, and mid-thought gaps, it either cuts users off or waits forever.

**The fix.** Tune endpointing on real call audio, and expose it as a per-context setting — a drive-thru's noise floor differs from a quiet room's.

## 4. No barge-in

**The mistake.** The agent talks, the user can't interrupt — the design assumed the agent's response is always wanted in full.

**The fix.** Barge-in detection that halts the agent's audio on user speech. An uninterruptible agent is a phone tree with a nicer voice.

## 5. The transcript treated as truth

**The mistake.** An STT error ("fifty" for "fifteen") becomes the LLM's premise — the agent answers the wrong question confidently.

**The fix.** Propagate STT confidence; low-confidence transcripts get a clarification prompt, not a confident answer to the wrong question.

## 6. Latency measured per-stage, not end-to-end

**The mistake.** Each stage is "fast enough" — STT 300ms, LLM 1.5s, TTS 400ms — but the perceived delay is the sum plus endpointing, and it's 3+ seconds.

**The fix.** Measure time-to-first-audio end-to-end, the way the user experiences it. Per-stage numbers that don't sum to the user experience are internal metrics.

## 7. No backchannel or filler

**The mistake.** While the LLM thinks, the line is silent — the user wonders if the call dropped.

**The fix.** A filler ("let me check that") or a backchannel during processing — the silence reads as dead air, not thinking.

## 8. Testing on scripted input

**The mistake.** The eval uses clean, read-aloud test audio — real users mumble, pause, and talk over noise; the agent fails on the input distribution it never saw.

**The fix.** Eval on real call recordings (or realistic noise-augmented audio) — the test set should sound like production, not a studio.

**Related:** [Voice AI cheatsheet](/learn/voice-ai/voice-ai-cheatsheet), [Realtime transport and turn-taking](/learn/voice-ai/realtime-transport-and-turn-taking), [Speech recognition in production](/learn/voice-ai/speech-recognition-in-production)
