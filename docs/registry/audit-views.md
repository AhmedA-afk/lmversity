# Content registry — audit views

Generated 2026-09-15T07:41:51.293Z by `scripts/build-content-registry.mjs`.
2406 public content items. Machine-readable source: `content-registry.json`.
Heuristic fields (intent, audience, freshness) record their signals in JSON — overrule during scoring.

## By family

- lesson: 2039
- quiz: 89
- lab: 60
- reference: 59
- track: 33
- project: 31
- answer: 29
- page: 21
- role: 12
- blog: 10
- guide: 9
- interview: 7
- scenario: 6
- glossary: 1

## By status

- live: 2380
- coming: 26

## By search intent (heuristic)

- concept: 1871
- comparison: 106
- build: 91
- practice: 89
- reference: 60
- course-hub: 33
- worked-example: 29
- answer: 29
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

- ai-engineer: 1637
- beginner-engineer: 439
- forward-deployed-engineer: 194
- general: 118
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
| ai-literacy | 56 | 41 | 2 | 0 | 2 | 2 | 7 | 0 | 2 | 64% | 0% | 2% | 1549 | — | — |
| maths-foundations | 193 | 179 | 0 | 0 | 2 | 0 | 0 | 11 | 1 | 71% | 0% | 0% | 771 | — | — |
| python-data-apis | 57 | 44 | 0 | 2 | 0 | 0 | 10 | 0 | 1 | 98% | 0% | 4% | 1615 | — | — |
| ai-foundations | 160 | 127 | 9 | 0 | 10 | 0 | 10 | 0 | 4 | 68% | 0% | 1% | 1009 | — | yes |
| llm-foundations | 131 | 113 | 0 | 0 | 10 | 0 | 7 | 0 | 1 | 48% | 94% | 0% | 796 | — | — |
| classical-ai | 83 | 80 | 0 | 0 | 0 | 0 | 0 | 0 | 3 | 96% | 0% | 0% | 901 | — | — |
| machine-learning | 208 | 185 | 0 | 0 | 1 | 0 | 0 | 19 | 3 | 19% | 0% | 6% | 407 | — | — |
| deep-learning | 136 | 125 | 0 | 0 | 0 | 0 | 0 | 8 | 3 | 98% | 0% | 0% | 852 | — | — |
| prompt-engineering | 142 | 117 | 1 | 1 | 8 | 5 | 8 | 0 | 2 | 70% | 0% | 0% | 700 | — | yes |
| context-engineering | 132 | 101 | 0 | 2 | 13 | 7 | 8 | 0 | 1 | 53% | 0% | 3% | 846 | — | — |
| structured-outputs | 122 | 101 | 4 | 0 | 4 | 5 | 7 | 0 | 1 | 76% | 0% | 2% | 695 | — | — |
| hallucinations | 132 | 108 | 0 | 0 | 10 | 6 | 7 | 0 | 1 | 48% | 0% | 2% | 734 | yes | — |
| genai-app-dev | 130 | 118 | 0 | 0 | 5 | 6 | 0 | 0 | 1 | 78% | 0% | 0% | 692 | — | — |
| rag | 56 | 28 | 6 | 6 | 3 | 6 | 6 | 0 | 1 | 48% | 48% | 2% | 991 | yes | yes |
| tools-function-calling | 123 | 91 | 1 | 7 | 11 | 5 | 7 | 0 | 1 | 74% | 0% | 0% | 716 | — | — |
| mcp | 57 | 28 | 6 | 6 | 5 | 6 | 6 | 0 | 0 | 60% | 53% | 5% | 553 | yes | yes |
| agentic-ai | 28 | 25 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 25% | 93% | 0% | 545 | — | yes |
| harness-design | 26 | 26 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 65% | 100% | 4% | 505 | — | — |
| evals-red-teaming | 28 | 25 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 21% | 100% | 4% | 595 | — | yes |
| production | 28 | 28 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 54% | 100% | 4% | 520 | yes | — |
| fine-tuning | 26 | 21 | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 27% | 0% | 8% | 557 | — | — |
| responsible-ai | 6 | 5 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 17% | 0% | 17% | 392 | — | — |
| ai-for-designers | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0% | 0% | 0% | 0 | — | — |

## Track gap briefs

Mechanical per-track audit. Practice-ending = last node of a module is quiz/lab/capstone/worked-example/drill;
dead-end = the track's final live node is a plain concept; orphan boundary = a module `startsAt` slug absent from the track's nodes.

### ai-literacy — 56 files, 9 modules

- missing kinds: common-mistakes
- 8 island lessons (no in-body links)
- 5 duplicate-candidate pairs in track

### maths-foundations — 193 files, 17 modules

- modules without practice ending: "The essential maths for AI" ends on convexity-and-loss-landscapes (concept); "Single-variable calculus" ends on one-dimensional-optimisation-clinic (concept); "Decompositions and numerical linear algebra" ends on kernel-matrices-and-kernel-trick (concept); "Mathematical language and computation" ends on sequences-recurrences-polynomials-quadratics-and-growth-rates (concept) +12 more
- dead-end finish: last live lesson is s4-6-causal-graphical-models-do-calculus-and-identifiability-limits (concept)
- missing kinds: quiz, worked-example, common-mistakes, cheatsheet
- 7 island lessons (no in-body links)
- 10 duplicate-candidate pairs in track

### python-data-apis — 57 files, 7 modules

- modules without practice ending: "Getting started" ends on python-data-pipeline-whole-game (concept); "NumPy" ends on selecting-filtering-indexing (concept)
- missing kinds: worked-example, cheatsheet
- 2 island lessons (no in-body links)
- 3 duplicate-candidate pairs in track

### ai-foundations — 160 files, 9 modules

- modules without practice ending: "How models work" ends on ai-ml-dl-as-nested-fields (concept); "Inside the network" ends on ai-alignment-and-safety-basics (concept); "The wider picture" ends on why-nonlinearity-matters (concept)
- dead-end finish: last live lesson is why-nonlinearity-matters (concept)
- missing kinds: common-mistakes, cheatsheet
- 48 island lessons (no in-body links)
- 2 thin vs family median
- 4 duplicate-candidate pairs in track

### llm-foundations — 131 files, 6 modules

- modules without practice ending: "From text to tokens" ends on what-are-embeddings (concept); "Training and generation" ends on instruction-tuning-and-rlhf (concept); "The model landscape" ends on multimodal-llms-explained (concept); "Architecture internals" ends on grouped-query-attention (concept)
- missing kinds: worked-example, common-mistakes, cheatsheet
- 2 thin vs family median
- 20 duplicate-candidate pairs in track

### classical-ai — 83 files, 4 modules

- modules without practice ending: "Agents, robotics, and hybrid systems" ends on constraint-satisfaction (concept); "Original concept recaps" ends on uncertainty-and-decision (concept)
- dead-end finish: last live lesson is uncertainty-and-decision (concept)
- missing kinds: quiz, worked-example, common-mistakes, cheatsheet
- 78 island lessons (no in-body links)
- 2 duplicate-candidate pairs in track

### machine-learning — 208 files, 12 modules

- modules without practice ending: "Orientation and problem framing" ends on generalization-and-evaluation (concept); "Data, features, and decisions" ends on ml-115-case-study-triage-under-review-capacity (concept); "Maths, objectives, and generalisation" ends on regularization-and-bias-variance (concept); "Linear and generalised models" ends on ml-216-case-study-demand-forecast-with-uncertainty (concept) +7 more
- dead-end finish: last live lesson is deep-lectures/907-time-series-ranking-and-recommender-systems-under-temporal-exposure-feedback (concept)
- missing kinds: quiz, worked-example, common-mistakes, cheatsheet
- 109 island lessons (no in-body links)
- 34 thin vs family median
- 13 duplicate-candidate pairs in track

### deep-learning — 136 files, 6 modules

