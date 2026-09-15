---
title: "vLLM: serving a model to real traffic"
track: "local-inference"
status: live
summary: "vLLM is the serving layer for when 'local' means 'a service, not a laptop' — continuous batching, memory management, and an OpenAI-compatible API for production traffic."
duration: "9 min read"
sources: ["vllm-repo"]
---

## The short answer

Ollama is for your machine; vLLM is for *a machine serving many requests*.
Its two load-bearing ideas are **continuous batching** — requests join and
leave the running batch token-by-token instead of waiting in fixed-size
groups — and **paged KV-cache management**, which lets it fit far more
concurrent sequences in the same GPU memory than naive allocation. The
result: a single GPU serving real concurrent traffic, exposed over an
OpenAI-compatible API.

## Where vLLM sits

The mental model: llama.cpp optimizes for one user's latency on consumer
hardware; vLLM optimizes for *throughput under concurrency* on a GPU server.
If the question is "can I run a model on my laptop", llama.cpp/Ollama. If the
question is "can this box serve fifty simultaneous users at acceptable
latency", vLLM. It powers a lot of the hosted-inference providers too — the
same engine you're told to use yourself is often what's behind an API.

## The server shape

```bash
pip install vllm
vllm serve meta-llama/Llama-3.2-3B-Instruct
```

That starts an OpenAI-compatible server — `/v1/chat/completions` answers the
same request format as a hosted API, so client code written against OpenAI's
SDK shape works by changing the base URL. The flags that matter in
production: `--max-model-len` (context cap — directly bounds KV-cache
memory), `--gpu-memory-utilization` (what fraction of the GPU it's allowed to
fill), and `--tensor-parallel-size` (spread the model across multiple GPUs).

## Why it's faster under load

Naive batching pads a group of requests to the longest one and runs them in
lockstep — a short request waits for the longest to finish. Continuous
batching treats each token generation step as the scheduling unit: a request
that finishes leaves the batch mid-step, and a waiting request joins. The
GPU stays busy instead of idle-waiting on the slowest request in each batch.
PagedAttention (the memory half) allocates KV-cache in small blocks like OS
pages, so memory isn't stranded by over-reserving for max-length sequences.
You don't tune either — you just get more concurrent requests per GPU.

## The honest limits

vLLM wants a real GPU — this is server-class inference, not a laptop story.
The memory model is also different from llama.cpp's: you're allocating a
fraction of a GPU to KV-cache blocks, and `--max-model-len` is a hard
tradeoff between context size and concurrent capacity — a longer context cap
means fewer requests fit. And throughput-first means per-request latency can
be *worse* than a single-user local run; the win is aggregate, not per-call.

## The exercise

Point an existing OpenAI-SDK script at a local vLLM server by changing only
the base URL — that's the whole pitch of the OpenAI-compatible surface. Then
fire concurrent requests and watch them interleave instead of queue, which is
the thing continuous batching buys you.

## Go deeper

- [llama.cpp: build, quantize, and serve](/learn/local-inference/llama-cpp-build-quantize-serve) — the single-user counterpart.
- [Hardware sizing by measurement](/learn/local-inference/hardware-sizing-measurement-guide) — capacity numbers come from measurement.
- [Production & Ops](/learn/production/latency-and-cost-slos) — the SLO framing serving decisions live under.
- [KV cache and serving latency](/learn/deep-learning/sequence-generative/316-kv-cache-and-serving-latency) — the mechanism paged attention manages.
