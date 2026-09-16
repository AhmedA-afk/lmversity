---
title: "Local Inference Cheatsheet"
track: "local-inference"
status: live
summary: "The local-LLM reference — which runtime for which job, the quantization tradeoff table, and the privacy boundary that's actually real."
updated: "2026-09-16"
duration: "6 min read"
---

The local-inference track compressed to the runtime pick, the quantization tradeoff, and the privacy claim you can actually make.

## Which runtime for which job

| The job | The tool | Why |
|---|---|---|
| First run / dev loop | Ollama | One command, model registry, dead simple |
| Apple Silicon | MLX / Ollama | Metal-optimized; unified memory helps |
| CPU-only or embedded | llama.cpp | The minimal, portable baseline |
| Production serving | vLLM | Batched throughput, the serving features |
| Structured generation at serve time | SGLang / vLLM | Constrained decoding built in |
| On-device (browser/mobile) | ONNX Runtime | The edge runtime, quantized-first |

## The quantization tradeoff

| Quant | Size vs fp16 | Quality | When |
|---|---|---|---|
| Q8 | ~50% | Near-lossless | When you have the memory |
| Q6_K | ~40% | Very close | The default sweet spot |
| Q4_K_M | ~25% | Noticeable on hard tasks | The practical floor for most |
| Q3 and below | <20% | Degrades fast | Only when memory forces it |

The rule: run the highest quant your hardware fits comfortably — the quality drop is task-dependent, so eval on your task before committing to a smaller quant.

## The privacy boundary that's real

- **What's real:** weights and inference run locally; prompts never leave the machine — if the runtime doesn't phone home.
- **What to verify:** telemetry in the runtime (some have it), the model download path, and any cloud-fallback feature.
- **What's not real:** "local = private" while a plugin or the app layer phones home — the model is local, the pipeline might not be.

## The failure modes in one line each

- **Quantizing to fit, not to eval** — the smallest quant that fits, not the largest that's good.
- **VRAM measured, RAM forgotten** — the KV cache and context eat what the weights don't.
- **"Local" assumed private** — the app layer's telemetry unverified.
- **Serving with the dev tool** — Ollama at production scale; vLLM exists for a reason.
- **A model too small for the task** — the eval would have caught it; the demo didn't.

## The decision rules

- Start with Ollama or llama.cpp; move to vLLM when throughput matters.
- Q4_K_M is the practical floor; go higher if memory allows.
- Verify the privacy claim — check telemetry, don't assume.
- Eval the quantized model on your task, not the benchmark.

**Related:** [What local inference actually means](/learn/local-inference/what-local-inference-actually-means), [The local privacy boundary](/learn/local-inference/the-local-privacy-boundary), [Hardware sizing guide](/learn/local-inference/hardware-sizing-measurement-guide), [Quantization formats and tradeoffs](/learn/local-inference/quantization-formats-and-tradeoffs-lab)