- modules without practice ending: "Programme orientation" ends on dl-001-how-to-use-the-deep-learning-program (concept); "Sequences, transformers, generation, and RL" ends on sequence-generative/338-rlhf-preference-optimization-and-alignment-bridge (concept); "Concept recaps" ends on neural-networks-and-representations (concept)
- dead-end finish: last live lesson is neural-networks-and-representations (concept)
- missing kinds: quiz, worked-example, common-mistakes, cheatsheet
- 74 island lessons (no in-body links)
- 3 duplicate-candidate pairs in track

### prompt-engineering — 142 files, 7 modules

- modules without practice ending: "Prompt anatomy" ends on role-prompting (concept); "Examples and reasoning" ends on negative-instructions-pitfall (concept); "Reliability and iteration" ends on multi-turn-prompt-design (concept); "Prompts in production" ends on extended-thinking-and-reasoning-effort (concept) +2 more
- 10 island lessons (no in-body links)
- 2 thin vs family median
- 23 duplicate-candidate pairs in track

### context-engineering — 132 files, 5 modules

- modules without practice ending: "Assembling context" ends on context-window-testing-and-eval (concept); "How long contexts fail" ends on context-observability-and-token-accounting (concept)
- missing kinds: worked-example
- 26 duplicate-candidate pairs in track

### structured-outputs — 122 files, 5 modules

- modules without practice ending: "Making it reliable" ends on structured-output-failure-modes (concept); "Harder schema shapes" ends on schema-versioning-and-migration (concept)
- missing kinds: common-mistakes
- 1 thin vs family median
- 10 duplicate-candidate pairs in track

### hallucinations — 132 files, 0 modules

- missing kinds: worked-example, common-mistakes
- 8 duplicate-candidate pairs in track

### genai-app-dev — 130 files, 6 modules

- modules without practice ending: "Your first feature" ends on designing-chat-ux (concept); "Cost, latency and limits" ends on rate-limits-and-retry-strategies (concept); "Reliability and safety" ends on quiz-shipping-operating (concept); "Beyond the first version" ends on prompt-versioning-rollback (concept) +1 more
- missing kinds: quiz, worked-example, common-mistakes
- 2 island lessons (no in-body links)
- 19 duplicate-candidate pairs in track

### rag — 56 files, 0 modules

- 2 island lessons (no in-body links)
- 6 duplicate-candidate pairs in track

### tools-function-calling — 123 files, 5 modules

- modules without practice ending: "Tool calling basics" ends on tool-choice-and-forcing-tool-use (concept); "Multi-step and parallel use" ends on testing-and-debugging-tool-calls (concept); "Schemas at scale" ends on streaming-partial-tool-calls (concept)
- 13 island lessons (no in-body links)
- 29 duplicate-candidate pairs in track

### mcp — 57 files, 0 modules

- dead-end finish: last live lesson is server-design-and-permissions (concept)
- missing kinds: capstone
- 3 island lessons (no in-body links)
- 1 thin vs family median
- 43 duplicate-candidate pairs in track

### agentic-ai — 28 files, 7 modules

- modules without practice ending: "What an agent is" ends on react-pattern (concept); "Planning and memory" ends on error-handling-and-retries (concept); "Orchestration and control" ends on when-not-to-use-an-agent (concept); "Failure and evaluation" ends on stopping-conditions-for-agents (concept) +3 more
- dead-end finish: last live lesson is state-memory-and-recovery (concept)
- missing kinds: quiz, worked-example, common-mistakes, cheatsheet, capstone
- 2 island lessons (no in-body links)

### harness-design — 26 files, 6 modules

- modules without practice ending: "What a harness is" ends on prompt-composition (concept); "Permissions and isolation" ends on subprocess-isolation-and-sandboxing (concept); "State and streaming" ends on context-window-management-in-a-harness (concept); "Extension and configuration" ends on tool-output-truncation (concept) +2 more
- dead-end finish: last live lesson is distributed-harness-orchestration (concept)
- missing kinds: quiz, worked-example, common-mistakes, cheatsheet, capstone

### evals-red-teaming — 28 files, 6 modules

- modules without practice ending: "Why evals matter" ends on writing-eval-metrics (concept); "Judges and regression suites" ends on eval-driven-iteration (concept); "Attacks" ends on automated-adversarial-testing (concept); "Making evals trustworthy" ends on goodharting-your-benchmark (concept) +2 more
- dead-end finish: last live lesson is regression-gates-and-online-signals (concept)
- missing kinds: quiz, worked-example, common-mistakes, cheatsheet, capstone
- 2 island lessons (no in-body links)

### production — 28 files, 0 modules

- dead-end finish: last live lesson is deployment-versioning-and-incidents (concept)
- missing kinds: quiz, worked-example, common-mistakes, cheatsheet, capstone
- 2 island lessons (no in-body links)

### fine-tuning — 26 files, 7 modules

- modules without practice ending: "Should you fine-tune at all" ends on synthetic-data-generation (concept); "Methods" ends on fine-tuning-run-hyperparameters (concept); "Training and evaluation" ends on evaluating-a-fine-tuned-model (concept); "Serving a fine-tuned model" ends on merging-and-versioning-adapters (concept) +3 more
- dead-end finish: last live lesson is choosing-managed-vs-self-hosted-fine-tuning (comparison)
- missing kinds: quiz, worked-example, common-mistakes, cheatsheet, capstone

### responsible-ai — 6 files, 0 modules

- dead-end finish: last live lesson is privacy-fairness-and-accessibility (concept)
- missing kinds: quiz, worked-example, common-mistakes, cheatsheet, capstone
- 5 island lessons (no in-body links)
- 1 thin vs family median
- 1 duplicate-candidate pairs in track

### ai-for-designers — 0 files, 5 modules

- missing kinds: quiz, worked-example, common-mistakes, cheatsheet, capstone
- 25 planned nodes unbuilt

## Scores and dispositions (mechanical pass)

Scale 0/1/2 per dimension; `null` = editorial judgement required. Auto-dispositions are
limited to keep/expand/refresh/investigate — merge, redirect, noindex, archive, replace
and split always need a written human reason (see checklist).

| disposition | items |
|---|---:|
| keep | 1872 |
| investigate | 464 |
| expand | 70 |

| dimension | scored | mean | 0 | 1 | 2 |
|---|---:|---:|---:|---:|---:|
| intentClarity | 2189 | 1.89 | 25 | 184 | 1980 |
| correctnessSources | 43 | 1.28 | 0 | 31 | 12 |
| completeness | 2304 | 1.65 | 44 | 710 | 1550 |
| prerequisiteFit | 2243 | 2.00 | 3 | 0 | 2240 |
| handsOn | 2189 | 1.48 | 550 | 49 | 1590 |
| explanationQuality | 2189 | 1.93 | 45 | 56 | 2088 |
| metadata | 2189 | 1.85 | 25 | 281 | 1883 |
| linking | 2100 | 1.35 | 508 | 348 | 1244 |
| freshnessHealth | 2406 | 0.78 | 787 | 1356 | 263 |
| originality | 0 | — | — | — | — |
| accessibility | 0 | — | — | — | — |
| demand | 0 | — | — | — | — |

### Non-keep dispositions

#### investigate: zero in-body internal links (464)

