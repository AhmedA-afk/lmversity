---
title: "Claude Agent SDK: the Claude Code harness as a library"
track: "agent-frameworks"
status: live
summary: "The Claude Agent SDK exposes the same agent harness that powers Claude Code — subagents, MCP tools, a permission system, and file access — for building your own agents in Python or TypeScript."
duration: "8 min read"
sources: ["claude-agent-sdk-docs"]
---

## The short answer

The Claude Agent SDK is Anthropic's agent framework — but unlike most
frameworks it doesn't ask you to assemble the agent. It *is* the harness
that runs Claude Code: the loop, the file system tools, the subagent
machinery, the permission system, exposed as a library for Python and
TypeScript. Where the [OpenAI Agents SDK](/learn/agent-frameworks/openai-agents-sdk)
gives you primitives to build agents, this SDK gives you a working agent
harness to aim at a task — closer to embedding a coding agent than to
drawing a graph.

## What "harness as a library" means

The SDK wraps the same pieces Claude Code uses:

- **Built-in tools** — file read/write/edit, shell execution, web fetch —
  the tool set an agent needs to operate on a real codebase or filesystem,
  already wired.
- **Subagents** — spawned agents with isolated context for delegated
  subtasks, the mechanism behind Claude Code's Task tool (see
  [subagent context isolation](/learn/agentic-ai/subagent-context-isolation)).
- **MCP integration** — external tools and data arrive through
  [MCP servers](/learn/mcp/what-is-mcp), the same protocol Claude Code uses.
- **Permissions** — a hook system where your code approves or denies tool
  calls before they execute — the SDK-side version of
  [agent permissions](/learn/agentic-ai/agent-permissions-and-authorization).
- **Sessions** — resumable conversation state, including forking a session
  to explore alternatives.

```python
# Python: the harness in a few lines
async for message in query(
    prompt="Find the flaky test and propose a fix.",
    options=ClaudeAgentOptions(allowed_tools=["Read", "Edit", "Bash"]),
):
    handle(message)
```

## What it adds over the raw loop

Everything the [raw baseline](/learn/agent-frameworks/raw-sdk-agent-baseline)
listed as a gap — but as *harness configuration* rather than primitives you
assemble: tools already exist, permissions are a hook you implement,
subagents are a config entry, context management is handled. The trade is
the inverse of a graph framework: you get less say over the loop's shape
because the loop is the product's opinion — the same loop that runs a
production coding agent.

## When plain code is enough

Plain code wins when your task isn't harness-shaped — a single-turn
extraction, a fixed two-step pipeline — because the SDK's value is the
harness, and a task that doesn't need a harness shouldn't carry one. It's
also the wrong tool when you need provider portability (it's Anthropic's
harness) or fine-grained control over the loop's internals (that control
is what you gave up for the batteries). Reach for it when you want a
capable agent on files/code/tools quickly — especially anything adjacent
to what Claude Code already does — without rebuilding tool plumbing,
permissions, and subagent context yourself.

## The exercise

Give the SDK a scoped task over a scratch directory — "summarize what this
project does" — with `allowed_tools` limited to reads, then add writes
under a permission hook. The lesson is watching the permission layer gate
the tool calls you already saw in the raw loop.

## Go deeper

- [The raw-SDK baseline](/learn/agent-frameworks/raw-sdk-agent-baseline) — what the harness replaces.
- [Coding agent architecture](/learn/agentic-ai/coding-agent-architecture) — the harness pattern in the abstract.
- [What is MCP](/learn/mcp/what-is-mcp) — the tool protocol it speaks natively.
