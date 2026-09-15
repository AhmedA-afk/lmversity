---
title: "IDE Coding Agents: Cline, Roo Code, Continue, Amazon Q, Junie, Sourcegraph"
description: "The IDE-extension agents mapped as a category: Cline, Roo Code, Continue, Amazon Q Developer, JetBrains AI/Junie, and Sourcegraph Cody/Amp — what distinguishes each and how to evaluate the extension tier."
vendor: cline
covers: ["coding-agent"]
verifiedAt: "2026-09-15"
related:
  - /providers/cursor
  - /providers/github-copilot
  - /learn/cli-agents/getting-the-agent-oriented
sources:
  - cline-docs
  - roocode-docs
  - continue-docs
  - amazon-q-docs
  - junie-docs
  - sourcegraph-docs
---

## What this page covers

**The IDE-extension tier** — coding agents that live *inside* your existing editor as extensions, rather than being a forked IDE (Cursor/Windsurf) or a terminal agent. Six demand-supported entries verified 2026-09-15 — evaluated as a group because the honest comparison is per-task, not per-marketing-page.

## The six shapes

| Agent | What it actually is |
|---|---|
| **Cline** | Open-source VS Code extension — autonomous agent (plan/act modes, file edits, command execution, browser use, MCP) with BYO model keys. The category's OSS reference point. |
| **Roo Code** | The Cline-family fork (originally Roo Cline) that went its own direction — modes/customization depth beyond upstream, same VS Code-extension shape. |
| **Continue** | Open-source autopilot for VS Code and JetBrains — configurable assistants, autocomplete + chat + agent, `config.yaml`-driven, BYO models including local. The "own your assistant" entry. |
| **Amazon Q Developer** | AWS's IDE + CLI agent — code assistance inside IDEs plus the AWS-native angle (console, infrastructure, AWS service context). The cloud-vendor entry. |
| **JetBrains AI / Junie** | JetBrains' two answers: AI Assistant (inline/chat inside IntelliJ-family IDEs) and Junie (the autonomous coding agent plugin) — native to the JetBrains ecosystem. |
| **Sourcegraph Cody/Amp** | Sourcegraph's agents: Cody (the assistant, strong on codebase context via Sourcegraph's code-graph) and Amp (the newer agent surface). The code-search-native entry. |

## The category read

Three distinct bets inside "IDE extension": **open-source extensions** (Cline, Roo, Continue — BYO keys, inspectable, community-iterated); **platform-vendor extensions** (Amazon Q, JetBrains Junie — agents that are also ecosystem distribution); and **context-native** (Sourcegraph — agent built on existing code intelligence). The extension tier's shared advantage: zero editor migration; shared limit: the host IDE's extension API bounds what the agent can do vs a purpose-built editor.

## When to choose this tier

**Choose the extension tier when** staying in your current IDE is the constraint (JetBrains shops especially — Junie/Continue/Copilot-in-JetBrains cover it), when BYO-model and open-source inspectability matter (Cline/Roo/Continue), when your AWS estate wants a vendor-native agent (Amazon Q), or when code-search context at scale is the differentiator (Sourcegraph).

**When not to choose it.** Extension APIs constrain the UX — the purpose-built editors (Cursor/Windsurf) go deeper on the agentic editing loop; terminal/CI work needs a CLI agent; delegated cloud work needs a cloud surface.

**Migration considerations.** The OSS trio carry low lock-in (BYO keys, standard configs); vendor extensions tie you to their platform's roadmap. Evaluate on your actual repos — see the task-comparison lab rather than picking on feature lists.
