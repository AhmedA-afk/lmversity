---
title: "How to use Claude Code: a practical workflow for real codebases"
description: "How to use Claude Code, Anthropic's terminal and IDE coding agent: starting a session, CLAUDE.md, planning before edits, permissions, and reviewing diffs."
intent: howto
updated: "2026-09-08"
featured: true
faq:
  - q: "What is Claude Code?"
    a: "Claude Code is Anthropic's agentic coding tool that runs in your terminal or IDE, reads and edits files in your project, runs commands, and works through multi-step coding tasks with your approval at each step."
  - q: "Does Claude Code work with any programming language?"
    a: "It works with whatever files and commands exist in your project, since it operates through your terminal and file system rather than a language-specific plugin, though how well it performs still depends on the model's familiarity with that language and ecosystem."
  - q: "Is Claude Code safe to run on production code?"
    a: "It asks for permission before running commands or editing files by default, and you control what it can access. Treat it like a capable but literal collaborator: review diffs before committing, and keep it out of secrets and credentials."
  - q: "What is CLAUDE.md for?"
    a: "CLAUDE.md is a file you keep in your repository that gives Claude Code standing context about your project: conventions, commands, architecture notes, and anything you would otherwise repeat to a new teammate."
  - q: "Do I still need to write tests if I use Claude Code?"
    a: "Yes. Tests are how you and the agent both know a change worked. A coding agent without a test loop to check its own work is far more likely to produce code that looks right but isn't."
related:
  - /learn/agentic-ai/coding-agent-architecture
  - /learn/harness-design/what-is-a-harness
  - /learn/harness-design/headless-cli-agents
  - /learn/harness-design/hooks-as-extension-points
  - /learn/mcp/what-is-mcp
  - /blog/agents-need-a-harness
---

Claude Code is Anthropic's agentic coding tool, run from a terminal or inside an IDE, that reads your codebase, plans a change, edits files, runs commands and tests, and shows you diffs to approve. Use it well by giving it project context through a CLAUDE.md file, asking it to plan before editing, and reviewing every diff before you commit.

## The short version

- Claude Code runs in your terminal, and in IDE integrations, and works directly on your project's files and shell. It is not a chat window pasting code back at you.
- Start with a small, well-scoped task in a real repo. A first session should end with something you can actually run and test.
- Add a CLAUDE.md file to your repo root with project conventions, build and test commands, and architecture notes so it doesn't have to rediscover them every session.
- For anything non-trivial, ask it to plan first and confirm the approach before it starts editing.
- It asks permission before running commands or writing files by default. Understand and deliberately set that permission model rather than approving everything by reflex.
- Review every diff like you would a teammate's pull request. Tests are the loop that catches what review misses.

## What Claude Code actually is

Claude Code is a harness built around a model: it gives the model tools to read and write files, search code, and run shell commands, and lets it work through a task across many steps instead of producing a single reply. It ships as a command-line tool you run in a terminal, with integrations available for common IDEs. Exact install commands, supported platforms, and the current shape of IDE integrations change, so check docs.anthropic.com for the current instructions rather than relying on an older guide or a cached blog post.

## A first session, done well

Point it at a real project rather than a toy repository, since a large part of what it does well is reading and reasoning about an existing codebase. Ask a scoped question first, such as what a particular module does or where a piece of logic lives, to see how well it has understood the project before asking it to change anything. Then give it one well-defined task: fix a specific bug, or add a small feature with a clear spec. For anything bigger than a one-line fix, let it lay out which files it intends to touch and in what order before it starts editing. At the end, run the test suite yourself, even if it reports that tests pass.

## CLAUDE.md: context you only write once

CLAUDE.md is a markdown file, or set of files, that Claude Code reads automatically at the start of a session. Use it for the things you'd otherwise explain to a new engineer joining the project: build and test commands, code style conventions, directory layout, and anything unusual about how the project works. This saves you from re-explaining the same context every session. Keep it current: stale instructions are worse than none, because the agent will follow what's written literally, even if the codebase has since moved on.

## Plan before you let it edit

