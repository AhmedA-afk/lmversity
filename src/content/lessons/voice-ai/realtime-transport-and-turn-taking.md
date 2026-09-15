---
title: "Realtime transport and turn-taking: the hardest part of voice"
track: "voice-ai"
status: live
summary: "WebRTC vs WebSocket vs SIP for voice agents, full-duplex audio, barge-in and interruption handling, turn detection — the systems layer where voice agents actually live or die."
duration: "11 min read"
sources: ["livekit-docs", "pipecat-docs", "openai-realtime-docs"]
---

## The short answer

The AI part of a voice agent is the easy half; the hard half is **realtime
audio systems**: getting low-latency full-duplex audio between a human and
your pipeline, detecting turns correctly, and handling interruption
(barge-in) gracefully. This is the layer where demos become products —
or don't.

## Transport: WebRTC, WebSocket, or SIP

**WebRTC** is the right default for real-time voice in browsers/apps:
built for media, handles jitter/packet loss/echo cancellation natively,
sub-100ms latency achievable. The catch: it's a heavier protocol stack —
in practice you run it through an SFU/media layer (LiveKit-class) rather
than hand-rolling. **WebSocket** carries audio fine for simpler cases
(server-side agents, lower-stakes UX) — easier to implement, but you own
jitter buffering and echo handling yourself, and it degrades on lossy
networks where WebRTC adapts. **SIP/telephony** is the phone-call path —
agents that answer real phone numbers bridge through SIP providers into
your pipeline; telephony audio (8kHz, narrowband) constrains your ASR
upstream. Pick per surface: browser/app = WebRTC; internal tooling =
WebSocket acceptable; phone calls = SIP.

## Full-duplex and the echo problem

Humans talk over each other; your agent must too. **Full-duplex** means
the mic stays open while the agent speaks — which feeds the agent's own
voice back into the ASR (echo). WebRTC's echo cancellation handles the
mechanical part; the design part is deciding *what the agent does when it
hears speech mid-utterance* — that's barge-in.

## Barge-in and interruption — the UX-defining behavior

A voice agent that can't be interrupted feels like a phone tree from
2005. Barge-in design has three decisions: **detection** (VAD flags user
speech during agent output — distinguishing "mm-hmm" backchannel from a
real interruption is the hard part), **response** (stop TTS playback
immediately, discard the buffered audio, route the new speech to ASR),
and **state** (was the interrupted thought committed? partial utterances
the agent was mid-way through need a policy: drop, summarize-then-answer,
or resume). Getting barge-in right is the difference between "talking to
a person" and "fighting a robot."

## Turn detection — the state machine underneath

Endpointing (from the ASR lesson) feeds a **turn detector**: a model or
heuristic deciding "the user is done, it's the agent's turn." Options:
pure VAD timing (silence threshold), semantic turn-end detection
(model-based, catches "let me think—" trailing), or hybrid. Tune it on
your real conversation distribution — users who pause mid-sentence
("the account number is… um…") need patient endpointing; quick back-and-
forth chat needs aggressive. This plus barge-in *is* the conversational
feel — nothing else about the agent matters as much to UX.

## The orchestration layer

You don't build this from scratch: **LiveKit-class** platforms handle
WebRTC rooms, media routing, and agent integration; **Pipecat-class**
frameworks wire the VAD→ASR→LLM→TTS pipeline with interruption handling
built in. The architecture decision is which layer you own vs which the
framework owns — the pipeline lesson covers that build/buy split.
