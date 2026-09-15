---
title: "Consent, contestability, and the costs nobody measures"
track: "responsible-ai"
status: live
summary: "Consent governs what data a system may use, contestability governs whether a person can challenge its output, and environmental cost is the footprint most AI teams never record — all three are design decisions, not compliance afterthoughts."
duration: "4 min read"
---

## The short answer

Three responsible-AI obligations are routinely skipped because they don't look
like model problems. **Consent** is whether the people whose data or labor
feeds the system agreed to it. **Contestability** is whether a person affected
by an output can challenge it and reach a human who can change the outcome.
**Environmental impact** is the compute and energy cost of training and
serving, which most teams never measure because nobody asks for it. Each is a
design decision made early or paid for late.

## Consent is about provenance, not just permission

Consent questions show up at three boundaries: the data a model was trained or
fine-tuned on, the user content a system retains and reuses, and the human
feedback labor that shaped it. A system brief should record which of these
apply and what basis — explicit consent, contract, public availability, or
"unexamined" — each rests on. "We scraped it because it was public" is a
position, but it should be a recorded position with an owner, not an accident.

## Contestability is an output property

If a system can affect a person — a filtered application, a denied request, a
flagged account — that person needs a path to a human with authority to change
the outcome. Contestability fails in three predictable ways:

- **No channel:** the output is final and unmarked; there is nowhere to appeal.
- **A channel to nowhere:** appeals route to the same automated system that
  produced the decision.
- **A channel without authority:** a human reads appeals but cannot override
  the system.

The fix is architectural, not procedural: affected outputs carry a visible
contest path, that path terminates at a person with override authority, and
[human escalation queues](/learn/production/human-escalation-queues-for-low-confidence-output)
exist for the cases the system itself marks uncertain.

## Environmental impact is a line item you don't have yet

Training and inference both consume energy; the honest version of this lesson
is that most teams can't state their footprint because it isn't instrumented.
What is measurable today: token volumes per feature, request counts per user
workflow, and the ratio of cached to fresh calls. Teams that track cost per
request already have the proxy — the same instrumentation that produces a
[token and cost dashboard](/learn/production/token-and-cost-tracking) produces
the usage data a footprint estimate is built from. The responsible-AI move is
to record the estimate and its uncertainty in the system brief rather than
pretend the line item doesn't exist.

## Where these live

Consent and contestability belong in the
[governance artifacts](/learn/responsible-ai/governance-artifacts) — data
note for the first, risk register and incident runbook for the second.
Environmental cost belongs in the system brief next to the operating-cost
numbers. All three get a review date, because "we'll think about it later"
unrecorded is indistinguishable from "we never thought about it."

## Go deeper

- [Governance artifacts that make responsible AI operational](/learn/responsible-ai/governance-artifacts) — where these decisions get recorded.
- [Privacy, fairness, and accessibility](/learn/responsible-ai/privacy-fairness-and-accessibility) — the sibling obligations.
- [Human escalation queues](/learn/production/human-escalation-queues-for-low-confidence-output) — the infrastructure contestability runs on.
- [Token and cost tracking](/learn/production/token-and-cost-tracking) — the instrumentation an impact estimate starts from.
