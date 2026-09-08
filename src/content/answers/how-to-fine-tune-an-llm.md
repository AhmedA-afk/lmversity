---
title: "How to fine-tune an LLM: when to, and the steps that matter"
description: "How to fine-tune an LLM: decide if you actually need it, build a clean dataset, pick LoRA or full fine-tuning, then evaluate before and after shipping."
intent: howto
updated: "2026-09-08"
featured: true
faq:
  - q: "Is fine-tuning better than prompting?"
    a: "Not usually as a first move. Prompting and few-shot examples are cheaper to test and iterate, and often close most of the gap. Fine-tune once you have a stable task, a failure pattern prompting cannot fix, and enough labeled examples to train on."
  - q: "How much data do I need to fine-tune an LLM?"
    a: "It depends on the task and method. LoRA and QLoRA can show useful gains with a few hundred to a few thousand well-curated examples for narrow tasks; full fine-tuning and broader behavior changes usually need more. Quality and consistency of labels matter more than raw count."
  - q: "What is the difference between LoRA and full fine-tuning?"
    a: "Full fine-tuning updates all of a model's weights and needs the most compute and memory. LoRA and QLoRA freeze the base model and train small added adapter weights, which is far cheaper and easier to serve, at some cost to how much the model's behavior can change."
  - q: "Can I fine-tune a closed model like GPT or Claude?"
    a: "Some providers offer managed fine-tuning APIs for specific models. Availability, supported base models, and pricing change often, so check the current provider documentation rather than assuming a given model supports it."
  - q: "Do I need a GPU to fine-tune an LLM?"
    a: "For anything beyond a very small model, yes, or a cloud instance with one. QLoRA reduces memory needs enough to fine-tune moderately sized open models on a single consumer or cloud GPU, but full fine-tuning of larger models needs multiple high-memory GPUs."
related:
  - /learn/fine-tuning
  - /learn/fine-tuning/fine-tune-vs-prompt-vs-rag
  - /learn/fine-tuning/lora-and-qlora-fine-tuning
  - /learn/fine-tuning/building-a-fine-tuning-dataset
  - /learn/fine-tuning/evaluating-a-fine-tuned-model
  - /guides/rag-fine-tuning-or-a-longer-prompt
---

Fine-tuning an LLM means updating a pretrained model's weights, either fully or through a small adapter like LoRA, on your own labeled examples so it does a narrow task more reliably or in a specific style. Before you touch a training script, check whether a better prompt, examples, or retrieval already close the gap, because most tasks do not need fine-tuning at all.

## The short version

- Decide first: try prompting, few-shot examples, and RAG before fine-tuning. Fine-tune only for a stable, narrow task with a failure mode prompting cannot fix.
- Build a clean, deduplicated dataset in the exact input and output format you will serve. A few hundred to a few thousand good examples often beats a huge, messy set.
- Choose the method by budget. LoRA or QLoRA suits most teams: cheap, fast, and easy to swap adapters. Full fine-tuning is for changing behavior LoRA cannot reach.
- Evaluate before you start, by scoring the un-tuned model on your eval set, and evaluate again after, on held-out data the model never saw in training.
- Decide how you will serve the result, whether a merged model, a loaded adapter, or a managed endpoint, before you pick a training framework.
- Check current provider and library docs for exact commands, parameter names, and pricing. APIs and defaults change often enough that a guide can go stale within months.

## Decide if you need to fine-tune at all

Fine-tuning, prompting, and RAG solve different problems, and picking the wrong one wastes weeks. A longer or better-structured prompt fixes formatting and instruction-following issues. RAG fixes a knowledge gap: the model doesn't know something because it isn't in its training data, or the information is time-sensitive. Fine-tuning fixes a behavior or style gap that many examples teach better than any instruction can describe: a very specific output format, a domain vocabulary the model doesn't use naturally, or a task where you have thousands of labeled examples of exactly what "correct" looks like.

If you haven't tried a carefully written prompt with a handful of examples first, do that before reaching for training infrastructure. The decision is worth writing down explicitly rather than assuming: what specific failure are you trying to fix, and would more context or better instructions fix it as well as retraining would.

## Building a dataset that actually helps

The dataset is where most fine-tuning projects succeed or fail, more than the choice of method. A few things matter more than volume:

- **Match production format exactly.** If the model will see a certain input structure and produce a certain output structure in production, your training examples should look identical, down to the chat template or instruction format the base model expects.
- **Deduplicate and remove near-duplicates.** Repeated or near-identical examples waste training steps and can overweight one pattern.
- **Balance the cases you care about.** If certain edge cases matter in production, make sure they appear in training, not just the easy majority case.
- **Hold out a real test set.** Split into train, validation, and a test set that never touches training or hyperparameter tuning, so your final evaluation number means something.

