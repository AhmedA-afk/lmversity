# Content registry — audit views

Generated 2026-09-15T13:42:00.632Z by `scripts/build-content-registry.mjs`.
2416 public content items. Machine-readable source: `content-registry.json`.
Heuristic fields (intent, audience, freshness) record their signals in JSON — overrule during scoring.

## By family

- lesson: 2039
- quiz: 89
- lab: 66
- reference: 59
- answer: 33
- track: 33
- project: 31
- page: 21
- role: 12
- blog: 10
- guide: 9
- interview: 7
- scenario: 6
- glossary: 1

## By status

- live: 2416

## By search intent (heuristic)

- concept: 1870
- comparison: 107
- build: 97
- practice: 89
- reference: 60
- answer: 33
- course-hub: 33
- worked-example: 29
- troubleshooting: 24
- how-to: 15
- role-path: 12
- nav: 12
- read: 10
- hub: 9
- interview-prep: 7
- scenario: 6
- definition: 3

## By primary audience (heuristic)

- ai-engineer: 1640
- beginner-engineer: 439
- forward-deployed-engineer: 194
- general: 125
- job-candidate: 7
- developer: 1
- ml-engineer: 1
- data-scientist: 1
- product-manager: 1
- founder: 1
- ceo: 1
- designer: 1
- content-creator: 1
- marketer: 1
- security-engineer: 1
- student: 1

## Coverage matrix — what each live track actually ships

| track | files | concept | worked ex. | mistakes | compared | cheatsheet | quiz | lab | capstone | % code | % check | % sources | med. words | quick guide | quiz bank |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ai-literacy | 59 | 43 | 2 | 0 | 2 | 2 | 7 | 1 | 2 | 61% | 0% | 2% | 1513 | — | — |
| maths-foundations | 193 | 179 | 0 | 0 | 2 | 0 | 0 | 11 | 1 | 71% | 0% | 0% | 763 | — | — |
| python-data-apis | 58 | 45 | 0 | 2 | 0 | 0 | 10 | 0 | 1 | 98% | 0% | 3% | 1615 | — | — |
| ai-foundations | 160 | 127 | 9 | 0 | 10 | 0 | 10 | 0 | 4 | 68% | 0% | 1% | 1009 | — | yes |
| llm-foundations | 133 | 113 | 0 | 0 | 10 | 0 | 7 | 2 | 1 | 48% | 92% | 0% | 793 | — | — |
| classical-ai | 83 | 80 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 96% | 0% | 0% | 902 | — | — |
| machine-learning | 209 | 185 | 0 | 0 | 2 | 0 | 0 | 19 | 3 | 19% | 0% | 6% | 407 | — | — |
| deep-learning | 136 | 125 | 0 | 0 | 0 | 0 | 0 | 8 | 3 | 98% | 0% | 0% | 852 | — | — |
| prompt-engineering | 143 | 117 | 1 | 1 | 8 | 5 | 8 | 1 | 2 | 69% | 0% | 0% | 696 | — | yes |
| context-engineering | 132 | 101 | 0 | 2 | 13 | 7 | 8 | 0 | 1 | 53% | 0% | 3% | 846 | — | — |
| structured-outputs | 124 | 103 | 4 | 0 | 4 | 5 | 7 | 0 | 1 | 77% | 0% | 3% | 684 | — | — |
| hallucinations | 132 | 108 | 0 | 0 | 10 | 6 | 7 | 0 | 1 | 48% | 0% | 2% | 734 | yes | — |
| genai-app-dev | 130 | 118 | 0 | 0 | 5 | 6 | 0 | 0 | 1 | 78% | 0% | 0% | 692 | — | — |
| rag | 57 | 29 | 6 | 6 | 3 | 6 | 6 | 0 | 1 | 49% | 47% | 2% | 922 | yes | yes |
| tools-function-calling | 126 | 93 | 1 | 7 | 11 | 5 | 7 | 1 | 1 | 74% | 0% | 0% | 691 | — | — |
| mcp | 57 | 28 | 6 | 6 | 5 | 6 | 6 | 0 | 0 | 60% | 53% | 5% | 553 | yes | yes |
| agentic-ai | 30 | 27 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 23% | 87% | 0% | 544 | — | yes |
| harness-design | 26 | 26 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65% | 100% | 4% | 505 | — | — |
| evals-red-teaming | 28 | 25 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 21% | 100% | 4% | 595 | — | yes |
| production | 28 | 28 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 54% | 100% | 4% | 520 | yes | — |
| fine-tuning | 26 | 21 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 27% | 0% | 8% | 557 | — | — |
| responsible-ai | 7 | 6 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 14% | 0% | 14% | 392 | — | — |
| local-inference | 14 | 13 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 79% | 0% | 7% | 419 | — | — |

## Track gap briefs

Mechanical per-track audit. Practice-ending = last node of a module is quiz/lab/capstone/worked-example/drill;
dead-end = the track's final live node is a plain concept; orphan boundary = a module `startsAt` slug absent from the track's nodes.

### ai-literacy — 59 files, 9 modules — starts: "What AI can and can't do: the whole picture"

- missing kinds: common-mistakes
- 6 island lessons (no in-body links)
- 2 duplicate-candidate pairs in track
- promise gap: no live node title covers "no code required"

### maths-foundations — 193 files, 17 modules — starts: "Vectors: The Basic Unit of Data"

- modules without practice ending: "The essential maths for AI" ends on convexity-and-loss-landscapes (concept); "Single-variable calculus" ends on one-dimensional-optimisation-clinic (concept); "Decompositions and numerical linear algebra" ends on kernel-matrices-and-kernel-trick (concept); "Mathematical language and computation" ends on sequences-recurrences-polynomials-quadratics-and-growth-rates (concept) +12 more
- dead-end finish: last live lesson is s4-6-causal-graphical-models-do-calculus-and-identifiability-limits (concept)
- missing kinds: quiz, worked-example, common-mistakes, cheatsheet
- 1 island lesson (no in-body links)
- 10 duplicate-candidate pairs in track
- promise gap: no live node title covers "The minimum maths"

### python-data-apis — 58 files, 7 modules — starts: "The Whole Game: Messy Data to a Model-Ready Pipeline"

- modules without practice ending: "Getting started" ends on python-data-pipeline-whole-game (concept); "NumPy" ends on selecting-filtering-indexing (concept)
- missing kinds: worked-example, cheatsheet
- 2 island lessons (no in-body links)
- 3 duplicate-candidate pairs in track

### ai-foundations — 160 files, 9 modules — starts: "How LLMs actually work"

- modules without practice ending: "How models work" ends on ai-ml-dl-as-nested-fields (concept); "Inside the network" ends on ai-alignment-and-safety-basics (concept); "The wider picture" ends on why-nonlinearity-matters (concept)
- dead-end finish: last live lesson is why-nonlinearity-matters (concept)
- missing kinds: common-mistakes, cheatsheet
- 42 island lessons (no in-body links)
- 1 thin vs family median
- 4 duplicate-candidate pairs in track

### llm-foundations — 133 files, 6 modules — starts: "The Whole Game: One Token, End to End"

- modules without practice ending: "From text to tokens" ends on what-are-embeddings (concept); "Training and generation" ends on instruction-tuning-and-rlhf (concept); "The model landscape" ends on multimodal-llms-explained (concept); "Architecture internals" ends on grouped-query-attention (concept)
- missing kinds: worked-example, common-mistakes, cheatsheet
- 2 thin vs family median
- 20 duplicate-candidate pairs in track

### classical-ai — 83 files, 4 modules — starts: "State Spaces: Representation, Actions, Goals, and Costs"

- modules without practice ending: "Agents, robotics, and hybrid systems" ends on constraint-satisfaction (concept); "Original concept recaps" ends on uncertainty-and-decision (concept)
- dead-end finish: last live lesson is uncertainty-and-decision (concept)
- missing kinds: quiz, worked-example, common-mistakes, cheatsheet
- 59 island lessons (no in-body links)
- 2 duplicate-candidate pairs in track

### machine-learning — 209 files, 12 modules — starts: "How to use the Classical ML course"

- modules without practice ending: "Orientation and problem framing" ends on generalization-and-evaluation (concept); "Data, features, and decisions" ends on ml-115-case-study-triage-under-review-capacity (concept); "Maths, objectives, and generalisation" ends on regularization-and-bias-variance (concept); "Linear and generalised models" ends on ml-216-case-study-demand-forecast-with-uncertainty (concept) +7 more
- dead-end finish: last live lesson is deep-lectures/907-time-series-ranking-and-recommender-systems-under-temporal-exposure-feedback (concept)
- missing kinds: quiz, worked-example, common-mistakes, cheatsheet
- 94 island lessons (no in-body links)
- 13 duplicate-candidate pairs in track
- promise gap: no live node title covers "model families"

### deep-learning — 136 files, 6 modules — starts: "How to use the Deep Learning programme"

- modules without practice ending: "Programme orientation" ends on dl-001-how-to-use-the-deep-learning-program (concept); "Sequences, transformers, generation, and RL" ends on sequence-generative/338-rlhf-preference-optimization-and-alignment-bridge (concept); "Concept recaps" ends on neural-networks-and-representations (concept)
- dead-end finish: last live lesson is neural-networks-and-representations (concept)
- missing kinds: quiz, worked-example, common-mistakes, cheatsheet
- 61 island lessons (no in-body links)
- 3 duplicate-candidate pairs in track

### prompt-engineering — 143 files, 7 modules — starts: "The Whole Game: One Task From Vague Ask to Reliable Prompt"

- modules without practice ending: "Prompt anatomy" ends on role-prompting (concept); "Examples and reasoning" ends on negative-instructions-pitfall (concept); "Reliability and iteration" ends on multi-turn-prompt-design (concept); "Prompts in production" ends on extended-thinking-and-reasoning-effort (concept) +2 more
- 5 island lessons (no in-body links)
- 23 duplicate-candidate pairs in track

