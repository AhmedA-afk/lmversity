# Content registry — audit views

Generated 2026-09-15T20:50:35.048Z by `scripts/build-content-registry.mjs`.
2736 public content items. Machine-readable source: `content-registry.json`.
Heuristic fields (intent, audience, freshness) record their signals in JSON — overrule during scoring.

## By family

- lesson: 2177
- quiz: 143
- reference: 122
- lab: 78
- project: 59
- answer: 35
- interview: 27
- page: 26
- blog: 20
- guide: 14
- scenario: 12
- role: 12
- track: 10
- glossary: 1

## By status

- live: 2736

## By search intent (heuristic)

- concept: 1894
- practice: 143
- build: 137
- reference: 123
- comparison: 116
- worked-example: 96
- troubleshooting: 62
- answer: 35
- interview-prep: 27
- how-to: 20
- read: 20
- hub: 14
- scenario: 12
- role-path: 12
- nav: 12
- course-hub: 10
- definition: 3

## By primary audience (heuristic)

- ai-engineer: 1850
- beginner-engineer: 448
- forward-deployed-engineer: 195
- general: 193
- job-candidate: 27
- ml-engineer: 2
- data-scientist: 2
- product-manager: 2
- founder: 2
- designer: 2
- marketer: 2
- security-engineer: 2
- student: 2
- developer: 1
- ceo: 1
- content-creator: 1
- applied-ai-engineer: 1
- ai-platform-engineer: 1
- executive: 1
- creator: 1

## Coverage matrix — what each live track actually ships

| track | files | concept | worked ex. | mistakes | compared | cheatsheet | quiz | lab | capstone | % code | % check | % sources | med. words | quick guide | quiz bank |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

## Track gap briefs

Mechanical per-track audit. Practice-ending = last node of a module is quiz/lab/capstone/worked-example/drill;
dead-end = the track's final live node is a plain concept; orphan boundary = a module `startsAt` slug absent from the track's nodes.

## Scores and dispositions (mechanical pass)

Scale 0/1/2 per dimension; `null` = editorial judgement required. Auto-dispositions are
limited to keep/expand/refresh/investigate — merge, redirect, noindex, archive, replace
and split always need a written human reason (see checklist).

| disposition | items |
|---|---:|
| investigate | 2386 |
| keep | 345 |
| expand | 5 |

| dimension | scored | mean | 0 | 1 | 2 |
|---|---:|---:|---:|---:|---:|
| intentClarity | 2428 | 1.91 | 0 | 210 | 2218 |
| correctnessSources | 52 | 1.27 | 0 | 38 | 14 |
| completeness | 2631 | 1.64 | 47 | 849 | 1735 |
| prerequisiteFit | 2472 | 0.15 | 2292 | 0 | 180 |
| handsOn | 2428 | 1.41 | 671 | 91 | 1666 |
| explanationQuality | 2428 | 1.92 | 68 | 57 | 2303 |
| metadata | 2428 | 1.85 | 0 | 375 | 2053 |
| linking | 2285 | 1.51 | 392 | 329 | 1564 |
| freshnessHealth | 2736 | 0.77 | 945 | 1468 | 323 |
| originality | 0 | — | — | — | — |
| accessibility | 0 | — | — | — | — |
| demand | 0 | — | — | — | — |

### Non-keep dispositions

#### investigate: live lesson not registered in curriculum (2289)

- /learn/agent-frameworks/agno-teams-and-agentos — Agno: fast agents, teams, and the AgentOS runtime
- /learn/agent-frameworks/claude-agent-sdk — Claude Agent SDK: the Claude Code harness as a library
- /learn/agent-frameworks/crewai-crews-and-flows — CrewAI: role-based crews with deterministic flows
- /learn/agent-frameworks/dspy-programmatic-prompting — DSPy: programming, not prompting
- /learn/agent-frameworks/framework-cheatsheet — Agent Frameworks Cheatsheet
- /learn/agent-frameworks/framework-comparison-and-escape-hatches — Comparing frameworks — and the escape hatches that matter
- /learn/agent-frameworks/framework-leak-worked-example — Worked Example: The Task the Framework Couldn't Express
- /learn/agent-frameworks/framework-mistakes — Agent Frameworks: Common Mistakes
- /learn/agent-frameworks/framework-selection-project — Project: Framework Selection Bake-Off
- /learn/agent-frameworks/google-adk — Google ADK: workflow agents and multi-agent teams
- /learn/agent-frameworks/haystack-pipelines — Haystack: explicit pipelines for retrieval and agents
- /learn/agent-frameworks/langchain-agents-and-integrations — LangChain: the integration layer, then agents
- /learn/agent-frameworks/langgraph-durable-agents — LangGraph: durable agents as state machines
- /learn/agent-frameworks/llamaindex-data-framework — LlamaIndex: the data framework that grew agents
- /learn/agent-frameworks/mastra-typescript-agents — Mastra: the TypeScript agent framework
- /learn/agent-frameworks/microsoft-agent-frameworks — Microsoft's agent frameworks: Semantic Kernel, AutoGen, and the convergence
- /learn/agent-frameworks/no-code-ai-workflows — n8n, Zapier, Make, Pipedream: bounded no-code AI workflows
- /learn/agent-frameworks/openai-agents-sdk — OpenAI Agents SDK: agents, handoffs, and guardrails
- /learn/agent-frameworks/pydanticai-typed-agents — PydanticAI: agents that type-check
- /learn/agent-frameworks/raw-sdk-agent-baseline — The raw-SDK baseline every framework wraps
- /learn/agent-frameworks/structured-output-libraries — Instructor, Outlines, Guidance: the constrained-output libraries
- /learn/agent-frameworks/vercel-ai-sdk — Vercel AI SDK: streaming, tools, and generative UI
- /learn/agent-skills/agent-skills-spec-and-progressive-disclosure — The Agent Skills spec and progressive disclosure
- /learn/agent-skills/evaluating-and-porting-skills — Evaluating skills with fixtures, and porting them across agents
- /learn/agent-skills/skill-md-anatomy — SKILL.md anatomy: frontmatter, body, and bundled resources
- /learn/agent-skills/skill-security-and-provenance — Skill provenance, review, and the safe-installation checklist
- /learn/agent-skills/skill-vs-prompt-rule-hook-mcp-subagent — Skill vs prompt vs project rule vs hook vs MCP vs subagent
- /learn/agent-skills/skills-projects-first-skill-and-capstone — Projects: build your first skill, then turn a workflow into a tested one
- /learn/agentic-ai/agent-benchmarks — Benchmarking Agents: SWE-bench, WebArena, and GAIA
- /learn/agentic-ai/agent-loop-mistakes — Common Mistakes: Agent Loop Design
- /learn/agentic-ai/agent-memory-short-vs-long-term — Short-Term vs Long-Term Memory
- /learn/agentic-ai/agent-orchestration-frameworks — Choosing an Orchestration Framework
- /learn/agentic-ai/agent-permissions-and-authorization — Give an agent permissions, not access
- /learn/agentic-ai/agent-run-worked-example — Worked Example: An Agent Run, Step by Step
- /learn/agentic-ai/agent-task-contracts — Write a task contract for an agent
- /learn/agentic-ai/agent-to-agent-protocols — Agent-to-Agent Protocols: How Agents Will Talk to Each Other
- /learn/agentic-ai/agentic-ai-cheatsheet — Agentic AI Cheatsheet
- /learn/agentic-ai/agents-vs-workflows — Choose an agent only when a workflow is not enough
- /learn/agentic-ai/autonomy-vs-control — Setting the Autonomy Dial
- /learn/agentic-ai/blackboard-and-swarm-patterns — Blackboard and Swarm: Decentralized Multi-Agent Coordination
- … 2249 more in content-registry.json

#### investigate: zero in-body internal links (97)

