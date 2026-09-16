# AI for Designers — full-course design (MVP → complete, at FDE depth)

Last updated: 2026-09-15. Status: design complete; Stage A (MVP, 25 nodes) live; Stages B–E (107 nodes) registered as `coming`.

This document is the R&D output that takes the MVP to a complete course with the
same structural depth as the Forward Deployed Engineer path: own phases, own labs
with fictional customers and timed steps, module-level outcomes, portfolio artifacts
at every stage, and capstone pathways with rubrics.

## What "FDE depth" means here, concretely

Studied 2026-09-15 from `src/data/fde.ts` (183 nodes, 10 phases) and the FDE labs:

- **Kinds per module, not just lessons.** FDE mixes lesson / lab / drill / bootcamp /
  capstone / reference inside every phase. The main curriculum has no drill
  collection, so labs, worked examples, and scenario quizzes carry that weight here.
- **A module states an outcome** — "what you can do afterwards" — and every lab names
  an **artifact** that enters the portfolio.
- **Fictional customers with messy reality.** FDE labs give you a named customer, a
  defective dataset, a deadline, and an explicit out-of-scope list. Every Stage B–E
  lab in this design does the same: named situation, supplied materials, timed steps,
  honesty constraints.
- **No orphan pages.** FDE plan nodes derive liveness from disk; here, every `coming`
  node below is a build commitment with an owner stage and a batch number.

## Recurring simulated customers (shared across labs and capstones)

Three fictional organizations, reused so later labs inherit context instead of
re-explaining it. All scenarios are illustrative; names, data, and quotes are
authored, never presented as real.

1. **Kaveri Health Network** — fictional 11-hospital chain in Karnataka/Maharashtra.
   Use: handbook Q&A, patient-message drafting, consent-heavy flows, escalation to
   humans. Inherits the MVP's document-Q&A example.
2. **Deccan Freightways** — fictional mid-size logistics operator. Use: driver
   interview synthesis, scheduling copilot, ops triage, multilingual (Kannada/Hindi/
   English) input, low-connectivity depots.
3. **Meridian Bank (illustrative)** — fictional retail bank. Use: support-draft
   review, refund approvals, audit traces, adversarial and misuse cases.

## Architecture: five stages, 132 nodes

Stage A is live (25 nodes, Modules 1–4 + capstone). Stages B–E add 107 nodes.

### Stage A — Foundations and the first case study (LIVE, 25)

Modules: What AI changes in design (6) → Behavior before the screen (6) →
Trustworthy interactions (6) → Prototype and evaluate (6) → MVP capstone (1).
Artifact: evaluated case study + interaction spec.

### Stage B — AI-assisted design workflows (26 nodes, 3 modules)

Lane 1 of the course promise: using AI inside design work without outsourcing judgment.

**B1 Research and synthesis (8).** Outcome: run an AI-assisted synthesis whose every
theme traces to approved source material.
Nodes: `ai-assisted-research-planning` (lesson), `working-with-interview-transcripts-safely`
(lesson), `synthesis-with-traceable-evidence` (lesson), `research-synthesis-lab` (lab,
LIVE exemplar — Deccan Freightways driver interviews), `ai-research-synthesis-worked-example`
(worked-example), `research-synthesis-common-mistakes` (common-mistakes),
`ai-research-workflow-cheatsheet` (cheatsheet), `ai-assisted-research-quiz` (quiz).
Artifact: traceable synthesis board.

**B2 Ideation, critique, iteration (9).** Outcome: show a documented
divergence-and-convergence trail from generated breadth to a tested selection.
Nodes: `using-ai-for-divergent-ideation`, `turning-design-constraints-into-a-creative-brief`,
`prompting-for-design-critique`, `ideation-trail-lab` (lab), `generate-critique-revise-worked-example`,
`novelty-vs-usefulness-in-ai-ideation`, `ai-ideation-common-mistakes`, `ai-ideation-cheatsheet`,
`ai-ideation-and-critique-quiz`.
Artifact: divergence/convergence trail.

**B3 Content, systems, production (9).** Outcome: ship a structured content spec with
approved terminology, variants, edge cases, localization notes, and review status.
Nodes: `ai-for-ux-writing-and-content-design`, `generating-structured-content-not-loose-copy`,
`design-system-documentation-with-ai`, `component-inventory-and-consistency-review`,
`localization-and-inclusive-language-review`, `structured-content-spec-lab` (lab),
`content-workflow-worked-example`, `ai-content-design-common-mistakes`, `ai-content-workflow-quiz`.
Artifact: structured content specification.

### Stage C — Product interaction expansion (35 nodes, 4 modules)

Lane 2 deepened: every interaction pattern the MVP introduced only as states.

**C1 Input and intent (8).** Outcome: match chat / form / canvas / command to the task
and design inputs that constrain well. Nodes: `choosing-chat-form-canvas-or-command`,
`designing-good-ai-inputs`, `suggested-prompts-without-empty-state-clutter`,
`multimodal-input-patterns-for-designers`, `clarification-before-generation-worked-example`,
`ai-input-patterns-cheatsheet`, `ai-input-patterns-common-mistakes`, `ai-input-patterns-quiz`.

**C2 Waiting, streaming, progress (8).** Outcome: design latency behavior with truthful
status, stable layout, and cancellation everywhere. Nodes: `designing-for-ai-latency`,
`streaming-vs-staged-results-compared`, `partial-output-and-layout-stability`,
`stop-retry-and-regenerate-patterns`, `long-running-ai-task-worked-example`,
`latency-and-progress-cheatsheet`, `latency-and-progress-common-mistakes`, `latency-progress-quiz`.

