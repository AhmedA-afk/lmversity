---
title: "Voice AI system design: owning the pipeline vs renting it"
track: "voice-ai"
status: live
summary: "The build-vs-buy decision for voice agents: which pipeline layers to own (transport, orchestration, evals), which to rent (models, telephony), and the compliance surface voice adds."
duration: "9 min read"
sources: ["livekit-docs", "pipecat-docs"]
---

## The short answer

A production voice system is a build-vs-buy decision per layer: rent the
models (ASR/TTS/LLM vendors are commodity), rent the hard infrastructure
(WebRTC SFUs, SIP telephony — genuinely hard to operate), and own the
differentiating middle — orchestration logic, prompts, tools, and the
evaluation layer that's your only defense against silent quality drift.

## The layers and who should own them

| Layer | Own or rent | Why |
|---|---|---|
| ASR / TTS / LLM | **Rent** (vendor APIs) | Commodity; the differentiation isn't here |
| Transport (WebRTC/SFU, SIP) | **Rent** (LiveKit-class, telephony providers) | Hard realtime infrastructure; operating it isn't your moat |
| Pipeline orchestration | **Own** (or framework + own config) | Your latency tuning, tool calls, state — the product logic |
| Prompts / voice / persona | **Own** | The product's personality and correctness |
| Evaluation + golden call set | **Own** | Your regression gate against vendor drift |
| Compliance / recording / consent | **Own** | Legal accountability doesn't outsource |

The framework question (Pipecat-class, LiveKit Agents, or vendor-native
agent platforms) sits at the orchestration layer: use the framework for
the plumbing, own the configuration and logic on top. Vendor-native agent
platforms (hosted realtime agents) collapse more — fine for standard
cases, the lock-in tradeoff applies as always.

## The voice-specific compliance surface

Voice adds legal surface text agents don't have: **call-recording consent**
(one-party vs two-party/all-party jurisdictions — your recording
disclosure is a legal requirement, not a courtesy), **biometric voice
data** (voiceprints are regulated PII-class data in several
jurisdictions), **synthetic-voice disclosure** (several jurisdictions
require telling callers they're talking to AI), and **emergency-services
limitations** (a voice agent taking calls must fail safely — "I'm an AI
and can't help with emergencies" is a real design requirement for
consumer-facing lines). Design the compliance into the pipeline from day
one — consent prompt, redaction at the ASR layer, retention policy on
recordings — not as a wrapper you add before launch.

## The system's actual failure modes

Cascading latency (one slow stage compounds), vendor drift (ASR/TTS
models update silently), telephony edge cases (DTMF, hold music,
voicemail detection), and the demo-to-production gap (your office's quiet
room ≠ a user's car). The architecture answer is the same observability
the rest of this track teaches: per-stage metrics, golden call
regressions, raw-audio logging within consent bounds — the teams who can
measure the pipeline are the ones who can operate it.
