# Acquisition & practice family audit — mechanical pass

Generated 2026-09-16T03:53:25.270Z by `scripts/audit-families.mjs`.
Structural checks only; originality/correctness are scored in the review pass.

## Findings

- **Straight answers (35)**: 0 flagged — answer-first openings, FAQ and related metadata hold across the family.
- **Guides (14)**: all have `related` lesson lists and ordered steps; 0/14 have **zero in-body internal links** (continuation lives only in the frontmatter block); none have no code.
- **Blog (20)**: all dated; none never link into the curriculum.
- **Interview (27)**: 16/27 topics have a follow-up prompt on every question plus a weak-vs-strong rubric.
- **Scenarios (12)**: ~837 words avg; missing sections: none.
- **Centralized practice banks**: 336 questions across 42 tracks, 336 total lesson links.
- **Lesson quiz pages (87 files, 627 questions)**: all questions carry a marked correct answer; 0 duplicate stems corpus-wide; correct-answer positions skew B 43%, C 22%, A 19%, D 17%; 0 files have answer blocks that don't discuss every option.
- **Worked examples (56)**: 0 flagged — every file has runnable code and an inspectable outcome.
- **Cheatsheets (72)**: 0 flagged for scanability/length.
- **Common-mistake pages (26)**: 0 flagged; the symptom→cause→fix pattern holds elsewhere.

## Suggested backlog order

1. ~~Shuffle centralized-bank answer positions~~ — **done**: uniform spread + a lesson link per question.
2. ~~Scenario depth pass~~ — **done**: constraints/options/postmortem added to all six.
3. ~~Interview follow-ups + rubric~~ — **done**: follow-up prompt per question + "How to score your answers" rubric per topic.
4. ~~Guide in-body links~~ — **done**: every guide now links into the curriculum from body prose; `why-there-is-no-certificate` links to `/learn`.
5. **Quiz answer-position rebalance** — 43% of correct answers sit at B across 627 lesson-quiz questions (was ~66% B before the automated rebalance; residual skew is in questions whose rationale references options by bare letter — fix those when files are next edited by hand).
6. **Per-option rationale gaps** — 0 quiz files where some answers state a letter without walking the options.

## Straight answers (35)

| item | 1st para | faq | related | int links | ext | words | flags |
|---|------------------|---|
| ai-engineer-interview-questions | 48w ✓ | 1 | 6 | 8 | 0 | 1210 | — |
| ai-engineer-roadmap | 59w ✓ | 1 | 6 | 8 | 0 | 2002 | — |
| ai-engineer-vs-ml-engineer | 70w ✓ | 1 | 6 | 6 | 0 | 977 | — |
| can-i-run-an-llm-locally | 37w ✓ | 1 | 5 | 5 | 0 | 469 | — |
| certification-vs-portfolio-vs-experience | 8w ✓ | 1 | 4 | 2 | 0 | 279 | — |
| deploy-an-llm-app-to-production | 66w ✓ | 1 | 6 | 9 | 0 | 361 | — |
| difference-between-ai-and-machine-learning | 65w ✓ | 1 | 6 | 7 | 0 | 1009 | — |
| free-forward-deployed-engineer-course | 69w ✓ | 1 | 6 | 8 | 0 | 2002 | — |
| how-do-llms-work | 62w ✓ | 1 | 6 | 7 | 0 | 919 | — |
| how-much-does-an-llm-app-cost | 66w ✓ | 1 | 6 | 6 | 0 | 458 | — |
| how-to-become-an-ai-engineer | 73w ✓ | 1 | 6 | 8 | 0 | 1977 | — |
| how-to-build-a-rag-app | 64w ✓ | 1 | 6 | 8 | 0 | 1234 | — |
| how-to-choose-an-ai-chat-product | 23w ✓ | 1 | 5 | 6 | 0 | 384 | — |
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
| what-is-prompt-injection | 61w ✓ | 1 | 5 | 5 | 0 | 406 | — |
| what-is-rag | 55w ✓ | 1 | 6 | 14 | 0 | 934 | — |
| what-skills-does-an-ai-engineer-need | 53w ✓ | 1 | 6 | 8 | 0 | 1251 | — |

