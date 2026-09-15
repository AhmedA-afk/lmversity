# Acquisition & practice family audit — mechanical pass

Generated 2026-09-15T06:30:21.575Z by `scripts/audit-families.mjs`.
Structural checks only; originality/correctness are scored in the review pass.

## Findings

- **Straight answers (29)**: 0 flagged — answer-first openings, FAQ and related metadata hold across the family.
- **Guides (9)**: all have `related` lesson lists and ordered steps; 9/9 have **zero in-body internal links** (continuation lives only in the frontmatter block); `rag-fine-tuning-or-a-longer-prompt` have no code.
- **Blog (10)**: all dated; `why-there-is-no-certificate` never link into the curriculum.
- **Interview (7)**: 8 questions each; 5/7 have **no follow-up prompts or rubric** — the checklist asks for both.
- **Scenarios (6)**: ~451 words avg; missing sections: none.
- **Centralized practice banks**: 48 questions across 6 tracks, 48 total lesson links.
- **Lesson quiz pages (83 files, 603 questions)**: all questions carry a marked correct answer; 0 duplicate stems corpus-wide; correct-answer positions skew B 66%, C 19%, A 11%, D 3%; 11 files have answer blocks that don't discuss every option.
- **Worked examples (29)**: 0 flagged — every file has runnable code and an inspectable outcome.
- **Cheatsheets (48)**: 1 flagged for scanability/length.
- **Common-mistake pages (24)**: 1 flagged; the symptom→cause→fix pattern holds elsewhere.

## Suggested backlog order

1. **Shuffle centralized-bank answer positions** — cheapest fix, highest integrity gain; then add a lesson link per question.
2. **Scenario depth pass** — add the missing constraints/options/postmortem sections; at ~200 words they under-deliver the "system design walkthrough" promise.
3. **Interview follow-ups + rubric** — add per-topic follow-up prompts and a weak-vs-strong answer rubric.
4. **Guide in-body links** — weave curriculum links into guide prose where a step references a concept a lesson teaches.
5. **Quiz answer-position rebalance** — 66% of correct answers sit at B across 603 lesson-quiz questions; redistribute when files are next touched.
6. **Per-option rationale gaps** — 11 quiz files where some answers state a letter without walking the options.

## Straight answers (29)

| item | 1st para | faq | related | int links | ext | words | flags |
|---|------------------|---|
| ai-engineer-interview-questions | 48w ✓ | 1 | 6 | 8 | 0 | 1210 | — |
| ai-engineer-roadmap | 59w ✓ | 1 | 6 | 8 | 0 | 2002 | — |
| ai-engineer-vs-ml-engineer | 70w ✓ | 1 | 6 | 6 | 0 | 977 | — |
| difference-between-ai-and-machine-learning | 65w ✓ | 1 | 6 | 7 | 0 | 1009 | — |
| free-forward-deployed-engineer-course | 69w ✓ | 1 | 6 | 8 | 0 | 2002 | — |
| how-do-llms-work | 62w ✓ | 1 | 6 | 7 | 0 | 919 | — |
| how-to-become-an-ai-engineer | 73w ✓ | 1 | 6 | 8 | 0 | 1977 | — |
| how-to-build-a-rag-app | 64w ✓ | 1 | 6 | 8 | 0 | 1234 | — |
| how-to-evaluate-an-llm-app | 52w ✓ | 1 | 6 | 8 | 0 | 1228 | — |
| how-to-fine-tune-an-llm | 63w ✓ | 1 | 6 | 8 | 0 | 1260 | — |
| how-to-learn-machine-learning-free | 63w ✓ | 1 | 6 | 8 | 0 | 1183 | — |
| how-to-use-claude-code | 59w ✓ | 1 | 6 | 7 | 1 | 1310 | — |
| how-to-use-openai-codex | 58w ✓ | 1 | 6 | 6 | 2 | 1207 | — |
| is-ai-engineering-hard | 58w ✓ | 1 | 6 | 6 | 0 | 1249 | — |
| learn-ai-engineering-free | 54w ✓ | 1 | 6 | 8 | 0 | 1806 | — |
| llm-vs-generative-ai | 70w ✓ | 1 | 6 | 7 | 0 | 910 | — |
| openai-vs-chatgpt | 64w ✓ | 1 | 6 | 7 | 0 | 1005 | — |
| prompt-engineering-vs-context-engineering | 62w ✓ | 1 | 6 | 6 | 0 | 949 | — |
| rag-vs-fine-tuning | 65w ✓ | 1 | 7 | 7 | 0 | 902 | — |
| what-is-a-forward-deployed-engineer | 62w ✓ | 1 | 6 | 6 | 0 | 1201 | — |
| what-is-a-large-language-model | 70w ✓ | 1 | 6 | 10 | 0 | 1018 | — |
| what-is-a-vector-database | 70w ✓ | 1 | 6 | 8 | 0 | 858 | — |
| what-is-agentic-ai | 66w ✓ | 1 | 6 | 6 | 0 | 954 | — |
| what-is-an-agent-harness | 66w ✓ | 1 | 7 | 7 | 0 | 879 | — |
| what-is-an-ai-agent | 71w ✓ | 1 | 6 | 6 | 0 | 1053 | — |
| what-is-lmv | 55w ✓ | 1 | 6 | 6 | 0 | 731 | — |
| what-is-mcp | 65w ✓ | 1 | 6 | 9 | 0 | 925 | — |
| what-is-rag | 55w ✓ | 1 | 6 | 13 | 0 | 926 | — |
| what-skills-does-an-ai-engineer-need | 53w ✓ | 1 | 6 | 8 | 0 | 1251 | — |