### context-engineering — 132 files, 5 modules — starts: "The Whole Game of Context Engineering"

- modules without practice ending: "Assembling context" ends on context-window-testing-and-eval (concept); "How long contexts fail" ends on context-observability-and-token-accounting (concept)
- missing kinds: worked-example
- 26 duplicate-candidate pairs in track

### structured-outputs — 124 files, 5 modules — starts: "The Whole Game of Structured Output"

- modules without practice ending: "Making it reliable" ends on structured-output-failure-modes (concept); "Harder schema shapes" ends on schema-versioning-and-migration (concept)
- missing kinds: common-mistakes
- 10 duplicate-candidate pairs in track

### hallucinations — 132 files, 0 modules — starts: "The Whole Game: From Fabrication to Trustworthy Systems"

- missing kinds: worked-example, common-mistakes
- 8 duplicate-candidate pairs in track
- promise gap: no live node title covers "contain it"

### genai-app-dev — 130 files, 6 modules — starts: "The Whole Game: Build a Support-Reply Drafter End to End"

- modules without practice ending: "Your first feature" ends on designing-chat-ux (concept); "Cost, latency and limits" ends on rate-limits-and-retry-strategies (concept); "Reliability and safety" ends on quiz-shipping-operating (concept); "Beyond the first version" ends on prompt-versioning-rollback (concept) +1 more
- missing kinds: quiz, worked-example, common-mistakes
- 2 island lessons (no in-body links)
- 19 duplicate-candidate pairs in track

### rag — 57 files, 0 modules — starts: "RAG, End to End: The Whole Game"

- 1 island lesson (no in-body links)
- 5 duplicate-candidate pairs in track

### tools-function-calling — 126 files, 5 modules — starts: "The Whole Game: A Tool Call From Question to Answer"

- modules without practice ending: "Tool calling basics" ends on tool-choice-and-forcing-tool-use (concept); "Multi-step and parallel use" ends on testing-and-debugging-tool-calls (concept); "Schemas at scale" ends on streaming-partial-tool-calls (concept)
- 29 duplicate-candidate pairs in track

### mcp — 57 files, 0 modules — starts: "What Is MCP"

- dead-end finish: last live lesson is server-design-and-permissions (concept)
- missing kinds: capstone
- 3 island lessons (no in-body links)
- 19 duplicate-candidate pairs in track

### agentic-ai — 30 files, 7 modules — starts: "What Makes Something an Agent"

- modules without practice ending: "What an agent is" ends on react-pattern (concept); "Planning and memory" ends on error-handling-and-retries (concept); "Orchestration and control" ends on when-not-to-use-an-agent (concept); "Failure and evaluation" ends on stopping-conditions-for-agents (concept) +3 more
- dead-end finish: last live lesson is agent-permissions-and-authorization (concept)
- missing kinds: quiz, worked-example, common-mistakes, cheatsheet, capstone
- 1 island lesson (no in-body links)
- promise gap: no live node title covers "when to reach for one instead of a plain prompt"

### harness-design — 26 files, 6 modules — starts: "The Harness: Everything Around the Model"

- modules without practice ending: "What a harness is" ends on prompt-composition (concept); "Permissions and isolation" ends on subprocess-isolation-and-sandboxing (concept); "State and streaming" ends on context-window-management-in-a-harness (concept); "Extension and configuration" ends on tool-output-truncation (concept) +2 more
- dead-end finish: last live lesson is distributed-harness-orchestration (concept)
- missing kinds: quiz, worked-example, common-mistakes, cheatsheet, capstone
- promise gap: no live node title covers "The engineering scaffold"; "that turns a raw model into a working"

### evals-red-teaming — 28 files, 6 modules — starts: "Why Vibes-Based Iteration Breaks Down"

- modules without practice ending: "Why evals matter" ends on writing-eval-metrics (concept); "Judges and regression suites" ends on eval-driven-iteration (concept); "Attacks" ends on automated-adversarial-testing (concept); "Making evals trustworthy" ends on goodharting-your-benchmark (concept) +2 more
- dead-end finish: last live lesson is regression-gates-and-online-signals (concept)
- missing kinds: quiz, worked-example, common-mistakes, cheatsheet, capstone
- 2 island lessons (no in-body links)

### production — 28 files, 0 modules — starts: "Log Every LLM Call as Structured Data"

- dead-end finish: last live lesson is deployment-versioning-and-incidents (concept)
- missing kinds: quiz, worked-example, common-mistakes, cheatsheet, capstone
- 2 island lessons (no in-body links)
- promise gap: no live node title covers "control the bill"

### fine-tuning — 26 files, 7 modules — starts: "Decide: Fine-Tune, Prompt, or RAG?"

- modules without practice ending: "Should you fine-tune at all" ends on synthetic-data-generation (concept); "Methods" ends on fine-tuning-run-hyperparameters (concept); "Training and evaluation" ends on evaluating-a-fine-tuned-model (concept); "Serving a fine-tuned model" ends on merging-and-versioning-adapters (concept) +3 more
- dead-end finish: last live lesson is choosing-managed-vs-self-hosted-fine-tuning (comparison)
- missing kinds: quiz, worked-example, common-mistakes, cheatsheet, capstone
- promise gap: no live node title covers "shrink"

### responsible-ai — 7 files, 0 modules — starts: "Risk before model: frame the system, not just the prompt"

- dead-end finish: last live lesson is consent-contestability-and-impact (concept)
- missing kinds: quiz, worked-example, common-mistakes, cheatsheet, capstone
- 5 island lessons (no in-body links)
- 1 duplicate-candidate pairs in track
- promise gap: no live node title covers "Safety"; "building AI you can defend"

### local-inference — 14 files, 0 modules — starts: "What 'running a model locally' actually means"

- dead-end finish: last live lesson is the-local-privacy-boundary (concept)
- missing kinds: quiz, worked-example, common-mistakes, cheatsheet, capstone

## Scores and dispositions (mechanical pass)

Scale 0/1/2 per dimension; `null` = editorial judgement required. Auto-dispositions are
limited to keep/expand/refresh/investigate — merge, redirect, noindex, archive, replace
and split always need a written human reason (see checklist).

| disposition | items |
|---|---:|
| keep | 2029 |
| investigate | 382 |
| expand | 5 |

| dimension | scored | mean | 0 | 1 | 2 |
|---|---:|---:|---:|---:|---:|
| intentClarity | 2193 | 1.92 | 0 | 186 | 2007 |
| correctnessSources | 45 | 1.27 | 0 | 33 | 12 |
| completeness | 2339 | 1.65 | 39 | 743 | 1557 |
| prerequisiteFit | 2274 | 2.00 | 3 | 0 | 2271 |
| handsOn | 2193 | 1.49 | 535 | 53 | 1605 |
| explanationQuality | 2193 | 1.96 | 20 | 56 | 2117 |
| metadata | 2193 | 1.86 | 0 | 297 | 1896 |
| linking | 2104 | 1.48 | 382 | 321 | 1401 |
| freshnessHealth | 2416 | 0.77 | 811 | 1342 | 263 |
| originality | 0 | — | — | — | — |
| accessibility | 0 | — | — | — | — |
| demand | 0 | — | — | — | — |

### Non-keep dispositions

#### investigate: zero in-body internal links (382)

