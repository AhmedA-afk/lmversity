---
title: "Code mixing and code-switching"
track: "multilingual-ai"
status: live
summary: "Handle users who blend languages mid-sentence — detection, pipeline behavior, and why mixed input breaks assumptions built for monolingual text."
duration: "10 min read"
sources:
  - sarvam-api-docs
---

Real multilingual users do not stay inside one language. A Hindi-English speaker writes *"mujhe kal tak ye report chahiye but the data isn't ready"* — Hindi grammar carrying an English clause — and expects to be understood. This is code-mixing, and in many markets it is the majority register, not the edge case.

## Why mixed input breaks naive pipelines

- **Language detection fails.** Most detectors return a single label; mixed input gets classified by whichever language dominates the character count, which is often the wrong one. If your router uses detection to pick a model or translation path, it will misroute exactly the messages your most fluent bilingual users send.
- **Translators flatten.** Asked to translate code-mixed input, translation systems often normalize to one language — losing the register signal that told you this user is comfortable in English technical vocabulary.
- **Script is not language.** Romanized Hindi (*"kya haal hai"*) is Hindi in Latin script. Script-based routing reads it as English. Decide explicitly whether your pipeline treats romanized input as the source language (it should).

## What actually works

**Route on capability, not detection.** Instead of asking "what language is this," ask "which component handles this best." For code-mixed input, a multilingual-native model almost always beats a detect-then-translate path — it reads the mix the way the user wrote it, because mixed text is common in its training data.

**Preserve the mix in output.** Users who write Hinglish generally want Hinglish back — fully-Hindi responses read as stiff, fully-English ones as dismissive. If your system prompt says "respond in the user's language," make it "respond in the user's language *and register*, including code-mixing" and show the model a mixed-language example.

**Test with real mixed data.** Synthetic test sets over-represent clean monolingual text. Collect actual user messages (with consent and privacy review), and build the mixed-language slice of your eval set deliberately — proportions should match your traffic, not your intuitions.

## Detection still has a job

Keep language detection for analytics, routing *fallbacks*, and downstream tooling that genuinely needs one label (spell-checkers, language-specific templates). Just stop using it as the single gate for model selection — make the model choice tolerant of "it's both."

**Related:** [Translate-then-LLM versus multilingual-native](/learn/multilingual-ai/translation-vs-multilingual-native), [Designing multilingual evaluations](/learn/evals-red-teaming/multilingual-evaluation-design), [Building for Indic scripts and segmentation](/learn/genai-app-dev/building-for-indic-scripts-and-segmentation)
