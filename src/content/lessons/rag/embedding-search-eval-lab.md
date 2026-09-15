---
title: "Lab: Embedding Search With Evaluation Fixtures"
track: "rag"
status: live
summary: "Build a minimal embedding-search index, then prove it works with a frozen fixture set — recall@k numbers, not vibes."
duration: "20 min read"
---

Retrieval quality is where RAG systems quietly fail: the demo query works, the fifteenth query doesn't, and nobody can say when it regressed. This lab builds the two things production retrieval needs — a working index *and* a fixture set that scores it — so quality becomes a number you can diff.

## The brief

Build a small embedding search over a corpus you control, plus an evaluation harness that answers: *for each question in the fixture, does the right document land in the top k?* Then change one thing — chunk size, embedding model, top-k — and watch the number move. That diff is the deliverable.

## Prerequisites

- [Chunking strategies for documents](/learn/rag/chunking-strategies-for-documents) — the corpus needs chunking decisions first
- [Embeddings and semantic similarity](/learn/rag/embeddings-and-semantic-similarity) — what the vectors mean
- [Similarity search and ANN indexes](/learn/rag/similarity-search-and-ann-indexes) — what the index does

## Supplied assets and mock mode

Any 20–50 documents work — your own notes, a public docs set, generated articles. The whole lab runs local and free: a local embedding model or a small paid embedding call both qualify; what matters is the fixture, not the provider. If you cannot call an embedding API, use hashing-based embeddings or TF-IDF vectors — the harness is identical, the numbers just differ (and that difference is itself a finding).

## The fixture set

Freeze this before you tune anything:

- [ ] 25–50 questions written *from* the corpus, each with the chunk or document id that should answer it
- [ ] At least 5 questions where the answer spans two chunks (multi-hop retrieval)
- [ ] At least 3 questions that are **not answerable** — the correct behavior is low scores across the board, and the fixture records that
- [ ] A scoring script that reports recall@1, recall@5, and recall@10 — the same query set, every run, no manual reading

## Acceptance criteria

- [ ] The index builds from a script, not a notebook cell — rerunning it reproduces the index
- [ ] `npm test` / `pytest` (or equivalent) runs the fixture set and prints recall@k numbers — deterministic, no API calls at test time (embeddings are cached or computed offline)
- [ ] A failure case is injected deliberately: corrupt one document's embedding, confirm the eval catches the recall drop
- [ ] Two configurations are compared on the same fixture — e.g. chunk size 200 vs 800 — and the report shows both numbers, not a conclusion without the data

## Milestones

1. **Index without eval.** Embed, store, query, eyeball the results — get the pipeline working end to end before the harness exists.
2. **The fixture freezes.** Write the questions and expected-answer ids *by reading the corpus* — the fixture is ground truth you derived, not guesses.
3. **The scorer runs.** Recall@k prints from a command. This is the moment retrieval quality becomes a number.
4. **One knob, one diff.** Change chunk size or top-k, rerun, record both numbers. The lab is done when you can say what moved.

## What good looks like

A README that says "recall@5 was 0.72 at chunk=800, 0.84 at chunk=200, here's the fixture and the diff" — small numbers honestly measured beat a vague claim about "good retrieval." The fixture outlives the lab: it is the regression set for every retrieval change you ever make to this corpus.

## For your portfolio

Show the fixture file and the two-run comparison, not the index code — anyone can call an embedding API; the evaluated-comparison habit is the signal. Do not claim the corpus generalizes — state its size and source.

## Defend this build

1. Your recall@5 is 0.84 — what does the missing 16% look like, and did you inspect it?
2. Why is an unanswerable-question fixture row valuable? What did yours score?
3. If the corpus doubled tomorrow, which part of this harness breaks first?
4. What would a retrieval regression look like in this eval that a unit test would never catch?

The pass bar: answers reference your fixture rows and your measured numbers, not retrieval theory.

**Related:** [Evaluating RAG quality](/learn/rag/evaluating-rag-quality), [Benchmarking retrieval on a shared corpus](/learn/rag/benchmarking-retrieval-shared-corpus), [Hybrid search: lexical and vector](/learn/rag/hybrid-search-lexical-and-vector)
