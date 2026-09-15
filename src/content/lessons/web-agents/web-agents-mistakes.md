---
title: "Web Agents: Common Mistakes"
track: "web-agents"
status: live
summary: "The eight web-agent mistakes — page content trusted as instruction, sessions that outlive their task, and actions fired on unverified state."
duration: "8 min read"
---

The web-agent mistakes that turn a browser automation into an injection surface.

## 1. Page content treated as instructions

**The mistake.** The agent reads a page and its text enters context as potential directives — a malicious or compromised page's "click here to continue" becomes the agent's next action.

**The fix.** Page content is untrusted data, marked as such; the agent's next action is evaluated against the task, not the page's suggestions.

## 2. Acting on unverified state

**The mistake.** The agent clicks "Submit" because that's next in the plan — without checking the page is the one it expects. The modal changed, the form is different, the click lands wrong.

**The fix.** Read the state before the action — verify the element, the page, the expected context. A click on an unverified page is a guess with a side effect.

## 3. The session that never expires

**The mistake.** A logged-in session kept for convenience — the credential persists past the task, and whoever/whatever has the session has the access.

**The fix.** Sessions scoped to the task and expired after — a standing logged-in browser is a standing credential.

## 4. An agent where a script belongs

**The mistake.** An LLM-driven browser agent for "download the daily CSV" — a deterministic task running through a nondeterministic, expensive layer.

**The fix.** If the steps are enumerable, write the Playwright script. The agent earns its cost on tasks the script can't enumerate — not on ones it can.

## 5. No boundary between read and act

**The mistake.** Reading a page and submitting a form are the same permission — the agent that can browse can also purchase, post, and delete.

**The fix.** Separate permissions for read and act; act gets a gate — domain allowlists, "no purchase" rules, per-action approval for the irreversible.

## 6. Extraction without an eval

**The mistake.** The agent navigated to the right page and "got the data" — never verified against the actual content. The navigation succeeded; the extraction was wrong.

**The fix.** Eval the extracted data against ground truth on a sample — reaching the page is the easy part; the extraction is the task.

## 7. Credentials entered by the agent

**The mistake.** The agent types a username and password into a login form — the credentials are now in the trajectory log.

**The fix.** Pre-authenticated sessions or a credential broker — the agent never sees the secret; it inherits a session that has access.

## 8. No record of the actions taken

**The mistake.** The agent acted — clicked, submitted, navigated — and the only record is the final output. What it *did* is unreconstructable.

**The fix.** Every action logged: the element, the page, the decision. When the agent acts on the web, the action log is the audit trail.

**Related:** [Web agents cheatsheet](/learn/web-agents/web-agents-cheatsheet), [Web prompt injection](/learn/web-agents/web-prompt-injection), [Sessions, credentials, and act boundaries](/learn/web-agents/sessions-credentials-and-act-boundaries)
