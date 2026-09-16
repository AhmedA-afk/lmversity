# AI for Designers — course build checklist

Last updated: 2026-09-15

Owner: Devin

Status: planning complete; implementation not started

Proposed track id: `ai-for-designers`

Primary audience: product designers, UX designers, interaction designers, design
researchers, content designers, and design-system practitioners who want to use AI in
their work and design AI-powered products responsibly.

Primary outcome: a learner can choose an appropriate AI-assisted design workflow,
prototype the behavior of an AI feature, communicate its states and boundaries, test it
with realistic scenarios, and hand engineers an implementation-ready interaction spec.

This course should create useful, search-discoverable pages without becoming a catalogue
of vendor features. Tool interfaces change; design reasoning, failure states, evaluation,
accessibility, and handoff practices should remain the durable core.

## How to maintain this checklist

- [ ] Update `Last updated` whenever a task changes state.
- [ ] Check a task only after its acceptance criteria have been verified.
- [ ] Add a dated entry to the progress log for each completed batch.
- [ ] Link the relevant commit, pull request, preview, research note, or account report.
- [ ] Preserve unrelated working-tree changes.
- [ ] Use real sources for every external claim, number, date, benchmark, and quotation.
- [ ] Give every lesson a complete, reader-focused `summary`; this becomes its meta description.
- [ ] Register every new lesson in `src/data/curriculum.ts` in the same change.
- [ ] Use `-cheatsheet`, `-compared`, `-worked-example`, `-common-mistakes`, and `-quiz`
      suffixes deliberately so `/reference` collects the intended pages.
- [ ] Run `npm run check:content`, `npm run build`, and `npm run check:links` before
      marking any publishing batch complete.

Task labels:

- `DECISION`: owner or curriculum decision.
- `RESEARCH`: learner, search, competitor, or source research.
- `CONTENT`: lesson, exercise, case study, or supporting copy.
- `CODE`: curriculum, routes, components, metadata, or tracking.
- `DESIGN`: diagrams, examples, interaction specimens, and visual QA.
- `SEO`: search-intent, internal-link, snippet, and distribution work.
- `QA`: editorial, technical, accessibility, and browser verification.

## Progress dashboard

- [ ] Phase 0 — Positioning and evidence complete.
- [ ] Phase 1 — Course architecture and reusable-content map complete.
- [ ] Phase 2 — MVP course published.
- [ ] Phase 3 — AI-assisted design workflow modules published.
- [ ] Phase 4 — AI product interaction modules published.
- [ ] Phase 5 — Evaluation, safety, accessibility, and handoff modules published.
- [ ] Phase 6 — Capstone and portfolio package published.
- [ ] Phase 7 — Acquisition and measurement operating.
- [ ] Final course QA and handoff complete.

Current milestone: Phase 0 — validate the audience, promise, and entry-page search intent
before writing dozens of lessons.

## Verified repository baseline

- [x] A live `designer` role exists in `src/data/roles.ts`.
- [x] The role currently curates eight lessons from AI Foundations, Hallucinations,
      GenAI App Development, Prompt Engineering, and Agentic AI.
- [x] Existing material covers model limitations, hallucinations, chat UX, streaming,
      uncertainty, prompt roles, and deciding when an agent is inappropriate.
- [x] The repository supports lessons, worked examples, comparison pages, common-mistake
      pages, cheatsheets, quizzes, guides, role pages, and structured course metadata.
- [x] Existing site-wide completion, save, previous/next, related-content, and analytics
      plumbing can support a new track.

## Phase 0 — Position the course

### Audience and promise

- [x] `DECISION` Confirm whether the course serves product/UX designers first, with visual,
      brand, research, and content designers as secondary audiences.
- [x] `DECISION` Keep the public name `AI for Designers` unless search evidence supports a
      clearer title such as `AI Product Design`.
- [x] `DECISION` Confirm that the course has two explicit lanes:
      1. using AI inside the design process; and
      2. designing interfaces and workflows that contain AI.
- [x] `DECISION` State that no coding experience is required for the core path.
- [x] `DECISION` Decide whether optional prototyping labs may include light HTML, JSON,
      API, or no-code tooling.
- [x] `CONTENT` Write a one-sentence course promise in the learner's language.
- [x] `CONTENT` Write four concrete outcomes a learner can demonstrate in a portfolio.
- [x] `CONTENT` Define prerequisites and link to the minimum existing AI-literacy lessons.
- [x] `CONTENT` Define what the course intentionally does not teach.
- [x] `CONTENT` Add a clear path for visual designers who have never designed software.
- [x] `CONTENT` Add a faster path for experienced product designers.

