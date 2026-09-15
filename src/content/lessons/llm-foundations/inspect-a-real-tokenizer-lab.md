---
title: "Lab: inspect a real tokenizer"
track: "llm-foundations"
status: live
summary: "Load a pretrained tokenizer and measure what it actually does to whitespace, numbers, code, and non-English text — the edge cases that decide real token budgets."
duration: "15 min read"
---

## The short answer

A tokenizer is a deterministic function you can interrogate. In this lab you load one, feed it edge cases, and record what it does — because tokenization quirks are the single most common source of "the model can't count / can't spell / mangles my data" reports.

## What you need

Python and one tokenizer library. Any modern model's tokenizer works — the point is the interrogation method, not the specific vocabulary.

```python
from transformers import AutoTokenizer
tok = AutoTokenizer.from_pretrained("gpt2")  # or any model you use
```

## The inspection routine

Run each probe and write down the token IDs it produces:

**1. The identity probe.** Tokenize a plain sentence. Look at `tok(sentence).input_ids` and `tok.convert_ids_to_tokens(...)`. Notice whether leading spaces became part of tokens — most BPE-family tokenizers glue `▁the` or `Ġthe` rather than a bare `the`.

**2. The number probe.** Tokenize `1000000`, `3.14159`, `2024-09-15`, and a phone number. Digits often split per-character or per-group — this is why arithmetic and ID matching are fragile. Count how many tokens each takes.

**3. The code probe.** Tokenize a short function with indentation. Tabs, four-space runs, and newlines each tokenize differently. Check `    ` (four spaces) against `\t`.

**4. The case and punctuation probe.** `token`, `Token`, `TOKEN`, `token.` — four different ID sequences for one word. This is why exact-match prompts are brittle.

**5. The multilingual probe.** Tokenize the same sentence in English and a language you work in. Count the tokens each takes — the ratio is that language's effective tax on context budget. Then try mixed text, an emoji, and a combining-accent character.

**6. The boundary probe.** Tokenize a word, then the same word mid-sentence, then at the start after a newline. Merges are context-dependent: a token can change when a space or newline precedes it.

## What to record

For each probe, note the token count and anything surprising. The deliverable is a one-page table: input → token count → the quirk it reveals. That table is the answer to "why did this prompt cost more than expected" and "why did the model drop a character" — the two questions tokenization actually answers in production work.

## The checkpoint

You have finished when you can predict, before running it, roughly how many tokens a new string will take and which part will split oddly. If a tokenizer splits your domain's vocabulary into single characters — chemical names, legal citations, a low-resource language — that is a measured fact about fitness for your task, not a mystery.

## Go deeper

- [Build BPE from scratch](/learn/llm-foundations/build-bpe-from-scratch) — the merge algorithm underneath what you just probed.
- [BPE vs WordPiece vs Unigram](/learn/llm-foundations/bpe-vs-wordpiece-vs-unigram) — why different tokenizers answer your probes differently.
- [Reading a real model's config](/learn/llm-foundations/reading-a-real-model-config) — the tokenizer's `vocab_size` is one of the config fields that actually matters.