## Guides (14)

| item | steps | related | code | failure § | verify § | int links | words | flags |
|---|---------------------|---|
| add-observability-to-an-ai-feature | 6 | 4 | 1 | — | ✓ | 5 | 412 | — |
| build-a-rag-pipeline-over-your-own-documents | 6 | 4 | 5 | ✓ | ✓ | 4 | 838 | — |
| build-a-tool-calling-agent-from-scratch | 5 | 4 | 3 | ✓ | — | 4 | 534 | — |
| build-an-mcp-server-in-python | 6 | 4 | 8 | ✓ | — | 4 | 725 | — |
| build-your-first-browser-agent | 6 | 4 | 1 | ✓ | ✓ | 6 | 413 | — |
| build-your-first-voice-agent | 6 | 4 | 1 | — | — | 7 | 382 | — |
| cut-your-llm-bill | 6 | 3 | 4 | ✓ | — | 3 | 875 | — |
| defend-against-prompt-injection | 6 | 4 | 4 | — | ✓ | 6 | 917 | — |
| get-reliable-json-out-of-an-llm | 5 | 3 | 7 | — | — | 3 | 638 | — |
| migrate-between-raw-sdks-and-frameworks | 6 | 3 | 1 | — | — | 5 | 444 | — |
| rag-fine-tuning-or-a-longer-prompt | 5 | 4 | 1 | — | — | 6 | 918 | — |
| run-your-first-local-model-app | 6 | 4 | 3 | — | ✓ | 4 | 356 | — |
| ship-your-first-ai-feature-to-production | 6 | 3 | 2 | ✓ | ✓ | 3 | 851 | — |
| write-your-first-eval-for-an-ai-feature | 5 | 3 | 4 | — | — | 3 | 861 | — |

## Blog (20)

| item | published | tags | /learn links | int links | words | flags |
|---|---------------|---|
| agent-skills-vs-prompts-rules-mcp-hooks-subagents | ✓ | 3 | 2 | 2 | 504 | — |
| agents-need-a-harness | ✓ | 3 | 1 | 2 | 191 | — |
| building-multilingual-and-indic-ai-systems | ✓ | 3 | 9 | 12 | 418 | — |
| designing-reliable-browser-automation | ✓ | 3 | 4 | 4 | 397 | — |
| how-to-learn-ai-in-2026 | ✓ | 3 | 3 | 5 | 251 | — |
| how-to-read-a-tool-call-trace | ✓ | 3 | 1 | 4 | 405 | — |
| lmversity-launch-note | ✓ | 3 | 1 | 1 | 220 | — |
| local-models-privacy-latency-hardware-quality | ✓ | 3 | 2 | 4 | 519 | — |
| observability-for-multi-step-ai-systems | ✓ | 3 | 2 | 4 | 416 | — |
| rag-is-not-a-truth-machine | ✓ | 3 | 1 | 1 | 219 | — |
| read-the-loop-before-you-pick-a-framework | ✓ | 3 | 2 | 3 | 525 | — |
| stopping-conditions-for-agents | ✓ | 3 | 2 | 3 | 537 | — |
| teardown-playwright-mcp-tool-contracts | ✓ | 4 | 2 | 3 | 679 | — |
| the-context-window-got-bigger-and-it-did-not-fix-this | ✓ | 3 | 3 | 3 | 578 | — |
| the-mcp-mistakes-that-show-up-at-3am | ✓ | 3 | 2 | 3 | 631 | — |
| what-ai-coding-agents-can-and-cannot-safely-own | ✓ | 3 | 3 | 4 | 422 | — |
| what-an-eval-catches-that-a-demo-misses | ✓ | 3 | 2 | 3 | 375 | — |
| why-there-is-no-certificate | ✓ | 3 | 1 | 2 | 520 | — |
| workflow-agent-or-multi-agent | ✓ | 3 | 3 | 3 | 444 | — |
| your-rag-problem-is-a-retrieval-problem | ✓ | 3 | 2 | 3 | 700 | — |