- /learn/agentic-ai/agents-vs-workflows — Choose an agent only when a workflow is not enough
- /learn/agentic-ai/state-memory-and-recovery — Design agent state, memory, and recovery explicitly
- /learn/ai-foundations/applied-ai/301-ai-product-discovery-outcomes-and-harm — AI Product Discovery: Outcomes, Users, and Harm
- /learn/ai-foundations/applied-ai/302-choosing-rules-classical-ml-deep-learning-or-llm — Choosing Rules, Classical ML, Deep Learning, or an LLM
- /learn/ai-foundations/applied-ai/303-data-pipelines-lineage-and-data-contracts — Data Pipelines, Lineage, and Data Contracts
- /learn/ai-foundations/applied-ai/304-supervised-learning-product-loop — Supervised Learning in the Product Loop
- /learn/ai-foundations/applied-ai/305-unsupervised-learning-discovery-and-guardrails — Unsupervised Learning for Discovery, Not Automatic Truth
- /learn/ai-foundations/applied-ai/306-self-supervised-learning-data-and-transfer — Self-Supervised Learning: Data, Representations, and Transfer
- /learn/ai-foundations/applied-ai/307-reinforcement-learning-product-suitability — Reinforcement Learning: Product Suitability and Safe Constraints
- /learn/ai-foundations/applied-ai/308-training-and-inference-economics — Training and Inference Economics
- /learn/ai-foundations/applied-ai/309-embeddings-similarity-and-index-design — Embeddings, Similarity, and Index Design
- /learn/ai-foundations/applied-ai/310-retrieval-augmented-generation-grounding — Retrieval-Augmented Generation and Grounded Answers
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
- /learn/ai-foundations/reliable-ai/205-uncertainty-calibration-and-abstention — Uncertainty, Calibration, and Abstention
- /learn/ai-foundations/reliable-ai/206-hallucination-grounding-and-verification — Hallucination, Grounding, and Verification
- /learn/ai-foundations/reliable-ai/207-interpretability-and-explanation-boundaries — Interpretability, Explanations, and Their Boundaries
- /learn/ai-foundations/reliable-ai/208-fairness-problem-formulation-and-measurement — Fairness: Problem Formulation and Measurement
- /learn/ai-foundations/reliable-ai/209-fairness-mitigation-and-governance — Fairness Mitigation and Governance
- /learn/ai-foundations/reliable-ai/210-privacy-threat-modeling-and-minimization — Privacy Threat Modeling and Data Minimization
- /learn/ai-foundations/reliable-ai/211-privacy-preserving-learning-and-release — Privacy-Preserving Learning and Release
- /learn/ai-foundations/reliable-ai/212-adversarial-ml-and-input-security — Adversarial ML and Input Security
- /learn/ai-foundations/reliable-ai/213-model-supply-chain-and-artifact-security — Model Supply Chain and Artifact Security
- /learn/ai-foundations/reliable-ai/214-alignment-objectives-and-reward-hacking — Alignment Objectives and Reward Hacking
- … 424 more in content-registry.json

#### expand: planned stub — no content yet (26)

- /learn/ai-for-designers — AI for Designers
- ai-for-designers/ai-for-designers-course-guide — Start here: the two lanes, the artifacts, the case study
- ai-for-designers/designer-mental-model-for-generative-ai — A designer's mental model for generative AI
- ai-for-designers/deterministic-vs-probabilistic-interfaces-compared — Deterministic vs probabilistic interfaces, compared
- ai-for-designers/choosing-where-ai-belongs-worked-example — Choose where AI belongs: a worked example
- ai-for-designers/ai-product-design-common-mistakes — AI product design: common mistakes
- ai-for-designers/ai-product-design-foundations-quiz — Quiz: AI product design foundations
- ai-for-designers/designing-the-ai-behavior-contract — Design the AI behavior contract
- ai-for-designers/mapping-ai-capabilities-to-user-tasks — Map AI capabilities to user tasks
- ai-for-designers/ai-feature-state-model-worked-example — Model every state an AI feature can be in
- ai-for-designers/ai-interaction-state-cheatsheet — AI interaction states: cheatsheet
- ai-for-designers/prompt-as-interaction-spec — Treat the prompt as an interaction spec
- ai-for-designers/behavior-before-interface-quiz — Quiz: behavior before interface
- ai-for-designers/designing-for-uncertainty — Design for uncertainty, not around it
- ai-for-designers/sources-confidence-and-explanations-compared — Sources, confidence, and explanations compared
- ai-for-designers/correction-undo-and-recovery-patterns — Correction, undo, and recovery patterns
- ai-for-designers/human-review-and-approval-boundaries — Draw the line: recommend, confirm, or act
- ai-for-designers/trust-patterns-worked-example — Fix an overconfident assistant: a worked example
- ai-for-designers/trust-and-recovery-quiz — Quiz: trust and recovery
- ai-for-designers/prototype-ai-behavior-without-a-model — Prototype AI behavior without a model
- ai-for-designers/creating-a-realistic-ai-test-set — Create a realistic AI test set
- ai-for-designers/designing-a-ux-evaluation-rubric — Design a UX evaluation rubric
- ai-for-designers/test-an-ai-prototype-worked-example — Test an AI prototype: a worked example
- ai-for-designers/ai-prototype-testing-common-mistakes — AI prototype testing: common mistakes
- ai-for-designers/prototype-and-evaluation-quiz — Quiz: prototype and evaluation
- ai-for-designers/capstone-design-a-trustworthy-ai-feature — Capstone: design a trustworthy AI feature end to end

#### expand: thin vs family median (193w vs ~780w) (3)

- /learn/machine-learning/public-data-projects/bank-marketing-project — Public-data project: Bank Marketing decision support
- /learn/machine-learning/public-data-projects/bike-sharing-project — Public-data project: Bike Sharing forecasting
- /learn/machine-learning/public-data-projects/online-retail-project — Public-data project: Online Retail customer analysis

#### expand: thin vs family median (264w vs ~780w) (2)

- /learn/machine-learning/assessments/ml-845-assignment-04-unsupervised-decision-support — Assignment 4: unsupervised learning without inventing stories
- /learn/machine-learning/assessments/ml-846-assignment-05-temporal-risk-aware-system — Assignment 5: build a time-aware, risk-aware ML system

#### expand: thin vs family median (226w vs ~780w) (2)

- /learn/machine-learning/assessments/ml-847-model-report-template — Model report template: predictive system review
- /learn/machine-learning/reproductions/adaboost-reproduction — Paper reproduction: AdaBoost and the training-error bound

#### expand: thin vs family median (191w vs ~780w) (2)

- /learn/machine-learning/public-data-projects/aps-failure-project — Public-data project: APS Failure under imbalance
- /learn/machine-learning/public-data-projects/movielens-project — Public-data project: MovieLens recommendation

#### expand: thin vs family median (238w vs ~780w) (1)

- /learn/ai-foundations/choosing-a-model — Choosing a model in 2026

#### expand: thin vs family median (231w vs ~780w) (1)

- /learn/ai-foundations/tokens-context-cost — Tokens, context & cost

#### expand: thin vs family median (277w vs ~780w) (1)

- /learn/llm-foundations/next-token-prediction — Next-Token Prediction: The One Objective

#### expand: thin vs family median (269w vs ~780w) (1)

- /learn/llm-foundations/tokenization-explained — Tokenization: How Text Becomes Tokens

#### expand: thin vs family median (279w vs ~780w) (1)

- /learn/machine-learning/assessments/ml-843-assignment-02-linear-models-calibration — Assignment 2: derive, implement, and calibrate a linear decision model

#### expand: thin vs family median (246w vs ~780w) (1)

- /learn/machine-learning/assessments/ml-844-assignment-03-tree-ensemble-debugging — Assignment 3: compare trees and ensembles through a debugging clinic

#### expand: thin vs family median (233w vs ~780w) (1)

- /learn/machine-learning/assessments/ml-848-model-report-template-high-stakes — Model report template: high-stakes review and human oversight

#### expand: thin vs family median (368w vs ~1011w) (1)

- /learn/machine-learning/assessments/ml-849-staged-capstone-handbook — Staged capstone handbook: from proposal to production review

#### expand: thin vs family median (291w vs ~780w) (1)

- /learn/machine-learning/derivations/01-linear-regression-normal-equations-and-geometry — Linear regression: normal equations and geometry

#### expand: thin vs family median (296w vs ~780w) (1)

