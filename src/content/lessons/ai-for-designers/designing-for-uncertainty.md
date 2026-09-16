---
title: "Designing for uncertainty"
track: "ai-for-designers"
status: live
summary: "Design calibrated uncertainty wording, evidence placement, alternatives, and abstention so users can judge when to trust the output."
duration: "10 min read"
---

This lesson matters whenever your feature can be wrong — which is always. Users cannot calibrate trust from confident prose; they calibrate it from what you show about evidence, alternatives, and limits.

## Calibrated wording

Match the words to the evidence. Strong retrieval with agreeing sources earns direct wording plus citations. Weak or conflicting sources earn hedging plus the conflict shown, not hidden. No evidence earns abstention with a next step — never a confident guess. Write three wording tiers for your feature (confident, qualified, abstained) and use them consistently; inconsistency teaches users to ignore all three.

For why fluency and accuracy diverge, see [Why models hallucinate](/learn/hallucinations/why-models-hallucinate) and [Teaching a model to say I don't know](/learn/hallucinations/teaching-models-to-say-i-dont-know).

## Evidence, alternatives, abstention

- **Evidence** — place sources adjacent to the claims they support, not in a footer graveyard. Each citation names the source and, where it matters, its date.
- **Alternatives** — when sources conflict or the request is ambiguous, show the leading interpretations side by side with what would decide between them, instead of picking silently.
- **Abstention** — define in advance which situations refuse: no supporting source, stale sources on a time-sensitive question, policy boundaries, stakes above the evidence. Each abstention carries draft copy and a destination; see [Human review and approval boundaries](/learn/ai-for-designers/human-review-and-approval-boundaries).

## Privacy and accessibility implications

Uncertainty displays often tempt designers to show more context — full passages, raw scores, internal reasoning. Show what helps judgment and no more: exposing retrieved personal data or internal traces to justify an answer trades one trust problem for a privacy one. For screen readers, uncertainty must be text, not color alone; announce state changes once, politely, and never stream tokens as announcements.

## Exercise

Take your feature's highest-stakes output. Write its confident, qualified, and abstained renderings with full copy, then mark which evidence triggers each tier. If you cannot name the trigger, the tiers are decoration — define the signal before shipping the words.

**Related:** [Sources, confidence, and explanations, compared](/learn/ai-for-designers/sources-confidence-and-explanations-compared), [Correction, undo, and recovery patterns](/learn/ai-for-designers/correction-undo-and-recovery-patterns), [Confidence signals](/learn/hallucinations/confidence-and-uncertainty-signals)

## Next

Compare your options in [Sources, confidence, and explanations, compared](/learn/ai-for-designers/sources-confidence-and-explanations-compared).