## Interview topics (27)

| item | questions | with links | thin answers | follow-ups | rubric | words | flags |
|---|------------------|---|
| agents | 8 | 4 | 0 | 8/8 | ✓ | 1035 | — |
| ai-foundations | 7 | 2 | 0 | 7/7 | ✓ | 922 | — |
| ai-system-design | 8 | 3 | 0 | 8/8 | ✓ | 985 | — |
| behavioral-and-project-defense | 7 | 2 | 0 | 7/7 | ✓ | 921 | — |
| classical-ml | 7 | 0 | 0 | 7/7 | ✓ | 811 | — |
| context-engineering | 7 | 5 | 0 | 7/7 | ✓ | 914 | — |
| deep-learning | 7 | 0 | 0 | 7/7 | ✓ | 876 | — |
| evals | 8 | 3 | 0 | 8/8 | ✓ | 991 | — |
| interview-modes | 0 | 0 | 0 | 0/0 | ✗ | 504 | — |
| llm-basics | 8 | 5 | 0 | 8/8 | ✓ | 995 | — |
| maths-foundations | 7 | 0 | 0 | 7/7 | ✓ | 832 | — |
| mcp | 8 | 3 | 0 | 8/8 | ✓ | 972 | — |
| production-and-observability | 7 | 5 | 0 | 7/7 | ✓ | 893 | — |
| prompt-engineering | 8 | 6 | 0 | 8/8 | ✓ | 986 | — |
| rag | 8 | 4 | 0 | 8/8 | ✓ | 930 | — |
| role-ai-engineer | 0 | 0 | 0 | 0/0 | ✗ | 348 | — |
| role-ai-platform-engineer | 0 | 0 | 0 | 0/0 | ✗ | 387 | — |
| role-applied-ai-engineer | 0 | 0 | 0 | 0/0 | ✗ | 336 | — |
| role-data-scientist | 0 | 0 | 0 | 0/0 | ✗ | 382 | — |
| role-designer | 0 | 0 | 0 | 0/0 | ✗ | 428 | — |
| role-forward-deployed-engineer | 0 | 0 | 0 | 0/0 | ✗ | 390 | — |
| role-ml-engineer | 0 | 0 | 0 | 0/0 | ✗ | 357 | — |
| role-product-manager | 0 | 0 | 0 | 0/0 | ✗ | 410 | — |
| role-security-engineer | 0 | 0 | 0 | 0/0 | ✗ | 428 | — |
| safety-and-security | 7 | 4 | 0 | 7/7 | ✓ | 951 | — |
| structured-outputs | 7 | 1 | 0 | 7/7 | ✓ | 880 | — |
| take-home-exercises | 0 | 0 | 0 | 0/0 | ✗ | 479 | — |

## Scenarios (12)

| item | sections | int links | words | flags |
|---|---------|---|
| agent-approval | 13 | 4 | 886 | — |
| browser-agent-permissions | 11 | 3 | 874 | — |
| coding-agent-rollout | 11 | 2 | 893 | — |
| document-qa | 12 | 4 | 748 | — |
| eval-release | 11 | 4 | 685 | — |
| incident-response | 11 | 2 | 869 | — |
| mcp-team-server | 12 | 3 | 809 | — |
| rag-migration | 11 | 2 | 885 | — |
| regulated-decision-support | 11 | 2 | 896 | — |
| streaming-research | 12 | 4 | 772 | — |
| support-assistant | 12 | 4 | 841 | — |
| voice-agent-latency | 11 | 3 | 890 | — |

## Centralized practice banks