For anything more than a trivial change, ask for a plan before any files are touched: which files it intends to modify, in what order, and why. This catches wrong assumptions while they're cheap to fix, rather than after fifty lines have changed. For genuinely large or risky changes, treat the plan itself as the thing to review carefully, not just the eventual diff.

## Permissions: understand before you loosen them

By default, a well-configured session should ask before running commands or writing outside what you've approved. You can grant broader permissions for a session or a project, but do that deliberately. Decide in advance what an agent should never be allowed to run unsupervised, such as destructive git commands, deployment scripts, or anything touching production credentials, rather than approving prompts by habit until they stop appearing. The exact configuration options for permissions live in docs.anthropic.com and are worth reading once rather than guessing at.

## Reviewing diffs like you mean it

Read every diff before committing, the same way you'd review a colleague's pull request. Coding agents are fluent, not infallible: a change can look entirely plausible and still be quietly wrong, especially in logic adjacent to what you actually asked for. Pay particular attention to anything that changed outside the stated scope of the task.

## Tests as the loop

The single biggest lever for reliability is giving the agent, or asking it to write, tests that pin down what "working" means, then letting it iterate against them. An agent iterating against a failing test is far more reliable than one asked to simply confirm a change works, because a model's self-report of success is not verification. Tests are also how you catch regressions the agent introduced without noticing, which is easy to miss from a diff alone.

## Working across multiple files and larger changes

Once a task spans more than a couple of files, treat the session more like managing a small project than issuing one instruction. Break the work into steps that each leave the codebase in a runnable state, so you can check progress and course-correct rather than discovering a problem only after everything has changed at once. Ask it to summarize what it changed and why after a larger edit, and compare that summary against the actual diff rather than accepting it at face value. If a session has drifted, meaning it's made a series of small decisions you wouldn't have made yourself, it's often faster to start a fresh, more tightly scoped session than to keep correcting course inside a long one.

## Common early mistakes

New users tend to make a handful of predictable mistakes. The first is giving it an entire feature or refactor as one vague instruction instead of breaking it into checkable steps. The second is approving permission prompts by reflex until the tool effectively has unrestricted access, without having decided that on purpose. The third is skipping the CLAUDE.md file and re-explaining the same project context every session, which wastes time and produces inconsistent results across sessions. The fourth is trusting a passing test suite that the agent itself modified; if it's touching test files as part of a change, look closely at what those changes actually assert. None of these mistakes are unique to Claude Code specifically, but they show up quickly with any sufficiently capable coding agent.

## When not to use it

Avoid leaning on it for exploratory design decisions where you don't yet know what "right" looks like; you'll get a confident answer, not necessarily the correct one. Keep it away from secrets, credentials, and irreversible production actions without a human directly in the loop. And be cautious using it for tasks you have no way to verify, whether because there are no tests, no way to run the result, or no domain knowledge to review the output, since at that point you're trusting the tool blind.

## Where LMVersity fits

LMVersity's free Harness Design and Agentic AI tracks explain how tools like Claude Code are built underneath: the harness concept, permission and deny-floor design, hooks as extension points, subagent delegation, and headless or CLI operation. That's useful background for understanding why it behaves the way it does, rather than treating it as a black box. It's free, self-paced, and has no certificate.

## Go deeper

- [/learn/agentic-ai/coding-agent-architecture](/learn/agentic-ai/coding-agent-architecture) — how Claude Code and similar tools are built internally
- [/learn/harness-design/what-is-a-harness](/learn/harness-design/what-is-a-harness) — the harness concept behind every coding agent
- [/learn/harness-design/headless-cli-agents](/learn/harness-design/headless-cli-agents) — running agents from a terminal
- [/learn/harness-design/hooks-as-extension-points](/learn/harness-design/hooks-as-extension-points) — extending a harness without forking it
- [/learn/harness-design/deny-floors-and-policy-layers](/learn/harness-design/deny-floors-and-policy-layers) — how permission boundaries are designed
- [/learn/mcp/what-is-mcp](/learn/mcp/what-is-mcp) — the protocol Claude Code and other tools use to connect external tools
- [/blog/agents-need-a-harness](/blog/agents-need-a-harness) — why an agent alone is not enough

For the current install command, supported IDEs, and permission configuration, see [docs.anthropic.com](https://docs.anthropic.com).