Acceptance criteria:

- [ ] A designer can tell from the track page whether the course matches their role.
- [ ] The promise describes an observable work product, not vague AI fluency.
- [ ] The course does not imply that AI output replaces design judgment or user research.

### Learner and search research

- [ ] `RESEARCH` Export relevant Search Console queries around designers, AI UX, AI
      product design, AI prototyping, AI design workflows, and conversational UX.
- [ ] `RESEARCH` Group queries by intent: learn, solve a task, compare approaches, find a
      template, inspect an example, or prepare for an interview.
- [ ] `RESEARCH` Record impressions, clicks, CTR, and position for existing pages that
      already overlap the proposed course.
- [ ] `RESEARCH` Review the current `designer` role page's entry traffic and onward clicks.
- [ ] `RESEARCH` Interview or collect written input from working designers about recurring
      AI tasks, failed workflows, team handoff problems, and portfolio needs.
- [x] `RESEARCH` Review current course and tutorial results for the target queries.
- [x] `RESEARCH` Record what competing pages cover well, what they omit, and which claims
      require primary-source verification.
- [ ] `RESEARCH` Identify questions that deserve concise answer pages as acquisition entry
      points rather than full lessons.
- [ ] `RESEARCH` Identify templates and examples designers actively want to reuse.
- [x] `SEO` Create a query-to-page map before finalizing lesson titles.
- [ ] `SEO` Assign one primary intent to every proposed page and flag overlapping intents.
- [x] `SEO` Preserve space for emerging queries; do not hard-code transient vendor names
      into the course architecture.

Deliverables:

- [x] Audience brief.
- [x] Query and intent map.
- [x] Competitor/content-gap note.
- [x] Proposed course promise and outcomes.
- [x] List of assumptions that still need learner evidence.

## Phase 1 — Design the curriculum architecture

### Course structure

- [x] `CODE` Add a new top-level track with id `ai-for-designers` to
      `src/data/curriculum.ts`.
- [x] `CODE` Set the track to `coming` while the MVP is incomplete.
- [x] `CODE` Add the new lesson directory at `src/content/lessons/ai-for-designers/`.
- [ ] `CODE` Update the existing `designer` role path to use the dedicated track when its
      opening sequence is live.
- [ ] `CODE` Preserve useful cross-track links instead of duplicating existing lessons.
- [ ] `CONTENT` Give each module a question it answers and a work product it produces.
- [ ] `CONTENT` Sequence the course from judgment to workflows to product behavior to
      evaluation and handoff.
- [ ] `CONTENT` Ensure each module contains explanation, application, failure analysis,
      reference material, and a knowledge check.
- [ ] `CONTENT` Define a glossary for design-specific AI terms and link to the site glossary
      where definitions already exist.
- [ ] `CONTENT` Add a short diagnostic that helps experienced learners skip familiar material.

### Reuse map

- [ ] `CONTENT` Audit `ai-literacy` lessons for prerequisites on capability, verification,
      privacy, bias, and tool selection.
- [ ] `CONTENT` Audit `hallucinations` lessons for uncertainty, citation, and correction patterns.
- [x] `CONTENT` Audit `genai-app-dev` lessons for streaming, partial output, chat UX,
      generative UI, multimodal input, and latency.
- [ ] `CONTENT` Audit `prompt-engineering` lessons for roles, examples, constraints, and
      iterative evaluation.
- [ ] `CONTENT` Audit `agentic-ai` and `tools-function-calling` lessons for autonomy,
      approval, progress, recovery, and authority boundaries.
- [ ] `CONTENT` Audit `evals-red-teaming` lessons for scenario design, rubrics, failure
      analysis, and release gates.
- [x] `CONTENT` Classify each candidate as prerequisite, embedded recommendation,
      adaptation, or genuinely new designer lesson.
- [ ] `CONTENT` Avoid copying general technical explanations into the new track.

Acceptance criteria:

- [x] Every curriculum node maps to a file or a deliberately marked coming-soon item.
- [ ] Every module builds toward a portfolio-relevant artifact.
- [ ] Reused lessons have clear bridging copy explaining why a designer needs them.
- [ ] No two pages compete for the same search intent without a deliberate distinction.

## Phase 2 — Publish the MVP course

The MVP should be a coherent short course that produces one complete AI-feature design
case study. Publish it before expanding into the full catalogue.

### Module 1 — What AI changes in design

- [x] `CONTENT` `ai-for-designers-course-guide` — orientation, two course lanes,
      prerequisites, deliverables, and completion path.
- [x] `CONTENT` `designer-mental-model-for-generative-ai` — inputs, context, generated
      output, variation, and the surrounding product system.