- /learn/agentic-ai/agents-vs-workflows — Choose an agent only when a workflow is not enough
- /learn/ai-foundations/applied-ai/301-ai-product-discovery-outcomes-and-harm — AI Product Discovery: Outcomes, Users, and Harm
- /learn/ai-foundations/applied-ai/302-choosing-rules-classical-ml-deep-learning-or-llm — Choosing Rules, Classical ML, Deep Learning, or an LLM
- /learn/ai-foundations/applied-ai/303-data-pipelines-lineage-and-data-contracts — Data Pipelines, Lineage, and Data Contracts
- /learn/ai-foundations/applied-ai/304-supervised-learning-product-loop — Supervised Learning in the Product Loop
- /learn/ai-foundations/applied-ai/305-unsupervised-learning-discovery-and-guardrails — Unsupervised Learning for Discovery, Not Automatic Truth
- /learn/ai-foundations/applied-ai/306-self-supervised-learning-data-and-transfer — Self-Supervised Learning: Data, Representations, and Transfer
- /learn/ai-foundations/applied-ai/307-reinforcement-learning-product-suitability — Reinforcement Learning: Product Suitability and Safe Constraints
- /learn/ai-foundations/applied-ai/309-embeddings-similarity-and-index-design — Embeddings, Similarity, and Index Design
- /learn/ai-foundations/applied-ai/311-agents-tools-and-approval-boundaries — Agents, Tools, and Approval Boundaries
- /learn/ai-foundations/applied-ai/312-multimodal-ai-inputs-fusion-and-evaluation — Multimodal AI: Inputs, Fusion, and Evaluation
- /learn/ai-foundations/applied-ai/313-experimentation-ab-tests-and-decision-quality — Experimentation, A/B Tests, and Decision Quality
- /learn/ai-foundations/applied-ai/314-evaluation-evidence-and-human-review — Evaluation Evidence and Human Review
- /learn/ai-foundations/applied-ai/315-monitoring-drift-and-incident-response — Monitoring, Drift, and Incident Response
- /learn/ai-foundations/applied-ai/316-healthcare-ai-clinical-workflows-and-safety — Applied Case: Healthcare AI and Clinical Workflow Safety
- /learn/ai-foundations/applied-ai/317-education-ai-learning-and-assessment-integrity — Applied Case: Education AI, Learning, and Assessment Integrity
- /learn/ai-foundations/applied-ai/318-finance-ai-controls-fairness-and-model-risk — Applied Case: Finance AI, Controls, Fairness, and Model Risk
- /learn/ai-foundations/applied-ai/319-manufacturing-ai-quality-and-maintenance — Applied Case: Manufacturing AI for Quality and Maintenance
- /learn/ai-foundations/applied-ai/320-public-sector-ai-procurement-and-accountability — Applied Case: Public-Sector AI, Procurement, and Accountability
- /learn/ai-foundations/applied-ai/321-privacy-security-and-sensitive-data — Privacy, Security, and Sensitive Data in Applied AI
- /learn/ai-foundations/applied-ai/322-deployment-release-strategy-and-fallbacks — Deployment, Release Strategy, and Safe Fallbacks
- /learn/ai-foundations/applied-ai/323-applied-ai-architecture-review — Applied AI Architecture Review
- /learn/ai-foundations/applied-ai/324-applied-ai-project-gates-and-model-card — Applied AI Project Gates and the Model Card
- /learn/ai-foundations/reliable-ai/201-provenance-consent-and-data-rights — Provenance, Consent, and Data Rights
- /learn/ai-foundations/reliable-ai/202-labels-annotation-and-ground-truth — Labels, Annotation, and the Limits of Ground Truth
- /learn/ai-foundations/reliable-ai/203-benchmarks-evaluations-and-capability-claims — Benchmarks, Evaluations, and Defensible Capability Claims
- /learn/ai-foundations/reliable-ai/204-distribution-shift-and-robustness — Distribution Shift, Robustness, and Monitoring
- /learn/ai-foundations/reliable-ai/206-hallucination-grounding-and-verification — Hallucination, Grounding, and Verification
- /learn/ai-foundations/reliable-ai/207-interpretability-and-explanation-boundaries — Interpretability, Explanations, and Their Boundaries
- /learn/ai-foundations/reliable-ai/208-fairness-problem-formulation-and-measurement — Fairness: Problem Formulation and Measurement
- /learn/ai-foundations/reliable-ai/209-fairness-mitigation-and-governance — Fairness Mitigation and Governance
- /learn/ai-foundations/reliable-ai/210-privacy-threat-modeling-and-minimization — Privacy Threat Modeling and Data Minimization
- /learn/ai-foundations/reliable-ai/211-privacy-preserving-learning-and-release — Privacy-Preserving Learning and Release
- /learn/ai-foundations/reliable-ai/212-adversarial-ml-and-input-security — Adversarial ML and Input Security
- /learn/ai-foundations/reliable-ai/215-human-feedback-preference-data-and-rlhf — Human Feedback, Preference Data, and RLHF
- /learn/ai-foundations/reliable-ai/217-governance-risk-tiers-and-accountability — Governance, Risk Tiers, and Accountability
- /learn/ai-foundations/reliable-ai/218-audits-evidence-and-independent-review — Audits, Evidence, and Independent Review
- /learn/ai-foundations/reliable-ai/219-incident-response-rollback-and-learning — AI Incidents, Rollback, and Organisational Learning
- /learn/ai-foundations/reliable-ai/220-human-in-the-loop-and-meaningful-oversight — Human-in-the-Loop and Meaningful Oversight
- /learn/ai-foundations/reliable-ai/221-contestability-appeals-and-recource — Contestability, Appeals, and Recourse
- … 342 more in content-registry.json

#### expand: thin vs family median (238w vs ~775w) (1)

- /learn/ai-foundations/choosing-a-model — Choosing a model in 2026

#### expand: thin vs family median (277w vs ~775w) (1)

- /learn/llm-foundations/next-token-prediction — Next-Token Prediction: The One Objective

#### expand: thin vs family median (269w vs ~775w) (1)

- /learn/llm-foundations/tokenization-explained — Tokenization: How Text Becomes Tokens

#### expand: thin vs family median (191w vs ~525w) (1)

- /blog/agents-need-a-harness — Agents need a harness, not just a prompt

#### expand: thin vs family median (361w vs ~1009w) (1)

- /answers/deploy-an-llm-app-to-production — How do I deploy an LLM app to production?

## Duplicate candidates

337 pairs by title/slug similarity (103 not already cross-linked) — candidates for the merge/redirect editorial pass, not verdicts. Pairs where one already links to the other are marked linked — often deliberate two-part lessons.

| item A | item B | jac | contain | stem | linked | scope |
|---|---|---:|---:|---|---|---|
| /learn/prompt-engineering/meta-prompting-to-draft-prompts | /learn/prompt-engineering/meta-prompting-with-models | 1 | 1 |  | yes | same track |
| /learn/prompt-engineering/task-framing-intent-constraints-criteria | /learn/prompt-engineering/task-framing | 1 | 1 | yes | yes | same track |
| /learn/llm-foundations/grouped-query-attention | /learn/llm-foundations/multi-query-and-grouped-query-attention | 1 | 1 |  | yes | same track |
| /learn/genai-app-dev/generative-ui-rendering-components | /learn/genai-app-dev/generative-ui | 1 | 1 | yes | yes | same track |
| /learn/tools-function-calling/structured-output-vs-tool-calls-when | /learn/tools-function-calling/structured-output-vs-tool-calls | 1 | 1 | yes | yes | same track |
| /learn/genai-app-dev/session-and-state-management | /learn/genai-app-dev/session-state-multi-turn | 0.83 | 1 |  | yes | same track |
| /learn/context-engineering/context-window-testing-and-eval | /learn/context-engineering/testing-whether-context-helps | 0.83 | 1 |  | yes | same track |
| /learn/tools-function-calling/writing-descriptions-models-follow-deep | /learn/tools-function-calling/writing-tool-descriptions-models-follow | 0.83 | 1 |  | yes | same track |
| /learn/tools-function-calling/openapi-to-schema-conversion | /learn/tools-function-calling/openapi-to-tool-schema | 0.83 | 1 |  | yes | same track |
| /learn/genai-app-dev/chat-ux-that-doesnt-feel-broken | /learn/genai-app-dev/designing-chat-ux | 0.83 | 1 |  | yes | same track |
| /learn/genai-app-dev/function-calling-across-providers | /learn/tools-function-calling/tool-calling-across-providers | 0.8 | 1 |  | yes | genai-app-dev × tools-function-calling |
| /learn/genai-app-dev/tool-calling-and-authority | /learn/genai-app-dev/tool-calling-as-authority | 0.8 | 1 |  | yes | same track |
| /learn/prompt-engineering/ab-testing-in-production | /learn/prompt-engineering/ab-testing-prompts-in-production | 0.8 | 1 |  | yes | same track |
| /learn/structured-outputs/json-schema-essentials-for-outputs | /learn/tools-function-calling/json-schema-for-tools-essentials | 0.8 | 1 |  | yes | structured-outputs × tools-function-calling |
| /learn/harness-design/the-control-loop | /learn/tools-function-calling/building-a-browser-tool-loop | 0.75 | 1 |  | yes | harness-design × tools-function-calling |
| /learn/context-engineering/context-engineering-vs-prompting | /answers/prompt-engineering-vs-context-engineering | 0.75 | 1 |  | yes | context-engineering × answers |
| /learn/llm-foundations/context-window-mechanics-and-limits | /learn/llm-foundations/context-window-mechanics | 0.75 | 1 | yes | yes | same track |
| /learn/harness-design/subprocess-isolation-and-sandboxing | /learn/tools-function-calling/sandboxing-tool-execution | 0.75 | 1 |  | yes | harness-design × tools-function-calling |
| /learn/tools-function-calling/testing-and-debugging-tool-calls | /learn/tools-function-calling/testing-tool-calls-strategies | 0.75 | 1 |  | yes | same track |
| /learn/ai-foundations/narrow-ai-vs-general-ai | /learn/ai-foundations/narrow-vs-general-ai-in-practice | 0.75 | 1 |  | yes | same track |
| /learn/structured-outputs/building-an-extraction-eval-harness | /learn/tools-function-calling/building-a-tool-use-eval-harness | 0.75 | 1 |  | yes | structured-outputs × tools-function-calling |
| /learn/llm-foundations/grokking-and-double-descent-mechanics | /learn/llm-foundations/grokking-and-double-descent | 0.75 | 1 | yes | yes | same track |
| /learn/genai-app-dev/rate-limits-and-retry-strategies | /learn/genai-app-dev/rate-limits-and-retry | 0.75 | 1 | yes | yes | same track |
| /learn/prompt-engineering/negative-instructions-pitfall | /learn/prompt-engineering/negative-instructions-problem | 0.75 | 1 |  | yes | same track |
| /learn/tools-function-calling/schema-versioning-strategies | /learn/tools-function-calling/tool-schema-versioning | 0.71 | 1 |  | yes | same track |
| /learn/ai-foundations/ai-systems/111-alpha-beta-pruning-and-move-ordering | /learn/classical-ai/search-planning/113-alpha-beta-pruning-bounds-move-ordering-and-exactness | 0.71 | 1 |  | yes | ai-foundations × classical-ai |
| /learn/structured-outputs/schema-versioning-and-migration | /learn/structured-outputs/schema-versioning-basics | 0.71 | 1 |  | yes | same track |
| /learn/context-engineering/cache-aware-context-design-deep | /learn/context-engineering/cache-aware-context-design | 0.67 | 1 | yes | yes | same track |
| /learn/ai-foundations/ai-vs-ml-vs-deep-learning | /answers/difference-between-ai-and-machine-learning | 0.67 | 1 |  | yes | ai-foundations × answers |
| /learn/deep-learning/core/129-transfer-learning-fine-tuning-and-domain-shift | /learn/deep-learning/vision/211-transfer-learning-and-fine-tuning | 0.67 | 1 |  | yes | same track |
| /learn/prompt-engineering/automatic-prompt-optimization-dspy | /learn/prompt-engineering/automatic-prompt-optimization | 0.67 | 1 | yes | yes | same track |
| /learn/ai-foundations/applied-ai/308-training-and-inference-economics | /learn/ai-foundations/training-vs-inference | 0.67 | 1 |  | yes | same track |
| /learn/ai-foundations/training-vs-inference | /learn/llm-foundations/training-time-vs-inference-time | 0.67 | 1 |  | yes | ai-foundations × llm-foundations |
| /learn/ai-foundations/embeddings-quiz | /learn/maths-foundations/the-geometry-of-embeddings | 0.67 | 1 |  | yes | ai-foundations × maths-foundations |
| /learn/context-engineering/context-engineering-vs-prompting | /learn/prompt-engineering/what-prompt-engineering-is | 0.67 | 1 |  |  | context-engineering × prompt-engineering |
| /learn/prompt-engineering/what-prompt-engineering-is | /learn/tools-function-calling/descriptions-are-prompts | 0.67 | 1 |  | yes | prompt-engineering × tools-function-calling |
| /learn/context-engineering/long-context-strategies | /learn/context-engineering/million-token-window-strategies | 0.67 | 1 |  | yes | same track |
| /learn/genai-app-dev/quiz-reliability-safety | /learn/tools-function-calling/reliability-quiz | 0.67 | 1 |  |  | genai-app-dev × tools-function-calling |
| /learn/tools-function-calling/chaining-into-dag-workflows | /learn/tools-function-calling/chaining-tools-into-workflows | 0.67 | 1 |  | yes | same track |
| /learn/structured-outputs/reliability-design-mistakes | /learn/tools-function-calling/reliability-common-mistakes | 0.67 | 1 |  |  | structured-outputs × tools-function-calling |
| /learn/hallucinations/why-rlhf-hurts-calibration | /learn/llm-foundations/instruction-tuning-and-rlhf | 0.6 | 1 |  | yes | hallucinations × llm-foundations |
| /learn/tools-function-calling/benchmarking-tool-use | /learn/tools-function-calling/benchmarking-with-bfcl | 0.57 | 1 |  | yes | same track |
| /learn/tools-function-calling/streaming-partial-tool-calls-concept | /learn/tools-function-calling/streaming-partial-tool-calls | 0.57 | 1 | yes | yes | same track |
| /learn/machine-learning/public-data-projects/ml-895-movielens-recommendation-and-feedback | /learn/machine-learning/public-data-projects/movielens-project | 0.56 | 1 |  | yes | same track |
| /learn/context-engineering/context-handoff-between-agents-deep | /learn/context-engineering/context-handoff-between-agents | 0.5 | 1 | yes | yes | same track |
| /learn/context-engineering/conversation-memory-and-state | /learn/context-engineering/cross-session-memory-architecture | 0.5 | 1 |  | yes | same track |
| /learn/context-engineering/tokens-are-not-words | /learn/llm-foundations/why-models-need-tokens-not-characters | 0.5 | 1 |  | yes | context-engineering × llm-foundations |
| /learn/ai-foundations/what-a-model-actually-is | /learn/llm-foundations/what-a-language-model-actually-computes | 0.5 | 1 |  | yes | ai-foundations × llm-foundations |
| /learn/ai-foundations/what-a-model-actually-is | /learn/llm-foundations/what-the-internet-teaches-a-model | 0.5 | 1 |  | yes | ai-foundations × llm-foundations |
| /learn/prompt-engineering/what-prompting-is | /learn/prompt-engineering/what-role-prompting-changes | 0.5 | 1 |  | yes | same track |
| /learn/genai-app-dev/tool-call-authority-mistakes | /learn/tools-function-calling/what-is-tool-calling | 0.5 | 1 |  | yes | genai-app-dev × tools-function-calling |
| /learn/harness-design/parallel-tool-scheduling | /learn/tools-function-calling/parallel-tool-calls | 0.5 | 1 |  | yes | harness-design × tools-function-calling |
| /learn/structured-outputs/tool-and-function-schemas-for-extraction | /learn/tools-function-calling/what-is-tool-calling | 0.5 | 1 |  | yes | structured-outputs × tools-function-calling |
| /learn/tools-function-calling/foundations-common-mistakes | /learn/tools-function-calling/what-is-tool-calling | 0.5 | 1 |  |  | same track |
| /learn/tools-function-calling/foundations-quiz | /learn/tools-function-calling/what-is-tool-calling | 0.5 | 1 |  |  | same track |
| /learn/tools-function-calling/parallel-tool-calls-mechanics | /learn/tools-function-calling/parallel-tool-calls | 0.5 | 1 | yes | yes | same track |
| /learn/tools-function-calling/taxonomy-of-tool-failures | /learn/tools-function-calling/what-is-tool-calling | 0.5 | 1 |  | yes | same track |
| /learn/tools-function-calling/tool-calling-across-providers | /learn/tools-function-calling/what-is-tool-calling | 0.5 | 1 |  | yes | same track |
| /learn/tools-function-calling/tool-calling-glossary-cheatsheet | /learn/tools-function-calling/what-is-tool-calling | 0.5 | 1 |  | yes | same track |
| /learn/context-engineering/cache-aware-context-design | /learn/context-engineering/ordering-for-cache-hits | 0.5 | 1 |  | yes | same track |

