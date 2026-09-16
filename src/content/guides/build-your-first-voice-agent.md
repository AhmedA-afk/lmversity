---
title: "Build your first voice agent"
description: "A working speech-in, speech-out agent — VAD, streaming ASR, LLM, streaming TTS, barge-in — with the latency budget that decides whether it feels like a conversation."
question: "How do I build a voice agent?"
level: "intermediate"
duration: "35 min"
published: "2026-09-16"
tags: ["Voice AI", "Streaming", "Agents"]
steps:
  - "Choose cascaded or speech-to-speech architecture"
  - "Wire audio input with voice-activity detection"
  - "Stream transcription with partials and finals"
  - "Generate the response and stream synthesis"
  - "Implement barge-in and cancellation"
  - "Measure the silence budget end to end"
related:
  - "/learn/voice-ai/voice-ai-pipeline-overview"
  - "/learn/voice-ai/voice-agent-lab"
  - "/learn/voice-ai/realtime-transport-and-turn-taking"
  - "/learn/voice-ai/voice-evaluation-and-testing"
---

A voice agent is four streaming systems glued together with a latency budget. This guide builds the provider-neutral version — the pipeline shape transfers to whatever vendors you choose; the [voice-agent lab](/learn/voice-ai/voice-agent-lab) walks the same build stage by stage.

## 1. Choose the architecture

**Cascaded** (ASR → LLM → TTS) is debuggable, swappable per stage, and the right first build. **Speech-to-speech** (one realtime model end to end) is simpler to wire but harder to inspect. Build cascaded first so you can see every stage's output; the trade-offs are in [Voice AI pipeline overview](/learn/voice-ai/voice-ai-pipeline-overview).

## 2. Audio in, with VAD

Get microphone audio to a buffer; gate it with voice-activity detection so silence and noise don't become ASR calls. Deliverable: logged `speech-start`/`speech-end` events with timestamps. Browser builds want WebRTC-style capture (echo cancellation matters); server builds can take a WebSocket of raw PCM.

## 3. Streaming transcription

Send audio chunks to ASR as they arrive — don't wait for utterance end. Handle **partials** (provisional text, display or discard, never commit) and **finals** (committed text that triggers the LLM). Endpointing — deciding the user finished — is a VAD + silence-threshold decision; get it wrong and the agent interrupts or waits awkwardly. Details: [Speech recognition in production](/learn/voice-ai/speech-recognition-in-production).

## 4. Generate and synthesize, both streaming

On a final transcript, call the LLM *streaming* — and start TTS on the first sentence, not the full reply. Chunked synthesis is where perceived latency is won: the user hears audio while the rest of the sentence is still generating. Voice design and SSML tuning: [Speech synthesis and voice design](/learn/voice-ai/speech-synthesis-and-voice-design).

```ts
// Sentence-boundary streaming: TTS starts on the first complete sentence.
asr.on("final", async (transcript) => {
  const stream = llm.stream(transcript);
  let sentence = "";
  for await (const token of stream) {
    sentence += token;
    if (/[.!?]\s$/.test(sentence)) {          // sentence boundary
      tts.enqueue(sentence);                   // synthesize immediately
      sentence = "";
    }
  }
  if (sentence.trim()) tts.enqueue(sentence);  // trailing fragment
});
```

## 5. Barge-in — the feature that makes it a conversation

While TTS plays, keep VAD listening. On `speech-start` during playback: stop synthesis, cancel the in-flight LLM stream, and treat the new audio as the next turn. Without this you built a walkie-talkie. The full turn-taking model: [Realtime transport and turn-taking](/learn/voice-ai/realtime-transport-and-turn-taking).

## 6. Measure the silence budget

Log per-stage timestamps and compute the gap: end of user speech → first audio byte out. That's the number users feel. Break it down per stage (endpointing + ASR-final + LLM-first-token + TTS-first-byte) to find where the silence lives — then optimize the biggest contributor, not the loudest vendor claim.

## Where to go next

Evaluate it like a system, not a demo: [Voice evaluation and testing](/learn/voice-ai/voice-evaluation-and-testing) covers WER, perceptual quality, latency percentiles, and scripted test calls. For orchestration patterns (tool calls mid-call, handoffs), see [Voice agent orchestration](/learn/voice-ai/voice-agent-orchestration).
