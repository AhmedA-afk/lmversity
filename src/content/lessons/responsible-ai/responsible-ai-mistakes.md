---
title: "Common Mistakes: Responsible AI in Practice"
track: "responsible-ai"
status: live
summary: "The eight ways responsible-AI work becomes paperwork — the model card written after launch, the risk register nobody owns, and the red team that found nothing."
updated: "2026-09-16"
duration: "8 min read"
---

Responsible AI fails as process: the artifacts exist but the work didn't. These are the mistakes that turn a release gate into a filing cabinet.

## 1. The model card written after launch

**Wrong:** The model card is produced during the launch announcement — its "known limits" were never measured, its claims were never sourced, and it describes the model the team wished it shipped.
**Right:** The card is written during development, with measured limits and sourced claims. A card produced after launch is marketing, not documentation.

## 2. A risk register full of generic risks

**Wrong:** "Bias may occur" and "outputs may be inaccurate" — entries that could apply to any model, owned by no one, mitigated by nothing.
**Right:** Every risk names the mechanism — which input, which failure, which affected party — and has an owner. A generic risk is a placeholder; a concrete one is a decision.

## 3. The red team whose findings never blocked anything

**Wrong:** The red-team report exists, lists concerns, and the release shipped unchanged — the exercise produced a document, not a decision.
**Right:** A red-team finding needs a disposition: fixed, accepted-with-reason, or mitigated. A release where no finding ever changed anything is a red-team exercise that didn't try — or a gate that never had teeth.

## 4. Contestability that ends at a feedback form

**Wrong:** "Users can appeal" means a feedback form that goes to a queue nobody reads — the affected person has no path, no timeframe, no human.
**Right:** Contestability is a process with an owner: where to appeal, what happens, who decides, in what time. A form that goes nowhere is a courtesy, not a channel.

## 5. Consent that was a dark pattern

**Wrong:** The user "consented" via a pre-checked box, a wall of text, or a dialog designed to be dismissed — technically a record of consent, functionally no choice.
**Right:** Consent is informed and reversible. A user who couldn't realistically say no didn't consent — and a consent record from a dark pattern is evidence against you, not for you.

## 6. The impact assessment that only counted users

**Wrong:** The assessment lists who uses the system — and misses everyone affected by it who never touched it: the person scored, the applicant screened, the community it draws data from.
**Right:** Impact includes non-users. The affected party is often someone who never opened the app — count them in the assessment or the assessment is incomplete.

## 7. Fairness measured on a convenient slice

**Wrong:** The fairness check ran on the subgroup that was easy to measure — the one where the model looked fine — and the slice where it failed was never tested.
**Right:** Fairness is measured on the slices where harm is plausible, not where data was convenient. The untested subgroup is usually where the problem lives.

## 8. "We did responsible AI" as a launch claim

**Wrong:** The artifacts exist — card, register, red-team report — and the announcement claims the system is "responsible," converting a process into a property.
**Right:** Responsible AI is ongoing work, not a shipped state. The artifacts are evidence of a process, not proof of an outcome — a system isn't responsible because its paperwork is.

## If you take one habit

Look for the decision, not the artifact. Every item on this list produced a document that looked right — the failure is that nothing changed because of it. The question that separates real work from paperwork: what did this process actually prevent or delay?

**Related:** [Risk before model](/learn/responsible-ai/risk-before-model), [Governance artifacts](/learn/responsible-ai/governance-artifacts), [Responsible release project](/learn/responsible-ai/responsible-release-project), [Red-teaming LLM apps](/learn/responsible-ai/red-teaming-llm-apps)
