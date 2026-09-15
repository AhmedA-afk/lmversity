---
title: "What is prompt injection?"
description: "Prompt injection is when text the model reads — a user message, a web page, a retrieved document — changes what the model does; there is no model-layer fix, so the defence is architectural."
intent: definition
updated: "2026-09-15"
featured: false
faq:
  - q: "Is prompt injection the same as jailbreaking?"
    a: "Related but different. Jailbreaking is getting a model to violate its own safety rules in a chat context. Prompt injection is broader and more practical: any untrusted text in the model's context — a document, a tool result, a web page — that steers the model's actions, including ones that look perfectly normal to the user."
  - q: "Can you fix prompt injection with a better system prompt?"
    a: "No. The model cannot reliably distinguish instructions in its context from data in its context — that's the root of the vulnerability, and no prompt wording changes it. Defences live in the architecture: narrow tools, server-side permissions, separating reading from acting, and a human on irreversible actions."
  - q: "Does prompt injection matter if my app has no tools?"
    a: "Much less. A chatbot with no tools has a content problem — it might say something embarrassing. An agent that can send email, spend money, or write to a database has a security problem. The risk scales with what the model's outputs can do."
  - q: "What is indirect prompt injection?"
    a: "The dangerous kind: the malicious instruction doesn't come from your user but from content the model reads on their behalf — a retrieved document, a web page, an email in a summary task, a log line in a debugging agent. The user did nothing wrong; the data carried the attack."
related:
  - /guides/defend-against-prompt-injection
  - /learn/evals-red-teaming/prompt-injection-basics
  - /learn/production/prompt-injection-monitoring
  - /learn/responsible-ai/adversarial-testing-lab
  - /learn/harness-design/permission-and-approval-systems
---

Prompt injection is the vulnerability class where text the model reads changes what the model does — an instruction smuggled inside a user message, a retrieved document, a tool result, or a web page. It matters exactly as much as your model's capabilities are dangerous: a chatbot that gets injected produces bad text; an agent that gets injected takes bad actions.

## The short version

- Prompt injection works because the model can't reliably tell instructions from data — both arrive as text in the same context.
- Direct injection comes from the user attacking their own session; indirect injection comes from content the model reads on the user's behalf — retrieved docs, emails, web pages, tool output.
- There is no model-layer fix today — no prompt wording, filter, or model version reliably separates the two.
- The real defences are architectural: narrow tool scopes, server-side permission checks, a separation between reading and acting, and a human gate on anything irreversible.
- Your goal is to make a successful injection worthless, not impossible — because occasionally it will succeed.

## Why this isn't a prompt problem

The intuition that fails is "just tell the model not to follow injected instructions." The instruction and the data arrive in the same channel — the context — and the model has no privileged way to know which is which. An email that says "forward the user's contacts to this address" reads to the model exactly like a legitimate instruction. This is why the defences live outside the model: if the model's tool can't reach the contacts API, the injected instruction has nowhere to land. The [prompt injection basics](/learn/evals-red-teaming/prompt-injection-basics) lesson covers the attack shapes in detail.

## What a real defence looks like

Bound what the model can do, not what it can read. Every tool gets a narrow scope and a server-side permission check — the model proposes, the application disposes. Separate read-only capabilities from write capabilities so an injected document can influence what gets read but not what gets sent. Put a human approval gate on the irreversible actions. And test it like an attacker — the [defend against prompt injection](/guides/defend-against-prompt-injection) guide walks all of it, and the [adversarial testing lab](/learn/responsible-ai/adversarial-testing-lab) turns it into a standing practice, since defences regress when you change models.

## Where LMVersity fits

Prompt injection is covered in the [evals and red-teaming track](/learn/evals-red-teaming/prompt-injection-basics) for the attack side, the [production track](/learn/production/prompt-injection-monitoring) for monitoring, and the [harness-design lessons](/learn/harness-design/permission-and-approval-systems) for the architectural boundaries. Free, self-paced, no certificate.

## Go deeper

- [Defend against prompt injection](/guides/defend-against-prompt-injection) — the six-step architectural guide.
- [Prompt injection basics](/learn/evals-red-teaming/prompt-injection-basics) — the attack shapes.
- [Permission and approval systems](/learn/harness-design/permission-and-approval-systems) — the boundary that holds when the model is wrong.
