---
title: "Tool discovery at runtime: how an agent learns what it can call"
track: "tools-function-calling"
status: live
summary: "Choose between a static tool list, a filtered subset per task, and runtime discovery over a registry — and the failure modes each invites."
duration: "8 min read"
---

## The short answer

There are three ways an agent learns its tools: you hard-code the list into every request, you filter a larger registry down to what the current task needs, or the agent asks the environment what's available at runtime. Static lists are simple and safe; dynamic discovery is flexible and dangerous in new ways. Most production systems use the middle option.

## Why this matters

Every tool you put in context costs tokens and adds a failure surface — models mis-select tools they've only read a description of. But a hard-coded list can't adapt when a new integration ships or when this task only needs two of your forty. The discovery question is really "how much of the tool universe does this call see, and who decided?"

## The three models

**1. Static list.** Every request carries the same tool array. Fine for a handful of stable tools; breaks when the catalog grows — token cost scales linearly, and the model's selection accuracy degrades as descriptions start colliding.

**2. Filtered subset.** You keep a registry — a database or directory of tool entries — and a cheap step (rules, a small classifier, or retrieval over descriptions) picks the 3–8 relevant tools per task. The model never sees the rest. This is what most serious systems converge on: predictable cost, controllable surface.

**3. Runtime discovery.** The agent lists available tools itself — the MCP `tools/list` pattern — then calls what it finds. Maximum flexibility, and the trust boundary moves: a malicious or broken tool that advertises itself well can get selected. Runtime discovery needs allowlists, signed registries, or per-server scoping to stay safe.

## The failure modes by model

| Model | Breaks when | The failure looks like |
| --- | --- | --- |
| Static | Catalog grows past ~a dozen tools | Descriptions blur; model picks the wrong tool confidently |
| Filtered | The filter drops the right tool | Agent claims the task is impossible — the tool existed, it just wasn't shown |
| Runtime | An untrusted or stale server | Hallucinated calls to tools that vanished, or worse, calls to a tool that shouldn't have been advertised |

The filtered model's signature failure deserves emphasis: when the agent says "I can't do that", check the filter before believing it.

## The lab version

Take a task, run it with the full tool list, then with a filtered subset. Measure selection accuracy and token cost on both. The filter pays for itself the first time the full list picks the wrong tool.

## Go deeper

- [The tool-call loop](/learn/tools-function-calling/the-tool-call-loop) — the dispatch loop discovery feeds into.
- [Descriptions are prompts](/learn/tools-function-calling/descriptions-are-prompts) — why discovery quality is description quality.
- [What is MCP?](/learn/mcp/what-is-mcp) — the protocol behind runtime `tools/list` discovery.
