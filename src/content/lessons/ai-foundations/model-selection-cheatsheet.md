---
title: "AI Foundations Cheatsheet"
track: "ai-foundations"
status: live
summary: "The vocabulary and decision table for the whole foundations track — model types, eval signals, and which concept applies where."
duration: "6 min read"
---

The whole foundations track compressed to the decisions and terms you'll actually reach for. Details live in the linked lessons — this is the card you keep open.

## Which model property am I looking at?

| You see… | The concept is… | The question to ask |
|---|---|---|
| Output improves with more data/compute | Scaling laws | Is the gain from scale or from a better method? |
| Model knows facts not in the prompt | Parametric knowledge | Is it recall or is it confabulated? |
| Same input, different output each call | Sampling temperature | What does temperature actually change? |
| Output stops mid-thought | Context window / max tokens | Was the budget or the model the limit? |
| Model "remembers" earlier chat | Context, not memory | Is it in the window, or did it persist? |

## The four confusions to never make

- **Training ≠ inference.** Training updates weights; inference uses them. A prompt can't "teach" the model — it only changes this request's context.
- **Parameters ≠ tokens.** Parameters are the learned weights (fixed at train time); tokens are the units of input/output at runtime. A 7B model has weights, not a 7B-token memory.
- **Knowledge ≠ reasoning.** A model can know the fact and still fail the multi-step problem — recall and composition are different capabilities.
- **Confidence ≠ correctness.** Fluent, hedged, and wrong is a common combination; the writing style is not evidence.

## Eval vocabulary in one line each

- **Benchmark** — a fixed test set; measures what it measures, no more.
- **Golden set** — your own labeled examples; the eval that knows your task.
- **Contamination** — eval items the model saw in training; invalidates the score.
- **Calibration** — whether stated confidence matches actual accuracy; self-reported confidence is not this.
- **Per-slice result** — the score on a subset; the average hides the slices that fail.

## Which lesson for which question

- "How does it generate text?" → [How LLMs work](/learn/ai-foundations/how-llms-work-end-to-end-example)
- "Why is it confidently wrong?" → [Why LLMs hallucinate](/learn/ai-foundations/why-llms-hallucinate)
- "When is a smaller model enough?" → [Choosing a model](/learn/ai-foundations/choosing-a-model)
- "What do embeddings do?" → [What embeddings are](/learn/ai-foundations/what-embeddings-are)
- "How do I test it?" → [Building an eval set](/learn/ai-foundations/building-an-eval-set-worked-example)

**Related:** [Evaluation and model-claim mistakes](/learn/ai-foundations/eval-and-model-mistakes), [AI foundations practice](/practice/ai-foundations)
