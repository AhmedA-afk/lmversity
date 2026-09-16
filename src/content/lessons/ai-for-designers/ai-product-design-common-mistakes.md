---
title: "AI product design: common mistakes"
track: "ai-for-designers"
status: live
summary: "Recognize the five recurring AI product design failures — magic boxes, happy-path flows, fake certainty, hidden automation, and missing recovery."
duration: "8 min read"
---

This page matters as a diagnostic: experienced designers can skim these five and find their personal curriculum, and every new design can be checked against the list before it ships.

## 1. The magic box

A single input field, a single button, no account of what the system considers, what it can do, or what happens next. Users cannot form a mental model, so they either over-trust or under-use the feature. The fix is the [behavior contract](/learn/ai-for-designers/designing-the-ai-behavior-contract): state purpose, inputs, outputs, and boundaries in the interface itself, not just in documentation.

## 2. Happy-path-only flows

Every mockup shows the ideal answer. Nothing shows the uncertain answer, the blocked request, the failure, the cancellation, or the correction. Since wrong and partial output is routine for generative systems — not exceptional — these states are core flows. Module 2's [state model](/learn/ai-for-designers/ai-feature-state-model-worked-example) requires idle, working, partial, complete, uncertain, blocked, failed, cancelled, and corrected states for exactly this reason.

## 3. Fake certainty

Confident wording on top of a guess: no sources, no hedging, no alternatives, no abstention. Because fluent phrasing and accuracy come from different places (see [Why models hallucinate](/learn/hallucinations/why-models-hallucinate)), certainty must be designed, not defaulted. The repair is Module 3's toolkit: calibrated wording, evidence, alternatives, and knowing [when the system should abstain](/learn/ai-for-designers/designing-for-uncertainty).

## 4. Hidden automation

The system acts — sends, files, deletes, purchases — without showing that it acted, what it did, or how to undo it. The boundary between recommendation, confirmation, and action must be visible and structural; see [Human review and approval boundaries](/learn/ai-for-designers/human-review-and-approval-boundaries). A useful test: can the user answer "what did it just do, and can I take it back?" for every consequential action.

## 5. Missing recovery

No correction flow, no undo, no retry that preserves input, no escalation to a person. Recovery is where trust is actually built, because it is where the product admits fallibility and stays useful anyway. [Correction, undo, and recovery patterns](/learn/ai-for-designers/correction-undo-and-recovery-patterns) catalogs the minimum set.

## How to use this list

Pin it next to every critique in this course. For each flow under review, ask which of the five is present and what artifact would remove it. If all five are absent, the design is ready for [prototype testing](/learn/ai-for-designers/prototype-ai-behavior-without-a-model) — which exists precisely because self-review misses what scenarios catch.

**Related:** [Designing chat UX that doesn't feel broken](/learn/genai-app-dev/designing-chat-ux), [Trust patterns: a redesign worked example](/learn/ai-for-designers/trust-patterns-worked-example), [Quiz: AI product design foundations](/learn/ai-for-designers/ai-product-design-foundations-quiz)
