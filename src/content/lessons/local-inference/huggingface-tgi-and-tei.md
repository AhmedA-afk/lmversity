---
title: "Hugging Face TGI and TEI: the ecosystem's own serving layer"
track: "local-inference"
status: live
summary: "Text Generation Inference and Text Embeddings Inference are Hugging Face's production servers — continuous batching, streaming, and OpenAI-compatible surfaces for generation, embeddings, and reranking."
duration: "7 min read"
sources: ["hf-tgi-docs", "hf-tei-docs"]
---

## The short answer

TGI (**Text Generation Inference**) is Hugging Face's production server for
LLMs — a Rust router in front of Python model shards, doing continuous
batching, token streaming over SSE, and an OpenAI-compatible messages API.
TEI (**Text Embeddings Inference**) is the same product shape for
embeddings, reranking, and classification. Together they're the "serve Hub
models without leaving the HF ecosystem" answer — the production half of
what [transformers](/learn/local-inference/huggingface-transformers-pipelines)
does in development.

## What TGI gives you

```bash
# Docker is the documented path; the server takes a Hub model id
text-generation-launcher --model-id <model> --port 8080
```

Behind it: continuous batching (requests join/leave the running batch
instead of queuing — the same idea as
[vLLM](/learn/local-inference/vllm-production-serving)), streaming via
server-sent events, safetensors loading, tensor-parallel sharding across
GPUs, and usage surfaces that play with HF tooling. Because it serves Hub
model IDs directly, the model you evaluated in `transformers` deploys with
no format conversion — no GGUF export step, unlike
[llama.cpp](/learn/local-inference/llama-cpp-build-quantize-serve).

TEI mirrors that for the retrieval side: one server for
`/embed`, `/rerank`, and classification endpoints — the embedder half of a
[RAG pipeline](/learn/rag/ingestion-chunking-and-retrieval) running on your
own hardware instead of a hosted embeddings API.

## TGI versus vLLM

They're competitors at the same job, and the honest comparison is
situational:

- **TGI** keeps you inside the HF stack — Hub model IDs, HF licensing
  checks, shared tooling — and its GPU support extends beyond NVIDIA in
  places. Architecture coverage tracks the Hub.
- **vLLM** has the larger third-party deployment ecosystem and is the
  default in much self-hosted LLM infrastructure.
- **Both** do continuous batching, streaming, and OpenAI-compatible APIs —
  which means for a given model the decision is usually ecosystem fit and
  measured throughput on your workload, not feature checklists.
  [Measure it](/learn/local-inference/hardware-sizing-measurement-guide);
  benchmark claims from either project's own repo aren't evidence.

## Where the seams are

TGI supports a defined set of architectures — most mainstream causal LMs
are covered, but an unusual or very new architecture can be absent, and
that's a hard wall rather than a config flag. TEI likewise covers specific
model classes (embedding, reranking, sequence classification), not general
generation. Check the supported-architectures list in the docs for your
model before planning a deployment on either.

## The exercise

Serve one model through TGI and the same weights through
[vLLM](/learn/local-inference/vllm-production-serving); run a fixed
concurrent workload against both and compare observed throughput and
time-to-first-token — the engine choice is empirical, not tribal.

## Go deeper

- [vLLM: serving a model to real traffic](/learn/local-inference/vllm-production-serving) — the alternative serving engine.
- [Hardware sizing by measurement](/learn/local-inference/hardware-sizing-measurement-guide) — the honest way to pick.
- [transformers: pipelines and AutoModel](/learn/local-inference/huggingface-transformers-pipelines) — the development half of the same ecosystem.