- /learn/machine-learning/derivations/02-gradient-descent-and-convergence-for-linear-models — Gradient descent and convergence for linear models

#### expand: thin vs family median (278w vs ~780w) (1)

- /learn/machine-learning/derivations/03-logistic-regression-likelihood-gradient-and-hessian — Logistic regression: likelihood, gradient, and Hessian

#### expand: thin vs family median (298w vs ~780w) (1)

- /learn/machine-learning/derivations/04-map-mle-and-regularization-as-priors — MAP, MLE, and regularization as priors

#### expand: thin vs family median (290w vs ~780w) (1)

- /learn/machine-learning/derivations/08-pca-svd-and-best-low-rank-approximation — PCA, SVD, and best low-rank approximation

#### expand: thin vs family median (315w vs ~886w) (1)

- /learn/machine-learning/ml-215-lab-linear-model-diagnostic-notebook — Lab: linear-model diagnostic notebook

#### expand: thin vs family median (352w vs ~886w) (1)

- /learn/machine-learning/ml-705-lab-fraud-detection-under-class-imbalance — Lab: fraud detection under class imbalance

#### expand: thin vs family median (348w vs ~886w) (1)

- /learn/machine-learning/ml-706-lab-demand-forecasting-with-delayed-labels — Lab: demand forecasting with delayed labels

#### expand: thin vs family median (350w vs ~886w) (1)

- /learn/machine-learning/ml-707-lab-content-ranking-with-feedback — Lab: content ranking with feedback

#### expand: thin vs family median (335w vs ~886w) (1)

- /learn/machine-learning/ml-708-lab-clustering-for-exploration — Lab: clustering for exploration

#### expand: thin vs family median (334w vs ~886w) (1)

- /learn/machine-learning/ml-709-lab-anomaly-detection-with-investigation-queues — Lab: anomaly detection with investigation queues

#### expand: thin vs family median (349w vs ~886w) (1)

- /learn/machine-learning/ml-710-lab-causal-question-triage — Lab: causal question triage

#### expand: thin vs family median (345w vs ~886w) (1)

- /learn/machine-learning/ml-712-lab-reproducible-training-pipeline — Lab: reproducible training pipeline

#### expand: thin vs family median (344w vs ~886w) (1)

- /learn/machine-learning/ml-713-lab-production-readiness-review — Lab: production readiness review

#### expand: thin vs family median (378w vs ~1011w) (1)

- /learn/machine-learning/ml-714-capstone-classical-ml-system-defense — Capstone: classical ML system defense

#### expand: thin vs family median (215w vs ~886w) (1)

- /learn/machine-learning/ml-871-executable-lab-studio — Executable Classical ML lab studio

#### expand: thin vs family median (201w vs ~780w) (1)

- /learn/machine-learning/public-data-projects/adult-income-project — Public-data project: Adult income prediction

#### expand: thin vs family median (212w vs ~780w) (1)

- /learn/machine-learning/reproductions/linear-regression-reproduction — Paper reproduction: least squares, shrinkage, and prediction

#### expand: thin vs family median (210w vs ~780w) (1)

- /learn/machine-learning/reproductions/pca-reconstruction-reproduction — Paper reproduction: low-rank reconstruction

#### expand: thin vs family median (208w vs ~780w) (1)

- /learn/machine-learning/reproductions/random-forest-reproduction — Paper reproduction: random forests and out-of-bag evidence

#### expand: thin vs family median (214w vs ~780w) (1)

- /learn/machine-learning/reproductions/svm-kernel-reproduction — Paper reproduction: margins and kernels

#### expand: thin vs family median (288w vs ~780w) (1)

- /learn/mcp/first-mcp-server — Build your first MCP server in Python (20 min)

#### expand: thin vs family median (196w vs ~780w) (1)

- /learn/prompt-engineering/answer-first-prompting — Answer-first prompting

#### expand: thin vs family median (362w vs ~1011w) (1)

- /learn/prompt-engineering/prompt-library-capstone — Capstone: build a prompt library that can survive a change

#### expand: thin vs family median (325w vs ~886w) (1)

- /learn/responsible-ai/adversarial-testing-lab — Lab: turn a prompt injection finding into a regression test

#### expand: thin vs family median (149w vs ~780w) (1)

- /learn/structured-outputs/incremental-json-repair — Incremental JSON Repair: Fixing Truncated Output Instead of Discarding It

#### expand: thin vs family median (191w vs ~525w) (1)

- /blog/agents-need-a-harness — Agents need a harness, not just a prompt

## Duplicate candidates

357 pairs by title/slug similarity (227 not already cross-linked) — candidates for the merge/redirect editorial pass, not verdicts. Pairs where one already links to the other are marked linked — often deliberate two-part lessons.