**C3 Output and generative UI (9).** Outcome: prototype a generative UI surface with
editable output and visible provenance. Nodes: `choosing-prose-structure-or-components`,
`designing-structured-ai-output`, `progressive-disclosure-for-generated-results`,
`editable-output-and-provenance`, `generative-ui-prototype-lab` (lab),
`generative-ui-worked-example`, `generated-output-common-mistakes`,
`generative-ui-patterns-cheatsheet`, `generative-output-quiz`.

**C4 Agents, tools, autonomy (10).** Outcome: model an agent's plan, tool use,
permissions, checkpoints, cancellation, recovery, and audit history. Nodes:
`designing-visible-agent-plans`, `tool-use-progress-and-status`,
`permissions-confirmation-and-approval`, `designing-for-paused-blocked-and-recovering-agents`,
`agent-memory-and-user-control`, `agent-activity-model-lab` (lab),
`agent-vs-workflow-for-designers-compared`, `redesign-an-overautonomous-agent-worked-example`,
`agent-interface-common-mistakes`, `agent-interaction-quiz`.

### Stage D — Evaluation, safety, accessibility, handoff (29 nodes, 3 modules)

**D1 Evaluation as design practice (9).** Outcome: write and run an eval plan that
settles a real design decision. Nodes: `turning-user-needs-into-ai-eval-scenarios`,
`quality-rubrics-for-subjective-output`, `pairwise-comparison-for-design-decisions`,
`pairwise-evaluation-lab` (lab), `evaluating-the-system-not-just-the-model`,
`online-feedback-without-dark-patterns`, `ai-design-eval-plan-worked-example`,
`ai-design-evaluation-cheatsheet`, `ai-design-evaluation-quiz`.

**D2 Responsible and inclusive design (11).** Outcome: audit an AI experience for
privacy, disclosure, bias, misuse, and assistive-technology access — with a test plan.
Nodes: `privacy-boundaries-in-ai-design-workflows`, `designing-disclosure-and-consent`,
`bias-and-representation-in-generated-output`, `designing-for-misuse-and-adversarial-input`,
`accessibility-of-streaming-and-live-generated-content`,
`screen-reader-focus-and-announcement-patterns-for-ai`, `motion-cognitive-load-and-user-control`,
`inclusive-ai-audit-lab` (lab), `inclusive-ai-experience-worked-example`,
`responsible-ai-design-common-mistakes`, `responsible-and-accessible-ai-design-quiz`.

**D3 Engineering handoff (9).** Outcome: produce an interaction spec + contract an
engineer can review without guessing. Nodes: `the-ai-interaction-spec`,
`designer-engineer-contract-for-ai-features`, `mapping-design-states-to-api-events`,
`instrumentation-for-ai-user-journeys`, `handoff-a-streaming-assistant-worked-example`,
`ai-interaction-spec-template` (template), `ai-design-handoff-common-mistakes`,
`ai-interaction-spec-cheatsheet`, `ai-design-handoff-quiz`.

### Stage E — Capstone pathways, portfolio, templates (17 nodes, 2 modules)

**E1 Capstone pathways and portfolio (8).** Three full pathways (research assistant,
creative copilot, bounded task agent), each with brief, constraints, source pack,
stakeholder concerns, failure cases, acceptance criteria — plus `capstone-reference-solution`,
`capstone-self-review-rubric`, `capstone-peer-critique-rubric`, `portfolio-case-study-outline`,
`interview-presentation-outline`.

**E2 Templates and checklists (9).** One page each, each with introduction, worked
fragment, and links back to its module: `opportunity-brief-template`,
`behavior-contract-template`, `prompt-context-worksheet`, `synthesis-evidence-sheet`,
`trust-patterns-checklist`, `authority-approval-map-template`, `scenario-set-template`,
`accessibility-test-plan-template`, `handoff-checklist`.

## Lab template (mandatory for every Stage B–E lab)

Copied from the FDE lab structure, adapted to the lessons schema (outcomes/artifact
live as body sections since `check-content` rejects unknown frontmatter keys):

1. Titled situation with a named fictional customer, stated constraints, deadline.
2. "What you are given": supplied materials, authored inline (excerpts, briefs, packs).
3. "Deliberately out of scope": what the lab does not ask for, and what to read instead.
4. Timed steps with minute/hour budgets.
5. Named portfolio artifact + where it is reviewed (rubric, critique, capstone).
6. Honesty rules: illustrative labeling, consent/retention notes, no fabricated metrics.

The LIVE exemplar is `research-synthesis-lab` (Deccan Freightways, 12 authored
interview excerpts, 3-hour budget). Every future lab batch references it as the bar.

## Portfolio map (what "hireable" looks like at the end)

1. Opportunity brief → 2. Behavior contract + state model → 3. Trust-passed flow →
4. Traceable synthesis board → 5. Ideation trail → 6. Content spec → 7. Generative-UI
prototype → 8. Agent activity model → 9. Eval plan + findings log → 10. Inclusion audit →
11. Interaction spec + handoff → 12. Capstone case study + portfolio narrative.
A learner finishing all twelve has the designer equivalent of the FDE evidence portfolio.

## Execution plan (build batches, in order)

1. B1 (8) with the research lab exemplar live — sets the lab bar. 
2. B2 (9) + B3 (9).
3. C1 (8) + C2 (8).
4. C3 (9) + C4 (10).
5. D1 (9) + D3 (9).
6. D2 (11) — needs the most review care (a11y + safety claims).
7. E1 (8) capstone pathways + reference solution.
8. E2 (9) templates.
9. `/roles/designer` repoint, flagship guide, acquisition pass, Search Console review.

Each batch: write files → register nodes live → `check:content` + `build` +
`check:links` → reviewer pass → checklist log entry. No batch invents metrics,
vendor capabilities, or quotes; scenarios stay labeled illustrative.
