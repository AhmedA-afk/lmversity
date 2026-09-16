---
title: "Trust patterns: a redesign worked example"
track: "ai-for-designers"
status: live
summary: "Redesign an illustrative overconfident assistant flow using uncertainty wording, evidence, correction, and approval boundaries."
duration: "11 min read"
---

This worked example matters because trust patterns are easy to list and hard to apply. Watch them applied to one concrete flow, then apply the same pass to yours.

## Setup: the illustrative flow

The scenario below is illustrative. A meeting assistant answers "Can we promise the client Friday delivery?" with a single confident "Yes, Friday works." No sources, no hedging, no alternatives, no approval — and the underlying evidence is two conflicting schedule threads. The redesign below fixes the flow state by state; your job after reading is the same pass on your own feature's highest-stakes flow.

## The redesign

- **Uncertainty, stated.** The confident "Yes" becomes a qualified answer: two threads disagree, so the interface says so and shows both, with the dates each supports. The wording tier follows [Designing for uncertainty](/learn/ai-for-designers/designing-for-uncertainty): conflict shown, not smoothed over.
- **Evidence, adjacent.** Each schedule claim carries its source thread and date inline. The user can verify without hunting; claims without a thread are marked as unsourced rather than stated.
- **Alternatives, offered.** Instead of picking silently, the flow offers the two viable readings — "Friday if the supplier thread holds; Tuesday on the conservative thread" — with what would decide between them (supplier confirmation).
- **Correction, built in.** The user can flag the wrong thread, edit the summary, or attach the missing confirmation; the answer re-runs narrowly around the fix per [Correction, undo, and recovery patterns](/learn/ai-for-designers/correction-undo-and-recovery-patterns).
- **Approval, enforced.** Committing to the client is an external, hard-to-reverse action: it ships as a drafted commitment awaiting explicit confirmation naming the date, the recipient, and the reversibility — never a self-send. See [Human review and approval boundaries](/learn/ai-for-designers/human-review-and-approval-boundaries).

## Before and after

Before: one confident sentence, no evidence, no recourse — every [common mistake](/learn/ai-for-designers/ai-product-design-common-mistakes) at once (fake certainty, hidden reasoning, missing recovery). After: a qualified answer with shown conflict, inline sources, editable correction, and a confirmation gate on the consequential action. Same model underneath; entirely different product behavior around it — which is the point Module 2 made about where trustworthiness lives.

## Your turn

Take your feature's highest-stakes flow and produce the same before/after pair with full copy. Annotate every change with the pattern it applies and the clause of your behavior contract it satisfies. That annotated pair is your Module 3 artifact.

**Related:** [Sources, confidence, and explanations, compared](/learn/ai-for-designers/sources-confidence-and-explanations-compared), [AI product design: common mistakes](/learn/ai-for-designers/ai-product-design-common-mistakes), [Quiz: trust and recovery](/learn/ai-for-designers/trust-and-recovery-quiz)
