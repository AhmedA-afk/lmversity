---
title: "Hugging Face Transformers: pipelines and AutoModel"
track: "local-inference"
status: live
summary: "The transformers library is the reference implementation every runtime descends from — pipeline() for quick tasks, AutoModel/AutoTokenizer for control, and device_map for hardware placement."
duration: "8 min read"
sources: ["hf-transformers-docs"]
---

## The short answer

`transformers` is the Hugging Face library that loads pretrained models
from the Hub and runs them — the reference implementation most local
runtimes in this track descend from or interoperate with. Two levels of
API: `pipeline()` wraps a whole task (load, tokenize, generate, decode) in
one call for quick work; `AutoModel`/`AutoTokenizer` expose the pieces for
real control. This is where you run a model *in your Python process* —
more control than a server, less serving machinery than vLLM.

## The two levels

```python
from transformers import pipeline

# level 1: task in one call
gen = pipeline("text-generation", model="<model-id>")
gen("Explain KV cache in one sentence.")

# level 2: the pieces
from transformers import AutoModelForCausalLM, AutoTokenizer

tok = AutoTokenizer.from_pretrained("<model-id>")
model = AutoModelForCausalLM.from_pretrained("<model-id>", device_map="auto")
inputs = tok("Explain KV cache.", return_tensors="pt").to(model.device)
out = model.generate(**inputs, max_new_tokens=64)
print(tok.decode(out[0]))
```

`device_map="auto"` spreads the model across available devices — GPU, CPU,
disk offload for what doesn't fit — which makes it the pragmatic way to run
models too big for your VRAM at a speed penalty. It's the in-process cousin
of llama.cpp's `-ngl` offload flag: same "how much fits where" problem,
different plumbing.

## What it's for

- **Reading and adapting** — the Hub's model zoo plus one load API makes it
  the right tool for comparing models, inspecting
  [model cards](/learn/llm-foundations/read-a-model-card-lab), and running
  architectures that specialized runtimes haven't implemented yet. New
  architectures land in `transformers` first.
- **Embeddings and non-generation tasks** — `pipeline("feature-extraction")`
  and the `AutoModel` output give hidden states directly, which feeds
  [RAG ingestion](/learn/rag/ingestion-chunking-and-retrieval).
- **Prototyping the model choice** before committing a serving stack — the
  same weights you evaluate here get served by
  [TGI](/learn/local-inference/huggingface-tgi-and-tei), vLLM, or exported
  to GGUF.

## What it's not for

`generate()` in a loop is not serving. There's no continuous batching, no
paged KV cache, no concurrent-request scheduler — under real traffic a
`transformers` loop queues serially where
[vLLM](/learn/local-inference/vllm-production-serving) interleaves. The
usual path is `transformers` for development and evaluation, then a serving
engine for production — or [Ollama](/learn/local-inference/ollama-first-run)
when the whole point is not writing Python at all.

## The exercise

Load the same model via `pipeline` and via `AutoModel`, then reach inside:
count the tokenizer's tokens on your prompt and inspect `model.config` —
it's the field-level version of reading a
[model card](/learn/llm-foundations/read-a-model-card-lab).

## Go deeper

- [Hugging Face TGI and TEI](/learn/local-inference/huggingface-tgi-and-tei) — the serving layer on the same ecosystem.
- [vLLM: serving a model to real traffic](/learn/local-inference/vllm-production-serving) — where the model goes when traffic arrives.
- [llama.cpp: build, quantize, and serve](/learn/local-inference/llama-cpp-build-quantize-serve) — the portable-format alternative.