| track | questions | avg options | answers at idx 0–1 | lesson links | flags |
|---|---|---|---|---|---|
| ai-foundations | 8 | 4.0 | 50% | 8 | — |
| prompt-engineering | 8 | 4.0 | 50% | 8 | — |
| rag | 8 | 4.0 | 50% | 8 | — |
| agents | 8 | 4.0 | 50% | 8 | — |
| mcp | 8 | 4.0 | 50% | 8 | — |
| evals | 8 | 4.0 | 50% | 8 | — |
| classical-ai | 8 | 4.0 | 100% | 8 | — |
| machine-learning | 8 | 4.0 | 100% | 8 | — |
| deep-learning | 8 | 4.0 | 100% | 8 | — |
| responsible-ai | 8 | 4.0 | 100% | 8 | — |
| production | 8 | 4.0 | 100% | 8 | — |
| agentic-ai | 8 | 4.0 | 100% | 8 | — |
| harness-design | 8 | 4.0 | 100% | 8 | — |
| fine-tuning | 8 | 4.0 | 100% | 8 | — |
| ai-literacy | 8 | 4.0 | 100% | 8 | — |
| maths-foundations | 8 | 3.5 | 100% | 8 | — |
| python-data-apis | 8 | 4.0 | 100% | 8 | — |
| llm-foundations | 8 | 4.0 | 100% | 8 | — |
| context-engineering | 8 | 4.0 | 100% | 8 | — |
| structured-outputs | 8 | 4.0 | 100% | 8 | — |
| hallucinations | 8 | 4.0 | 100% | 8 | — |
| genai-app-dev | 8 | 4.0 | 100% | 8 | — |
| tools-function-calling | 8 | 4.0 | 100% | 8 | — |
| cli-agents | 8 | 4.0 | 100% | 8 | — |
| ai-automation-ops | 8 | 4.0 | 100% | 8 | — |
| multilingual-ai | 8 | 4.0 | 100% | 8 | — |
| multimodal-ai | 8 | 4.0 | 100% | 8 | — |
| voice-ai | 8 | 4.0 | 100% | 8 | — |
| web-agents | 8 | 4.0 | 100% | 8 | — |
| agent-skills | 8 | 4.0 | 100% | 8 | — |
| llm-security | 8 | 4.0 | 100% | 8 | — |
| local-inference | 8 | 4.0 | 100% | 8 | — |
| agent-frameworks | 8 | 4.0 | 100% | 8 | — |
| ai-for-designers | 8 | 4.0 | 100% | 8 | — |
| maths-derivations | 8 | 4.0 | 100% | 8 | — |
| ml-diagnosis | 8 | 4.0 | 100% | 8 | — |
| rag-evaluation | 8 | 4.0 | 100% | 8 | — |
| agent-traces | 8 | 4.0 | 100% | 8 | — |
| mcp-security | 8 | 4.0 | 100% | 8 | — |
| structured-output-failures | 8 | 4.0 | 100% | 8 | — |
| context-debugging | 8 | 4.0 | 100% | 8 | — |
| production-incidents | 8 | 4.0 | 100% | 8 | — |

## Lesson quiz pages (87 files, 627 questions)

