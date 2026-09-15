---
title: "Project: A Bounded Web Agent for a Real Task"
track: "web-agents"
status: live
summary: "Build a browser agent for a task a script can't fully enumerate — with read-before-act, a permission boundary, and an extraction eval."
duration: "1–2 weeks"
---

**Prerequisites:** [Agentic browsers overview](/learn/web-agents/agentic-browsers-overview) and [Sessions, credentials, and act boundaries](/learn/web-agents/sessions-credentials-and-act-boundaries).

Build a web agent for a task that actually needs one — where the steps depend on what the pages show — with the boundaries that make it safe to run.

## The brief

Pick a task a static script can't fully enumerate: "find the cheapest flight matching these constraints," "extract the structured data from these differently-shaped pages," "fill this form whose fields vary by context." The agent earns its cost on runtime decision-making, not on a deterministic sequence.

## The components

1. **The task spec** — what the agent is to accomplish, with a checkable success condition (not "it navigated," but "the extracted data matches this shape / the form was submitted to the right endpoint").
2. **Read-before-act** — every consequential action verifies the page state first; the verification is a step, not an assumption.
3. **A permission boundary** — read vs act separated; act scoped by domain allowlist, action-class rules ("no purchase," "no credential entry"), and approval for the irreversible.
4. **Session handling** — how auth state is provided (pre-authenticated, never credentials-typed-by-agent) and expired.
5. **An extraction eval** — the agent's output checked against ground truth on a sample.

## Mock / deterministic mode

Run against local fixture pages or a recorded site — the agent's logic is the deliverable, not the specific site. Fixtures let you inject the failure cases (a variant form, a slow render, an injected instruction) deterministically.

## Acceptance criteria

- The task completes on the fixture pages, verified by the extraction eval.
- A variant-form case stops at the boundary instead of acting on the wrong page.
- An injected instruction in a page's content is not obeyed.
- Every action is logged with element, page state, and decision.

## Failure injection

- A page that renders a different form than expected — does read-before-act catch it?
- A page containing an embedded "click here" instruction — is it treated as data?
- A session that should expire — does it?

## Milestones

1. Task spec + fixture pages.
2. Read-before-act verified on a variant case.
3. Permission boundary + session handling.
4. Extraction eval + the full run documented.

## Portfolio note

"A web agent that completes a variable-form task, refuses an injected instruction, and stops at a wrong page instead of acting on it" demonstrates the boundaries, not just the automation.

## Defend this build

- Why does this task need an agent rather than a Playwright script?
- Where does the read/act boundary sit, and what can't the agent do?
- What did the injection fixture reveal about the content-trust model?
- What would it take to run this against the live site, and what's the blocker?

**Related:** [Web agents cheatsheet](/learn/web-agents/web-agents-cheatsheet), [Web agents mistakes](/learn/web-agents/web-agents-mistakes), [Extraction and evaluation](/learn/web-agents/extraction-and-evaluation)