| item A | item B | jac | contain | stem | linked | scope |
|---|---|---:|---:|---|---|---|
| /learn/llm-foundations/grouped-query-attention | /learn/llm-foundations/multi-query-and-grouped-query-attention | 1 | 1 |  | yes | same track |
| /learn/genai-app-dev/generative-ui-rendering-components | /learn/genai-app-dev/generative-ui | 1 | 1 | yes | yes | same track |
| /learn/prompt-engineering/meta-prompting-to-draft-prompts | /learn/prompt-engineering/meta-prompting-with-models | 1 | 1 |  | yes | same track |
| /learn/prompt-engineering/task-framing-intent-constraints-criteria | /learn/prompt-engineering/task-framing | 1 | 1 | yes | yes | same track |
| /learn/tools-function-calling/structured-output-vs-tool-calls-when | /learn/tools-function-calling/structured-output-vs-tool-calls | 1 | 1 | yes | yes | same track |
| /learn/genai-app-dev/session-and-state-management | /learn/genai-app-dev/session-state-multi-turn | 0.83 | 1 |  | yes | same track |
| /learn/context-engineering/context-window-testing-and-eval | /learn/context-engineering/testing-whether-context-helps | 0.83 | 1 |  | yes | same track |
| /learn/tools-function-calling/writing-descriptions-models-follow-deep | /learn/tools-function-calling/writing-tool-descriptions-models-follow | 0.83 | 1 |  |  | same track |
| /learn/tools-function-calling/openapi-to-schema-conversion | /learn/tools-function-calling/openapi-to-tool-schema | 0.83 | 1 |  |  | same track |
| /learn/genai-app-dev/chat-ux-that-doesnt-feel-broken | /learn/genai-app-dev/designing-chat-ux | 0.83 | 1 |  | yes | same track |
| /learn/genai-app-dev/function-calling-across-providers | /learn/tools-function-calling/tool-calling-across-providers | 0.8 | 1 |  |  | genai-app-dev × tools-function-calling |
| /learn/genai-app-dev/tool-calling-and-authority | /learn/genai-app-dev/tool-calling-as-authority | 0.8 | 1 |  | yes | same track |
| /learn/prompt-engineering/ab-testing-in-production | /learn/prompt-engineering/ab-testing-prompts-in-production | 0.8 | 1 |  | yes | same track |
| /learn/structured-outputs/json-schema-essentials-for-outputs | /learn/tools-function-calling/json-schema-for-tools-essentials | 0.8 | 1 |  |  | structured-outputs × tools-function-calling |
| /learn/harness-design/the-control-loop | /learn/tools-function-calling/building-a-browser-tool-loop | 0.75 | 1 |  |  | harness-design × tools-function-calling |
| /learn/context-engineering/context-engineering-vs-prompting | /answers/prompt-engineering-vs-context-engineering | 0.75 | 1 |  | yes | context-engineering × answers |
| /learn/llm-foundations/context-window-mechanics-and-limits | /learn/llm-foundations/context-window-mechanics | 0.75 | 1 | yes | yes | same track |
| /learn/harness-design/subprocess-isolation-and-sandboxing | /learn/tools-function-calling/sandboxing-tool-execution | 0.75 | 1 |  | yes | harness-design × tools-function-calling |
| /learn/tools-function-calling/testing-and-debugging-tool-calls | /learn/tools-function-calling/testing-tool-calls-strategies | 0.75 | 1 |  | yes | same track |
| /learn/ai-foundations/narrow-ai-vs-general-ai | /learn/ai-foundations/narrow-vs-general-ai-in-practice | 0.75 | 1 |  | yes | same track |
| /learn/structured-outputs/building-an-extraction-eval-harness | /learn/tools-function-calling/building-a-tool-use-eval-harness | 0.75 | 1 |  |  | structured-outputs × tools-function-calling |
| /learn/llm-foundations/grokking-and-double-descent-mechanics | /learn/llm-foundations/grokking-and-double-descent | 0.75 | 1 | yes | yes | same track |
| /learn/genai-app-dev/rate-limits-and-retry-strategies | /learn/genai-app-dev/rate-limits-and-retry | 0.75 | 1 | yes | yes | same track |
| /learn/prompt-engineering/negative-instructions-pitfall | /learn/prompt-engineering/negative-instructions-problem | 0.75 | 1 |  | yes | same track |
| /learn/tools-function-calling/schema-versioning-strategies | /learn/tools-function-calling/tool-schema-versioning | 0.71 | 1 |  |  | same track |
| /learn/ai-foundations/ai-systems/111-alpha-beta-pruning-and-move-ordering | /learn/classical-ai/search-planning/113-alpha-beta-pruning-bounds-move-ordering-and-exactness | 0.71 | 1 |  |  | ai-foundations × classical-ai |
| /learn/structured-outputs/schema-versioning-and-migration | /learn/structured-outputs/schema-versioning-basics | 0.71 | 1 |  | yes | same track |
| /learn/context-engineering/cache-aware-context-design-deep | /learn/context-engineering/cache-aware-context-design | 0.67 | 1 | yes | yes | same track |
| /learn/ai-foundations/ai-vs-ml-vs-deep-learning | /answers/difference-between-ai-and-machine-learning | 0.67 | 1 |  | yes | ai-foundations × answers |
| /learn/ai-literacy/deciding-when-and-which-ai-quiz | /learn/ai-literacy/what-ai-actually-is-quiz | 0.67 | 1 |  |  | same track |
| /learn/deep-learning/core/129-transfer-learning-fine-tuning-and-domain-shift | /learn/deep-learning/vision/211-transfer-learning-and-fine-tuning | 0.67 | 1 |  |  | same track |
| /learn/prompt-engineering/automatic-prompt-optimization-dspy | /learn/prompt-engineering/automatic-prompt-optimization | 0.67 | 1 | yes | yes | same track |
| /learn/ai-foundations/applied-ai/308-training-and-inference-economics | /learn/ai-foundations/training-vs-inference | 0.67 | 1 |  |  | same track |
| /learn/ai-foundations/training-vs-inference | /learn/llm-foundations/training-time-vs-inference-time | 0.67 | 1 |  | yes | ai-foundations × llm-foundations |
| /learn/ai-foundations/embeddings-quiz | /learn/maths-foundations/the-geometry-of-embeddings | 0.67 | 1 |  | yes | ai-foundations × maths-foundations |
| /learn/context-engineering/context-engineering-vs-prompting | /learn/prompt-engineering/what-prompt-engineering-is | 0.67 | 1 |  |  | context-engineering × prompt-engineering |
| /learn/prompt-engineering/what-prompt-engineering-is | /learn/tools-function-calling/descriptions-are-prompts | 0.67 | 1 |  |  | prompt-engineering × tools-function-calling |
| /learn/context-engineering/long-context-strategies | /learn/context-engineering/million-token-window-strategies | 0.67 | 1 |  | yes | same track |
| /learn/genai-app-dev/quiz-reliability-safety | /learn/tools-function-calling/reliability-quiz | 0.67 | 1 |  |  | genai-app-dev × tools-function-calling |
| /learn/tools-function-calling/chaining-into-dag-workflows | /learn/tools-function-calling/chaining-tools-into-workflows | 0.67 | 1 |  | yes | same track |
| /learn/structured-outputs/reliability-design-mistakes | /learn/tools-function-calling/reliability-common-mistakes | 0.67 | 1 |  |  | structured-outputs × tools-function-calling |
| /learn/hallucinations/why-rlhf-hurts-calibration | /learn/llm-foundations/instruction-tuning-and-rlhf | 0.6 | 1 |  |  | hallucinations × llm-foundations |
| /learn/tools-function-calling/benchmarking-tool-use | /learn/tools-function-calling/benchmarking-with-bfcl | 0.57 | 1 |  | yes | same track |
| /learn/tools-function-calling/streaming-partial-tool-calls-concept | /learn/tools-function-calling/streaming-partial-tool-calls | 0.57 | 1 | yes | yes | same track |
| /learn/machine-learning/public-data-projects/ml-895-movielens-recommendation-and-feedback | /learn/machine-learning/public-data-projects/movielens-project | 0.56 | 1 |  |  | same track |
| /learn/context-engineering/context-handoff-between-agents-deep | /learn/context-engineering/context-handoff-between-agents | 0.5 | 1 | yes | yes | same track |
| /learn/context-engineering/conversation-memory-and-state | /learn/context-engineering/cross-session-memory-architecture | 0.5 | 1 |  |  | same track |
| /learn/context-engineering/tokens-are-not-words | /learn/llm-foundations/why-models-need-tokens-not-characters | 0.5 | 1 |  |  | context-engineering × llm-foundations |
| /learn/ai-foundations/what-a-model-actually-is | /learn/llm-foundations/what-a-language-model-actually-computes | 0.5 | 1 |  |  | ai-foundations × llm-foundations |
| /learn/ai-foundations/what-a-model-actually-is | /learn/llm-foundations/what-the-internet-teaches-a-model | 0.5 | 1 |  |  | ai-foundations × llm-foundations |
| /learn/prompt-engineering/what-prompting-is | /learn/prompt-engineering/what-role-prompting-changes | 0.5 | 1 |  |  | same track |
| /learn/genai-app-dev/tool-call-authority-mistakes | /learn/tools-function-calling/what-is-tool-calling | 0.5 | 1 |  |  | genai-app-dev × tools-function-calling |
| /learn/harness-design/parallel-tool-scheduling | /learn/tools-function-calling/parallel-tool-calls | 0.5 | 1 |  | yes | harness-design × tools-function-calling |
| /learn/structured-outputs/tool-and-function-schemas-for-extraction | /learn/tools-function-calling/what-is-tool-calling | 0.5 | 1 |  |  | structured-outputs × tools-function-calling |
| /learn/tools-function-calling/foundations-common-mistakes | /learn/tools-function-calling/what-is-tool-calling | 0.5 | 1 |  |  | same track |
| /learn/tools-function-calling/foundations-quiz | /learn/tools-function-calling/what-is-tool-calling | 0.5 | 1 |  |  | same track |
| /learn/tools-function-calling/parallel-tool-calls-mechanics | /learn/tools-function-calling/parallel-tool-calls | 0.5 | 1 | yes | yes | same track |
| /learn/tools-function-calling/taxonomy-of-tool-failures | /learn/tools-function-calling/what-is-tool-calling | 0.5 | 1 |  |  | same track |
| /learn/tools-function-calling/tool-calling-across-providers | /learn/tools-function-calling/what-is-tool-calling | 0.5 | 1 |  |  | same track |
| /learn/tools-function-calling/tool-calling-glossary-cheatsheet | /learn/tools-function-calling/what-is-tool-calling | 0.5 | 1 |  | yes | same track |

_… 297 more pairs in content-registry.json (`duplicates`)_

## Freshness queues

- periodic: 1356
- pricing-sensitive: 334
- release-sensitive: 283
- durable: 263
- certification-sensitive: 97
- policy-sensitive: 73

### certification-sensitive (97)

