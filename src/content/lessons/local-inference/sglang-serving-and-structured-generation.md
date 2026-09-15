---
title: "SGLang: serving with RadixAttention and constrained generation"
track: "local-inference"
status: live
summary: "SGLang is a serving framework whose RadixAttention reuses KV cache across requests sharing prefixes, and whose constrained decoding enforces regex or JSON-schema structure on output."
duration: "8 min read"
sources: ["sglang-docs"]
---

## The short answer

SGLang is a high-performance serving framework that overlaps vLLM's job —
serve a model behind an OpenAI-compatible API to many concurrent users —
with two distinguishing pieces: **RadixAttention**, which caches KV state in
a radix tree so requests sharing a prompt prefix reuse each other's compute
automatically, and **constrained decoding** that forces output to match a
regex or JSON schema at the token level. It also ships a Python frontend
language for composing multi-call LLM programs, though the server alone is
the common entry point.

## Why it exists alongside vLLM

vLLM's paged attention manages KV cache *within* a batch. RadixAttention
manages it *across requests*: if a hundred requests share the same few-shot
prefix, system prompt, or retrieved context, the shared part is computed
once and reused from the radix tree. Workloads with heavy prefix overlap —
agent loops with long fixed system prompts, multi-turn chat, batch jobs on
the same document set — are where that pays. Workloads with no shared
prefixes see no benefit; the mechanism only helps what repeats.

## The shape of it

```bash
# serve a model behind an OpenAI-compatible API
python -m sglang.launch_server --model-path <model> --port 30000
```

Then the same base-URL swap as every other OpenAI-compatible server. Where
SGLang goes beyond the standard surface is generation constraints:

```python
# constrain output to a JSON schema at decode time
response = client.chat.completions.create(
    model="<model>",
    messages=[{"role": "user", "content": "Extract the invoice total."}],
    extra_body={"json_schema": {...}},   # enforced per-token, not hoped-for
)
```

That distinction is the same one in
[structured outputs](/learn/prompt-engineering/json-schema-in-prompts):
schema-in-prompt asks the model to comply; constrained decoding makes
non-complying tokens undecodable. Invalid structure becomes impossible, not
just unlikely — at the cost of restricting the token search space, which on
harder tasks can trade away some answer quality.

## When it's the right pick

- **Shared-prefix workloads** — agent systems, few-shot batches, multi-turn
  chat — where RadixAttention's cache reuse is real.
- **Structured output at scale** — when every response must parse, enforced
  decoding beats retry loops.
- **Pick vLLM instead** when you want the larger deployment ecosystem and
  your workload is more varied; pick llama.cpp/Ollama when there's one user.

The honest read: SGLang and vLLM are close competitors that leapfrog each
other release to release. Choose on your workload's shape (prefix overlap?
strict schemas?), then [measure on your own hardware](/learn/local-inference/hardware-sizing-measurement-guide)
rather than trusting either project's benchmarks.

## The exercise

Serve a model, then fire the same request with and without a shared system
prompt — RadixAttention's effect shows up as lower time-to-first-token on
the second call. Compare that to the same experiment on
[vLLM](/learn/local-inference/vllm-production-serving) to see which
mechanism your workload actually exercises.

## Go deeper

- [vLLM: serving a model to real traffic](/learn/local-inference/vllm-production-serving) — the alternative serving engine.
- [Hardware sizing by measurement](/learn/local-inference/hardware-sizing-measurement-guide) — how to choose between them honestly.
- [KV cache and context prefixes](/learn/context-engineering/kv-cache-and-context-prefixes) — what prefix reuse is caching.