A few hundred carefully checked examples, each verified by a human who understands the task, is usually worth more than tens of thousands of scraped or auto-generated ones.

## Choosing a method: LoRA, QLoRA, or full fine-tuning

Full fine-tuning updates every weight in the model. It is the most expressive option and the most expensive: it needs the most GPU memory and compute, and it carries a real risk of catastrophic forgetting, where the model gets better at your task and quietly worse at everything else.

LoRA (Low-Rank Adaptation) freezes the base model's weights entirely and instead trains a small set of additional low-rank matrices injected into specific layers, typically the attention projections. This is far cheaper to train, produces a small adapter file you can load, unload, or swap between tasks, and is the default choice for most teams. QLoRA adds quantization: the frozen base model is loaded in a lower-precision format to cut memory use further, which is what makes it possible to fine-tune a moderately sized open model on a single GPU.

Hugging Face's PEFT library is the common way to apply LoRA in practice. The shape of the code is roughly:

```python
from peft import LoraConfig, get_peft_model

config = LoraConfig(
    r=8,
    lora_alpha=16,
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM",
)
model = get_peft_model(base_model, config)
```

Treat this as illustrative rather than copy-paste ready. Parameter names, defaults, and supported target modules vary by model architecture and library version, so check huggingface.co/docs/peft for the current API before running it.

Separately from LoRA versus full fine-tuning, there's a second axis: supervised fine-tuning (SFT) teaches the model from input-output pairs, while preference tuning methods like DPO, ORPO, or KTO teach it from comparisons between a better and a worse response. Most projects start with SFT; preference tuning is for shaping tone, safety, or subjective quality once you have comparison data.

## Evaluate before and after

Score the un-tuned base model on your evaluation set first. Without that baseline, you cannot tell whether fine-tuning actually helped or whether you'd have gotten the same lift from a better prompt. After training, evaluate on the held-out test split using the same metrics, and check two things separately: did the target task improve, and did anything else get worse. Catastrophic forgetting is easy to miss if you only measure the metric you were optimizing for.

Hyperparameters (learning rate, number of epochs, batch size, LoRA rank) genuinely change outcomes, but reasonable starting values differ by base model and library, so this is another area to check current documentation and examples for the specific setup you're using rather than assuming a fixed number will transfer.

## Serving the fine-tuned model

Decide this before you start training, because it affects the method you pick. A LoRA adapter can be kept separate from the base model and loaded at inference time, which lets you run several task-specific adapters against one base model and swap between them cheaply. It can also be merged into the base weights to produce a single standalone model, which simplifies serving at the cost of that flexibility. If you're using a provider's managed fine-tuning API rather than self-hosting, serving is usually handled for you, but check the current documentation for which base models are supported and how the resulting model is priced and called, since these details change.

## When fine-tuning is the wrong move

Skip it if your requirements change frequently, since retraining on every change is slower than editing a prompt. Skip it if the gap is a knowledge gap rather than a behavior gap; RAG is the better tool for facts that change or that weren't in training data. And skip it if you don't yet have enough clean, labeled examples of correct behavior; collecting them is worth doing before you touch a training script, not instead of it.

## Where LMVersity fits

LMVersity's free Fine-tuning & Optimization track covers this decision and every step after it: picking a base model, choosing a training framework, LoRA and QLoRA mechanics, building a fine-tuning dataset, setting hyperparameters, and evaluating a fine-tuned model before you ship it. It's free, self-paced, and has no certificate.

## Go deeper

- [/learn/fine-tuning](/learn/fine-tuning) — the fine-tuning track overview
- [/learn/fine-tuning/fine-tune-vs-prompt-vs-rag](/learn/fine-tuning/fine-tune-vs-prompt-vs-rag) — the decision framework in full
- [/learn/fine-tuning/building-a-fine-tuning-dataset](/learn/fine-tuning/building-a-fine-tuning-dataset) — dataset construction in detail
- [/learn/fine-tuning/lora-and-qlora-fine-tuning](/learn/fine-tuning/lora-and-qlora-fine-tuning) — the current default method, worked through
- [/learn/fine-tuning/full-fine-tuning-vs-peft](/learn/fine-tuning/full-fine-tuning-vs-peft) — when full fine-tuning is actually worth the cost
- [/learn/fine-tuning/evaluating-a-fine-tuned-model](/learn/fine-tuning/evaluating-a-fine-tuned-model) — evaluation before you ship
- [/learn/fine-tuning/choosing-managed-vs-self-hosted-fine-tuning](/learn/fine-tuning/choosing-managed-vs-self-hosted-fine-tuning) — the serving decision
- [/guides/rag-fine-tuning-or-a-longer-prompt](/guides/rag-fine-tuning-or-a-longer-prompt) — the same decision, as a hands-on guide
