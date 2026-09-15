---
title: "Multilingual datasets and benchmarks"
track: "multilingual-ai"
status: live
summary: "Find and evaluate multilingual datasets, understand what translated benchmarks do and don't measure, and build eval sets that reflect your users' real language."
duration: "11 min read"
sources:
  - ai4bharat-indicnlp
  - mteb-leaderboard
---

You cannot improve what you cannot measure, and you cannot measure a language you have no data for. Multilingual evaluation has two recurring traps: assuming translated benchmarks transfer, and assuming no benchmark exists for your language.

## Where the datasets are

For Indian languages, [AI4Bharat's IndicNLP program](https://indicnlp.ai4bharat.org) is the canonical starting point — corpora, task datasets, and benchmarks built natively in the languages rather than translated into them. Similar national-language programs exist for many regions; for a specific language, look for the academic NLP group working on it before concluding nothing exists. The [MTEB leaderboard](https://huggingface.co/spaces/mteb/leaderboard) aggregates embedding benchmarks across many languages and is the practical first stop for retrieval evaluation.

Beyond curated benchmarks: government open-data portals, Wikipedia and Common Crawl slices, parliamentary proceedings, and news corpora are the raw material most multilingual eval sets are built from. Licensing varies — check before training on any of it.

## Translated benchmarks measure the wrong thing carefully

A benchmark translated from English tells you how the model does on *English-shaped tasks expressed in another language*. It misses:

- **Culturally-loaded content** — questions whose answers require local context (festivals, legal systems, common-knowledge references) don't appear in translated sets at all.
- **Register** — translated text is uniformly formal; your users write informally, code-mixed, romanized.
- **Translation artifacts** — the eval itself may contain errors that make "correct" answers wrong.

Use translated benchmarks for regression checks (did this model version get worse?) and native-language sets for capability judgments (is the model good at this language?).

## Building your own eval set

The durable asset is a modest, human-reviewed set in your actual domain:

1. **Collect real inputs** — consented user messages, support tickets, the queries your logs already contain. Fifty real prompts beat five hundred synthetic ones.
2. **Stratify deliberately** — per language, per register (formal/informal/mixed), per task type. Include the romanized and code-mixed slices.
3. **Human-verify ground truth** — machine-generated gold answers in low-resource languages have high error rates; a bilingual annotator's hour is worth more than a pipeline's thousand samples.
4. **Version it** — languages, dialects, and your user mix all drift. Date your eval sets like you date your sources.

Feed the set into your eval harness — the structure is the same as any eval suite; only the language coverage changes. See [Designing multilingual evaluations](/learn/evals-red-teaming/multilingual-evaluation-design) for the harness side.

**Related:** [Designing multilingual evaluations](/learn/evals-red-teaming/multilingual-evaluation-design), [Low-resource language strategies](/learn/multilingual-ai/low-resource-language-strategies), [Multilingual model landscape](/learn/multilingual-ai/multilingual-model-landscape)
