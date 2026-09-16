---
title: "Quiz: prototype and evaluation"
track: "ai-for-designers"
status: live
summary: "A six-question scenario quiz on prototyping without models, scenario sets, rubrics, and the four testing traps from Module 4."
duration: "12 min read"
---

Six scenarios from Module 4. Answer first, then check.

## 1. The model wait

A team delays all testing until the production model is integrated. What is wrong?

- **A.** Nothing — only the real model gives valid results.
- **B.** Behavior can and should be tested earlier with scripted, Wizard-of-Oz, and branch-based prototypes that disclose their limits, per [Prototype AI behavior without a model](/learn/ai-for-designers/prototype-ai-behavior-without-a-model).
- **C.** Prototypes are only useful for visual design, not behavior.
- **D.** Testing should be skipped to save time.

<details><summary>Answer</summary>

**Correct: B.** Waiting wastes the cheapest testing window; honest prototypes test interaction structure, wording, states, and recovery long before model quality is final. **A** confuses model evaluation with UX evaluation. **C** and **D** discard the method.

</details>

## 2. The friendly set

A scenario set contains ten inputs the designer invented after finishing the design, all of which the prototype handles well. What trap is this?

- **A.** Good coverage — the design works.
- **B.** Cherry-picked prompts: the set needs the four buckets — representative, difficult, sensitive, known failures — with sourced scenarios plus unseen examples, per [Creating a realistic AI test set](/learn/ai-for-designers/creating-a-realistic-ai-test-set).
- **C.** Too many scenarios; fewer would be better.
- **D.** A rubric problem, not a scenario problem.

<details><summary>Answer</summary>

**Correct: B.** A set drawn from the finished design tests the designer's imagination, not the feature. Rebuild from the buckets with independent sources. **A** reads the trap as success. **C** misdiagnoses quantity for sourcing. **D** blames the scoring for the sampling.

</details>

## 3. The right answer nobody can use

A prototype gives a correct answer with no sources, no correction path, and no next action. Model failure or interaction failure?

- **A.** Model failure — the answer content is what matters.
- **B.** Interaction failure around a model hit: the output may be right but the user cannot verify, correct, or act on it, per the rubric's separation rule in [Designing a UX evaluation rubric](/learn/ai-for-designers/designing-a-ux-evaluation-rubric).
- **C.** Neither — correct answers always pass.
- **D.** A baseline problem.

<details><summary>Answer</summary>

**Correct: B.** The rubric exists for exactly this verdict: judge the experience, not just the text. Fix the interface and behavior, not the model. **A** and **C** score text instead of experience. **D** misplaces the defect.

</details>

## 4. The moving goalposts

Halfway through evaluation, a stakeholder redefines success from task completion to delight. What should the designer do?

- **A.** Adopt the new criterion immediately to keep alignment.
- **B.** Hold the written six-criterion rubric fixed for the round, log the proposed change as a disagreement to consider between rounds.
- **C.** Drop the rubric and go with stakeholder judgment.
- **D.** Add delight as a seventh criterion mid-round without rescoring.

<details><summary>Answer</summary>

**Correct: B.** Changing criteria mid-round invalidates comparison — the [common-mistakes](/learn/ai-for-designers/ai-prototype-testing-common-mistakes) trap. Fixed rubrics, independent scoring, disagreements as data. **A**, **C**, and **D** all break the measurement.

</details>

## 5. The honest wizard

A team runs Wizard-of-Oz sessions. What disclosure do participants need?

- **A.** None — realism requires deception.
- **B.** That responses may be scripted or human-operated, what data is recorded, how long it is kept, and who sees it.
- **C.** Only the task instructions; method details bias results.
- **D.** The full system prompt and model weights.

<details><summary>Answer</summary>

**Correct: B.** Disclosure plus consent is both ethics and method — participants shaping a prototype behave more usefully than participants judging a finished AI. Never present human work as model output in a portfolio without labeling it. **A** sacrifices ethics for a false realism gain. **C** withholds what consent requires. **D** overexposes without helping judgment.

</details>

## 6. The unmeasured claim

"We improved the design" — with no baseline and no re-run of the same set. What is missing?

- **A.** Nothing — designer judgment suffices.
- **B.** A scored baseline on the same rubric where comparable, plus a re-run of the same scenarios after the change, so improvement is measured rather than asserted.
- **C.** More scenarios instead of re-running the same ones.
- **D.** A new prototype instead of revising.

<details><summary>Answer</summary>

**Correct: B.** Without a baseline and a matched re-run, "improved" is a story, not a finding — and findings are the capstone's currency. **A** asserts without evidence. **C** adds novelty where comparability is needed. **D** restarts instead of measuring.

</details>

Continue to the [Capstone: design a trustworthy AI feature](/learn/ai-for-designers/capstone-design-a-trustworthy-ai-feature).
