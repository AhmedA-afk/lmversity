---
title: "llama.cpp: build, quantize, and serve"
track: "local-inference"
status: live
summary: "llama.cpp is the inference engine under most local-model tooling — build it, understand GGUF quantization formats, run the server, and measure what you get."
duration: "9 min read"
sources: ["llamacpp-grammars"]
---

## The short answer

llama.cpp is the C++ inference engine that made local models practical —
Ollama, LM Studio, and most local-model apps wrap it or something descended
from it. Working at this level gives you three things the wrappers hide:
control over the **GGUF quantization format** (the file format and the
quality/size tradeoff baked into it), the **runtime flags** that decide how
memory and compute split, and a **server mode** that exposes an
OpenAI-compatible API from a single binary.

## Why go below Ollama

Ollama chooses defaults for you — which is the point of Ollama. You drop to
llama.cpp when the defaults are the problem: you need a specific quantization
level, you're squeezing a model onto constrained hardware, you want
fine-grained control over GPU offload layers and context size, or you're
debugging why a model behaves differently under a wrapper. It's also the
honest way to learn what the wrappers are doing.

## The shape of the workflow

Build it (CMake; it compiles into a set of binaries), obtain or convert a
model to **GGUF** (the format the engine reads — many models ship GGUF
directly; others need the included converter), then run:

```bash
# interactive
./llama-cli -m model.gguf -p "Explain RAG in one sentence."

# server mode — OpenAI-compatible API on a port
./llama-server -m model.gguf --port 8080
```

The server exposes `/v1/chat/completions` — the same call shape you'd make to
a hosted API, now answered by a local binary.

## Quantization formats are the whole game

A GGUF filename encodes its quantization — `Q4_K_M`, `Q8_0`, `IQ2_XXS` — and
the suffix *is* the quality/size tradeoff. Roughly: higher bit-width means
bigger file, more memory, closer to the original weights; aggressive formats
(`Q2`, `IQ` family) shrink dramatically and cost quality. The exact mapping
of format names to bit-widths lives in the project's docs — what matters here
is the *method*: pick the largest quantization your hardware comfortably
runs, measure the quality on your actual task, and drop a level only if you
have to. [Quantization formats](/learn/local-inference/quantization-formats-and-tradeoffs-lab)
is the hands-on version of this.

## Runtime flags worth knowing

The two that move the needle: `-ngl` (GPU layers — how much of the model
lives on the GPU vs CPU; the single biggest speed lever) and `-c` (context
size — memory scales with it). llama.cpp also supports grammar-constrained
generation (GBNF) — the mechanism behind structured output — which the
[grammars README](https://github.com/ggml-org/llama.cpp/blob/master/grammars/README.md)
documents and [constrained decoding](/learn/structured-outputs/grammar-constrained-generation)
explains conceptually.

## Measure, don't guess

llama.cpp prints tokens-per-second at the end of a run — that's your
reproducible number. Run the same prompt at two quantization levels and two
`-ngl` values and you have real sizing data for your hardware, which no
copied spec sheet can give you. [Hardware sizing by
measurement](/learn/local-inference/hardware-sizing-measurement-guide) is the
discipline this feeds.

## The exercise

Run the same prompt through `llama-cli` at two quantization levels. Compare
speed and output — the tradeoff stops being abstract the first time you watch
a `Q8` crawl and a `Q4` fly.

## Go deeper

- [Quantization formats and tradeoffs lab](/learn/local-inference/quantization-formats-and-tradeoffs-lab) — the GGUF level-picking method.
- [Hardware sizing by measurement](/learn/local-inference/hardware-sizing-measurement-guide) — turning tok/s into a capacity answer.
- [Quantization GGUF, AWQ, GPTQ](/learn/fine-tuning/quantization-gguf-awq-gptq) — the formats compared at the math level.
- [What 'running a model locally' actually means](/learn/local-inference/what-local-inference-actually-means) — what the engine enables.
