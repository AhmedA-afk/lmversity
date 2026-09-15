---
title: "Run your first local model app with Ollama"
description: "A small, working local LLM app — install Ollama, pull a model that fits your hardware, call it from code, and measure what local inference actually costs."
question: "How do I build an app that runs an LLM locally?"
level: "beginner"
duration: "25 min"
published: "2026-09-16"
tags: ["Local models", "Ollama", "Open weights"]
steps:
  - "Install Ollama and verify it serves a local API"
  - "Pick a model that fits your RAM/VRAM honestly"
  - "Pull the model and run a first chat round-trip"
  - "Call the local API from a small script"
  - "Measure latency and memory on your machine"
  - "Decide what local inference is and isn't for"
related:
  - "/learn/local-inference/ollama-first-run"
  - "/learn/local-inference/ollama-modelfiles-and-apis"
  - "/learn/local-inference/what-local-inference-actually-means"
  - "/providers/hosted-inference"
---

A local-model app is the fastest way to learn what inference actually is: a process, on your hardware, turning tokens into tokens. No API key, no network, no bill — and no illusions about what "free" costs in latency and quality.

## 1. Install and verify

Install Ollama for your platform, then verify the daemon is serving its local API:

```bash
ollama --version
ollama list   # empty on a fresh install
```

The server listens on `localhost:11434` — every interaction, including the CLI, goes through that API. Check the [Ollama first run](/learn/local-inference/ollama-first-run) lesson if anything here misbehaves.

## 2. Pick a model that fits

The honest constraint is memory: the model's weights must fit in your RAM/VRAM with headroom for context. A ~4B-parameter model at 4-bit quantization needs roughly 2.5–3 GB; a ~8B needs ~5 GB. Pick *down* if you're unsure — a responsive small model teaches more than a thrashing large one. [Quantization formats and tradeoffs](/learn/local-inference/quantization-formats-and-tradeoffs-lab) explains what the size numbers mean.

## 3. Pull and chat

```bash
ollama pull <model>
ollama run <model> "Explain idempotency in one sentence."
```

First pull downloads the weights; subsequent runs are instant. If generation is unusably slow, the model doesn't fit — go smaller rather than fighting it.

## 4. Call it from code

The same API your CLI used takes HTTP calls — which means any language works:

```bash
curl localhost:11434/api/generate -d '{
  "model": "<model>",
  "prompt": "Return JSON: {\"ok\": true}",
  "stream": false
}'
```

A five-line script that POSTs to `/api/generate` and prints the response is a local-model app. From there: streaming (`"stream": true`), structured output, chat history via `/api/chat` — the shape is identical to hosted APIs on purpose.

## 5. Measure on YOUR hardware

Record three numbers: tokens/second during generation, memory footprint under load, and time-to-first-token on a cold start. These are your real local-inference baseline — machine-specific and worth re-measuring per model, not numbers to copy from anyone's blog.

## 6. Decide what it's for

Local wins on privacy (data never leaves the machine), zero marginal cost, offline operation, and no provider dependency. It loses on peak quality and on ops (you are the inference provider now). The full trade-off frame is in [What local inference actually means](/learn/local-inference/what-local-inference-actually-means); the serving-side comparison is [Hosted inference](/providers/hosted-inference).

## Where to go next

Build a private knowledge assistant on top: retrieval over your own documents plus a local model — the `local-inference` track carries the rest of the stack (serving options, quantization, hardware sizing).
