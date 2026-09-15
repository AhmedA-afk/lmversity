---
title: "Worked Example: Cutting a Voice Agent's Perceived Latency by Two-Thirds"
track: "voice-ai"
status: live
summary: "A 4.5-second voice-agent response walked stage by stage — the end-to-end measurement that found where the wait actually was, and the streaming that fixed it."
duration: "10 min read"
---

A voice agent "felt slow" — users were repeating themselves, assuming it hadn't heard. The perceived latency was 4.5 seconds; the fix found where it actually lived.

## The measurement

End-to-end time-to-first-audio: 4.5s. Per-stage:

| Stage | Time | What it was doing |
|---|---|---|
| Endpointing | 1.2s | A conservative VAD delay waiting for "definitely done" |
| STT final | 0.6s | Waiting for the final transcript before starting the LLM |
| LLM | 1.8s | Full response generated before TTS started |
| TTS | 0.9s | Whole response synthesized, then played |

Every stage was "reasonable" alone; the sum was the problem — and the design made them sequential when they didn't need to be.

## The fixes and what each saved

**Stream the LLM → TTS boundary.** The LLM streams sentences; TTS synthesizes each as it arrives. The 1.8s + 0.9s collapse into ~1.0s to first audio (first sentence's LLM time + its TTS). **Saved ~1.7s.**

**Start the LLM on the stable partial.** The STT emits a stable partial ~0.4s before the final; the LLM starts on it. **Saved ~0.4s** — and the final transcript still confirms.

**Tune the endpointing.** The 1.2s VAD delay was defensive — tuned on clean audio. On real speech, a 0.5s delay plus an "are you still there" fallback after 2s performed better. **Saved ~0.7s.**

## The result

4.5s → 1.8s perceived latency — under the ~2s threshold where users stop repeating themselves. No stage got a new model or a new vendor; the pipeline's *sequencing* was the latency.

## What the example teaches

- **The perceived latency is the sum.** Per-stage "fast enough" doesn't compose to "fast enough" — the user hears the end-to-end.
- **Sequential stages are a design choice, not a requirement.** Streaming the boundaries is where most of the win lives.
- **The endpointing delay is a dial, not a constant.** Tuned on real audio, it's a tunable tradeoff, not a fixed tax.

## The check

Measure time-to-first-audio end-to-end, then ask which stages are sequential only because nobody streamed them. The latency is usually in the plumbing, not the models.

**Related:** [Voice AI mistakes](/learn/voice-ai/voice-ai-mistakes), [Voice AI cheatsheet](/learn/voice-ai/voice-ai-cheatsheet), [Realtime transport and turn-taking](/learn/voice-ai/realtime-transport-and-turn-taking)
