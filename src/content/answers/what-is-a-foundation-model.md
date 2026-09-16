---
title: "What is a foundation model?"
description: "A foundation model is a large model trained once on broad data and adapted to many different tasks — the layer applications like chatbots and agents are built on top of."
intent: definition
updated: "2026-09-16"
featured: true
faq:
  - q: "Is a foundation model the same as an LLM?"
    a: "Not exactly. An LLM is defined by what it works on — language. A foundation model is defined by how it is used — trained once on broad data, then adapted to many tasks. Most LLMs are foundation models, but the term also covers vision and multimodal models trained the same way, and it says nothing about architecture."
  - q: "Where does the term come from?"
    a: "A 2021 Stanford paper coined it, and it is literal: the model is a foundation you build on, not the finished product. GPT-4, Claude, and Gemini are foundation models; a support bot or code-review tool built on one is an application on the foundation, not a new foundation model."
  - q: "Are foundation models always huge?"
    a: "No — 'foundation' describes training scope, not size. Some foundation models are small enough to run on a laptop. Size and generality are related, but they are not the same axis."
  - q: "What is the catch with using one?"
    a: "Generality is not free. Broad internet-scale training inherits the biases, gaps, and errors in that data, and broad competence is shallow in places a narrow, task-trained model would not be. Choosing a model means choosing how much of the foundation's general capability transfers to your problem — and how much adaptation you will need to close the gap."
related:
  - /learn/ai-foundations/foundation-models-explained
  - /learn/ai-foundations/self-supervised-learning
  - /learn/ai-foundations/training-vs-inference
  - /learn/ai-foundations/what-llms-can-and-cannot-do
  - /answers/what-is-a-large-language-model
  - /answers/llm-vs-generative-ai
---

A foundation model is a large model trained once on broad, mostly unlabeled data and then adapted — with a prompt, some fine-tuning, or nothing at all — to dozens of tasks nobody explicitly trained it for.

## The short version

- The old pattern: one labeled dataset, one model, one task. Want translation *and* sentiment analysis? Train two models from scratch.
- The new pattern: one expensive training run on broad data, then cheap adaptation — prompting, retrieval, or a small fine-tune — per task.
- The term comes from a 2021 Stanford paper and is literal: the model is a foundation you build *on*. GPT-4, Claude, and Gemini are foundation models; the chatbot or code-review tool built on one is an application, not a foundation.
- "Foundation" describes training scope, not size — some are small enough to run on a laptop.

## Why it replaced the old approach

Economics. The expensive part — the massive training run — happens once, and adaptation is cheap by comparison. A team building a legal-document classifier no longer collects millions of labeled contracts and trains from zero; they start from a model that already has a working grasp of language and nudge it. That is also why one underlying model can power a chatbot, a coding assistant, and an agent that books flights: the foundation doesn't change, only what sits on top.

The tradeoff is that generality is shallow in places. Broad training inherits the biases and gaps of broad data, and the model can confidently produce wrong answers in domains it was poorly covered on — which is why picking a model is really choosing how much of its general capability transfers to your specific task.

## Where to go deeper

The shift in full: [Foundation Models, Explained](/learn/ai-foundations/foundation-models-explained). How the training actually works without labels: [Self-Supervised Learning](/learn/ai-foundations/self-supervised-learning).