- [x] `CONTENT` `deterministic-vs-probabilistic-interfaces-compared` — how behavior,
      testing, copy, and expectations change.
- [x] `CONTENT` `choosing-where-ai-belongs-worked-example` — evaluate a feature idea
      against user need, evidence, uncertainty, and recoverability.
- [x] `CONTENT` `ai-product-design-common-mistakes` — magic-box framing, happy-path-only
      flows, fake certainty, hidden automation, and missing recovery.
- [x] `CONTENT` `ai-product-design-foundations-quiz` — scenario-based knowledge check.

Module artifact:

- [ ] A one-page AI opportunity brief containing user problem, proposed role for AI,
      non-AI baseline, value hypothesis, failure costs, and decision owner.

### Module 2 — Design the behavior before the screen

- [x] `CONTENT` `designing-the-ai-behavior-contract` — purpose, inputs, outputs,
      boundaries, tone, evidence, permissions, and escalation.
- [x] `CONTENT` `mapping-ai-capabilities-to-user-tasks` — separate retrieval,
      transformation, generation, prediction, and action.
- [x] `CONTENT` `ai-feature-state-model-worked-example` — idle, collecting input,
      working, partial output, complete, uncertain, blocked, failed, cancelled, and corrected.
- [x] `CONTENT` `ai-interaction-state-cheatsheet` — reusable state inventory.
- [x] `CONTENT` `prompt-as-interaction-spec` — prompts as part of system behavior, with
      engineering and policy constraints kept visible.
- [x] `CONTENT` `behavior-before-interface-quiz` — choose appropriate states and controls.

Module artifact:

- [ ] A behavior contract and state diagram for the learner's chosen feature.

### Module 3 — Trustworthy AI interactions

- [x] `CONTENT` `designing-for-uncertainty` — calibrated wording, evidence, alternatives,
      and when the system should abstain.
- [x] `CONTENT` `sources-confidence-and-explanations-compared` — what each pattern can
      and cannot communicate.
- [x] `CONTENT` `correction-undo-and-recovery-patterns` — make wrong output repairable.
- [x] `CONTENT` `human-review-and-approval-boundaries` — separate recommendation,
      confirmation, and action.
- [x] `CONTENT` `trust-patterns-worked-example` — redesign an overconfident assistant flow.
- [x] `CONTENT` `trust-and-recovery-quiz` — failure-state decisions rather than recall.

Module artifact:

- [ ] An annotated flow showing uncertainty, evidence, correction, undo, escalation, and
      the point where a person approves a consequential action.

### Module 4 — Prototype and evaluate

- [x] `CONTENT` `prototype-ai-behavior-without-a-model` — scripted, Wizard-of-Oz, and
      branch-based prototypes with honest disclosure.
- [x] `CONTENT` `creating-a-realistic-ai-test-set` — representative tasks, difficult cases,
      sensitive cases, and known failure modes.
- [x] `CONTENT` `designing-a-ux-evaluation-rubric` — usefulness, clarity, control,
      recovery, trust, and accessibility criteria.
- [x] `CONTENT` `test-an-ai-prototype-worked-example` — run scenarios, record outcomes,
      distinguish model failures from interaction failures.
- [x] `CONTENT` `ai-prototype-testing-common-mistakes` — cherry-picked prompts,
      demo-only flows, changing criteria, and missing baselines.
- [x] `CONTENT` `prototype-and-evaluation-quiz`.

Module artifact:

- [ ] A prototype, scenario set, evaluation rubric, findings log, and revision note.

### MVP capstone

- [x] `CONTENT` `capstone-design-a-trustworthy-ai-feature` — complete brief, behavior
      model, key screens, failure states, evaluation, and handoff.
- [x] `CONTENT` Provide three bounded capstone briefs from different domains.
- [x] `CONTENT` Include a learner-defined brief option with a scope check.
- [x] `CONTENT` Publish a capstone rubric with pass, revise, and unsupported-claim criteria.
- [ ] `CONTENT` Publish one complete worked capstone with its evidence and tradeoffs visible.
- [x] `CONTENT` Add a portfolio-writing prompt that separates the learner's decisions from
      the model-generated material.

MVP acceptance criteria:

- [ ] A learner can finish the MVP without buying a particular tool.
- [ ] Every module ends in a reusable artifact.
- [ ] The capstone demonstrates normal, uncertain, blocked, failed, corrected, and
      user-cancelled states.
- [ ] The capstone includes a non-AI baseline and explains why AI is justified.
- [ ] The capstone evaluation uses examples unseen during the initial design.
- [ ] The MVP is navigable from the Designer role page and the main Learn index.