## Guides (9)

| item | steps | related | code | failure § | verify § | int links | words | flags |
|---|---------------------|---|
| build-a-rag-pipeline-over-your-own-documents | 6 | 4 | 5 | ✓ | ✓ | 0 | 761 | no in-body internal links (only the related block) |
| build-a-tool-calling-agent-from-scratch | 5 | 4 | 3 | ✓ | — | 0 | 538 | no in-body internal links (only the related block) |
| build-an-mcp-server-in-python | 6 | 4 | 8 | ✓ | — | 0 | 703 | no in-body internal links (only the related block) |
| cut-your-llm-bill | 6 | 3 | 4 | ✓ | — | 0 | 803 | no in-body internal links (only the related block) |
| defend-against-prompt-injection | 6 | 4 | 4 | — | ✓ | 0 | 778 | no in-body internal links (only the related block) |
| get-reliable-json-out-of-an-llm | 5 | 3 | 7 | — | — | 0 | 621 | no in-body internal links (only the related block) |
| rag-fine-tuning-or-a-longer-prompt | 5 | 4 | 0 | — | — | 0 | 859 | no code — a build guide without runnable steps; no in-body internal links (only the related block) |
| ship-your-first-ai-feature-to-production | 6 | 3 | 2 | ✓ | ✓ | 0 | 834 | no in-body internal links (only the related block) |
| write-your-first-eval-for-an-ai-feature | 5 | 3 | 4 | — | — | 0 | 686 | no in-body internal links (only the related block) |

## Blog (10)

| item | published | tags | /learn links | int links | words | flags |
|---|---------------|---|
| agents-need-a-harness | ✓ | 3 | 1 | 2 | 191 | — |
| how-to-learn-ai-in-2026 | ✓ | 3 | 3 | 5 | 251 | — |
| lmversity-launch-note | ✓ | 3 | 1 | 1 | 220 | — |
| rag-is-not-a-truth-machine | ✓ | 3 | 1 | 1 | 219 | — |
| read-the-loop-before-you-pick-a-framework | ✓ | 3 | 2 | 3 | 525 | — |
| stopping-conditions-for-agents | ✓ | 3 | 2 | 3 | 537 | — |
| the-context-window-got-bigger-and-it-did-not-fix-this | ✓ | 3 | 3 | 3 | 578 | — |
| the-mcp-mistakes-that-show-up-at-3am | ✓ | 3 | 2 | 3 | 631 | — |
| why-there-is-no-certificate | ✓ | 3 | 0 | 1 | 522 | no links into the curriculum |
| your-rag-problem-is-a-retrieval-problem | ✓ | 3 | 2 | 3 | 700 | — |

## Interview topics (7)

