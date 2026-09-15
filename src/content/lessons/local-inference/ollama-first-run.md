---
title: "Ollama: install, pull, run, and the first API call"
track: "local-inference"
status: live
summary: "Get a model running locally with Ollama — installation, finding models, the pull/run lifecycle, and calling the local REST API with streaming."
duration: "9 min read"
sources: ["ollama-docs"]
---

## The short answer

Ollama packages a model runner, a model registry, and a local REST API behind
one CLI. The lifecycle is: install the app, `ollama pull` a model (downloads
the weights once), `ollama run` it (loads and starts an interactive session),
then call `http://localhost:11434` from code for the API. The whole loop —
install to a model answering over HTTP — is a few minutes on a decent
connection.

## Install and first pull

Install from the official site or package manager, then verify the daemon is
up:

```bash
ollama --version
ollama list            # nothing yet
ollama pull llama3.2   # downloads weights — a multi-GB fetch, once
```

`ollama list` now shows the model with its size. The weights live on disk in
Ollama's store; pulling again reuses them. The registry tags follow
`name:size` (e.g. `llama3.2:3b`) — pick a size your hardware can actually run
(see [hardware sizing](/learn/local-inference/hardware-sizing-measurement-guide)
before reaching for the big tag).

## Run it

```bash
ollama run llama3.2
```

You're in an interactive chat session against a locally-running model — no
account, no API key, no network needed at inference time. `/bye` exits;
`ollama ps` shows what's currently loaded; `ollama stop <model>` unloads it.

## Call the API

`ollama run` starts a server on `localhost:11434` — the same daemon serves
both the CLI and HTTP clients. The generate endpoint:

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Explain RAG in one sentence.",
  "stream": false
}'
```

With `"stream": true` (the default) you get newline-delimited JSON chunks as
tokens generate — the shape a UI consumes for live output. There's also an
OpenAI-compatible endpoint at `/v1/chat/completions` for code written against
OpenAI's SDK shape.

## Where the rough edges are

- **First request is slow** — the model loads into memory on first call;
  `ollama ps` tells you if it's resident.
- **Port collisions** — `11434` can be taken; check `ollama ps`/`ollama serve`
  state rather than assuming the daemon is down.
- **Disk usage** — models are multi-GB each; `ollama rm <model>` is the
  cleanup, not deleting files by hand.

## The exercise

Pull a small model, run it interactively, then hit `/api/generate` with curl
both streamed and unstreamed — the difference between "one JSON blob at the
end" and "tokens as they arrive" is the thing every local-inference app
builds on.

## Go deeper

- [Ollama Modelfiles, embeddings, and tool calling](/learn/local-inference/ollama-modelfiles-and-apis) — the second half of the API surface.
- [What 'running a model locally' actually means](/learn/local-inference/what-local-inference-actually-means) — what local buys you and what it doesn't.
- [The local privacy boundary](/learn/local-inference/the-local-privacy-boundary) — what Ollama itself does and doesn't send.
