---
title: "Agent Skills: Common Mistakes"
track: "agent-skills"
status: live
summary: "The eight skill-authoring and skill-installing mistakes — bloated bodies, vague triggers, unvetted bundles, and skills that should be rules."
duration: "8 min read"
---

The mistakes that make skills fire wrong, bloat context, or ship unvetted instructions to the agent.

## 1. A skill that should be a rule

**The mistake.** Always-on guidance ("prefer TypeScript," "our API uses snake_case") packaged as a skill — it only fires when invoked, so the guidance is absent most of the time.

**The fix.** Rules for always-on guidance; skills for on-demand procedures. If you want it in every session, it isn't a skill.

## 2. A vague description that never fires

**The mistake.** `description: "A helpful skill for various tasks"` — the router can't match it to anything, so the skill is dead code.

**The fix.** Write the description as routing metadata: what it does, when it applies, the trigger words. "Creates a SKILL.md for a new Codex skill — use when authoring skills" fires; "helpful assistant" doesn't.

## 3. The body stuffed with reference material

**The mistake.** Hundreds of lines of documentation in the body — all loaded into context on every invoke, most of it irrelevant to the current task.

**The fix.** Progressive disclosure: the body holds the procedure; reference material moves to bundled files the skill reads on demand.

## 4. Installing a skill without reading it

**The mistake.** A third-party skill installed on reputation — it's instructions your agent will follow, and nobody read them.

**The fix.** Read the whole SKILL.md and every bundled script. A skill is a prompt with a supply chain; unvetted is uninstalled.

## 5. A skill that duplicates a tool

**The mistake.** A skill whose procedure is "call this API" — the skill wraps a capability that should be an MCP tool, adding a reasoning step around a deterministic call.

**The fix.** Tools for capabilities (API calls, data access); skills for procedures (how to do a task). A skill that exists to make one call is a tool wearing a skill's clothes.

## 6. No failure path in the procedure

**The mistake.** The skill describes the happy path — and the agent improvises when the API errors or the file is missing.

**The fix.** The procedure includes the failure branches: "if the command fails with X, do Y; if the file is absent, stop and report." The agent's improvisation is where incidents live.

## 7. Secrets or environment assumptions baked in

**The mistake.** The skill hardcodes a path, a key, or an environment detail — breaks on any machine that isn't the author's.

**The fix.** Parameterize environment specifics; secrets come from the environment, never the file. A skill is portable instructions, not a local config.

## 8. No versioning or provenance

**The mistake.** A skill updated silently — the procedure changed, the agent's behavior changed, nobody noticed.

**The fix.** Pin versions, record provenance, review updates like dependency updates. A skill is a dependency — the same rules apply.

**Related:** [Agent skills cheatsheet](/learn/agent-skills/agent-skills-cheatsheet), [Evaluating and porting skills](/learn/agent-skills/evaluating-and-porting-skills), [Skill security and provenance](/learn/agent-skills/skill-security-and-provenance)
