---
title: "How to use OpenAI Codex (the coding agent): workflow and habits"
description: "How to use OpenAI Codex, the coding agent: what it does, a practical session workflow, sandboxing and review habits, and where to find current docs."
intent: howto
updated: "2026-09-08"
featured: false
faq:
  - q: "What is OpenAI Codex?"
    a: "Codex is OpenAI's coding agent, offered as a CLI and integrations, that can read a codebase, plan changes, edit files, run commands, and iterate toward a task inside your own development environment."
  - q: "Is OpenAI Codex the same as the original 2021 Codex model?"
    a: "No. The current Codex is a coding agent product; the original Codex was an earlier OpenAI model that powered early GitHub Copilot. The name has been reused for different things, so check what a given article is actually describing."
  - q: "How do I install OpenAI Codex?"
    a: "Installation and supported platforms change, so check github.com/openai/codex and platform.openai.com for the current install command rather than relying on an older guide."
  - q: "Can Codex run commands and edit files on its own?"
    a: "Yes, within a sandboxed environment and permission model you configure. Like other coding agents, it should ask before taking actions you haven't approved, and you control how much autonomy it gets."
  - q: "Should I use Codex or Claude Code?"
    a: "Both are agentic coding tools with a similar shape: read code, plan, edit, run commands, iterate. The practical difference is which model and ecosystem you prefer and how each integrates with your existing tools, so try a small task in each on your own codebase before committing."
related:
  - /learn/agentic-ai/coding-agent-architecture
  - /learn/harness-design/what-is-a-harness
  - /learn/harness-design/headless-cli-agents
  - /learn/harness-design/sandboxing-technology-choices
  - /learn/harness-design/deny-floors-and-policy-layers
  - /blog/agents-need-a-harness
---

OpenAI Codex is OpenAI's coding agent: a CLI, with IDE integrations, that reads your repository, plans a change, edits files, runs commands and tests, and iterates until a task is done, with your approval at each step. Treat it like any coding agent: give it a scoped task, review its plan, and check every diff before you commit.

## The short version

- Codex is OpenAI's coding agent product, distinct from the earlier 2021 Codex model. Confirm which one a given article is describing before trusting its claims.
- It works the way most modern coding agents do: it reads your project, proposes or takes actions, runs commands, and shows you the results.
- Install and setup commands change over time. Use github.com/openai/codex and platform.openai.com as the source of truth instead of a cached guide.
- Give it a single, well-scoped task per session rather than an open-ended request to "improve this codebase."
- Understand its sandboxing and permission model before granting broad autonomy, especially for anything that can run shell commands.
- Review diffs and run your own tests. An agent's confidence in its own output is not evidence that the output is correct.

## What Codex is, generically

Codex sits in the same category as tools like Claude Code: a harness built around a model that can read and edit files and run commands inside your own environment, working through multi-step tasks rather than answering with a single block of code. The name is worth a moment of care, because it's been reused. The original Codex, from 2021, was a model that powered early versions of GitHub Copilot. The current Codex is a distinct coding agent product. Because install steps, exact flags, and platform availability change quickly for tools like this, this page describes the general workflow rather than a specific command. Check github.com/openai/codex and platform.openai.com for current install and usage instructions before you start.

## A practical first session

Point it at a real, running project rather than a toy example, since most of the value comes from how it handles an existing codebase. Ask it to explain a piece of the code before asking it to change anything, as a quick check on how well it has understood the project. Then give it one bounded task, such as fixing a specific failing test or adding a narrowly scoped feature. For anything that touches more than a file or two, ask it to lay out its plan before it starts editing. Keep the session focused: long, open-ended sessions are where agents tend to drift from what you actually wanted.

## Sandboxing and permissions

Like other coding agents, a well-configured Codex setup runs commands inside some form of sandbox and asks before taking actions outside what you've approved. Learn the practical difference between being allowed to read files, being allowed to edit files, and being allowed to run arbitrary shell commands in whatever configuration you're using, and set that deliberately rather than accepting the most permissive default without thinking about it. This is the area where getting the defaults wrong is the most common way people get burned by any coding agent, not just Codex specifically, so it's worth reading the current platform documentation on exactly how sandboxing and approvals work rather than assuming.

