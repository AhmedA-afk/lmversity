---
title: "Lab: read a model card like an engineer"
track: "llm-foundations"
status: live
summary: "Practice reading a real model card for the fields that decide fitness — intended use, training data, evaluations, and limitations — and for what the card declines to say."
duration: "15 min read"
---

## The short answer

A model card is a datasheet, not marketing. In this lab you take a real card, extract the fields that decide whether the model fits your use, and list what the card does not tell you — the missing fields are often the decision-relevant part.

## Why this matters

Teams pick models from benchmark screenshots and discover the fine print later: the evaluation was English-only, the license forbids the intended use, the "tested" scenario is nothing like production. Thirty minutes with the card up front is cheaper.

## The exercise

Pick one real model card — the kind attached to a model repository page — and answer each field in writing:

**1. Intended use.** What did the authors say it is *for*, and what did they say it is *not* for? The out-of-scope section is the most skipped and most important part. If your use case is not clearly inside the stated scope, that is a flag, not a detail.

**2. Training data.** What does the card actually claim about the data — sources, dates, filtering, languages, licenses? "A large corpus of text" is a non-answer; notice when the card gives one. Check the knowledge cutoff against anything time-sensitive you need.

**3. Evaluations.** Which benchmarks appear, on which languages and task types? Look for the eval closest to *your* task, not the highest number. Then look for what is absent: no multilingual eval, no safety eval, no eval on long contexts — the omissions define the untested territory you would be deploying into.

**4. Limitations and risks.** Every card has this section; its specificity varies from honest enumeration to boilerplate. Note any limitation that maps to your use case — hallucination on facts, bias in a domain, weak performance in a language your users speak.

**5. License and usage terms.** What does the license permit — commercial use, derivatives, distillation? This is a legal question, and the card is where the answer usually starts. If it is ambiguous, that ambiguity is itself a finding.

## What to deliver

A half-page summary: the model, your use case, the three fields that fit, the gaps you found, and the question you would still need to answer by testing. The skill being trained is reading *critically* — treating each section as a claim with a confidence level, not as a spec sheet.

## The checkpoint

You can tell, for a new model, which card fields decide your adoption and which are decorative — and you can name what the card doesn't tell you. A card that answers everything except your scenario is a prompt to run your own eval, not a reason to trust or to walk away.

## Go deeper

- [Reading a real model's config and counting its parameters](/learn/llm-foundations/reading-a-real-model-config) — the card's sibling: the machine-readable config.
- [Base, instruct, chat, and reasoning model families](/learn/llm-foundations/base-instruct-chat-reasoning-families) — the naming pattern the card is telling you about.
- [Model families and variants](/learn/llm-foundations/model-families-and-variants) — how to compare cards across a family.
