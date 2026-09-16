---
title: "Agent Skills Cheatsheet"
track: "agent-skills"
status: live
summary: "The skill-authoring reference — what goes in SKILL.md, progressive disclosure, and the security checks before installing one."
updated: "2026-09-16"
duration: "6 min read"
---

The Agent Skills track compressed to what goes in the file, how disclosure works, and what to check before trusting a skill.

## SKILL.md anatomy in one line each

- **name** — the invocation key; short, unique, verb-able.
- **description** — the trigger surface; the agent reads this to decide relevance, so write it like routing metadata, not marketing.
- **The body** — instructions loaded when the skill fires; procedures, constraints, pointers to bundled files.
- **Bundled resources** — scripts, templates, references the skill can load on demand instead of stuffing the body.

## Progressive disclosure in one line each

- **Metadata always loaded** — name + description; the cheap relevance signal.
- **Body loaded on invoke** — the full instructions only when the skill is actually used.
- **Resources loaded on demand** — files the skill references only when the task needs them.
- **The point** — a library of skills costs metadata tokens, not context window.

## Skill vs the adjacent primitive

| If the need is… | Use | Not |
|---|---|---|
| Reusable procedure with resources | Skill | A pasted prompt |
| Always-on guidance | A rule | A skill (skills fire on demand) |
| An external capability | MCP tool | A skill (skills are instructions, not tools) |
| Deterministic automation | A hook | A skill (hooks run on events, not reasoning) |
| Delegated subtask | A subagent | A skill (skills augment this agent) |

## The security checks before installing

- **Read the whole file** — a skill is instructions your agent will follow; it's a prompt with a build step.
- **Check the bundled scripts** — a skill that shells out can do anything the agent can.
- **Provenance** — where did it come from, who maintains it, is it pinned?
- **Scope of authority** — does it ask for tools or permissions it shouldn't need?

## The authoring rules that matter

- Write the description for the router, not the reader — it's how the skill gets found.
- Keep the body procedural — a skill is a recipe, not an essay.
- Push reference material to bundled files — the body is for what runs, not what explains.
- Test the trigger — does it fire when it should, and not when it shouldn't?

**Related:** [SKILL.md anatomy](/learn/agent-skills/skill-md-anatomy), [Skill vs prompt, rule, hook, MCP, subagent](/learn/agent-skills/skill-vs-prompt-rule-hook-mcp-subagent), [Skill security and provenance](/learn/agent-skills/skill-security-and-provenance)
