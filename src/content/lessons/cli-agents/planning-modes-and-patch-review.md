---
title: "Planning modes and patch review: the two halves of safe agent work"
track: "cli-agents"
status: live
summary: "CLI agents separate thinking from touching — plan/read-only modes for exploration, execution modes for edits — and your review of the diff is the gate that makes the workflow safe."
duration: "9 min read"
sources: ["claude-code-docs", "openai-codex-repo", "aider-docs"]
---

## The short answer

Every serious CLI agent splits operation into **exploration** and
**execution** — Claude Code's plan mode, Aider's architect/editor split,
Codex's read-only approval tiers, Gemini CLI's similar modes. Use the
read-only half to make the agent *prove it understands the problem*
before it touches a file, then gate the execution half on your diff
review. The plan is the agent's claim; the diff is its evidence.

## Planning vs execution

- **Plan/read-only mode** — the agent can search, read, and reason but
  not write files or run mutating commands. Use it for: unfamiliar
  codebases, ambiguous bugs, anything where a wrong change costs more
  than a slow one. The artifact is a written plan you can reject
  *before* damage — the cheapest possible review.
- **Execution mode** — the agent edits files and runs commands under
  its [permission model](/learn/cli-agents/permissions-sandboxes-and-git-workflow).
  Aider's split makes the pattern explicit: the *architect* model
  proposes the change shape, the *editor* model produces the actual
  diff — two passes so reasoning isn't lost in edit syntax.

The practical loop: vague task → plan mode → read the plan → correct
the misunderstanding *in the plan* (cheap) → execute → review diff.

## Diff review that actually works

The patch is where agent work lives or dies — reviewing it well is a
skill, not a formality:

- **Read the diff, not the summary.** "I updated the auth logic" means
  nothing; `git diff` shows what actually changed. Agents summarize
  optimistically.
- **Check the edges first** — error paths, the second and third call
  site of what it changed, imports it touched. Agents get the happy
  path right more often than the edges.
- **Run the tests, don't trust the claim.** "Tests pass" from the agent
  means it ran *some* command successfully; verify the suite yourself —
  especially whether it touched the tests to make them pass (a real
  failure mode: fixing the test instead of the bug).
- **Small diffs review better.** A 30-line patch gets read; a 600-line
  patch gets skimmed. Prefer several agent runs producing reviewable
  increments over one heroic rewrite — see
  [failure recovery](/learn/cli-agents/multi-agent-and-recovery) for
  decomposing big tasks.

## The honest limits

Plan mode is only as good as what the agent explored — a confident plan
built on three files when the real dependency graph has thirty is a
confident wrong plan. And review fatigue is real: the tenth diff of a
long session gets less scrutiny than the first, which is exactly when
agents drift — cadence beats stamina.

## The exercise

Give an agent a bug that needs a two-file fix, in plan mode. Read its
plan, then *before* approving, ask it which other files call the
function it's changing — if it didn't check, you just caught what the
plan missed. Then execute and review the diff against the plan line by
line.

## Go deeper

- [Permissions, sandboxes, and git workflow](/learn/cli-agents/permissions-sandboxes-and-git-workflow) — the guardrails under execution mode.
- [Headless runs and automation](/learn/cli-agents/headless-runs-and-automation) — when there's no human reviewing.
- [Getting the agent oriented](/learn/cli-agents/getting-the-agent-oriented) — what feeds the plan.
