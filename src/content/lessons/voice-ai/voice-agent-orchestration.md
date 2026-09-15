---
title: "Voice agent orchestration: tools, state, and latency engineering"
track: "voice-ai"
status: live
summary: "Wiring the thinking middle of a voice agent: function calling mid-conversation, turn-level state machines vs LLM-driven flow, tool-call latency, and prompt design for speech not text."
duration: "10 min read"
sources: ["pipecat-docs", "openai-realtime-docs"]
---

## The short answer

A voice agent's middle is still an LLM doing turns and tool calls — but
under constraints text agents never face: the user is *waiting in silence*
while your tools run, prompts written for text produce unspeakable output,
and conversational state lives in a medium with no scrollback.
Orchestration is making the LLM's turn-taking, tools, and state work inside
a latency-and-audio budget.

## Tool calls under the silence budget

A tool call that takes 4 seconds is dead air a user reads as a hang-up.
The patterns: **acknowledge-then-fetch** ("let me check that" spoken while
the tool runs — a filler phrase that buys latency), **fast-path tools**
(precompute/cache the common calls so the frequent ones return in <500ms),
and **bounded waits** (if the tool exceeds the threshold, say so — don't
leave silence unowned). Voice tool results must also be *speakable*: the
tool returns structured data; the LLM must turn it into a sentence a human
can hear, not recite JSON.

## Turn-level state vs LLM-driven flow

Two designs for "where are we in the conversation": a **state machine**
(explicit states — greeting → collect-info → confirm → done — the
predictable, testable, boringly-reliable pattern) and **LLM-driven flow**
(the model decides the path from instructions — flexible, harder to test,
can surprise). Production systems hybridize: LLM drives the natural
middle, explicit state guards the transitions that matter (authentication
gates, payment confirmations, the legal-required disclosures that must
actually be said). The rule: **don't let the LLM freestyle the parts you'd
sue over** — guard critical transitions in code, let it flex the
conversational fill.

## Prompts for speech, not text

Text prompts produce text-agent output: bullet lists, "as mentioned
above", markdown, emoji — all unspeakable. Voice prompts must constrain
for the ear: short sentences, no visual formatting, numbers spelled
naturally, no "see above" references (there's no above in audio), and an
explicit persona for delivery (pace, warmth, when to pause). Add the
repair behaviors text agents don't need: "if the user seemed to
mishear, rephrase differently, don't repeat verbatim", "confirm
destructive or consequential actions aloud before doing them".

## The latency-engineering checklist

Per-stage budgets from the overview lesson, applied here: speculative
LLM starts on high-confidence partials; streaming sentence-chunked TTS;
tool acknowledgment phrases; prompt discipline (long system prompts
cost first-token latency on every turn); and keeping the model
right-sized for voice (the frontier model you want for text reasoning
is often slower than the conversation tolerates). Measure the dead-air
distribution, not the mean — p95 silence is what users remember.
