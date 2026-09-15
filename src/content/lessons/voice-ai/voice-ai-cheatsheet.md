---
title: "Voice AI Cheatsheet"
track: "voice-ai"
status: live
summary: "The voice-pipeline reference — STT/LLM/TTS in order, where latency lives, and the turn-taking failures that make a voice agent feel broken."
duration: "6 min read"
---

The voice track compressed to the pipeline stages, the latency budget, and the turn-taking design that separates "responsive" from "broken."

## The pipeline in order

- **VAD / turn detection** — when the user stops speaking, the pipeline starts; get this wrong and everything downstream is late.
- **STT (speech-to-text)** — audio → transcript; streaming partials vs final transcript is a latency decision.
- **LLM** — transcript → response text; the reasoning step, usually the latency bottleneck.
- **TTS (text-to-speech)** — response text → audio; streamed sentence-by-sentence, not all-at-once.

## Where the latency lives

| Stage | Typical contribution | The lever |
|---|---|---|
| VAD/endpointing | 300–800ms | Tune the endpointing delay — too short cuts users off |
| STT | 200–500ms | Streaming partials, not batch |
| LLM | 1–3s | The bottleneck — small model, cached prompts, streaming |
| TTS | 300–700ms | Stream the first sentence, don't wait for the whole |

The rule: the user perceives total time-to-first-audio. Every stage's latency adds; the LLM usually dominates and is where the optimization effort goes.

## The turn-taking design that matters

- **Endpointing delay** — too short cuts mid-thought, too long feels sluggish; tune on real speech, not a default.
- **Barge-in** — can the user interrupt? A voice agent that can't be interrupted feels broken.
- **Backchanneling** — "mm-hmm" while the user speaks signals listening; absent it, the line feels dead.
- **Partial transcript handling** — STT partials can start the LLM early; waiting for the final transcript is a latency choice.

## The failure modes in one line each

- **Waiting for the final transcript** — the pipeline stalls on STT completion when partials could start the LLM.
- **Non-streamed TTS** — the whole response synthesized before the first byte; time-to-first-audio is the full generation.
- **Endpointing tuned on clean audio** — real speech has pauses and noise; the lab-tuned delay misfires on users.
- **No barge-in** — the user can't interrupt; the agent talks over them.
- **The transcript treated as ground truth** — an STT error becomes the LLM's premise; propagate the confidence.

## The decision rules

- Optimize time-to-first-audio — the user hears the pipeline end-to-end.
- Stream at every stage that supports it — STT partials, LLM tokens, TTS sentences.
- Tune endpointing on real speech — lab audio isn't production audio.
- Barge-in is non-negotiable — an uninterruptible voice agent is a phone tree.

**Related:** [Voice AI pipeline overview](/learn/voice-ai/voice-ai-pipeline-overview), [Realtime transport and turn-taking](/learn/voice-ai/realtime-transport-and-turn-taking), [Voice agent lab](/learn/voice-ai/voice-agent-lab), [Voice evaluation and testing](/learn/voice-ai/voice-evaluation-and-testing)
