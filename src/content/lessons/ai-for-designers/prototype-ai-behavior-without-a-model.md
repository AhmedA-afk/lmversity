---
title: "Prototype AI behavior without a model"
track: "ai-for-designers"
status: live
summary: "Test AI interaction designs early with scripted, Wizard-of-Oz, and branch-based prototypes that disclose their limits honestly."
duration: "10 min read"
---

This lesson matters because waiting for a working model to test the design wastes the cheapest testing window. Behavior can be prototyped before any model exists — if the prototype is honest about what it is.

## Three prototype kinds

- **Scripted** — fixed stimulus and fixed responses for a defined path. Best for testing comprehension, layout, and trust wording on the golden path. Limit: teaches nothing about variation; say so on the prototype.
- **Wizard-of-Oz** — a person plays the AI behind the interface, responding in real time within defined rules (response time budget, source constraints, refusal shapes). Best for testing the full interaction loop including correction and escalation. Rules for honesty: participants know a person may be behind the curtain when the study design allows deception-free testing — never present human work as model output in a portfolio without labeling it.
- **Branch-based** — clickable flows with authored branches per state (complete, uncertain, blocked, failed). Best for testing state coverage and copy across the [state model](/learn/ai-for-designers/ai-feature-state-model-worked-example). Every branch renders its exit paths; unbuilt branches are labeled unbuilt, not faked.

## Disclosure and consent

Prototype participants deserve to know what they are testing. State up front that responses may be scripted or human-operated, what data you record, how long you keep it, and who sees it. This is both ethics and method: participants who believe they are judging a finished AI behave differently from participants who know they are shaping one, and you want the second.

## Accessibility from the first prototype

Test the no-JavaScript explanation, keyboard order, visible focus, live-region announcements, and 320px width behavior on the prototype, not after build. A prototype that only works with a mouse at desktop width teaches its team that access is a later concern — it is not.

## Exercise

Build one branch-based prototype of your feature's core task covering at least five states, and run two Wizard-of-Oz sessions against it with the rules written down. Log what surprised you; surprises are the prototype paying for itself.

**Related:** [Creating a realistic AI test set](/learn/ai-for-designers/creating-a-realistic-ai-test-set), [Designing a UX evaluation rubric](/learn/ai-for-designers/designing-a-ux-evaluation-rubric), [AI feature state model: a worked example](/learn/ai-for-designers/ai-feature-state-model-worked-example)
