---
title: "Cursor"
description: "Cursor mapped: the AI-first editor's agent workflows, rules and project context, Plan Mode, multi-model selection, background agents, and the review loop — plus what being editor-first costs and buys."
vendor: cursor
covers: ["coding-agent", "consumer-product"]
verifiedAt: "2026-09-15"
related:
  - /providers/github-copilot
  - /providers/windsurf
  - /learn/cli-agents/planning-modes-and-patch-review
sources:
  - cursor-docs
---

## What this page covers

**Cursor** — the AI-first editor (a VS Code fork rebuilt around the agent): the product that made "the editor *is* the agent" the category's other pole vs CLI-first tools. Verified against Cursor docs on 2026-09-15.

## Product map

- **The agent** — understand codebase → plan (Plan Mode) → build → fix bugs → review: the full loop inside the editor, with diffs and checks before merge.
- **Rules and context** — project rules (`.cursor/rules`), memories, and project context the agent carries — Cursor's equivalent of the repo-instruction conventions.
- **Multi-model selection** — the model picker is a feature, not a lock: Claude 4.5/4.6/4.7 Opus and Sonnet variants, Fable 5.x, plus other providers — per-model context/capability/cost notes are published in the docs (long-context surcharges, Max Mode, privacy notes per model — unusually transparent).
- **Background agents** — cloud-running tasks parallel to local work, plus Slack/Linear-triggered work.
- **Customization** — plugins, skills, MCP, rules from one customization surface.
- **Integrations** — GitHub, GitLab, Azure DevOps, Bitbucket, JetBrains, Slack, Linear — workflow connectivity beyond the editor.

## The positioning point

Cursor's bet: the IDE itself is the harness — codebase indexing, inline diffs, and the plan-build-review loop are native, not bolted on. Its model-agnostic stance (pick per task) is the other differentiator vs vendor-tied agents. The costs: it's a fork — your extensions/keybindings mostly port, but it *is* a different editor to adopt; and agent-intensive use is subscription-priced.

## When to choose it

**Choose Cursor when** your team wants agent workflows without leaving the editor, when per-task multi-model choice matters (the published model table is genuinely informative), or when Plan Mode's scope-first-then-build flow matches how your engineers work.

**When not to choose it.** If your team won't switch editors, CLI/IDE-plugin agents (Claude Code, Copilot) cover the same workflows in place. Terminal-native/headless CI automation is not its center — pair it with a CLI tool for that.

**Migration considerations.** Rules/MCP/skills conventions are category-portable; the editor integration (indexing, inline UX) is the product — you migrate *to* Cursor, not off pieces of it.
