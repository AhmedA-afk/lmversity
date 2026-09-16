---
title: "Quiz: behavior before interface"
track: "ai-for-designers"
status: live
summary: "A six-question scenario quiz on behavior contracts, capability mapping, state models, and prompt specs from Module 2."
duration: "12 min read"
---

Six scenarios from Module 2. Answer first, then open the explanations.

## 1. The missing contract

Engineering asks what the feature should do when retrieval finds nothing. The mockups show only the success case. What is the correct response?

- **A.** Add a success-case animation to buy time for the decision.
- **B.** Write the behavior contract's boundaries and escalation clauses first — what the feature refuses, what it offers instead, and where the user goes next — then render those states.
- **C.** Let the model improvise and design around whatever it tends to say.
- **D.** Remove the feature's scope statement so users expect less.

<details><summary>Answer</summary>

**Correct: B.** Per [Designing the AI behavior contract](/learn/ai-for-designers/designing-the-ai-behavior-contract): boundaries and escalation are written before screens, with falsifiable clauses a reviewer can check. **A** decorates the gap. **C** delegates a product decision to model variance. **D** hides the scope instead of designing it.

</details>

## 2. The overloaded call

One AI call is asked to retrieve documents, summarize them, draft a message, and file it to the tracker. Reviews are inconsistent. What is the fix?

- **A.** A longer prompt covering all four jobs in more detail.
- **B.** Split the job by capability — retrieval, transformation, generation, action — per [Mapping AI capabilities to user tasks](/learn/ai-for-designers/mapping-ai-capabilities-to-user-tasks), and keep the action as a confirmed proposal rather than a silent write.
- **C.** A bigger text box so users can explain all four needs at once.
- **D.** Removing the filing step without telling users.

<details><summary>Answer</summary>

**Correct: B.** Each capability carries different uncertainty and different design duties; bundling them hides all four. The action subtask especially needs confirmation and reversibility. **A** makes an overloaded call longer instead of narrower. **C** and **D** move work without fixing the structure.

</details>

## 3. The spinner of mystery

A multi-step assistant shows one generic spinner for up to half a minute. Users abandon it. What does the state model require?

- **A.** A more entertaining spinner animation.
- **B.** Truthful step status naming the actual step, with cancellation available throughout — working-state minimum from the [cheatsheet](/learn/ai-for-designers/ai-interaction-state-cheatsheet).
- **C.** Hiding the wait by auto-playing tips over the spinner.
- **D.** Removing cancellation so users cannot interrupt.

<details><summary>Answer</summary>

**Correct: B.** A generic indicator over multi-step work is a promise the interface breaks. Name the step, offer cancel, keep layout stable. **A** and **C** decorate waiting without informing. **D** removes the user's only control.

</details>

## 4. The prompt contradiction

The interface invites open-ended input but the prompt demands a narrow shape, and users keep getting scolded by the output. What is wrong?

- **A.** Users need to learn prompt engineering before using the feature.
- **B.** The prompt spec and the interface promise different things — the [prompt-as-spec](/learn/ai-for-designers/prompt-as-interaction-spec) review should have caught the mismatch between invited input and demanded shape.
- **C.** The model needs replacing.
- **D.** The interface copy is fine; the outputs just need friendlier scolding.

<details><summary>Answer</summary>

**Correct: B.** Interface affordances and prompt constraints are one contract with two renderings. When they disagree, users pay. Align the invitation with the shape, or widen the shape. **A** blames users for a design contradiction. **C** swaps engines for a spec defect. **D** polishes the scolding.

</details>

## 5. The cancelled run

A user stops a long generation halfway. The partial text vanishes with no trace. Which state minimum was violated?

- **A.** None — cancelled work should disappear.
- **B.** The cancelled-state minimum: partial output marked partial, with resume or discard as explicit choices and no silent loss of work.
- **C.** The idle-state minimum.
- **D.** The complete-state minimum.

<details><summary>Answer</summary>

**Correct: B.** Cancellation is a designed state, not deletion — preserve, mark, and offer explicit next actions. **A** silently destroys work the user may still need. **C** describes the system before it starts, not the interrupted run. **D** describes finished output, which a cancelled run never reached. See the [worked example](/learn/ai-for-designers/ai-feature-state-model-worked-example).

</details>

## 6. The evidence gap

A consequential answer arrives with no sources and no date. What does the contract require?

- **A.** Nothing — evidence is optional polish.
- **B.** The evidence clause fires: consequential claims ship with sources, dates or versions where relevant, and correct/retry/escalate actions.
- **C.** A disclaimer in small print that the answer may be wrong.
- **D.** Removing the answer and showing a blank page.

<details><summary>Answer</summary>

**Correct: B.** Evidence for consequential claims is a contract obligation with interface components behind it — citations, dates, actions. **A** treats the thing users judge trust by as decoration. **C** discloses without enabling judgment. **D** refuses work the system could support honestly.

</details>

Continue to Module 3 with [Designing for uncertainty](/learn/ai-for-designers/designing-for-uncertainty).
