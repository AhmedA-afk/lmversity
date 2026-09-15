---
title: "The Agent Skills spec and progressive disclosure"
track: "agent-skills"
status: live
summary: "Agent Skills is an open specification for packaged know-how — a SKILL.md plus resources that agents load progressively: metadata always, body on trigger, files on demand."
duration: "9 min read"
sources: ["agent-skills-spec"]
---

## The short answer

**Agent Skills** is an open specification (initiated by Anthropic, now
cross-vendor) for packaging procedural knowledge so any compatible
agent can use it. A skill is a directory: a `SKILL.md` — YAML
frontmatter (`name`, `description`) plus a markdown body — optionally
with scripts, reference docs, and assets beside it. The design
principle is **progressive disclosure**: the agent loads the skill in
stages — name+description always in context, the full body only when a
task matches, bundled files only when the body says to use them. A
hundred installed skills cost a few lines of context each until the
moment one is actually needed.

## Why skills exist

The alternative shapes all fail at scale: stuff every procedure into
the system prompt and the context fills with irrelevant know-how;
make every procedure a tool and the model gets rigid APIs instead of
adaptable guidance; paste instructions per task and nothing
accumulates. A skill is the missing middle: **know-how that sits
dormant until relevant** — the spec formalizes the package so it can
be shared, versioned, installed, and audited like a dependency.

## The three disclosure levels

```
Level 1 — always loaded:  name + description (the trigger surface)
Level 2 — on match:       SKILL.md body (the procedure)
Level 3 — on demand:      scripts/, references/, assets/
                         (loaded only when the body references them)
```

The mechanism shapes the authoring rules: the *description* is the
retrieval key — a vague description means the skill never triggers or
triggers on the wrong tasks; the *body* should stay focused because
its whole content lands in context on every use; and heavy material
(examples, API details, templates) belongs in bundled files the agent
reads only mid-task.

## Skill in the stack

A skill is *guidance*, not capability — it can't give the agent a new
action, it tells the agent how to use the actions it already has
(file tools, shell, MCP tools). That distinction drives everything
else in this track: skills compose with tools, they don't replace
them — see [the full vocabulary](/learn/harness-design/agent-stack-vocabulary).

## The honest limits

Progressive disclosure is only as good as the trigger — a skill whose
description doesn't match how users phrase the task silently never
loads, and nothing tells you it missed. And "open specification" is
young: the core (SKILL.md + frontmatter) is stable, but conventions
around dependencies, versioning, and host-specific fields still vary
between agents — the spec page is the source of truth, and this
track's lessons flag where portability is real vs assumed
([porting](/learn/agent-skills/evaluating-and-porting-skills)).

## The exercise

Look at your own repeated workflows and pick the one you'd write down
for a new teammate — that's your first skill candidate. The
description-writing exercise in the next lesson is where most skills
are won or lost.

## Go deeper

- [SKILL.md anatomy](/learn/agent-skills/skill-md-anatomy) — every field, what it's for.
- [Skill vs prompt vs rule vs hook vs MCP vs subagent](/learn/agent-skills/skill-vs-prompt-rule-hook-mcp-subagent) — choosing the right mechanism.
- [The agent stack vocabulary](/learn/harness-design/agent-stack-vocabulary) — where skills sit in the taxonomy.
