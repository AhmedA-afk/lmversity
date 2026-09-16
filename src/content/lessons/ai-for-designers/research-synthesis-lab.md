---
title: "Lab: build a source-traceable research synthesis board"
track: "ai-for-designers"
status: live
summary: "Synthesize twelve authored driver interviews for a fictional logistics operator into a theme board where every finding traces to its sources, with AI assistance you audit."
duration: "3 h"
---

This lab matters because assisted synthesis is where AI quietly invents themes, flattens minority views, and strips attribution. You will run the full loop — plan, redact, synthesize with AI help, then audit every theme back to its sources — and walk away with a board you could defend in a review.

## The situation

**Deccan Freightways** is a fictional mid-size logistics operator running parcel routes across Karnataka, Maharashtra, and Telangana. Its product team is scoping a scheduling copilot for depot dispatchers and has interviewed twelve people: six dispatchers, three drivers, two depot managers, and one customer-support lead. The interviews were conducted in Kannada, Hindi, and English; what follows is the translated, redacted excerpt pack you are given. Everything below is authored for this lab — illustrative, not real people, not real quotes.

Your deadline is one working session, about three hours. Your reader is the team's designer-founder, who distrusts AI summaries and has asked for one thing: "show me nothing you cannot point at."

## What you are given

Twelve excerpts, labeled D1–D6 (dispatchers), R1–R3 (drivers), M1–M2 (depot managers), S1 (support lead). Two excerpts contain personal data patterns (a phone number, a home address) planted deliberately — redaction is part of the lab.

- **D1:** "The morning shift starts at 6 but the first route sheet never arrives before 6:40. I re-plan the first hour from memory every day."
- **D2:** "When a truck breaks down I call the depot manager, then the customer, then I rewrite three sheets by hand. Nobody sees the rewrite."
- **D3:** "I keep my own notebook with which drivers prefer night routes. The system assigns blindly and they swap among themselves anyway."
- **D4:** "Festival weeks double the load and the software shows the same capacity as a normal Tuesday. I plan festival staffing on paper."
- **D5:** "New dispatchers take two months to learn which customers tolerate late delivery and which escalate immediately. That knowledge is nowhere written."
- **D6:** "I would trust a scheduling suggestion if it showed me why — which orders, which constraints. A bare time slot means nothing to me."
- **R1:** "Night routes pay better but the rest-stop information is wrong half the time. I plan my own halts and tell no one."
- **R2:** "My phone number is 98XXX XXXXX — call me before changing my route, don't just push an update. Twice this month I drove to the old dock."
- **R3:** "Traffic near the Hubballi bypass after 5 p.m. adds an hour. Everyone local knows this. The schedule does not."
- **M1:** "My home address is 14, ___ Cross, Jayanagar — drivers drop paperwork there when the depot is locked. The process assumes the depot is always open."
- **M2:** "I approve overtime verbally. There is no record, so month-end reconciliation is a negotiation, not a report."
- **S1:** "Customers ask for delivery windows we never promised. The support script says '2–4 days' while dispatch plans for 5. The gap is where complaints live."

## Deliberately out of scope

No new interviews, no contacting real people, no publishing verbatim quotes outside this exercise. The privacy rules you need are simple and stated below: redact before pasting, keep a log, retain nothing beyond the session. (A full lesson on transcript privacy is coming later in this track.) Do not use a real AI product's training-on-inputs default with anything resembling real personal data; this pack is fictional, but practice the redaction as if it were not.

## Outcomes

By the end of this lab you will be able to:

- Draft a research plan that keeps questions, recruitment, consent, and judgment with the researcher while delegating drafting and clustering to the tool.
- Redact personal data from a transcript pack before it touches any assistant, and record what you removed.
- Produce a synthesis board where every theme links to the excerpts that support it, with dissent preserved rather than averaged away.
- Audit an AI-assisted synthesis for invented themes, flattened minority views, and unattributed summaries — and fix each.

## Steps

### 1. Plan on one page (20 min)

Write the plan before opening any tool: research questions (three or fewer), what counts as evidence for each, who consented to what, and where the material may live. State explicitly which judgments stay human — theme naming, hiring/firing-adjacent claims, anything about individuals. If a question cannot be answered from twelve excerpts, write that down instead of stretching the data.

### 2. Redact before you paste (25 min)

Go through the pack and mark every personal-data pattern: R2's phone number, M1's home address, plus any indirect identifiers (named people, exact locations tied to individuals). Replace with bracketed tokens (`[PHONE]`, `[HOME ADDRESS]`) and keep a redaction log: what you removed, why, and whether the removal changes any theme's meaning. This log ships with the board.

### 3. Synthesize with assistance, then audit (70 min)

Use any assistant you have to propose clusters: paste the redacted pack, ask for candidate themes with supporting excerpt IDs, then do the audit yourself — this is the core skill. For each proposed theme, verify: does each cited excerpt actually support it? Is there an excerpt that contradicts it? Did any excerpt get used for two contradictory themes? Is any theme supported by a single voice presented as consensus? Reject or rewrite every theme that fails. Expect to reject at least two; if you reject none, you audited too kindly — re-read each theme against its excerpts and assume the assistant flattered the data.

### 4. Preserve the dissent (25 min)

Find the finding the majority view would erase: D3's notebook system (workaround as expertise), R1's self-planned halts, M2's verbal overtime. Give each a named place on the board with its source, marked as minority practice rather than noise. A board without a dissent lane is a report, not research.

### 5. Write the board and the handoff note (40 min)

Structure the board as: questions → themes (each with excerpt links + dissent flags) → what the data cannot answer → implications for the scheduling copilot, each implication tagged to the theme that supports it. Add a handoff note: what you redacted, what you rejected and why, and what a second researcher should re-check. Time-box the whole step; completeness of traceability beats polish.

## Artifact

A synthesis board (one page or one slide set) plus redaction log and audit trail: every theme traceable to excerpt IDs, dissent preserved, rejected AI-proposed themes recorded with reasons. This is an early piece of the course portfolio — file it alongside your MVP case study artifacts.

## Honesty rules

Label the board "synthesized from fictional excerpts for coursework" if you show it anywhere. Never present R2's phone number or M1's address as real — they are planted patterns, and your redaction log proves you treated them as live fire. If you used an AI assistant, name it and describe what you delegated versus what you judged; the portfolio prompt rewards that separation.

**Related:** [Designing a UX evaluation rubric](/learn/ai-for-designers/designing-a-ux-evaluation-rubric), [AI product design: common mistakes](/learn/ai-for-designers/ai-product-design-common-mistakes)

## Next

Carry your board into the [MVP capstone](/learn/ai-for-designers/capstone-design-a-trustworthy-ai-feature) as supporting evidence; the module's worked example and quiz join this track in the next build batch.
