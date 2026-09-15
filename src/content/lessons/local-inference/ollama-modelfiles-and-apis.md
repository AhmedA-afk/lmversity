---
title: "Ollama Modelfiles, embeddings, and tool calling"
track: "local-inference"
status: live
summary: "Customize a model with a Modelfile, then use Ollama's structured output, embeddings, and tool-calling APIs — the surface a real local app is built on."
duration: "9 min read"
sources: ["ollama-docs"]
---

## The short answer

`ollama run` is the demo; the API surface is the product. A **Modelfile**
bakes your system prompt, parameters, and template into a named model you
pull like any other. The API adds three production capabilities beyond
generate: **structured output** (JSON Schema-constrained responses),
**embeddings** (`/api/embed` for local RAG), and **tool calling** (the model
emits tool calls your code executes). Together they make a local model a real
backend, not a chat toy.

## Modelfiles: bake your defaults in

A Modelfile is a Dockerfile-shaped recipe that starts from a base model and
layers on behavior:

```dockerfile
FROM llama3.2

SYSTEM """You are a terse technical writer. Answer in under 100 words."""

PARAMETER temperature 0.3
PARAMETER num_ctx 8192
```

```bash
ollama create my-writer -f Modelfile
ollama run my-writer
```

Now `my-writer` is a first-class model — `ollama list` shows it, the API
serves it, and your system prompt and sampling parameters travel with the
model instead of living in every request. This is how you stop pasting the
same preamble into every call.

## Structured output

The generate and chat endpoints accept a `format` field carrying a JSON
Schema — the model's output is constrained to validate against it:

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Extract the city and year: The treaty was signed in Paris in 1919.",
  "format": {
    "type": "object",
    "properties": { "city": {"type":"string"}, "year": {"type":"integer"} },
    "required": ["city", "year"]
  },
  "stream": false
}'
```

This is constrained decoding happening locally — the same guarantee as
provider-side structured output, no API key required. (The mechanics: see
[constrained decoding](/learn/structured-outputs/grammar-constrained-generation).)

## Embeddings: local RAG without a remote call

`/api/embed` turns the same model into an embedding service:

```bash
curl http://localhost:11434/api/embed -d '{
  "model": "llama3.2",
  "input": "The sentence to embed."
}'
```

That closes the loop for a fully-local RAG: documents embedded locally,
vectors searched locally, generation local — nothing leaves the machine at
any stage. Pair it with [the RAG ingestion path](/learn/rag/ingestion-chunking-and-retrieval).

## Tool calling

Ollama's chat endpoint accepts OpenAI-shaped `tools` — the model emits
`tool_calls` your code executes and feeds back, exactly like a hosted API's
dispatch loop. The contract is the same one in
[tool calling across providers](/learn/tools-function-calling/tool-calling-across-providers):
the model decides *when* to call and *with what arguments*; your code owns
execution. A tool-capable local model means the agent loop can run entirely
offline — including on hardware with no network at all.

## Vision models

Multimodal models (the `llava`-family and vision-capable tags in the
registry) take images in the chat request — an `images` field carrying
base64-encoded frames alongside the text. The mechanics are the same as the
API above; the constraint is that vision models are bigger and slower, so
[hardware sizing](/learn/local-inference/hardware-sizing-measurement-guide)
matters more, not less.

## The exercise

Write a Modelfile that pins a system prompt, then hit `/api/embed` on two
sentences and cosine-similarity the vectors in code — you've just built the
retrieval half of a local RAG without a single remote call.

## Go deeper

- [Ollama: install, pull, run, and the first API call](/learn/local-inference/ollama-first-run) — the setup this builds on.
- [Structured outputs in practice](/learn/structured-outputs/json-schema-essentials-for-outputs) — the schema side of `format`.
- [RAG: ingestion, chunking, and retrieval](/learn/rag/ingestion-chunking-and-retrieval) — where the local embeddings go.
- [Tool calling across providers](/learn/tools-function-calling/tool-calling-across-providers) — the dispatch loop this plugs into.