| item | questions | with links | thin answers | follow-ups/rubric | words | flags |
|---|---------------|---|
| agents | 8 | 4 | 0 | ✗ | 531 | no follow-up prompts or rubric (checklist wants both) |
| ai-system-design | 8 | 3 | 0 | ✗ | 494 | no follow-up prompts or rubric (checklist wants both) |
| evals | 8 | 3 | 0 | ✓ | 527 | — |
| llm-basics | 8 | 5 | 0 | ✗ | 575 | no follow-up prompts or rubric (checklist wants both) |
| mcp | 8 | 3 | 0 | ✗ | 496 | no follow-up prompts or rubric (checklist wants both) |
| prompt-engineering | 8 | 6 | 0 | ✗ | 553 | no follow-up prompts or rubric (checklist wants both) |
| rag | 8 | 4 | 0 | ✓ | 510 | no follow-up prompts or rubric (checklist wants both) |

## Scenarios (6)

| item | sections | int links | words | flags |
|---|---------|---|
| agent-approval | 7 | 2 | 459 | — |
| document-qa | 7 | 2 | 428 | — |
| eval-release | 7 | 2 | 436 | — |
| mcp-team-server | 7 | 1 | 459 | — |
| streaming-research | 7 | 2 | 434 | — |
| support-assistant | 7 | 2 | 490 | — |

## Centralized practice banks

| track | questions | avg options | answers at idx 0–1 | lesson links | flags |
|---|---|---|---|---|---|
| ai-foundations | 8 | 4.0 | 50% | 8 | — |
| prompt-engineering | 8 | 4.0 | 50% | 8 | — |
| rag | 8 | 4.0 | 50% | 8 | — |
| agents | 8 | 4.0 | 50% | 8 | — |
| mcp | 8 | 4.0 | 50% | 8 | — |
| evals | 8 | 4.0 | 50% | 8 | — |

## Lesson quiz pages (83 files, 603 questions)