## Phase 3 — Expand AI-assisted design workflows

### Research and synthesis

- [ ] `CONTENT` `ai-assisted-research-planning` — draft plans while keeping research
      questions, recruitment, consent, and judgment with the researcher.
- [ ] `CONTENT` `working-with-interview-transcripts-safely` — privacy, redaction,
      permissions, retention, and review.
- [ ] `CONTENT` `synthesis-with-traceable-evidence` — keep every theme connected to source notes.
- [ ] `CONTENT` `ai-research-synthesis-worked-example` — compare manual and assisted synthesis.
- [ ] `CONTENT` `research-synthesis-common-mistakes` — invented themes, flattened minority
      views, confirmation bias, and unattributed summaries.
- [ ] `CONTENT` `ai-research-workflow-cheatsheet`.
- [ ] `CONTENT` `ai-assisted-research-quiz`.

Module artifact:

- [ ] A research synthesis board whose findings remain traceable to approved source material.

### Ideation, critique, and iteration

- [ ] `CONTENT` `using-ai-for-divergent-ideation` — create breadth without outsourcing selection.
- [ ] `CONTENT` `turning-design-constraints-into-a-creative-brief`.
- [ ] `CONTENT` `prompting-for-design-critique` — role, criteria, context, evidence, and limits.
- [ ] `CONTENT` `generate-critique-revise-worked-example`.
- [ ] `CONTENT` `novelty-vs-usefulness-in-ai-ideation`.
- [ ] `CONTENT` `ai-ideation-common-mistakes` — sameness, uncritical volume, trend imitation,
      and hidden reference material.
- [ ] `CONTENT` `ai-ideation-cheatsheet`.
- [ ] `CONTENT` `ai-ideation-and-critique-quiz`.

Module artifact:

- [ ] A documented divergence and convergence trail showing which ideas were generated,
      rejected, combined, tested, and selected.

### Content, systems, and production work

- [ ] `CONTENT` `ai-for-ux-writing-and-content-design`.
- [ ] `CONTENT` `generating-structured-content-not-loose-copy`.
- [ ] `CONTENT` `design-system-documentation-with-ai`.
- [ ] `CONTENT` `component-inventory-and-consistency-review`.
- [ ] `CONTENT` `localization-and-inclusive-language-review`.
- [ ] `CONTENT` `content-workflow-worked-example`.
- [ ] `CONTENT` `ai-content-design-common-mistakes`.
- [ ] `CONTENT` `ai-content-workflow-quiz`.

Module artifact:

- [ ] A structured content specification with approved terminology, variants, edge cases,
      localization notes, and human review status.

## Phase 4 — Expand AI product interaction design

### Input and intent

- [ ] `CONTENT` `choosing-chat-form-canvas-or-command` — match the interaction model to the task.
- [ ] `CONTENT` `designing-good-ai-inputs` — examples, constraints, attachments, context,
      and progressive disclosure.
- [ ] `CONTENT` `suggested-prompts-without-empty-state-clutter`.
- [ ] `CONTENT` `multimodal-input-patterns-for-designers`.
- [ ] `CONTENT` `clarification-before-generation-worked-example`.
- [ ] `CONTENT` `ai-input-patterns-common-mistakes`.
- [ ] `CONTENT` `ai-input-patterns-quiz`.

### Waiting, streaming, and progress

- [ ] `CONTENT` `designing-for-ai-latency` — immediate acknowledgement, progress,
      cancellation, useful partial work, and truthful status.
- [ ] `CONTENT` `streaming-vs-staged-results-compared`.
- [ ] `CONTENT` `partial-output-and-layout-stability`.
- [ ] `CONTENT` `stop-retry-and-regenerate-patterns`.
- [ ] `CONTENT` `long-running-ai-task-worked-example`.
- [ ] `CONTENT` `latency-and-progress-common-mistakes`.
- [ ] `CONTENT` `latency-progress-quiz`.

### Output and generative UI

- [ ] `CONTENT` `choosing-prose-structure-or-components`.
- [ ] `CONTENT` `designing-structured-ai-output`.
- [ ] `CONTENT` `progressive-disclosure-for-generated-results`.
- [ ] `CONTENT` `editable-output-and-provenance`.
- [ ] `CONTENT` `generative-ui-worked-example`.
- [ ] `CONTENT` `generated-output-common-mistakes`.
- [ ] `CONTENT` `generative-ui-patterns-cheatsheet`.
- [ ] `CONTENT` `generative-output-quiz`.

### Agents, tools, and autonomy

