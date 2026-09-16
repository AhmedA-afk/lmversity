---
title: "LLM Security Cheatsheet"
track: "llm-security"
status: live
summary: "The LLM-security reference — the OWASP top items as decisions, where each control lives, and the tests that prove the boundary."
updated: "2026-09-16"
duration: "6 min read"
---

The LLM-security track compressed to the threat → control map and the checks that prove each boundary.

## The threats and where the control lives

| Threat | The control | Never in |
|---|---|---|
| Prompt injection (direct) | Input untrusted by construction; least-privilege tools | The system prompt saying "don't obey" |
| Prompt injection (indirect/via tools) | Tool output treated as data; boundaries on the next call | Trusting fetched content as instructions |
| Data exfiltration | Scoped retrieval + output filtering | The model deciding what to share |
| Insecure output handling | Output validated/encoded before it hits a sink | Rendering model output raw |
| Excessive agency | Capability allowlists + approval gates | A general shell or an unconstrained loop |
| Supply chain | Pinned models/skills/MCP servers + provenance | "Latest" tags and unvetted installs |
| Sensitive-info disclosure | Redaction at the boundary + scoped context | Logging raw prompts with secrets |

## The controls that must exist

- **Tool allowlists** — the callable surface is declared; undeclared calls reject by construction.
- **Scoped retrieval** — the model sees the data the task needs, not the corpus.
- **Output validation** — model output is untrusted input to the next system.
- **The audit trail** — every tool call, every policy verdict, recorded.
- **A red-team suite that gates release** — the attacks are scripted, run, and dispositioned.

## The tests that prove the boundary

- **Direct injection suite** — "ignore prior instructions" variants against every user-input path.
- **Indirect injection** — a tool output containing instructions; the next call must not obey them.
- **Exfiltration probe** — a prompt asking for data outside the scoped retrieval.
- **Agency bound** — a call outside the allowlist must be rejected, not reasoned about.

## The failure modes in one line each

- **The prompt as the boundary** — "don't do X" in the system prompt; the first injection obeys.
- **Tool output trusted as instruction** — a fetched page's embedded instruction runs the agent.
- **The model as the policy** — asking the model whether a call is safe is asking the attacker.
- **Raw output to a sink** — model output rendered as HTML/SQL/shell without validation.
- **Unversioned dependencies** — a model or skill update silently changes the security posture.

## Which lesson for which question

- "What are the threats?" → [OWASP LLM and agentic top 10](/learn/llm-security/owasp-llm-and-agentic-top-10)
- "How do I test injection?" → [Prompt injection testing and threat models](/learn/llm-security/prompt-injection-testing-and-threat-models)
- "How do I bound execution?" → [Sandboxing, code execution, and browser use](/learn/llm-security/sandboxing-code-execution-and-browser-use)
- "How do I audit it?" → [Audit logs and accountability](/learn/llm-security/audit-logs-and-accountability)

**Related:** [LLM security practice](/practice/llm-security), [NIST AI RMF and MITRE ATLAS](/learn/llm-security/nist-ai-rmf-and-mitre-atlas), [LLM supply chain security](/learn/llm-security/llm-supply-chain-security)
