---
title: "The multilingual model landscape"
track: "multilingual-ai"
status: live
summary: "Judge a model's real language coverage — tokenizer efficiency, per-language capability cliffs, and how to test coverage for the languages your users actually speak."
duration: "12 min read"
sources:
  - mteb-leaderboard
  - ai4bharat-indicnlp
  - sarvam-api-docs
---

"Supports 100 languages" is a marketing statement, not an engineering specification. A model can technically accept Hindi input and still produce noticeably worse output than it does for English — the question is never *whether* a language is supported but *how well*, *for which tasks*, and *at what cost*.

## The three places coverage actually differs

**Tokenizer efficiency.** The same sentence costs wildly different token counts across scripts. Latin-script English is the cheapest input; many Indic, Southeast Asian, and low-resource scripts fragment into far more tokens per word. You can verify this yourself with any provider's tokenizer before trusting a coverage claim — the technique in [Inspect a real tokenizer](/learn/llm-foundations/inspect-a-real-tokenizer-lab) applies unchanged. Tokenizer inefficiency hits you twice: higher cost per request and less effective context window for the same content.

**Training-data distribution.** Capability follows data. High-resource languages (English, Chinese, Spanish, French, German, Japanese) get near-flagship reasoning; low-resource languages get degradation that shows up first in complex instruction-following, then in factual reliability, and only last in surface fluency. A model can chat plausibly in a language while failing structured tasks in it.

**Task asymmetry.** Translation into English is usually stronger than reasoning in the source language; summarization survives where precise extraction does not. Evaluate the specific task, not "the language."

## Reading capability claims

- **Leaderboards with multilingual splits** — the [MTEB leaderboard](https://huggingface.co/spaces/mteb/leaderboard) covers embedding models across many languages and is the closest thing to a neutral per-language retrieval signal. Treat it as a filter, not a verdict.
- **Regional specialists** — for Indian languages, providers like [Sarvam](/providers/sarvam) and research programs like [AI4Bharat](/providers/ai4bharat) exist precisely because global models under-serve these languages. A specialist's narrower surface can outperform a generalist's coverage claim on the languages it targets.
- **Absence of evidence** — if a provider's docs do not name a language, assume it is untested, not unsupported-but-fine.

## A 30-minute coverage test

Before committing to a model for a language, run five prompts per language: a complex instruction with constraints, a factual question you can verify, a summarization, a structured-extraction task, and a code-mixed message if your users write that way. Score them yourself. This beats any published claim because it tests your task, your register, and your dialect — see [Designing multilingual evaluations](/learn/evals-red-teaming/multilingual-evaluation-design) for turning that smoke test into a repeatable suite.

**Related:** [Designing multilingual evaluations](/learn/evals-red-teaming/multilingual-evaluation-design), [Inspect a real tokenizer](/learn/llm-foundations/inspect-a-real-tokenizer-lab), [Sarvam provider hub](/providers/sarvam)