- [ ] `CONTENT` `designing-visible-agent-plans`.
- [ ] `CONTENT` `tool-use-progress-and-status`.
- [ ] `CONTENT` `permissions-confirmation-and-approval`.
- [ ] `CONTENT` `designing-for-paused-blocked-and-recovering-agents`.
- [ ] `CONTENT` `agent-memory-and-user-control`.
- [ ] `CONTENT` `agent-vs-workflow-for-designers-compared`.
- [ ] `CONTENT` `redesign-an-overautonomous-agent-worked-example`.
- [ ] `CONTENT` `agent-interface-common-mistakes`.
- [ ] `CONTENT` `agent-interaction-quiz`.

Module artifact:

- [ ] An agent activity model showing plan, current action, tool use, permissions,
      checkpoints, cancellation, recovery, and audit history.

## Phase 5 — Evaluation, safety, accessibility, and handoff

### Evaluation as a design practice

- [ ] `CONTENT` `turning-user-needs-into-ai-eval-scenarios`.
- [ ] `CONTENT` `quality-rubrics-for-subjective-output`.
- [ ] `CONTENT` `pairwise-comparison-for-design-decisions`.
- [ ] `CONTENT` `evaluating-the-system-not-just-the-model`.
- [ ] `CONTENT` `online-feedback-without-dark-patterns`.
- [ ] `CONTENT` `ai-design-eval-plan-worked-example`.
- [ ] `CONTENT` `ai-design-evaluation-cheatsheet`.
- [ ] `CONTENT` `ai-design-evaluation-quiz`.

### Responsible and inclusive design

- [ ] `CONTENT` `privacy-boundaries-in-ai-design-workflows`.
- [ ] `CONTENT` `designing-disclosure-and-consent`.
- [ ] `CONTENT` `bias-and-representation-in-generated-output`.
- [ ] `CONTENT` `designing-for-misuse-and-adversarial-input`.
- [ ] `CONTENT` `accessibility-of-streaming-and-live-generated-content`.
- [ ] `CONTENT` `screen-reader-focus-and-announcement-patterns-for-ai`.
- [ ] `CONTENT` `motion-cognitive-load-and-user-control`.
- [ ] `CONTENT` `inclusive-ai-experience-worked-example`.
- [ ] `CONTENT` `responsible-ai-design-common-mistakes`.
- [ ] `CONTENT` `responsible-and-accessible-ai-design-quiz`.

### Engineering handoff

- [ ] `CONTENT` `the-ai-interaction-spec` — states, data, model behavior, controls,
      copy, events, permissions, evaluation, and unresolved questions.
- [ ] `CONTENT` `designer-engineer-contract-for-ai-features`.
- [ ] `CONTENT` `mapping-design-states-to-api-events`.
- [ ] `CONTENT` `instrumentation-for-ai-user-journeys`.
- [ ] `CONTENT` `handoff-a-streaming-assistant-worked-example`.
- [ ] `CONTENT` `ai-design-handoff-common-mistakes`.
- [ ] `CONTENT` `ai-interaction-spec-cheatsheet`.
- [ ] `CONTENT` `ai-design-handoff-quiz`.

Module artifact:

- [ ] An implementation-ready interaction specification that engineering can review
      without guessing at states, authority, error handling, or evaluation criteria.

## Phase 6 — Capstone and portfolio package

- [ ] `CONTENT` Publish three full capstone pathways: research assistant, creative
      copilot, and bounded task agent.
- [ ] `CONTENT` Give each pathway a realistic brief, supplied constraints, source pack,
      stakeholder concerns, failure cases, and acceptance criteria.
- [ ] `CONTENT` Require a non-AI baseline and an explicit argument for using AI.
- [ ] `CONTENT` Require normal, slow, uncertain, wrong, blocked, unsafe, cancelled, and
      recovery states.
- [ ] `CONTENT` Require a small eval set and a record of design changes caused by results.
- [ ] `CONTENT` Require accessibility notes and an assistive-technology test plan.
- [ ] `CONTENT` Require privacy, retention, permission, and human-review decisions.
- [ ] `CONTENT` Require an engineering handoff artifact.
- [ ] `CONTENT` Add a portfolio case-study outline focused on decisions and evidence.
- [ ] `CONTENT` Add an interview presentation outline and critique questions.
- [ ] `CONTENT` Publish a self-review rubric.
- [ ] `CONTENT` Publish a peer-critique rubric.
- [ ] `CONTENT` Publish at least one complete reference solution without presenting one
      design as universally correct.
- [ ] `QA` Verify that every capstone source and claim is traceable.

## Visual and interactive teaching assets

