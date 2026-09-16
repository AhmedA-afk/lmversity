---
title: "Creating a realistic AI test set"
track: "ai-for-designers"
status: live
summary: "Assemble a small scenario set with representative tasks, difficult cases, sensitive cases, and known failure modes for testing AI prototypes."
duration: "9 min read"
---

This lesson matters because prototypes tested on friendly examples teach nothing. A small, well-built scenario set beats a large pile of cherry-picked prompts every time.

## The four buckets

Aim for a set you can run in one session — roughly a dozen scenarios — with all four buckets represented:

1. **Representative tasks** — the ordinary work your feature exists for, sampled from real phrasing, not cleaned up. Include typos, vague requests, and missing context.
2. **Difficult cases** — ambiguous requests, conflicting sources, edge phrasing, multi-part questions. These are where uncertainty and alternatives designs get exercised.
3. **Sensitive cases** — personal data, high-stakes topics, policy boundaries, adversarial framings. Test refusal shapes, escalation, and privacy handling here — never with real users' private data; author stand-ins.
4. **Known failure modes** — every failure your team has already seen or your [common-mistakes review](/learn/ai-for-designers/ai-product-design-common-mistakes) predicts: stale sources, empty retrieval, overconfident guesses, tool errors.

## Writing good scenarios

Each scenario carries: the input, the context the system sees, what a good outcome looks like (including acceptable variation — there is rarely one right answer), and what counts as failure. Mark which scenarios must never have been seen during design — the capstone requires evaluation on unseen examples precisely because designing to the test is the easiest way to fool yourself.

## Keeping the set alive

Date every scenario, note its source (authored, observed, reported), and retire scenarios that no longer discriminate between good and bad behavior. Corrections collected from [correction flows](/learn/ai-for-designers/correction-undo-and-recovery-patterns) are the best source of new scenarios — feed them back with consent.

## Exercise

Write your feature's twelve-scenario set now, with at least two scenarios per bucket. Run your prototype against all twelve before reading the next lesson; bring the raw outcomes.

**Related:** [Prototype AI behavior without a model](/learn/ai-for-designers/prototype-ai-behavior-without-a-model), [Designing a UX evaluation rubric](/learn/ai-for-designers/designing-a-ux-evaluation-rubric), [Testing an AI prototype: a worked example](/learn/ai-for-designers/test-an-ai-prototype-worked-example)
