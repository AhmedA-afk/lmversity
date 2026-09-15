---
title: "Lab: multilingual support assistant"
track: "multilingual-ai"
status: live
summary: "Build a support assistant that answers in the user's language — architecture choice, retrieval across languages, register matching, and a stratified eval set."
duration: "25 min read"
sources:
  - sarvam-api-docs
  - mteb-leaderboard
---

A support assistant is the honest capstone for multilingual engineering: real users, mixed registers, a knowledge base that probably isn't translated, and a business that will notice wrong answers. This lab walks the decisions in order.

## The scenario

Your company supports customers in English, Hindi, and Tamil. The knowledge base is English-only. Users code-mix freely. Budget is real but not unlimited.

## Step 1 — Pick the architecture per step

Apply the decision rule from [Translation vs multilingual-native](/learn/multilingual-ai/translation-vs-multilingual-native):

- **Understanding the query** → multilingual-native. Support messages are short, emotional, code-mixed — exactly what translation flattens.
- **Retrieval** → cross-lingual. The KB is English; queries aren't. Choose between a multilingual embedding index and query-translation based on a quick bake-off over your real query log.
- **Answer generation** → native, register-matched. The model must reply in the user's language *and mix* — instruct it explicitly and show one mixed-language exemplar in the prompt.
- **Escalation summary** → English, always. Internal tooling and agents work in English; translate only for the handoff record.

## Step 2 — Build the retrieval layer

Index the English KB with a multilingual embedding model (check per-language MTEB scores for Hindi and Tamil before committing). Add entity variants — product names appear in multiple scripts in real queries. For each retrieved chunk, carry source metadata so the answer can cite the original document.

## Step 3 — Write the response contract

The system prompt carries four multilingual obligations: answer in the user's language and register; preserve English product names and technical terms rather than translating them; hedge in the user's language, not in English-as-a-tell; and escalate with an English summary plus the original message. This is a behavior contract — draft it the way [Designing the AI behavior contract](/learn/ai-for-designers/designing-the-ai-behavior-contract) describes.

## Step 4 — Build the eval set before the demo

Fifty to a hundred real or realistic queries, stratified: clean Hindi, clean Tamil, clean English, code-mixed, romanized. For each, a reviewed expected answer or rubric. Score comprehension (did it find the right KB article?), fidelity (is the answer true to the source?), and register (does it read like the user wrote?). Use the harness approach from [Designing multilingual evaluations](/learn/evals-red-teaming/multilingual-evaluation-design) — per-language score cuts are the deliverable, not a single average.

## Step 5 — Instrument the cost

Log per-language token counts and cost from day one. If a language runs a heavy token multiplier, you'll see it in the first week — the modeling table from [Multilingual cost and latency](/learn/multilingual-ai/multilingual-cost-and-latency) tells you what the number means.

## What good looks like

The assistant answers a romanized Hinglish complaint with a natural Hinglish reply grounded in the English KB article, cites the source, escalates with a clean English summary when confidence drops, and costs a known amount per language per conversation. If your eval set agrees, ship it; if it disagrees with the demo, believe the eval set.

**Related:** [Translation vs multilingual-native](/learn/multilingual-ai/translation-vs-multilingual-native), [Cross-lingual retrieval](/learn/multilingual-ai/cross-lingual-retrieval), [Designing multilingual evaluations](/learn/evals-red-teaming/multilingual-evaluation-design)
