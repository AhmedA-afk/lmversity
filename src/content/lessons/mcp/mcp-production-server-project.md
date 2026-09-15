---
title: "Project: A Production MCP Server — Auth, Versioning, Telemetry"
track: "mcp"
status: live
summary: "Take an MCP server past the demo — scoped auth, schema versioning, capability checks, and the telemetry that answers 'who called what, and did it work.'"
duration: "25 min read"
---

A tutorial MCP server trusts everything: local transport, no auth, no versioning, no visibility. A production one has to answer hard questions — which client may call which tool, what happens when a schema changes, and how you'd know a tool is failing before users report it. This project builds that server.

## The brief

Build an MCP server exposing 3–4 real tools (a document lookup, a ticket creator, a status check — your choice of domain) with: token-scoped authorization per tool, schema versioning so a tool change doesn't break old clients silently, and structured telemetry on every call — who called, which tool, latency, outcome, error class.

## Prerequisites

- [MCP architecture: hosts, clients, servers](/learn/mcp/mcp-architecture-hosts-clients-servers) — the protocol's shape
- [MCP auth fundamentals](/learn/mcp/mcp-auth-fundamentals) — the auth model this implements
- [MCP tools, resources, and prompts](/learn/mcp/mcp-tools-resources-and-prompts) — the primitives you're exposing
- [Debugging common MCP failures](/learn/mcp/debugging-common-mcp-failures) — the failure surface you're instrumenting

## Supplied assets and mock mode

Fully local: stdio transport for development, streamable-HTTP for the deployment shape. No external accounts needed — auth tokens are issued by a tiny local issuer or a config file for the purposes of the project. A test client script exercises every tool.

## Acceptance criteria

- [ ] Every tool declares an auth scope — a token without the scope gets a structured authorization error, never a stack trace
- [ ] Tool schemas carry a version — a client pinning v1 keeps working when v2 ships, and a version-mismatch error names both versions
- [ ] Every call emits a structured telemetry record — client identity, tool, version, latency, outcome class — queryable after the fact
- [ ] Input validation rejects malformed arguments with a typed error the model can act on — not a 500, not a hang
- [ ] A test client runs the whole matrix: each tool × valid/invalid scope × valid/invalid args, asserting the error class
- [ ] The server survives a client disconnecting mid-call — no leaked resources, the half-finished call recorded as cancelled

## Failure injection (required)

- [ ] A token with a forged scope — rejected before the tool body runs, and the attempt is logged
- [ ] A tool that throws mid-execution — the client gets a typed tool error; telemetry shows `tool-error`, not silence
- [ ] A request with a schema the server doesn't recognize — explicit version/validation error, tested

## Milestones

1. **Tools without auth** — the tutorial version working end to end.
2. **Scoped authorization** — per-tool scopes, the forged-scope test.
3. **Schema versioning** — v1/v2 coexistence and the mismatch error.
4. **Telemetry** — the per-call record and a query that answers "which tool failed most this week."
5. **The client matrix** — the deterministic test suite over scope × args × version.

## What good looks like

Ask "did client X's calls to the ticket tool succeed yesterday" and telemetry answers with counts and error classes — no log-grep archaeology. A schema bump is a non-event for old clients. An unauthorized call is a logged, typed error — never an accident of implementation.

## For your portfolio

Show the telemetry record and the version-mismatch error — the two artifacts that prove production thinking. "Exposed tools over MCP" is the demo everyone has; scoped auth and honest errors are the differentiators.

## Defend this build

1. A client calls a tool with an expired token — walk the request path and name each check in order.
2. You need to change a tool's response shape — what ships, what stays, and what does a v1 client experience?
3. Which telemetry field would alert you first if a client integration silently broke?
4. What's the largest thing your auth model deliberately does NOT check — and is that acceptable?

The pass bar: answers name the scope check, the version field, and the telemetry record — not the protocol's intentions.

**Related:** [MCP auth fundamentals](/learn/mcp/mcp-auth-fundamentals), [The MCP gateway pattern](/learn/mcp/mcp-gateway-pattern), [Inspecting and testing MCP servers](/learn/mcp/inspecting-and-testing-mcp-servers), [MCP deployment compared](/learn/mcp/mcp-deployment-compared)
