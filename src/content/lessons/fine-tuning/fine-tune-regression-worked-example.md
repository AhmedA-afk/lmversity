---
title: "Worked Example: A Fine-Tune That Fixed One Thing and Broke Three"
track: "fine-tuning"
status: live
summary: "A model fine-tuned for JSON output — walk through the eval that showed the win and the three regressions the single metric hid."
updated: "2026-09-16"
duration: "10 min read"
---

A fine-tune that improves the target metric while regressing everything else is the canonical outcome — and the eval that only measured the target is why it shipped. This example walks through one.

## The setup

A general assistant fine-tuned on 5,000 examples of structured JSON output. The goal: reliable function-call formatting. Post-training, the JSON-validity eval improves from 78% to 97%. Ship it.

## What the single metric hid

The eval only measured JSON validity. A broader post-training eval — run after the fact, as a postmortem — showed:

| Capability | Base | Tuned | Delta |
|---|---|---|---|
| JSON validity | 78% | 97% | +19 ✅ |
| Reasoning (GSM8K-style) | 84% | 71% | **−13** |
| General chat quality | 88% | 79% | **−9** |
| Instruction following | 91% | 83% | **−8** |

The training data was all-JSON — the model over-rotated toward "always emit JSON," and its general capability collapsed. The target metric was honest; the model's overall fitness wasn't.

## Why this is "catastrophic forgetting," not a bug

The 5,000 JSON examples weren't the wrong data — they were the *only* data. A model trained on a narrow distribution narrows. The fix isn't better data; it's a *mixed* dataset (JSON examples plus general-task examples to hold the base capability) or a regularization that keeps the base weights close.

## The fix and the honest eval

Retrain on a mixed dataset — 5,000 JSON examples + 3,000 general examples — and the post-training eval now shows JSON 94% (slightly lower than the narrow tune), with the general metrics within noise of base. The narrower target win is the price of not breaking the rest of the model.

## What the example teaches

- **The eval defines what "worked" means.** A metric that only measures the target can't detect forgetting — the eval is where the regression hides.
- **Narrow data narrows the model.** All-JSON training produces a JSON-only model; the general capability isn't lost to noise, it's trained out.
- **The honest eval is multi-dimensional.** Target metric + a held-out general-capability suite — the regression only shows if you measure it.

## The check

Before shipping a fine-tune: is the eval measuring just the target, or the model's overall fitness? A win on one axis that cost three others isn't a win — it's a trade you didn't know you made.

**Related:** [Fine-tuning mistakes](/learn/fine-tuning/fine-tuning-mistakes), [Fine-tuning pipeline project](/learn/fine-tuning/fine-tuning-pipeline-project), [Fine-tune vs prompt vs RAG](/learn/fine-tuning/fine-tune-vs-prompt-vs-rag)