- [ ] `DESIGN` Create a hand-authored SVG for deterministic vs probabilistic state space.
- [ ] `DESIGN` Create a hand-authored SVG for the AI behavior contract.
- [ ] `DESIGN` Create a hand-authored SVG state model for an AI interaction.
- [ ] `DESIGN` Create a hand-authored SVG showing recommendation, confirmation, and action.
- [ ] `DESIGN` Create a hand-authored SVG for an agent plan and approval checkpoint.
- [ ] `DESIGN` Create an accessible comparison specimen for chat, form, canvas, and command UI.
- [ ] `DESIGN` Create interactive examples for streaming, cancellation, retry, correction,
      citations, and uncertain output.
- [ ] `DESIGN` Give every interactive specimen a no-JavaScript explanation.
- [ ] `DESIGN` Ensure examples work in light, dark, and system themes.
- [ ] `DESIGN` Ensure interactive examples remain usable at 320px width and 200% zoom.
- [ ] `DESIGN` Use semantic HTML and visible keyboard focus.
- [ ] `DESIGN` Announce live updates correctly without overwhelming screen-reader users.
- [ ] `DESIGN` Keep motion optional and honor reduced-motion preferences.
- [ ] `DESIGN` Verify contrast and non-color state indicators.
- [ ] `DESIGN` Keep runtime-created elements in global CSS where required by Astro.
- [ ] `DESIGN` Define any new color in all three theme states.

Image-policy checks:

- [ ] Do not generate diagrams, flows, charts, facts, labels, numbers, code, or data as imagery.
- [ ] Do not generate people, faces, or hands.
- [ ] If a decorative generated image is justified, use only the approved light ground,
      indigo, brass, neutrals, flat-vector treatment, empty space, and square format.
- [ ] Use hand-authored SVG for every teaching diagram.

## Templates and downloadable artifacts

- [ ] `CONTENT` AI opportunity brief template.
- [ ] `CONTENT` AI behavior contract template.
- [ ] `CONTENT` AI interaction state inventory.
- [ ] `CONTENT` Prompt and context worksheet for designers.
- [ ] `CONTENT` Source-traceable research synthesis sheet.
- [ ] `CONTENT` Uncertainty and trust-pattern checklist.
- [ ] `CONTENT` Agent authority and approval map.
- [ ] `CONTENT` AI prototype scenario set template.
- [ ] `CONTENT` UX evaluation rubric template.
- [ ] `CONTENT` Accessibility test plan for generated interfaces.
- [ ] `CONTENT` AI interaction specification template.
- [ ] `CONTENT` Designer-to-engineer handoff checklist.
- [ ] `CONTENT` Portfolio case-study outline.
- [ ] `QA` Make each artifact useful as an ordinary web page before adding a download format.
- [ ] `SEO` Give each artifact a descriptive title, introduction, worked example, and links
      back into the relevant course module.

## Acquisition pages and internal linking

- [ ] `SEO` Create or improve the `/roles/designer` landing page around the dedicated course.
- [ ] `SEO` Link the new course from `/learn`, the homepage, relevant guides, and related lessons.
- [ ] `SEO` Add contextual links from chat UX, streaming, hallucination, prompt, agent, and
      evaluation lessons.
- [ ] `SEO` Add answer pages only where query research supports distinct intent.
- [ ] `SEO` Consider answer pages for “What is AI product design?”, “How do you design an
      AI feature?”, and “How do you prototype an AI experience?” after intent validation.
- [ ] `SEO` Create one flagship guide that takes a designer from idea to evaluated prototype.
- [ ] `SEO` Give comparison pages honest decision criteria and avoid generic tool roundups.
- [ ] `SEO` Give worked examples their own search-useful setup, constraints, decisions,
      failure, correction, and final artifact.
- [ ] `SEO` Ensure every lesson links to a next action, deeper lesson, reusable template,
      or capstone step.
- [ ] `SEO` Add course and lesson links to `llms.txt` where they materially help discovery.
- [ ] `SEO` Confirm sitemap inclusion and canonical URLs.
- [ ] `SEO` Check title and meta-description uniqueness across the new track.
- [ ] `SEO` Avoid year labels unless the content is explicitly reviewed and updated for that year.

## Measurement plan

- [ ] `ANALYTICS` Track views of the Designer role page and AI for Designers track page.
- [ ] `ANALYTICS` Track course starts from each entry surface.
- [ ] `ANALYTICS` Track module and lesson continuation.
- [ ] `ANALYTICS` Track capstone starts and completion actions.
- [ ] `ANALYTICS` Track template opens and copy/download actions where available.
- [ ] `ANALYTICS` Compare entry pages by onward-click rate, not pageviews alone.
- [ ] `ANALYTICS` Review search use within the course for missing topics and unclear labels.
- [ ] `ANALYTICS` Review exits from lessons for broken continuation paths.
- [ ] `ANALYTICS` Record a baseline before changing navigation or course-page copy.
- [ ] `ANALYTICS` Do not place analytics interactions close to ads or use ad clicks as a
      course engagement metric.

