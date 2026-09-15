---
title: "Claude Code"
description: "Anthropic's coding agent mapped: CLI/IDE/desktop/web/mobile surfaces, CLAUDE.md project memory plus auto memory, skills, hooks, MCP, subagents, permissions, and the Agent SDK for building on it."
vendor: anthropic
covers: ["coding-agent"]
verifiedAt: "2026-09-15"
related:
  - /providers/anthropic
  - /providers/openai-codex
  - /learn/cli-agents/customizing-the-agent-surface
  - /learn/cli-agents/headless-runs-and-automation
sources:
  - claude-code-docs
---

## What this page covers

**Claude Code** — Anthropic's agentic coding tool: reads your codebase, edits files, runs commands, and integrates with dev tools across five surfaces. Verified against Claude Code docs on 2026-09-15.

## Product map

- **Surfaces** — Terminal CLI (native install, Homebrew, WinGet, apt/dnf/apk); VS Code extension (works in Cursor too); JetBrains plugin; a **desktop app** (visual diff review, parallel sessions, *scheduled recurring tasks*, cloud sessions); **web** at claude.ai/code; and mobile via the Claude app.
- **Project memory** — `CLAUDE.md` at the repo root (read every session) plus **auto memory** the agent builds as it works — learnings persist without manual curation.
- **Extensibility** — **skills** (shareable packaged workflows like `/review-pr`), **hooks** (shell commands fired before/after agent actions — auto-format on edit, lint on commit), **MCP** for external tools/data, and **subagents** for delegated sub-tasks.
- **Permissions** — the approval model gates tool use; third-party providers are supported on CLI/VS Code/JetBrains (Bedrock/Vertex backends are a documented path).
- **Automation** — headless CLI runs, plus GitHub Actions and GitLab CI/CD integration for automated code review and issue triage.
- **Agent SDK** — the developer surface for building your own agents on the same machinery.

## The differentiation read

Claude Code's bet is configurability-as-ecosystem: CLAUDE.md + hooks + skills + subagents + MCP compose a customization stack deeper than most rivals', and the five-surface spread (especially desktop scheduling and web delegation) covers both interactive and fire-and-forget work.

## When to choose it

**Choose Claude Code when** the customization stack (hooks/skills/subagents) matches how your team encodes workflow, when multi-surface coverage matters (terminal diehards + web delegators in one team), or when third-party-provider routing (Bedrock/Vertex) is an enterprise requirement.

**When not to choose it.** Requires a Claude subscription or Console account — not a free-tier tool. The configuration depth is also a complexity surface: hooks+skills+subagents need the same code-review discipline as the code itself.

**Migration considerations.** CLAUDE.md↔AGENTS.md conventions are cross-readable in practice; MCP and skills are portable-ish standards; hooks and subagents are Claude-specific. `/learn/cli-agents/` teaches the category mechanics beneath any single product.
