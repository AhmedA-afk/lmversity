---
title: "Local Inference: Common Mistakes"
track: "local-inference"
status: live
summary: "The eight local-LLM mistakes — the quant that fit but failed, the memory math that forgot the KV cache, and the privacy claim that wasn't."
duration: "8 min read"
---

The local-inference mistakes that turn "it runs" into "it doesn't actually work."

## 1. Picking the smallest quant that fits

**The mistake.** Q2 fits in the VRAM — so it's the pick. The model runs, the quality is gone, and the eval would have caught it had anyone run one.

**The fix.** Run the *largest* quant the hardware fits comfortably — and eval on your task. "It fits" is not "it's good enough."

## 2. Forgetting the KV cache in the memory math

**The mistake.** The weights fit in 8GB — then the context window's KV cache eats the rest, and the 8k-context model can only do 2k before OOM.

**The fix.** Weights + KV cache + activation memory, not weights alone. The context length is a memory cost — measure the full footprint at your actual context size.

## 3. "Local" claimed as private without verification

**The mistake.** The model runs locally — but the app's telemetry, the update check, or a "helpful" cloud fallback phones home with the prompt.

**The fix.** Verify the whole pipeline: runtime telemetry, model download source, any cloud features. The model being local doesn't make the pipeline local.

## 4. Using the dev tool as the production server

**The mistake.** Ollama serving a multi-user app — it's a dev loop tool; concurrency, batching, and observability aren't what it's for.

**The fix.** Dev loop: Ollama/llama.cpp. Production serving: vLLM or SGLang — batching, throughput, and the operational features exist for a reason.

## 5. A model too small for the task

**The mistake.** The 3B model runs great — on the demo. The real task needs the 13B, and the gap only shows on production inputs.

**The fix.** Eval the candidate on real task items, not the launch demo. A model that's fast and wrong is just wrong.

## 6. Ignoring the throughput math

**The mistake.** "It generates at 30 tok/s" — for one request. Ten concurrent users get 3 tok/s each, and the UX collapses.

**The fix.** Measure throughput at your concurrency, not single-stream. Batching (vLLM's specialty) is what turns single-user speed into multi-user capacity.

## 7. Quantizing the eval set into the comparison

**The mistake.** The quantized model is compared to the fp16 on a benchmark the quant was tuned on — the comparison is rigged.

**The fix.** Eval on your held-out task set — the benchmark tells you the quant works on benchmarks, not on your workload.

## 8. Assuming a model file is safe

**The mistake.** A community-uploaded GGUF downloaded and run — the file is code-adjacent; a malicious pickle or a crafted file is a supply-chain risk.

**The fix.** Download from verified sources, check the format (GGUF safetensors variants over pickle-based), and treat a model file like a dependency — provenance matters.

**Related:** [Local inference cheatsheet](/learn/local-inference/local-inference-cheatsheet), [The local privacy boundary](/learn/local-inference/the-local-privacy-boundary), [Hardware sizing guide](/learn/local-inference/hardware-sizing-measurement-guide)