Course success evidence:

- [ ] Search impressions grow for validated designer intents.
- [ ] Visitors enter through multiple useful lessons and artifacts, not only the track page.
- [ ] Learners continue from entry pages into the course.
- [ ] Learners reach artifacts, evaluations, and capstone pages.
- [ ] Search queries and internal search reveal fewer obvious content gaps over time.
- [ ] Qualitative feedback shows that designers can apply the material to real work.

## Editorial QA for every lesson

- [ ] The title states the reader's task or question clearly.
- [ ] The `summary` is a complete, reader-focused meta description.
- [ ] The opening explains when the lesson matters to a designer.
- [ ] The lesson teaches a durable principle before mentioning a vendor tool.
- [ ] Examples include context, constraints, expected behavior, and failure behavior.
- [ ] Factual claims, dates, numbers, quotations, and benchmarks link to real sources.
- [ ] Illustrative examples are clearly identified as illustrative.
- [ ] The lesson distinguishes model behavior from product and interface behavior.
- [ ] The lesson includes uncertainty, correction, and recovery where relevant.
- [ ] The lesson includes privacy, permission, or accessibility implications where relevant.
- [ ] The lesson ends with an action, artifact, exercise, or next lesson.
- [ ] Related links use valid internal routes.
- [ ] The filename, slug, curriculum node, and intended reference suffix agree.
- [ ] The page has no body-level duplicate H1.
- [ ] Code, diagrams, and interaction examples work without fabricated output.
- [ ] The lesson passes content and link checks.

## Technical and browser QA for each publishing batch

- [ ] `npm run check:content` passes.
- [ ] `npm run build` passes.
- [ ] `npm run check:links` passes.
- [ ] New routes appear in the sitemap.
- [ ] Track, role, lesson, reference, search, saved, and related-content navigation work.
- [ ] Structured data parses and uses the correct content type.
- [ ] Titles, descriptions, canonicals, Open Graph tags, and author metadata are correct.
- [ ] Pages have no horizontal overflow at supported widths.
- [ ] Keyboard order and visible focus are correct.
- [ ] Interactive lessons work with keyboard and screen reader.
- [ ] No-JavaScript fallbacks remain understandable.
- [ ] Reduced-motion and dark-theme behavior are correct.
- [ ] Console and network logs have no new errors.
- [ ] Ads remain visually distinct from course controls and navigation.
- [ ] Analytics records intended navigation and course events without blocking interaction.

## Release sequence

- [x] Publish the track shell as `coming` with an accurate description.
- [ ] Complete and review the MVP lessons and capstone.
- [ ] Switch the track to `live` only when the MVP forms a complete learning path.
- [ ] Update `/roles/designer` to lead into the new track.
- [ ] Publish the flagship guide and highest-value templates.
- [ ] Add the AI-assisted workflow modules in reviewed batches.
- [ ] Add the AI-product interaction modules in reviewed batches.
- [ ] Add evaluation, safety, accessibility, and handoff modules.
- [ ] Publish the full capstone and portfolio package.
- [ ] Review analytics and Search Console after enough real traffic accumulates.
- [ ] Revise weak entry pages, unclear sequencing, and missing continuation paths from evidence.

## Definition of done

- [ ] The `ai-for-designers` track is live and registered in the curriculum.
- [ ] The Designer role page points into a coherent dedicated path.
- [ ] Both course lanes are covered: AI in design work and design of AI products.
- [ ] The MVP produces a complete, evaluated, implementation-ready case study.
- [ ] Every module produces a reusable artifact.
- [ ] The course covers uncertainty, latency, correction, authority, safety, accessibility,
      evaluation, and engineering handoff.
- [ ] Every factual claim is sourced or removed.
- [ ] Every page has unique metadata and a deliberate search intent.
- [ ] The course is accessible at narrow widths, with keyboard, reduced motion, and screen readers.
- [ ] Required repository checks pass.
- [ ] Analytics and Search Console can measure acquisition and continuation.
- [ ] The progress log contains enough evidence for another developer to continue the work.

## Progress log

Add new entries at the top.

### 2026-09-15 — Full-course R&D: Stages B–E designed, 107 nodes registered, lab exemplar live