- /interview/interview-modes — Interview modes: interviewer and candidate
- /roles/forward-deployed-engineer/ai/agents-loops-stop-conditions-and-fallbacks — Agents: loops, stop conditions, and safe fallbacks
- /roles/forward-deployed-engineer/ai/chunking-embedding-and-hybrid-search — Chunking, embeddings and hybrid search
- /roles/forward-deployed-engineer/ai/cost-latency-and-the-call-centre-budget — Cost, latency, and the call-centre budget
- /roles/forward-deployed-engineer/ai/deterministic-rules-probabilistic-model — Deterministic rules, probabilistic model: where the line goes
- /roles/forward-deployed-engineer/ai/guardrails-that-do-not-break-the-demo — Guardrails that do not break the demo
- /roles/forward-deployed-engineer/ai/labelling-twenty-examples-with-a-domain-expert — Labelling twenty examples with a domain expert
- /roles/forward-deployed-engineer/ai/mcp-servers-and-when-a-plain-function-is-simpler — MCP servers, and when a plain function is simpler
- /roles/forward-deployed-engineer/ai/metrics-the-customer-will-accept — Metrics the customer will accept, and the ones they will not
- /roles/forward-deployed-engineer/ai/permission-aware-retrieval — Permission-aware retrieval: filter before you rank
- /roles/forward-deployed-engineer/ai/rag-in-one-page-and-where-it-breaks — RAG in one page, and where it breaks
- /roles/forward-deployed-engineer/ai/rag-or-fine-tune-the-decision-with-numbers — RAG or fine-tune: the decision, with numbers
- /roles/forward-deployed-engineer/ai/structured-outputs-you-can-validate — Structured outputs you can validate
- /roles/forward-deployed-engineer/ai/system-prompts-and-parameterised-instructions — System prompts and parameterised instructions
- /roles/forward-deployed-engineer/ai/the-ten-example-feasibility-test — The ten-example feasibility test
- /roles/forward-deployed-engineer/ai/tool-calling-and-the-tools-an-expert-would-use — Tool calling, and the tools an expert would use
- /roles/forward-deployed-engineer/ai/why-the-eval-comes-before-the-build — Why the eval comes before the build
- /roles/forward-deployed-engineer/career/india-routes-platform-vendors-startups-remote — India routes: platform vendors, startups, remote with overlap
- /roles/forward-deployed-engineer/career/negotiating-from-posted-data — Negotiating from posted data
- /roles/forward-deployed-engineer/career/resume-and-linkedin-for-an-fde-seat — Résumé and LinkedIn for an FDE seat
- /roles/forward-deployed-engineer/career/startup-loops-and-the-airline-cto-case — Startup loops, and the "you are the CTO of an airline" case
- /roles/forward-deployed-engineer/career/the-first-person-case-study — The first-person case study: "I", not "we"
- /roles/forward-deployed-engineer/career/the-portfolio-that-shows-outcomes — The portfolio that shows outcomes, not features
- /roles/forward-deployed-engineer/career/the-take-home-with-a-recorded-walkthrough — The take-home with a recorded walkthrough
- /roles/forward-deployed-engineer/career/what-interviewers-say-they-look-for — What interviewers say they look for
- /roles/forward-deployed-engineer/career/your-first-90-days-as-an-fde — Your first 90 days as an FDE
- /roles/forward-deployed-engineer/craft/logs-metrics-traces-what-to-emit — Logs, metrics, traces: what to emit so 3am you can find it
- /roles/forward-deployed-engineer/craft/runbooks-and-the-ceo-demo-crisis — Runbooks, and staying calm during the CEO demo crisis
- /roles/forward-deployed-engineer/craft/structured-errors-and-the-message-a-customer-reads — Structured errors, and the message the customer will actually read
- /roles/forward-deployed-engineer/data/bronze-silver-gold-medallion-layers — Bronze, silver, gold: medallion layers for a small team
- /roles/forward-deployed-engineer/data/data-residency-dpdp-gdpr-hipaa — Data residency: DPDP Act, GDPR, HIPAA, and what each changes
- /roles/forward-deployed-engineer/data/data-without-movement-apis-and-mcp-as-a-data-layer — Data without movement: APIs and MCP as the data layer
- /roles/forward-deployed-engineer/data/entities-properties-links-the-ontology-idea — Entities, properties, links: the ontology idea
- /roles/forward-deployed-engineer/data/modelling-a-hospital-a-bank-a-factory — Modelling a hospital, a bank, a factory
- /roles/forward-deployed-engineer/data/multi-party-data-competitors-on-one-platform — Multi-party data: competitors on one platform
- /roles/forward-deployed-engineer/data/pdfs-scans-and-ocr-in-indian-enterprises — PDFs, scans and OCR: the Indian enterprise reality
- /roles/forward-deployed-engineer/data/rbac-row-level-security-and-who-sees-what — RBAC, row-level security, and who sees what
- /roles/forward-deployed-engineer/data/salesforce-and-crm-objects — Salesforce and CRM objects: the fields that are always wrong
- /roles/forward-deployed-engineer/data/sap-erp-exports-and-the-flat-file — SAP and ERP exports: living with the flat file
- /roles/forward-deployed-engineer/data/sharepoint-drive-and-document-stores — SharePoint, Drive, and document stores as a source of truth
- … 57 more in content-registry.json

#### expand: thin vs family median (348w vs ~876w) (1)

- /interview/role-ai-engineer — AI engineer interview questions

#### expand: thin vs family median (336w vs ~876w) (1)

- /interview/role-applied-ai-engineer — Applied AI engineer interview questions

#### expand: thin vs family median (279w vs ~1005w) (1)

- /answers/certification-vs-portfolio-vs-experience — AI certification vs portfolio vs experience — which matters?

#### expand: thin vs family median (361w vs ~1005w) (1)

- /answers/deploy-an-llm-app-to-production — How do I deploy an LLM app to production?

#### expand: thin vs family median (384w vs ~1005w) (1)

- /answers/how-to-choose-an-ai-chat-product — How do I choose between ChatGPT, Claude, Gemini, and the other AI assistants?

## Duplicate candidates

367 pairs by title/slug similarity (130 not already cross-linked) — candidates for the merge/redirect editorial pass, not verdicts. Pairs where one already links to the other are marked linked — often deliberate two-part lessons.

