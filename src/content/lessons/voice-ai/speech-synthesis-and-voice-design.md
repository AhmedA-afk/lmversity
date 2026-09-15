---
title: "Speech synthesis and voice design: TTS that doesn't feel like a machine"
track: "voice-ai"
status: live
summary: "Text-to-speech for live agents: streaming synthesis, the quality-vs-latency tradeoff, voice selection and cloning, SSML control, and keeping the voice consistent across the system."
duration: "9 min read"
sources: ["elevenlabs-docs", "openai-realtime-docs"]
---

## The short answer

TTS for agents is a streaming problem with a branding problem. The streaming
half: synthesize and play audio incrementally (sentence-chunked) so users
hear the start of a reply while the rest is still generating. The branding
half: the voice *is* your product's personality — choose or clone it
deliberately, control it with markup, and keep it consistent everywhere it
speaks.

## Streaming synthesis — the latency half

Batch TTS (synthesize the whole reply, then play) adds seconds of dead air
users won't tolerate. The production pattern: the LLM streams text → you
split on sentence boundaries → TTS synthesizes sentence-by-sentence → audio
streams to the user while later sentences still generate. Sentence
chunking is the standard; clause-level chunking shaves more latency at the
cost of prosody quality (mid-thought pauses sound unnatural). The
quality-vs-latency dial is the voice model itself — faster models sound
flatter; measure both ends.

## Voice selection and cloning — the branding half

Stock voices are the default; **voice cloning** (designing a voice from
reference audio) is the differentiator — and the consent/compliance
surface: cloned voices need documented consent from the voice donor, and
synthetic-voice disclosure obligations vary by jurisdiction. Treat the
voice as a product asset: it should survive vendor changes (keep the
reference audio and design notes, not just a vendor voice ID), and it
should be consistent across every surface the product speaks on.

## SSML and markup control

Raw text out of an LLM mispronounces your nouns, reads numbers wrong, and
stresses the wrong syllables. **SSML** (and vendor-specific markup) gives
you pronunciation, pauses, emphasis, rate, and number/date formatting
control. The production need: a **pronunciation dictionary** for your
domain terms — the same term list you built for ASR boosting — plus
normalization rules so "€1,250" doesn't get read as "euro one thousand two
hundred fifty". LLM output needs a text-normalization pass before TTS;
unfiltered LLM text is the #1 source of robotic reads.

## Consistency across the system

One voice, everywhere: the agent's voice, IVR prompts, error messages, and
hold music announcements should sound like the same entity — mixing stock
and cloned voices across surfaces reads as broken, not varied. Version the
voice (voice ID + model version + settings) like a dependency — TTS
providers update models and your voice's character drifts silently unless
you pin and regression-check. The evaluation lesson covers the perceptual
testing that catches it.
