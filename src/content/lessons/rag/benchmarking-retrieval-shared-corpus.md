---
title: "Benchmarking retrieval on a shared, versioned corpus"
track: "rag"
status: live
summary: "A fair retrieval benchmark needs a versioned corpus, labeled questions with gold answers, and frozen metrics — built once, every store and config change gets compared honestly against the same fixed target."
duration: "9 min read"
---

## The short answer

Every vector-store lesson in this track ends with the same advice —
measure on *your* corpus — and this is how: a **shared, versioned corpus**
(the same documents, checksummed and frozen) plus **labeled questions**
(queries with known gold-relevant chunks) plus **frozen metrics**
(hit-rate@k, MRR, recall@k computed the same way every run). Built once,
it turns "which store/config/chunking is better" from an argument into a
diff — the retrieval counterpart of
[eval datasets](/learn/evals-red-teaming/building-a-golden-dataset).

## The three pieces

1. **Versioned corpus** — the document set pinned to a commit or checksum.
   Store-choice experiments are invalid if the corpus drifts between runs;
   versioning is what makes "same input" true, not assumed.
2. **Labeled questions** — real queries paired with the chunk IDs that
   answer them. Sources: real user questions (best), synthetic questions
   generated *from* held-out docs (fine, mark them), expert-written
   probes (good for adversarial cases). Label at the chunk level —
   "the right text was retrievable," not "the answer was good."
3. **Frozen metrics** — one scorer, in version control, run identically
   against every configuration: hit-rate@k (did a gold chunk appear in
   top-k), MRR (how high did it rank), recall@k (coverage across gold
   chunks). Fix `k` before you start — moving `k` to make a result look
   better is the classic self-deception.

## What the benchmark isolates

Retrieval quality is separable from generation: a gold-chunk hit is
measurable without any LLM call, which is exactly what you want when
comparing *stores*. The same harness answers: does
[pgvector](/learn/rag/pgvector-in-postgres) suffice vs a
[managed store](/learn/rag/managed-vector-databases)? Does
[hybrid search](/learn/rag/hybrid-search-lexical-and-vector) beat pure
vector here? Does the [reranker](/learn/rag/rerankers-in-practice) earn
its latency? Same corpus, same questions, same scorer — the variable is
the thing you're testing, everything else is held constant.

## The honest limits

- **Corpus representativeness** — a benchmark on clean docs says nothing
  about your worst PDF; include the ugly ones deliberately.
- **Question coverage** — fifty questions is a smoke test, not a
  benchmark; a few hundred spread across document types is where
  differences become visible.
- **Churn** — questions leak into tuning decisions (you'll chunk for the
  questions you have). Keep a held-out set you don't optimize against.
- **It's a comparison tool, not a quality guarantee** — a store that wins
  your benchmark wins *on this corpus*, which is still the most honest
  claim retrieval engineering can make.

## The exercise

Take one doc set, fifty labeled questions, and run the scorer against two
configs — say, different chunk sizes or vector-vs-hybrid. The delta
between them, measured on identical inputs, is the entire methodology.

## Go deeper

- [Evaluating RAG quality](/learn/rag/evaluating-rag-quality) — the end-to-end version including generation.
- [Building a golden dataset](/learn/evals-red-teaming/building-a-golden-dataset) — the labeling discipline in detail.
- [Diagnosing RAG failures end-to-end](/learn/rag/diagnosing-rag-failures-end-to-end) — what the benchmark surfaces.
