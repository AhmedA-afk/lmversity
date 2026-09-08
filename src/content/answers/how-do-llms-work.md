---
title: "How do LLMs work? Tokens, attention, and next-token prediction in plain words"
description: "LLMs work by breaking text into tokens, using attention to weigh how words relate, and repeatedly predicting the next token to generate a response."
intent: definition
updated: "2026-09-08"
featured: false
faq:
  - q: "What is a token in an LLM?"
    a: "A token is a chunk of text the model treats as one unit. It can be a whole word, part of a word, a punctuation mark, or a space, depending on the tokenizer. Text is converted into a sequence of tokens before the model processes it."
  - q: "What does attention actually do?"
    a: "Attention lets the model weigh, for each token, how relevant every other token in the input is to understanding it. It's how the model figures out that 'it' refers to a specific earlier noun, or that a word's meaning depends on distant context."
  - q: "Does the model plan the whole answer before writing it?"
    a: "No, not in the basic mechanism. A standard LLM generates one token at a time, each time looking at everything generated so far, including its own previous output, to decide the next token. Newer 'reasoning' models add extra steps that resemble planning, but the base mechanism is still sequential generation."
  - q: "Why does the same prompt sometimes get different answers?"
    a: "Because token generation involves sampling from a probability distribution over possible next tokens, not always picking the single most likely one. Settings that control this randomness mean the same prompt can produce different, still-plausible outputs on different runs."
related:
  - /learn/llm-foundations/tokenization-explained
  - /learn/llm-foundations/attention-mechanism-explained
  - /learn/llm-foundations/next-token-prediction
  - /learn/llm-foundations/the-transformer-architecture
  - /learn/llm-foundations/generating-a-sentence-token-by-token
  - /learn/llm-foundations
---

An LLM works by turning text into tokens, passing those tokens through a neural network (a transformer) that uses attention to weigh how each token relates to every other token, and then repeatedly predicting the single most probable next token, one at a time, feeding each new token back in to predict the one after it, until it produces a complete response.

## The short version

- Text is first split into tokens: word pieces, whole words, or punctuation, using an algorithm called a tokenizer.
- Each token is converted into a vector of numbers (an embedding) that captures something about its meaning and usage.
- Attention lets the model look at all the tokens in context at once and decide how much each one matters to interpreting every other one.
- The model outputs a probability distribution over its entire vocabulary for "what token comes next," then a token is selected from that distribution.
- The chosen token is appended to the sequence, and the whole process repeats to generate the next token, and the next, until the response ends.
- Nothing in this loop involves the model looking anything up; every word is generated from patterns learned during training.

## Step one: tokenization

Before a model can process text, the text has to become numbers. A tokenizer breaks input text into tokens, small chunks that might be a whole common word ("the"), part of a longer or rarer word ("token" + "ization"), or a single punctuation mark. Most modern LLMs use a subword tokenization method called byte-pair encoding (BPE) or a close variant, which balances vocabulary size against how many tokens a typical sentence needs. Each token is then mapped to a numeric ID and looked up in an embedding table, giving each token an initial vector representation. Our [Tokenization: How Text Becomes Tokens](/learn/llm-foundations/tokenization-explained) lesson walks through this with real examples, including the tokenization quirks (like why models sometimes miscount letters in a word) that trip people up.

## Step two: attention, in plain words

Once text is a sequence of vectors, the model needs a way to relate them to each other. This is what attention does: for every token, it computes how much "attention" to pay to every other token in the sequence when building that token's updated representation. Concretely, in the sentence "the trophy didn't fit in the suitcase because it was too big," attention is the mechanism that lets the model figure out whether "it" refers to the trophy or the suitcase, by weighing the relevance of each earlier word to the word "it."

This happens in parallel across many "heads" (multi-head attention), each potentially picking up on a different kind of relationship, grammatical, referential, or topical, and across many stacked layers, each refining the representation further. This is the core innovation of the transformer architecture, introduced in 2017, which replaced older architectures that processed text strictly left to right and struggled with long-range relationships. Our [Attention Mechanism, Explained](/learn/llm-foundations/attention-mechanism-explained) lesson covers the mechanics in more depth, including why this specific mechanism scales so well to long documents.

## Step three: next-token prediction

After the text has passed through the full stack of transformer layers, the model produces a score, called a logit, for every possible token in its vocabulary (often on the order of 100,000 possible tokens). These scores are converted into probabilities, and one token is selected, sometimes by always picking the highest-probability one, sometimes by sampling according to the probabilities with some controlled randomness, depending on the settings in use. That single token is added to the sequence, and the entire forward pass repeats with the new, longer sequence as input, to choose the next token. This repeats until the model produces an end-of-sequence signal or hits a length limit.

This is the entire generative mechanism: one token, then the next, then the next, each one conditioned on everything before it, including the model's own prior output. Our [Next-Token Prediction: The One Objective](/learn/llm-foundations/next-token-prediction) lesson and [Generating a Sentence Token by Token](/learn/llm-foundations/generating-a-sentence-token-by-token) walk through this loop concretely, tracing an actual example from prompt to finished sentence.

## Why this simple loop produces such capable behavior

It's genuinely surprising that "predict the next token, repeatedly" produces coherent essays, working code, and step-by-step reasoning. The short answer is that predicting text well, across a training set covering an enormous range of human writing, requires implicitly learning grammar, facts, argument structure, and problem-solving patterns, because all of those things shape what a plausible next word actually is. A model that's bad at reasoning will also be bad at predicting the next token in a passage of careful reasoning, so getting good at the narrow objective forces broader competence to emerge. This is also why LLMs can fail in ways that look surprising: the mechanism is fundamentally about plausibility, not verification, so a fluent, well-formed, wrong answer is entirely consistent with how the model works.

## Where LMVersity fits

This whole mechanism, tokenization, embeddings, attention, the transformer block, and the generation loop, is exactly what LMVersity's [LLM Foundations track](/learn/llm-foundations) covers, with worked examples that trace real numbers through each step rather than only describing it in prose. It's a deeper, more architectural companion to the higher-level [AI Foundations track](/learn/ai-foundations). Both are free and self-paced, with quizzes at the end of each section; there's no certificate.

## Go deeper

- [Tokenization: How Text Becomes Tokens](/learn/llm-foundations/tokenization-explained) — the first step in the pipeline, with real tokenizer output.
- [The Attention Mechanism, Explained](/learn/llm-foundations/attention-mechanism-explained) — the mechanism that lets tokens relate to each other.
- [The Transformer Architecture](/learn/llm-foundations/the-transformer-architecture) — how attention and feed-forward layers combine into a full model.
- [Next-Token Prediction: The One Objective](/learn/llm-foundations/next-token-prediction) — why this single training goal is the whole story.
- [Generating a Sentence Token by Token](/learn/llm-foundations/generating-a-sentence-token-by-token) — a full worked trace from prompt to output.
- [LLM Foundations track](/learn/llm-foundations) — the complete track this page draws from.
