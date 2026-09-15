---
title: "Getting a CLI agent oriented: repo discovery, instruction files, and context control"
track: "cli-agents"
status: live
summary: "How CLI coding agents map an unfamiliar repository — file discovery, AGENTS.md-style instruction files, dependency mapping, and the levers you have over what enters their context."
duration: "9 min read"
sources: ["claude-code-docs", "openai-codex-repo", "gemini-cli-repo", "aider-docs"]
---

## The short answer

Every CLI agent — Codex, Claude Code, Gemini CLI, Aider — starts a task
the same way: build a map of the repository, then read only what the
task needs. Your job as the operator is to shape both halves: give the
agent a **map worth reading** (instruction files, clean structure) and
**levers over what gets pulled into context** (ignore files, explicit
pointers, scoped tasks). The difference between an agent that flails
and one that lands the patch first try is usually orientation, not
model quality.

## How the agent discovers your repo

Agents don't read your codebase — they *sample* it:

1. **Listing** — directory trees and file listings, usually respecting
   `.gitignore` (a 4,000-file `node_modules` never reaches the context
   because the agent's listing tools already know to skip it).
2. **Instruction files** — agents look for their own convention:
   `AGENTS.md` (Codex and the emerging cross-tool convention),
   `CLAUDE.md` (Claude Code), `GEMINI.md` (Gemini CLI), `.cursor/rules/`
   or `.aider.conf.yml`-style config for Aider. These files are
   *always-on project instructions* — injected into every run
   (see [the vocabulary](/learn/harness-design/agent-stack-vocabulary)).
3. **Targeted search** — grep/glob for the symbols your task names,
   then reading the files that match. The agent builds a dependency
   picture transitively: entry file → its imports → the symbols it
   actually touches.

## Your levers

- **Write the instruction file for the agent you're using.** This is
  the highest-leverage artifact in the repo: build/test commands, the
  one architectural rule newcomers always break, where the generated
  files live. An agent without it re-derives all of that every session —
  and sometimes derives it wrong. Keep it terse; it's on every prompt.
- **Curate what search sees.** `.gitignore`-respecting tools mean
  committed junk (fixtures, vendored code, old migrations) pollutes
  search results — agent ignore files (e.g. `.cursorignore`) or simply
  keeping the tree clean pays off.
- **Point, don't dump.** In the task prompt, name the *files* that
  matter — "the bug is in `src/auth/refresh.ts`, look at how
  `session.ts` calls it" — rather than "find the auth bug." A two-line
  pointer beats twenty minutes of transitive discovery.
- **Scope the task to the map.** "Refactor everything to async" forces
  the agent to hold the whole repo in context; "migrate
  `src/api/users.ts` to async, following the pattern in
  `src/api/orders.ts`" gives it a tractable slice plus a template.

## The context-control mindset

Think of the context window as a budget the agent spends on your behalf
([context management](/learn/harness-design/context-window-management-in-a-harness)).
Every irrelevant file it reads is budget spent; every missing file is a
guess it makes. Orientation is the trade: spend context on the few
files that decide correctness, and spend *your* effort on the pointers
and instruction files that make the agent find them.

## The honest limits

Instruction files are advisory, not enforced — a long `CLAUDE.md` gets
partially ignored exactly like a long prompt does, and contradictions
between the file and the task prompt resolve unpredictably. And
discovery quality still varies per tool: some agents index embeddings,
some only grep — the pointers you give are the part that always works.

## The exercise

Open a repo you know in a CLI agent and ask it a deliberately vague
question ("where is validation handled?"). Watch its searches. Then add
a three-line instruction file pointing at the validation layer and ask
again — the second run should reach the right file in one search. That
delta is orientation.

## Go deeper

- [The agent stack vocabulary](/learn/harness-design/agent-stack-vocabulary) — instruction files vs skills vs hooks.
- [Context window management](/learn/harness-design/context-window-management-in-a-harness) — the budget being spent.
- [Planning and execution modes](/learn/cli-agents/planning-modes-and-patch-review) — what happens after orientation.