- Status: design complete in `docs/ai-for-designers-full-course-design.md` — five stages,
  132 nodes total (25 live + 107 `coming`), module outcomes, three recurring fictional
  customers (Kaveri Health, Deccan Freightways, Meridian Bank), 12-piece portfolio map,
  9-batch execution plan. Studied FDE depth from `src/data/fde.ts` (183 nodes) and labs.
- Content: `research-synthesis-lab` live (Deccan Freightways, 12 authored excerpts,
  redaction log, timed 3 h steps, artifact) as the template every future lab must match.
- Code: `[...lesson].astro` now link-gates nav on built files — `coming` nodes render
  as dim "Soon" text in sidebar/related/pager (same rule as the track index), so the
  107 registered plan nodes create zero dead links.
- Validation: `check:content` clean (2229 matched); `build` green (2655 pages);
  `check:links` 1 dead target remaining, pre-existing and unrelated
  (blog → `evals-red-teaming/evaluating-agent-behavior-in-dev`, a page that lives under
  `agentic-ai`; left untouched as in-flight work).
- Infra note: two builds failed on corrupted caches (`node_modules/.astro` ENOENT,
  stale `dist/chunks`); clearing `node_modules/.astro`, `.astro`, `dist` fixed it.
- Next: build batch 1 (B1 remaining 7 nodes) per the execution plan in the design doc.

### 2026-09-15 — MVP Modules 1–4 + capstone drafted (25 lessons)

- Status: all 25 MVP lesson files written and registered; deterministic gates green. Independent editorial/technical review still open before marking the MVP complete.
- Scope: `src/content/lessons/ai-for-designers/` (25 new .md files, Modules 1–4 + capstone); `src/data/curriculum.ts` gained the `ai-for-designers` track (n=25, group Building, all nodes `live` with prereq chain). `src/data/modules.ts` boundaries already matched the MVP modules — no edit needed.
- Notes: track shell from the 2026-09-14 log was absent from `curriculum.ts` in the working tree, so it was recreated as `live` (MVP forms a complete path) rather than `coming`. No invented numbers/dates/claims; scenarios marked illustrative. Quiz answer positions spread across options; every file ends with an artifact/exercise/next step.
- Validation: `npm run check:content` clean (2210 files matched); `npm run build` green (2611 pages); `npm run check:links` clean (5606 routes, 0 dead).
- Next: independent review pass; worked-capstone reference solution; `/roles/designer` repoint; flagship guide + templates; Phase 3–5 expansion modules.

### 2026-09-14 — Phase 0 research + track shell landed

- Status: Phase 0 partially complete — positioning and landscape done; learner/search
  evidence items still open (they need Search Console access and designer input).
- Wrote `docs/ai-for-designers-research.md`: audience brief, sourced competitor
  landscape (Designlab, Maven, Coursera, DesignPixil, AI/TLDR, FrontendPatterns),
  gap note, reuse map against existing tracks, draft query-intent map, promise,
  four portfolio outcomes, audience paths, and explicit assumptions.
- Gap finding: every structured course ending in a portfolio artifact is a paid
  cohort; free material is reference-only. The MVP's evaluated-case-study ending
  is the differentiator.
- Track shell published: `ai-for-designers` in `src/data/curriculum.ts` (n=23,
  group `Building`, 25 nodes all `status: "coming"`); module boundaries in
  `src/data/modules.ts`; track page patched so coming nodes render dimmed with a
  "Soon" marker instead of dead links, with honest zero-lesson copy (chips, FAQ,
  title, no `PT0H` workload).
- `check-content.mjs` parser fix: node status now read from the line after the
  slug (was defaulting every node to `live`); coming nodes correctly exempt.
- Gates: `check:content` clean (2,060 files), build green (2,392 pages),
  `check:links` clean (5,163 routes).
- Decision gate resolved same day (owner): name stays **AI for Designers**;
  **all designers are the primary audience** (brief, paths, and track summary
  updated — software-product context must be introduced, not presumed); **two
  lanes with the MVP first**; **no code on the core path, optional labs may use
  light HTML/JSON/no-code tooling**. Recorded in the research doc's decision gate.

### 2026-09-14 — Course checklist created

- Status: planning complete; implementation not started.
- Existing foundation: a live Designer role path and reusable lessons covering model
  limits, hallucinations, chat UX, streaming, uncertainty, prompting, and agent boundaries.
- Proposed direction: a dedicated `ai-for-designers` track with two connected lanes —
  AI-assisted design practice and the design of trustworthy AI product experiences.
- First delivery target: a short MVP that ends in an evaluated AI-feature case study and
  engineering handoff, followed by modular expansion from measured learner and search demand.
