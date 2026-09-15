---
title: "MLX and mlx-lm on Apple Silicon"
track: "local-inference"
status: live
summary: "MLX is Apple's array framework built for unified-memory Apple Silicon, and mlx-lm is its LLM package — load, generate, quantize, and serve models that take advantage of the shared-memory architecture."
duration: "7 min read"
sources: ["mlx-docs", "mlx-lm-repo"]
---

## The short answer

MLX is Apple's machine-learning array framework — NumPy-shaped, built
specifically for Apple Silicon's **unified memory**, where CPU and GPU read
the same memory with no copy between them. `mlx-lm` is the LLM package on
top: load a model, generate text, quantize to lower bit-widths, or serve an
OpenAI-compatible API. On a Mac it's the most direct path to local
inference — no GGUF conversion, no CUDA toolchain, one `pip install mlx-lm`.

## Why unified memory changes the shape of the problem

On a discrete-GPU machine, inference planning is about what fits in VRAM —
weights that don't fit get offloaded and slowed
([hardware sizing](/learn/local-inference/hardware-sizing-measurement-guide)
covers the general version). Apple Silicon has one memory pool: a model
that fits in RAM *is* on the GPU, because there is no separate GPU memory.
The constraint simplifies to "does the model fit in unified memory with
room to spare" — but that also means the model competes with everything
else on the machine for the same pool.

## The workflow

```bash
pip install mlx-lm

# generate — downloads an MLX-format model from the hub on first run
mlx_lm.generate --model mlx-community/<model>-4bit --prompt "Explain RAG."

# serve an OpenAI-compatible API
mlx_lm.server --model mlx-community/<model>-4bit --port 8080
```

The `mlx-community` organization on Hugging Face hosts pre-converted
MLX-format builds — the common workflow is pick a converted model rather
than convert your own. `mlx_lm.server` exposes the familiar
`/v1/chat/completions`, so the same client code that talked to Ollama or
vLLM talks to it.

## Where it fits in the runtime landscape

- **Pick mlx-lm when** you're on Apple Silicon and want the native path —
  it's the framework the hardware vendor maintains, and quantization +
  LoRA tooling live in the same ecosystem.
- **Pick llama.cpp/Ollama when** you need GGUF's portability, the larger
  model catalog, or you're not on a Mac
  ([llama.cpp](/learn/local-inference/llama-cpp-build-quantize-serve)).
  LM Studio can serve both formats, which makes it the hedge
  ([LM Studio](/learn/local-inference/lm-studio-local-server)).
- **Pick ONNX Runtime when** the model must embed inside an app rather than
  sit behind a server
  ([ONNX Runtime](/learn/local-inference/onnx-runtime-on-device-inference)).

The limitation to name plainly: MLX is Apple Silicon only. A deployment
built on mlx-lm doesn't port to the Linux GPU box your production probably
runs on — it's a development and personal-use answer, or a deployment
answer only where the deployment target is also a Mac.

## The exercise

Run the same model at its default quantization and at a lower one via
`mlx_lm`, timing tokens-per-second on your own machine — the Apple-Silicon
version of the
[quantization tradeoff lab](/learn/local-inference/quantization-formats-and-tradeoffs-lab).

## Go deeper

- [LM Studio: the GUI path](/learn/local-inference/lm-studio-local-server) — serves MLX models without the terminal.
- [Hardware sizing by measurement](/learn/local-inference/hardware-sizing-measurement-guide) — unified memory changes the rule, not the method.
- [Quantization lab](/learn/local-inference/quantization-formats-and-tradeoffs-lab) — measure the tradeoff rather than believing it.