_… 277 more pairs in content-registry.json (`duplicates`)_

## Title-overpromise candidates

1 items whose titles claim more than the body structure delivers — scope words on thin bodies, or numeric promises ("7 mistakes") the heading/list structure doesn't fulfill. Candidates, not verdicts.

| item | words | signals |
|---|---:|---|
| /learn/machine-learning/assessments/ml-849-staged-capstone-handbook | 368 | scope word "handbook" on 368w vs ~1011w median |

## Sourcing review flags

166 items flagged for sourcing review — volatile pages without a review date, comparisons sourced only to provider domains, volatile pages with numeric claims and no source signal. Candidates, not verdicts.

| item | flags |
|---|---|
| /learn/agentic-ai/agent-permissions-and-authorization | certification-sensitive page with no updated/review date |
| /learn/ai-foundations/building-an-eval-set-worked-example | 18 numeric claims with no sources section or external link |
| /learn/ai-foundations/capabilities-and-eval-quiz | 28 numeric claims with no sources section or external link |
| /learn/ai-foundations/choosing-a-model-decision-framework | 10 numeric claims with no sources section or external link |
| /learn/ai-foundations/generalization-quiz | 10 numeric claims with no sources section or external link |
| /learn/ai-foundations/how-llms-work-end-to-end-example | 13 numeric claims with no sources section or external link |
| /learn/ai-foundations/narrow-vs-general-ai-in-practice | 4 numeric claims with no sources section or external link |
| /learn/ai-foundations/open-vs-closed-and-hardware-tradeoffs | 33 numeric claims with no sources section or external link |
| /learn/ai-foundations/practical-models-quiz | 42 numeric claims with no sources section or external link |
| /learn/ai-foundations/scaling-laws | 7 numeric claims with no sources section or external link |
| /learn/ai-foundations/tokens-and-cost-worked-example | 39 numeric claims with no sources section or external link |
| /learn/ai-foundations/what-a-model-actually-is | 4 numeric claims with no sources section or external link |
| /learn/ai-literacy/common-myths-about-ai-debunked | 6 numeric claims with no sources section or external link |
| /learn/ai-literacy/cost-and-limits-quiz | 8 numeric claims with no sources section or external link |
| /learn/ai-literacy/judging-and-verifying-quiz | 42 numeric claims with no sources section or external link |
| /learn/ai-literacy/meet-skills-connectors-and-agents | release-sensitive page with no updated/review date |
| /learn/ai-literacy/the-real-limits-of-ai-today | 5 numeric claims with no sources section or external link |
| /learn/ai-literacy/what-not-to-paste-into-ai | 10 numeric claims with no sources section or external link |
| /learn/ai-literacy/what-using-ai-actually-costs | 4 numeric claims with no sources section or external link |
| /learn/ai-literacy/when-ai-gets-numbers-and-math-wrong | 103 numeric claims with no sources section or external link |
| /learn/classical-ai/search-planning/112-adversarial-search-games-utilities-and-minimax | 4 numeric claims with no sources section or external link |
| /learn/context-engineering/budgeting-and-observability-quiz | 48 numeric claims with no sources section or external link |
| /learn/context-engineering/compaction-memory-quiz | 15 numeric claims with no sources section or external link |
| /learn/context-engineering/cost-latency-quality-tradeoff-curve | 48 numeric claims with no sources section or external link |
| /learn/context-engineering/deduping-overlapping-tool-results | 10 numeric claims with no sources section or external link |
| /learn/context-engineering/dissecting-a-live-context-payload | 23 numeric claims with no sources section or external link |
| /learn/context-engineering/dynamic-budget-reallocation | 32 numeric claims with no sources section or external link |
| /learn/context-engineering/failure-modes-quiz | 5 numeric claims with no sources section or external link |
| /learn/context-engineering/foundations-quiz | 9 numeric claims with no sources section or external link |
| /learn/context-engineering/instrumenting-token-spend-in-production | 8 numeric claims with no sources section or external link |
| /learn/context-engineering/just-in-time-context-loading-pattern | 4 numeric claims with no sources section or external link |
| /learn/context-engineering/measuring-cache-savings | 26 numeric claims with no sources section or external link |
| /learn/context-engineering/poisoning-real-world-scenarios | 4 numeric claims with no sources section or external link |
| /learn/context-engineering/prompt-caching-mechanics | 6 numeric claims with no sources section or external link |
| /learn/context-engineering/reading-a-context-budget-pie | 33 numeric claims with no sources section or external link |
| /learn/context-engineering/retrieving-then-filtering-pipeline | 4 numeric claims with no sources section or external link |
| /learn/context-engineering/selection-ordering-quiz | 10 numeric claims with no sources section or external link |
| /learn/context-engineering/the-budget-allocation-mental-model | 15 numeric claims with no sources section or external link |
| /learn/context-engineering/the-whole-game-of-context-engineering | 6 numeric claims with no sources section or external link |
| /learn/context-engineering/token-accounting-per-turn-ledger | 48 numeric claims with no sources section or external link |
| /learn/context-engineering/tool-output-is-context-too | 8 numeric claims with no sources section or external link |
| /learn/context-engineering/why-context-is-the-real-bottleneck | 7 numeric claims with no sources section or external link |
| /learn/deep-learning/sequence-generative/317-language-model-objectives-and-tokenization | 9 numeric claims with no sources section or external link |
| /learn/deep-learning/sequence-generative/320-language-model-evaluation-calibration-and-behavior | 9 numeric claims with no sources section or external link |
| /learn/deep-learning/vision/223-pruning-sparsity-and-quantization | 6 numeric claims with no sources section or external link |
| /learn/evals-red-teaming/flaky-eval-mitigation | 5 numeric claims with no sources section or external link |
| /learn/fine-tuning/context-length-extension-rope-scaling | 8 numeric claims with no sources section or external link |
| /learn/genai-app-dev/cost-and-capability-based-routing | 18 numeric claims with no sources section or external link |
| /learn/genai-app-dev/cutting-cost-with-model-cascade | 19 numeric claims with no sources section or external link |
| /learn/genai-app-dev/feature-flagging-ai-features | 6 numeric claims with no sources section or external link |
| /learn/genai-app-dev/implementing-prompt-caching | 9 numeric claims with no sources section or external link |
| /learn/genai-app-dev/instrumenting-with-tracing | 6 numeric claims with no sources section or external link |
| /learn/genai-app-dev/perf-cost-cheatsheet | 6 numeric claims with no sources section or external link |
| /learn/genai-app-dev/quiz-performance-cost | 33 numeric claims with no sources section or external link |
| /learn/genai-app-dev/quiz-provider-layer | 8 numeric claims with no sources section or external link |
| /learn/genai-app-dev/quiz-state-structured-tools | 11 numeric claims with no sources section or external link |
| /learn/hallucinations/adversarial-and-leading-prompts | 4 numeric claims with no sources section or external link |
| /learn/hallucinations/escalation-human-in-the-loop | 5 numeric claims with no sources section or external link |
| /learn/hallucinations/intrinsic-vs-extrinsic-hallucination | 7 numeric claims with no sources section or external link |
| /learn/hallucinations/latency-cost-reliability-tradeoffs | 15 numeric claims with no sources section or external link |

