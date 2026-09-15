---
title: "Meta Muse Code"
description: "Meta's coding products mapped: Muse Code's CLI workflow and model API, Muse Spark, availability status from official sources, and what the Llama-stack developer surface means for coding-agent evaluation."
vendor: meta
covers: ["coding-agent"]
verifiedAt: "2026-09-15"
related:
  - /providers/meta
  - /providers/claude-code
  - /learn/cli-agents/getting-the-agent-oriented
sources:
  - meta-muse-docs
---

## What this page covers

**Meta's coding-agent surface** — Muse Code (the coding workflow) and Muse Spark — and where they sit next to Meta's open-model strategy. Verified against Meta's developer docs on 2026-09-15; see the [Meta hub](/providers/meta) for the broader product map this page extends.

## Product map

- **Muse Code** — Meta's coding agent surface: a CLI workflow over Meta's coding-capable models, positioned as the developer-facing piece of the Muse family rather than a separate product line.
- **Muse Spark** — the adjacent creative/app-generation surface; distinct from Code's repo-editing workflow.
- **The model layer** — Muse Code runs on Meta's own models (the Llama-family stack), which is the strategic point: Meta's coding agent is the showcase for its model API, not a multi-model harness.
- **Availability** — verify current access at the [Meta hub](/providers/meta)'s linked docs; Meta's developer surface has moved quickly, and availability details are the volatile part this page deliberately doesn't freeze beyond verification date.

## The positioning point

Muse Code is best understood as **model distribution**: Meta ships a coding workflow to demonstrate and drive adoption of its model API — the same play as every model vendor shipping a coding agent, but notable because Meta's models are also the open-weights ecosystem's backbone. Evaluating it means evaluating both the agent workflow *and* whether Meta's model API is your backend.

## When to choose it

**Choose Muse Code when** Meta's model stack is your committed backend (the agent showcases what the API can do), or when evaluating Meta's developer platform as a build target.

**When not to choose it.** For a mature multi-surface coding agent (IDE + cloud + review workflow), the established products (Claude Code, Copilot, Cursor) are deeper — Meta's surface is newer and its docs move fast. Provider-neutral routing isn't the design intent.

**Migration considerations.** The CLI conventions (repo instructions, tool calls) are category-standard; the backend is Meta-specific by design.
