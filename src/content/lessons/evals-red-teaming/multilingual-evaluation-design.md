---
title: "Designing multilingual evaluations"
track: "evals-red-teaming"
status: live
summary: "Why translating your English eval set doesn't produce a multilingual eval — and how to design per-language evaluation that catches what English benchmarks structurally miss."
duration: "9 min read"
---

## The assumption that breaks

Most multilingual "evaluation" is really translated evaluation: take the English test set, machine-translate it, score the model, report a number. It looks like coverage and measures something much narrower — whether the model handles *English-shaped content rendered in another script*.

What it misses is everything that makes a language a language rather than an encoding: register and honorifics, idioms that don't translate, code-mixing (the normal mode of speech in most of the world, not an edge case), script-specific tokenization, culturally specific entities, and dialect variation. A model can ace translated MMLU in Hindi and still produce awkward, English-flavored Hindi that a native speaker flags in seconds.

## What a real multilingual eval needs

**Native-content slices.** Build eval items *in* the target language from the start — real user queries, real documents — not translations of English items. The distribution matters more than the volume: fifty genuine Hindi support questions beat five hundred translated trivia items for telling you how the Hindi path behaves.

**Code-mixing as a category, not noise.** In Indic contexts, "Mera order kab aayega, status check karo" is the *common case*. Include deliberately code-mixed items and score them separately — a model that's fine on pure Hindi and broken on Hinglish will fail your actual users while passing your eval.

**Per-language scorecards, not averages.** "Multilingual score: 82" hides that one language is at 95 and another at 60. Report per language, and weight by your traffic, not by test-set size. An aggregate number across 20 languages is a marketing metric.

**Native-speaker review in the loop.** Automated metrics can't judge register, politeness, or cultural fit. For the languages that matter to your product, a recurring native-speaker review of sampled outputs is the floor — quantify what's quantifiable, but don't let automation stand in for judgment it can't make.

**The transfer question, asked explicitly.** When you cite an English benchmark for a multilingual feature, say so: "score on translated benchmark" vs "score on native-language set" are different claims. The honest report shows both and explains the gap — the gap *is* the finding.

## Failure modes to specifically probe

- **Language detection first.** A model that answers a Hindi question in fluent English has failed before it started — measure response-language correctness separately from answer quality.
- **Script integrity.** Devanagari conjuncts, Tamil ligatures, Urdu Nastaliq — output that breaks script rendering is wrong even when the words are right. Include render checks for the scripts you support.
- **Translationese detection.** Fluent but translated-sounding output — restructured clauses, English idiom shapes, wrong register. This is what native review catches and BLEU-style metrics don't.
- **Safety coverage asymmetry.** Moderation tuned on English misses slurs, euphemisms, and adversarial phrasing in other languages — often dramatically. Probe the moderation layer per language, not just the generation.

## Go deeper

- [Building evaluation sets that mirror production](/learn/evals-red-teaming/datasets-rubrics-and-judges) — the general dataset-design discipline this applies.
- [Regression gates and live signals](/learn/evals-red-teaming/regression-gates-and-online-signals) — wiring per-language scores into release gates.
- [Sarvam](/providers/sarvam) and [AI4Bharat](/providers/ai4bharat) — Indic-trained models and the open benchmark corpora to evaluate against.