_… 106 more in content-registry.json (`sourcingFlags`)_

## Freshness queues

Review order: volatile classes first, oldest last-verified date first; undated items lead each queue. `verified`/`updated`/`published` supply the last-verified date — git-derived when frontmatter is absent.

- periodic: 1342
- pricing-sensitive: 337
- release-sensitive: 299
- durable: 263
- certification-sensitive: 99
- policy-sensitive: 76

### certification-sensitive (99) — oldest-verified first

- /learn/agentic-ai/agent-permissions-and-authorization — Give an agent permissions, not access *(verified undated)*
- /learn/tools-function-calling/building-a-database-tool — Lab: build a read-only database tool *(verified undated)*
- /learn/harness-design/deny-floors-and-policy-layers — Deny-Floors: Rules No Prompt Can Override *(verified 2026-08-29)*
- /learn/ai-foundations/reliable-ai/201-provenance-consent-and-data-rights — Provenance, Consent, and Data Rights *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/202-labels-annotation-and-ground-truth — Labels, Annotation, and the Limits of Ground Truth *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/203-benchmarks-evaluations-and-capability-claims — Benchmarks, Evaluations, and Defensible Capability Claims *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/204-distribution-shift-and-robustness — Distribution Shift, Robustness, and Monitoring *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/205-uncertainty-calibration-and-abstention — Uncertainty, Calibration, and Abstention *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/206-hallucination-grounding-and-verification — Hallucination, Grounding, and Verification *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/207-interpretability-and-explanation-boundaries — Interpretability, Explanations, and Their Boundaries *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/208-fairness-problem-formulation-and-measurement — Fairness: Problem Formulation and Measurement *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/209-fairness-mitigation-and-governance — Fairness Mitigation and Governance *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/210-privacy-threat-modeling-and-minimization — Privacy Threat Modeling and Data Minimization *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/211-privacy-preserving-learning-and-release — Privacy-Preserving Learning and Release *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/212-adversarial-ml-and-input-security — Adversarial ML and Input Security *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/213-model-supply-chain-and-artifact-security — Model Supply Chain and Artifact Security *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/214-alignment-objectives-and-reward-hacking — Alignment Objectives and Reward Hacking *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/215-human-feedback-preference-data-and-rlhf — Human Feedback, Preference Data, and RLHF *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/216-red-teaming-and-misuse-evaluation — Red Teaming and Misuse Evaluation *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/217-governance-risk-tiers-and-accountability — Governance, Risk Tiers, and Accountability *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/218-audits-evidence-and-independent-review — Audits, Evidence, and Independent Review *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/219-incident-response-rollback-and-learning — AI Incidents, Rollback, and Organisational Learning *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/220-human-in-the-loop-and-meaningful-oversight — Human-in-the-Loop and Meaningful Oversight *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/221-contestability-appeals-and-recource — Contestability, Appeals, and Recourse *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/222-societal-impact-labor-and-power — Societal Impact, Labour, and Power *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/223-environmental-impact-and-compute-governance — Environmental Impact and Compute Governance *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/224-safety-cases-and-deployment-assurance — Safety Cases and Deployment Assurance *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/225-case-study-health-and-clinical-support — Case Study: Health and Clinical Support *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/226-case-study-finance-and-public-services — Case Study: Finance and Public Services *(verified 2026-08-30)*
- /learn/ai-foundations/reliable-ai/227-case-study-generative-agents-and-critical-workflows — Case Study: Generative Agents in Critical Workflows *(verified 2026-08-30)*
- … 69 more in content-registry.json

### pricing-sensitive (337) — oldest-verified first

- /learn/machine-learning/predictive-ml-vs-generative-ai — Separate predictive-ML choices from generative-AI choices *(verified undated)*
- /learn/ai-foundations/choosing-a-model — Choosing a model in 2026 *(verified 2026-08-29)*
- /learn/ai-foundations/tokens-context-cost — Tokens, context & cost *(verified 2026-08-29)*
- /learn/evals-red-teaming/building-a-golden-dataset — Building a Golden Dataset *(verified 2026-08-29)*
- /learn/production/token-and-cost-tracking — Track Cost Per Request and Per User *(verified 2026-08-29)*
- /learn/prompt-engineering/chain-of-thought-prompting — Chain-of-Thought: Getting the Model to Show Its Work *(verified 2026-08-29)*
- /learn/prompt-engineering/few-shot-prompting — Few-Shot Prompting: Teaching by Example *(verified 2026-08-29)*
- /learn/prompt-engineering/system-vs-user-prompts — System Prompts vs User Prompts *(verified 2026-08-29)*
- /learn/agentic-ai/stopping-conditions-for-agents — Termination Conditions: Teaching an Agent When It's Done *(verified 2026-08-30)*
- /learn/ai-foundations/ai-systems/110-adversarial-search-minimax-and-game-values — Adversarial Search: Minimax and Game Values *(verified 2026-08-30)*
- /learn/ai-foundations/building-an-eval-set-worked-example — Building a Small Eval You Can Trust *(verified 2026-08-30)*
- /learn/ai-foundations/capabilities-and-eval-quiz — Capabilities & Evaluation: What Would You Trust? *(verified 2026-08-30)*
- /learn/ai-foundations/choosing-a-model-decision-framework — A Decision Framework for Picking a Model *(verified 2026-08-30)*
- /learn/ai-foundations/classification-vs-regression — Classification vs. Regression: The Two Basic Prediction Tasks *(verified 2026-08-30)*
- /learn/ai-foundations/data-splits-and-leakage-worked-example — Splits, Leakage, and the Lie of a Good Score *(verified 2026-08-30)*
- /learn/ai-foundations/foundation-models-and-llms-quiz — Foundation Models & LLMs: Check Your Model *(verified 2026-08-30)*
- /learn/ai-foundations/generalization-quiz — Generalization: Will It Hold Up? *(verified 2026-08-30)*
- /learn/ai-foundations/inference-cost-and-latency-intuition — Why Inference Is Bottlenecked by Memory, Not Math *(verified 2026-08-30)*
- /learn/ai-foundations/interpretability-methods-overview — Ways to Peek Inside the Box *(verified 2026-08-30)*
- /learn/ai-foundations/learning-paradigms-quiz — Which Kind of Learning Is This? *(verified 2026-08-30)*
- /learn/ai-foundations/open-vs-closed-and-hardware-tradeoffs — Open Weights or an API? Two Scenarios *(verified 2026-08-30)*
- /learn/ai-foundations/orientation-quiz — Orientation: Check Your Map *(verified 2026-08-30)*
- /learn/ai-foundations/practical-models-quiz — Choosing & Running: Make the Call *(verified 2026-08-30)*
- /learn/ai-foundations/pretraining-vs-finetuning — Pretraining vs. Fine-Tuning: Two Different Jobs *(verified 2026-08-30)*
- /learn/ai-foundations/supervised-learning-explained — Supervised Learning, Explained *(verified 2026-08-30)*
- /learn/ai-foundations/tokens-and-cost-worked-example — Counting Tokens and Pricing a Call *(verified 2026-08-30)*
- /learn/ai-foundations/what-a-model-actually-is — What a Model Actually Is *(verified 2026-08-30)*
- /learn/ai-literacy/ai-is-not-a-search-engine — Stop treating AI like Google *(verified 2026-08-30)*
- /learn/ai-literacy/ai-literacy-master-cheatsheet — Cheatsheet: the AI literacy master reference *(verified 2026-08-30)*
- /learn/ai-literacy/compare-ai-tools-for-one-real-task — Comparing AI tools for one real task *(verified 2026-08-30)*
- … 307 more in content-registry.json

