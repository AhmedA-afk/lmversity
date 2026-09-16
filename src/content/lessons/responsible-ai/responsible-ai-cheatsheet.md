---
title: "Responsible AI Cheatsheet"
track: "responsible-ai"
status: live
summary: "The release-gate reference — which artifact answers which obligation, and the checks that keep the process from being paperwork."
updated: "2026-09-16"
duration: "6 min read"
---

The responsible-AI track compressed to the artifact each obligation needs and the check that keeps it real.

## Which artifact answers which obligation

| The obligation | The artifact | The failure it prevents |
|---|---|---|
| "What could go wrong, owned by whom?" | Risk register | A risk with no owner, mitigated by nothing |
| "What is this model, and what are its limits?" | Model card / system card | A claim with no source, a limit never measured |
| "Did anyone try to break it?" | Red-team evidence + dispositions | A report that produced no change |
| "Who's affected, including non-users?" | Impact assessment | The harmed party nobody counted |
| "Can a user challenge the output?" | Contestability path | A feedback form that goes nowhere |
| "Did they actually consent?" | Real, reversible consent | A dark pattern recorded as agreement |

## The checks that keep it real

- **Every risk names a mechanism** — "bias may occur" is a placeholder; "the scorer under-ranks non-native English resumes" is a risk.
- **Every claim has a source** — the card's limits are measured, not assumed.
- **Every finding has a disposition** — fixed / accepted / mitigated, with a reason and an owner.
- **At least one finding changed the release** — a gate that never delays is a gate that doesn't work.
- **The appeal path is walkable** — a user could follow it end to end, including the right-but-harmful case.

## The process order that matters

1. **Risk assessment** — before build decisions, not after.
2. **Model card** — written during development, not for the announcement.
3. **Red team** — evidence gathered while there's still time to act on it.
4. **Dispositions** — findings resolved or accepted with named owners.
5. **Release decision** — sign-off that names the residual risks accepted and by whom.

## The questions the package must answer

- "What's the worst this can do, and to whom?"
- "What did red-teaming actually change?"
- "Who owns the risk that wasn't fixed?"
- "If I'm harmed by a correct output, what's my path?"
- "What would make you pull it?"

**Related:** [Responsible-AI mistakes](/learn/responsible-ai/responsible-ai-mistakes), [Responsible release project](/learn/responsible-ai/responsible-release-project), [Risk before model](/learn/responsible-ai/risk-before-model)
