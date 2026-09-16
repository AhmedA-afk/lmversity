---
title: "What is a tokenizer (in an LLM)?"
description: "A tokenizer is the component that splits text into tokens — subword chunks the model can map to numbers — before an LLM can process it. Cost, context limits, and odd failures all trace back to it."
intent: definition
updated: "2026-09-16"
featured: true
faq:
  - q: "Is a token the same as a word?"
    a: "No — a token is usually a chunk of a word. Common words are often a single token; rarer words get split ('tokenization' might become 'token' + 'ization'), and unusual names can split into several pieces. Whitespace and punctuation get their own tokens too. A rough English average is about 4 characters per token."
  - q: "What is BPE?"
    a: "Byte-Pair Encoding — the algorithm that builds most modern tokenizers' vocabularies. Start from individual characters and repeatedly merge the most frequent adjacent pair into a new token, until you reach a fixed vocabulary size, commonly 50k–200k tokens. That learned merge list is the rulebook that decides where token boundaries fall."
  - q: "Why do tokenizers affect cost?"
    a: "APIs bill and limit in tokens, not words. Text in languages under-represented in training data tends to split into more tokens, so the same sentence can cost several times more in one language than another — and a document's token count, not its word count, decides whether it fits the context window."
  - q: "Why do models fail at counting letters or spelling?"
    a: "Because the model never sees letters — it sees tokens. Asked how many r's are in 'strawberry', it is working from chunks like 'straw' + 'berry', not the character sequence, so character-level questions are genuinely awkward rather than carelessly answered."
related:
  - /learn/llm-foundations/tokenization-explained
  - /learn/llm-foundations/byte-pair-encoding
  - /learn/llm-foundations/bpe-vs-wordpiece-vs-unigram
  - /learn/llm-foundations/tokenization-gotchas-that-break-prompts
  - /learn/llm-foundations/inspect-a-real-tokenizer-lab
  - /answers/what-is-a-context-window
---

A tokenizer is the component that turns raw text into the tokens an LLM actually processes — splitting the input into subword chunks, then mapping each chunk to an integer ID the model can look up. The model never sees your words; it sees the tokenizer's output.

## The short version

- Tokens are subwords, not words: common words are often one token, rare words split into pieces, and punctuation gets its own tokens.
- The splitting rulebook is learned once by an algorithm like Byte-Pair Encoding (BPE): repeatedly merge the most frequent adjacent pair until the vocabulary hits a fixed size, usually 50k–200k tokens.
- Everything downstream is counted in tokens — API cost, context-window limits, rate limits — not words.
- Token boundaries explain real failures: "how many r's in strawberry" is hard because the model sees `straw` + `berry`, not letters.
- After splitting, each token becomes an integer ID that indexes into the model's embedding table — the bridge from text to the math the network runs.

## Why it matters in practice

Tokenization is invisible until it isn't. A prompt that looks short can be token-expensive; the same sentence in a language under-represented in training data can split into several times more tokens and cost correspondingly more; and a document's fit inside the context window is a token question, not a page-count question. Debugging a strange model response often starts by asking what the tokenizer actually produced.

## Where to go deeper

The full mechanics: [Tokenization: How Text Becomes Tokens](/learn/llm-foundations/tokenization-explained). The algorithm that builds the vocabulary: [Byte-Pair Encoding](/learn/llm-foundations/byte-pair-encoding), then [BPE vs WordPiece vs Unigram](/learn/llm-foundations/bpe-vs-wordpiece-vs-unigram). Hands-on: [inspect a real tokenizer](/learn/llm-foundations/inspect-a-real-tokenizer-lab).
