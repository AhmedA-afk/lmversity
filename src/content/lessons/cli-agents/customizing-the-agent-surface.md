---
title: "Customizing the agent: MCP config, skills, commands, rules, hooks, and subagents"
track: "cli-agents"
status: live
summary: "The six extension surfaces every CLI agent exposes — MCP servers for tools, skills and slash commands for workflows, rules for standing guidance, hooks for deterministic interception, subagents for delegation."
duration: "10 min read"
sources: ["claude-code-docs", "openai-codex-repo", "gemini-cli-repo", "mcp-spec"]
---

## The short answer

Stock CLI agents are generic; the customization surface is where they
become *yours*. Six surfaces, each answering a different question:
**MCP servers** add tools; **skills** add packaged know-how that loads
when relevant; **slash commands** add user-invoked shortcuts; **rules /
instruction files** add always-on guidance; **hooks** add deterministic
code at lifecycle events; **subagents** add delegated worker loops.
Choosing the right surface is the skill — the
[vocabulary lesson](/learn/harness-design/agent-stack-vocabulary)
defines the terms; this one is about wiring them into a CLI agent.

## The six surfaces

- **MCP servers** — external tools over the
  [Model Context Protocol](/learn/mcp/mcp-architecture-hosts-clients-servers):
  each agent reads a config file (`.mcp.json`, settings JSON — names
  vary) listing servers by command or URL. After config, the tools show
  up in the agent's tool list — *tool discovery* is just the agent
  asking each configured server what it offers. The trap: an MCP server
  is somebody else's code with your agent's authority — treat config
  like adding a dependency, not a plugin
  ([supply-chain](/learn/llm-security/llm-supply-chain-security)).
- **Skills** — `SKILL.md` packages of instructions + scripts + reference
  files, loaded when the task matches the skill's description. The
  progressive-disclosure design means a hundred skills cost almost
  nothing until relevant. Best for: repeatable know-how (release
  procedures, house style for migrations) that doesn't belong on every
  prompt.
- **Slash commands** — user-invoked prompt templates (`/review`,
  `/deploy`). The distinction from skills: *you* trigger commands
  explicitly, the *model* triggers skills by relevance. Same content
  can live in either — choose by who should decide when it runs.
- **Rules / instruction files** — always-on context (`AGENTS.md`,
  `CLAUDE.md`, `.cursor/rules/`). Zero trigger logic, always costing
  context — keep them for genuinely universal facts
  ([orientation](/learn/cli-agents/getting-the-agent-oriented)).
- **Hooks** — shell commands fired at lifecycle events (pre/post tool
  call, session stop). Deterministic — they run regardless of what the
  model intends, which is exactly their power: lint after every edit,
  block `.env` reads, snapshot state at stop
  ([hooks](/learn/harness-design/hooks-as-extension-points)).
- **Subagents** — delegated worker loops with their own context and a
  scoped tool set — for isolated, parallelizable subtasks where the
  main agent shouldn't carry the detail
  ([delegation](/learn/harness-design/subagent-and-task-delegation)).

## Choosing by mechanism

```
Need a new capability?          → MCP server (or a tool)
Need know-how sometimes?        → Skill
Need a shortcut you invoke?     → Slash command
Need something always true?     → Rules file
Need it guaranteed by code?     → Hook
Need a separate worker?         → Subagent
```

The common mistake is surface confusion — stuffing a skill's worth of
niche knowledge into `AGENTS.md` (taxes every run), or using a
prompt-based rule for something that needs a hook's guarantee (the
model can ignore a rule; it can't ignore a hook that exits non-zero).

## The honest limits

These surfaces are where agent security quietly degrades — every MCP
server, skill, and hook is code executing with your session's
authority, and config files are part of the repo an untrusted
contributor could modify. Review agent config changes like code
changes; they're the same thing with friendlier syntax.

## The exercise

Take one thing you re-explain to your agent every session and move it
to the right surface — a build command → rules file, a repeated
procedure → skill or command, a "never do X" that keeps being ignored →
hook. The exercise is naming the mechanism, not writing the file.

## Go deeper

- [The agent stack vocabulary](/learn/harness-design/agent-stack-vocabulary) — the terms in one place.
- [MCP architecture](/learn/mcp/mcp-architecture-hosts-clients-servers) — the protocol behind MCP config.
- [Multi-agent and recovery](/learn/cli-agents/multi-agent-and-recovery) — when subagents multiply.
