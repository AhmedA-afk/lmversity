---
title: "Size hardware for local inference by measuring it"
track: "local-inference"
status: live
summary: "Whether a model runs on your hardware is an arithmetic floor plus a measurement, not a spec-sheet guess — compute the memory floor, then measure speed on the real task."
duration: "8 min read"
---

## The short answer

"Can I run this model?" splits into two questions with different answers.
**Does it fit?** is arithmetic — model size in memory, plus KV-cache and
context overhead, compared to your RAM/VRAM. **Is it usable?** is
measurement — tokens/second on your actual hardware on your actual task,
because an interactive session and a batch job have very different "fast
enough" bars. Spec sheets answer neither for *your* machine.

## The fit question: arithmetic floor

Weights occupy roughly `parameters × bytes-per-weight`. A 7B model is ~14GB
in FP16 (2 bytes), ~7GB at 8-bit, ~3.5GB at 4-bit — before overhead. On top
of the weights: KV-cache grows with context length and batch size, the
runtime itself takes memory, and the OS wants headroom. So the rule isn't
"fits in free RAM" — it's "weights + a comfortable margin for context and
runtime". A model that exactly fills memory will swap, and a swapped model
is unusable, not slow.

GPU changes the arithmetic's meaning, not the formula: VRAM is the binding
number there, and partial GPU offload (llama.cpp's `-ngl`, splitting layers
between GPU and CPU) lets you run models bigger than VRAM alone at a speed
cost per offloaded-to-CPU layer.

## The usable question: measure, don't estimate

Tokens/second is the reproducible number — llama.cpp prints it, Ollama shows
load behavior, vLLM reports throughput under load. Run the same prompt on
your candidate model and size and record tok/s. Then map to the workload:

- **Interactive chat** — you want tokens arriving faster than reading speed;
  a slow trickle kills the UX even if the total is fine.
- **Batch job** — aggregate throughput is what matters; a "slow" model
  grinding through a queue overnight may be perfectly fine.
- **Agent loop** — latency compounds across many calls; a 2× slowdown
  multiplies across a 10-step task.

## The measurement protocol

Same prompt, `--temp 0`, fixed context size, model warmed (first-run loads
are slower and lie to you). Record tok/s at your candidate quantization, then
once more with a realistic context size — long contexts cost speed, so
measure at the context you'll actually use. Two runs, two numbers, one
decision — that's the whole method.

## What the answer looks like

"Runs" is never the answer — the answer is "runs at N tok/s at Q4 with a 4K
context, which clears my interactive bar" or "fits but at 3 tok/s, so batch
only". The measurement is what turns a spec-sheet guess into a capacity
decision — and it's the only version of this advice that survives on *your*
hardware rather than the author's.

## The exercise

Pick a model, compute its memory floor at two quantization levels, then
measure tok/s on your machine at both. You'll have a defensible "can I run
this" answer instead of a forum guess — the same protocol
[the quantization lab](/learn/local-inference/quantization-formats-and-tradeoffs-lab)
uses for the quality side.

## Go deeper

- [llama.cpp: build, quantize, and serve](/learn/local-inference/llama-cpp-build-quantize-serve) — where the tok/s number comes from.
- [Quantization formats and tradeoffs lab](/learn/local-inference/quantization-formats-and-tradeoffs-lab) — the quality side of the same decision.
- [vLLM: serving a model to real traffic](/learn/local-inference/vllm-production-serving) — when "hardware sizing" means a GPU server.
- [What 'running a model locally' actually means](/learn/local-inference/what-local-inference-actually-means) — why sizing matters.
