---
title: "LM Studio: the GUI path to a local OpenAI-compatible server"
track: "local-inference"
status: live
summary: "LM Studio trades Ollama's terminal workflow for a desktop app — model discovery, download, and a local OpenAI-compatible server behind a GUI, plus an lms CLI for scripting."
duration: "7 min read"
sources: ["lmstudio-docs"]
---

## The short answer

LM Studio is the desktop-app path to local inference: a GUI where you search
model hubs, download quantized builds, chat in-app, and flip on a local
server that speaks the OpenAI API shape. Where Ollama is daemon-plus-CLI,
LM Studio is app-first — the model browser and the per-model settings
(context length, GPU offload, chat template) are the product. For scripting
there's an `lms` command-line companion that drives the same app.

## What the workflow looks like

The loop is visual: search the in-app model catalog (it surfaces GGUF builds
from Hugging Face, with quantization levels listed per file), download,
pick a chat template if the model needs a specific one, and chat. When you
want code against it, the server tab exposes an OpenAI-compatible API on
`localhost:1234` — `/v1/chat/completions`, `/v1/embeddings`, `/v1/models`.
The same base-URL swap that pointed a script at Ollama or vLLM points it
here.

```python
from openai import OpenAI

client = OpenAI(base_url="http://localhost:1234/v1", api_key="lm-studio")
print(client.chat.completions.create(
    model="local-model",   # the server serves whatever is loaded
    messages=[{"role": "user", "content": "Explain KV cache in one line."}],
).choices[0].message.content)
```

The `api_key` value is a placeholder — a localhost server doesn't
authenticate, which matters once anything but you can reach the port (see
[the local privacy boundary](/learn/local-inference/the-local-privacy-boundary)).

## Where it fits versus Ollama

- **Pick LM Studio when** you want the model catalog and settings in a GUI,
  you're evaluating several quantized builds side by side, or the machine's
  operator isn't a terminal person. On Apple Silicon it also serves
  MLX-format models, not just GGUF.
- **Pick Ollama when** you want a scriptable daemon, `ollama pull` in a
  setup script, or Modelfiles checked into a repo
  ([Ollama first run](/learn/local-inference/ollama-first-run)).
- **Pick neither** when you're serving real concurrent traffic — that's
  [vLLM](/learn/local-inference/vllm-production-serving) or llama.cpp's
  server mode.

The three aren't exclusive — the underlying engines overlap (LM Studio runs
llama.cpp under the hood for GGUF), so skills transfer.

## The honest limits

- **It's an app, not a daemon.** The server runs while the app runs; there's
  no "start on boot and forget it" story the way `ollama serve` has.
- **Per-model knobs are easy to change and easy to leave wrong.** A chat
  template set for one model stays set — wrong template is the classic
  cause of "the model talks weird" reports.
- **Proprietary.** Ollama's core and llama.cpp are open source; LM Studio's
  app layer is not. For auditable deployments that matters.

## The exercise

Run the same model on LM Studio's server and on Ollama, then diff the same
prompt's outputs — same weights, different sampling defaults and templates.
That's the practical lesson: the runtime is part of the result.

## Go deeper

- [Ollama: install, pull, run, and the first API call](/learn/local-inference/ollama-first-run) — the terminal-first counterpart.
- [MLX and mlx-lm on Apple Silicon](/learn/local-inference/mlx-lm-on-apple-silicon) — the format LM Studio can serve besides GGUF.
- [The local privacy boundary](/learn/local-inference/the-local-privacy-boundary) — what the app does and doesn't send.