| page | questions | options/q | answers marked | per-option rationale | flags |
|---|---|---|---|---|---|
| ai-foundations/capabilities-and-eval-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| ai-foundations/embeddings-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| ai-foundations/foundation-models-and-llms-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| ai-foundations/generalization-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| ai-foundations/learning-paradigms-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| ai-foundations/neural-networks-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| ai-foundations/orientation-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| ai-foundations/practical-models-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| ai-foundations/safety-and-interpretability-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| ai-foundations/training-and-optimization-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| ai-literacy/cost-and-limits-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| ai-literacy/deciding-when-and-which-ai-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| ai-literacy/how-ai-produces-answers-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| ai-literacy/judging-and-verifying-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| ai-literacy/privacy-bias-and-ethics-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| ai-literacy/prompting-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| ai-literacy/what-ai-actually-is-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| context-engineering/budgeting-and-observability-quiz | 12 | 4/4/4/4/4/4/4/4/4/4/4/4 | 12 | 12 | — |
| context-engineering/compaction-memory-quiz | 12 | 4/4/4/4/4/4/4/4/4/4/4/4 | 12 | 12 | — |
| context-engineering/failure-modes-quiz | 12 | 4/4/4/4/4/4/4/4/4/4/4/4 | 12 | 12 | — |
| context-engineering/foundations-quiz | 12 | 4/4/4/4/4/4/4/4/4/4/4/4 | 12 | 10 | 2 answer block(s) don't discuss every option |
| context-engineering/multi-agent-and-capstone-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| context-engineering/retrieval-and-jit-quiz | 12 | 4/4/4/4/4/4/4/4/4/4/4/4 | 12 | 12 | — |
| context-engineering/selection-ordering-quiz | 12 | 4/4/4/4/4/4/4/4/4/4/4/4 | 12 | 12 | — |
| context-engineering/tools-caching-quiz | 12 | 4/4/4/4/4/4/4/4/4/4/4/4 | 12 | 12 | — |
| hallucinations/detection-quiz | 10 | 4/4/4/4/4/4/4/4/4/4 | 10 | 10 | — |
| hallucinations/evaluation-quiz | 10 | 4/4/4/4/4/4/4/4/4/4 | 10 | 10 | — |
| hallucinations/foundations-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| hallucinations/mitigation-quiz | 12 | 4/4/4/4/4/4/4/4/4/4/4/4 | 12 | 12 | — |
| hallucinations/production-quiz | 10 | 4/4/4/4/4/4/4/4/4/4 | 10 | 10 | — |
| hallucinations/taxonomy-quiz | 12 | 4/4/4/4/4/4/4/4/4/4/4/4 | 12 | 12 | — |
| hallucinations/uncertainty-quiz | 10 | 4/4/4/4/4/4/4/4/4/4 | 10 | 5 | 5 answer block(s) don't discuss every option |
| llm-foundations/behavior-and-capstone-quiz | 8 | 4/4/4/4/4/4/4/4 | 8 | 8 | — |
| llm-foundations/decoding-inference-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| llm-foundations/efficient-architectures-quiz | 8 | 4/4/4/4/4/4/4/4 | 8 | 8 | — |
| llm-foundations/tokenization-embeddings-quiz | 9 | 4/4/4/4/4/4/4/4/4 | 9 | 4 | 5 answer block(s) don't discuss every option |
| llm-foundations/training-pipeline-quiz | 8 | 4/4/4/4/4/4/4/4 | 8 | 8 | — |
| llm-foundations/transformer-block-quiz | 8 | 4/4/4/4/4/4/4/4 | 8 | 8 | — |
| llm-foundations/whole-game-quiz | 9 | 4/4/4/4/4/4/4/4/4 | 9 | 8 | 1 answer block(s) don't discuss every option |
| mcp/mcp-auth-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| mcp/mcp-debugging-quiz | 5 | 4/4/4/4/4 | 5 | 5 | — |
| mcp/mcp-deployment-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| mcp/mcp-primitives-quiz | 5 | 4/4/4/4/4 | 5 | 5 | — |
| mcp/mcp-server-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| mcp/mcp-transports-quiz | 5 | 4/4/4/4/4 | 5 | 5 | — |
| prompt-engineering/decomposition-output-quiz | 10 | 4/4/4/4/4/4/4/4/4/4 | 10 | 1 | 9 answer block(s) don't discuss every option |
| prompt-engineering/eval-shipping-quiz | 10 | 4/4/4/4/4/4/4/4/4/4 | 10 | 10 | — |
| prompt-engineering/examples-icl-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| prompt-engineering/foundations-quiz | 10 | 4/4/4/4/4/4/4/4/4/4 | 10 | 7 | 3 answer block(s) don't discuss every option |
| prompt-engineering/reasoning-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| prompt-engineering/robustness-capstone-quiz | 10 | 4/4/4/4/4/4/4/4/4/4 | 10 | 10 | — |
| prompt-engineering/roles-steering-quiz | 10 | 4/4/4/4/4/4/4/4/4/4 | 10 | 4 | 6 answer block(s) don't discuss every option |
| prompt-engineering/structure-formatting-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| python-data-apis/ai-service-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| python-data-apis/api-calling-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| python-data-apis/async-and-batching-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| python-data-apis/data-cleaning-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| python-data-apis/environments-tooling-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| python-data-apis/files-and-formats-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| python-data-apis/numpy-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| python-data-apis/pandas-quiz | 6 | 4/4/4/4/4 | 6 | 6 | — |
| python-data-apis/python-data-structures-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| python-data-apis/secrets-config-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| rag/chunking-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| rag/hybrid-search-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| rag/rag-eval-quiz | 6 | 4/4/4/4/4/4 | 6 | 5 | 1 answer block(s) don't discuss every option |
| rag/reranking-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| rag/retrieval-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| rag/vector-db-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| structured-outputs/capstone-and-eval-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| structured-outputs/extraction-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| structured-outputs/foundations-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| structured-outputs/mechanisms-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| structured-outputs/reliability-design-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| structured-outputs/runtime-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| structured-outputs/schema-design-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| tools-function-calling/advanced-tools-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| tools-function-calling/execution-safety-quiz | 6 | 4/4/4/4/4/4 | 6 | 0 | 6 answer block(s) don't discuss every option |
| tools-function-calling/foundations-quiz | 10 | 4/4/4/4/4/4/4/4/4/4 | 10 | 10 | — |
| tools-function-calling/orchestration-quiz | 6 | 4/4/4/4/4/4 | 6 | 2 | 4 answer block(s) don't discuss every option |
| tools-function-calling/reliability-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| tools-function-calling/schema-design-quiz | 6 | 4/4/4/4/4/4 | 6 | 1 | 5 answer block(s) don't discuss every option |
| tools-function-calling/tool-selection-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |

