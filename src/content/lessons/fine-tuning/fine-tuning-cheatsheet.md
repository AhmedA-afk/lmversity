---
title: "Fine-Tuning Cheatsheet"
track: "fine-tuning"
status: live
summary: "The fine-tuning decision table — when to tune at all, which method fits, and the pipeline checks that keep the artifact auditable."
duration: "6 min read"
---

The fine-tuning track compressed to the decisions that matter — whether to tune at all, which method, and the lineage that makes the artifact trustworthy.

## Should you fine-tune at all?

| The problem is… | Reach for… | Fine-tune when… |
|---|---|---|
| The model lacks the knowledge | RAG | The knowledge is private and stable enough to bake in |
| The output format is wrong | Prompting / structured output | Prompting can't hold the format reliably at scale |
| The task is narrow and repeated | Fine-tuning | Volume justifies the pipeline cost |
| The model is close but not reliable | Better eval + prompting | The eval shows prompt fixes won't close the gap |
| A style or persona is needed | System prompt | The prompt can't hold it consistently |

## Which method, one line each

- **Full fine-tune** — updates all weights; maximum capacity, maximum cost and forgetting risk.
- **LoRA / QLoRA** — trains a small adapter; the tractable default — most fine-tuning is this.
- **DPO / ORPO / KTO** — preference tuning; for "prefer this output over that" training, not format.
- **Distillation** — a small model trained on a big one's outputs; for cost, not capability.

## The pipeline stages, in order

1. **Dataset** — versioned, audited, decontaminated; the eval set provably disjoint.
2. **Training** — config recorded: base checkpoint, hyperparameters, seed, data version.
3. **Eval** — tuned vs base on a held-out set, per-item not just aggregate, with a ship threshold.
4. **Registration** — the lineage record: artifact → data → config → eval → decision.

## The silent failures to check

- **Eval leakage** — a train item in the eval set; the score is memorization.
- **Catastrophic forgetting** — the target task improved, general capability collapsed; eval both.
- **Dataset teaching the bug** — the examples contain the failure you're removing.
- **Unpinned base** — the adapter merged onto a base that isn't the one you trained on.
- **Selection on the reported set** — the eval that picked the checkpoint isn't a held-out score.

## The knobs that matter most

- **Learning rate** — sweep it; the default was chosen for a different problem.
- **LoRA rank** — a capacity knob; too low can't express the change, too high overfits.
- **Epochs** — more isn't better; watch for the val gap opening.
- **Dataset size** — fifty clean examples beat five thousand with the bug in them.

**Related:** [Fine-tuning mistakes](/learn/fine-tuning/fine-tuning-mistakes), [Fine-tuning pipeline project](/learn/fine-tuning/fine-tuning-pipeline-project), [Fine-tuning practice](/practice/fine-tuning), [Fine-tune vs prompt vs RAG](/learn/fine-tuning/fine-tune-vs-prompt-vs-rag)