- /learn/ai-foundations/reliable-ai/201-provenance-consent-and-data-rights — Provenance, Consent, and Data Rights
- /learn/ai-foundations/reliable-ai/202-labels-annotation-and-ground-truth — Labels, Annotation, and the Limits of Ground Truth
- /learn/ai-foundations/reliable-ai/203-benchmarks-evaluations-and-capability-claims — Benchmarks, Evaluations, and Defensible Capability Claims
- /learn/ai-foundations/reliable-ai/204-distribution-shift-and-robustness — Distribution Shift, Robustness, and Monitoring
- /learn/ai-foundations/reliable-ai/205-uncertainty-calibration-and-abstention — Uncertainty, Calibration, and Abstention
- /learn/ai-foundations/reliable-ai/206-hallucination-grounding-and-verification — Hallucination, Grounding, and Verification
- /learn/ai-foundations/reliable-ai/207-interpretability-and-explanation-boundaries — Interpretability, Explanations, and Their Boundaries
- /learn/ai-foundations/reliable-ai/208-fairness-problem-formulation-and-measurement — Fairness: Problem Formulation and Measurement
- /learn/ai-foundations/reliable-ai/209-fairness-mitigation-and-governance — Fairness Mitigation and Governance
- /learn/ai-foundations/reliable-ai/210-privacy-threat-modeling-and-minimization — Privacy Threat Modeling and Data Minimization
- /learn/ai-foundations/reliable-ai/211-privacy-preserving-learning-and-release — Privacy-Preserving Learning and Release
- /learn/ai-foundations/reliable-ai/212-adversarial-ml-and-input-security — Adversarial ML and Input Security
- /learn/ai-foundations/reliable-ai/213-model-supply-chain-and-artifact-security — Model Supply Chain and Artifact Security
- /learn/ai-foundations/reliable-ai/214-alignment-objectives-and-reward-hacking — Alignment Objectives and Reward Hacking
- /learn/ai-foundations/reliable-ai/215-human-feedback-preference-data-and-rlhf — Human Feedback, Preference Data, and RLHF
- /learn/ai-foundations/reliable-ai/216-red-teaming-and-misuse-evaluation — Red Teaming and Misuse Evaluation
- /learn/ai-foundations/reliable-ai/217-governance-risk-tiers-and-accountability — Governance, Risk Tiers, and Accountability
- /learn/ai-foundations/reliable-ai/218-audits-evidence-and-independent-review — Audits, Evidence, and Independent Review
- /learn/ai-foundations/reliable-ai/219-incident-response-rollback-and-learning — AI Incidents, Rollback, and Organisational Learning
- /learn/ai-foundations/reliable-ai/220-human-in-the-loop-and-meaningful-oversight — Human-in-the-Loop and Meaningful Oversight
- /learn/ai-foundations/reliable-ai/221-contestability-appeals-and-recource — Contestability, Appeals, and Recourse
- /learn/ai-foundations/reliable-ai/222-societal-impact-labor-and-power — Societal Impact, Labour, and Power
- /learn/ai-foundations/reliable-ai/223-environmental-impact-and-compute-governance — Environmental Impact and Compute Governance
- /learn/ai-foundations/reliable-ai/224-safety-cases-and-deployment-assurance — Safety Cases and Deployment Assurance
- /learn/ai-foundations/reliable-ai/225-case-study-health-and-clinical-support — Case Study: Health and Clinical Support
- /learn/ai-foundations/reliable-ai/226-case-study-finance-and-public-services — Case Study: Finance and Public Services
- /learn/ai-foundations/reliable-ai/227-case-study-generative-agents-and-critical-workflows — Case Study: Generative Agents in Critical Workflows
- /learn/ai-foundations/reliable-ai/228-reliable-ai-capstone-and-technical-defense — Reliable AI Capstone and Technical Defense
- /learn/ai-foundations/safety-and-interpretability-quiz — Safety & Interpretability: Reason About Risk
- /learn/ai-literacy/fact-check-an-ai-answer-step-by-step — Fact-checking an AI answer, step by step
- … 67 more in content-registry.json

### pricing-sensitive (334)

- /learn/agentic-ai/stopping-conditions-for-agents — Termination Conditions: Teaching an Agent When It's Done
- /learn/ai-foundations/ai-systems/110-adversarial-search-minimax-and-game-values — Adversarial Search: Minimax and Game Values
- /learn/ai-foundations/building-an-eval-set-worked-example — Building a Small Eval You Can Trust
- /learn/ai-foundations/capabilities-and-eval-quiz — Capabilities & Evaluation: What Would You Trust?
- /learn/ai-foundations/choosing-a-model-decision-framework — A Decision Framework for Picking a Model
- /learn/ai-foundations/choosing-a-model — Choosing a model in 2026
- /learn/ai-foundations/classification-vs-regression — Classification vs. Regression: The Two Basic Prediction Tasks
- /learn/ai-foundations/data-splits-and-leakage-worked-example — Splits, Leakage, and the Lie of a Good Score
- /learn/ai-foundations/foundation-models-and-llms-quiz — Foundation Models & LLMs: Check Your Model
- /learn/ai-foundations/generalization-quiz — Generalization: Will It Hold Up?
- /learn/ai-foundations/inference-cost-and-latency-intuition — Why Inference Is Bottlenecked by Memory, Not Math
- /learn/ai-foundations/interpretability-methods-overview — Ways to Peek Inside the Box
- /learn/ai-foundations/learning-paradigms-quiz — Which Kind of Learning Is This?
- /learn/ai-foundations/open-vs-closed-and-hardware-tradeoffs — Open Weights or an API? Two Scenarios
- /learn/ai-foundations/orientation-quiz — Orientation: Check Your Map
- /learn/ai-foundations/practical-models-quiz — Choosing & Running: Make the Call
- /learn/ai-foundations/pretraining-vs-finetuning — Pretraining vs. Fine-Tuning: Two Different Jobs
- /learn/ai-foundations/supervised-learning-explained — Supervised Learning, Explained
- /learn/ai-foundations/tokens-and-cost-worked-example — Counting Tokens and Pricing a Call
- /learn/ai-foundations/tokens-context-cost — Tokens, context & cost
- /learn/ai-foundations/what-a-model-actually-is — What a Model Actually Is
- /learn/ai-literacy/ai-is-not-a-search-engine — Stop treating AI like Google
- /learn/ai-literacy/ai-literacy-master-cheatsheet — Cheatsheet: the AI literacy master reference
- /learn/ai-literacy/compare-ai-tools-for-one-real-task — Comparing AI tools for one real task
- /learn/ai-literacy/cost-and-limits-quiz — Quiz: cost, limits, and tradeoffs
- /learn/ai-literacy/free-vs-paid-ai-what-you-get — Free vs. paid AI: what you actually get
- /learn/ai-literacy/how-ai-produces-answers-quiz — Quiz: how AI produces answers
- /learn/ai-literacy/how-to-ask-ai-clearly — How to ask AI for exactly what you want
- /learn/ai-literacy/is-ai-worth-it-for-this-task — Is AI worth it here? A cost-benefit walkthrough
- /learn/ai-literacy/judging-and-verifying-quiz — Quiz: judging and verifying
- … 304 more in content-registry.json

### policy-sensitive (73)

