---
title: "Multilingual cost and latency"
track: "multilingual-ai"
status: live
summary: "Budget for non-English traffic — the tokenization penalty, extra translation calls, per-language cost modeling, and where multilingual systems actually spend money."
duration: "10 min read"
sources:
  - sarvam-api-docs
---

Multilingual systems cost more per user request than English-only ones, in ways that don't appear until traffic arrives. Two multipliers drive it: the tokenization penalty and the translation overhead — and both are measurable before you build.

## The tokenization penalty

Non-Latin scripts routinely consume substantially more tokens for the same semantic content — the multiplier varies by script and tokenizer, and it's worth measuring for your specific language set rather than quoting anyone's published figure. Run your real user messages through the provider's tokenizer and compare counts against the English equivalent; that ratio is your cost multiplier for input tokens, and it applies to output too if you generate in-language.

The same penalty shrinks effective context: a document that "fits" in English may overflow in another script. Chunk sizing, summarization depth, and RAG budgets all need per-language tuning — see [Multimodal cost and latency](/learn/multimodal-ai/multimodal-cost-and-latency) for the general budgeting method.

## The translation overhead

Translate-then-LLM architectures pay a translation call each direction plus its latency — meaningful at conversational pacing. Worse, the translation itself is an LLM-class call at comparable quality tiers; cheap translation tiers save money but degrade the very input your expensive reasoning depends on. Price the whole chain: translate-in + reason + translate-out, at the quality tier each step actually needs.

## Per-language cost modeling

Build the cost table per language before launch:

| Factor | Question |
|---|---|
| Token multiplier | How many more tokens does this script cost per message? |
| Mix | What share of traffic is this language, and is it growing? |
| Architecture | Native model, translate-pivot, or specialist — priced how? |
| Volume asymmetry | Are outputs longer than inputs (generation-heavy flows cost more)? |

A language that's 5% of traffic at a 3× token multiplier and a translation chain is 15% of your bill — visible only if you model it.

## Where optimization pays

- **Prompt caching** — system prompts and shared context cache identically across languages; the savings are bigger where prompts are long.
- **Batch the batchable** — non-interactive multilingual work (document processing, eval runs, dataset translation) belongs in batch APIs where available.
- **Route by step, not by user** — native/specialist models for language-heavy steps, flagship models only where reasoning demands it. The per-step routing from [Translation vs multilingual-native](/learn/multilingual-ai/translation-vs-multilingual-native) is also the cost strategy.

**Related:** [Translation vs multilingual-native](/learn/multilingual-ai/translation-vs-multilingual-native), [Multimodal cost and latency](/learn/multimodal-ai/multimodal-cost-and-latency), [Multilingual model landscape](/learn/multilingual-ai/multilingual-model-landscape)