### Correct-answer position across 603 marked questions

| position | count | share |
|---|---|---|
| A | 69 | 11% |
| B | 399 | 66% |
| C | 117 | 19% |
| D | 18 | 3% |

### Duplicate question stems across quiz pages: 0


## Worked examples (29)

| item | code blocks | inspectable outcome | int links | words | flags |
|---|------------|---|
| ai-foundations/agents-vs-chatbots-worked-example | 14 | ✓ | 8 | 1733 | — |
| ai-foundations/backprop-worked-example | 13 | ✓ | 9 | 1441 | — |
| ai-foundations/bias-variance-worked-example | 7 | ✓ | 8 | 1547 | — |
| ai-foundations/building-an-eval-set-worked-example | 9 | ✓ | 10 | 1432 | — |
| ai-foundations/data-splits-and-leakage-worked-example | 6 | ✓ | 7 | 1506 | — |
| ai-foundations/scaling-laws-worked-example | 6 | ✓ | 6 | 1603 | — |
| ai-foundations/supervised-learning-worked-example | 4 | ✓ | 6 | 1954 | — |
| ai-foundations/tokens-and-cost-worked-example | 13 | ✓ | 7 | 1392 | — |
| ai-foundations/unsupervised-clustering-worked-example | 3 | ✓ | 8 | 1720 | — |
| ai-literacy/catch-a-hallucination-worked-example | 3 | ✓ | 7 | 1578 | — |
| ai-literacy/spot-bias-in-ai-output-worked-example | 6 | ✓ | 6 | 1614 | — |
| mcp/mcp-auth-worked-example | 6 | ✓ | 2 | 564 | — |
| mcp/mcp-debugging-worked-example | 9 | ✓ | 2 | 675 | — |
| mcp/mcp-deployment-worked-example | 7 | ✓ | 2 | 567 | — |
| mcp/mcp-primitives-worked-example | 7 | ✓ | 2 | 546 | — |
| mcp/mcp-server-worked-example | 10 | ✓ | 2 | 639 | — |
| mcp/mcp-transports-worked-example | 8 | ✓ | 2 | 508 | — |
| prompt-engineering/structured-prompt-worked-example | 3 | ✓ | 7 | 694 | — |
| rag/chunking-worked-example | 10 | ✓ | 6 | 1838 | — |
| rag/hybrid-search-worked-example | 9 | ✓ | 10 | 1694 | — |
| rag/rag-eval-worked-example | 5 | ✓ | 7 | 1794 | — |
| rag/reranking-worked-example | 2 | ✓ | 6 | 1624 | — |
| rag/retrieval-worked-example | 4 | ✓ | 6 | 1400 | — |
| rag/vector-db-worked-example | 5 | ✓ | 5 | 1246 | — |
| structured-outputs/from-prose-to-parsed-worked-example | 6 | ✓ | 8 | 603 | — |
| structured-outputs/gbnf-grammar-worked-example | 3 | ✓ | 6 | 695 | — |
| structured-outputs/reason-then-emit-worked-example | 7 | ✓ | 4 | 677 | — |
| structured-outputs/status-enum-worked-example | 4 | ✓ | 4 | 666 | — |
| tools-function-calling/self-correction-worked-example | 8 | ✓ | 5 | 667 | — |

## Cheatsheets (48)

