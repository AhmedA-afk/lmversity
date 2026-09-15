---
title: "OpenAI Codex"
description: "OpenAI's coding agent mapped: the Codex CLI/IDE/web surfaces, repository instructions, skills and MCP, approvals and sandboxing, automation, and the review workflow — as distinct from the API's Agents surface."
vendor: openai
covers: ["coding-agent"]
verifiedAt: "2026-09-15"
related:
  - /providers/openai
  - /providers/claude-code
  - /learn/cli-agents/getting-the-agent-oriented
  - /learn/cli-agents/permissions-sandboxes-and-git-workflow
sources:
  - openai-codex-docs
---

## What this page covers

**OpenAI Codex** — the coding-*product* family (CLI, IDE extension, web/cloud agent), distinct from the API's Agents surface even though they share plumbing. Verified against OpenAI's Codex docs on 2026-09-15.

## Product map

- **Surfaces** — Codex CLI for terminal work; IDE integration; and the cloud/web agent that runs tasks against repositories in the background. The CLI ↔ cloud pairing mirrors the category pattern: local interactivity, cloud for long-running delegation.
- **Repository instructions** — `AGENTS.md` in the repo root is Codex's context file (the convention several tools now share); it carries build/test commands, conventions, and review expectations into every session.
- **Skills, MCP, plugins** — Codex participates in OpenAI's plugins architecture (skills + MCP server support), so the same skills/MCP servers you build for ChatGPT-era plugins extend the coding surface.
- **Approvals and sandboxing** — command execution runs under approval modes and sandbox policies; the Agents API beneath it exposes OpenAI-hosted and self-hosted sandboxes with explicit lifecycle and security docs.
- **Automation and review** — headless/CI runs and PR-oriented workflows; review output lands as diffs you approve, not silent commits.
- **Enterprise access** — workload identity federation (incl. GitHub Actions), IP allowlists, Private Link, mTLS — the enterprise-access surface is unusually documented.

## The boundary to understand

Codex-the-product and Agents-API-the-platform are siblings: the product is a configured coding agent; the API is how you'd *build* one. Teams conflate them — "Codex didn't do X" and "the Responses API doesn't support X" are different statements.

## When to choose it

**Choose Codex when** you're an OpenAI shop wanting one vendor for API + coding agent, when `AGENTS.md`-style repo instructions match your documentation habits, or when the cloud-agent delegation model (fire off a task, review a PR later) fits how your team works.

**When not to choose it.** Model choice is OpenAI's lineup — provider-neutral tools let you route tasks to whichever model fits. Sandbox and approval semantics differ from local-CLI agents — evaluate the security model against your repo access policies.

**Migration considerations.** `AGENTS.md` and MCP are portable conventions (Claude Code reads AGENTS.md too; MCP is an open spec). The cloud-agent workflow and plugin architecture are OpenAI-specific.