### policy-sensitive (76) — oldest-verified first

- /learn/llm-foundations/read-a-model-card-lab — Lab: read a model card like an engineer *(verified undated)*
- /learn/local-inference/the-local-privacy-boundary — The local privacy boundary *(verified undated)*
- /learn/responsible-ai/consent-contestability-and-impact — Consent, contestability, and the costs nobody measures *(verified undated)*
- /privacy — Privacy *(verified undated)*
- /terms — Terms *(verified undated)*
- /learn/agentic-ai/state-memory-and-recovery — Design agent state, memory, and recovery explicitly *(verified 2026-08-30)*
- /learn/ai-foundations/open-weight-vs-closed-models — Open-Weight vs. Closed Models *(verified 2026-08-30)*
- /learn/ai-literacy/ai-vs-human-thinking-compared — AI vs. a human expert: a side-by-side *(verified 2026-08-30)*
- /learn/ai-literacy/data-privacy-provenance-and-policy — Protect data with privacy, provenance, and policy boundaries *(verified 2026-08-30)*
- /learn/classical-ai/knowledge-uncertainty/215-knowledge-graphs-queries-provenance-and-embeddings — Knowledge graphs: queries, provenance, and embeddings *(verified 2026-08-30)*
- /learn/deep-learning/practice/416-data-versioning-lineage-and-retention-governance — Data versioning, lineage, and retention governance *(verified 2026-08-30)*
- /learn/deep-learning/sequence-generative/318-language-model-training-data-and-scaling — Train language models with data governance and scaling discipline *(verified 2026-08-30)*
- /learn/deep-learning/sequence-generative/325-multimodal-representations-and-fusion — Model text, images, audio, and structured signals together *(verified 2026-08-30)*
- /learn/deep-learning/sequence-generative/334-generative-safety-copyright-and-provenance — Deploy generative systems with safety, copyright, and provenance controls *(verified 2026-08-30)*
- /learn/deep-learning/vision/211-transfer-learning-and-fine-tuning — Transfer learning and fine-tuning *(verified 2026-08-30)*
- /learn/deep-learning/vision/230-vision-capstone-and-mastery-check — Vision systems capstone: evidence from data to deployment *(verified 2026-08-30)*
- /learn/fine-tuning/picking-a-base-model-to-fine-tune — Choose a Base Model to Fine-Tune *(verified 2026-08-30)*
- /learn/genai-app-dev/extracting-typed-data-from-freeform — Extracting Typed Records From Freeform Text *(verified 2026-08-30)*
- /learn/hallucinations/leading-prompt-fabrication — Worked Example: False Premises and Leading Questions *(verified 2026-08-30)*
- /learn/machine-learning/assessments/ml-842-assignment-01-reproducible-baseline — Assignment 1: frame a decision and ship a reproducible baseline *(verified 2026-08-30)*
- /learn/machine-learning/assessments/ml-847-model-report-template — Model report template: predictive system review *(verified 2026-08-30)*
- /learn/machine-learning/assessments/ml-848-model-report-template-high-stakes — Model report template: high-stakes review and human oversight *(verified 2026-08-30)*
- /learn/machine-learning/assessments/ml-849-staged-capstone-handbook — Staged capstone handbook: from proposal to production review *(verified 2026-08-30)*
- /learn/machine-learning/ml-114-lab-from-question-to-evaluation-plan — Lab: from question to evaluation plan *(verified 2026-08-30)*
- /learn/machine-learning/ml-512-randomized-experiments-and-online-ab-tests — Randomized experiments and online A/B tests *(verified 2026-08-30)*
- /learn/machine-learning/ml-707-lab-content-ranking-with-feedback — Lab: content ranking with feedback *(verified 2026-08-30)*
- /learn/machine-learning/problem-sets/10-comprehensive-classical-ml-qualifying-exam — Problem Set 10: Comprehensive Classical ML Qualifying Exam *(verified 2026-08-30)*
- /learn/machine-learning/public-data-projects/adult-income-project — Public-data project: Adult income prediction *(verified 2026-08-30)*
- /learn/machine-learning/public-data-projects/aps-failure-project — Public-data project: APS Failure under imbalance *(verified 2026-08-30)*
- /learn/machine-learning/public-data-projects/bank-marketing-project — Public-data project: Bank Marketing decision support *(verified 2026-08-30)*
- … 46 more in content-registry.json

### release-sensitive (299) — oldest-verified first

Largest queue; full list in JSON. Oldest-verified sample:
- /learn/ai-literacy/meet-skills-connectors-and-agents — MCP *(verified undated)*
- /learn/local-inference/hardware-sizing-measurement-guide — llama.cpp, Ollama, vLLM *(verified undated)*
- /learn/local-inference/huggingface-tgi-and-tei — Hugging Face, OpenAI, vLLM, llama.cpp *(verified undated)*
- /learn/local-inference/huggingface-transformers-pipelines — Hugging Face, vLLM, llama.cpp, Ollama *(verified undated)*
- /learn/local-inference/llama-cpp-build-quantize-serve — llama.cpp, Ollama, LM Studio, OpenAI *(verified undated)*
- /learn/local-inference/lm-studio-local-server — LM Studio, OpenAI, Ollama, Hugging Face, vLLM, MLX, llama.cpp *(verified undated)*
- /learn/local-inference/mlx-lm-on-apple-silicon — MLX, OpenAI, Hugging Face, Ollama, vLLM, llama.cpp, LM Studio, ONNX *(verified undated)*
- /learn/local-inference/ollama-first-run — Ollama, OpenAI *(verified undated)*
- /learn/local-inference/ollama-modelfiles-and-apis — Ollama, OpenAI *(verified undated)*
- /learn/local-inference/onnx-runtime-on-device-inference — ONNX, llama.cpp, Ollama, vLLM *(verified undated)*
- /learn/local-inference/quantization-formats-and-tradeoffs-lab — llama.cpp *(verified undated)*
- /learn/local-inference/sglang-serving-and-structured-generation — SGLang, vLLM, OpenAI, llama.cpp, Ollama *(verified undated)*
- /learn/local-inference/vllm-production-serving — vLLM, OpenAI, Ollama, llama.cpp, Llama *(verified undated)*
- /learn/local-inference/what-local-inference-actually-means — Ollama *(verified undated)*
- /learn/python-data-apis/observability-for-ai-services — OpenTelemetry *(verified undated)*
- /learn/tools-function-calling/tool-discovery-at-runtime — MCP *(verified undated)*
- /learn/genai-app-dev/streaming-responses-to-the-ui — Anthropic, OpenAI *(verified 2026-08-29)*
- /learn/harness-design/what-is-a-harness — Claude, Cursor *(verified 2026-08-29)*
- /learn/mcp/agent-dies-overnight-oauth — MCP *(verified 2026-08-29)*
- /learn/mcp/first-mcp-server — MCP, Model Context Protocol, Claude *(verified 2026-08-29)*
- /learn/mcp/mcp-architecture-hosts-clients-servers — MCP, Claude *(verified 2026-08-29)*
- /learn/mcp/mcp-context-window — MCP *(verified 2026-08-29)*
- /learn/mcp/mcp-tools-resources-and-prompts — MCP *(verified 2026-08-29)*
- /learn/mcp/what-is-mcp — MCP, Model Context Protocol, Anthropic *(verified 2026-08-29)*
- /learn/prompt-engineering/delimiters-and-formatting — Claude *(verified 2026-08-29)*
- /learn/tools-function-calling/designing-a-tool-schema — Claude, OpenAI *(verified 2026-08-29)*
- /learn/agentic-ai/agent-benchmarks — Claude *(verified 2026-08-30)*
- /learn/agentic-ai/agent-orchestration-frameworks — LangGraph, CrewAI, AutoGen, OpenAI, Claude *(verified 2026-08-30)*
- /learn/agentic-ai/agent-to-agent-protocols — MCP *(verified 2026-08-30)*
- /learn/agentic-ai/choosing-an-agent-framework — LangGraph, CrewAI, AutoGen *(verified 2026-08-30)*
- … 269 more

## Missing-data queues

### no summary/meta description (0)


### no published or updated date (31)

