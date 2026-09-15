---
title: "Evaluating skills with fixtures, and porting them across agents"
track: "agent-skills"
status: live
summary: "A skill is behavior, so test it like behavior — fixture tasks with expected artifacts measure whether it triggers and performs — and porting across agents means checking what each host actually supports, not assuming."
duration: "9 min read"
sources: ["agent-skills-spec", "anthropic-skills-repo"]
---

## The short answer

A skill changes agent behavior, so it's testable like any other
behavior change: build **fixtures** — task prompts with expected
artifacts — and run them with and without the skill. Does it trigger
when it should, stay quiet when it shouldn't, and produce the artifact
the skill promises? The same discipline then governs **porting**: a
skill moving between agents (Claude Code, Codex, Gemini CLI, others)
keeps the portable core (SKILL.md structure, instructions, files) but
each host's trigger mechanics, supported fields, and script
environment differ — port by verifying behavior per host, not by
assuming identical.

## The fixture-based eval

The eval unit for a skill is a **task → artifact** pair:

```
fixtures/
├── should-trigger/
│   ├── task-1.md        — "migrate this module to the new API"
│   └── expected.md      — what correct output looks like (or a
│                          checklist: files touched, pattern applied)
└── should-not-trigger/
    └── task-2.md        — adjacent-but-wrong task (skill should stay out)
```

What to measure:

- **Trigger rate** — does the skill fire on tasks it should? A skill
  that never triggers is dead weight; one that triggers on
  `should-not-trigger` tasks is worse — it's actively polluting
  unrelated work (description too broad — back to
  [anatomy](/learn/agent-skills/skill-md-anatomy)).
- **Artifact quality** — does the output match the expected artifact:
  procedure followed, format right, scripts actually used? A skill
  whose steps the agent skips is guidance that didn't land.
- **Regression on update** — rerun fixtures on every skill edit; a
  body tweak that "improves" the prose can silently break the
  behavior. Skills get the same
  [regression-suite](/learn/evals-red-teaming/building-a-regression-suite)
  discipline as prompts.

## Porting across agents

The portable core — `name`, `description`, body markdown, bundled
files — moves cleanly. What doesn't:

- **Trigger mechanics** — how/when the host loads Level-1 metadata and
  matches it varies; a description tuned for one agent's matching may
  under- or over-trigger on another. Re-test trigger rate after
  porting.
- **Host-specific fields** — frontmatter beyond `name`/`description`
  (allowed-tools, license, metadata blocks) may be ignored or error
  elsewhere. Keep portable skills to the common subset.
- **Script environment** — a `scripts/` helper assuming `bash` + a
  binary may not exist under another host or OS. Scripts are the least
  portable layer — wrap them or document requirements.
- **Install location & discovery** — each agent reads skills from its
  own paths; the *file* is portable, the *wiring* isn't.

The rule: **port the file, verify the behavior** — the same fixture
suite answers "does it still work" on the new host, which is a better
question than "is it the same file."

## The honest limits

Fixture evals measure the cases you wrote — a skill's real trigger
space is every future prompt, and adversarial or ambiguous phrasing is
where mismatches hide. And portability guarantees are thin while the
ecosystem is young: assume *structure* ports and *behavior* needs
re-verification, never the reverse.

## The exercise

Write three fixtures for a skill you use (or drafted in the
[anatomy exercise](/learn/agent-skills/skill-md-anatomy)): two
should-trigger, one should-not. Run them; the should-not-trigger case
is usually the surprise — broad descriptions fail there first.

## Go deeper

- [SKILL.md anatomy](/learn/agent-skills/skill-md-anatomy) — what the fixtures exercise.
- [Skill security and provenance](/learn/agent-skills/skill-security-and-provenance) — eval complements review.
- [Skill projects and capstone](/learn/agent-skills/skills-projects-first-skill-and-capstone) — the tested-skill deliverable.