| page | questions | options/q | answers marked | per-option rationale | flags |
|---|---|---|---|---|---|
| ai-for-designers/ai-product-design-foundations-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| ai-for-designers/behavior-before-interface-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| ai-for-designers/prototype-and-evaluation-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| ai-for-designers/trust-and-recovery-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
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
| context-engineering/foundations-quiz | 12 | 4/4/4/4/4/4/4/4/4/4/4/4 | 12 | 12 | — |
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
| hallucinations/uncertainty-quiz | 10 | 4/4/4/4/4/4/4/4/4/4 | 10 | 10 | — |
| llm-foundations/behavior-and-capstone-quiz | 8 | 4/4/4/4/4/4/4/4 | 8 | 8 | — |
| llm-foundations/decoding-inference-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| llm-foundations/efficient-architectures-quiz | 8 | 4/4/4/4/4/4/4/4 | 8 | 8 | — |
| llm-foundations/tokenization-embeddings-quiz | 9 | 4/4/4/4/4/4/4/4/4 | 9 | 9 | — |
| llm-foundations/training-pipeline-quiz | 8 | 4/4/4/4/4/4/4/4 | 8 | 8 | — |
| llm-foundations/transformer-block-quiz | 8 | 4/4/4/4/4/4/4/4 | 8 | 8 | — |
| llm-foundations/whole-game-quiz | 9 | 4/4/4/4/4/4/4/4/4 | 9 | 9 | — |
| mcp/mcp-auth-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| mcp/mcp-debugging-quiz | 5 | 4/4/4/4/4 | 5 | 5 | — |
| mcp/mcp-deployment-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| mcp/mcp-primitives-quiz | 5 | 4/4/4/4/4 | 5 | 5 | — |
| mcp/mcp-server-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| mcp/mcp-transports-quiz | 5 | 4/4/4/4/4 | 5 | 5 | — |
| prompt-engineering/decomposition-output-quiz | 10 | 4/4/4/4/4/4/4/4/4/4 | 10 | 10 | — |
| prompt-engineering/eval-shipping-quiz | 10 | 4/4/4/4/4/4/4/4/4/4 | 10 | 10 | — |
| prompt-engineering/examples-icl-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| prompt-engineering/foundations-quiz | 10 | 4/4/4/4/4/4/4/4/4/4 | 10 | 10 | — |
| prompt-engineering/reasoning-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| prompt-engineering/robustness-capstone-quiz | 10 | 4/4/4/4/4/4/4/4/4/4 | 10 | 10 | — |
| prompt-engineering/roles-steering-quiz | 10 | 4/4/4/4/4/4/4/4/4/4 | 10 | 10 | — |
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
| rag/rag-eval-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
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
| tools-function-calling/execution-safety-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| tools-function-calling/foundations-quiz | 10 | 4/4/4/4/4/4/4/4/4/4 | 10 | 10 | — |
| tools-function-calling/orchestration-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| tools-function-calling/reliability-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| tools-function-calling/schema-design-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |
| tools-function-calling/tool-selection-quiz | 6 | 4/4/4/4/4/4 | 6 | 6 | — |

### Correct-answer position across 627 marked questions

| position | count | share |
|---|---|---|
| A | 118 | 19% |
| B | 270 | 43% |
| C | 135 | 22% |
| D | 104 | 17% |

### Duplicate question stems across quiz pages: 0


### Repeated option text within a question: 0


### Near-empty answer blocks (<8 words of rationale): 0


## Worked examples (56)

