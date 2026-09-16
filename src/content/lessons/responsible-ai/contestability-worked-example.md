---
title: "Worked Example: A Contestability Path That Actually Works"
track: "responsible-ai"
status: live
summary: "A benefits-eligibility tool's appeal flow walked end to end — the path that existed on paper, and the one a harmed user could actually follow."
updated: "2026-09-16"
duration: "10 min read"
---

A contestability path is easy to claim and hard to make real. This example walks one — a benefits-eligibility screening tool — through the version that existed on paper and the version that actually worked.

## The setup

A tool that screens benefit applications and flags likely-ineligible ones for review. The launch checklist says "users can appeal decisions" — there's a feedback link in the footer. On paper, contestability exists.

## The paper version

A user flagged as likely-ineligible sees a generic "This application requires additional review." No explanation of what the flag was based on. The footer link goes to a general feedback form — submissions get an auto-reply and route to a queue nobody owns. The "appeal path" is: user is confused → user fills a form → nothing happens → the review proceeds without their input.

On paper, there's a path. In practice, it's a dead end wearing a path's name.

## The real version

1. **The flag is explained.** "Your application was flagged because the reported income exceeded the threshold for this benefit" — the reason, in the user's terms, not "model output: 0.82."
2. **The appeal is a path, not a form.** A dedicated flow: the user sees the reason, can correct the input it was based on ("the income figure is from the wrong period — here's the correct one"), and the correction reaches a human reviewer before the decision, not after.
3. **The timeline is real.** The appeal holds the decision for a defined period — the user's input can actually affect the outcome, not just be recorded beside it.
4. **The owner exists.** A named team owns the appeal queue; "unowned queue" is a path that goes nowhere.

## The gap the paper version hid

The paper version's failure wasn't malice — it was a checklist item satisfied by a link's existence rather than a path's function. The question that catches it: "walk me through a user actually using this." If the answer is "they fill a form and…" followed by a shrug, the path isn't real.

## What the example teaches

- **Contestability is a flow, not a link.** The artifact is the path a user can follow to an outcome, not the existence of a form.
- **The explanation is the entry point.** A user who can't see why the flag happened can't meaningfully contest it.
- **The appeal must reach a decider before the decision.** Input that lands after the outcome is feedback, not appeal.

## The check

Walk the path as a harmed user: can they see the reason, correct the input, reach a human before the outcome, and does anyone own the queue? A "yes" on all four is a real path; a "sort of" on any is the paper version.

**Related:** [Consent, contestability, and impact](/learn/responsible-ai/consent-contestability-and-impact), [Responsible-AI mistakes](/learn/responsible-ai/responsible-ai-mistakes), [Responsible release project](/learn/responsible-ai/responsible-release-project)
