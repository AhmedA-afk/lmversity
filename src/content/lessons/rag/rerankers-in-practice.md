---
title: "Rerankers in practice: Cohere Rerank and the alternatives"
track: "rag"
status: live
summary: "Rerankers re-score retrieved candidates with a cross-encoder that reads query and document together — Cohere Rerank as the managed option, open models for local reranking, and the honest question of when the second stage pays."
duration: "8 min read"
sources: ["cohere-rerank-docs"]
---

## The short answer

A reranker is the second scoring stage: the retriever returns ~50
candidates by embedding similarity; the reranker reads query+document
*together* (cross-encoder) and reorders them by actual relevance. The
vendor landscape splits three ways — managed APIs (**Cohere Rerank** is
the reference), open cross-encoder models you run yourself
(`bge-reranker`-family and friends via sentence-transformers), and
LLM-as-reranker (ask the model to order candidates). The mechanism and
when-it-pays logic live in
[reranking retrieved results](/learn/rag/reranking-retrieved-results) —
this lesson is the vendor layer.

## The three options

```python
# Cohere Rerank — managed API, one call
import cohere
results = cohere_client.rerank(
    model="rerank-v3.5", query=q,
    documents=[d.text for d in candidates], top_n=8)

# Local cross-encoder — the same pattern on your own hardware
from sentence_transformers import CrossEncoder
reranker = CrossEncoder("BAAI/bge-reranker-v2-m3")
scored = sorted(zip(candidates, reranker.predict([(q, d.text) for d in candidates])),
                key=lambda x: -x[1])
```

- **Cohere Rerank** — the managed path: one API call, multilingual and
  domain variants, no infrastructure. Documents transit a third party —
  the same boundary question as every hosted call
  ([privacy](/learn/local-inference/the-local-privacy-boundary)).
- **Open cross-encoders** — run on your hardware: bge/jina/mxbai-family
  models via sentence-transformers or [ONNX Runtime](/learn/local-inference/onnx-runtime-on-device-inference).
  You own latency, cost, and data — and the ops.
- **LLM-as-reranker** — prompt the generator model to score or order
  candidates: flexible and zero new infrastructure, but slower and
  pricier per candidate than a purpose-built cross-encoder.

## When the second stage pays — honestly

Reranking earns its latency when retrieval mixes near-misses with hits —
long documents, similar-sounding chunks, lexical overlap that fools
embeddings. It doesn't fix a bad retriever: if the right chunk isn't in
the candidate set, reranking reorders the wrong answer. And it doesn't
always pay at all — on clean corpora with good chunking the uplift can
be small, which is why the honest move is measuring on your
[shared-corpus benchmark](/learn/rag/benchmarking-retrieval-shared-corpus)
with and without the stage, not assuming it helps.

## Operations that matter

- **Cost/latency accounting**: rerankers score per-candidate — top_n=8 of
  50 costs 50 cross-encoder passes or one API call over 50 docs; budget it
  into the retrieval SLO.
- **Freshness**: rerankers are stateless — nothing to keep fresh, which
  makes them the cheapest stage to upgrade or A/B.
- **Provenance**: rerank reorders; it must never rewrite — the candidate
  text and its source metadata flow through untouched.
- **Evaluation**: this is the stage most worth A/B-ing — measure
  hit-rate@k before and after on the labeled corpus; keep whichever wins
  on *your* data.

## The exercise

Take your retrieval eval set, rerank the top-50 with a local
cross-encoder, and compare hit-rate@8 — then swap in the managed API and
see whether the difference is worth the boundary.

## Go deeper

- [Reranking retrieved results](/learn/rag/reranking-retrieved-results) — the mechanism and when-it-pays logic.
- [Reranking methods compared](/learn/rag/reranking-methods-compared) — cross-encoder vs LLM-as-judge tradeoffs.
- [Evaluating RAG quality](/learn/rag/evaluating-rag-quality) — the measurement frame for the A/B.