- /learn/agentic-ai/state-memory-and-recovery — Design agent state, memory, and recovery explicitly
- /learn/ai-foundations/open-weight-vs-closed-models — Open-Weight vs. Closed Models
- /learn/ai-literacy/ai-vs-human-thinking-compared — AI vs. a human expert: a side-by-side
- /learn/ai-literacy/data-privacy-provenance-and-policy — Protect data with privacy, provenance, and policy boundaries
- /learn/classical-ai/knowledge-uncertainty/215-knowledge-graphs-queries-provenance-and-embeddings — Knowledge graphs: queries, provenance, and embeddings
- /learn/deep-learning/practice/416-data-versioning-lineage-and-retention-governance — Data versioning, lineage, and retention governance
- /learn/deep-learning/sequence-generative/318-language-model-training-data-and-scaling — Train language models with data governance and scaling discipline
- /learn/deep-learning/sequence-generative/325-multimodal-representations-and-fusion — Model text, images, audio, and structured signals together
- /learn/deep-learning/sequence-generative/334-generative-safety-copyright-and-provenance — Deploy generative systems with safety, copyright, and provenance controls
- /learn/deep-learning/vision/211-transfer-learning-and-fine-tuning — Transfer learning and fine-tuning
- /learn/deep-learning/vision/230-vision-capstone-and-mastery-check — Vision systems capstone: evidence from data to deployment
- /learn/fine-tuning/picking-a-base-model-to-fine-tune — Choose a Base Model to Fine-Tune
- /learn/genai-app-dev/extracting-typed-data-from-freeform — Extracting Typed Records From Freeform Text
- /learn/hallucinations/leading-prompt-fabrication — Worked Example: False Premises and Leading Questions
- /learn/machine-learning/assessments/ml-842-assignment-01-reproducible-baseline — Assignment 1: frame a decision and ship a reproducible baseline
- /learn/machine-learning/assessments/ml-847-model-report-template — Model report template: predictive system review
- /learn/machine-learning/assessments/ml-848-model-report-template-high-stakes — Model report template: high-stakes review and human oversight
- /learn/machine-learning/assessments/ml-849-staged-capstone-handbook — Staged capstone handbook: from proposal to production review
- /learn/machine-learning/ml-114-lab-from-question-to-evaluation-plan — Lab: from question to evaluation plan
- /learn/machine-learning/ml-512-randomized-experiments-and-online-ab-tests — Randomized experiments and online A/B tests
- /learn/machine-learning/ml-707-lab-content-ranking-with-feedback — Lab: content ranking with feedback
- /learn/machine-learning/problem-sets/10-comprehensive-classical-ml-qualifying-exam — Problem Set 10: Comprehensive Classical ML Qualifying Exam
- /learn/machine-learning/public-data-projects/adult-income-project — Public-data project: Adult income prediction
- /learn/machine-learning/public-data-projects/aps-failure-project — Public-data project: APS Failure under imbalance
- /learn/machine-learning/public-data-projects/bank-marketing-project — Public-data project: Bank Marketing decision support
- /learn/machine-learning/public-data-projects/bike-sharing-project — Public-data project: Bike Sharing forecasting
- /learn/machine-learning/public-data-projects/ml-891-adult-income-decision-audit — Public-data project: Adult income decision audit
- /learn/machine-learning/public-data-projects/ml-892-bank-marketing-temporal-campaign — Public-data project: Bank marketing campaign under time and contact constraints
- /learn/machine-learning/public-data-projects/ml-894-online-retail-cohort-and-anomaly-study — Public-data project: Online Retail cohort, demand, and anomaly study
- /learn/machine-learning/public-data-projects/ml-895-movielens-recommendation-and-feedback — Public-data project: MovieLens recommendation with temporal and feedback-loop audits
- … 43 more in content-registry.json

### release-sensitive (283)

Largest queue; full list in JSON. Vendor-signal sample:
- /learn/agentic-ai/agent-benchmarks — Claude
- /learn/agentic-ai/agent-orchestration-frameworks — LangGraph, CrewAI, AutoGen, OpenAI, Claude
- /learn/agentic-ai/agent-to-agent-protocols — MCP
- /learn/agentic-ai/choosing-an-agent-framework — LangGraph, CrewAI, AutoGen
- /learn/agentic-ai/coding-agent-architecture — Claude
- /learn/agentic-ai/hierarchical-task-decomposition — LangGraph
- /learn/agentic-ai/persistent-agent-memory — Claude
- /learn/ai-foundations/foundation-models-explained — GPT-4, Claude, Gemini
- /learn/ai-foundations/how-llms-work-end-to-end-example — GPT-2
- /learn/ai-foundations/how-modern-ai-fits-together — ChatGPT
- /learn/ai-foundations/interpretability-black-box-problem — Anthropic, Claude
- /learn/ai-foundations/narrow-ai-vs-general-ai — Claude
- /learn/ai-foundations/narrow-vs-general-ai-in-practice — GPT-5, Claude, Gemini
- /learn/ai-foundations/scaling-laws — OpenAI, GPT-3
- /learn/ai-literacy/common-myths-about-ai-debunked — ChatGPT, Copilot
- /learn/ai-literacy/expecting-too-much-or-too-little — ChatGPT
- /learn/ai-literacy/types-of-ai-you-meet-every-day — ChatGPT, Claude, Gemini
- /learn/context-engineering/counting-tokens-in-practice — OpenAI, Claude, Anthropic
- /learn/context-engineering/foundations-quiz — Claude
- /learn/context-engineering/just-in-time-context-loading — Claude
- /learn/context-engineering/progressive-tool-disclosure — MCP, Claude
- /learn/context-engineering/scratchpad-and-working-memory-patterns — Claude
- /learn/context-engineering/structured-memory-stores-compared — Redis
- /learn/context-engineering/structured-memory-stores — Redis, Pinecone, Weaviate, pgvector
- /learn/deep-learning/sequence-generative/317-language-model-objectives-and-tokenization — Perplexity
- /learn/deep-learning/sequence-generative/320-language-model-evaluation-calibration-and-behavior — Perplexity
- /learn/deep-learning/vision/223-pruning-sparsity-and-quantization — Unstructured
- /learn/evals-red-teaming/eval-tooling-landscape — Promptfoo, Braintrust, Ragas, OpenAI, Anthropic
- /learn/evals-red-teaming/evaluating-agent-trajectories — LangSmith, Braintrust
- /learn/evals-red-teaming/flaky-eval-mitigation — Promptfoo, Braintrust, Ragas
- … 253 more

## Missing-data queues

### no summary/meta description (0)


### no published or updated date (0)


### zero in-body internal links (template nav still applies) (539)

- /learn/agentic-ai/agents-vs-workflows — Choose an agent only when a workflow is not enough
- /learn/agentic-ai/state-memory-and-recovery — Design agent state, memory, and recovery explicitly
- /learn/ai-foundations/applied-ai/301-ai-product-discovery-outcomes-and-harm — AI Product Discovery: Outcomes, Users, and Harm
- /learn/ai-foundations/applied-ai/302-choosing-rules-classical-ml-deep-learning-or-llm — Choosing Rules, Classical ML, Deep Learning, or an LLM
- /learn/ai-foundations/applied-ai/303-data-pipelines-lineage-and-data-contracts — Data Pipelines, Lineage, and Data Contracts
- /learn/ai-foundations/applied-ai/304-supervised-learning-product-loop — Supervised Learning in the Product Loop
- /learn/ai-foundations/applied-ai/305-unsupervised-learning-discovery-and-guardrails — Unsupervised Learning for Discovery, Not Automatic Truth
- /learn/ai-foundations/applied-ai/306-self-supervised-learning-data-and-transfer — Self-Supervised Learning: Data, Representations, and Transfer
- /learn/ai-foundations/applied-ai/307-reinforcement-learning-product-suitability — Reinforcement Learning: Product Suitability and Safe Constraints
- /learn/ai-foundations/applied-ai/308-training-and-inference-economics — Training and Inference Economics
- /learn/ai-foundations/applied-ai/309-embeddings-similarity-and-index-design — Embeddings, Similarity, and Index Design
- /learn/ai-foundations/applied-ai/310-retrieval-augmented-generation-grounding — Retrieval-Augmented Generation and Grounded Answers
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
- /learn/ai-foundations/applied-ai/325-applied-ai-staged-capstone-and-defense — Applied AI Staged Capstone and Technical Defense
- /learn/ai-foundations/reliable-ai/201-provenance-consent-and-data-rights — Provenance, Consent, and Data Rights
- /learn/ai-foundations/reliable-ai/202-labels-annotation-and-ground-truth — Labels, Annotation, and the Limits of Ground Truth
- /learn/ai-foundations/reliable-ai/203-benchmarks-evaluations-and-capability-claims — Benchmarks, Evaluations, and Defensible Capability Claims
- /learn/ai-foundations/reliable-ai/204-distribution-shift-and-robustness — Distribution Shift, Robustness, and Monitoring
- /learn/ai-foundations/reliable-ai/205-uncertainty-calibration-and-abstention — Uncertainty, Calibration, and Abstention
- /learn/ai-foundations/reliable-ai/206-hallucination-grounding-and-verification — Hallucination, Grounding, and Verification
- /learn/ai-foundations/reliable-ai/207-interpretability-and-explanation-boundaries — Interpretability, Explanations, and Their Boundaries
- /learn/ai-foundations/reliable-ai/208-fairness-problem-formulation-and-measurement — Fairness: Problem Formulation and Measurement
- /learn/ai-foundations/reliable-ai/209-fairness-mitigation-and-governance — Fairness Mitigation and Governance
- /learn/ai-foundations/reliable-ai/210-privacy-threat-modeling-and-minimization — Privacy Threat Modeling and Data Minimization
- /learn/ai-foundations/reliable-ai/211-privacy-preserving-learning-and-release — Privacy-Preserving Learning and Release
- /learn/ai-foundations/reliable-ai/212-adversarial-ml-and-input-security — Adversarial ML and Input Security
- /learn/ai-foundations/reliable-ai/213-model-supply-chain-and-artifact-security — Model Supply Chain and Artifact Security
- … 499 more

