---
title: "n8n, Zapier, Make, Pipedream: bounded no-code AI workflows"
track: "agent-frameworks"
status: live
summary: "Automation platforms put LLM calls inside drag-and-drop workflows — bounded, observable, and operable by non-engineers — a real answer for fixed-shape automations and a trap for anything agentic."
duration: "7 min read"
sources: ["n8n-docs"]
---

## The short answer

n8n, Zapier, Make, and Pipedream are automation platforms that now ship
"AI steps" — an LLM call, an embedding lookup, an agent-ish tool step —
inside visual workflows. They're the right answer for **bounded**
automation: trigger → transform → LLM step → action, on a schedule or an
event, operated by people who don't write code. They're the wrong answer
for genuinely agentic behavior — the moment the task needs open-ended
looping, a drag-and-drop canvas is a cage, not a scaffold.

## What they actually offer

- **n8n** — self-hostable, code-friendly workflow automation with
  dedicated AI nodes (LLM chains, agents, vector stores, tool nodes).
  Closest to the frameworks in this track: you can drop into JavaScript
  inside a node, self-host for data control, and build LangChain-flavored
  agent flows visually.
- **Zapier** — the broadest SaaS connector catalog; "AI by Zapier" and
  agent features sit inside its trigger→action model. Weakest on
  self-hosting (there is none) and code-level control; strongest on "the
  app you need to connect is already integrated."
- **Make** — visual scenario builder with branching/iteration primitives
  and AI modules; sits between Zapier's simplicity and n8n's flexibility.
- **Pipedream** — developer-flavored: Node.js/Python code steps inside
  managed workflows, with the connector catalog. Closest to "code with a
  scheduler and integrations attached."

## Where they fit against the frameworks

The boundary is the [agents-vs-workflows](/learn/agentic-ai/agents-vs-workflows)
line made operational. These platforms *are* workflows — fixed topology,
bounded steps, an LLM as a step rather than the controller. For
"classify inbound tickets, enrich, route" that's ideal: observable,
retryable, operable by a support engineer. The same shape that makes them
safe makes them wrong for "investigate this issue however you need to" —
an agent's loop doesn't fit in a node that runs once per trigger.

## What they add over the raw loop

Operations, not abstraction. The [raw loop](/learn/agent-frameworks/raw-sdk-agent-baseline)
in code needs a scheduler, retries, secrets, monitoring, and someone who
can read code to change it. These platforms hand you all five — the trade
is expressiveness and, for the hosted ones, your data transiting a third
party (n8n self-hosted is the exception).

## When plain code is enough

Plain code wins when an engineer owns the automation and the shape is
stable — a cron job with an LLM call is less moving parts than a platform
subscription. No-code platforms earn their place when the *operator isn't
the developer*: support/ops teams who must edit the workflow themselves,
or when the value is the connector catalog (50 SaaS integrations you don't
want to auth yourself). The failure mode to avoid is the slow drift from
"AI step in a workflow" to "agent trapped in a node" — if the canvas keeps
fighting you, the task wanted the
[raw loop](/learn/agent-frameworks/raw-sdk-agent-baseline) all along.

## The exercise

Build a three-step automation — email in → LLM classifies → sheet row —
in one of these platforms, and notice what's *free*: retries, credentials,
monitoring, and a non-engineer who can edit it.

## Go deeper

- [The raw-SDK baseline](/learn/agent-frameworks/raw-sdk-agent-baseline) — the loop these platforms can't express.
- [Agents vs workflows](/learn/agentic-ai/agents-vs-workflows) — the line these platforms draw literally.
- [When not to use an agent](/learn/agentic-ai/when-not-to-use-an-agent) — the question that routes tasks here.