| item | code blocks | inspectable outcome | int links | words | flags |
|---|------------|---|
| agent-frameworks/framework-leak-worked-example | 0 | ✓ | 3 | 492 | — |
| agent-skills/skill-authoring-worked-example | 1 | ✓ | 3 | 366 | — |
| agentic-ai/agent-run-worked-example | 0 | ✓ | 4 | 417 | — |
| ai-automation-ops/automation-ops-worked-example | 0 | ✓ | 4 | 344 | — |
| ai-for-designers/ai-feature-state-model-worked-example | 0 | ✓ | 5 | 396 | — |
| ai-for-designers/choosing-where-ai-belongs-worked-example | 0 | ✓ | 4 | 521 | — |
| ai-for-designers/test-an-ai-prototype-worked-example | 0 | ✓ | 4 | 405 | — |
| ai-for-designers/trust-patterns-worked-example | 0 | ✓ | 6 | 358 | — |
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
| classical-ai/a-star-worked-example | 0 | ✓ | 3 | 403 | — |
| cli-agents/cli-agent-workflow-worked-example | 1 | ✓ | 3 | 362 | — |
| context-engineering/context-budget-worked-example | 0 | ✓ | 3 | 401 | — |
| deep-learning/vanishing-gradient-worked-example | 0 | ✓ | 3 | 362 | — |
| evals-red-teaming/eval-regression-worked-example | 0 | ✓ | 3 | 354 | — |
| fine-tuning/fine-tune-regression-worked-example | 0 | ✓ | 3 | 370 | — |
| genai-app-dev/genai-feature-worked-example | 0 | ✓ | 3 | 461 | — |
| harness-design/harness-boundary-worked-example | 0 | ✓ | 3 | 449 | — |
| llm-security/prompt-injection-worked-example | 0 | ✓ | 3 | 418 | — |
| local-inference/local-inference-worked-example | 0 | ✓ | 3 | 390 | — |
| machine-learning/leakage-worked-example | 0 | ✓ | 3 | 443 | — |
| maths-foundations/gradient-descent-worked-example | 6 | ✓ | 3 | 269 | — |
| mcp/mcp-auth-worked-example | 6 | ✓ | 2 | 564 | — |
| mcp/mcp-debugging-worked-example | 9 | ✓ | 2 | 675 | — |
| mcp/mcp-deployment-worked-example | 7 | ✓ | 2 | 567 | — |
| mcp/mcp-primitives-worked-example | 7 | ✓ | 2 | 546 | — |
| mcp/mcp-server-worked-example | 10 | ✓ | 2 | 639 | — |
| mcp/mcp-transports-worked-example | 8 | ✓ | 2 | 508 | — |
| multilingual-ai/multilingual-eval-worked-example | 0 | ✓ | 3 | 361 | — |
| multimodal-ai/document-pipeline-worked-example | 0 | ✓ | 3 | 450 | — |
| production/incident-triage-worked-example | 0 | ✓ | 3 | 411 | — |
| prompt-engineering/structured-prompt-worked-example | 3 | ✓ | 7 | 694 | — |
| python-data-apis/api-pipeline-worked-example | 1 | ✓ | 3 | 309 | — |
| rag/chunking-worked-example | 10 | ✓ | 6 | 1838 | — |
| rag/hybrid-search-worked-example | 9 | ✓ | 10 | 1694 | — |
| rag/rag-eval-worked-example | 5 | ✓ | 7 | 1794 | — |
| rag/reranking-worked-example | 2 | ✓ | 6 | 1624 | — |
| rag/retrieval-worked-example | 4 | ✓ | 6 | 1400 | — |
| rag/vector-db-worked-example | 5 | ✓ | 5 | 1246 | — |
| responsible-ai/contestability-worked-example | 0 | ✓ | 3 | 449 | — |
| structured-outputs/from-prose-to-parsed-worked-example | 6 | ✓ | 8 | 603 | — |
| structured-outputs/gbnf-grammar-worked-example | 3 | ✓ | 6 | 695 | — |
| structured-outputs/reason-then-emit-worked-example | 7 | ✓ | 4 | 677 | — |
| structured-outputs/status-enum-worked-example | 4 | ✓ | 4 | 666 | — |
| tools-function-calling/self-correction-worked-example | 8 | ✓ | 5 | 667 | — |
| voice-ai/voice-latency-worked-example | 0 | ✓ | 3 | 332 | — |
| web-agents/web-agent-boundary-worked-example | 0 | ✓ | 3 | 432 | — |

## Cheatsheets (72)

