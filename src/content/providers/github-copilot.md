---
title: "GitHub Copilot"
description: "GitHub Copilot mapped: IDE agent mode, the Copilot CLI (autopilot, /fleet, research), the cloud agent, code review, custom instructions and memory, plugins/skills/hooks/MCP, and repository integration."
vendor: github
covers: ["coding-agent", "consumer-product"]
verifiedAt: "2026-09-15"
related:
  - /providers/claude-code
  - /providers/cursor
  - /learn/cli-agents/permissions-sandboxes-and-git-workflow
sources:
  - github-copilot-docs
---

## What this page covers

**GitHub Copilot** — which is no longer "the autocomplete": it's become a multi-surface agent platform spanning IDE, CLI, cloud, code review, and repository automation. Verified against GitHub Copilot docs on 2026-09-15.

## Product map

- **IDE agent mode** — propose edits, validate files, multi-step work inside VS Code and JetBrains (plus other IDEs); the original inline-completion surface persists alongside.
- **Copilot CLI** — a full terminal agent: `autopilot` autonomous mode, `/fleet` for parallel task decomposition, `/research`, session history ("chronicle"), a rubber-duck critic agent (second model reviews plans/code), LSP-server code intelligence, extensions, tool search, and filesystem-policy local sandboxing. Remote-control sessions from web/mobile.
- **Copilot cloud agent** — repository research → implementation plan → changes on a branch → your review → PR. Plus **automations** (scheduled/event-driven runs with rationale, confidence ratings, and approval holds) and **agent management** (central control page across sessions).
- **Code review** — PR review that identifies issues and suggests applicable fixes.
- **Customization** — custom instructions, **Copilot Memory** (repo + preference facts across sessions), **hooks** (shell commands at agent-execution points), **plugins** (packages of agents+skills+hooks+integrations), **MCP** for the cloud agent.
- **Repository integration** — assign issues to Copilot, Agentic Workflows (natural-language automation in GitHub Actions), the Copilot app for parallel workstreams and PR lifecycle, and an SDK for Copilot-powered apps.

## The positioning point

Copilot's moat is **repository gravity**: the agent lives where the code, issues, PRs, and Actions already are. The cloud agent + automations + Actions integration make it the most "the repo does the work" product in the category — the tradeoff is that it's the GitHub-est answer, best when GitHub is your home.

## When to choose it

**Choose Copilot when** your workflow is GitHub-native (issues→agent→PR→review→Actions is a coherent loop competitors can't replicate), when you want agent coverage across IDE *and* CLI *and* cloud *and* automation from one subscription, or when enterprise governance through GitHub's controls is already in place.

**When not to choose it.** The surface is broad and fast-moving — "Copilot" now means six different products; onboarding effort is matching surfaces to workflows. If you're not GitHub-centric, the core advantage evaporates. Model choice is GitHub's menu — capable, but not per-task provider routing.

**Migration considerations.** Custom instructions/memory/hooks/plugins are Copilot-shaped; MCP is portable; the cloud-agent and Actions automations are deeply GitHub-coupled — they're the value and the lock-in in one.
