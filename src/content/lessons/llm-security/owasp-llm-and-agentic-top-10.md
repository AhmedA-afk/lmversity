---
title: "OWASP Top 10 for LLM and agentic applications"
track: "llm-security"
status: live
summary: "The OWASP GenAI security project maintains the shared taxonomy for LLM and agent risks — prompt injection, sensitive data disclosure, excessive agency — that turns 'secure the AI' into a checkable list."
duration: "9 min read"
sources: ["owasp-genai"]
---

## The short answer

OWASP's GenAI Security Project publishes a Top 10 for LLM applications —
the community-maintained taxonomy of how these systems actually get hurt:
prompt injection, sensitive-information disclosure, supply-chain
vulnerabilities, data/model poisoning, improper output handling,
excessive agency, system-prompt leakage, vector/embedding weaknesses,
misinformation, and unbounded consumption. Its value is shared
vocabulary: "did you think about security" becomes "walk the ten." A
companion agentic-applications list extends the same exercise to
tool-using, multi-step systems.

## The shape of the list

The list's editorial stance matters more than the individual entries:
the dominant risks are *integration* risks, not model risks. Prompt
injection tops the list not because models are fragile but because every
LLM app pipes untrusted text into a privileged context — the same
structural move SQL injection made, one abstraction layer up. Read the
list that way and each entry asks the same question: *where does
untrusted input meet privileged capability?*

The agentic extension sharpens it: when the model doesn't just speak but
*acts*, "improper output handling" becomes "the output is a tool call,"
and "excessive agency" names the failure where a capable agent plus a
broad credential turns a text-manipulation bug into a real-world action —
the confused-deputy shape from [the authority problem](/learn/tools-function-calling/the-authority-problem).

## Using it as a checklist, not trivia

The practical workflow:

1. **Inventory the trust boundaries** — every place user input, retrieved
   documents, tool results, or other agents' output enters the model's
   context ([tool results are an injection vector](/learn/tools-function-calling/tool-results-as-injection-vector)).
2. **Walk the ten** against each boundary — most items either obviously
   apply or obviously don't; the list's job is preventing the third
   category, *never considered*.
3. **Map to controls** — each risk lands on a defense elsewhere in this
   track: injection → [testing and threat models](/learn/llm-security/prompt-injection-testing-and-threat-models),
   agency → [sandboxing](/learn/llm-security/sandboxing-code-execution-and-browser-use),
   supply chain → [artifact integrity](/learn/llm-security/llm-supply-chain-security).

## The honest limits

A Top 10 is a taxonomy, not a certification — "we addressed the OWASP
ten" proves you considered ten categories, not that the system is secure.
And the list moves: the agentic entries especially are still stabilizing
as real attack patterns emerge. Treat it as the current community
consensus to re-check on each release, not a fixed syllabus learned once.

## The exercise

Take one feature you've built and walk the OWASP ten against it in
fifteen minutes — for each item, one sentence: "applies because…" or
"doesn't apply because…". The entries where you can't write either
sentence are your real security backlog.

## Go deeper

- [Prompt-injection testing and threat models](/learn/llm-security/prompt-injection-testing-and-threat-models) — the hands-on complement.
- [NIST AI RMF and MITRE ATLAS](/learn/llm-security/nist-ai-rmf-and-mitre-atlas) — governance frameworks and adversary tactics.
- [Defend against prompt injection](/guides/defend-against-prompt-injection) — the guide-level treatment.
