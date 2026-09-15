---
title: "OpenCode"
description: "OpenCode mapped: the provider-neutral open-source terminal agent — multi-model support, AGENTS.md project instructions, LSP-aware tooling, plugins, and the TUI/headless split."
vendor: opencode
covers: ["coding-agent"]
verifiedAt: "2026-09-15"
related:
  - /providers/aider
  - /providers/gemini-cli
  - /learn/cli-agents/customizing-the-agent-surface
sources:
  - opencode-docs
---

## What this page covers

**OpenCode** — the open-source, provider-neutral terminal coding agent (`opencode.ai`): the community answer to vendor-tied CLIs. Verified against OpenCode docs on 2026-09-15.

## Product map

- **Provider neutrality** — the headline: one agent over many providers (Anthropic, OpenAI, Gemini, local models, OpenRouter-class aggregators) — model choice per session, not per vendor relationship.
- **Terminal-first** — a TUI (terminal UI) as the interactive surface, plus headless/scriptable runs for automation; the client/server split means sessions can outlive the frontend.
- **Project instructions** — `AGENTS.md` (the cross-tool convention) plus per-project configuration.
- **LSP-aware tools** — language-server integration gives the agent real code intelligence (definitions, references, diagnostics) rather than pure text editing.
- **Plugins and MCP** — extensibility via plugins and MCP servers for external tools/context.
- **Open source** — inspectable, forkable, community-driven; the project's own docs are the product docs.

## The positioning point

OpenCode's bet is *neutrality + openness*: where Gemini CLI is open-source-but-Google-shaped, OpenCode is open-source-and-nobody's — the agent equivalent of "why should my coding tool pick my model vendor." It's the closest the CLI category has to a community-owned reference implementation.

## When to choose it

**Choose OpenCode when** provider neutrality is the requirement (evaluate or switch models without switching tools), when open-source inspectability is a hard constraint, or when you want a modern TUI agent without a vendor subscription relationship.

**When not to choose it.** Community projects move fast and unevenly — feature depth trails the resourced vendor CLIs in places, and "the docs said X" has a shorter shelf life. Enterprise support is the community, not a contract.

**Migration considerations.** Maximum portability by design — AGENTS.md, MCP, and BYO keys mean leaving costs nothing; that's the pitch.
