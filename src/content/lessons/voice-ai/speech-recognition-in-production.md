---
title: "Speech recognition in production: STT that survives real audio"
track: "voice-ai"
status: live
summary: "Choosing and operating speech-to-text: streaming vs batch ASR, partial vs final transcripts, VAD and endpointing, domain adaptation, and measuring accuracy that matters."
duration: "10 min read"
sources: ["deepgram-docs", "openai-realtime-docs"]
---

## The short answer

Production ASR is a streaming problem, not a transcription problem. The
choices that matter: streaming vs batch, how partial transcripts and
endpointing drive your turn-taking, domain adaptation for your vocabulary,
and an accuracy metric measured on *your* audio — not the vendor's clean
benchmark set.

## Streaming vs batch

**Batch ASR** transcribes complete audio files — used for call recordings,
compliance archives, content pipelines. **Streaming ASR** emits partial
results as audio arrives — the only shape a live agent can use. The two
share engines but differ in latency-vs-accuracy posture: streaming
sacrifices some accuracy for partial results fast enough to drive
turn-taking. Pick per surface: your agent lane is streaming; your
analytics/archive lane is batch (often the same vendor, different mode).

## Partial vs final — the contract that drives your agent

Streaming ASR emits **interim (partial) hypotheses** that revise as audio
continues, then **final transcripts** when an utterance is considered
complete. Your agent's behavior hangs on three signals: partials (for UI
and speculative LLM starts), finals (the committed transcript), and
**endpointing** (the VAD/ASR deciding the turn ended). Tune endpointing
deliberately — too aggressive cuts users off mid-thought; too patient adds
dead air. The single most-tuned knob in production voice.

## Domain adaptation — where accuracy is actually won

Generic ASR fails on your nouns: product names, account identifiers,
jargon, accents your users actually have. Every serious ASR offers
adaptation: **keyword/vocabulary boosting** (bias toward your term list),
**custom language models**, or fine-tuning. Build your term list from real
transcript errors — the misspellings show you exactly what to boost. And
**code-switching**: multilingual users mixing languages mid-sentence
defeat single-language models; some ASRs handle it, many don't — test with
your actual speaker distribution, not the vendor's demo audio.

## Measuring what matters

**WER** (word error rate) is the standard metric and the standard mistake:
it counts all errors equally, but a missed "not" or a garbled account
number costs more than a dropped "um". Measure **keyword/entity accuracy**
on your domain terms alongside WER, and **endpointing latency** (ms from
speech-end to final transcript) as a first-class metric. Build a labeled
set from real calls early — vendor WERs on LibriSpeech tell you almost
nothing about your audio conditions (telephony codecs, noise, accents).

## The operational checklist

Telephony audio is 8kHz and lossy — verify your ASR's codec path.
Diarization (who spoke when) matters for multi-party calls. Redact PII at
the ASR layer if your compliance requires it, not after it's in
transcripts. And log raw audio duration alongside transcripts — you will
need it when accuracy regresses and you can't tell whether the audio or
the model changed.
