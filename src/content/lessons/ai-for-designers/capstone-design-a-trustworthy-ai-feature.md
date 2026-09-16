---
title: "Capstone: design a trustworthy AI feature"
track: "ai-for-designers"
status: live
summary: "Complete the MVP capstone by assembling your brief, behavior model, trust pass, evaluated prototype, and engineer-ready handoff into one case study."
duration: "15 min read"
---

This capstone matters because it is the course's promise made concrete: one feature, designed end to end, evaluated on unseen examples, handed off without guessing. Everything before it was preparation for this page.

## What to submit

Assemble the four module artifacts plus the handoff, in order:

1. **Opportunity brief** — user problem, AI role, non-AI baseline, value hypothesis, failure costs, decision owner (Module 1).
2. **Behavior contract and state diagram** — eight clauses plus the ten-state model with draft copy and transitions (Module 2).
3. **Trust pass** — uncertainty tiers, evidence placement, correction/undo/recovery, approval boundaries, applied to the highest-stakes flow as a before/after pair (Module 3).
4. **Prototype, scenario set, rubric, findings log, revision note** — twelve scenarios across four buckets, six-criterion scores with model-vs-interaction verdicts, at least one re-run on the same set, and unseen examples in the evaluation round (Module 4).
5. **Interaction spec for engineering** — states, data, model behavior, controls, copy, events, permissions, evaluation summary, and unresolved questions. Name what is decided, what is open, and who owns each open item.

## Three bounded briefs

Pick one, or propose your own with the same scope discipline (one user, one task, one AI role, named baseline):

- **Brief A: handbook Q&A assistant.** Answer employee questions from a company handbook with citations. Must handle stale sections, out-of-scope questions, and personal-data-adjacent queries with escalation.
- **Brief B: draft-first support replies.** Draft customer replies from help-center articles for agent review and send. Must handle policy conflicts, refund decisions as confirmations, and audit of approvals.
- **Brief C: meeting-notes action filer.** Summarize decisions and propose tracker items from a meeting transcript. Must handle ambiguous ownership, conflicting notes, and filing as confirmed proposals only.

A learner-defined brief passes the scope check when it names the user, the single task, the AI role, the baseline, and the highest-stakes failure — in five sentences or fewer.

## Passing criteria

- The case study demonstrates normal, uncertain, blocked, failed, corrected, and user-cancelled states with rendered copy, not descriptions of copy.
- The evaluation uses examples unseen during design, with a findings log distinguishing model failures from interaction failures.
- A non-AI baseline is scored or reasoned against, and the AI role is justified rather than assumed.
- Accessibility notes cover keyboard, screen reader announcements, zoom/reflow, and reduced motion; privacy, retention, permission, and human-review decisions are stated explicitly.
- The portfolio write-up separates your decisions from model-generated material: what you chose, what the tool produced, what evidence changed your mind.

Unsupported claims — invented metrics, unverified benchmark language, tool capabilities you did not test — fail the capstone regardless of polish. Revise means the structure is sound but evidence or states are incomplete; unsupported claims mean rework.

## Portfolio prompt

Write the case study as decisions with evidence: the brief you chose and why, the three hardest tradeoffs (with what you rejected), the evaluation finding that changed the design most, and what you would test next with real traffic. Lead with the handoff spec's unresolved questions — owning what is open reads as seniority, not weakness.

**Related:** [AI for Designers: course guide](/learn/ai-for-designers/ai-for-designers-course-guide), [Testing an AI prototype: a worked example](/learn/ai-for-designers/test-an-ai-prototype-worked-example), [Designing a UX evaluation rubric](/learn/ai-for-designers/designing-a-ux-evaluation-rubric)

## When you are done

You hold the MVP's full outcome: an evaluated case study and a handoff engineers can build from. The course continues from here into AI-assisted workflows and deeper interaction patterns — but nothing downstream redefines what you have made.

## Defend this build

Before you call this done, answer these out loud — or in writing — the way you would in a review or an interview. Answer with evidence from the build, not adjectives.

1. Which user decision in your feature is irreversible, and where does the design warn before that point?
2. Show the state where the model is wrong but confident. What does the user see that lets them notice?
3. What does your feature do when the model is slow, degraded, or absent? Walk through that screen.
4. Where does the interface reveal how confident the system is — and where did you decide to hide it? Why?
5. If the model's behavior drifts after launch, which part of the user experience fails first, and who notices: the user or your telemetry?

The pass bar: each answer names something in your artifacts — a decision, a measurement, a failure you saw and what you changed — rather than a promise about how the system should behave.