| item | words | table rows | bullets | scannable density/100w | int links | flags |
|---|---------------|---|
| agent-frameworks/framework-cheatsheet | 348 | 12 | 12 | 6.9 | 4 | — |
| agent-skills/agent-skills-cheatsheet | 330 | 7 | 16 | 7 | 3 | — |
| agentic-ai/agentic-ai-cheatsheet | 310 | 7 | 17 | 7.7 | 8 | — |
| ai-automation-ops/automation-ops-cheatsheet | 309 | 7 | 14 | 6.8 | 4 | — |
| ai-for-designers/ai-interaction-state-cheatsheet | 289 | 0 | 10 | 3.5 | 3 | — |
| ai-foundations/model-selection-cheatsheet | 312 | 7 | 14 | 6.7 | 7 | — |
| ai-literacy/ai-literacy-master-cheatsheet | 835 | 6 | 14 | 2.4 | 35 | — |
| ai-literacy/everyday-prompting-cheatsheet | 708 | 6 | 6 | 2.1 | 9 | — |
| classical-ai/classical-ai-cheatsheet | 351 | 7 | 17 | 6.8 | 3 | — |
| cli-agents/cli-agents-cheatsheet | 320 | 0 | 21 | 6.6 | 7 | — |
| context-engineering/context-engineering-master-cheatsheet | 719 | 6 | 14 | 2.8 | 5 | — |
| context-engineering/failure-mode-cheatsheet | 600 | 18 | 5 | 3.8 | 10 | — |
| context-engineering/memory-and-compaction-cheatsheet | 768 | 34 | 10 | 5.7 | 11 | — |
| context-engineering/retrieval-vs-stuffing-cheatsheet | 597 | 8 | 5 | 2.2 | 7 | — |
| context-engineering/selection-and-ordering-cheatsheet | 686 | 20 | 10 | 4.4 | 11 | — |
| context-engineering/token-budget-cheatsheet | 641 | 18 | 13 | 4.8 | 14 | — |
| context-engineering/tools-and-caching-cheatsheet | 636 | 14 | 6 | 3.1 | 10 | — |
| deep-learning/deep-learning-cheatsheet | 347 | 6 | 13 | 5.5 | 3 | — |
| evals-red-teaming/eval-cheatsheet | 325 | 7 | 16 | 7.1 | 3 | — |
| fine-tuning/fine-tuning-cheatsheet | 357 | 7 | 13 | 5.6 | 4 | — |
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
| harness-design/harness-cheatsheet | 306 | 8 | 20 | 9.2 | 8 | — |
| llm-foundations/llm-foundations-cheatsheet | 314 | 7 | 17 | 7.6 | 5 | — |
| llm-security/llm-security-cheatsheet | 351 | 9 | 18 | 7.7 | 7 | — |
| local-inference/local-inference-cheatsheet | 351 | 14 | 12 | 7.4 | 4 | — |
| machine-learning/ml-cheatsheet | 338 | 6 | 14 | 5.9 | 3 | — |
| maths-foundations/maths-cheatsheet | 338 | 18 | 5 | 6.8 | 5 | — |
| mcp/mcp-auth-cheatsheet | 310 | 19 | 9 | 9 | 1 | — |
| mcp/mcp-debugging-cheatsheet | 312 | 24 | 5 | 9.3 | 0 | — |
| mcp/mcp-deployment-cheatsheet | 430 | 27 | 14 | 9.5 | 0 | — |
| mcp/mcp-primitives-cheatsheet | 345 | 28 | 5 | 9.6 | 0 | — |
| mcp/mcp-server-cheatsheet | 372 | 19 | 11 | 8.1 | 2 | — |
| mcp/mcp-transports-cheatsheet | 356 | 32 | 10 | 11.8 | 1 | — |
| multilingual-ai/multilingual-cheatsheet | 318 | 6 | 13 | 6 | 4 | — |
| multimodal-ai/multimodal-cheatsheet | 321 | 7 | 13 | 6.2 | 4 | — |
| production/production-cheatsheet | 350 | 10 | 18 | 8 | 7 | — |
| prompt-engineering/decomposition-output-cheatsheet | 1004 | 16 | 11 | 2.7 | 13 | — |
| prompt-engineering/eval-versioning-cheatsheet | 695 | 14 | 22 | 5.2 | 9 | — |
| prompt-engineering/few-shot-design-cheatsheet | 700 | 15 | 7 | 3.1 | 14 | — |
| prompt-engineering/prompt-first-principles-cheatsheet | 560 | 8 | 6 | 2.5 | 6 | — |
| prompt-engineering/robustness-safety-cheatsheet | 623 | 20 | 13 | 5.3 | 8 | — |
| python-data-apis/python-data-apis-cheatsheet | 343 | 8 | 14 | 6.4 | 3 | — |
| rag/chunking-cheatsheet | 999 | 7 | 19 | 2.6 | 8 | — |
| rag/hybrid-search-cheatsheet | 991 | 21 | 5 | 2.6 | 11 | — |
| rag/rag-eval-cheatsheet | 1371 | 19 | 14 | 2.4 | 6 | — |
| rag/reranking-cheatsheet | 922 | 19 | 3 | 2.4 | 7 | — |
| rag/retrieval-cheatsheet | 1043 | 24 | 0 | 2.3 | 5 | — |
| rag/vector-db-cheatsheet | 1188 | 14 | 15 | 2.4 | 6 | — |
| responsible-ai/responsible-ai-cheatsheet | 320 | 8 | 10 | 5.6 | 3 | — |
| structured-outputs/cross-provider-and-eval-cheatsheet | 666 | 18 | 13 | 4.7 | 6 | — |
| structured-outputs/decoding-mechanisms-cheatsheet | 520 | 17 | 3 | 3.8 | 8 | — |
| structured-outputs/extraction-pipeline-cheatsheet | 419 | 10 | 0 | 2.4 | 7 | — |
| structured-outputs/failure-and-repair-cheatsheet | 564 | 10 | 5 | 2.7 | 10 | — |
| structured-outputs/field-design-cheatsheet | 511 | 13 | 0 | 2.5 | 10 | — |
| tools-function-calling/error-handling-cheatsheet | 418 | 14 | 5 | 4.5 | 9 | — |
| tools-function-calling/orchestration-cheatsheet | 559 | 20 | 5 | 4.5 | 9 | — |
| tools-function-calling/scaling-tools-cheatsheet | 472 | 13 | 4 | 3.6 | 10 | — |
| tools-function-calling/tool-calling-glossary-cheatsheet | 516 | 13 | 4 | 3.3 | 14 | — |
| tools-function-calling/tool-schema-design-cheatsheet | 262 | 8 | 5 | 5 | 5 | — |
| voice-ai/voice-ai-cheatsheet | 371 | 6 | 17 | 6.2 | 4 | — |
| web-agents/web-agents-cheatsheet | 377 | 7 | 16 | 6.1 | 4 | — |

