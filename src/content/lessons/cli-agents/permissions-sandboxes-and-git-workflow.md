---
title: "Permissions, sandbox boundaries, and git workflow with CLI agents"
track: "cli-agents"
status: live
summary: "Approval modes from ask-everything to full-auto, what sandbox flags actually isolate, and the git discipline — branches, worktrees, reviewable commits — that keeps agent work recoverable."
duration: "10 min read"
sources: ["claude-code-docs", "openai-codex-repo", "gemini-cli-repo"]
---

## The short answer

CLI agents ship a dial between *ask before everything* and *run without
asking* — Claude Code's permission modes, Codex's sandbox/approval
policies, Gemini CLI's sandboxing flags. Set the dial by *what the repo
can lose*, not by how much you trust the model today. Around the dial,
two disciplines make agent work safe: **sandbox boundaries** (what the
environment physically prevents) and **git discipline** (branches,
worktrees, and commits that make every change reviewable and
revertable).

## The permission dial

Roughly three settings everywhere:

1. **Ask on everything** — every file write and shell command needs a
   keypress. Right for: unknown repos, production checkouts, anything
   with secrets in reach. Wrong for: long mechanical tasks — you'll
   approve-numb and start hitting yes blindly, which is worse than an
   honest broader mode.
2. **Workspace-scoped auto** — file edits inside the project auto-approve;
   shell commands, network, and writes outside the workspace still ask.
   The everyday mode for known repos.
3. **Full auto / YOLO** — everything approved, usually *only* valid
   inside a real sandbox (container, VM, or OS-level jail — Codex
   sandboxes seatbelt-style on macOS/Linux, Gemini CLI can sandbox via
   containers). The rule: broad autonomy is fine when the *environment*
   provides the boundary; never when the boundary is just the model's
   goodwill.

## What sandboxes actually isolate

A sandbox flag is only as strong as its mechanism — check what yours
does: filesystem jails stop writes outside a path but may still allow
*reads* of `~/.ssh` or `.env`; network policies are the bigger hole —
an agent that can `curl` anywhere can exfiltrate whatever it can read.
The complete answer for untrusted work is a disposable environment
(container, cloud VM) with no credentials — the same
[sandboxing logic](/learn/llm-security/sandboxing-code-execution-and-browser-use)
as tool execution, one level up. A repo you don't trust gets *no*
ambient secrets, period — instruction files and code in an untrusted
repo are [prompt-injection vectors](/learn/cli-agents/cli-agent-labs)
aimed at your agent.

## The git discipline

- **Branch per task** — agent work goes on a feature branch, never main;
  `git diff main...HEAD` is your review surface.
- **Worktrees for parallelism** — `git worktree add` gives each agent
  its own checkout; two agents in one directory will overwrite each
  other's uncommitted work ([multi-agent](/learn/cli-agents/multi-agent-and-recovery)).
- **Commits as checkpoints** — commit (or ask the agent to) at each
  verified increment; a green test run → commit. Recovery from a bad
  agent turn becomes `git reset --hard` to the last good checkpoint
  instead of an archaeology dig.
- **PRs and CI as the outer gate** — agent-authored code gets the same
  PR + CI treatment as human code; the agent can draft the PR, but the
  merge decision stays human ([patch review](/learn/cli-agents/planning-modes-and-patch-review)).

## The honest limits

Permission prompts are only as safe as your attention — a mode that
asks forty times an hour trains you to stop reading what you're
approving (dialectic: pick the mode you'll actually pay attention in).
And worktrees isolate the *working tree*, not shared state — two agents
on the same database, same dev server port, or same deploy pipeline
will still collide.

## The exercise

Run the same small refactor twice: once in ask-everything mode counting
how many approvals were rubber-stamps, once in workspace-auto on a
branch with commits at each green test run. Compare what you actually
*read* in each mode — that's your honest permission level.

## Go deeper

- [Sandboxing code execution](/learn/llm-security/sandboxing-code-execution-and-browser-use) — the security layer under the convenience flags.
- [Multi-agent and recovery](/learn/cli-agents/multi-agent-and-recovery) — worktrees and handoffs at scale.
- [The security lab](/learn/cli-agents/cli-agent-labs) — untrusted-repo exercise.
