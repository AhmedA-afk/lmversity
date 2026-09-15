---
title: "NIST AI RMF and MITRE ATLAS: governance frameworks and adversary tactics"
track: "llm-security"
status: live
summary: "NIST's AI Risk Management Framework structures how organizations govern AI risk; MITRE ATLAS catalogs how adversaries actually attack AI systems — one is the management layer, the other the threat layer."
duration: "8 min read"
sources: ["nist-ai-rmf", "mitre-atlas"]
---

## The short answer

Two frameworks that get name-dropped together but do different jobs:
**NIST AI RMF** is a *management* framework — Govern / Map / Measure /
Manage functions for organizations that need a defensible process for AI
risk, with sector and use-case profiles that narrow it to your context.
**MITRE ATLAS** is a *threat* framework — an ATT&CK-style catalog of
adversary tactics and techniques against AI systems specifically, built
from observed incidents. Use RMF to answer "how do we run AI risk as a
program"; use ATLAS to answer "what would an attacker actually do to this
system."

## AI RMF: the four functions

- **Govern** — accountability structures: who owns AI risk, what policies
  exist, how incidents escalate. The function most teams skip and most
  audits ask about first.
- **Map** — establish context: what the system does, who it affects,
  what could go wrong. This is where the
  [governance artifacts](/learn/responsible-ai/governance-artifacts) like
  model cards and risk assessments live.
- **Measure** — evaluate: trustworthiness properties (validity, safety,
  fairness, privacy, transparency) assessed with actual evidence — this
  is where your [eval suite](/learn/evals-red-teaming/why-evals-matter)
  plugs into the governance layer.
- **Manage** — act on what measurement finds: mitigations, monitoring,
  incident response, and the decision to ship, restrict, or retire.

The honest read: RMF is deliberately technology-neutral — it won't tell
you *how* to test a prompt-injection defense, it tells you that you need
a documented process showing the risk was mapped, measured, and managed.
For a team facing procurement questionnaires or regulated-industry
review, "our process follows the RMF functions" is the sentence that
unblocks the conversation.

## MITRE ATLAS: the adversary's view

Where RMF asks "is your risk managed," ATLAS asks "managed against
*what*." It catalogs tactics (reconnaissance, resource development,
initial access, …) and techniques specific to AI systems — prompt
injection, evasion attacks on model inputs, model extraction, data
poisoning, supply-chain compromise of model artifacts — with real-world
case studies. Its practical use: a [threat model](/learn/llm-security/prompt-injection-testing-and-threat-models)
written against ATLAS techniques is grounded in observed attacks rather
than imagination, and a red-team plan scoped to ATLAS coverage is
defensible as *systematic*, not just adversarial.

## Where each belongs in a workflow

```
threat model (ATLAS techniques)
    ↓ feeds
risk register (RMF Map)
    ↓ tested by
evals & red-teaming (RMF Measure)
    ↓ gated by
ship decision + monitoring (RMF Manage)
    ↓ reported under
policies & accountability (RMF Govern)
```

Neither replaces engineering controls — they organize them. The OWASP
list says *what goes wrong*, ATLAS says *how attackers cause it*, and
RMF says *how your organization proves it paid attention*.

## The honest limits

Frameworks generate paper as easily as they generate safety — an RMF
compliance binder around an untested system is governance theater, and
an ATLAS-based threat model that never drives a test is a poster. Both
frameworks assume the real work (instrumentation, evals, controls) is
happening underneath; they're scaffolding for evidence, not substitutes
for it.

## The exercise

Take the threat model from the injection lesson and relabel each threat
with its ATLAS technique ID — the exercise exposes whether your threats
were attack-shaped or just worry-shaped.

## Go deeper

- [OWASP Top 10 for LLM and agentic apps](/learn/llm-security/owasp-llm-and-agentic-top-10) — the risk taxonomy this pairs with.
- [Prompt-injection testing and threat models](/learn/llm-security/prompt-injection-testing-and-threat-models) — where ATLAS techniques become tests.
- [Governance artifacts](/learn/responsible-ai/governance-artifacts) — the documents RMF's Map function consumes.
