---
title: "Project: A Responsible-AI Release — Risk Register, Model Card, Red-Team Sign-Off"
track: "responsible-ai"
status: live
summary: "Run a model feature through a real release gate — risk assessment, model card, red-team evidence, and a contestability path a user could actually follow."
duration: "25 min read"
---

Responsible-AI work fails as paperwork: a model card written after launch, a risk register nobody reads, a red-team exercise whose findings never blocked anything. This project runs a feature through the gate the way it should work — risk assessed before build decisions, evidence attached, and a named owner for every open risk.

## The brief

Take any model-backed feature (one you built, or the supplied example spec) and produce its complete release package: a risk register with likelihood/impact/owner per risk, a model card or system card documenting intended use and known limits, red-team evidence with findings dispositioned (fixed / accepted / mitigated), an impact-assessment record, and a user-facing contestability path — how an affected person challenges the system's output.

## Prerequisites

- [Risk before model](/learn/responsible-ai/risk-before-model) — the order of operations
- [Governance artifacts](/learn/responsible-ai/governance-artifacts) — what the documents are for
- [Red-teaming LLM apps](/learn/responsible-ai/red-teaming-llm-apps) — the evidence source
- [Consent, contestability, and impact](/learn/responsible-ai/consent-contestability-and-impact) — the user-facing obligation

## Supplied assets and mock mode

The feature under review can be hypothetical or real — a short spec of a model-backed feature is a fine substrate. Red-team evidence can come from a scripted adversarial prompt suite (injection, extraction, off-policy requests) run against any model endpoint or a mock. Everything is document-and-fixture work; no paid services needed.

## Acceptance criteria

- [ ] The risk register lists 8+ concrete risks — each with likelihood, impact, owner, and a mitigation or explicit acceptance; generic risks ("bias may occur") don't count — each must name the mechanism
- [ ] The model card states intended use, out-of-scope uses, training-data provenance as far as known, and measured limits — with a named source for every claim
- [ ] Red-team evidence is real — the suite ran, raw outputs are preserved, every finding has a disposition (fixed / accepted-with-reason / mitigated)
- [ ] At least one finding changed the release — the package shows a red-team finding that altered scope, added a guardrail, or delayed launch; a release where nothing was ever found is a red-team exercise that didn't try
- [ ] The contestability path is concrete — a user could follow it end to end: where to appeal, what happens, who decides, in what timeframe
- [ ] The impact assessment records who is affected, including non-users, and what monitoring would detect harm post-launch

## Failure injection (required)

- [ ] A red-team finding arrives the day before launch — the package shows the disposition process, including who had authority to delay
- [ ] A risk whose mitigation failed in testing — the register updates with residual risk, not a deletion of the entry
- [ ] An affected-party appeal that contests a correct output — the contestability path handles "the system was right but the outcome still harmed me," not just errors

## Milestones

1. **The risk register** — concrete risks with owners; the generality filter applied.
2. **The model card** — every claim sourced, limits measured not assumed.
3. **The red-team run** — evidence preserved, findings dispositioned, one change demonstrated.
4. **The contestability path** — walkable end to end, including the right-but-harmful case.
5. **The release decision** — sign-off naming the residual risks accepted and by whom.

## What good looks like

The package reads like it was written by someone who expects to be audited: every claim sourced, every finding dispositioned, residual risk owned by a name. The strongest signal is a documented "no" or "not yet" — a release gate that has never delayed anything is not a gate.

## For your portfolio

Show the risk register and the one finding that changed the release — the artifact that proves the process had teeth. A model card alone is table stakes; a dispositioned red-team finding is the signal.

## Defend this build

1. Show the risk register — which entry has the weakest mitigation, and who owns it?
2. A finding was "accepted" — what was the reasoning, and what monitoring watches it?
3. Walk a user appeal end to end — where does the process get slow, and who feels that cost?
4. What did red-teaming miss by design — what class of harm is outside your suite's reach?

The pass bar: answers cite the register, the dispositions, and the appeal path — not the concept of responsible AI.

**Related:** [Red-teaming LLM apps](/learn/responsible-ai/red-teaming-llm-apps), [Governance artifacts](/learn/responsible-ai/governance-artifacts), [Privacy, fairness, and accessibility](/learn/responsible-ai/privacy-fairness-and-accessibility), [Adversarial testing lab](/learn/responsible-ai/adversarial-testing-lab)
