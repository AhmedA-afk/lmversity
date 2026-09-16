---
title: "Sources, confidence, and explanations, compared"
track: "ai-for-designers"
status: live
summary: "Compare three trust patterns — cited sources, calibrated confidence, and explanations — on what each can and cannot communicate to users."
duration: "9 min read"
---

This comparison matters because teams reach for whichever trust pattern is easiest and assume it covers the rest. Each pattern answers a different user question, and using one where another is needed is a designed misunderstanding.

## What each pattern does

- **Cited sources** answer "where did this come from?" They let users verify claims against something checkable. They work when sources are current, accessible, and genuinely support the claim — and they fail silently when citations point at stale, irrelevant, or inaccessible material. Design duty: adjacency to claims, dates where relevant, and handling for sources the user cannot open.
- **Calibrated confidence** answers "how sure should I be?" It works when the confidence signal tracks real evidence strength and is worded consistently. It fails when wording is decorative — "high confidence" on guesses — or when scores leak as raw numbers users cannot interpret. Design duty: tiered wording tied to defined triggers, never bare percentages without meaning.
- **Explanations** answer "why this, and what else was considered?" They work for decisions with visible alternatives: why this recommendation, what was rejected, what would change the answer. They fail when they narrate a plausible story that does not reflect the actual process — fluency again masquerading as transparency. Design duty: explanations must describe checkable factors (sources used, constraints applied), not invent reasoning traces.

## Choosing between them

High-stakes factual claims need sources first; confidence wording without sources is decoration. Ambiguous requests need alternatives shown, not a single confident pick. Opaque decisions (rankings, flags, recommendations) need explanations naming the factors a user could dispute. Most trustworthy surfaces combine two: sources plus calibrated wording for answers, alternatives plus explanations for recommendations.

## Common combination mistakes

Stacking all three everywhere produces clutter users learn to ignore. Assign patterns by claim type in your behavior contract: which claims get citations, which get confidence tiers, which get explanations — and which get abstention instead of any pattern. Review the combination against the [trust worked example](/learn/ai-for-designers/trust-patterns-worked-example) before finalizing.

**Related:** [Designing for uncertainty](/learn/ai-for-designers/designing-for-uncertainty), [Citations and attribution](/learn/hallucinations/citations-and-attribution), [Trust patterns: a redesign worked example](/learn/ai-for-designers/trust-patterns-worked-example)
