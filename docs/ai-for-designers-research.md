# AI for Designers — research and positioning

Phase 0 output for `docs/ai-for-designers-course-checklist.md`. Everything here is
either sourced (link attached), derived from this repository, or explicitly marked
as an assumption. Nothing below should be quoted on the site without its source.

## Audience brief

Owner decision (2026-09-14): **all designers are the primary audience** — product
and UX designers, but also visual, brand, research, content, and interaction
designers on equal footing. The course voice must not assume software-product
context as a given; where material needs that context (state models, handoff),
the lesson has to introduce it rather than presume it.

Consequence: the "visual designer who has never designed software" path is a
first-class requirement, not an edge case — Module 1's mental-model lesson and
the course guide carry the on-ramp.

Two jobs-to-be-done exist, and the course treats them as connected lanes rather
than separate audiences:

1. **Use AI inside design work** — research synthesis, ideation, critique,
   content drafting, prototyping — without letting the tool make the judgment.
2. **Design AI-powered product experiences** — behavior, states, uncertainty,
   recovery, agents and permissions, evaluation, and engineering handoff.

This split is not invented: it is exactly how the paid market is segmented
(see landscape below). The differentiation LMVersity can offer is depth plus
price: a free, self-paced, complete path that ends in an evaluated case study
and an engineer-ready handoff, grounded in how the models actually behave.

## Landscape — what already exists

Sources checked 2026-09-14. Prices/enrolments are omitted unless the source
states them; nothing here is estimated.

| Resource | Type | What it covers | Gap it leaves |
|---|---|---|---|
| Designlab — AI for UX Design | Paid cohort course (4 wks) | AI across the UX workflow: research synthesis, ideation, wireframing, content, usability testing | "Using AI" lane only; not the design-of-AI-products side; paid |
| Designlab — Designing AI Products | Paid cohort course (4 wks) | Patterns, agentic UX, content/prompt craft, trust, oversight; capstone | Paid; cohort-paced; handoff/eval depth unclear |
| Designlab — AI Product Design Certification | Paid multi-part program | Bundles both lanes + capstone | Paid; the existence of the bundle validates our two-lane structure |
| Maven — AI for Product Designers (Xinran Ma) | Paid cohort intensive (2 wks) | Prompting frameworks, AI design tools, case studies, feedback | Paid; workflow lane emphasis; no public curriculum |
| Coursera — Generative AI for UI/UX Design Specialization | 3-course series (audit free / cert paid) | GenAI fundamentals, prompting, tools for ideation/prototyping/testing | Broad and tool-survey shaped; little on AI interaction design depth |
| DesignPixil — AI interface design patterns | Free pattern library | Input, streaming, trust, failure, autonomy patterns | Reference, not a curriculum — no progression, artifacts, or capstone |
| AI/TLDR — AI UX patterns | Free written lessons | Streaming/latency UX, what makes good AI UX | Engineer-oriented; no design artifacts or evaluation method |
| FrontendPatterns — managing AI response states | Free guide | Generation state machine (idle→submitted→thinking→streaming→complete/stopped/error) | Implementation-focused; single topic |