### live file not in curriculum (0)


### live curriculum node missing file (0)


### coming nodes (planned, unbuilt) (25)

- ai-for-designers/ai-for-designers-course-guide — Start here: the two lanes, the artifacts, the case study
- ai-for-designers/designer-mental-model-for-generative-ai — A designer's mental model for generative AI
- ai-for-designers/deterministic-vs-probabilistic-interfaces-compared — Deterministic vs probabilistic interfaces, compared
- ai-for-designers/choosing-where-ai-belongs-worked-example — Choose where AI belongs: a worked example
- ai-for-designers/ai-product-design-common-mistakes — AI product design: common mistakes
- ai-for-designers/ai-product-design-foundations-quiz — Quiz: AI product design foundations
- ai-for-designers/designing-the-ai-behavior-contract — Design the AI behavior contract
- ai-for-designers/mapping-ai-capabilities-to-user-tasks — Map AI capabilities to user tasks
- ai-for-designers/ai-feature-state-model-worked-example — Model every state an AI feature can be in
- ai-for-designers/ai-interaction-state-cheatsheet — AI interaction states: cheatsheet
- ai-for-designers/prompt-as-interaction-spec — Treat the prompt as an interaction spec
- ai-for-designers/behavior-before-interface-quiz — Quiz: behavior before interface
- ai-for-designers/designing-for-uncertainty — Design for uncertainty, not around it
- ai-for-designers/sources-confidence-and-explanations-compared — Sources, confidence, and explanations compared
- ai-for-designers/correction-undo-and-recovery-patterns — Correction, undo, and recovery patterns
- ai-for-designers/human-review-and-approval-boundaries — Draw the line: recommend, confirm, or act
- ai-for-designers/trust-patterns-worked-example — Fix an overconfident assistant: a worked example
- ai-for-designers/trust-and-recovery-quiz — Quiz: trust and recovery
- ai-for-designers/prototype-ai-behavior-without-a-model — Prototype AI behavior without a model
- ai-for-designers/creating-a-realistic-ai-test-set — Create a realistic AI test set
- ai-for-designers/designing-a-ux-evaluation-rubric — Design a UX evaluation rubric
- ai-for-designers/test-an-ai-prototype-worked-example — Test an AI prototype: a worked example
- ai-for-designers/ai-prototype-testing-common-mistakes — AI prototype testing: common mistakes
- ai-for-designers/prototype-and-evaluation-quiz — Quiz: prototype and evaluation
- ai-for-designers/capstone-design-a-trustworthy-ai-feature — Capstone: design a trustworthy AI feature end to end

### lesson files with status coming (0)


### release-sensitive, no date at all (2)

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

- /interview/agents — AI agents interview questions (755 words, updated 2026-09-08)
- /interview/ai-system-design — AI system design interview questions (727 words, updated 2026-09-08)
- /interview/evals — LLM evaluation interview questions (732 words, updated 2026-08-30)
- /interview/llm-basics — LLM basics interview questions (764 words, updated 2026-09-08)
- /interview/mcp — MCP interview questions (692 words, updated 2026-09-08)
- /interview/prompt-engineering — Prompt engineering interview questions (731 words, updated 2026-09-08)
- /interview/rag — RAG interview questions (700 words, updated 2026-08-30)

### scenario (6)

- /scenarios/agent-approval — An agent that can update customer records (459 words, updated 2026-08-30)
- /scenarios/document-qa — Document Q&A with permissions intact (428 words, updated 2026-08-30)
- /scenarios/eval-release — A release that improves quality but raises cost (436 words, updated 2026-08-30)
- /scenarios/mcp-team-server — An MCP server for a small engineering team (459 words, updated 2026-08-30)
- /scenarios/streaming-research — A research feature that streams useful work (434 words, updated 2026-08-30)
- /scenarios/support-assistant — A support assistant that must show its work (490 words, updated 2026-08-30)

### guide (9)

- /guides/build-a-rag-pipeline-over-your-own-documents — Build a RAG pipeline over your own documents (773 words, updated 2026-08-30)
- /guides/build-a-tool-calling-agent-from-scratch — Build a tool-calling agent from scratch, no framework (534 words, updated 2026-08-30)
- /guides/build-an-mcp-server-in-python — Build an MCP server in Python and connect it to Claude (725 words, updated 2026-08-30)
- /guides/cut-your-llm-bill — Cut your LLM bill without hurting quality (833 words, updated 2026-08-30)
- /guides/defend-against-prompt-injection — Defend a tool-using app against prompt injection (795 words, updated 2026-08-30)
- /guides/get-reliable-json-out-of-an-llm — Get reliable JSON out of an LLM (638 words, updated 2026-08-30)
- /guides/rag-fine-tuning-or-a-longer-prompt — RAG, fine-tuning, or a longer prompt? (881 words, updated 2026-08-30)
- /guides/ship-your-first-ai-feature-to-production — Ship your first AI feature to production (851 words, updated 2026-08-30)
- /guides/write-your-first-eval-for-an-ai-feature — Write your first eval for an AI feature (703 words, updated 2026-08-30)

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

### answer (29)

- /answers/ai-engineer-interview-questions — AI engineer interview questions: what is asked and how to prepare (1210 words, updated 2026-09-08)
- /answers/ai-engineer-roadmap — AI engineer roadmap: the skills in order, and what to skip (2002 words, updated 2026-09-08)
- /answers/ai-engineer-vs-ml-engineer — AI engineer vs ML engineer: the difference in what you do all day (977 words, updated 2026-09-08)
- /answers/difference-between-ai-and-machine-learning — Difference between AI and machine learning (and deep learning) (1009 words, updated 2026-09-08)
- /answers/free-forward-deployed-engineer-course — Free Forward Deployed Engineer course: from zero to FDE in nine months (2002 words, updated 2026-09-08)
- /answers/how-do-llms-work — How do LLMs work? Tokens, attention, and next-token prediction in plain words (919 words, updated 2026-09-08)
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
- /answers/what-is-rag — What is RAG (retrieval-augmented generation)? (926 words, updated 2026-09-08)
- /answers/what-skills-does-an-ai-engineer-need — What skills does an AI engineer need? The honest list (1251 words, updated 2026-09-08)

