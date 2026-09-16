---
title: "Quiz: AI product design foundations"
track: "ai-for-designers"
status: live
summary: "A six-question scenario quiz checking Module 1 judgment: mental models, probabilistic behavior, opportunity framing, and the five common mistakes."
duration: "12 min read"
---

Six scenarios from Module 1. Commit to an answer before opening the explanation — the quiz checks judgment, not recall.

## 1. The demo review

A stakeholder shows one polished AI output and declares the feature ready to ship. What is the strongest designer response?

- **A.** Agree — a strong output proves the feature works.
- **B.** Ask to see three runs of the same input — a strong one, a mediocre one, and a failure — and walk through what the interface does in each case.
- **C.** Ask for a different model, since one good output means the current model is already sufficient.
- **D.** Redesign the output styling to match the demo more closely.

<details><summary>Answer</summary>

**Correct: B.** One output from a probabilistic system proves almost nothing about the next output. Showing the range — strong, mediocre, failure — reframes the review around what the experience does across variation, which is what actually ships. **A** treats a sample as a guarantee. **C** changes the engine when the problem is the evaluation ritual. **D** polishes the one case that already works.

</details>

## 2. The hidden context

A summary feature answers from retrieved documents the user never sees. Users are starting to distrust it. What is missing?

- **A.** A larger input box so users can paste more context themselves.
- **B.** Visible disclosure of what the system considered — sources, evidence, and what was not checked — so users can judge whether to trust the output.
- **C.** A longer, more detailed answer every time, which reads as more authoritative.
- **D.** Removing the feature until the model improves.

<details><summary>Answer</summary>

**Correct: B.** From the [mental model](/learn/ai-for-designers/designer-mental-model-for-generative-ai): context the user cannot see but that shapes the answer is a disclosure problem. Showing sources and evidence lets users calibrate trust per output. **A** shifts the burden onto the user. **C** mistakes length for trustworthiness — confident-looking wrong answers are the core failure mode. **D** waits on the model when the product layer can fix the experience now.

</details>

## 3. The baseline question

A team proposes an AI triage feature but has never described the current hand-written workflow. What should the designer insist on first?

- **A.** Skipping straight to interface mockups to keep momentum.
- **B.** A written non-AI baseline — current workflow plus cheapest non-AI improvements — so the AI can be priced against something real.
- **C.** A vendor comparison to pick the model before designing.
- **D.** User interviews about visual preferences for the new feature.

<details><summary>Answer</summary>

**Correct: B.** Per the [worked example](/learn/ai-for-designers/choosing-where-ai-belongs-worked-example): price AI against the baseline, not against nothing. Without it, no value claim or failure-cost argument can be evaluated — see also [When a workflow beats an agent](/learn/agentic-ai/when-not-to-use-an-agent). **A** designs before justifying. **C** picks an engine before knowing the job. **D** asks about styling when the open question is whether the feature should exist.

</details>

## 4. The confident refund

An assistant states a refund policy with total confidence but cites nothing. The policy turns out to be wrong. Which mistake is this?

- **A.** Happy-path-only flows.
- **B.** Fake certainty — confident wording on top of a guess, with no sources, hedging, or abstention.
- **C.** Hidden automation.
- **D.** Missing recovery.

<details><summary>Answer</summary>

**Correct: B.** This is the textbook [fake-certainty](/learn/ai-for-designers/ai-product-design-common-mistakes) failure: fluency presented as accuracy. The repair is evidence, calibrated wording, and abstention design — Module 3's core. **A** is about uncovered states, **C** about undisclosed actions, **D** about repair flows; all matter, but the defect here is the certainty itself.

</details>

## 5. The self-sending assistant

A draft assistant begins sending replies directly to customers without showing what it sent or offering undo. What boundary was crossed?

- **A.** None — automation is the point of AI features.
- **B.** The recommendation/confirmation/action boundary: a consequential action fires without visible confirmation or reversibility.
- **C.** A visual-design issue solvable with better button styling.
- **D.** A model-quality issue solvable with a better prompt alone.

<details><summary>Answer</summary>

**Correct: B.** Hidden automation plus missing approval: the user cannot answer "what did it do, and can I take it back?" See [Human review and approval boundaries](/learn/ai-for-designers/human-review-and-approval-boundaries). **A** confuses capability with permission. **C** and **D** treat a structural authority defect as surface polish.

</details>

## 6. The one-page brief

Which one-page opportunity brief would pass Module 1 review?

- **A.** A brief with a user problem, proposed AI role, non-AI baseline, value hypothesis, failure costs, and a decision owner.
- **B.** A brief with mockups and a color palette but no baseline or failure analysis.
- **C.** A brief that lists model names and API prices but no user problem.
- **D.** A brief that promises the AI will eliminate all errors.

<details><summary>Answer</summary>

**Correct: A.** That six-part brief is the Module 1 artifact: it makes the decision reviewable. **B** shows screens before justification. **C** specifies the engine without the job. **D** promises what probabilistic systems cannot deliver — and guarantees the [magic-box](/learn/ai-for-designers/ai-product-design-common-mistakes) failure.

</details>

When all six feel straightforward, continue to [Designing the AI behavior contract](/learn/ai-for-designers/designing-the-ai-behavior-contract) to start Module 2.
