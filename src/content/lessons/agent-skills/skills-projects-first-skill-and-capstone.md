---
title: "Projects: build your first skill, then turn a workflow into a tested one"
track: "agent-skills"
status: live
summary: "Two builds — a small first skill to learn the mechanics end to end, and a capstone that takes a real repeated workflow through authoring, fixtures, audit, and porting."
duration: "10 min read"
sources: ["agent-skills-spec"]
---

## The short answer

Two projects that close the track. **Project 1** is deliberately small:
author a complete, working skill for one narrow task — the point is
the mechanics (directory, frontmatter, trigger, body, install), not
ambition. **Project 2** is the capstone: take a workflow you actually
repeat and run it through the whole discipline — scope the skill,
author it, write fixtures, run the [security audit](/learn/agent-skills/skill-security-and-provenance),
eval trigger rate and artifacts, and port it to a second agent. The
first proves you can make a skill; the second proves you can make a
*good* one.

## Project 1 — your first skill

Pick the smallest real task you do with an agent more than once —
formatting a release note, scaffolding a component, the house-style
commit message. Then:

1. **Scaffold** — `my-first-skill/SKILL.md` in your agent's project or
   user skills directory.
2. **Frontmatter** — `name` matching the directory; a `description`
   written as trigger copy: the situations and phrasing that should
   fire it, not a description of what it contains
   ([anatomy](/learn/agent-skills/skill-md-anatomy)).
3. **Body** — the procedure as instructions to a capable model:
   steps, constraints, the one example that shows the shape. Under a
   page — bulk goes to files.
4. **Install + trigger** — place it where the agent reads skills and
   run a task phrased the way a user would actually ask. Did it fire?
   If not, the description is wrong — the most instructive failure
   there is.
5. **Iterate once** — fix the trigger, rerun. Done.

Deliverable: a working skill you could hand a teammate.

## Project 2 — workflow to tested skill (capstone)

Take a workflow you repeat weekly — a migration pattern, a review
protocol, a deploy checklist — and run the full pipeline:

1. **Scope** — write the task contract first: what the skill does,
   when it should trigger, what it must *not* do. One job — if the
   workflow is three, it's three skills.
2. **Author** — frontmatter + scoped body + any scripts/references/
   assets the procedure needs ([anatomy](/learn/agent-skills/skill-md-anatomy)).
3. **Audit yourself** — run the
   [installation checklist](/learn/agent-skills/skill-security-and-provenance)
   on your own work: would *you* install this? Scripts reviewed,
   scope minimal, no hidden actions?
4. **Fixture eval** — three+ fixtures: should-trigger tasks, a
   should-not-trigger task, and the expected artifact per task.
   Measure trigger rate and artifact quality, not vibes
   ([eval](/learn/agent-skills/evaluating-and-porting-skills)).
5. **Port** — install it under a second compatible agent and rerun
   the fixtures. Document what transferred and what didn't — the diff
   is the lesson.
6. **Version it** — put it in git with a README: what it does, the
   fixtures, known host differences. It's now a real artifact, not a
   file on your laptop.

## What a pass looks like

- Skill triggers on its fixture tasks, not on the negative case.
- Output matches the expected artifacts.
- The audit checklist passes — scripts reviewed, scope honest.
- Fixtures rerun cleanly on the second host, with differences noted.

## The honest limits

A tested skill still degrades quietly — model updates shift trigger
behavior, the workflow drifts, and nothing alerts you. Skills are
living artifacts: rerun the fixtures when the model or host updates,
exactly like a [regression suite](/learn/evals-red-teaming/building-a-regression-suite).

## Go deeper

- [The skills spec](/learn/agent-skills/agent-skills-spec-and-progressive-disclosure) — the foundation.
- [Evaluating and porting](/learn/agent-skills/evaluating-and-porting-skills) — the eval mechanics the capstone uses.
- [Skill security and provenance](/learn/agent-skills/skill-security-and-provenance) — the audit.
- [Customizing the agent surface](/learn/cli-agents/customizing-the-agent-surface) — where skills sit among the other extension points.