- /learn/agentic-ai/agent-permissions-and-authorization — Give an agent permissions, not access
- /learn/agentic-ai/agent-task-contracts — Write a task contract for an agent
- /learn/ai-literacy/ai-across-languages-and-accessibility — Use AI across languages and accessibility needs
- /learn/ai-literacy/meet-skills-connectors-and-agents — Meet skills, connectors, and agents — safely
- /learn/ai-literacy/seven-first-ai-workflows-lab — Lab: seven first AI workflows for everyday work
- /learn/llm-foundations/inspect-a-real-tokenizer-lab — Lab: inspect a real tokenizer
- /learn/llm-foundations/read-a-model-card-lab — Lab: read a model card like an engineer
- /learn/local-inference/hardware-sizing-measurement-guide — Size hardware for local inference by measuring it
- /learn/local-inference/huggingface-tgi-and-tei — Hugging Face TGI and TEI: the ecosystem's own serving layer
- /learn/local-inference/huggingface-transformers-pipelines — Hugging Face Transformers: pipelines and AutoModel
- /learn/local-inference/llama-cpp-build-quantize-serve — llama.cpp: build, quantize, and serve
- /learn/local-inference/lm-studio-local-server — LM Studio: the GUI path to a local OpenAI-compatible server
- /learn/local-inference/mlx-lm-on-apple-silicon — MLX and mlx-lm on Apple Silicon
- /learn/local-inference/ollama-first-run — Ollama: install, pull, run, and the first API call
- /learn/local-inference/ollama-modelfiles-and-apis — Ollama Modelfiles, embeddings, and tool calling
- /learn/local-inference/onnx-runtime-on-device-inference — ONNX Runtime: inference that embeds in the app
- /learn/local-inference/quantization-formats-and-tradeoffs-lab — Lab: pick a quantization level by measuring the tradeoff
- /learn/local-inference/sglang-serving-and-structured-generation — SGLang: serving with RadixAttention and constrained generation
- /learn/local-inference/the-local-privacy-boundary — The local privacy boundary
- /learn/local-inference/vllm-production-serving — vLLM: serving a model to real traffic
- /learn/local-inference/what-local-inference-actually-means — What 'running a model locally' actually means
- /learn/machine-learning/predictive-ml-vs-generative-ai — Separate predictive-ML choices from generative-AI choices
- /learn/prompt-engineering/provider-differences-lab — Lab: measure how the same prompt behaves across providers
- /learn/python-data-apis/observability-for-ai-services — Add observability to a Python AI service
- /learn/rag/diagnosing-rag-failures-end-to-end — Diagnose a RAG failure from ingestion to synthesis
- /learn/responsible-ai/consent-contestability-and-impact — Consent, contestability, and the costs nobody measures
- /learn/structured-outputs/openapi-schemas-in-practice — Use OpenAPI schemas for tool and output validation
- /learn/structured-outputs/refusals-and-partial-outputs — Handle refusals and partial structured outputs
- /learn/tools-function-calling/building-a-database-tool — Lab: build a read-only database tool
- /learn/tools-function-calling/idempotent-tool-design — Design idempotent tools so retries can't double-act
- /learn/tools-function-calling/tool-discovery-at-runtime — Tool discovery at runtime: how an agent learns what it can call

### zero in-body internal links (template nav still applies) (433)

- /learn/agentic-ai/agents-vs-workflows — Choose an agent only when a workflow is not enough
- /learn/ai-foundations/applied-ai/301-ai-product-discovery-outcomes-and-harm — AI Product Discovery: Outcomes, Users, and Harm
- /learn/ai-foundations/applied-ai/302-choosing-rules-classical-ml-deep-learning-or-llm — Choosing Rules, Classical ML, Deep Learning, or an LLM
- /learn/ai-foundations/applied-ai/303-data-pipelines-lineage-and-data-contracts — Data Pipelines, Lineage, and Data Contracts
- /learn/ai-foundations/applied-ai/304-supervised-learning-product-loop — Supervised Learning in the Product Loop
- /learn/ai-foundations/applied-ai/305-unsupervised-learning-discovery-and-guardrails — Unsupervised Learning for Discovery, Not Automatic Truth
- /learn/ai-foundations/applied-ai/306-self-supervised-learning-data-and-transfer — Self-Supervised Learning: Data, Representations, and Transfer
- /learn/ai-foundations/applied-ai/307-reinforcement-learning-product-suitability — Reinforcement Learning: Product Suitability and Safe Constraints
- /learn/ai-foundations/applied-ai/309-embeddings-similarity-and-index-design — Embeddings, Similarity, and Index Design
- /learn/ai-foundations/applied-ai/311-agents-tools-and-approval-boundaries — Agents, Tools, and Approval Boundaries
- /learn/ai-foundations/applied-ai/312-multimodal-ai-inputs-fusion-and-evaluation — Multimodal AI: Inputs, Fusion, and Evaluation
- /learn/ai-foundations/applied-ai/313-experimentation-ab-tests-and-decision-quality — Experimentation, A/B Tests, and Decision Quality
- /learn/ai-foundations/applied-ai/314-evaluation-evidence-and-human-review — Evaluation Evidence and Human Review
- /learn/ai-foundations/applied-ai/315-monitoring-drift-and-incident-response — Monitoring, Drift, and Incident Response
- /learn/ai-foundations/applied-ai/316-healthcare-ai-clinical-workflows-and-safety — Applied Case: Healthcare AI and Clinical Workflow Safety
- /learn/ai-foundations/applied-ai/317-education-ai-learning-and-assessment-integrity — Applied Case: Education AI, Learning, and Assessment Integrity
- /learn/ai-foundations/applied-ai/318-finance-ai-controls-fairness-and-model-risk — Applied Case: Finance AI, Controls, Fairness, and Model Risk
- /learn/ai-foundations/applied-ai/319-manufacturing-ai-quality-and-maintenance — Applied Case: Manufacturing AI for Quality and Maintenance
- /learn/ai-foundations/applied-ai/320-public-sector-ai-procurement-and-accountability — Applied Case: Public-Sector AI, Procurement, and Accountability
- /learn/ai-foundations/applied-ai/321-privacy-security-and-sensitive-data — Privacy, Security, and Sensitive Data in Applied AI
- /learn/ai-foundations/applied-ai/322-deployment-release-strategy-and-fallbacks — Deployment, Release Strategy, and Safe Fallbacks
- /learn/ai-foundations/applied-ai/323-applied-ai-architecture-review — Applied AI Architecture Review
- /learn/ai-foundations/applied-ai/324-applied-ai-project-gates-and-model-card — Applied AI Project Gates and the Model Card
- /learn/ai-foundations/reliable-ai/201-provenance-consent-and-data-rights — Provenance, Consent, and Data Rights
- /learn/ai-foundations/reliable-ai/202-labels-annotation-and-ground-truth — Labels, Annotation, and the Limits of Ground Truth
- /learn/ai-foundations/reliable-ai/203-benchmarks-evaluations-and-capability-claims — Benchmarks, Evaluations, and Defensible Capability Claims
- /learn/ai-foundations/reliable-ai/204-distribution-shift-and-robustness — Distribution Shift, Robustness, and Monitoring
- /learn/ai-foundations/reliable-ai/206-hallucination-grounding-and-verification — Hallucination, Grounding, and Verification
- /learn/ai-foundations/reliable-ai/207-interpretability-and-explanation-boundaries — Interpretability, Explanations, and Their Boundaries
- /learn/ai-foundations/reliable-ai/208-fairness-problem-formulation-and-measurement — Fairness: Problem Formulation and Measurement
- /learn/ai-foundations/reliable-ai/209-fairness-mitigation-and-governance — Fairness Mitigation and Governance
- /learn/ai-foundations/reliable-ai/210-privacy-threat-modeling-and-minimization — Privacy Threat Modeling and Data Minimization
- /learn/ai-foundations/reliable-ai/211-privacy-preserving-learning-and-release — Privacy-Preserving Learning and Release
- /learn/ai-foundations/reliable-ai/212-adversarial-ml-and-input-security — Adversarial ML and Input Security
- /learn/ai-foundations/reliable-ai/215-human-feedback-preference-data-and-rlhf — Human Feedback, Preference Data, and RLHF
- /learn/ai-foundations/reliable-ai/217-governance-risk-tiers-and-accountability — Governance, Risk Tiers, and Accountability
- /learn/ai-foundations/reliable-ai/218-audits-evidence-and-independent-review — Audits, Evidence, and Independent Review
- /learn/ai-foundations/reliable-ai/219-incident-response-rollback-and-learning — AI Incidents, Rollback, and Organisational Learning
- /learn/ai-foundations/reliable-ai/220-human-in-the-loop-and-meaningful-oversight — Human-in-the-Loop and Meaningful Oversight
- /learn/ai-foundations/reliable-ai/221-contestability-appeals-and-recource — Contestability, Appeals, and Recourse
- … 393 more

### live file not in curriculum (0)


### live curriculum node missing file (0)


### coming nodes (planned, unbuilt) (0)


### lesson files with status coming (0)


### release-sensitive, no date at all (24)

- /learn/agentic-ai/agent-permissions-and-authorization — Give an agent permissions, not access
- /learn/ai-literacy/meet-skills-connectors-and-agents — Meet skills, connectors, and agents — safely
- /learn/llm-foundations/read-a-model-card-lab — Lab: read a model card like an engineer
- /learn/local-inference/hardware-sizing-measurement-guide — Size hardware for local inference by measuring it
- /learn/local-inference/huggingface-tgi-and-tei — Hugging Face TGI and TEI: the ecosystem's own serving layer
- /learn/local-inference/huggingface-transformers-pipelines — Hugging Face Transformers: pipelines and AutoModel
- /learn/local-inference/llama-cpp-build-quantize-serve — llama.cpp: build, quantize, and serve
- /learn/local-inference/lm-studio-local-server — LM Studio: the GUI path to a local OpenAI-compatible server
- /learn/local-inference/mlx-lm-on-apple-silicon — MLX and mlx-lm on Apple Silicon
- /learn/local-inference/ollama-first-run — Ollama: install, pull, run, and the first API call
- /learn/local-inference/ollama-modelfiles-and-apis — Ollama Modelfiles, embeddings, and tool calling
- /learn/local-inference/onnx-runtime-on-device-inference — ONNX Runtime: inference that embeds in the app
- /learn/local-inference/quantization-formats-and-tradeoffs-lab — Lab: pick a quantization level by measuring the tradeoff
- /learn/local-inference/sglang-serving-and-structured-generation — SGLang: serving with RadixAttention and constrained generation
- /learn/local-inference/the-local-privacy-boundary — The local privacy boundary
- /learn/local-inference/vllm-production-serving — vLLM: serving a model to real traffic
- /learn/local-inference/what-local-inference-actually-means — What 'running a model locally' actually means
- /learn/machine-learning/predictive-ml-vs-generative-ai — Separate predictive-ML choices from generative-AI choices
- /learn/python-data-apis/observability-for-ai-services — Add observability to a Python AI service
- /learn/responsible-ai/consent-contestability-and-impact — Consent, contestability, and the costs nobody measures
- /learn/tools-function-calling/building-a-database-tool — Lab: build a read-only database tool
- /learn/tools-function-calling/tool-discovery-at-runtime — Tool discovery at runtime: how an agent learns what it can call
- /privacy — Privacy
- /terms — Terms

