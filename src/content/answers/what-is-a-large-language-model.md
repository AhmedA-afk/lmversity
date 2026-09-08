---
title: "What is a large language model (LLM)?"
description: "A large language model, or LLM, is a neural network trained on huge amounts of text to predict the next word, letting it write, summarize, and answer questions."
intent: definition
updated: "2026-09-08"
featured: false
faq:
  - q: "Is ChatGPT a large language model?"
    a: "ChatGPT is a product built around a large language model. The LLM is the underlying model that generates text; ChatGPT adds the chat interface, memory, and other product features around it."
  - q: "Do LLMs understand what they're saying?"
    a: "This is disputed and depends on what you mean by understand. LLMs build statistical representations of language that let them use words in contextually appropriate ways, but whether that constitutes understanding in a human sense is a genuinely open question, not a settled fact."
  - q: "Why do LLMs make things up?"
    a: "Because they're trained to produce plausible-sounding continuations of text, not to only state verified facts. When a model doesn't have the right information, it can still generate a fluent, confident-sounding answer that's wrong, a failure mode usually called hallucination."
  - q: "How big does a model have to be to count as large?"
    a: "There's no fixed cutoff. The term became common once models grew from millions to billions of parameters, and it now generally refers to models near or above that scale that were pretrained on broad, general text."
related:
  - /learn/llm-foundations
  - /learn/llm-foundations/quick-guide
  - /learn/ai-foundations/how-llms-work
  - /learn/ai-foundations/foundation-models-explained
  - /learn/ai-foundations/why-llms-hallucinate
  - /learn/ai-foundations/what-llms-can-and-cannot-do
---

A large language model (LLM) is a neural network, usually a transformer, trained on huge amounts of text to predict the next word (technically, the next token) in a sequence. That single skill, repeated at massive scale, turns out to be enough to write essays, answer questions, translate, summarize, and hold conversations, because language itself encodes a huge amount of the knowledge and reasoning patterns the model absorbs during training.

## The short version

- An LLM is trained on very large text datasets, often a substantial fraction of publicly available text, code, and other written material.
- The core training objective is deceptively simple: given some text, predict what word comes next. This is called next-token prediction.
- "Large" refers to the number of parameters, the internal numbers the network adjusts during training, which for current LLMs range from millions into the hundreds of billions.
- LLMs don't look anything up when they answer; they generate a response token by token based on patterns learned during training.
- The same underlying model can be adapted for chat, coding, following instructions, or other uses through further training steps after the initial pretraining.
- LLMs can be confidently wrong. Fluent output is not the same as verified output.

## What "large" and "language model" each mean

A **language model**, in the general sense, is any system that assigns probabilities to sequences of words, or predicts the next word given previous ones. This idea predates deep learning by decades; simple statistical language models existed in the 1990s and were used for things like autocomplete and spell-check.

**Large** refers to scale on two axes: the size of the training data (often measured in trillions of tokens, drawn from web text, books, code, and other sources) and the size of the model itself (its parameter count, the tunable numbers inside the neural network that get adjusted during training). Modern LLMs are also almost always **transformers**, a specific neural network architecture introduced in 2017 that processes all the words in a passage at once, using a mechanism called attention to weigh how relevant each word is to every other word.

Put together: an LLM is a transformer-based neural network, trained on a very large text corpus, whose core skill is predicting what comes next in a sequence of tokens.

## How the training actually works, briefly

Training happens in stages. **Pretraining** exposes the model to enormous amounts of raw text and trains it purely on next-token prediction: given "the cat sat on the," predict "mat." Repeated across trillions of tokens, this forces the model to build internal representations of grammar, facts, reasoning patterns, and style, since all of that helps predict text more accurately. Pretraining is expensive and typically done once by the organization that builds the model.

After pretraining, most LLMs go through further steps: **instruction tuning**, so the model responds to a request instead of just continuing a sentence, and often **reinforcement learning from human feedback (RLHF)**, so the model's responses are steered toward being more helpful and less harmful. Our [Pretraining vs. Fine-Tuning](/learn/ai-foundations/pretraining-vs-finetuning) lesson covers this distinction with worked examples, and our [Training vs. Inference](/learn/ai-foundations/training-vs-inference) lesson covers what happens after training is done, when the model is actually being used to answer a question.

## What this means in practice

Because an LLM's core operation is prediction based on patterns in training data, not lookup from a verified database, it has characteristic strengths and characteristic failure modes:

**Strengths**: fluent language generation, flexible handling of instructions phrased in many different ways, transferable skill across tasks it wasn't explicitly trained for (summarizing, translating, writing code, reformatting data), and the ability to follow examples given in the prompt itself.

**Failure modes**: it can generate a fluent, confident, and entirely wrong answer, a behavior usually called hallucination, because nothing in the next-token objective forces the model to say "I don't know" when it should. It also has no built-in way to access information created after its training data was collected, or information that was never in its training data, like a private company's internal documents, unless that information is provided to it directly in the prompt. This is the core motivation behind retrieval-augmented generation, which supplies an LLM with relevant external text at answer time instead of relying only on what it memorized during training; see LMVersity's [RAG track](/learn/rag) for how that works.

## How "LLM" relates to nearby terms

A few labels get used loosely alongside LLM, and it's worth keeping them separate. A **foundation model** is a broader term for any large model pretrained on broad data and then adapted to many downstream tasks; most current LLMs are foundation models, but the term also covers large models for images, audio, and other modalities that aren't language models at all. A **chatbot** is a product built around a model, historically often rule-based with no learning involved, and today usually built around an LLM; the chatbot is the interface, the LLM is what generates the responses inside it. **Generative AI** is the umbrella category for any model that produces new content rather than classifying existing content; an LLM is the text-generating branch of that category, alongside separate branches for image, audio, and video generation.

Getting these distinctions right matters in an interview or design-review setting, where "the model hallucinated" and "the chatbot has a bug" point at very different parts of a system, and mixing them up makes it harder to reason about where a fix actually belongs.

## Where LMVersity fits

LMVersity's [LLM Foundations track](/learn/llm-foundations) goes inside the model itself: tokenization, attention, positional encoding, the feed-forward layers, and how a model actually turns logits into a chosen next word. The [AI Foundations track](/learn/ai-foundations) covers the surrounding concepts, including why models hallucinate and what they genuinely can and can't do, before you get into the architecture. Both are free, self-paced, with lessons, worked examples, and quizzes, and carry no certificate or accreditation.

## Go deeper

- [LLM Foundations track](/learn/llm-foundations) — the full track on how an LLM works internally.
- [LLM Foundations in 9 minutes](/learn/llm-foundations/quick-guide) — a fast overview before the deep dive.
- [How LLMs Actually Work](/learn/ai-foundations/how-llms-work) — a gentler, less architecture-heavy explanation.
- [A Mental Model for What LLMs Can and Can't Do](/learn/ai-foundations/what-llms-can-and-cannot-do) — the practical limits, stated plainly.
- [Why LLMs Hallucinate](/learn/ai-foundations/why-llms-hallucinate) — the mechanism behind confident wrong answers.
- [Foundation Models, Explained](/learn/ai-foundations/foundation-models-explained) — how LLMs relate to the broader category of large pretrained models.
