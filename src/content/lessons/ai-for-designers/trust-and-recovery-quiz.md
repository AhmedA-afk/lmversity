---
title: "Quiz: trust and recovery"
track: "ai-for-designers"
status: live
summary: "A six-question scenario quiz on uncertainty wording, trust patterns, correction flows, and approval boundaries from Module 3."
duration: "12 min read"
---

Six scenarios from Module 3. Answer first, then check.

## 1. The conflicting threads

Two sources disagree about a delivery date and the assistant picks one silently with confident wording. What is the correct design?

- **A.** Keep the confident pick — decisiveness feels better.
- **B.** Show the conflict with both sources, qualify the wording, and offer what would decide between them.
- **C.** Hide both sources to reduce clutter.
- **D.** Always abstain whenever any conflict exists.

<details><summary>Answer</summary>

**Correct: B.** Per [Designing for uncertainty](/learn/ai-for-designers/designing-for-uncertainty) and the [redesign example](/learn/ai-for-designers/trust-patterns-worked-example): conflict shown plus alternatives beats silent picking and blanket refusal alike. **A** is fake certainty. **C** removes the evidence judgment needs. **D** refuses work the system can support honestly.

</details>

## 2. The bare percentage

An answer shows "Confidence: 87%" with no sources and no explanation. Why is this insufficient?

- **A.** The number should be higher to reassure users.
- **B.** A raw score without evidence or meaning does not answer what the user should check — confidence must be tiered wording tied to defined triggers plus adjacent sources, per [Sources, confidence, and explanations, compared](/learn/ai-for-designers/sources-confidence-and-explanations-compared).
- **C.** Percentages are always wrong and must never appear.
- **D.** The number should be hidden behind a tooltip.

<details><summary>Answer</summary>

**Correct: B.** The defect is not the number format but the missing judgment support: no sources, no triggers, no alternatives. **A** tunes the decoration. **C** overcorrects — quantified signals can help when grounded. **D** hides the signal instead of grounding it.

</details>

## 3. The uncorrectable answer

Users can only regenerate an entire answer or accept it; they cannot point at the wrong part. What is missing?

- **A.** Nothing — regeneration covers correction.
- **B.** Inline correction: point at the span, say what is wrong, see the fix incorporated narrowly, per [Correction, undo, and recovery patterns](/learn/ai-for-designers/correction-undo-and-recovery-patterns).
- **C.** A longer answer that is less likely to be wrong.
- **D.** Removing the regeneration button.

<details><summary>Answer</summary>

**Correct: B.** Global regenerate-or-accept discards good work with the bad and teaches users nothing is fixable. Targeted correction preserves work and produces the highest-value eval signal. **A** mistakes a blunt tool for repair. **C** and **D** avoid the flow.

</details>

## 4. The self-filing action

An assistant files tasks to a shared tracker the moment they are generated, with no preview. What mode violation is this?

- **A.** None — speed is the feature.
- **B.** An external, hard-to-reverse action running in action mode without evidence: it should start as a recommendation or confirmation naming the target with undo, per [Human review and approval boundaries](/learn/ai-for-designers/human-review-and-approval-boundaries).
- **C.** A color-scheme problem.
- **D.** A latency problem.

<details><summary>Answer</summary>

**Correct: B.** Filing to a shared system affects other people and is hard to reverse silently — confirmation with a named target is the minimum. **A** confuses capability with permission. **C** and **D** misdiagnose a structural defect.

</details>

## 5. The exposed justification

A designer proposes showing full retrieved personal records to "prove" an answer. What is wrong?

- **A.** Nothing — more transparency is always better.
- **B.** It trades a trust problem for a privacy one: show what helps judgment and no more, scoping approval and evidence displays before they ship.
- **C.** Personal data is always fine to display internally.
- **D.** Evidence should never be shown at all.

<details><summary>Answer</summary>

**Correct: B.** Uncertainty displays need privacy scoping — the lesson's explicit constraint. Justify with the minimum sufficient evidence. **A** ignores the exposure. **C** assumes internal visibility equals consent. **D** abandons evidence entirely.

</details>

## 6. The approval fatigue

Users must confirm every keystroke-level step of a long task and have started approving blindly. What is the fix?

- **A.** Remove all confirmations.
- **B.** Confirm plans rather than every step, batch low-stakes items, and reserve explicit approval for genuine decisions — keeping attention for the moments that matter.
- **C.** Make the confirm buttons smaller so they interrupt less.
- **D.** Add more confirmation steps for safety.

<details><summary>Answer</summary>

**Correct: B.** Approval fatigue is a real failure mode: attention spent everywhere protects nowhere. Restructure what gets confirmed, don't just add or remove gates. **A** removes protection with the noise. **C** hides the decision. **D** deepens the fatigue.

</details>

Continue to Module 4 with [Prototype AI behavior without a model](/learn/ai-for-designers/prototype-ai-behavior-without-a-model).
