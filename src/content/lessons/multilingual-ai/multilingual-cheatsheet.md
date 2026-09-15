---
title: "Multilingual AI Cheatsheet"
track: "multilingual-ai"
status: live
summary: "The multilingual decision table — translate-then-process vs native, the code-mixing trap, and the eval that must exist per language."
duration: "6 min read"
---

The multilingual track compressed to the pipeline decision and the per-language checks that can't be skipped.

## The pipeline decision

| The input… | The pipeline | The failure it prevents |
|---|---|---|
| High-resource language | Native processing | A translation step adding errors and latency |
| Low-resource language | Translate to English → process → translate back, or a strong multilingual model | Forcing a weak-language model beyond its ability |
| Code-mixed (Hinglish, Spanglish) | A model that handles mixing; never "detect one language" | The detector picking one and mangling the other |
| Documents (OCR) | Per-language OCR + a language-aware text pipeline | Latin-script OCR on Devanagari or Arabic |

## The checks that differ from monolingual

- **Eval per language** — an aggregate score hides that the model is great in English and broken in Tamil.
- **Tokenization cost varies** — the same text costs very different token counts across languages; CJK and Indic scripts often cost more per character.
- **Code-mixing is a feature, not noise** — real users mix languages mid-sentence; a system that forces one is wrong on real input.
- **Retrieval is cross-lingual** — a Hindi query should find the English document; eval that, not just same-language match.

## The failure modes in one line each

- **Eval'd on English only** — the multilingual launch that's only verified in one language.
- **Translation in the middle** — a translate-process-translate sandwich that compounds errors.
- **Language detection that forces a choice** — a code-mixed input forced into one language, mangled.
- **Latin-script assumptions** — tokenization, OCR, and display all tuned for Latin, silently degrading elsewhere.
- **Same test set translated** — the eval translated to "test" other languages; it tests translation, not capability.

## The decision rules

- High-resource language → native; low-resource → measure whether translate-first beats a weak native model.
- Code-mixing is expected input — support it, don't detect-and-reject it.
- Per-language evals are non-negotiable — the aggregate is a lie.
- Token costs differ per script — budget per language, not per "document."

**Related:** [Multilingual model landscape](/learn/multilingual-ai/multilingual-model-landscape), [Code-mixing and code-switching](/learn/multilingual-ai/code-mixing-and-code-switching), [Multilingual datasets and benchmarks](/learn/multilingual-ai/multilingual-datasets-and-benchmarks), [Multilingual support assistant lab](/learn/multilingual-ai/multilingual-support-assistant-lab)
