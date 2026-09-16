---
title: "Human review and approval boundaries"
track: "ai-for-designers"
status: live
summary: "Separate recommendation, confirmation, and action so every consequential AI step has the review boundary its stakes require."
duration: "9 min read"
---

This lesson matters at the exact point where an AI stops suggesting and starts doing. That boundary must be visible, structural, and matched to stakes — not a line of microcopy users learn to click through.

## Three modes, never blurred

- **Recommendation** — the AI proposes; nothing changes until the user acts. Default for high-uncertainty content and all irreversible actions in early releases. The interface shows what is proposed, why, and what accepting entails.
- **Confirmation** — the AI prepares an action and states precisely what will happen; the user confirms explicitly before it runs. Confirmation must name the action, its target, and its reversibility — "Send this reply to the customer" with the reply visible beats "Proceed?" every time.
- **Action** — the AI acts without asking. Reserve for low-stakes, reversible, well-understood steps, and always pair with announcement and undo. Anything involving money, external communication, deletion, permissions, or other people starts in recommendation or confirmation and earns action only with measured evidence.

## Designing the boundary well

State the mode in the interface, not just in documentation: a draft awaiting approval looks different from a sent message, and a pending action names its target. Guard against approval fatigue — batching low-stakes confirmations, confirming plans rather than every step, and escalating only genuine decisions all keep the human's attention for the moments that matter. Every approval needs an audit trace: who approved what, on what evidence, when. And every boundary needs a privacy check: approval screens that expose other people's data to justify an action need scoping before they ship.

## Exercise

List every action your feature can take, assign each a starting mode, and write the condition that would let it graduate to a lighter mode. Actions you cannot justify in any mode do not ship — cut them on paper now.

**Related:** [Correction, undo, and recovery patterns](/learn/ai-for-designers/correction-undo-and-recovery-patterns), [Designing the AI behavior contract](/learn/ai-for-designers/designing-the-ai-behavior-contract), [When a workflow beats an agent](/learn/agentic-ai/when-not-to-use-an-agent)

## Next

See the boundary applied in [Trust patterns: a redesign worked example](/learn/ai-for-designers/trust-patterns-worked-example).