| item | words | table rows | bullets | scannable density/100w | int links | flags |
|---|---------------|---|
| ai-literacy/ai-literacy-master-cheatsheet | 835 | 6 | 14 | 2.4 | 35 | — |
| ai-literacy/everyday-prompting-cheatsheet | 708 | 6 | 6 | 1.7 | 9 | low list/table density — check scanability |
| context-engineering/context-engineering-master-cheatsheet | 719 | 6 | 14 | 2.8 | 5 | — |
| context-engineering/failure-mode-cheatsheet | 600 | 18 | 5 | 3.8 | 9 | — |
| context-engineering/memory-and-compaction-cheatsheet | 768 | 34 | 10 | 5.7 | 11 | — |
| context-engineering/retrieval-vs-stuffing-cheatsheet | 597 | 8 | 5 | 2.2 | 7 | — |
| context-engineering/selection-and-ordering-cheatsheet | 686 | 20 | 10 | 4.4 | 10 | — |
| context-engineering/token-budget-cheatsheet | 641 | 18 | 13 | 4.8 | 14 | — |
| context-engineering/tools-and-caching-cheatsheet | 636 | 14 | 6 | 3.1 | 10 | — |
| genai-app-dev/perf-cost-cheatsheet | 628 | 26 | 0 | 4.1 | 13 | — |
| genai-app-dev/provider-layer-cheatsheet | 681 | 23 | 7 | 4.4 | 8 | — |
| genai-app-dev/reliability-safety-cheatsheet | 602 | 6 | 16 | 3.7 | 13 | — |
| genai-app-dev/shipping-operating-cheatsheet | 529 | 14 | 11 | 4.7 | 12 | — |
| genai-app-dev/state-and-tools-cheatsheet | 679 | 16 | 13 | 4.3 | 13 | — |
| genai-app-dev/streaming-ux-cheatsheet | 631 | 22 | 15 | 5.9 | 10 | — |
| hallucinations/detection-cheatsheet | 559 | 22 | 0 | 3.9 | 14 | — |
| hallucinations/evaluation-cheatsheet | 686 | 22 | 9 | 4.5 | 6 | — |
| hallucinations/foundations-cheatsheet | 485 | 15 | 7 | 4.5 | 14 | — |
| hallucinations/mitigation-cheatsheet | 495 | 13 | 5 | 3.6 | 17 | — |
| hallucinations/production-reliability-cheatsheet | 556 | 15 | 8 | 4.1 | 22 | — |
| hallucinations/uncertainty-cheatsheet | 456 | 11 | 5 | 3.5 | 11 | — |
| mcp/mcp-auth-cheatsheet | 310 | 19 | 9 | 9 | 1 | — |
| mcp/mcp-debugging-cheatsheet | 312 | 24 | 5 | 9.3 | 0 | — |
| mcp/mcp-deployment-cheatsheet | 430 | 27 | 14 | 9.5 | 0 | — |
| mcp/mcp-primitives-cheatsheet | 345 | 28 | 5 | 9.6 | 0 | — |
| mcp/mcp-server-cheatsheet | 372 | 19 | 11 | 8.1 | 2 | — |
| mcp/mcp-transports-cheatsheet | 356 | 32 | 10 | 11.8 | 1 | — |
| prompt-engineering/decomposition-output-cheatsheet | 1004 | 16 | 11 | 2.7 | 13 | — |
| prompt-engineering/eval-versioning-cheatsheet | 695 | 14 | 22 | 5.2 | 9 | — |
| prompt-engineering/few-shot-design-cheatsheet | 700 | 15 | 7 | 3.1 | 14 | — |
| prompt-engineering/prompt-first-principles-cheatsheet | 560 | 8 | 6 | 2.5 | 6 | — |
| prompt-engineering/robustness-safety-cheatsheet | 623 | 20 | 13 | 5.3 | 8 | — |
| rag/chunking-cheatsheet | 999 | 7 | 19 | 2.6 | 8 | — |
| rag/hybrid-search-cheatsheet | 991 | 21 | 5 | 2.6 | 11 | — |
| rag/rag-eval-cheatsheet | 1371 | 19 | 14 | 2.4 | 6 | — |
| rag/reranking-cheatsheet | 922 | 19 | 3 | 2.4 | 7 | — |
| rag/retrieval-cheatsheet | 1043 | 24 | 0 | 2.3 | 5 | — |
| rag/vector-db-cheatsheet | 1188 | 14 | 15 | 2.4 | 6 | — |
| structured-outputs/cross-provider-and-eval-cheatsheet | 666 | 18 | 13 | 4.7 | 6 | — |
| structured-outputs/decoding-mechanisms-cheatsheet | 520 | 17 | 3 | 3.8 | 8 | — |
| structured-outputs/extraction-pipeline-cheatsheet | 419 | 10 | 0 | 2.4 | 7 | — |
| structured-outputs/failure-and-repair-cheatsheet | 564 | 10 | 5 | 2.7 | 10 | — |
| structured-outputs/field-design-cheatsheet | 511 | 13 | 0 | 2.5 | 10 | — |
| tools-function-calling/error-handling-cheatsheet | 418 | 14 | 5 | 4.5 | 9 | — |
| tools-function-calling/orchestration-cheatsheet | 559 | 20 | 5 | 4.5 | 9 | — |
| tools-function-calling/scaling-tools-cheatsheet | 472 | 13 | 4 | 3.6 | 10 | — |
| tools-function-calling/tool-calling-glossary-cheatsheet | 516 | 13 | 4 | 3.3 | 14 | — |
| tools-function-calling/tool-schema-design-cheatsheet | 291 | 8 | 5 | 4.5 | 0 | — |

