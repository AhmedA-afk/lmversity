---
title: "Aider"
description: "Aider mapped: the open-source terminal pair-programmer's repo map, chat modes, git-native workflow, per-model configuration, and scripting — the lightweight counter-position to heavyweight agent platforms."
vendor: aider
covers: ["coding-agent"]
verifiedAt: "2026-09-15"
related:
  - /providers/opencode
  - /learn/cli-agents/getting-the-agent-oriented
  - /learn/cli-agents/headless-runs-and-automation
sources:
  - aider-docs
---

## What this page covers

**Aider** — the open-source terminal pair-programmer (Python, `aider.chat`): the deliberately-lightweight entry that made "LLM edits your git repo" a one-command workflow. Verified against Aider docs on 2026-09-15.

## Product map

- **Repo map** — Aider's signature mechanism: a compact map of the codebase (tree-sitter–derived symbols/signatures) that gives the model repository structure without burning the whole context window on file dumps.
- **Chat modes** — `code`, `ask`, `architect`, and others: the mode controls whether the model edits, advises, or plans-then-implements — a deliberate separation between thinking about the change and making it.
- **Git-native workflow** — every change is a commit (or commits) with sane messages; `undo` restores state; the repo is the source of truth for the agent's work. Aider was early and correct on "agent output = git history."
- **Model configuration** — BYO-key across many providers (OpenAI, Anthropic, Gemini, local models, OpenRouter…): per-session model choice, weak/strong model splits (architect mode uses a strong reasoner + cheaper editor), honest per-model cost tracking.
- **Scripting** — scriptable from Python or shell; non-interactive `--message` runs make it CI-friendly; `.aider.conf.yml`/`.aiderignore` carry project configuration.
- **IDE/browser surfaces** — watch mode and copy-paste workflows exist, but the terminal is the center of gravity.

## The positioning point

Aider is the **minimal-complete** entry: no cloud agent, no IDE fork, no subscription — a well-engineered CLI that does repo-aware editing with git discipline and full model freedom. It's the right baseline for evaluating everything else: if a heavier tool can't beat Aider on your tasks, the weight isn't buying anything.

## When to choose it

**Choose Aider when** you want terminal-native pair programming with real git hygiene, when model freedom (including local/self-hosted) is a requirement, when cost transparency matters (per-model splits, usage reporting), or when scripting/CI integration needs a headless-capable agent without platform overhead.

**When not to choose it.** No managed cloud delegation, no visual diff-review surface — it's interactive terminal work, not fire-and-forget. The depth of customization (hooks, subagents, project memory systems) in Claude Code/Copilot-class tools isn't the design intent.

**Migration considerations.** About as low-lock-in as the category gets: BYO keys, git-native output, config files — nothing holds you but habit.
