---
title: "Translate-then-LLM versus multilingual-native"
track: "multilingual-ai"
status: live
summary: "Choose between translating to English first, running a multilingual model directly, or a hybrid pivot — with the cost, quality, and latency trade-offs made explicit."
duration: "11 min read"
sources:
  - sarvam-api-docs
---

There are three working architectures for serving non-English users, and the choice is a system-design decision, not a model preference.

## Architecture 1: Translate → English pipeline → translate back

Run a translation step on input, do all reasoning in English on your strongest model, then translate the output back.

- **Strengths:** you get flagship-model reasoning quality; your prompts, tools, and evals stay in one language; works even when no multilingual model covers the target language well.
- **Costs:** two extra model calls (latency + money); translation errors compound — a mistranslated constraint stays mistranslated; culturally specific intent (honorifics, indirect requests) can survive translation in form but lose it in function.
- **Best for:** high-stakes reasoning tasks where the model's English advantage is large and translation fidelity is verifiable.

## Architecture 2: Multilingual-native

Send the user's language straight to a model that handles it.

- **Strengths:** one call, lowest latency; no information lost in a translation boundary; natural handling of code-mixed input the translator would have flattened.
- **Costs:** reasoning quality drops with resource level of the language; you now need evals in every supported language, not one.
- **Best for:** conversational, high-volume, latency-sensitive tasks — chat support, intake, classification — especially where users code-mix.

## Architecture 3: Hybrid pivot

Translate to a *pivot language* rather than English — or route per-task: translate for the hard reasoning step, stay native for everything else. Some teams pivot through Hindi for related Indic languages, or run specialist models (e.g. [Sarvam](/providers/sarvam)'s stack for Indian languages) for the language-heavy steps and a generalist for reasoning.

- **Best for:** systems where some steps need flagship reasoning and others need native-language fidelity.

## The decision rule

Ask, per user-facing step: *is the hard part the language or the reasoning?* Language-hard steps (understanding a code-mixed rant, generating natural Bengali) go native or specialist. Reasoning-hard steps (multi-constraint planning, precise extraction) go through your strongest model, with translation if needed. Systems that answer this per-step rather than per-product are both cheaper and better.

Whichever architecture you pick, measure both directions: input comprehension *and* output naturalness. A pipeline can read Hindi well and write stilted Hindi. The eval lesson covers both halves: [Designing multilingual evaluations](/learn/evals-red-teaming/multilingual-evaluation-design).

**Related:** [The multilingual model landscape](/learn/multilingual-ai/multilingual-model-landscape), [Code mixing and code-switching](/learn/multilingual-ai/code-mixing-and-code-switching), [Multilingual cost and latency](/learn/multilingual-ai/multilingual-cost-and-latency)
