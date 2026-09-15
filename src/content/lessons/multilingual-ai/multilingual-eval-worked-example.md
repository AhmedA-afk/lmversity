---
title: "Worked Example: The Multilingual Launch That Only Worked in English"
track: "multilingual-ai"
status: live
summary: "A support assistant launched in 12 languages — the per-language eval that found 4 broken, and the pipeline fix that made the claim true."
duration: "10 min read"
---

"Supports 12 languages" is a claim per language. This example walks a launch where the claim was made on an English eval — and the per-language check that found it false in four.

## The setup

A support assistant launched with "12 languages supported." The pre-launch eval: 100 English support questions, 89% resolution. The launch blog says "multilingual." Nobody tested the other 11.

## The per-language eval that should have run first

A 20-item-per-language eval, with native items (not translated), showed:

| Language | Resolution | The failure |
|---|---|---|
| English | 89% | baseline |
| Spanish | 81% | mostly fine |
| Hindi | 54% | code-mixed input forced into "Hindi," mixed part lost |
| Tamil | 48% | weak model coverage + retrieval returning English docs |
| Arabic | 52% | RTL rendering + weak retrieval |
| 7 others | 60–78% | varying, mostly retrieval gaps |

The aggregate "12 languages" hid that 4 of them were worse than a coin flip.

## The fixes the eval drove

- **Code-mixing handled** — the Hindi failure wasn't translation; it was the language detector forcing a choice on mixed input. A model that handles mixing, plus no forced detection, moved Hindi to 76%.
- **Cross-lingual retrieval** — the Tamil and Arabic failures were retrieval: the query's language bounded the corpus. Multilingual embeddings that retrieve across languages moved both ~20 points.
- **RTL rendering fixed** — the Arabic display bug was separate from the model — a pipeline assumption, not a capability gap.

## The launch claim, corrected

Post-fix eval: the four broken languages moved to 70–78%, and the launch claim was scoped honestly — "supports these languages at these measured rates" rather than an undifferentiated "multilingual."

## What the example teaches

- **"Multilingual" is a per-language claim.** The aggregate is marketing; the per-language eval is the product truth.
- **The failures were different bugs.** Code-mixing, retrieval, and rendering are three different problems wearing one "multilingual" label — a single fix wouldn't have caught them.
- **Native eval items matter.** A translated set would have measured translation, not the code-mixed, dialect-rich input users actually send.

## The check

Before claiming language support: a per-language eval on native inputs, broken out per language. The aggregate "supports N languages" without the per-language numbers is a claim that hasn't been tested.

**Related:** [Multilingual mistakes](/learn/multilingual-ai/multilingual-mistakes), [Multilingual datasets and benchmarks](/learn/multilingual-ai/multilingual-datasets-and-benchmarks), [Code-mixing and code-switching](/learn/multilingual-ai/code-mixing-and-code-switching)
