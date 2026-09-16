---
title: "Worked Example: A Web Agent That Clicked the Wrong Button"
track: "web-agents"
status: live
summary: "A form-submission agent that acted on unverified state — traced through the action boundary that should have caught it, and the read-before-act that did."
updated: "2026-09-16"
duration: "10 min read"
---

A web agent's worst failure isn't a crash — it's a confident action on the wrong page. This example traces one: a form-submission agent that fired a click before verifying where it landed.

## The task

An agent that fills a vendor-onboarding form: navigate → fill fields → submit. Deterministic enough to script, but the form's fields vary by vendor type — the reason an agent (not a static script) drives it.

## The failure

On one run, the page loaded slowly; the agent's "the form is ready" check passed on a partially-rendered DOM. It filled the first three fields — then the page's JavaScript finished rendering a *different* form (the "returning vendor" variant, not "new vendor"). The agent's next action — "click Submit" — fired on the wrong form, submitting the partial data to the wrong endpoint.

The click was technically successful; the submission was wrong. No error fired — the failure was a confident action on an unverified state.

## The boundary that should have existed

**Read-before-act as a hard rule.** Before every action — especially the consequential ones — the agent verifies: the page's identity (a stable marker, not just the URL), the element's presence and state, and that the state matches the task's expectation. The "Submit" click would have checked "am I on the new-vendor form" and found the returning-vendor form instead — a mismatch that stops the action.

## The fixed version

- **A page-identity check before each step** — a stable element or marker verifies "this is the form I think it is" before any fill or click.
- **Consequential actions gated** — the submit is an "act" permission, verified against the task and the page, not fired because it's next in the plan.
- **The action logged** — the element, the page state, the decision — so the wrong-form click (now caught) leaves a record of what it *would* have done.

## What the example teaches

- **"It clicked" isn't "it worked."** The action succeeding mechanically isn't the task succeeding — the wrong-form submit was a clean click on the wrong thing.
- **The web is not static.** SPAs, partial renders, and variant forms mean the page the agent expects isn't always the page it got — verification is the bridge.
- **Act is a different permission than read.** The submit's blast radius (a wrong submission to a real endpoint) is categorically different from a read's — the permission model should reflect it.

## The check

For every consequential action a web agent can take: is there a state verification before it fires, and is the permission for "act" separate from "read"? A click on unverified state is an injection surface that fires itself.

**Related:** [Web agents mistakes](/learn/web-agents/web-agents-mistakes), [Sessions, credentials, and act boundaries](/learn/web-agents/sessions-credentials-and-act-boundaries), [Playwright fundamentals and locators](/learn/web-agents/playwright-fundamentals-and-locators)