## Common-mistake pages (26)

| item | mistakes | symptom | cause | fix | prevention | int links | words | flags |
|---|---------------------|---|
| ai-for-designers/ai-product-design-common-mistakes | 5 | 5 | 5 | 5 | 0 | 10 | 349 | — |
| ai-for-designers/ai-prototype-testing-common-mistakes | 4 | 4 | 4 | 4 | 1 | 6 | 308 | — |
| context-engineering/budgeting-common-mistakes | 6 | 6 | 6 | 6 | 1 | 9 | 846 | — |
| context-engineering/relevance-filtering-common-mistakes | 6 | 6 | 6 | 6 | 1 | 10 | 979 | — |
| mcp/mcp-auth-common-mistakes | 6 | 6 | 6 | 6 | 0 | 2 | 664 | — |
| mcp/mcp-debugging-common-mistakes | 5 | 5 | 5 | 5 | 0 | 2 | 553 | — |
| mcp/mcp-deployment-common-mistakes | 6 | 6 | 6 | 6 | 0 | 3 | 669 | — |
| mcp/mcp-primitives-common-mistakes | 5 | 5 | 5 | 5 | 1 | 2 | 616 | — |
| mcp/mcp-server-common-mistakes | 6 | 6 | 6 | 6 | 1 | 2 | 792 | — |
| mcp/mcp-transports-common-mistakes | 5 | 5 | 5 | 5 | 0 | 2 | 644 | — |
| prompt-engineering/robustness-common-mistakes | 6 | 6 | 6 | 6 | 1 | 6 | 873 | — |
| python-data-apis/api-calling-common-mistakes | 5 | 5 | 5 | 5 | 1 | 8 | 1581 | — |
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
| tools-function-calling/schema-design-common-mistakes | 6 | 6 | 6 | 6 | 1 | 6 | 1100 | — |
| tools-function-calling/tool-selection-common-mistakes | 5 | 5 | 5 | 5 | 1 | 8 | 1042 | — |