| item A | item B | jac | contain | stem | linked | scope |
|---|---|---:|---:|---|---|---|
| /learn/prompt-engineering/meta-prompting-to-draft-prompts | /learn/prompt-engineering/meta-prompting-with-models | 1 | 1 |  | yes | same track |
| /learn/prompt-engineering/task-framing-intent-constraints-criteria | /learn/prompt-engineering/task-framing | 1 | 1 | yes | yes | same track |
| /learn/llm-foundations/grouped-query-attention | /learn/llm-foundations/multi-query-and-grouped-query-attention | 1 | 1 |  | yes | same track |
| /learn/genai-app-dev/generative-ui-rendering-components | /learn/genai-app-dev/generative-ui | 1 | 1 | yes | yes | same track |
| /learn/tools-function-calling/structured-output-vs-tool-calls-when | /learn/tools-function-calling/structured-output-vs-tool-calls | 1 | 1 | yes | yes | same track |
| /learn/genai-app-dev/session-and-state-management | /learn/genai-app-dev/session-state-multi-turn | 0.83 | 1 |  | yes | same track |
| /learn/tools-function-calling/openapi-to-schema-conversion | /learn/tools-function-calling/openapi-to-tool-schema | 0.83 | 1 |  | yes | same track |
| /learn/context-engineering/context-window-testing-and-eval | /learn/context-engineering/testing-whether-context-helps | 0.83 | 1 |  | yes | same track |
| /learn/tools-function-calling/writing-descriptions-models-follow-deep | /learn/tools-function-calling/writing-tool-descriptions-models-follow | 0.83 | 1 |  | yes | same track |
| /learn/genai-app-dev/chat-ux-that-doesnt-feel-broken | /learn/genai-app-dev/designing-chat-ux | 0.83 | 1 |  | yes | same track |
| /learn/genai-app-dev/function-calling-across-providers | /learn/tools-function-calling/tool-calling-across-providers | 0.8 | 1 |  | yes | genai-app-dev × tools-function-calling |
| /learn/prompt-engineering/ab-testing-in-production | /learn/prompt-engineering/ab-testing-prompts-in-production | 0.8 | 1 |  | yes | same track |
| /learn/genai-app-dev/tool-calling-and-authority | /learn/genai-app-dev/tool-calling-as-authority | 0.8 | 1 |  | yes | same track |
| /learn/structured-outputs/json-schema-essentials-for-outputs | /learn/tools-function-calling/json-schema-for-tools-essentials | 0.8 | 1 |  | yes | structured-outputs × tools-function-calling |
| /learn/structured-outputs/building-an-extraction-eval-harness | /learn/tools-function-calling/building-a-tool-use-eval-harness | 0.75 | 1 |  | yes | structured-outputs × tools-function-calling |
| /learn/ai-foundations/narrow-ai-vs-general-ai | /learn/ai-foundations/narrow-vs-general-ai-in-practice | 0.75 | 1 |  | yes | same track |
| /learn/context-engineering/context-engineering-vs-prompting | /answers/prompt-engineering-vs-context-engineering | 0.75 | 1 |  | yes | context-engineering × answers |
| /learn/harness-design/the-control-loop | /learn/tools-function-calling/building-a-browser-tool-loop | 0.75 | 1 |  | yes | harness-design × tools-function-calling |
| /learn/genai-app-dev/rate-limits-and-retry-strategies | /learn/genai-app-dev/rate-limits-and-retry | 0.75 | 1 | yes | yes | same track |
| /learn/llm-foundations/context-window-mechanics-and-limits | /learn/llm-foundations/context-window-mechanics | 0.75 | 1 | yes | yes | same track |
| /learn/harness-design/subprocess-isolation-and-sandboxing | /learn/tools-function-calling/sandboxing-tool-execution | 0.75 | 1 |  | yes | harness-design × tools-function-calling |
| /learn/tools-function-calling/testing-and-debugging-tool-calls | /learn/tools-function-calling/testing-tool-calls-strategies | 0.75 | 1 |  | yes | same track |
| /learn/llm-foundations/grokking-and-double-descent-mechanics | /learn/llm-foundations/grokking-and-double-descent | 0.75 | 1 | yes | yes | same track |
| /learn/prompt-engineering/negative-instructions-pitfall | /learn/prompt-engineering/negative-instructions-problem | 0.75 | 1 |  | yes | same track |
| /learn/tools-function-calling/schema-versioning-strategies | /learn/tools-function-calling/tool-schema-versioning | 0.71 | 1 |  | yes | same track |
| /learn/structured-outputs/schema-versioning-and-migration | /learn/structured-outputs/schema-versioning-basics | 0.71 | 1 |  | yes | same track |
| /learn/ai-foundations/ai-systems/111-alpha-beta-pruning-and-move-ordering | /learn/classical-ai/search-planning/113-alpha-beta-pruning-bounds-move-ordering-and-exactness | 0.71 | 1 |  | yes | ai-foundations × classical-ai |
| /learn/prompt-engineering/automatic-prompt-optimization-dspy | /learn/prompt-engineering/automatic-prompt-optimization | 0.67 | 1 | yes | yes | same track |
| /learn/structured-outputs/reliability-design-mistakes | /learn/tools-function-calling/reliability-common-mistakes | 0.67 | 1 |  |  | structured-outputs × tools-function-calling |
| /learn/ai-foundations/ai-vs-ml-vs-deep-learning | /answers/difference-between-ai-and-machine-learning | 0.67 | 1 |  | yes | ai-foundations × answers |
| /learn/context-engineering/context-engineering-vs-prompting | /learn/prompt-engineering/what-prompt-engineering-is | 0.67 | 1 |  |  | context-engineering × prompt-engineering |
| /learn/prompt-engineering/what-prompt-engineering-is | /learn/tools-function-calling/descriptions-are-prompts | 0.67 | 1 |  | yes | prompt-engineering × tools-function-calling |
| /learn/tools-function-calling/chaining-into-dag-workflows | /learn/tools-function-calling/chaining-tools-into-workflows | 0.67 | 1 |  | yes | same track |
| /learn/context-engineering/cache-aware-context-design-deep | /learn/context-engineering/cache-aware-context-design | 0.67 | 1 | yes | yes | same track |
| /learn/genai-app-dev/quiz-reliability-safety | /learn/tools-function-calling/reliability-quiz | 0.67 | 1 |  |  | genai-app-dev × tools-function-calling |
| /learn/deep-learning/core/129-transfer-learning-fine-tuning-and-domain-shift | /learn/deep-learning/vision/211-transfer-learning-and-fine-tuning | 0.67 | 1 |  | yes | same track |
| /learn/ai-foundations/applied-ai/308-training-and-inference-economics | /learn/ai-foundations/training-vs-inference | 0.67 | 1 |  | yes | same track |
| /learn/ai-foundations/training-vs-inference | /learn/llm-foundations/training-time-vs-inference-time | 0.67 | 1 |  | yes | ai-foundations × llm-foundations |
| /learn/ai-foundations/embeddings-quiz | /learn/maths-foundations/the-geometry-of-embeddings | 0.67 | 1 |  | yes | ai-foundations × maths-foundations |
| /learn/context-engineering/long-context-strategies | /learn/context-engineering/million-token-window-strategies | 0.67 | 1 |  | yes | same track |
| /learn/hallucinations/why-rlhf-hurts-calibration | /learn/llm-foundations/instruction-tuning-and-rlhf | 0.6 | 1 |  | yes | hallucinations × llm-foundations |
| /learn/tools-function-calling/streaming-partial-tool-calls-concept | /learn/tools-function-calling/streaming-partial-tool-calls | 0.57 | 1 | yes | yes | same track |
| /learn/tools-function-calling/benchmarking-tool-use | /learn/tools-function-calling/benchmarking-with-bfcl | 0.57 | 1 |  | yes | same track |
| /learn/machine-learning/public-data-projects/ml-895-movielens-recommendation-and-feedback | /learn/machine-learning/public-data-projects/movielens-project | 0.56 | 1 |  | yes | same track |
| /learn/context-engineering/context-handoff-between-agents-deep | /learn/context-engineering/context-handoff-between-agents | 0.5 | 1 | yes | yes | same track |
| /learn/context-engineering/tokens-are-not-words | /learn/llm-foundations/why-models-need-tokens-not-characters | 0.5 | 1 |  | yes | context-engineering × llm-foundations |
| /learn/prompt-engineering/what-prompting-is | /learn/prompt-engineering/what-role-prompting-changes | 0.5 | 1 |  | yes | same track |
| /learn/hallucinations/production-reliability-cheatsheet | /learn/production/production-cheatsheet | 0.5 | 1 |  |  | hallucinations × production |
| /learn/context-engineering/conversation-memory-and-state | /learn/context-engineering/cross-session-memory-architecture | 0.5 | 1 |  | yes | same track |
| /learn/prompt-engineering/what-prompt-engineering-is | /answers/prompt-engineering-vs-context-engineering | 0.5 | 1 |  | yes | prompt-engineering × answers |
| /learn/maths-foundations/partial-derivatives-and-chain-rule | /learn/maths-foundations/the-chain-rule | 0.5 | 1 |  | yes | same track |
| /learn/ai-foundations/what-a-model-actually-is | /learn/llm-foundations/what-a-language-model-actually-computes | 0.5 | 1 |  | yes | ai-foundations × llm-foundations |
| /learn/ai-foundations/what-a-model-actually-is | /learn/llm-foundations/what-the-internet-teaches-a-model | 0.5 | 1 |  | yes | ai-foundations × llm-foundations |
| /learn/genai-app-dev/tool-call-authority-mistakes | /learn/tools-function-calling/what-is-tool-calling | 0.5 | 1 |  | yes | genai-app-dev × tools-function-calling |
| /learn/harness-design/parallel-tool-scheduling | /learn/tools-function-calling/parallel-tool-calls | 0.5 | 1 |  | yes | harness-design × tools-function-calling |
| /learn/structured-outputs/tool-and-function-schemas-for-extraction | /learn/tools-function-calling/what-is-tool-calling | 0.5 | 1 |  | yes | structured-outputs × tools-function-calling |
| /learn/tools-function-calling/foundations-common-mistakes | /learn/tools-function-calling/what-is-tool-calling | 0.5 | 1 |  |  | same track |
| /learn/tools-function-calling/foundations-quiz | /learn/tools-function-calling/what-is-tool-calling | 0.5 | 1 |  |  | same track |
| /learn/tools-function-calling/parallel-tool-calls-mechanics | /learn/tools-function-calling/parallel-tool-calls | 0.5 | 1 | yes | yes | same track |
| /learn/tools-function-calling/taxonomy-of-tool-failures | /learn/tools-function-calling/what-is-tool-calling | 0.5 | 1 |  | yes | same track |

