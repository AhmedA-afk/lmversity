---
title: "CLI Agents: Common Mistakes"
track: "cli-agents"
status: live
summary: "The eight CLI-agent mistakes — skipped orientation, unreviewed diffs, headless without bounds, and the commit nobody can audit."
duration: "8 min read"
---

The mistakes that turn a CLI agent from a power tool into an unaccountable change-machine.

## 1. Skipping the orientation

**The mistake.** The agent starts editing before reading AGENTS.md, the README, or the test setup — the conventions get violated at scale.

**The fix.** The repo's instructions are the first read. An agent that doesn't know the conventions can't follow them — and "it should have figured it out" is not a strategy.

## 2. Approving the summary, not the diff

**The mistake.** "I've updated the auth flow" — and the approval is on the description, not the actual changes. The diff contained a deleted test and a relaxed check.

**The fix.** Review the diff — always. The summary is what the agent meant to do; the diff is what it did. They're not always the same.

## 3. Scope creep dressed as helpfulness

**The mistake.** "While I was in there I also refactored…" — the diff balloons, the review gets harder, and the unrelated change ships unexamined.

**The fix.** Constrain scope explicitly; reject drive-by changes. A patch that does the task and only the task is a reviewable patch.

## 4. Headless with no bounds

**The mistake.** A `run -p "fix all the tests"` left unattended with full shell and no step cap — it loops, burns tokens, and produces an unreviewable pile of changes.

**The fix.** Headless runs get a step cap, a diff-size limit, and a human review gate before merge. Unattended ≠ unbounded.

## 5. The wrong-fix patch

**The mistake.** The agent's patch compiles, tests pass, the review approves — and it fixed the symptom, not the cause. The bug resurfaces in a different shape.

**The fix.** The review asks "why did this work," not just "does it pass." A fix that can't explain its mechanism is a fix you can't trust.

## 6. The unreviewable mega-commit

**The mistake.** A whole session's work lands in one commit — 40 files, mixed concerns, and no way to revert a piece without reverting it all.

**The fix.** Atomic commits per logical change; the session's output is a set of reviewable units, not a monolith.

## 7. Secrets in the session

**The mistake.** A `.env` pasted into the context, a key echoed in a command — the session log now holds a secret.

**The fix.** Secrets stay in the environment or the secrets manager; the session sees names, not values. A log with a secret in it is a breach report.

## 8. No verification step

**The mistake.** "Done" means the agent finished talking — no build, no tests, no lint. The first verification is the user's.

**The fix.** The task's definition of done includes the checks that prove it — run by the agent, reported with the result, not asserted.

**Related:** [CLI agents cheatsheet](/learn/cli-agents/cli-agents-cheatsheet), [Permissions, sandboxes, and git workflow](/learn/cli-agents/permissions-sandboxes-and-git-workflow), [Planning modes and patch review](/learn/cli-agents/planning-modes-and-patch-review)