## Reviewing its output

Read the diff. Run the tests yourself. Treat a Codex session's output the way you'd treat a contractor's pull request: often correct, genuinely helpful, and still not something you merge unread. Watch in particular for changes outside the stated scope of the task, since coding agents will sometimes "fix" adjacent things you didn't ask about, and those changes are easy to miss if you're only skimming for the part you expected to see.

## Habits that make it more useful

Keep tasks small and independently verifiable, and break larger requests into steps with a test or check at the end of each one. Give it the same context you'd give a new contractor joining the project: where things live, what conventions to follow, and what not to touch. Prefer asking it to write or run tests over asking it to simply confirm that something works, since a model's self-reported success is not the same as verification. And use version control aggressively: commit before a session starts, review carefully after it ends, and don't be reluctant to discard a branch that went sideways rather than trying to salvage it.

## Working through a multi-file change

Once a task touches more than a file or two, resist the urge to describe the whole feature in one instruction and walk away. Break it into steps that each leave the project in a state you can actually run, so you catch a wrong turn early rather than after everything has changed. Ask it to explain what it changed and why once a larger edit is done, and check that explanation against the real diff rather than accepting it on trust, since a model's summary of its own work can miss or misdescribe what actually happened. If a session has clearly gone off track, it's often faster to discard it and start a smaller, more tightly scoped one than to keep steering a session that's already made a series of decisions you wouldn't have made.

## Common mistakes people make with any coding agent

A handful of mistakes show up repeatedly with tools in this category, Codex included. Handing over an entire feature or refactor as one vague instruction instead of breaking it into checkable steps is the most common. Approving every permission prompt out of habit until the agent effectively has unrestricted access, without ever deciding that on purpose, is the second. Trusting a test suite the agent itself just modified is the third; if it touched test files as part of a change, read what those tests actually assert before trusting that they prove anything. None of this is specific to Codex, but it's worth watching for regardless of which coding agent you're using.

## Codex vs. other coding agents

The shape of the work is similar across tools in this category: read, plan, edit, run, iterate, all sitting behind a permission layer that controls how much autonomy the agent has. Where tools differ is model behavior, ecosystem integrations, and the specifics of the sandboxing and approval model, which are worth testing directly on your own codebase rather than assuming from marketing copy. Anthropic's Claude Code and OpenAI's Codex are the two most visible examples of this category as of this writing. Trying a real, representative task in each is a better way to choose than reading comparisons.

## Where LMVersity fits

LMVersity's Harness Design and Agentic AI tracks explain the mechanics underneath tools like this: sandboxing technology choices, permission and deny-floor design, hooks, and headless operation. That background is useful for evaluating any coding agent, Codex included, on its actual design rather than its marketing. It's free and has no certificate.

## Go deeper

- [/learn/agentic-ai/coding-agent-architecture](/learn/agentic-ai/coding-agent-architecture) — how coding agents like this are built
- [/learn/harness-design/what-is-a-harness](/learn/harness-design/what-is-a-harness) — the harness concept behind Codex, Claude Code, and similar tools
- [/learn/harness-design/sandboxing-technology-choices](/learn/harness-design/sandboxing-technology-choices) — Docker, gVisor, Firecracker, and other sandbox choices
- [/learn/harness-design/deny-floors-and-policy-layers](/learn/harness-design/deny-floors-and-policy-layers) — designing permission boundaries no prompt can override
- [/learn/harness-design/headless-cli-agents](/learn/harness-design/headless-cli-agents) — running agents from a terminal
- [/blog/agents-need-a-harness](/blog/agents-need-a-harness) — why the model alone is not the product

For the current install command and usage details, see [github.com/openai/codex](https://github.com/openai/codex) and [platform.openai.com](https://platform.openai.com).
