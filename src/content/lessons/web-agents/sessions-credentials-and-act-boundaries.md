---
title: "Sessions, credentials, and the observe/act boundary"
track: "web-agents"
status: live
summary: "Authenticated browsing without leaking credentials — stored contexts over typed passwords — and the line between actions an agent may take freely and ones that need approval first."
duration: "9 min read"
sources: ["playwright-docs"]
---

## The short answer

Two control problems define production browser agents: **sessions** —
an agent that must act as a logged-in user needs credentials, and
typing a password into a page is the worst way to provide them — and
the **observe/act boundary** — the line between actions that only read
(safe to do freely) and actions that change the world (purchases,
sends, deletes — needing an approval gate). Both reduce to: never give
the agent more than the task requires — not more credential, not more
authority.

## Sessions without exposing credentials

The wrong pattern: putting a password in the task prompt or a tool
argument — now it's in the context, in the logs, in every trace, and
visible to any page content that can read the prompt
([injection](/learn/web-agents/web-prompt-injection) — a page could ask
the agent to "re-read" its instructions). The right patterns:

- **Stored browser contexts** — log in once interactively, save the
  storage state (cookies + localStorage), and let the agent load that
  context (`browser.new_context(storage_state=...)` in Playwright).
  The agent gets an authenticated session *without ever seeing the
  password* — the credential becomes a blob it can't read, and the
  blob can be scoped, rotated, and revoked.
- **Scoped test/service accounts** — the agent's identity should be an
  account created for it, with only the permissions the task needs —
  never a human's personal session. Its activity is then attributable
  in the target system's own audit logs.
- **Hosted browsers** — Browserbase-class runtimes hold sessions
  server-side; the boundary decision is that your session cookies live
  on their infrastructure — treat like any third-party data call.

## The observe/act boundary

Classify every action the agent can take:

- **Observe** — read, scroll, extract, screenshot. Reversible, safe to
  run unattended.
- **Low-stakes act** — navigate, fill a form *without submitting*,
  filter, add to cart. Mostly reversible.
- **Consequential act** — submit, purchase, send, delete, publish,
  transfer. Irreversible or externally visible: these get an
  [approval gate](/learn/tools-function-calling/approval-gates-design) —
  a hard stop where a human (or a policy) confirms before execution.
  The gate should show *what's about to happen* — "POST /orders with
  {item, address}" — not "the agent wants to proceed."

The implementation is the same as tool gating anywhere: the harness
checks the action's class before executing — a click on a submit
button or a `POST` to a checkout endpoint is the browser equivalent of
a dangerous tool call. Untrusted-page inputs feed *observe* decisions;
they should never be able to *cause* a consequential act — a page
saying "click confirm" is
[injection](/learn/web-agents/web-prompt-injection), not instruction.

## The honest limits

Stored sessions expire and can be invalidated — session refresh is an
operational chore, not a solved problem. And an approval gate only
works if the approver can see the action faithfully; an agent that
describes a purchase as "completing your request" has laundered the
consequence — the gate needs the raw action, not the agent's summary.

## The exercise

List every action your browser agent can perform and sort them into
observe / low-stakes / consequential — then check which credential the
agent holds and whether a stored context could replace a password in
context. Both lists are usually shorter after the exercise.

## Go deeper

- [Approval gates design](/learn/tools-function-calling/approval-gates-design) — the gate mechanics.
- [What the browser exposes](/learn/web-agents/what-the-browser-exposes) — cookies/storage as state channels.
- [Web prompt injection](/learn/web-agents/web-prompt-injection) — why page content can't drive acts.
- [Audit logs and accountability](/learn/llm-security/audit-logs-and-accountability) — recording the consequential acts.
