---
title: "Project: A Security Review of a Real LLM Feature"
track: "llm-security"
status: live
summary: "Threat-model an actual LLM feature, run an injection suite against it, and produce dispositions that change the release."
duration: "1–2 weeks"
---

**Prerequisites:** [OWASP LLM and agentic top 10](/learn/llm-security/owasp-llm-and-agentic-top-10) and [Prompt injection testing and threat models](/learn/llm-security/prompt-injection-testing-and-threat-models).

Take a real LLM feature — yours or a documented one — and produce a security review that finds real risks and changes something.

## The brief

The deliverable is a review package: a threat model of the feature, an executed attack suite, findings with dispositions, and at least one change the review caused. The feature can be a RAG system, a tool-using agent, a support chatbot — anything with an LLM in a trust boundary.

## The components

1. **Threat model** — the assets (what can be leaked or damaged), the trust boundaries (where untrusted input enters), and the attack surface (which capabilities the model can reach).
2. **Attack suite** — a scripted set of tests against the live feature: direct injection on every input path, indirect injection through every tool/fetch path, exfiltration probes, and an agency bound check on every callable capability.
3. **Findings with dispositions** — each finding marked fixed / accepted / mitigated, with a named owner and a reason.
4. **The change** — evidence the review produced an effect: a control added, a gate tightened, a feature's scope narrowed, or a release delayed.

## Mock / deterministic mode

If the feature isn't yours to attack, build a minimal reproduction of the same architecture and test the reproduction — the review's value is the method and the findings, not the specific target.

## Acceptance criteria

- The threat model names assets, boundaries, and the attack surface — not "injection is bad" but "the fetched-content path is a boundary, and here's what crosses it."
- The attack suite ran — findings cite actual behavior, not hypothetical.
- Every finding has a disposition and an owner.
- At least one finding changed something — the review had teeth.

## Failure injection

- Feed the feature a direct injection on each input path — does any obey?
- Feed a tool/fetch output containing instructions — does the next call expand permissions?
- Attempt an exfiltration via output — does a filter or reviewer catch it?

## Milestones

1. Threat model complete with named boundaries.
2. Attack suite built and executed.
3. Findings dispositioned.
4. The change documented — what the review altered.

## Portfolio note

"Threat-modeled a production RAG feature, ran a 20-prompt injection suite, produced 4 findings, 3 fixed before release" is a stronger signal than "familiar with OWASP."

## Defend this build

- Which boundary was weakest, and what control now covers it?
- Which finding was hardest to disposition, and why?
- What did the attack suite miss — where would a more capable attacker look next?
- What would make this review process repeatable for the next feature?

**Related:** [LLM security cheatsheet](/learn/llm-security/llm-security-cheatsheet), [LLM security mistakes](/learn/llm-security/llm-security-mistakes), [Audit logs and accountability](/learn/llm-security/audit-logs-and-accountability)
