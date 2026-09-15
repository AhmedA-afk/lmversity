---
title: "Project: A Fine-Tuning Pipeline — Dataset, Training, Evaluation, Registration"
track: "fine-tuning"
status: live
summary: "Build the pipeline, not the notebook — versioned data with decontamination, a reproducible training run, an eval gate, and a model registry entry that explains itself."
duration: "25 min read"
---

A fine-tune in a notebook is a demo. A pipeline is: dataset version in, trained artifact out, with decontamination before training and an eval gate before the artifact is registered. This project builds that pipeline so the resulting model is something you could actually ship — or confidently not ship.

## The brief

Build an end-to-end fine-tuning pipeline for a narrow task (a format, a tone, a domain extraction — pick one): dataset construction with versioning and decontamination, a training run with recorded hyperparameters and seed, an evaluation step that compares the tuned model against the base model on a held-out set, and a registry entry recording lineage — data version, base model, config, eval result, and the decision.

## Prerequisites

- [Building a fine-tuning dataset](/learn/fine-tuning/building-a-fine-tuning-dataset) — the data stage
- [Dataset decontamination and deduplication](/learn/fine-tuning/dataset-decontamination-and-deduplication) — the gate before training
- [LoRA and QLoRA fine-tuning](/learn/fine-tuning/lora-and-qlora-fine-tuning) — the tractable training path
- [Evaluating a fine-tuned model](/learn/fine-tuning/evaluating-a-fine-tuned-model) — the gate after training

## Supplied assets and mock mode

The pipeline is testable without a GPU: the "training run" can be a small LoRA job on a tiny model, a managed fine-tuning API, or a scripted stage that produces an artifact and logs — the pipeline's correctness (versioning, gating, lineage) is what's under test. A CPU-runnable path must exist so the whole pipeline runs clean in CI.

## Acceptance criteria

- [ ] The dataset is a versioned artifact — content-addressed or version-tagged, with a decontamination report showing what was removed and why (overlap with the eval set must be zero, proven)
- [ ] The training run records its full config — base model, hyperparameters, seed, data version — such that a rerun is reproducible in principle
- [ ] The eval gate compares tuned vs base on a held-out set — the report shows per-item results, not just an aggregate, and the gate has an explicit ship/no-ship threshold
- [ ] The registry entry links artifact → data version → config → eval report → decision — lineage you can audit later
- [ ] A failed gate blocks registration — a test run with a deliberately degraded model cannot register
- [ ] The pipeline reruns end to end from a script — no manual notebook cells, no state that only exists in memory

## Failure injection (required)

- [ ] Contaminate the dataset with an eval item — decontamination must catch and remove it, with the catch logged
- [ ] A training run that produces a worse model — the eval gate fails it, the registry records the rejection with the eval report attached
- [ ] A pipeline step that dies mid-run — rerunning resumes or restarts cleanly; no half-registered artifacts

## Milestones

1. **Dataset v1** — versioned, decontaminated, with the removal report.
2. **The training stage** — config recorded, artifact produced, seed logged.
3. **The eval gate** — tuned-vs-base comparison with the ship threshold.
4. **The registry** — lineage record with the decision.
5. **The full rerun** — one command, dataset to registry, twice — proving reproducibility.

## What good looks like

Six months later, someone asks "what is this model" and the registry entry answers: trained on data v3, base model X, config hash Y, passed eval at threshold Z on date D — or was rejected, and here's why. The pipeline's output is an auditable decision, not just a checkpoint.

## For your portfolio

Show the lineage record — the registry entry connecting artifact to data version to eval report — and one rejected run it prevented. That pair demonstrates the discipline that distinguishes a pipeline from a notebook.

## Defend this build

1. A model regressed on the eval gate — reconstruct what shipped instead and why the gate's verdict was right.
2. An eval item leaked into training data — where would your pipeline catch it, and what if it didn't?
3. Your dataset v2 differs from v1 — what does the registry say about models trained on each?
4. What can't your pipeline prove about a model — and where's the honest limit?

The pass bar: answers trace the lineage chain — data → config → eval → registry — rather than describing training in the abstract.

**Related:** [Dataset decontamination and deduplication](/learn/fine-tuning/dataset-decontamination-and-deduplication), [Evaluating a fine-tuned model](/learn/fine-tuning/evaluating-a-fine-tuned-model), [Catastrophic forgetting and overfitting](/learn/fine-tuning/catastrophic-forgetting-and-overfitting), [Choosing managed vs self-hosted fine-tuning](/learn/fine-tuning/choosing-managed-vs-self-hosted-fine-tuning)
