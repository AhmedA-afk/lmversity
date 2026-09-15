---
title: "Skill vs prompt vs project rule vs hook vs MCP vs subagent"
track: "agent-skills"
status: live
summary: "Six mechanisms that all 'extend the agent' in different ways — the chooser for when repeated behavior should become a skill and when it should be something else entirely."
duration: "9 min read"
sources: ["agent-skills-spec"]
---

## The short answer

"Make the agent do X" has six mechanisms, and picking the wrong one is
the most common skills-era mistake. A **skill** is packaged know-how
that loads when relevant; a **prompt** is one-shot instruction;
a **project rule/instruction file** is always-on guidance; a **hook**
is deterministic code at a lifecycle event; an **MCP server** is new
capability (tools/data); a **subagent** is a delegated worker loop.
The test isn't "which can express it" — most can — it's *who decides
when it runs* and *what it costs*.

## The decision table

| Mechanism | Who triggers it | Cost when idle | What it's for |
|---|---|---|---|
| Prompt | You, per message | Nothing (dies with the task) | One-off direction |
| Project rule | Always on | Context on every run | Universal facts every task needs |
| Skill | Model, by task match | A description line | Procedural know-how used *sometimes* |
| Hook | Lifecycle event | Nothing (runs on event) | Guarantees the model can't talk past |
| MCP server | Model, as a tool | Config + protocol overhead | New *capabilities* — actions and data |
| Subagent | Model, delegates | A separate run | Subtasks needing isolated context |

## Where each one wins — and fails

- **Prompt** — right for one-off tasks; wrong for anything you'll say
  twice. "I keep re-explaining this" is the signal to promote it
  ([the capstone](/learn/agent-skills/skills-projects-first-skill-and-capstone)).
- **Project rule** — right for genuinely universal facts ("tests are
  `npm test`, never edit `generated/`"); wrong for anything
  conditional — a rule about deploys taxes every non-deploy run with
  irrelevant context. The failure mode is accumulation: rule files
  grow into junk drawers nobody dares prune.
- **Skill** — right for procedures used *sometimes*: release
  checklists, house-style migrations, review protocols. The trigger is
  the description, so the failure mode is silent non-triggering —
  a rule always applies, a skill applies *when matched*.
- **Hook** — right for guarantees: lint after edits, block `.env`
  reads, snapshot on stop. A hook fires *regardless of what the model
  intends* — that's the whole point; if the model could talk its way
  around it, it isn't a hook's job.
- **MCP server** — right for *capability*, not know-how: "the agent
  can't query our tickets" needs a tool; "the agent should follow our
  triage process" needs a skill. The confusion between the two
  produces MCP servers that are really just prompt templates.
- **Subagent** — right for delegation where the parent shouldn't carry
  the detail: isolated context, scoped tools, a returned result. For
  parallel independent work, it's the mechanism — for "how to do X
  well," it's overkill ([delegation](/learn/harness-design/subagent-and-task-delegation)).

## The common confusions

- **Skill vs rule** — same content, different trigger: always-true →
  rule; situationally-true → skill.
- **Skill vs command** — a slash command is a *user-triggered* skill:
  same packaged procedure, different finger on the trigger.
- **Skill vs MCP** — a skill can *use* an MCP tool (the body instructs
  the agent to call it); it can't *provide* one. No capability, only
  know-how.
- **Skill vs hook** — a skill advises, a hook enforces. "The model
  should remember to run the linter" → hook. "How to fix what the
  linter finds" → skill.

## The honest limits

Boundaries blur in practice — hosts implement these differently, and
a "skill" in one agent may carry hook-like triggers in another. The
chooser here is the mental model, not a contract; check the target
agent's mechanics when the distinction matters
([porting](/learn/agent-skills/evaluating-and-porting-skills)).

## The exercise

List three things you've configured (or would configure) for your
agent and classify each — then check if the one you put in the rules
file is actually conditional (it should probably be a skill).

## Go deeper

- [The agent stack vocabulary](/learn/harness-design/agent-stack-vocabulary) — the full ten-term taxonomy.
- [Customizing the agent surface](/learn/cli-agents/customizing-the-agent-surface) — the same chooser from the CLI side.
- [Skill security and provenance](/learn/agent-skills/skill-security-and-provenance) — what installing any of these implies.
