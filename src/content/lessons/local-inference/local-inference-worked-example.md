---
title: "Worked Example: The Local Setup That Wasn't Private"
track: "local-inference"
status: live
summary: "A 'local, private' assistant traced through the actual data flow — the model was local, the pipeline wasn't, and the check that caught it."
updated: "2026-09-16"
duration: "10 min read"
---

"Local model" is a claim about the weights; "private" is a claim about the whole pipeline. This example traces one setup that conflated them.

## The setup

A team deploys a local LLM assistant for internal documents — "all data stays on-prem," the launch doc says. The stack: Ollama serving a 13B model, a web frontend, a RAG layer over internal docs. The model is genuinely local. The privacy claim isn't.

## The trace

**The model — local.** Ollama serves the 13B; inference runs on the office GPU box. Prompts don't leave the machine for the model call. This part of the claim is true.

**The model download — external.** The GGUF came from a public registry at setup. The download is fine — but the "air-gapped" claim in the security doc is already wrong: the box has internet, and the update mechanism uses it.

**The frontend analytics — external.** The web frontend ships a default analytics snippet — page views and a session-record tool. The prompts' *content* isn't sent, but the session metadata and interaction patterns are — the "nothing leaves" claim now has an asterisk.

**The RAG layer — the real leak.** The embedding calls go to a hosted embedding API — the RAG layer sends document chunks to an external service for embedding. The local model is real; the local *pipeline* isn't — document content leaves the building on every query.

## The fix

- **Embeddings local too** — a local embedding model (or precomputed embeddings) keeps the RAG layer on-prem.
- **Telemetry audited** — the analytics snippet removed or proxied; the update path documented as an explicit external call.
- **The claim scoped honestly** — "model inference local; document embeddings local; the only external call is a pinned model-download at setup" — a claim that's true, vs "all local" which wasn't.

## What the trace teaches

- **The model is one component.** The privacy claim covers the pipeline — embeddings, frontend, telemetry — not just the weights.
- **The leak is usually a default.** Nobody chose to send chunks to an API; the RAG library's default embedding provider did. Defaults are decisions.
- **Verify the whole path.** "Check where the data goes" means every hop, not the headline component.

## The check

For any "local/private" claim, trace the data end to end: the model call, the embeddings, the frontend, the telemetry, the update path. The claim is only true if every hop is — and usually one isn't.

**Related:** [The local privacy boundary](/learn/local-inference/the-local-privacy-boundary), [Local inference mistakes](/learn/local-inference/local-inference-mistakes), [Ollama modelfiles and APIs](/learn/local-inference/ollama-modelfiles-and-apis)
