---
title: "Choosing where AI belongs: a worked example"
track: "ai-for-designers"
status: live
summary: "Work through an illustrative support-draft feature to decide where AI earns its place, what the baseline is, and what failure costs."
duration: "11 min read"
---

This worked example matters because most AI features are chosen before they are justified. Work this method once on your own feature and you will have the Module 1 artifact: a one-page opportunity brief a stakeholder can actually decide on.

## Setup: the illustrative brief

The following scenario is illustrative, not a report of a real product. A small support team wants an assistant that drafts replies to common customer questions. Constraints: two support agents, no engineers dedicated to the feature, every reply currently written by hand, mistakes in refunds or policy statements carry real cost. The proposed AI role: draft a reply from the help-center article and the ticket history; the agent reviews, edits, and sends.

## Step 1 — name the user need precisely

"Handle support tickets faster" is not a need; it is a wish. The need: agents spend most of their time restating the same policy answers with small per-customer variations, and wait times grow when both agents are busy. Evidence you would gather before designing: ticket volume by category, time per reply, and which replies are genuinely repetitive versus judgment-heavy. If the data shows every ticket is a snowflake, the AI role shrinks — that is the method working, not failing.

## Step 2 — state the non-AI baseline

The baseline is the current hand-written workflow plus the cheapest non-AI improvements: better macros, better article search, clearer policy templates. Price the AI against that, not against nothing. For this scenario the baseline already handles accuracy well — humans rarely misstate policy — but slowly. So the AI must buy speed without spending accuracy. Any design that cannot show both sides of that trade is not ready.

## Step 3 — score uncertainty and recoverability

Ask two questions of every subtask:

- **How uncertain is the output?** Restating a policy article from a retrieved source is low-uncertainty work if the source is current; composing a refund decision from scattered history is high-uncertainty.
- **How recoverable is a failure?** A wrong draft the agent reads before sending is recoverable. A wrong answer sent directly to the customer, or an action taken on the account, is not.

The design follows the answers: AI drafts, human approves, nothing sends itself. High-uncertainty subtasks (refund amounts, account changes) stay human-only or require explicit confirmation — the boundary logic Module 3 formalizes in [Human review and approval boundaries](/learn/ai-for-designers/human-review-and-approval-boundaries).

## Step 4 — write the value hypothesis and failure costs

Value hypothesis: draft-first replies cut handling time on repetitive tickets while policy accuracy stays at the human baseline, measured on a held-out ticket set. Failure costs, stated plainly: a misstated refund policy sent to a customer, an agent who stops reading drafts carefully over time, customer data in prompts retained beyond policy. Each cost gets an owner and a mitigation — review required before send, sampled audits, retention limits — before any screen is drawn.

## Your turn

Apply the same four steps to your capstone feature and write the one-page brief: user problem, proposed AI role, non-AI baseline, value hypothesis, failure costs, decision owner. If the baseline wins, say so — a brief that recommends against AI is a passing artifact.

**Related:** [When a workflow beats an agent](/learn/agentic-ai/when-not-to-use-an-agent), [Designing the AI behavior contract](/learn/ai-for-designers/designing-the-ai-behavior-contract), [AI product design: common mistakes](/learn/ai-for-designers/ai-product-design-common-mistakes)
