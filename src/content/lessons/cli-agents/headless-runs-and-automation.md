---
title: "Headless runs, structured output, and scheduled agent tasks"
track: "cli-agents"
status: live
summary: "CLI agents aren't only interactive — non-interactive flags, JSON/structured output, and scheduling turn them into automation primitives for CI, batch jobs, and long-running work."
duration: "9 min read"
sources: ["claude-code-docs", "openai-codex-repo", "gemini-cli-repo", "aider-docs"]
---

## The short answer

Interactive sessions are the visible half of CLI agents; the automation
half is **non-interactive mode** — a single prompt in, a result out, no
keystrokes: `claude -p "…"`, `codex exec "…"`, `gemini -p "…"`, `aider
--message "…"`. Combine that with **structured output** (JSON schemas,
stream-json events) and **scheduling** (cron, CI triggers) and the
agent becomes a cron-able worker: nightly dependency audits, PR
summaries, doc drift checks — jobs that need judgment but not a human
at the keyboard.

## The three building blocks

- **Non-interactive execution** — one prompt, one run, exit code.
  The flags differ per tool but the shape is identical: everything the
  agent needs must be in the prompt or the repo, since nobody's there
  to answer questions. Design prompts accordingly — a headless task
  needs the full [task contract](/learn/agentic-ai/agent-task-contracts):
  objective, scope, acceptance criteria, and *what to do when blocked*
  (fail loudly, don't guess).
- **Structured output** — machine-readable results instead of prose:
  JSON-schema-constrained output, or event streams (stream-json) that
  let a wrapper script watch tool calls in real time. Structured output
  is what makes the run *composable* — a nightly job that emits
  `{violations: [...]}` can feed the next stage; one that emits an essay
  can't.
- **Scheduling** — cron/systemd timers for periodic jobs, CI triggers
  (on PR, on merge, nightly) for repo-bound work. The killer
  combination is scheduled + headless + a fixture: "every night, run
  the dependency audit against `package.json`, open a PR if anything's
  flagged" — the
  [headless CLI agents](/learn/harness-design/headless-cli-agents)
  lesson covers the general pattern.

## The operating rules for unattended agents

Nobody's watching, so the [permission dial](/learn/cli-agents/permissions-sandboxes-and-git-workflow)
has to be mechanical: a headless agent runs inside a sandboxed
environment (container/VM) with scoped credentials — never ambient
secrets. Log everything (the run transcript is your only debugging
artifact), bound the run (max turns/time — an unbounded agent in a
retry loop is an invoice generator), and make failure loud: a
non-zero exit or a `status: "blocked"` in the structured output beats
a silent wrong answer. For long-running work, the job should checkpoint
— a crashed 3-hour task that resumes from a checkpoint is an
inconvenience; one that restarts is a loss ([recovery](/learn/cli-agents/multi-agent-and-recovery)).

## The honest limits

Headless removes the human-in-the-loop — which is the point, and also
the risk. Every failure mode an interactive session would catch (vague
task → wrong direction, blocked → guesses, ambiguous result →
plausible-sounding wrong answer) ships straight to whatever consumes
the output. Unattended agents earn autonomy gradually: start with
read-only/reporting jobs, promote to file-changing jobs only after the
reporting runs prove the judgment is sound.

## The exercise

Wrap a reporting task you currently do manually (e.g. "list every TODO
older than 6 months with file and owner") as a headless run with JSON
output, then cron it weekly. The design work — prompt completeness,
schema, failure mode — *is* the lesson.

## Go deeper

- [Headless CLI agents](/learn/harness-design/headless-cli-agents) — the harness-design view.
- [Permissions and git workflow](/learn/cli-agents/permissions-sandboxes-and-git-workflow) — the boundary settings.
- [Customizing the agent](/learn/cli-agents/customizing-the-agent-surface) — MCP, skills, hooks for richer automation.
