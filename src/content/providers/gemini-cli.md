---
title: "Google Gemini CLI"
description: "Google's open-source terminal agent mapped: authentication tiers, GEMINI.md context files, built-in tools and MCP, extensions, checkpointing, and headless/CI scripting."
vendor: google
covers: ["coding-agent"]
verifiedAt: "2026-09-15"
related:
  - /providers/google
  - /providers/claude-code
  - /learn/cli-agents/getting-the-agent-oriented
  - /learn/cli-agents/headless-runs-and-automation
sources:
  - gemini-cli-repo
---

## What this page covers

**Gemini CLI** — Google's open-source terminal coding agent (Apache-2.0, `google-gemini-cli/gemini-cli` on GitHub). Verified against the repository on 2026-09-15.

## Product map

- **Authentication tiers** — personal Google-account login (free-tier Gemini access), API key, or Vertex AI for enterprise — the tiered-auth model determines rate limits and which model you get.
- **Context files** — `GEMINI.md` project instructions, hierarchical (directory-scoped files layer context), plus importable context.
- **Built-in tools** — file ops, shell execution, web fetch/search grounding, memory; **MCP** support for external servers; an **extensions** system packages tools/prompts/context.
- **Checkpointing** — snapshot/restore of file state around agent edits, the safety net for letting it touch your tree.
- **Headless and CI** — non-interactive invocation for scripting and CI pipelines; it's the piece that turns a chat CLI into automation.
- **Open source** — the repo is the product: inspectable, forkable, and the extension/MCP surface is documented there rather than in a managed-docs portal.

## The positioning point

Gemini CLI's differentiation is *open-source + free-tier entry*: it lowered the barrier to trying a terminal agent (personal Google account, no subscription) and made the harness itself inspectable — the counter-position to Claude Code's managed-subscription depth and Codex's cloud delegation.

## When to choose it

**Choose Gemini CLI when** cost-to-try matters (free tier is the real on-ramp), when an inspectable/forkable harness is a requirement (security review, customization beyond config), or when you're a Google/Vertex shop wanting the same auth story as the rest of your estate.

**When not to choose it.** Terminal-only — no managed cloud agent, no desktop/web delegation surface like Claude Code or Codex offer. Model lineup is Gemini — fine if that's your pick, a constraint if you want per-task model routing.

**Migration considerations.** GEMINI.md↔AGENTS.md/CLAUDE.md conventions interoperate loosely; MCP and extensions are portable concepts. Being open source, it forks rather than migrates — the escape hatch is the codebase.
