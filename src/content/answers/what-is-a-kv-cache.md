---
title: "What is a KV cache (in an LLM)?"
description: "The KV cache is the stored set of key and value vectors an LLM keeps for tokens it has already processed, so it can attend to them without recomputing — the reason fast token generation is possible."
intent: definition
updated: "2026-09-16"
featured: false
faq:
  - q: "Why does the first token take longer than the rest?"
    a: "Because generation has two phases. Prefill processes the whole prompt in one parallel pass and builds the initial KV cache — compute-bound, hence the pause. Decode then generates one token at a time, each doing only its own small slice of attention work against the cache — memory-bandwidth-bound, hence the steady stream."
  - q: "What does the KV cache actually store?"
    a: "A key vector and a value vector for every previous token, at every layer, per attention head. Because of causal masking, a token's K and V never depend on anything after it — so once computed they are fixed forever, and recomputing them each step would be pure waste."
  - q: "Why is the KV cache a memory problem?"
    a: "Its size scales with sequence length × layers × attention heads × head dimension × 2 (for K and V) × batch size. For long contexts or many concurrent users, the cache can dwarf the model weights — it is often the real limit on how large a context window a server can afford to run at scale."
  - q: "How do models shrink the KV cache?"
    a: "Mainly by sharing. Grouped-query attention (GQA) lets groups of query heads share key/value pairs, and multi-query attention (MQA) shares one pair across all heads — cutting cache size by the group ratio with only a small quality cost. It is one of the standard levers alongside quantization for affordable long-context serving."
related:
  - /learn/llm-foundations/the-kv-cache
  - /learn/llm-foundations/the-kv-cache-what-and-why
  - /learn/llm-foundations/kv-cache-memory-mha-vs-gqa
  - /learn/llm-foundations/grouped-query-attention
  - /learn/llm-foundations/prefill-vs-decode-memory-bound
  - /answers/what-is-a-context-window
---

The KV cache is the memory an LLM keeps of the tokens it has already processed — the key and value vectors for every previous token, stored at every layer — so that generating each new token doesn't require recomputing the entire past.

## The short version

- A transformer generates one token at a time, and each new token must attend to all the tokens before it — which needs their key and value vectors.
- Without a cache, generating token 500 means recomputing keys and values for tokens 1–499, at every layer — an O(n²)-per-token replay.
- The KV cache turns that into an O(n) append: compute K and V once per token, store them, and let each new token attend against the cached set.
- It is why LLM inference visibly splits in two: a slow **prefill** (build the cache from the prompt, in parallel) and a fast **decode** (one new token's worth of work at a time).
- The trade is memory for speed — and at long context or high concurrency, the cache can outgrow the model weights, making it a central serving constraint.

## Why it is the constraint behind the feature

That pause before the first token, the limit on usable context windows, the reason long conversations cost more — all three are the KV cache. Its footprint is also why grouped-query attention exists: letting query heads share K/V pairs shrinks the cache by the group ratio at barely any quality cost, which is why most modern open models ship GQA.

## Where to go deeper

The mechanism: [The KV Cache: How LLMs Avoid Recomputing the Past](/learn/llm-foundations/the-kv-cache). What exactly gets stored and why causal masking makes it safe: [The KV Cache: What It Is and Why It Exists](/learn/llm-foundations/the-kv-cache-what-and-why). The gigabyte math: [KV Cache Memory: MHA vs GQA vs MQA](/learn/llm-foundations/kv-cache-memory-mha-vs-gqa).