## Common-mistake pages (24)

| item | mistakes | symptom | cause | fix | prevention | int links | words | flags |
|---|---------------------|---|
| context-engineering/budgeting-common-mistakes | 6 | 6 | 6 | 6 | 1 | 9 | 846 | — |
| context-engineering/relevance-filtering-common-mistakes | 6 | 6 | 6 | 6 | 1 | 9 | 979 | — |
| mcp/mcp-auth-common-mistakes | 6 | 6 | 6 | 6 | 0 | 2 | 664 | — |
| mcp/mcp-debugging-common-mistakes | 5 | 5 | 5 | 5 | 0 | 2 | 553 | — |
| mcp/mcp-deployment-common-mistakes | 6 | 6 | 6 | 6 | 0 | 3 | 669 | — |
| mcp/mcp-primitives-common-mistakes | 5 | 5 | 5 | 5 | 1 | 2 | 616 | — |
| mcp/mcp-server-common-mistakes | 6 | 6 | 6 | 6 | 1 | 2 | 792 | — |
| mcp/mcp-transports-common-mistakes | 5 | 5 | 5 | 5 | 0 | 2 | 644 | — |
| prompt-engineering/robustness-common-mistakes | 6 | 6 | 6 | 6 | 1 | 6 | 873 | — |
| python-data-apis/api-calling-common-mistakes | 6 | 5 | 5 | 5 | 1 | 8 | 1581 | 1 mistake(s) without a named symptom; 1 mistake(s) without a cause; 1 mistake(s) without a fix |
| python-data-apis/data-cleaning-common-mistakes | 5 | 5 | 5 | 5 | 1 | 8 | 1546 | — |
| rag/chunking-common-mistakes | 5 | 5 | 5 | 5 | 1 | 7 | 1879 | — |
| rag/hybrid-search-common-mistakes | 5 | 5 | 5 | 5 | 1 | 7 | 1681 | — |
| rag/rag-eval-common-mistakes | 5 | 5 | 5 | 5 | 1 | 9 | 1744 | — |
| rag/reranking-common-mistakes | 6 | 6 | 6 | 6 | 1 | 7 | 1750 | — |
| rag/retrieval-common-mistakes | 5 | 5 | 5 | 5 | 1 | 7 | 1698 | — |
| rag/vector-db-common-mistakes | 5 | 5 | 5 | 5 | 1 | 8 | 1708 | — |
| tools-function-calling/advanced-tools-common-mistakes | 5 | 5 | 5 | 5 | 1 | 9 | 773 | — |
| tools-function-calling/execution-safety-common-mistakes | 5 | 5 | 5 | 5 | 1 | 8 | 1014 | — |
| tools-function-calling/foundations-common-mistakes | 5 | 5 | 5 | 5 | 1 | 6 | 828 | — |
| tools-function-calling/orchestration-common-mistakes | 5 | 5 | 5 | 5 | 1 | 7 | 999 | — |
| tools-function-calling/reliability-common-mistakes | 5 | 5 | 5 | 5 | 1 | 6 | 903 | — |
| tools-function-calling/schema-design-common-mistakes | 6 | 6 | 6 | 6 | 1 | 0 | 1169 | — |
| tools-function-calling/tool-selection-common-mistakes | 5 | 5 | 5 | 5 | 1 | 8 | 1042 | — |