_… 307 more pairs in content-registry.json (`duplicates`)_

## Title-overpromise candidates

0 items whose titles claim more than the body structure delivers — scope words on thin bodies, or numeric promises ("7 mistakes") the heading/list structure doesn't fulfill. Candidates, not verdicts.


## Sourcing review flags

174 items flagged for sourcing review — volatile pages without a review date, comparisons sourced only to provider domains, volatile pages with numeric claims and no source signal. Candidates, not verdicts.

| item | flags |
|---|---|
| /learn/agent-frameworks/framework-cheatsheet | pricing-sensitive page with no updated/review date |
| /learn/agent-frameworks/framework-leak-worked-example | release-sensitive page with no updated/review date |
| /learn/agent-frameworks/framework-mistakes | release-sensitive page with no updated/review date |
| /learn/agent-frameworks/framework-selection-project | release-sensitive page with no updated/review date |
| /learn/ai-for-designers/ai-product-design-foundations-quiz | pricing-sensitive page with no updated/review date |
| /learn/ai-for-designers/choosing-where-ai-belongs-worked-example | pricing-sensitive page with no updated/review date |
| /learn/ai-for-designers/correction-undo-and-recovery-patterns | policy-sensitive page with no updated/review date |
| /learn/ai-for-designers/creating-a-realistic-ai-test-set | policy-sensitive page with no updated/review date |
| /learn/ai-for-designers/prototype-ai-behavior-without-a-model | policy-sensitive page with no updated/review date |
| /learn/ai-for-designers/prototype-and-evaluation-quiz | policy-sensitive page with no updated/review date |
| /learn/ai-for-designers/research-synthesis-lab | policy-sensitive page with no updated/review date |
| /learn/ai-for-designers/trust-and-recovery-quiz | policy-sensitive page with no updated/review date |
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
| /learn/ai-literacy/everyday-ai-mistakes | pricing-sensitive page with no updated/review date |
| /learn/ai-literacy/judging-and-verifying-quiz | 42 numeric claims with no sources section or external link |
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
| /learn/evals-red-teaming/eval-regression-worked-example | pricing-sensitive page with no updated/review date; 13 numeric claims with no sources section or external link |
| /learn/evals-red-teaming/flaky-eval-mitigation | 5 numeric claims with no sources section or external link |
| /learn/fine-tuning/context-length-extension-rope-scaling | 8 numeric claims with no sources section or external link |
| /learn/fine-tuning/fine-tune-regression-worked-example | pricing-sensitive page with no updated/review date; 15 numeric claims with no sources section or external link |

_… 114 more in content-registry.json (`sourcingFlags`)_

## Freshness queues

Review order: volatile classes first, oldest last-verified date first; undated items lead each queue. `verified`/`updated`/`published` supply the last-verified date — git-derived when frontmatter is absent.

- periodic: 1468
- pricing-sensitive: 376
- release-sensitive: 365
- durable: 272
- certification-sensitive: 104
- policy-sensitive: 100
- volatile: 51

### certification-sensitive (104) — oldest-verified first

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
- /learn/ai-foundations/reliable-ai/228-reliable-ai-capstone-and-technical-defense — Reliable AI Capstone and Technical Defense *(verified 2026-08-30)*
- /learn/ai-literacy/fact-check-an-ai-answer-step-by-step — Fact-checking an AI answer, step by step *(verified 2026-08-30)*
- /learn/ai-literacy/run-a-real-task-end-to-end-with-verification — Capstone: run a real task end to end, verified *(verified 2026-08-30)*
- … 74 more in content-registry.json

### pricing-sensitive (376) — oldest-verified first