Sources: designlab.com/advanced/ai-for-ux-design-and-product-design,
designlab.com/advanced/designing-ai-products-course,
designlab.com/advanced/ai-product-design-certification,
maven.com/xinran/ai-for-product-designers,
coursera.org/specializations/generative-ai-for-ui-ux-design,
designpixil.com/blog/ai-interface-design-patterns,
ai-tldr.dev/learn/building-ai-apps/ai-ux-patterns/*,
frontendpatterns.dev/guides/managing-ai-response-states.

## Gap note

- Every structured course that ends in a portfolio artifact is a paid cohort.
  The free material is reference (pattern libraries, guides), not an outcome-
  driven curriculum. A free, self-paced path that still ends in an evaluated
  case study + engineering handoff is unoccupied.
- None of the offerings anchor the design work to how models actually behave
  (probability, context, evaluation). LMVersity already teaches that layer —
  the course can reuse it instead of pretending design patterns float free of
  the machinery.
- "Design an AI feature and prove it with an eval set" — the MVP's ending —
  is not a promise any located resource makes. That is the wedge.
- Existing LMVersity coverage is engineering-shaped: `genai-app-dev` already
  teaches streaming UX, chat UX, generative UI, and failure modes at the
  implementation level (see reuse map). The new track must own the design-
  process layer and link into those, not rewrite them.

## Existing-content overlap audit (reuse map, draft)

The `designer` role path already curates eight lessons. For the new track the
rule is: link and reuse; only author the design-process layer that is missing.

Reuse candidates by checklist section:

| Checklist need | Existing lessons to reuse/link |
|---|---|
| Model behavior foundations | `ai-foundations/how-llms-work`, `ai-foundations/what-llms-can-and-cannot-do`, `hallucinations/why-models-hallucinate`, `hallucinations/teaching-models-to-say-i-dont-know` |
| Streaming/waiting states (Phase 4) | `genai-app-dev/streaming-responses-to-the-ui`, `genai-app-dev/why-streaming-changes-perceived-latency`, `genai-app-dev/chat-ux-that-doesnt-feel-broken`, `genai-app-dev/stop-regenerate-and-partial-output`, `genai-app-dev/streaming-failure-modes`, plus the streaming cheatsheet + quiz |
| Generative UI / output (Phase 4) | `genai-app-dev/generative-ui-rendering-components`, `genai-app-dev/streaming-structured-output-into-live-components` |
| Agents/permissions (Phase 4) | `agentic-ai/when-not-to-use-an-agent` (role-path lesson), `agentic-ai` autonomy dial / failure-mode / termination nodes |
| Prompt craft for lane 1 | `prompt-engineering/system-vs-user-prompts` (role-path lesson) and neighbours |
| Engineering handoff (Phase 5) | `genai-app-dev` spec/state-model lessons; SSE/event-model material maps directly onto "API/event mapping" |

Net-new authoring must cover what none of these teach: AI opportunity framing,
the behavior contract as a design artifact, UX evaluation rubrics, Wizard-of-Oz
prototyping, accessibility of live/streaming regions, disclosure/consent, and
the case-study capstone itself.

## Query-intent map (draft — to confirm against Search Console once live)

Intents a designer plausibly searches, mapped to the page that should rank:

| Query shape | Intent | Landing target |
|---|---|---|
| "ai for designers course" / "learn ai for ux" | Find a course | Track page `/learn/ai-for-designers` |
| "designing ai interfaces" / "ai ux patterns" | Pattern reference | Streaming/state lessons + `-cheatsheet` pages |
| "design chatbot ux" / "ai chat design" | Solve a current problem | `designing-chat-ux` reuse link + new behavior lessons |
| "design ai feature case study" / "ai portfolio project" | Portfolio artifact | Capstone + worked example |
| "how to test an ai feature" / "evaluate ai ux" | Method | Eval-rubric + prototype-testing lessons |
| "design agent permissions" / "human in the loop ux" | Specific pattern | Approval-boundaries lesson + agentic reuse |

Assumption (marked): these phrasings are inferred from competitor titles and
pattern-library headings, not from volume data. The checklist's keyword-check
step (Search Console data post-launch; any keyword tool the owner has) should
confirm or reorder before Phase 3 expansion commits to entry pages.

## Course promise (draft)

> A free course for product and UX designers: use AI well inside your own
> design work, and design AI features people can actually trust. Finish with an
> evaluated case study and a handoff your engineers can build from.

## Four portfolio outcomes (draft)

1. **AI opportunity brief** — user problem, proposed role for AI, non-AI
   baseline, value hypothesis, failure costs, decision owner (Module 1).
2. **Behavior contract + state model** — purpose, inputs, outputs, boundaries,
   tone, permissions, escalation; every state including blocked/unsafe/
   cancelled (Module 2).
3. **Trust pattern pass** — uncertainty wording, evidence, correction/undo,
   approval boundary, applied to a real flow (Module 3).
4. **Evaluated case study + engineering handoff** — prototype, scenario set,
   rubric, findings log, revision note, interaction spec (Module 4 + capstone).

## Audience paths (draft — revised for all-designers-equal)

- **Visual/brand/content designer new to software product work** → course guide
  (on-ramp framing) → Module 1 mental model → deterministic-vs-probabilistic
  compared → choose a lightweight capstone brief; skip nothing, but labs stay
  optional.
- **Product/UX designer asked to add AI to a product** → Module 1 opportunity
  brief → Module 2 behavior contract → Module 3 trust patterns → capstone.
- **Experienced designer wanting the fast path** → common-mistakes + compared
  pages as a diagnostic skim → Module 4 evaluation method → capstone.
- **Design lead / PM evaluating team readiness** → cheatsheets + rubric +
  capstone rubric as review artifacts.

## Prerequisites and non-goals (draft)

Prerequisites: working design fundamentals in your own discipline; no code
required; no specific tool purchase. Non-goals: not a model-engineering course
(existing tracks cover that), not a tool review site, not a prompt-tricks
listicle. Optional labs may use light HTML/JSON/no-code tooling where it teaches
the concept better (owner decision, 2026-09-14).

## Assumptions to validate

1. Two-lane structure matches searcher expectation (supported: Designlab sells
   the same split; still an assumption until query data exists).
2. Designers will take a course on a text-first, engineering-adjacent site
   (mitigation: visual specimens + templates in later phases).
3. "Evaluated case study + handoff" is a compelling differentiator (supported:
   no free resource found that offers it; not yet demand-tested).
4. Entry-page search intent clusters around "ai for designers" phrasing —
   to be confirmed with the keyword check before Phase 3 entry pages.

## Decision gate — resolved 2026-09-14

- Track name: **AI for Designers** — confirmed.
- Audience: **all designers equal** — confirmed; brief and paths updated above.
- Lanes: **two lanes, MVP first** — confirmed; MVP leads with lane 2
  (designing AI product experiences), lane 1 expands in Phase 3.
- Code stance: **no code on the core path; optional labs may use light
  HTML/JSON/no-code tooling** — confirmed.
- Entry pages: track page first; entry articles deferred until Phase 3 when
  query data exists — standing recommendation.
- Role integration: add the track to the `designer` role once MVP is live —
  the role path stays lesson-granular until then.
- Templates license: MIT, same posture as the repo's code — proposed.
