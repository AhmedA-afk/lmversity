---
title: "Prompt-injection testing tools and a threat-model template that works"
track: "llm-security"
status: live
summary: "Garak's vulnerability probes and Promptfoo's red-team generator automate injection testing; a four-question threat-model template — assets, boundaries, adversaries, actions — makes the testing systematic."
duration: "9 min read"
sources: ["garak-repo", "promptfoo-redteam"]
---

## The short answer

Manual "try some jailbreaks" doesn't scale — two tools automate it:
**garak** (NVIDIA's open-source scanner) probes an LLM endpoint with
families of known attack patterns — injection, jailbreaks, data-leak
probes, encoding tricks — and reports what got through; **Promptfoo's
red-team mode** generates adversarial test cases *from your own
application config* — your prompt, your tools, your policies — which is
the difference between generic probes and attacks shaped like your
system. Neither replaces the thinking: a threat model that names your
assets, trust boundaries, and adversaries tells the tools what matters.

## The testing tools

- **garak** — the breadth scanner: point it at a model endpoint and it
  runs probe families (prompt injection variants, DAN-style jailbreaks,
  malware-generation lures, PII-extraction attempts, encoding/obfuscation
  attacks) with detectors that score success. Its value is coverage of
  *known* attack shapes — the "did we miss the obvious class" check.
- **Promptfoo red team** — the application-shaped attacker: it reads
  your prompt and tool definitions, infers what a successful attack looks
  like for *your* app (exfiltrating the system prompt, calling the
  refund tool without authorization, producing off-policy content),
  generates targeted adversarial inputs, and runs them like a normal
  Promptfoo eval — so red-teaming lands in the same CI gate as your
  [regression suite](/learn/evals-red-teaming/building-a-regression-suite).

The honest division: garak tells you the model's baseline exposure;
Promptfoo tells you whether *your system's* injection surface is
exploited end-to-end.

## The threat-model template

Testing without a threat model finds random bugs; this four-section
template makes it systematic:

```
1. ASSETS      — what must stay protected? (system prompt, user data,
                 credentials, tool authority, the model's integrity)
2. BOUNDARIES  — where does untrusted input enter context?
                 (user text, retrieved docs, tool results, other agents,
                  emails/tickets/pages the system reads)
3. ADVERSARIES — who attacks and how? (curious user, motivated
                 competitor, external content author, insider)
4. ACTIONS     — what does success look like for the attacker — and
                 what's our detection + response for each?
```

Every red-team test should trace to a row in that table; every row in
the table should have a test or an accepted-risk note. That traceability
is what makes a [MITRE ATLAS](/learn/llm-security/nist-ai-rmf-and-mitre-atlas)
mapping or an auditor's "how do you know" answerable.

## What the tools can't test

Scanners probe *text in, text out* — they can't judge whether your
[authorization layer](/learn/tools-function-calling/the-authority-problem)
would have stopped the action, whether the
[sandbox](/learn/llm-security/sandboxing-code-execution-and-browser-use)
contained the exploit, or whether a slow multi-turn social-engineering
sequence crosses a policy that single-turn probes never trigger. Tool
output says "these inputs produced these outputs"; the system's real
posture lives in the layers around the model.

## The honest limits

Attack libraries age — today's probe list is yesterday's attack
literature, and novel injection techniques appear continuously. A green
red-team run means "resists the attacks we tested," a claim with a date
and a test list attached, not "secure."

## The exercise

Fill the four-section template for one feature, then run Promptfoo's
red-team against it — compare what the tool attacked with what your
threat model predicted. The gaps in *both* directions are the lesson.

## Go deeper

- [OWASP Top 10 for LLM and agentic apps](/learn/llm-security/owasp-llm-and-agentic-top-10) — the risk taxonomy the threat model instantiates.
- [Tool results as injection vector](/learn/tools-function-calling/tool-results-as-injection-vector) — the indirect-injection boundary.
- [Red-teaming LLM apps](/learn/responsible-ai/red-teaming-llm-apps) — the broader red-team practice.