- /learn/agent-frameworks/framework-cheatsheet — Agent Frameworks Cheatsheet *(verified undated)*
- /learn/ai-for-designers/ai-product-design-foundations-quiz — Quiz: AI product design foundations *(verified undated)*
- /learn/ai-for-designers/choosing-where-ai-belongs-worked-example — Choosing where AI belongs: a worked example *(verified undated)*
- /learn/ai-literacy/everyday-ai-mistakes — Common Mistakes: Everyday AI Use *(verified undated)*
- /learn/evals-red-teaming/eval-regression-worked-example — Worked Example: An Eval That Passed and Shipped a Regression *(verified undated)*
- /learn/fine-tuning/fine-tune-regression-worked-example — Worked Example: A Fine-Tune That Fixed One Thing and Broke Three *(verified undated)*
- /learn/genai-app-dev/genai-feature-worked-example — Worked Example: A GenAI Feature From Demo to Production *(verified undated)*
- /learn/multimodal-ai/document-pipeline-worked-example — Worked Example: A Document Pipeline That Costs 10× What It Should *(verified undated)*
- /learn/multimodal-ai/multimodal-cheatsheet — Multimodal AI Cheatsheet *(verified undated)*
- /learn/multimodal-ai/multimodal-mistakes — Multimodal AI: Common Mistakes *(verified undated)*
- /learn/ai-foundations/choosing-a-model — Choosing a model in 2026 *(verified 2026-08-29)*
- /learn/ai-foundations/tokens-context-cost — Tokens, context & cost *(verified 2026-08-29)*
- /learn/prompt-engineering/chain-of-thought-prompting — Chain-of-Thought: Getting the Model to Show Its Work *(verified 2026-08-29)*
- /learn/prompt-engineering/few-shot-prompting — Few-Shot Prompting: Teaching by Example *(verified 2026-08-29)*
- /learn/prompt-engineering/system-vs-user-prompts — System Prompts vs User Prompts *(verified 2026-08-29)*
- /learn/ai-foundations/classification-vs-regression — Classification vs. Regression: The Two Basic Prediction Tasks *(verified 2026-08-30)*
- /learn/ai-foundations/supervised-learning-explained — Supervised Learning, Explained *(verified 2026-08-30)*
- /learn/ai-literacy/ai-literacy-master-cheatsheet — Cheatsheet: the AI literacy master reference *(verified 2026-08-30)*
- /learn/ai-literacy/compare-ai-tools-for-one-real-task — Comparing AI tools for one real task *(verified 2026-08-30)*
- /learn/ai-literacy/free-vs-paid-ai-what-you-get — Free vs. paid AI: what you actually get *(verified 2026-08-30)*
- /learn/ai-literacy/is-ai-worth-it-for-this-task — Is AI worth it here? A cost-benefit walkthrough *(verified 2026-08-30)*
- /learn/ai-literacy/the-real-limits-of-ai-today — The real limits of today's AI *(verified 2026-08-30)*
- /learn/ai-literacy/the-verification-checklist — Cheatsheet: the verification checklist *(verified 2026-08-30)*
- /learn/ai-literacy/using-ai-honestly-and-responsibly — Using AI honestly and responsibly *(verified 2026-08-30)*
- /learn/ai-literacy/verification-tactics-by-task-type — How to verify different kinds of AI output *(verified 2026-08-30)*
- /learn/ai-literacy/what-a-hallucination-really-is — What an AI 'hallucination' really is *(verified 2026-08-30)*
- /learn/ai-literacy/what-ai-actually-is — What AI actually is (and what it isn't) *(verified 2026-08-30)*
- /learn/ai-literacy/what-ai-can-and-cant-do-overview — What AI can and can't do: the whole picture *(verified 2026-08-30)*
- /learn/ai-literacy/what-happens-to-what-you-type — What happens to what you type into AI *(verified 2026-08-30)*
- /learn/ai-literacy/what-not-to-paste-into-ai — What you should never paste into AI *(verified 2026-08-30)*
- … 346 more in content-registry.json

### policy-sensitive (100) — oldest-verified first

- /learn/ai-for-designers/correction-undo-and-recovery-patterns — Correction, undo, and recovery patterns *(verified undated)*
- /learn/ai-for-designers/creating-a-realistic-ai-test-set — Creating a realistic AI test set *(verified undated)*
- /learn/ai-for-designers/prototype-ai-behavior-without-a-model — Prototype AI behavior without a model *(verified undated)*
- /learn/ai-for-designers/prototype-and-evaluation-quiz — Quiz: prototype and evaluation *(verified undated)*
- /learn/ai-for-designers/research-synthesis-lab — Lab: build a source-traceable research synthesis board *(verified undated)*
- /learn/ai-for-designers/trust-and-recovery-quiz — Quiz: trust and recovery *(verified undated)*
- /learn/responsible-ai/contestability-worked-example — Worked Example: A Contestability Path That Actually Works *(verified undated)*
- /learn/responsible-ai/responsible-ai-cheatsheet — Responsible AI Cheatsheet *(verified undated)*
- /learn/responsible-ai/responsible-ai-mistakes — Common Mistakes: Responsible AI in Practice *(verified undated)*
- /learn/responsible-ai/responsible-release-project — Project: A Responsible-AI Release — Risk Register, Model Card, Red-Team Sign-Off *(verified undated)*
- /privacy — Privacy *(verified undated)*
- /terms — Terms *(verified undated)*
- /learn/ai-foundations/open-weight-vs-closed-models — Open-Weight vs. Closed Models *(verified 2026-08-30)*
- /learn/ai-literacy/ai-vs-human-thinking-compared — AI vs. a human expert: a side-by-side *(verified 2026-08-30)*
- /learn/ai-literacy/data-privacy-provenance-and-policy — Protect data with privacy, provenance, and policy boundaries *(verified 2026-08-30)*
- /learn/classical-ai/knowledge-uncertainty/215-knowledge-graphs-queries-provenance-and-embeddings — Knowledge graphs: queries, provenance, and embeddings *(verified 2026-08-30)*
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
- … 70 more in content-registry.json

### release-sensitive (365) — oldest-verified first

Largest queue; full list in JSON. Oldest-verified sample:
- /learn/agent-frameworks/framework-leak-worked-example — CrewAI, LangGraph *(verified undated)*
- /learn/agent-frameworks/framework-mistakes — LangGraph *(verified undated)*
- /learn/agent-frameworks/framework-selection-project — LangGraph, CrewAI, Agno, PydanticAI, OpenAI, Mastra, Claude *(verified undated)*
- /learn/llm-foundations/llm-foundations-cheatsheet — Perplexity *(verified undated)*
- /learn/mcp/mcp-production-server-project — MCP *(verified undated)*
- /learn/genai-app-dev/streaming-responses-to-the-ui — Anthropic, OpenAI *(verified 2026-08-29)*
- /learn/prompt-engineering/delimiters-and-formatting — Claude *(verified 2026-08-29)*
- /learn/ai-foundations/foundation-models-explained — GPT-4, Claude, Gemini *(verified 2026-08-30)*
- /learn/ai-foundations/interpretability-black-box-problem — Anthropic, Claude *(verified 2026-08-30)*
- /learn/ai-foundations/narrow-ai-vs-general-ai — Claude *(verified 2026-08-30)*
- /learn/ai-foundations/scaling-laws — OpenAI, GPT-3 *(verified 2026-08-30)*
- /learn/ai-literacy/common-myths-about-ai-debunked — ChatGPT, Copilot *(verified 2026-08-30)*
- /learn/ai-literacy/expecting-too-much-or-too-little — ChatGPT *(verified 2026-08-30)*
- /learn/ai-literacy/types-of-ai-you-meet-every-day — ChatGPT, Claude, Gemini *(verified 2026-08-30)*
- /learn/context-engineering/counting-tokens-in-practice — OpenAI, Claude, Anthropic *(verified 2026-08-30)*
- /learn/context-engineering/just-in-time-context-loading — Claude *(verified 2026-08-30)*
- /learn/context-engineering/progressive-tool-disclosure — MCP, Claude *(verified 2026-08-30)*
- /learn/context-engineering/scratchpad-and-working-memory-patterns — Claude *(verified 2026-08-30)*
- /learn/context-engineering/structured-memory-stores-compared — Redis *(verified 2026-08-30)*
- /learn/context-engineering/structured-memory-stores — Redis, Pinecone, Weaviate, pgvector *(verified 2026-08-30)*
- /learn/deep-learning/vision/223-pruning-sparsity-and-quantization — Unstructured *(verified 2026-08-30)*
- /learn/fine-tuning/catastrophic-forgetting-and-overfitting — Perplexity *(verified 2026-08-30)*
- /learn/fine-tuning/choosing-a-training-framework — Hugging Face *(verified 2026-08-30)*
- /learn/fine-tuning/context-length-extension-rope-scaling — Llama, Mistral *(verified 2026-08-30)*
- /learn/fine-tuning/dataset-decontamination-and-deduplication — Hugging Face *(verified 2026-08-30)*
- /learn/fine-tuning/distributed-training-with-fsdp-and-deepspeed — Hugging Face *(verified 2026-08-30)*
- /learn/fine-tuning/knowledge-distillation — GPT-4, Claude *(verified 2026-08-30)*
- /learn/fine-tuning/learning-rate-schedules-and-warmup — Hugging Face *(verified 2026-08-30)*
- /learn/fine-tuning/lora-rank-and-target-module-selection — Llama *(verified 2026-08-30)*
- /learn/fine-tuning/memory-optimization-gradient-checkpointing-flash-attention — Hugging Face *(verified 2026-08-30)*
- … 335 more

## Missing-data queues

### no summary/meta description (0)


### no published or updated date (76)

- /learn/agent-frameworks/framework-cheatsheet — Agent Frameworks Cheatsheet
- /learn/agent-frameworks/framework-leak-worked-example — Worked Example: The Task the Framework Couldn't Express
- /learn/agent-frameworks/framework-mistakes — Agent Frameworks: Common Mistakes
- /learn/agent-frameworks/framework-selection-project — Project: Framework Selection Bake-Off
- /learn/agentic-ai/agent-loop-mistakes — Common Mistakes: Agent Loop Design
- /learn/agentic-ai/agent-run-worked-example — Worked Example: An Agent Run, Step by Step
- /learn/agentic-ai/agentic-ai-cheatsheet — Agentic AI Cheatsheet
- /learn/ai-for-designers/ai-feature-state-model-worked-example — AI feature state model: a worked example
- /learn/ai-for-designers/ai-for-designers-course-guide — AI for Designers: course guide, lanes, and your first case study
- /learn/ai-for-designers/ai-interaction-state-cheatsheet — AI interaction states cheatsheet
- /learn/ai-for-designers/ai-product-design-common-mistakes — AI product design: common mistakes
- /learn/ai-for-designers/ai-product-design-foundations-quiz — Quiz: AI product design foundations
- /learn/ai-for-designers/ai-prototype-testing-common-mistakes — AI prototype testing: common mistakes
- /learn/ai-for-designers/behavior-before-interface-quiz — Quiz: behavior before interface
- /learn/ai-for-designers/capstone-design-a-trustworthy-ai-feature — Capstone: design a trustworthy AI feature
- /learn/ai-for-designers/choosing-where-ai-belongs-worked-example — Choosing where AI belongs: a worked example
- /learn/ai-for-designers/correction-undo-and-recovery-patterns — Correction, undo, and recovery patterns
- /learn/ai-for-designers/creating-a-realistic-ai-test-set — Creating a realistic AI test set
- /learn/ai-for-designers/designer-mental-model-for-generative-ai — A designer's mental model for generative AI
- /learn/ai-for-designers/designing-a-ux-evaluation-rubric — Designing a UX evaluation rubric
- /learn/ai-for-designers/designing-for-uncertainty — Designing for uncertainty
- /learn/ai-for-designers/designing-the-ai-behavior-contract — Designing the AI behavior contract
- /learn/ai-for-designers/deterministic-vs-probabilistic-interfaces-compared — Deterministic vs probabilistic interfaces, compared
- /learn/ai-for-designers/human-review-and-approval-boundaries — Human review and approval boundaries
- /learn/ai-for-designers/mapping-ai-capabilities-to-user-tasks — Mapping AI capabilities to user tasks
- /learn/ai-for-designers/prompt-as-interaction-spec — Prompts as interaction specs
- /learn/ai-for-designers/prototype-ai-behavior-without-a-model — Prototype AI behavior without a model
- /learn/ai-for-designers/prototype-and-evaluation-quiz — Quiz: prototype and evaluation
- /learn/ai-for-designers/research-synthesis-lab — Lab: build a source-traceable research synthesis board
- /learn/ai-for-designers/sources-confidence-and-explanations-compared — Sources, confidence, and explanations, compared
- /learn/ai-for-designers/test-an-ai-prototype-worked-example — Testing an AI prototype: a worked example
- /learn/ai-for-designers/trust-and-recovery-quiz — Quiz: trust and recovery
- /learn/ai-for-designers/trust-patterns-worked-example — Trust patterns: a redesign worked example
- /learn/ai-foundations/eval-and-model-mistakes — Common Mistakes: Evaluation and Model Claims
- /learn/ai-foundations/model-selection-cheatsheet — AI Foundations Cheatsheet
- /learn/ai-literacy/everyday-ai-mistakes — Common Mistakes: Everyday AI Use
- /learn/classical-ai/a-star-worked-example — Worked Example: A* on a Grid — Where the Heuristic Matters
- /learn/classical-ai/classical-ai-cheatsheet — Classical AI Cheatsheet
- /learn/classical-ai/classical-ai-mistakes — Common Mistakes: Classical AI and Search
- /learn/context-engineering/context-budget-worked-example — Worked Example: Where a 128k Context Window Actually Went
- … 36 more

### zero in-body internal links (template nav still applies) (491)

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
- … 451 more

### live file not in curriculum (2289)

- /learn/agent-frameworks/agno-teams-and-agentos — Agno: fast agents, teams, and the AgentOS runtime
- /learn/agent-frameworks/claude-agent-sdk — Claude Agent SDK: the Claude Code harness as a library
- /learn/agent-frameworks/crewai-crews-and-flows — CrewAI: role-based crews with deterministic flows
- /learn/agent-frameworks/dspy-programmatic-prompting — DSPy: programming, not prompting
- /learn/agent-frameworks/framework-cheatsheet — Agent Frameworks Cheatsheet
- /learn/agent-frameworks/framework-comparison-and-escape-hatches — Comparing frameworks — and the escape hatches that matter
- /learn/agent-frameworks/framework-leak-worked-example — Worked Example: The Task the Framework Couldn't Express
- /learn/agent-frameworks/framework-mistakes — Agent Frameworks: Common Mistakes
- /learn/agent-frameworks/framework-selection-project — Project: Framework Selection Bake-Off
- /learn/agent-frameworks/google-adk — Google ADK: workflow agents and multi-agent teams
- /learn/agent-frameworks/haystack-pipelines — Haystack: explicit pipelines for retrieval and agents
- /learn/agent-frameworks/langchain-agents-and-integrations — LangChain: the integration layer, then agents
- /learn/agent-frameworks/langgraph-durable-agents — LangGraph: durable agents as state machines
- /learn/agent-frameworks/llamaindex-data-framework — LlamaIndex: the data framework that grew agents
- /learn/agent-frameworks/mastra-typescript-agents — Mastra: the TypeScript agent framework
- /learn/agent-frameworks/microsoft-agent-frameworks — Microsoft's agent frameworks: Semantic Kernel, AutoGen, and the convergence
- /learn/agent-frameworks/no-code-ai-workflows — n8n, Zapier, Make, Pipedream: bounded no-code AI workflows
- /learn/agent-frameworks/openai-agents-sdk — OpenAI Agents SDK: agents, handoffs, and guardrails
- /learn/agent-frameworks/pydanticai-typed-agents — PydanticAI: agents that type-check
- /learn/agent-frameworks/raw-sdk-agent-baseline — The raw-SDK baseline every framework wraps
- /learn/agent-frameworks/structured-output-libraries — Instructor, Outlines, Guidance: the constrained-output libraries
- /learn/agent-frameworks/vercel-ai-sdk — Vercel AI SDK: streaming, tools, and generative UI
- /learn/agent-skills/agent-skills-spec-and-progressive-disclosure — The Agent Skills spec and progressive disclosure
- /learn/agent-skills/evaluating-and-porting-skills — Evaluating skills with fixtures, and porting them across agents
- /learn/agent-skills/skill-md-anatomy — SKILL.md anatomy: frontmatter, body, and bundled resources
- /learn/agent-skills/skill-security-and-provenance — Skill provenance, review, and the safe-installation checklist
- /learn/agent-skills/skill-vs-prompt-rule-hook-mcp-subagent — Skill vs prompt vs project rule vs hook vs MCP vs subagent
- /learn/agent-skills/skills-projects-first-skill-and-capstone — Projects: build your first skill, then turn a workflow into a tested one
- /learn/agentic-ai/agent-benchmarks — Benchmarking Agents: SWE-bench, WebArena, and GAIA
- /learn/agentic-ai/agent-loop-mistakes — Common Mistakes: Agent Loop Design
- /learn/agentic-ai/agent-memory-short-vs-long-term — Short-Term vs Long-Term Memory
- /learn/agentic-ai/agent-orchestration-frameworks — Choosing an Orchestration Framework
- /learn/agentic-ai/agent-permissions-and-authorization — Give an agent permissions, not access
- /learn/agentic-ai/agent-run-worked-example — Worked Example: An Agent Run, Step by Step
- /learn/agentic-ai/agent-task-contracts — Write a task contract for an agent
- /learn/agentic-ai/agent-to-agent-protocols — Agent-to-Agent Protocols: How Agents Will Talk to Each Other
- /learn/agentic-ai/agentic-ai-cheatsheet — Agentic AI Cheatsheet
- /learn/agentic-ai/agents-vs-workflows — Choose an agent only when a workflow is not enough
- /learn/agentic-ai/autonomy-vs-control — Setting the Autonomy Dial
- /learn/agentic-ai/blackboard-and-swarm-patterns — Blackboard and Swarm: Decentralized Multi-Agent Coordination
- … 2249 more

### live curriculum node missing file (0)


### coming nodes (planned, unbuilt) (0)


### lesson files with status coming (0)


### release-sensitive, no date at all (27)

- /learn/agent-frameworks/framework-cheatsheet — Agent Frameworks Cheatsheet
- /learn/agent-frameworks/framework-leak-worked-example — Worked Example: The Task the Framework Couldn't Express
- /learn/agent-frameworks/framework-mistakes — Agent Frameworks: Common Mistakes
- /learn/agent-frameworks/framework-selection-project — Project: Framework Selection Bake-Off
- /learn/ai-for-designers/ai-product-design-foundations-quiz — Quiz: AI product design foundations
- /learn/ai-for-designers/choosing-where-ai-belongs-worked-example — Choosing where AI belongs: a worked example
- /learn/ai-for-designers/correction-undo-and-recovery-patterns — Correction, undo, and recovery patterns
- /learn/ai-for-designers/creating-a-realistic-ai-test-set — Creating a realistic AI test set
- /learn/ai-for-designers/prototype-ai-behavior-without-a-model — Prototype AI behavior without a model
- /learn/ai-for-designers/prototype-and-evaluation-quiz — Quiz: prototype and evaluation
- /learn/ai-for-designers/research-synthesis-lab — Lab: build a source-traceable research synthesis board
- /learn/ai-for-designers/trust-and-recovery-quiz — Quiz: trust and recovery
- /learn/ai-literacy/everyday-ai-mistakes — Common Mistakes: Everyday AI Use
- /learn/evals-red-teaming/eval-regression-worked-example — Worked Example: An Eval That Passed and Shipped a Regression
- /learn/fine-tuning/fine-tune-regression-worked-example — Worked Example: A Fine-Tune That Fixed One Thing and Broke Three
- /learn/genai-app-dev/genai-feature-worked-example — Worked Example: A GenAI Feature From Demo to Production
- /learn/llm-foundations/llm-foundations-cheatsheet — LLM Foundations Cheatsheet
- /learn/mcp/mcp-production-server-project — Project: A Production MCP Server — Auth, Versioning, Telemetry
- /learn/multimodal-ai/document-pipeline-worked-example — Worked Example: A Document Pipeline That Costs 10× What It Should
- /learn/multimodal-ai/multimodal-cheatsheet — Multimodal AI Cheatsheet
- /learn/multimodal-ai/multimodal-mistakes — Multimodal AI: Common Mistakes
- /learn/responsible-ai/contestability-worked-example — Worked Example: A Contestability Path That Actually Works
- /learn/responsible-ai/responsible-ai-cheatsheet — Responsible AI Cheatsheet
- /learn/responsible-ai/responsible-ai-mistakes — Common Mistakes: Responsible AI in Practice
- /learn/responsible-ai/responsible-release-project — Project: A Responsible-AI Release — Risk Register, Model Card, Red-Team Sign-Off
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
- /practice/classical-ai — 8 questions, 8 lesson links
- /practice/machine-learning — 8 questions, 8 lesson links
- /practice/deep-learning — 8 questions, 8 lesson links
- /practice/responsible-ai — 8 questions, 8 lesson links
- /practice/production — 8 questions, 8 lesson links
- /practice/agentic-ai — 8 questions, 8 lesson links
- /practice/harness-design — 8 questions, 8 lesson links
- /practice/fine-tuning — 8 questions, 8 lesson links
- /practice/ai-literacy — 8 questions, 8 lesson links
- /practice/maths-foundations — 8 questions, 8 lesson links
- /practice/python-data-apis — 8 questions, 8 lesson links
- /practice/llm-foundations — 8 questions, 8 lesson links
- /practice/context-engineering — 8 questions, 8 lesson links
- /practice/structured-outputs — 8 questions, 8 lesson links
- /practice/hallucinations — 8 questions, 8 lesson links
- /practice/genai-app-dev — 8 questions, 8 lesson links
- /practice/tools-function-calling — 8 questions, 8 lesson links
- /practice/cli-agents — 8 questions, 8 lesson links
- /practice/ai-automation-ops — 8 questions, 8 lesson links
- /practice/multilingual-ai — 8 questions, 8 lesson links
- /practice/multimodal-ai — 8 questions, 8 lesson links
- /practice/voice-ai — 8 questions, 8 lesson links
- /practice/web-agents — 8 questions, 8 lesson links
- /practice/agent-skills — 8 questions, 8 lesson links
- /practice/llm-security — 8 questions, 8 lesson links
- /practice/local-inference — 8 questions, 8 lesson links
- /practice/agent-frameworks — 8 questions, 8 lesson links
- /practice/ai-for-designers — 8 questions, 8 lesson links
- /practice/maths-derivations — 8 questions, 8 lesson links
- /practice/ml-diagnosis — 8 questions, 8 lesson links
- /practice/rag-evaluation — 8 questions, 8 lesson links
- /practice/agent-traces — 8 questions, 8 lesson links
- /practice/mcp-security — 8 questions, 8 lesson links
- /practice/structured-output-failures — 8 questions, 8 lesson links
- /practice/context-debugging — 8 questions, 8 lesson links
- /practice/production-incidents — 8 questions, 8 lesson links

## Non-lesson collections

### interview (27)

- /interview/agents — AI agents interview questions (1035 words, updated 2026-09-15)
- /interview/ai-foundations — AI foundations interview questions (922 words, updated 2026-09-15)
- /interview/ai-system-design — AI system design interview questions (985 words, updated 2026-09-15)
- /interview/behavioral-and-project-defense — Behavioral and project-defense interview questions (921 words, updated 2026-09-15)
- /interview/classical-ml — Classical ML interview questions (811 words, updated 2026-09-15)
- /interview/context-engineering — Context engineering interview questions (914 words, updated 2026-09-15)
- /interview/deep-learning — Deep learning interview questions (876 words, updated 2026-09-15)
- /interview/evals — LLM evaluation interview questions (991 words, updated 2026-09-15)
- /interview/interview-modes — Interview modes: interviewer and candidate (504 words, updated 2026-09-15)
- /interview/llm-basics — LLM basics interview questions (995 words, updated 2026-09-15)
- /interview/maths-foundations — Maths foundations interview questions (832 words, updated 2026-09-15)
- /interview/mcp — MCP interview questions (972 words, updated 2026-09-15)
- /interview/production-and-observability — Production and observability interview questions (893 words, updated 2026-09-15)
- /interview/prompt-engineering — Prompt engineering interview questions (986 words, updated 2026-09-15)
- /interview/rag — RAG interview questions (930 words, updated 2026-09-15)
- /interview/role-ai-engineer — AI engineer interview questions (348 words, updated 2026-09-15)
- /interview/role-ai-platform-engineer — AI platform engineer interview questions (387 words, updated 2026-09-15)
- /interview/role-applied-ai-engineer — Applied AI engineer interview questions (336 words, updated 2026-09-15)
- /interview/role-data-scientist — Data scientist interview questions (AI track) (382 words, updated 2026-09-15)
- /interview/role-designer — Designer interview questions (AI track) (428 words, updated 2026-09-15)
- /interview/role-forward-deployed-engineer — Forward-deployed engineer interview questions (390 words, updated 2026-09-15)
- /interview/role-ml-engineer — ML engineer interview questions (357 words, updated 2026-09-15)
- /interview/role-product-manager — Product manager interview questions (AI track) (410 words, updated 2026-09-15)
- /interview/role-security-engineer — Security engineer interview questions (AI track) (428 words, updated 2026-09-15)
- /interview/safety-and-security — AI safety and security interview questions (951 words, updated 2026-09-15)
- /interview/structured-outputs — Structured outputs interview questions (880 words, updated 2026-09-15)
- /interview/take-home-exercises — Take-home exercises and integrity (479 words, updated 2026-09-15)

### scenario (12)

- /scenarios/agent-approval — An agent that can update customer records (886 words, updated 2026-09-15)
- /scenarios/browser-agent-permissions — A research agent that wandered into a checkout page (874 words, updated 2026-09-15)
- /scenarios/coding-agent-rollout — Rolling out a coding agent without losing the repo (893 words, updated 2026-09-15)
- /scenarios/document-qa — Document Q&A with permissions intact (748 words, updated 2026-09-15)
- /scenarios/eval-release — A release that improves quality but raises cost (685 words, updated 2026-09-15)
- /scenarios/incident-response — The support bot that started promising refunds (869 words, updated 2026-09-15)
- /scenarios/mcp-team-server — An MCP server for a small engineering team (809 words, updated 2026-09-15)
- /scenarios/rag-migration — Migrating the RAG system nobody documented (885 words, updated 2026-09-15)
- /scenarios/regulated-decision-support — An eligibility screener in a regulated workflow (896 words, updated 2026-09-15)
- /scenarios/streaming-research — A research feature that streams useful work (772 words, updated 2026-09-15)
- /scenarios/support-assistant — A support assistant that must show its work (841 words, updated 2026-09-15)
- /scenarios/voice-agent-latency — A phone agent that keeps talking over people (890 words, updated 2026-09-15)

### guide (14)

- /guides/add-observability-to-an-ai-feature — Add observability to an AI feature (412 words, updated 2026-09-15)
- /guides/build-a-rag-pipeline-over-your-own-documents — Build a RAG pipeline over your own documents (838 words, updated 2026-09-15)
- /guides/build-a-tool-calling-agent-from-scratch — Build a tool-calling agent from scratch, no framework (534 words, updated 2026-09-15)
- /guides/build-an-mcp-server-in-python — Build an MCP server in Python and connect it to Claude (725 words, updated 2026-09-15)
- /guides/build-your-first-browser-agent — Build your first browser agent (413 words, updated 2026-09-15)
- /guides/build-your-first-voice-agent — Build your first voice agent (382 words, updated 2026-09-15)
- /guides/cut-your-llm-bill — Cut your LLM bill without hurting quality (875 words, updated 2026-09-15)
- /guides/defend-against-prompt-injection — Defend a tool-using app against prompt injection (917 words, updated 2026-09-15)
- /guides/get-reliable-json-out-of-an-llm — Get reliable JSON out of an LLM (638 words, updated 2026-09-15)
- /guides/migrate-between-raw-sdks-and-frameworks — Migrate between raw SDKs and agent frameworks (444 words, updated 2026-09-15)
- /guides/rag-fine-tuning-or-a-longer-prompt — RAG, fine-tuning, or a longer prompt? (918 words, updated 2026-09-15)
- /guides/run-your-first-local-model-app — Run your first local model app with Ollama (356 words, updated 2026-09-15)
- /guides/ship-your-first-ai-feature-to-production — Ship your first AI feature to production (851 words, updated 2026-09-15)
- /guides/write-your-first-eval-for-an-ai-feature — Write your first eval for an AI feature (861 words, updated 2026-09-15)

### blog (20)

- /blog/agent-skills-vs-prompts-rules-mcp-hooks-subagents — Agent Skills vs prompts, rules, MCP, hooks, and subagents (504 words, updated 2026-09-15)
- /blog/agents-need-a-harness — Agents need a harness, not just a prompt (191 words, updated 2026-08-30)
- /blog/building-multilingual-and-indic-ai-systems — Building multilingual and Indic AI systems (418 words, updated 2026-09-15)
- /blog/designing-reliable-browser-automation — Designing reliable browser automation (397 words, updated 2026-09-15)
- /blog/how-to-learn-ai-in-2026 — How to actually learn AI in 2026 (251 words, updated 2026-08-30)
- /blog/how-to-read-a-tool-call-trace — How to read a tool-call trace (405 words, updated 2026-09-15)
- /blog/lmversity-launch-note — Why LMVersity is free and structured (220 words, updated 2026-09-08)
- /blog/local-models-privacy-latency-hardware-quality — Local models: privacy, latency, hardware, and the quality question (519 words, updated 2026-09-15)
- /blog/observability-for-multi-step-ai-systems — Observability for multi-step AI systems (416 words, updated 2026-09-15)
- /blog/rag-is-not-a-truth-machine — RAG is not a truth machine (219 words, updated 2026-08-30)
- /blog/read-the-loop-before-you-pick-a-framework — Read the loop before you pick a framework (525 words, updated 2026-08-30)
- /blog/stopping-conditions-for-agents — Every agent loop needs five stopping conditions (537 words, updated 2026-08-30)
- /blog/teardown-playwright-mcp-tool-contracts — Teardown: Playwright MCP's tool contracts (679 words, updated 2026-09-15)
- /blog/the-context-window-got-bigger-and-it-did-not-fix-this — The context window got bigger. It didn't fix what you think. (578 words, updated 2026-08-30)
- /blog/the-mcp-mistakes-that-show-up-at-3am — The MCP server mistakes that show up at 3am (631 words, updated 2026-08-30)
- /blog/what-ai-coding-agents-can-and-cannot-safely-own — What AI coding agents can and cannot safely own (422 words, updated 2026-09-15)
- /blog/what-an-eval-catches-that-a-demo-misses — What an eval catches that a demo misses (375 words, updated 2026-09-15)
- /blog/why-there-is-no-certificate — Why there's no certificate here (520 words, updated 2026-09-15)
- /blog/workflow-agent-or-multi-agent — Workflow, agent, or multi-agent: the decision is about who holds the plan (444 words, updated 2026-09-15)
- /blog/your-rag-problem-is-a-retrieval-problem — Your RAG problem is a retrieval problem (700 words, updated 2026-08-30)

### answer (35)

- /answers/ai-engineer-interview-questions — AI engineer interview questions: what is asked and how to prepare (1210 words, updated 2026-09-08)
- /answers/ai-engineer-roadmap — AI engineer roadmap: the skills in order, and what to skip (2002 words, updated 2026-09-08)
- /answers/ai-engineer-vs-ml-engineer — AI engineer vs ML engineer: the difference in what you do all day (977 words, updated 2026-09-08)
- /answers/can-i-run-an-llm-locally — Can I run an LLM locally, and should I? (469 words, updated 2026-09-15)
- /answers/certification-vs-portfolio-vs-experience — AI certification vs portfolio vs experience — which matters? (279 words, updated 2026-09-15)
- /answers/deploy-an-llm-app-to-production — How do I deploy an LLM app to production? (361 words, updated 2026-09-15)
- /answers/difference-between-ai-and-machine-learning — Difference between AI and machine learning (and deep learning) (1009 words, updated 2026-09-08)
- /answers/free-forward-deployed-engineer-course — Free Forward Deployed Engineer course: from zero to FDE in nine months (2002 words, updated 2026-09-08)
- /answers/how-do-llms-work — How do LLMs work? Tokens, attention, and next-token prediction in plain words (919 words, updated 2026-09-08)
- /answers/how-much-does-an-llm-app-cost — How much does an LLM app cost to run? (458 words, updated 2026-09-15)
- /answers/how-to-become-an-ai-engineer — How to become an AI engineer in 2026 (from zero, for free) (1977 words, updated 2026-09-08)
- /answers/how-to-build-a-rag-app — How to build a RAG app, step by step (and where it breaks) (1234 words, updated 2026-09-08)
- /answers/how-to-choose-an-ai-chat-product — How do I choose between ChatGPT, Claude, Gemini, and the other AI assistants? (384 words, updated 2026-09-15)
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

