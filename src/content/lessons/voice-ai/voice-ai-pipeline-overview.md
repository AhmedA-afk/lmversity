---
title: "The voice AI pipeline: cascaded vs speech-to-speech"
track: "voice-ai"
status: live
summary: "The two architectures for voice agents — cascaded ASR→LLM→TTS versus native speech-to-speech models — and the latency budget that decides between them."
duration: "9 min read"
sources: ["openai-realtime-docs", "deepgram-docs"]
---

## The short answer

A voice agent is three problems wearing one headset: hearing (speech
recognition), thinking (the LLM turn), and speaking (synthesis). Two
architectures solve them: the **cascade** — ASR → LLM → TTS as separate
components you compose — and **speech-to-speech models** (GPT-realtime-class)
that take audio in and emit audio out natively. The cascade gives you control
and vendor choice per stage; speech-to-speech gives you naturalness and fewer
moving parts at the cost of opacity and lock-in.

## The cascade, stage by stage

```
mic audio → VAD → ASR → (partial/final transcript) → LLM → TTS → speaker
```

- **VAD** (voice activity detection) decides when the user is speaking vs
  silence — it gates everything downstream.
- **ASR** produces partial transcripts (streaming) and final transcripts;
  the LLM turn usually fires on a *final* transcript or a confident endpoint.
- **LLM** is the same text model you already know — it sees text, returns text.
- **TTS** synthesizes the response, ideally streaming sentence-by-sentence
  so the agent starts speaking before the full reply exists.

Every stage is a separate vendor decision (Deepgram-class ASR, any LLM,
ElevenLabs-class TTS) — that's the cascade's power: swap the weakest stage
without touching the others. It's also its cost: three bills, three latency
contributions, three failure modes.

## Speech-to-speech

Native audio models collapse the pipeline: audio in, audio out, with the
reasoning happening inside the model. You lose per-stage control (can't swap
"the ears"), gain naturalness (the model hears prosody, emotion, hesitation —
a cascade throws all of that away at the ASR text boundary), and simplify
operations. The tradeoff is real: one vendor's model, less inspectable
reasoning, and transport/streaming handled inside their API.

## The latency budget — the deciding number

Users perceive voice as "responsive" around **<1s of dead air**. Budget the
cascade honestly: ASR finalization (~300–800ms after endpointing) + LLM first
token (~300–800ms) + TTS first audio (~150–400ms) — you're at the edge before
any optimization. The standard tricks: stream everything (partial ASR,
streaming LLM, sentence-chunked TTS), speculate on turn-end (start the LLM on
high-confidence partial transcripts), and keep models right-sized for the
stage. Speech-to-speech inherits the same budget but hides the breakdown —
which is why cascade teams measure per-stage and S2S teams measure
end-to-end.

## Choosing

**Cascade when:** you need per-stage vendor choice, transcript-level
observability, enterprise compliance on each hop, or a best-of-breed stage
(your domain's ASR is hard). **Speech-to-speech when:** naturalness and
time-to-ship dominate, one vendor's model is acceptable, and you can live
with audio-level (not transcript-level) observability. Many production
systems run hybrid: S2S for the conversational path, a cascaded lane for
tool calls and logging.
