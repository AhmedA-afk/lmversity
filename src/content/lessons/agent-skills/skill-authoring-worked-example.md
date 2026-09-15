---
title: "Worked Example: Authoring a Skill That Actually Fires"
track: "agent-skills"
status: live
summary: "A 'weekly report' skill built end to end — the description that makes it findable, the body that stays lean, and the resource file that carries the detail."
duration: "10 min read"
---

A skill that doesn't fire is a file nobody reads. This example authors one — a weekly-status-report skill — and shows where each piece of progressive disclosure earns its place.

## The task

The team writes a weekly status report from git log + issue tracker + a Slack export. The procedure is stable (gather, group by project, draft highlights and blockers) but has enough detail that it shouldn't live in a rule or a repeated prompt.

## The description — written for the router

```yaml
name: weekly-status-report
description: >-
  Draft a weekly status report from git log, issue-tracker exports,
  and a notes file. Use when the user asks for a weekly update, status
  report, or "what shipped this week" summary.
```

The description carries the trigger phrases ("weekly update," "status report," "what shipped") because that's what the agent matches against. Vague descriptions ("reporting helper") don't fire; this one does.

## The body — the procedure only

The body is the recipe, not the documentation:

1. Collect inputs: `git log --since="7 days ago"`, the tracker export at `reports/issues.csv`, the notes file if present.
2. Group commits and closed issues by project area (the mapping lives in `project-areas.md` — read it).
3. Draft highlights (shipped), in-progress, and blockers sections.
4. If the tracker export is missing, proceed with git-only and note the gap — don't fabricate tracker data.

The failure path is a step, not an afterthought — step 4 names what to do when an input is missing.

## The resource file — the detail on demand

`project-areas.md` — the mapping of commit-prefix → project-area, plus examples of past reports. It's 80 lines the skill doesn't need until step 2, so it lives in a bundled file the body references, not in the body itself. Loaded on demand, absent otherwise.

## What would break without the structure

- **Everything in the body** — the 80-line mapping loads on every invoke; the skill costs context even when only the procedure is needed.
- **No trigger phrases in the description** — "draft the weekly report" doesn't match "reporting helper"; the skill never fires.
- **No failure path** — the missing tracker export produces either a fabricated section or an improvised one; the step that names the gap produces an honest one.

## The check

A skill is done when: the description fires on the phrases a user would actually say, the body is the procedure with its failure branches, and the detail lives in resources that load on demand.

**Related:** [SKILL.md anatomy](/learn/agent-skills/skill-md-anatomy), [Agent skills mistakes](/learn/agent-skills/agent-skills-mistakes), [Skill vs prompt, rule, hook, MCP, subagent](/learn/agent-skills/skill-vs-prompt-rule-hook-mcp-subagent)
