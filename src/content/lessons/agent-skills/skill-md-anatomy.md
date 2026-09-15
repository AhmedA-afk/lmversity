---
title: "SKILL.md anatomy: frontmatter, body, and bundled resources"
track: "agent-skills"
status: live
summary: "Every part of a skill package — the name/description frontmatter that decides triggering, the body's scope, and how scripts, references, and assets keep the context lean."
duration: "10 min read"
sources: ["agent-skills-spec", "anthropic-skills-repo"]
---

## The short answer

A skill is a directory with one required file:

```
my-skill/
├── SKILL.md          — frontmatter + instructions (required)
├── scripts/          — executable helpers the agent can run
├── references/       — docs the agent reads mid-task
└── assets/           — templates, fixtures, files used in output
```

`SKILL.md` is YAML frontmatter — **`name`** and **`description`** are
the load-bearing fields — followed by a markdown body. Everything else
is optional support material the agent pulls in only when the body
points at it.

## The frontmatter

- **`name`** — the skill's identifier; lowercase-hyphen convention,
  matching the directory.
- **`description`** — the *trigger surface*: this is what the agent
  matches user tasks against at Level 1
  ([progressive disclosure](/learn/agent-skills/agent-skills-spec-and-progressive-disclosure)).
  Write it as retrieval copy, not marketing: "when the user asks to
  X, Y, or Z" — name the situations and vocabulary that should match.
  A description that says what the skill *is* but not *when to use it*
  is the most common reason skills never fire.

Host-specific fields exist (license, allowed-tools, metadata,
dependency declarations) — check the target agent's docs before
relying on them; the portable core is `name` + `description`.

## The body

The body is the procedure itself — the guidance the agent gets at
Level 2. Authoring rules that come straight from the disclosure model:

- **Keep it scoped** — the entire body enters context on every
  trigger; a skill that tries to cover five workflows is five times
  the cost on every run and confuses the trigger. One job per skill.
- **Instructions, not essays** — the body is operational guidance for
  a capable model: steps, decision points, constraints, examples where
  they teach the *shape* — not documentation of the domain.
- **Delegate bulk to files** — long references (full API specs,
  example banks, template files) go in `references/` and `assets/`;
  the body names them ("read `references/api.md` for field details")
  and the agent fetches them only when needed — Level 3.

## Scripts, references, assets

- **scripts/** — executable helpers the body instructs the agent to
  run (a linter, a transform, a fixture generator). Scripts make a
  skill *deterministic where it matters*: the model decides when to
  run them, the script guarantees correctness — and they're the part
  of a skill that deserves [code review](/learn/agent-skills/skill-security-and-provenance).
- **references/** — reading material loaded mid-task.
- **assets/** — files used *in* the output: templates to fill,
  boilerplate to copy, fixtures to run against.

## Versioning and installation

Skills install as directories under the agent's skills path (user-
level `~/.config/<agent>/skills/`, project-level `.devin/skills/` or
equivalent — paths vary per agent). Version like code: keep skills in
git, tag releases, and treat a skill update as a behavior change
worth a note in the file — there's no lockfile ecosystem yet, so the
version discipline is yours ([porting](/learn/agent-skills/evaluating-and-porting-skills)
covers cross-agent drift).

## The honest limits

There's no package manager enforcing this anatomy — nothing stops a
bloated body or a script with a supply-chain problem; the spec defines
the shape, not the quality. And the trigger is still a judgment call
made by a model: the best-authored skill still relies on description
matching, which [evaluation](/learn/agent-skills/evaluating-and-porting-skills)
exists to measure.

## The exercise

Take a procedure you know cold and draft just the frontmatter — name
plus a description a model could match on. Then have someone (or an
agent) read *only* the description and say when it should trigger. If
their answer isn't your intent, the description is wrong — not the
matcher.

## Go deeper

- [The skills spec](/learn/agent-skills/agent-skills-spec-and-progressive-disclosure) — the disclosure model this anatomy serves.
- [Skill security and provenance](/learn/agent-skills/skill-security-and-provenance) — auditing scripts before install.
- [Skill projects](/learn/agent-skills/skills-projects-first-skill-and-capstone) — build one end to end.
