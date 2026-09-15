---
title: "Common Mistakes: Agent Loop Design"
track: "agentic-ai"
status: live
summary: "The eight ways an agent loop fails in production — the retry that retries forever, the state that isn't checkpointed, and the tool error the model never sees."
duration: "8 min read"
---

Agent failures are rarely the model's fault — they're loop-design failures: unbounded retries, invisible errors, state that evaporates. Each entry names the design mistake and the fix.

## 1. A retry loop with no cap

**Wrong:** The tool call fails, the agent retries it — forever, because nothing bounds the attempt count and the failure is deterministic.
**Right:** Every retry needs a cap and a backoff. A deterministic failure retried without bound is a bill and a hang, not resilience — three attempts then escalate or fail the step.

## 2. State that evaporates on restart

**Wrong:** The agent's progress lives in process memory — a crash at step 14 loses steps 1–13 and the side effects already taken.
**Right:** Externalize state to a checkpoint store. Resume must reconstruct the trajectory without re-executing effects — an agent that can't survive `kill -9` isn't deployed, it's running.

## 3. The tool error the model never sees

**Wrong:** A tool fails and the error is swallowed — the model sees a generic failure or nothing, and retries the same call with the same bad arguments.
**Right:** Tool errors are model input. Return a typed, actionable error the model can read — "parameter X must be a date" beats "error" — so the next call can actually fix it.

## 4. Delegation with no contract

**Wrong:** Agent A hands work to agent B as a free-text request — B's output comes back without the acceptance criteria A needed, and A can't tell if it's usable.
**Right:** Delegation is a typed message: task, inputs, acceptance criteria. Without a checkable contract, a handoff is a hope — A can't verify what it can't evaluate.

## 5. Shared state everyone writes to

**Wrong:** All agents write to one scratchpad — B overwrites A's result, and the final state is whichever agent wrote last, not the correct one.
**Right:** Shared state has declared writers. A write outside the owner's section is rejected or namespaced — a free-for-all scratchpad is a race condition with extra agents.

## 6. No termination condition that can fire

**Wrong:** The loop ends "when the task is done" — the model decides, and it never decides it's done, or a delegation cycle ping-pongs until the budget dies.
**Right:** Termination is a property of the orchestrator: a delegation depth limit, a cost ceiling, a step cap — each reachable and each tested. If the loop can't be stopped by design, it will be stopped by invoice.

## 7. Trusting the model's self-report of completion

**Wrong:** The agent says the task is finished and the loop exits — the model claimed success on a partial result because "done" was never defined checkably.
**Right:** "Done" is verified, not asserted. The acceptance check runs against the output, not the model's confidence — an agent that grades itself produces a completion claim, not a completed task.

## 8. A side effect that can't be undone or retried safely

**Wrong:** The agent calls "send refund" — the call succeeds, the checkpoint write fails, the resume re-sends the refund.
**Right:** Effectful steps are idempotent or resume-gated — an idempotency key makes the retried call effect-once. A resume that double-charges a customer is worse than a crash.

## If you take one habit

Bound everything. Every retry, every delegation depth, every budget, every run — an agent loop that can't be bounded can't be operated, and the first unbounded failure is the one that teaches you why.

**Related:** [The agent loop](/learn/agentic-ai/the-agent-loop), [Common agent failure modes](/learn/agentic-ai/common-agent-failure-modes), [Cost-aware agent loops](/learn/agentic-ai/cost-aware-agent-loops), [Stateful agent project](/learn/agentic-ai/stateful-agent-checkpoints-project)
