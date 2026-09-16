---
title: "Designing a UX evaluation rubric"
track: "ai-for-designers"
status: live
summary: "Score AI prototypes on usefulness, clarity, control, recovery, trust, and accessibility with a rubric that separates interaction failures from model failures."
duration: "10 min read"
---

This lesson matters because "it felt good" is not an evaluation. A rubric turns prototype sessions into decisions: what to change, in what order, and what counts as good enough.

## Six criteria

Score each scenario outcome on these six, with a short note per score — numbers without notes cannot drive revisions:

1. **Usefulness** — did the outcome advance the user's task? A fluent answer that misses the need scores low.
2. **Clarity** — could the user tell what happened, what the system considered, and what to do next?
3. **Control** — could the user steer, correct, cancel, or retry without losing work?
4. **Recovery** — when output was wrong or the request failed, did the experience stay useful?
5. **Trust calibration** — did the user's confidence match the evidence? Over-trust in weak answers and under-trust in strong ones are both failures.
6. **Accessibility** — could the outcome be reached and judged with keyboard, screen reader, zoom, and reduced motion? An outcome only some users can evaluate is not a passing outcome.

## Separating model failures from interaction failures

For every low score, ask: would a better model output have fixed this, or is the interface at fault? A wrong answer with good correction and evidence is an interaction success around a model miss. A right answer the user cannot verify, correct, or act on is an interaction failure around a model hit. Log the verdict per scenario — it decides whether the fix is a behavior change, a prompt change, or an interface change, and it stops the team from "fixing" design problems by waiting for a better model.

## Running the rubric

Score independently before discussing; average the scores but keep the disagreements — they mark where criteria need sharpening. Re-run the same set after each revision and record what changed and why. The findings log this produces is a required capstone artifact and the core of your portfolio story: decisions with evidence.

**Related:** [Creating a realistic AI test set](/learn/ai-for-designers/creating-a-realistic-ai-test-set), [Testing an AI prototype: a worked example](/learn/ai-for-designers/test-an-ai-prototype-worked-example), [AI prototype testing: common mistakes](/learn/ai-for-designers/ai-prototype-testing-common-mistakes)