## Role paths

- /roles/developer — 11 steps, 1 practice, 1 production
- /roles/ml-engineer — 11 steps, 1 practice, 1 production
- /roles/data-scientist — 11 steps, 1 practice
- /roles/product-manager — 10 steps, 1 practice, 1 production
- /roles/founder — 11 steps, 1 practice, 2 production
- /roles/ceo — 9 steps, 1 practice, 1 production
- /roles/designer — 9 steps, 1 practice
- /roles/content-creator — 9 steps, 1 practice
- /roles/marketer — 9 steps, 1 practice
- /roles/security-engineer — 10 steps, 1 practice, 2 production
- /roles/student — 12 steps, 1 practice
- /roles/forward-deployed-engineer — 180/180 live steps

## FDE path — plan vs on disk

- orientation: 12/12 nodes live across 3 modules
- foundations: 42/42 nodes live across 7 modules
- craft: 15/15 nodes live across 4 modules
- data: 16/16 nodes live across 4 modules
- ai: 21/21 nodes live across 4 modules
- deploy: 14/14 nodes live across 3 modules
- field: 17/17 nodes live across 4 modules
- product: 5/5 nodes live across 1 modules
- career: 12/12 nodes live across 3 modules
- practice: 26/26 nodes live across 3 modules

## Practice banks

- /practice/ai-foundations — 8 questions, 8 lesson links
- /practice/prompt-engineering — 8 questions, 8 lesson links
- /practice/rag — 8 questions, 8 lesson links
- /practice/agents — 8 questions, 8 lesson links
- /practice/mcp — 8 questions, 8 lesson links
- /practice/evals — 8 questions, 8 lesson links

## Non-lesson collections

### interview (7)

- /interview/agents — AI agents interview questions (776 words, updated 2026-09-08)
- /interview/ai-system-design — AI system design interview questions (748 words, updated 2026-09-08)
- /interview/evals — LLM evaluation interview questions (753 words, updated 2026-08-30)
- /interview/llm-basics — LLM basics interview questions (785 words, updated 2026-09-08)
- /interview/mcp — MCP interview questions (713 words, updated 2026-09-08)
- /interview/prompt-engineering — Prompt engineering interview questions (752 words, updated 2026-09-08)
- /interview/rag — RAG interview questions (721 words, updated 2026-08-30)

### scenario (6)

- /scenarios/agent-approval — An agent that can update customer records (656 words, updated 2026-08-30)
- /scenarios/document-qa — Document Q&A with permissions intact (529 words, updated 2026-08-30)
- /scenarios/eval-release — A release that improves quality but raises cost (451 words, updated 2026-08-30)
- /scenarios/mcp-team-server — An MCP server for a small engineering team (584 words, updated 2026-08-30)
- /scenarios/streaming-research — A research feature that streams useful work (545 words, updated 2026-08-30)
- /scenarios/support-assistant — A support assistant that must show its work (601 words, updated 2026-08-30)

### guide (9)

- /guides/build-a-rag-pipeline-over-your-own-documents — Build a RAG pipeline over your own documents (838 words, updated 2026-08-30)
- /guides/build-a-tool-calling-agent-from-scratch — Build a tool-calling agent from scratch, no framework (534 words, updated 2026-08-30)
- /guides/build-an-mcp-server-in-python — Build an MCP server in Python and connect it to Claude (725 words, updated 2026-08-30)
- /guides/cut-your-llm-bill — Cut your LLM bill without hurting quality (875 words, updated 2026-08-30)
- /guides/defend-against-prompt-injection — Defend a tool-using app against prompt injection (917 words, updated 2026-08-30)
- /guides/get-reliable-json-out-of-an-llm — Get reliable JSON out of an LLM (638 words, updated 2026-08-30)
- /guides/rag-fine-tuning-or-a-longer-prompt — RAG, fine-tuning, or a longer prompt? (918 words, updated 2026-08-30)
- /guides/ship-your-first-ai-feature-to-production — Ship your first AI feature to production (851 words, updated 2026-08-30)
- /guides/write-your-first-eval-for-an-ai-feature — Write your first eval for an AI feature (861 words, updated 2026-08-30)

### blog (10)

- /blog/agents-need-a-harness — Agents need a harness, not just a prompt (191 words, updated 2026-08-30)
- /blog/how-to-learn-ai-in-2026 — How to actually learn AI in 2026 (251 words, updated 2026-08-30)
- /blog/lmversity-launch-note — Why LMVersity is free and structured (220 words, updated 2026-09-08)
- /blog/rag-is-not-a-truth-machine — RAG is not a truth machine (219 words, updated 2026-08-30)
- /blog/read-the-loop-before-you-pick-a-framework — Read the loop before you pick a framework (525 words, updated 2026-08-30)
- /blog/stopping-conditions-for-agents — Every agent loop needs five stopping conditions (537 words, updated 2026-08-30)
- /blog/the-context-window-got-bigger-and-it-did-not-fix-this — The context window got bigger. It didn't fix what you think. (578 words, updated 2026-08-30)
- /blog/the-mcp-mistakes-that-show-up-at-3am — The MCP server mistakes that show up at 3am (631 words, updated 2026-08-30)
- /blog/why-there-is-no-certificate — Why there's no certificate here (520 words, updated 2026-09-08)
- /blog/your-rag-problem-is-a-retrieval-problem — Your RAG problem is a retrieval problem (700 words, updated 2026-08-30)

### answer (33)

- /answers/ai-engineer-interview-questions — AI engineer interview questions: what is asked and how to prepare (1210 words, updated 2026-09-08)
- /answers/ai-engineer-roadmap — AI engineer roadmap: the skills in order, and what to skip (2002 words, updated 2026-09-08)
- /answers/ai-engineer-vs-ml-engineer — AI engineer vs ML engineer: the difference in what you do all day (977 words, updated 2026-09-08)
- /answers/can-i-run-an-llm-locally — Can I run an LLM locally, and should I? (469 words, updated 2026-09-15)
- /answers/deploy-an-llm-app-to-production — How do I deploy an LLM app to production? (361 words, updated 2026-09-15)
- /answers/difference-between-ai-and-machine-learning — Difference between AI and machine learning (and deep learning) (1009 words, updated 2026-09-08)
- /answers/free-forward-deployed-engineer-course — Free Forward Deployed Engineer course: from zero to FDE in nine months (2002 words, updated 2026-09-08)
- /answers/how-do-llms-work — How do LLMs work? Tokens, attention, and next-token prediction in plain words (919 words, updated 2026-09-08)
- /answers/how-much-does-an-llm-app-cost — How much does an LLM app cost to run? (458 words, updated 2026-09-15)
- /answers/how-to-become-an-ai-engineer — How to become an AI engineer in 2026 (from zero, for free) (1977 words, updated 2026-09-08)
- /answers/how-to-build-a-rag-app — How to build a RAG app, step by step (and where it breaks) (1234 words, updated 2026-09-08)
- /answers/how-to-evaluate-an-llm-app — How to evaluate an LLM app: golden sets, judges, and release gates (1228 words, updated 2026-09-08)
- /answers/how-to-fine-tune-an-llm — How to fine-tune an LLM: when to, and the steps that matter (1260 words, updated 2026-09-08)
- /answers/how-to-learn-machine-learning-free — How to learn machine learning for free, in the right order (1183 words, updated 2026-09-08)
- /answers/how-to-use-claude-code — How to use Claude Code: a practical workflow for real codebases (1310 words, updated 2026-09-08)
- /answers/how-to-use-openai-codex — How to use OpenAI Codex (the coding agent): workflow and habits (1207 words, updated 2026-09-08)
- /answers/is-ai-engineering-hard — Is AI engineering hard to learn? What is actually difficult (1249 words, updated 2026-09-08)
- /answers/learn-ai-engineering-free — Learn AI engineering for free: the complete structured path (1806 words, updated 2026-09-08)
- /answers/llm-vs-generative-ai — LLM vs generative AI: are they the same thing? (910 words, updated 2026-09-08)
- /answers/openai-vs-chatgpt — OpenAI vs ChatGPT: what's the difference? (1005 words, updated 2026-09-08)
- /answers/prompt-engineering-vs-context-engineering — Prompt engineering vs context engineering: what changed (949 words, updated 2026-09-08)
- /answers/rag-vs-fine-tuning — RAG vs fine-tuning: which one do you actually need? (902 words, updated 2026-09-08)
- /answers/what-is-a-forward-deployed-engineer — What is a Forward Deployed Engineer (FDE)? (1201 words, updated 2026-09-08)
- /answers/what-is-a-large-language-model — What is a large language model (LLM)? (1018 words, updated 2026-09-08)
- /answers/what-is-a-vector-database — What is a vector database, and do you need one? (858 words, updated 2026-09-08)
- /answers/what-is-agentic-ai — What is agentic AI, and how is it different from a chatbot? (954 words, updated 2026-09-08)
- /answers/what-is-an-agent-harness — What is a harness in AI? The agent harness, explained (879 words, updated 2026-09-08)
- /answers/what-is-an-ai-agent — What is an AI agent? A plain definition and the parts that matter (1053 words, updated 2026-09-08)
- /answers/what-is-lmv — What is LMV? LMV is LMVersity, a free AI engineering curriculum (731 words, updated 2026-09-08)
- /answers/what-is-mcp — What is MCP (Model Context Protocol)? (925 words, updated 2026-09-08)
- /answers/what-is-prompt-injection — What is prompt injection? (406 words, updated 2026-09-15)
- /answers/what-is-rag — What is RAG (retrieval-augmented generation)? (934 words, updated 2026-09-08)
- /answers/what-skills-does-an-ai-engineer-need — What skills does an AI engineer need? The honest list (1251 words, updated 2026-09-08)

