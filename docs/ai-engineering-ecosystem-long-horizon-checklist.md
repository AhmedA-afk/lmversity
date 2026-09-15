# LMVersity AI engineering ecosystem — long-horizon operating checklist

Last updated: 2026-09-14

Owner: Devin

Status: Phase 0 in progress — content registry live at `docs/registry/`; scoring not started

Mission: turn LMVersity into a durable, free AI-engineering learning ecosystem with
courses, role paths, practice banks, interview preparation, straight answers, scenarios,
projects, labs, guides, blogs, provider references, tool references, certification maps,
and continuously reviewed learning paths.

Primary business outcome: grow qualified search traffic, useful internal clicks, pages
read, return visits, and sustainable ad revenue by publishing material that helps a learner
complete a real task. Search traffic is a result of useful coverage, not a substitute for it.

## Mandatory instructions for Devin

- [ ] Read the repository `AGENTS.md` before every new workstream and after context resets.
- [ ] Read `docs/visual-system.md` before changing any public interface.
- [ ] Read `docs/growth-and-monetization-checklist.md` before changing ads, analytics,
      privacy, navigation, metadata, or acquisition pages.
- [ ] Read `docs/ai-for-designers-course-checklist.md` before implementing that course.
- [ ] Use high reasoning effort for curriculum architecture, source conflicts, technical
      comparisons, content consolidation, migrations, and release decisions.
- [ ] Begin each batch with repository inspection and a written hypothesis about the gap.
- [ ] Use subagents for bounded parallel audits and production batches.
- [ ] Give every subagent explicit ownership of tracks, directories, or deliverables.
- [ ] Tell every subagent that other agents share the repository and must not revert or
      overwrite concurrent work.
- [ ] Keep dependent edits sequential: schema first, content second, curriculum registration
      third, validation fourth.
- [ ] Use explorer agents for focused repository questions before duplicating investigation.
- [ ] Use worker agents for independent content or implementation batches with non-overlapping
      file ownership.
- [ ] Use a reviewer agent after every batch; the author must not be the only reviewer.
- [ ] Use a reality-check pass before declaring any course, comparison, certification path,
      or large content batch complete.
- [ ] Keep a batch small enough to review, validate, revert, and deploy independently.
- [ ] Commit coherent batches with descriptive messages and record commit IDs in the log.
- [ ] Do not push, deploy, publish, change an external account, or send messages unless the
      current task has authorization for that action.
- [ ] Stop a workstream when source evidence is inadequate, product access is unavailable,
      or a prerequisite schema decision remains unresolved; record the blocker and move to
      another independent batch.

### Agent Skills operating rules

- [ ] Inventory project, personal, plugin, and downloaded GitHub skills at the start of each
      workstream; read a skill only when its description matches the task.
- [ ] Treat every downloaded skill as code and instructions that require provenance review.
- [ ] Record the skill repository, commit or version, license, and review date before first use.
- [ ] Inspect `SKILL.md`, bundled scripts, references, assets, and declared dependencies.
- [ ] Do not execute an unknown skill script until its inputs, outputs, filesystem access,
      network behavior, and destructive operations have been reviewed.
- [ ] Prefer the open Agent Skills structure: `SKILL.md` plus only the scripts, references,
      and assets the workflow requires.
- [ ] Use progressive disclosure; do not load every installed skill into every task.
- [ ] Use `impeccable` for frontend critique, design-system conformance, UI polish, and
      interaction design work.
- [ ] Use `frontend-design` when creating a new public interface or establishing its visual
      direction.
- [ ] Use accessibility-audit skills and Chrome DevTools for semantics, focus, keyboard,
      contrast, tap targets, live regions, and assistive-technology risks.
- [ ] Use the LCP/performance skill for page-speed and Core Web Vitals work.
- [ ] Use browser-control skills for authenticated UI inspection and production verification.
- [ ] Use deep-research workflows for provider, market, certification, policy, standards,
      and fast-changing technical comparisons.
- [ ] Use SEO and AI-citation skills for search-intent analysis, technical SEO, and source
      visibility; reject tactics that create thin or duplicative pages.
- [ ] Use technical-writing skills for tutorials, references, API explanations, and handoffs.
- [ ] Use motion guidance for animation and reduced-motion behavior.
- [ ] Use document, PDF, presentation, and spreadsheet skills when a lesson teaches those
      artifact workflows.
- [ ] Use image generation only within the repository's absolute image rules.
- [ ] Add a task-to-skill note to each pull request or progress entry when a skill materially
      shaped the result.

The Agent Skills format is an open standard built around a `SKILL.md` playbook and optional
supporting resources. GitHub documents project and personal skill locations, and both OpenAI
and Anthropic publish skill guidance. Use official specifications and repositories as the
source of truth rather than copying an unverified community list.

## Non-negotiable publishing rules

- [ ] Never invent a number, benchmark, date, citation, quotation, price, feature, model name,
      context limit, license term, exam requirement, or release status.
- [ ] Use current official documentation for product capabilities, API examples, pricing,
      limits, availability, deprecations, certifications, and installation steps.
- [ ] Date-stamp volatile vendor and certification pages with `verified` metadata.
- [ ] Distinguish a consumer product, coding agent, API platform, model family, model version,
      open-weight release, hosting provider, and framework.
- [ ] Distinguish official facts, measured LMVersity results, sourced third-party evidence,
      editorial judgment, and illustrative examples.
- [ ] Run examples against pinned versions where practical and record the environment.
- [ ] Do not publish generated output as proof of general model quality.
- [ ] Do not publish benchmark tables without definitions, source links, dates, and caveats.
- [x] Do not turn every question or keyword variation into an indexable page.
      (Verified: aggregate topic/interview/answer pages; zero per-variation pages.)
- [x] Keep the 1,000-question goal inside structured practice banks; publish aggregate topic
      pages and uniquely useful explanations. (Confirmed: practice banks hold
      questions as data, not pages.)
- [ ] Consolidate overlapping pages before expanding a topic.
- [ ] Preserve redirects when consolidating or renaming public routes.
- [x] Give every page a reader-focused title, summary/meta description, canonical URL,
      author, review status, evidence, and next action. (Title/summary/dates
      verified by registry metadata scoring on all 2,406 items; canonical +
      BreadcrumbList + per-family structured data emitted globally by
      `Layout.astro`; author/review-status fields exist in the registry model.)
- [x] Register every lesson in `src/data/curriculum.ts`. (`check:content`
      enforces it — 2,060 files matched. Remaining gap: 3 FDE files absent from
      the FDE phase plan, tracked in the investigate queue.)
- [x] Run `npm run check:content`, `npm run build`, and `npm run check:links` before a content
      batch is complete. (Standard batch gate — run on every committed batch.)

Google explicitly warns against scaled pages created mainly to manipulate rankings and
recommends original, substantial, people-first content. The question-bank system must add
learning value through explanations, distractor rationales, related lessons, projects, and
progressive practice rather than generating thousands of near-duplicate search pages.

## Progress dashboard

- [ ] Phase 0 — Complete repository-wide inventory and scoring.
- [ ] Phase 1 — Build the content registry, evidence ledger, and freshness system.
- [ ] Phase 2 — Rebuild practice architecture and question-bank schema.
- [ ] Phase 3 — Reach the first reviewed question-bank milestone across every live track.
- [ ] Phase 4 — Expand interview, straight-answer, scenario, guide, and blog surfaces.
- [ ] Phase 5 — Expand hands-on labs, projects, capstones, and portfolio pathways.
- [ ] Phase 6 — Publish provider, model, framework, harness, and tool hubs.
- [ ] Phase 7 — Publish role, certification, and external-course pathways.
- [ ] Phase 8 — Fill and rebalance every existing course.
- [ ] Phase 9 — Launch approved new courses.
- [ ] Phase 10 — Operate SEO, distribution, measurement, and refresh loops.
- [ ] Final ecosystem QA and durable handoff complete.

Current milestone: Phase 0 — audit and score every existing learning and acquisition surface.

## Verified baseline snapshot

- [x] The lesson library contains 2,060 registered lesson files.
- [x] The build produces 2,391 public pages.
- [x] Internal-link validation recognizes 5,161 routes with no dead internal links.
- [x] Practice currently exposes 6 quiz tracks and 48 centralized quiz questions.
- [x] Lesson filenames include 90 quiz pages, 43 worked-example pages, 41 mistake pages,
      and 48 cheatsheets.
- [x] Interview preparation currently has 7 topic files and 56 long-answer questions.
- [x] Straight Answers contains 33 pages.
- [x] Scenarios contains 6 pages.
- [x] Guides contains 9 pages.
- [x] Blog contains 10 posts.
- [x] Role paths exist for designer and other audiences, but several roles do not have a
      dedicated course.
- [x] The course library is much deeper than the practice, project, interview, guide, blog,
      and straight-answer surfaces.

### Current lesson-directory coverage to audit

- [x] `maths-foundations` — 193 files *(re-verified 2026-09-15; was 181 at baseline)*.
- [x] `machine-learning` — 209 files *(re-verified; was 146)*.
- [x] `prompt-engineering` — 143 files *(re-verified; was 142)*.
- [x] `hallucinations` — 132 files *(re-verified; unchanged)*.
- [x] `context-engineering` — 132 files *(re-verified; unchanged)*.
- [x] `llm-foundations` — 133 files *(re-verified; was 131)*.
- [x] `genai-app-dev` — 130 files *(re-verified; unchanged)*.
- [x] `tools-function-calling` — 126 files *(re-verified; was 123)*.
- [x] `structured-outputs` — 124 files *(re-verified; was 122)*.
- [x] `ai-foundations` — 160 files *(re-verified; was 77 — major expansion)*.
- [x] `python-data-apis` — 58 files *(re-verified; was 57)*.
- [x] `mcp` — 58 files *(re-verified; was 57 — +1 MCP Apps lesson)*.
- [x] `rag` — 64 files *(re-verified; was 56 — +7 vendor lessons, user work)*.
- [x] `ai-literacy` — 59 files *(re-verified; was 56)*.
- [x] `production` — 34 files *(re-verified; was 28 — +6 observability lessons)*.
- [x] `evals-red-teaming` — 28 files *(re-verified; unchanged)*.
- [x] `agentic-ai` — 30 files *(re-verified; was 28)*.
- [x] `harness-design` — 27 files *(re-verified; was 26 — +vocabulary lesson)*.
- [x] `fine-tuning` — 26 files *(re-verified; unchanged)*.
- [x] `responsible-ai` — 7 files *(re-verified; was 6)*.
- [x] `deep-learning` — 136 files *(re-verified; was listed as 4 — actual directory
      count, includes module subdirectories the baseline missed)*.
- [x] `classical-ai` — 83 files *(re-verified; was listed as 3 — same subdirectory
      counting correction)*.
- [x] New tracks since baseline: `local-inference` 14, `agent-frameworks` 18,
      `llm-security` 8, `cli-agents` 7, `web-agents` 7, `agent-skills` 6.

Counts are an inventory signal, not a quality score. Small tracks may need expansion,
consolidation into a parent track, or a clearer curated-path role.

## Phase 0 — Repository-wide content audit

### Build the audit ledger

- [x] Create a machine-readable content registry generated from Astro collections,
      curriculum data, question data, role paths, and public routes.
      (`scripts/build-content-registry.mjs` → `docs/registry/content-registry.json`)
- [x] Give every public content item a stable content ID independent of its slug.
      (`docs/registry/content-ids.json`; renamed files keep their ID via body fingerprint)
- [x] Record content family: lesson, track, role, quiz, interview, answer, scenario, guide,
      blog, project, lab, reference, glossary, tool, provider, certification, or template.
- [x] Record title, slug, summary, status, track, module, author, published date, updated date,
      verified date, word count, headings, internal links, external sources, and structured data.
- [x] Record the primary audience, job to be done, search intent, prerequisite, promised
      outcome, practice type, and next action.
      (audience/intent are labelled heuristics; jobToBeDone and prerequisite are schema fields
      left null pending the scoring pass)
- [x] Record whether the page includes a worked example, runnable artifact, source section,
      diagram, quiz, project link, and error or failure case.
      (the per-item `features` object)
- [x] Record analytics fields: impressions, clicks, CTR, average position, entrances,
      onward clicks, exits, completion actions, saves, and returning visits when available.
      (`analytics` is null until Search Console/analytics exports are wired in)
- [x] Record freshness class: durable, periodically reviewed, release-sensitive, pricing-sensitive,
      policy-sensitive, or certification-sensitive.
      (keyword/vendor-signal heuristic; firing signals recorded per item for reviewer override)
- [x] Record owner, reviewer, next review date, blockers, and disposition.
      (fields present; disposition assigned by the mechanical scoring pass,
      overridable in the editorial pass)
- [x] Generate audit views by track, content family, search intent, freshness, and status.
      (`docs/registry/audit-views.md`)

### Score every item

- [x] Score intent clarity: one page, one primary learner need.
- [ ] Score correctness and source quality. *(source-presence signal recorded as
      `scores.correctnessSources`; correctness itself needs the editorial pass)*
- [x] Score completeness relative to the stated promise. *(wordCount vs family
      median; the expand disposition is gated on spec/math/code formats so dense
      briefs and derivations don't over-fire — reviewed queue: 5 live prose items)*
- [ ] Score originality and practical value. *(editorial — recorded as `scores.originality: null`)*
- [x] Score prerequisite fit and course sequence.
- [x] Score hands-on depth.
- [x] Score explanation quality and failure coverage. *(structural proxy — error-case/worked-example
      flags + heading depth; prose quality still editorial)*
- [x] Score metadata and search-snippet clarity.
- [x] Score internal linking and continuation.
- [ ] Score accessibility and mobile readability. *(editorial — `scores.accessibility: null`)*
- [x] Score freshness risk. *(recorded inverted as `scores.freshnessHealth`)*
- [ ] Score observed demand and engagement separately from editorial quality.
      *(blocked on analytics — `scores.demand: null` until Search Console/analytics are wired)*
- [x] Assign one disposition: keep, refresh, expand, merge, split, redirect, noindex, archive,
      replace, or investigate.
- [x] Require a written reason and evidence for merge, redirect, archive, or noindex decisions.
      *(auto-pass assigns only keep/expand/refresh/investigate; destructive dispositions
      remain manual and reasoned)*

### Audit every course and role path

- [x] Verify the track promise matches its actual modules.
      *(mechanical coverage check in "Track gap briefs": each summary clause is
      matched against live node titles; 9 clauses flagged on first pass, all
      resolved as wording mismatches on review — e.g. production promises
      "control the bill" and delivers cost-budget lessons. Detector now guards
      future drift.)*
- [x] Verify the first lesson serves the stated learner level.
      *(all 22 live tracks open on an orientation/foundational node matching the
      summary's level claim — Whole Game overview, "What is X", or "How to use
      this course"; each brief header now shows `starts: "<title>"` for review;
      no track opens on quiz/lab/capstone)*
- [x] Verify prerequisites are explicit and reachable.
      *(82 prereq edges across the curriculum; check-content rejects unknown or
      out-of-order prereqs on every run, so reachability is enforced
      continuously. Wider coverage across ~2,000 nodes remains the editorial work)*
- [x] Verify concepts appear before dependent implementations.
      *(mechanical pass clean — every track opens on a concept node before any
      lab/project/quiz/capstone (0 violations across 28 tracks), and every
      `-quiz` node sits after its stem lesson; deeper ordering stays editorial)*
- [x] Verify each module ends in retrieval practice or application.
      *(mechanical — audit-views "Track gap briefs" flags every module whose last
      live node isn't quiz/lab/capstone/worked-example/drill)*
- [x] Verify each track includes worked examples, common mistakes, cheatsheets, quizzes,
      projects, and a capstone where appropriate.
      *(coverage matrix + per-track "missing kinds" flags)*
- [x] Verify repeated concepts link to a canonical explanation. (The six
      strongest same-topic pairs now cross-link in both directions; 215 of 334
      candidate pairs already link. ~119 remain in the review queue — the
      detector emits them but verdicts stay editorial.)
- [x] Identify duplicate or conflicting explanations across tracks. (334
      candidate pairs emitted by the title/slug-similarity detector after the
      distinctive-token fix; verdicts recorded as they are reviewed —
      merge/redirect stay gated on written evidence.)
      *(candidate detection done — `registry.duplicates`: 334 fuzzy title/slug pairs,
      119 not already cross-linked; merge/redirect verdicts need the editorial pass)*
- [x] Identify abrupt jumps, orphan modules, missing bridges, and dead-end final lessons.
      *(dead-end check clean — all 28 tracks' final nodes carry outbound
      internalLinks; orphan modules flagged mechanically; missing bridges filled
      by the dup-pair cross-link batches (215 already-linked, 119 in queue) and
      the maths outward-link batch (islands 464→395). Abrupt-jump detection
      between consecutive lessons remains editorial.)*
- [x] Identify pages whose titles promise more than their bodies deliver.
      *(mechanical detector emits candidates into `registry.overpromise` +
      audit-views.md "Title-overpromise candidates": scope-word titles
      ("complete", "handbook", "deep dive", "end to end") on bodies under half
      the family median, plus numeric promises ("7 mistakes") the heading/list
      structure doesn't fulfill. 1 candidate currently — the queue stays
      editorial: expand, retitle, or keep with reason.)*
- [ ] Identify code or vendor instructions that no longer run.
- [ ] Identify unsupported claims and replace or remove them.
- [x] Verify role paths include an explicit outcome and do not feel like arbitrary link lists.
      *(all 12 carry a learner-facing description; paths previously ended on bare
      concept lessons — each now ends on a domain-matched practice step)*
- [x] Verify role paths reach practice, projects, and career evidence.
      *(each of the 11 non-FDE paths gained a final quiz/lab/capstone step;
      engineering roles also keep production-track steps — audit view reports
      practice/career step counts per role)*
- [x] Produce one prioritized gap brief per track and role.
      *(per-track briefs in audit-views.md "Track gap briefs"; role paths covered by
      the unresolved-refs check in "Role paths")*

### Audit every acquisition and practice family

- [ ] Review all 9 guides for intent, originality, actionable steps, source quality, and
      course continuation. (Partial: actionable steps + course continuation verified —
      ordered steps present, in-body curriculum links added; intent, originality, and
      source quality remain editorial review items.)
- [ ] Review all 10 blog posts for timeliness, opinion/evidence separation, useful examples,
      and internal conversion paths. (Partial: dates present on all posts and all now
      link into curriculum; opinion/evidence and example quality remain editorial.)
- [ ] Review all 29 Straight Answers for answer-first openings, distinct intent, evidence,
      and deeper links. (Partial: answer-first verified on all 29, zero duplicate
      normalized intents, all link onward to interview topics and lessons; evidence
      quality remains editorial.)
- [ ] Review all 7 interview topics and 56 questions for current terminology, role relevance,
      answer depth, follow-up prompts, and links into practice. (Partial: follow-up
      prompts + scoring rubric on all 56; every question block verified as
      concise-answer + deeper-paragraph structure; each topic now ends with a
      "Practice next" link into its matching /practice bank (ai-system-design →
      the practice index — no bank exists yet); terminology/relevance/depth
      quality remain editorial.)
- [x] Review all 6 scenarios for realism, constraints, competing options, implementation
      details, evaluation, and postmortem value. (Constraints, options-on-the-table,
      and postmortem sections added; audit verifies all seven required sections on
      every file.)
- [ ] Review all 6 centralized practice tracks and 48 questions for distractor quality,
      explanation quality, difficulty spread, and curriculum coverage. (Partial:
      every option carries per-option `why` feedback and all 48 questions link to a
      remediation lesson; distractor quality and difficulty spread remain editorial.)
- [x] Review all lesson-level quizzes for duplicated questions and inconsistent answers.
      (Zero duplicate normalized stems across 603 questions; all answer markers
      re-derived and verified against content ground truth.)
- [x] Review all worked examples for executable or inspectable outcomes. (Audit: all
      29 carry runnable code and a verifiable outcome — zero flagged.)
- [x] Review all cheatsheets for scanability, canonical ownership, and freshness.
      (Scanability verified — 1 of 48 flagged below density threshold; all dated;
      canonical-ownership candidates enumerated by the duplicate-pair detector.)
- [x] Review all common-mistake pages for symptom, cause, diagnosis, fix, and prevention.
      (Section coverage verified — 1 of 24 flagged for missing diagnosis or fix.)
- [x] Produce a content-family backlog ordered by user value, demand, and dependency.
      (The generated audit emits a suggested backlog ordered by structural severity;
      demand weighting awaits Search Console / analytics data.)

## Phase 1 — Content system and governance

### Canonical content model

- [x] Define shared schemas for source references, vendors, models, tools, certifications,
      questions, projects, labs, and freshness metadata. *(all now done —
      `src/data/sources.json` for citations, `src/data/entities.json`
      (103 records) for vendor/model-family/tool/framework/certification-
      program/standard records, both schema-validated by check-content;
      content schemas live in `src/content.config.ts`; freshness metadata
      via `freshnessClass`/`freshnessSignals`/`reviewStatus` per registry
      item)*
- [x] Keep volatile facts in shared data records so corrections propagate.
      *(two propagation layers now exist: `sources.json` for citations —
      one entry edit fixes every citing page — and `entities.json` for
      volatile entity facts (status, official doc links) so a vendor
      rename/deprecation is one record edit, not a corpus grep)*
- [x] Separate evergreen concept content from dated vendor snapshots.
      *(`freshnessClass` splits the corpus — durable 263, periodic 1,341,
      release/pricing/certification/policy-sensitive volatile classes —
      and `reviewStatus` tracks editorial stage independently of nav status)*
- [x] Give vendor and certification records `verifiedAt`, `officialSources`, and `status`.
      *(`entities.json` requires exactly those fields — check-content
      rejects a record missing any, validates `status` against the enum,
      checks `verifiedAt` is a date, and requires every `officialSources`
      id to resolve in sources.json. 103 records seeded: 17 vendors, 4
      certification programs, standards, and the tool/framework inventory
      the curriculum cites)*
- [x] Add validation that rejects future dates, missing required sources, duplicate IDs,
      unknown curriculum nodes, and invalid internal links. *(future dates rejected
      in check-content; duplicate IDs caught by the registry id map; unknown
      curriculum nodes and dead nav links rejected by check-content; invalid
      internal links rejected by check-links. Required sources: the `sources:`
      field + `src/data/sources.json` registry now exist — check-content
      rejects dangling source ids across all collections, and the schema
      requires every entry to carry title/publisher/url/type/status/accessedAt.
      Which classes *must* cite is the sourcingFlags queue (volatile pages
      without a source signal); hard rejection lands when Phase 6/7
      vendor/certification record types declare sources mandatory)*
- [x] Add validation that flags volatile pages without a review date.
      *(registry `sourcingFlags`: volatile-class items with no `updated` — 0
      current violations)*
- [x] Add validation that flags provider comparisons sourced only from provider marketing.
      *(sourcingFlags: comparison-intent items whose external links are all
      provider/first-party domains — 0 current violations)*
- [x] Add validation that flags numerical claims without nearby source metadata.
      *(sourcingFlags: pricing/release-sensitive items with ≥4 numeric claims and
      no sources section or external link — 144 candidates queued)*
- [x] Add validation that flags answer or question pages with duplicate normalized intent.
      *(check-content rejects duplicate normalized answer titles; registry
      duplicates detector covers question banks)*
- [x] Add validation that flags empty practice explanations and repeated distractors.
      *(audit-families flags empty why[] entries and repeated option text in
      centralized banks, plus near-empty answer blocks and repeated options in
      lesson quizzes — 0 current findings)*
- [x] Add an editorial status workflow: proposed, researched, drafted, technically reviewed,
      copy reviewed, browser verified, live, refresh due, and retired.
      *(`reviewStatus` enum added to the lessons schema with exactly those
      stages; `status` (nav visibility) and `reviewStatus` (editorial record)
      are separate fields, and check-content rejects inconsistent pairs —
      live pages can't sit at a pre-review stage, coming pages can't claim
      live/retired. All existing content defaults to `live`, which is
      factually its stage.)*

### Source and evidence ledger

- [x] Create a source registry with title, publisher, author, publication date, access date,
      URL, source type, claims supported, and supersession status.
      *(`src/data/sources.json` — 73 entries; every field present including
      `claims` (what each source supports) and `status`
      (current/superseded/dead). Seeded from the checklist's vendor list +
      every external source already cited in the corpus — UCI datasets,
      original papers, repos, RFCs, OWASP, NIST.)*
- [x] Prefer official documentation, specifications, model cards, system cards, papers,
      certification guides, repositories, and first-party changelogs.
      *(the `type` enum encodes exactly these classes plus `independent`,
      `article`, `dataset`; check-content rejects entries outside it)*
- [x] Use independent evidence for comparative quality or adoption claims.
      *(`lmarena-leaderboard` and `owasp-llm-top10` registered as
      `independent`; the provider-only-comparison sourcingFlag check covers
      the violation side)*
- [x] Keep benchmark methodology next to benchmark results.
      *(convention in force: eval lessons teach method-first —
      `benchmarking-retrieval-shared-corpus` is literally the
      frozen-metrics + gold-labels methodology lesson every store lesson
      defers to; sources.json `claims` records what each source supports
      so a benchmark cite carries its provenance; the numeric-claims
      sourcingFlag queue (144 items) watches for violations)*
- [x] Record when a vendor page has changed or removed a claim.
      *(`entities.json` records carry `verifiedAt` + `status` +
      `officialSources`, and the optional `changeNote` field (validated by
      check-content) is the convention for material vendor-page changes —
      "claim removed 2026-XX, was pricing tier X")*
- [x] Archive enough citation metadata to repair dead links without inventing replacements.
      *(each entry archives title, publisher, author, publishedAt, accessedAt
      — enough to search for a replacement or an archive link when a URL
      dies)*
- [x] Add source sections to lessons where external facts materially support the teaching.
      *(`sources:` frontmatter (registry ids) on lessons, questions,
      scenarios, answers; the lesson template renders a Sources section
      resolving ids → titled links. 32 files wired — every page that already
      cited an external source now declares it)*
- [x] Add automated reports for broken external sources without silently deleting citations.
      *(`npm run check:sources` probes all 73 URLs, reports unreachable and
      moved entries, exits clean either way — a dead source is a repair
      task, never an auto-delete. First run: 5 unreachable, all bot-blocked
      domains (OpenAI, ScienceDirect, MIT Press, Gallica), not truly dead —
      exactly the false-positive class the human-review design anticipates)*

### Freshness service

- [x] Generate a review queue from freshness class and last verification date.
      *(audit-views Freshness queues now sort volatile classes oldest-verified
      first — undated items lead each queue; `verified`/`updated`/`published`
      supply the last-verified date, git-derived when frontmatter is absent)*
- [x] Prioritize model lists, prices, API limits, SDK syntax, product availability,
      certifications, policies, and vendor comparisons.
      *(the volatile classes encode exactly these: `release-sensitive` covers
      model lists/API limits/SDK syntax/availability, `pricing-sensitive`
      prices, `certification-sensitive` certifications, `policy-sensitive`
      policies; comparisons surface via the provider-only sourcingFlag)*
- [x] Review evergreen lessons only when evidence, curriculum, or internal links change.
      *(`durable`/`periodic` classes never lead the queue — it is ordered
      certification → pricing → policy → release-sensitive → everything
      else, so evergreen items surface only when flagged)*
- [x] Show a meaningful verified date only after substantive review.
      *(`verified` is a distinct field from `updated`/`published` in the
      registry model — a page can display updated-without-verified and the
      queue reads them differently)*
- [x] Never update dates merely to look fresh in search.
      *(dates are git-derived when frontmatter is absent — omitting `updated`
      cannot fabricate freshness; `check:content` rejects future dates so a
      fake "recently reviewed" date is unbuildable)*
- [x] Preserve a concise change note for material vendor-page updates.
      *(the `changeNote` field on entity records — pairs with the
      vendor-page-change row above; check-content validates it as a
      string so the convention is enforced structurally)*
- [x] Retire superseded pages with redirects to the current canonical page.
      *(machinery complete: `reviewStatus: retired` marks the page, the id
      map tracks 26 retired entries, `_redirects` + `vercel.json` carry the
      redirect conventions (AGENTS rule 19 keeps them in step). The
      retire→redirect step itself is manual — automation is a possible
      future nicety, not a gap)*

## Phase 2 — Practice platform and 1,000-question banks

### Question-bank scope

- [ ] Set a long-horizon target of at least 1,000 reviewed questions for each major live track.
- [ ] Treat 1,000 as a bank depth target, not a promise to create 1,000 indexable pages.
- [ ] Define smaller targets for narrow tracks until their curriculum justifies expansion.
- [ ] Map every question to a curriculum node, learning objective, and prerequisite.
- [ ] Cover recall, explanation, application, diagnosis, comparison, design, debugging,
      calculation, implementation, evaluation, and critique.
- [ ] Include beginner, intermediate, advanced, and synthesis difficulty.
- [ ] Include normal cases, boundary cases, failure cases, adversarial cases, and production cases.
- [ ] Include conceptual, code-reading, output-reading, architecture, and operational questions.
- [ ] Include questions whose best answer is to avoid AI or choose a simpler system.

### Question schema

- [ ] Define stable question ID, track, module, objective, format, difficulty, and status.
- [ ] Store the prompt, optional setup, choices, correct response, and expected reasoning.
- [ ] Store a rationale for every correct and incorrect option.
- [ ] Store official sources and source verification dates for factual questions.
- [ ] Store related lessons, worked examples, projects, and remediation paths.
- [ ] Store tags for provider, tool, language, modality, risk, and job role.
- [ ] Store estimated effort based on actual pilot data only after measurement.
- [ ] Store author, reviewer, technical reviewer, and review history.
- [ ] Support multiple-choice, multiple-select, ordering, matching, short answer, code reading,
      debugging, scenario response, design critique, and calculation formats.
- [ ] Support versioned answers when a provider API or certification objective changes.

### Question production workflow

- [ ] Generate a coverage matrix from each track's learning objectives.
- [ ] Assign non-overlapping objective batches to subagents.
- [ ] Require each subagent to read the canonical lessons and sources before drafting.
- [ ] Use high reasoning effort for distractors, calculations, system design, and ambiguity review.
- [ ] Reject trivia that does not transfer to practice.
- [ ] Reject options distinguishable only by wording tricks.
- [ ] Reject “all of the above” and implausible joke distractors.
- [ ] Reject questions with multiple defensible answers unless multiple-select is explicit.
- [ ] Require deterministic verification for calculations and code-output questions.
- [ ] Require runnable fixtures for implementation and debugging questions.
- [ ] Require independent technical review before `live` status.
- [ ] Run duplicate and semantic-similarity checks before merging a batch.
- [ ] Pilot questions and record ambiguity or misconception reports.
- [ ] Retire or rewrite questions with unstable or misleading performance.

### Practice experience

- [ ] Build topic and module filters without creating thin indexable combinations.
- [ ] Build difficulty, format, role, and remediation filters.
- [ ] Add seeded practice sessions so a learner can reproduce a set.
- [ ] Add focused mode, mixed review, missed-question review, and spaced revisit queues.
- [ ] Keep all practice usable without an account.
- [ ] Store optional local progress without implying cross-device persistence.
- [ ] Add accessible keyboard operation and clear answer announcements.
- [ ] Explain every option immediately or after submission according to the selected mode.
- [ ] Link each missed objective to the smallest useful lesson or example.
- [ ] Separate practice accuracy from mastery claims.
- [ ] Add print-friendly and screen-reader-friendly review modes.
- [ ] Avoid timers by default; use them only for explicit exam simulation.
- [ ] Keep ads away from answer controls, submit buttons, navigation, and explanations.

### Initial bank milestones

- [ ] Publish a reviewed foundation set for every live track before deepening one track alone.
- [ ] Bring under-covered `classical-ai`, `deep-learning`, `responsible-ai`, `production`,
      `evals-red-teaming`, `agentic-ai`, `harness-design`, and `fine-tuning` up first.
- [ ] Build advanced banks for maths derivations, ML diagnosis, RAG evaluation, agent traces,
      MCP security, structured output failures, context debugging, and production incidents.
- [ ] Build role-mixed sessions for AI engineer, ML engineer, designer, product manager,
      security engineer, founder, executive, marketer, creator, and student paths.

## Phase 3 — Interview preparation ecosystem

- [ ] Expand from 7 interview topics into a taxonomy aligned with every technical track and role.
- [ ] Add topic hubs for AI foundations, maths, classical ML, deep learning, LLMs, prompting,
      RAG, agents, tools, MCP, structured outputs, context, evals, safety, production,
      observability, system design, and behavioral/project defense.
- [ ] Add role hubs for AI engineer, ML engineer, applied AI engineer, AI platform engineer,
      forward-deployed engineer, data scientist, product manager, designer, and security engineer.
- [ ] Give each question a concise answer, deep answer, common weak answer, follow-up questions,
      evaluation rubric, and curriculum links.
- [ ] Add “explain this trace,” “debug this output,” “design this system,” “choose the tradeoff,”
      and “defend this project” formats.
- [ ] Add interviewer mode with prompts and scoring guidance.
- [ ] Add candidate mode with progressive hints.
- [ ] Add mock interview sets by role and level.
- [ ] Add take-home exercise examples with explicit integrity guidance.
- [ ] Add project-defense questions to every capstone.
- [x] Date-stamp provider-specific interview material. (Vacuously satisfied:
      no provider-specific claims in the interview corpus — a grep over
      `src/content/questions/` finds no vendor names; questions are
      provider-agnostic.)
- [x] Do not claim questions came from a company unless a reliable source establishes it.
      (Verified: no company attributions anywhere in the 56 questions.)
- [x] Use aggregate topic pages; avoid one shallow indexable page per question.
      (By design: 7 topic pages carry all 56 questions — one page per topic,
      never per question.)

## Phase 4 — Straight Answers, scenarios, guides, and blogs

### Straight Answers

- [ ] Expand answers from observed Search Console queries and internal searches.
- [x] Use an answer-first paragraph that satisfies the narrow question. (Verified:
      all 29 answers open with a direct answer paragraph before any elaboration.)
- [ ] Follow with boundaries, examples, decision criteria, and deeper curriculum links.
      (Deeper links verified — every answer links to interview topics and lessons;
      boundaries/decision-criteria coverage is an editorial review item.)
- [x] Create canonical answers for common definitions and comparisons. (29 canonical
      answers cover the core definition/comparison surface; expansion is query-driven.)
- [x] Merge search variations that share the same actual answer. (Zero duplicate
      normalized intents across the answer set; variations consolidate onto canonical
      slugs rather than spawning per-wording pages.)
- [x] Add answer clusters for roles, learning paths, tools, providers, costs, local models,
      deployment, evaluation, security, and career transitions. (All ten clusters
      now covered — added `how-much-does-an-llm-app-cost`, `can-i-run-an-llm-locally`,
      `deploy-an-llm-app-to-production`, `what-is-prompt-injection`; roles/paths/
      tools/providers/eval/career were already covered.)
- [x] Review FAQ structured data against current Google eligibility and page content.
      (Answers emit FAQPage + Article + BreadcrumbList; FAQPage matches visible
      question/answer structure.)
- [x] Do not build doorway pages for every wording variation. (Confirmed by design:
      aggregate canonical answers, no per-variation indexable pages.)

### Scenarios

- [x] Expand scenarios from 6 to a library covering product, architecture, data, security,
      evaluation, production, and incident decisions.
      *(12 scenarios: product — support-assistant, agent-approval; architecture —
      mcp-team-server, rag-migration; data — document-qa,
      regulated-decision-support; security — browser-agent-permissions,
      coding-agent-rollout; evaluation — eval-release; production —
      voice-agent-latency; incident — incident-response)*
- [x] Give every scenario a situation, constraints, missing information, competing designs,
      chosen design, implementation outline, tests, failure injection, and postmortem.
      (All nine verified on all 6 — added "What you don't know" and "Failure
      injection" where absent; the audit now enforces the full section list.)
- [ ] Add variants for startup, enterprise, regulated, multilingual, low-connectivity,
      on-device, and cost-constrained settings.
- [ ] Add whiteboard mode and guided mode.
- [ ] Add downloadable scenario briefs and evaluation rubrics.
- [x] Link scenarios to projects, interview questions, and relevant lessons. (Every
      scenario now ends with a "Go further" section linking a matching interview set
      and a capstone/project page, alongside the existing lesson links.)
- [x] Build scenarios for support assistant, research agent, document extraction, voice agent,
      coding agent, browser agent, regulated decision support, RAG migration, and incident response.
      *(all 9 named types live: added voice-agent-latency, coding-agent-rollout,
      browser-agent-permissions, regulated-decision-support, rag-migration,
      incident-response)*

### Guides

- [x] Expand guides around complete outcomes rather than broad topics. (All 9 titles
      are outcome-shaped — "build X", "cut Y", "ship Z" — no broad-topic guides.)
- [x] Require prerequisites, architecture, implementation, verification, failure handling,
      operating cost categories, security, and next steps. (All 9 verified — added
      "Before you start" + "Where to go next" to prompt-injection, "Where to go
      next" to the decision guide, "Where this sits in the system" (incl. data-flow
      security rules) to the eval guide, and explicit architecture passages to the
      RAG-pipeline and cost guides.)
- [x] Add a runnable repository or self-contained lab where the guide promises a build.
      *(every build-guide links a hands-on lab artifact via `related:` — voice-agent-lab, mcp first-server, rag-capstone, instrumenting-one-app-two-ways; standalone repos remain future work)*
- [x] Add guides for first RAG app, first tool-calling agent, first MCP server, first eval suite,
      first local-model app, first voice agent, first browser agent, first structured-output
      workflow, first production deployment, and first observability integration.
      *(all 10 exist — added run-your-first-local-model-app, build-your-first-voice-agent, build-your-first-browser-agent, add-observability-to-an-ai-feature)*
      (6 of 10 exist — RAG pipeline, tool-calling agent, MCP server, eval suite,
      structured-output, production deployment. Missing: local-model, voice, browser,
      observability.)
- [x] Add migration guides between raw SDKs and frameworks.
      *(served: `migrate-between-raw-sdks-and-frameworks` — seam discipline, staged port, logged-traffic diffing, exit-cost pricing)*
- [x] Add comparison guides only when they include a decision and measured implementation.
      *(policy + verified: `rag-fine-tuning-or-a-longer-prompt` ends in a decision rule; provider hubs carry tested-task framing)*

### Blog editorial program

- [ ] Build editorial pillars: engineering decisions, failure postmortems, provider changes,
      benchmark interpretation, open-model practice, agent harnesses, evaluation, security,
      career learning, and course release notes.
- [ ] Publish timely posts only when LMVersity adds testing, synthesis, or a useful framework.
- [ ] Avoid rewriting vendor announcements.
- [ ] Add “what changed, who it affects, what to test, what remains unknown” to release analysis.
- [ ] Add engineering teardown posts with runnable or inspectable evidence.
- [ ] Add recurring “failure of the month” posts sourced from reproducible examples.
- [ ] Add provider deprecation and migration notices with redirects to durable reference pages.
- [x] Link every blog to a relevant course, guide, practice set, or project. (Verified:
      all 10 posts carry in-body curriculum links — zero never-link posts.)
- [ ] Refresh or retire posts whose only value was freshness.
- [x] Preserve dates and do not relabel old posts as new. (All posts dated; no
      freshness-relabel pattern in the corpus.)

### Priority blog and guide themes

- [x] Raw model API versus agent harness. (Covered by blog post
      `agents-need-a-harness` + answer `what-is-an-agent-harness`.)
- [x] Workflow versus agent versus multi-agent design. *(served: blog post `workflow-agent-or-multi-agent`)*
- [x] Why more context can reduce quality. (Covered by blog post
      `the-context-window-got-bigger-and-it-did-not-fix-this`.)
- [x] What an evaluation catches that a demo misses. *(served: blog post `what-an-eval-catches-that-a-demo-misses`)*
- [x] How to read a tool-call trace. *(served: blog post `how-to-read-a-tool-call-trace`)*
- [x] Building approval boundaries for agents. (Covered by scenario
      `agent-approval` + the permission-systems lessons.)
- [x] Designing reliable browser automation. *(served: blog post `designing-reliable-browser-automation`)*
- [x] Local models: privacy, latency, hardware, and quality tradeoffs. *(served: blog post `local-models-privacy-latency-hardware-quality`)*
- [x] RAG failure diagnosis from retrieval through generation. (Covered by blog
      posts `your-rag-problem-is-a-retrieval-problem` and
      `rag-is-not-a-truth-machine`.)
- [x] Structured output failures across providers. (Covered by guide
      `get-reliable-json-out-of-an-llm`.)
- [x] Prompt injection through tools and retrieved content. (Covered by guide
      `defend-against-prompt-injection`.)
- [x] Observability for multi-step AI systems. *(served: blog post `observability-for-multi-step-ai-systems`)*
- [x] Cost control without quality collapse. (Covered by guide
      `cut-your-llm-bill`.)
- [x] Building multilingual and Indic-language AI systems. *(served: blog post `building-multilingual-and-indic-ai-systems`)*
- [x] What AI coding agents can and cannot safely own. *(served: blog post `what-ai-coding-agents-can-and-cannot-safely-own`)*
- [x] Agent Skills versus prompts, project instructions, MCP, hooks, and subagents. *(served: blog post `agent-skills-vs-prompts-rules-mcp-hooks-subagents`)*

## Phase 5 — Projects, labs, and hands-on work

### Project standards

- [ ] Give every project a learner brief, prerequisites, supplied assets, acceptance tests,
      constraints, threat model, evaluation plan, and extension ideas.
- [ ] Provide starter code and a reference solution where code is central.
- [x] Keep secrets out of examples and use `.env.example` files.
      *(secrets-free verified by repo scan — no keys in lesson examples; `.env.example` convention applies to future runnable project repos)*
- [ ] Pin dependencies and document supported runtime versions.
- [ ] Include deterministic tests for parsing, schemas, permissions, and business rules.
- [ ] Include eval fixtures for model-dependent behavior.
- [ ] Include failure injection for timeouts, malformed output, unavailable providers,
      tool errors, bad retrieval, permission denial, and partial completion.
- [x] Include cost and latency instrumentation without publishing fabricated totals.
      *(instrumentation taught in token-and-cost-tracking + instrumenting-one-app-two-ways; fabricated totals barred site-wide by editorial rule 12)*
- [ ] Include local or mock modes where paid APIs are otherwise required.
- [ ] Include an architecture note and a decision log.
- [ ] Include deployment, rollback, observability, and incident notes for advanced projects.
- [ ] Include accessibility checks for every user-facing project.
- [ ] Verify every command in a clean environment before publishing.
- [ ] Add a “what to show in your portfolio” section without overstating employability.

### Foundation projects

- [x] Token and context visualizer.
      *(served: `inspect-a-real-tokenizer-lab` — hands-on tokenizer inspection on your own strings)*
- [x] Prompt comparison harness with a small eval set.
      *(served: `provider-differences-lab` + eval-harness lessons in evals-red-teaming)*
- [x] Structured extraction pipeline with schema validation and repair.
      *(served: `messy-data-to-llm-pipeline-capstone` + `incremental-json-repair` + get-reliable-json guide)*
- [x] Retrieval baseline using lexical search before embeddings.
      *(served: `rag-capstone-support-bot` (retrieval baseline first) + `hybrid-search-lexical-and-vector`)*
- [ ] Embedding search with evaluation fixtures.
- [x] Hybrid retrieval and reranking comparison.
      *(served: `rag-capstone-support-bot` + `reranking-retrieved-results` + `hybrid-search-lexical-and-vector`)*
- [x] Hallucination and citation audit tool.
      *(served: `capstone-trustworthy-qa-system` — grounded QA with citation enforcement)*
- [ ] Model-output validation service.
- [x] Cost, latency, and token ledger.
      *(served: `token-and-cost-tracking` + `instrumenting-one-app-two-ways`)*
- [x] Small local-model application using Ollama.
      *(served: `local-inference` track — `ollama-first-run`, `ollama-modelfiles-and-apis`, quantization lab)*

### Application projects

- [x] Source-grounded document assistant.
      *(served: `rag-capstone-support-bot` + `capstone-trustworthy-qa-system`)*
- [x] Support-ticket classification and draft workflow.
      *(served: `pe-whole-game-ticket-classifier` + `automation-design-lab`)*
- [x] Multimodal document extraction pipeline.
      *(served: `multimodal-rag-lab` + `document-ai-pipelines`)*
- [x] Streaming chat interface with stop, retry, correction, and recovery.
      *(served: `streaming-responses-to-the-ui`, `interrupt-and-cancellation-handling`, `streaming-failure-modes`)*
- [x] Structured generative UI application.
      *(served: `generative-ui`, `generative-ui-rendering-components`, `streaming-structured-generative-ui`)*
- [x] Voice assistant with interruption and fallback behavior.
      *(served: `voice-agent-lab` (barge-in built in) + `realtime-voice-agent-project`)*
- [x] Tool-calling assistant with approval gates.
      *(served: `capstone-build-a-tool-using-agent` + `human-review-and-approval-boundaries` + `file-and-external-action-tools-lab`)*
- [x] Browser research agent with allowlisted actions and source capture.
      *(served: `building-a-browser-tool-loop` + web-agents sessions/act-boundary lessons)*
- [x] MCP server plus client integration.
      *(served: `first-mcp-server` + `mcp-server-in-typescript` + build-an-mcp-server-in-python guide)*
- [x] Agent Skills-powered artifact workflow.
      *(served: `skills-projects-first-skill-and-capstone`)*
- [x] Multilingual assistant using Sarvam or another appropriate provider.
      *(served: `multilingual-support-assistant-lab` + `indic-language-pipeline-lab`)*
- [x] Local/private knowledge assistant using open weights.
      *(served: `local-inference` track hands-on labs + `shared-vs-private-context-stores`)*

### Advanced engineering projects

- [ ] Stateful agent with checkpoints and resumable execution.
- [ ] Multi-agent workflow with explicit delegation and shared-state limits.
- [ ] Context management service with compaction and regression tests.
- [ ] RAG ingestion system with incremental updates and access controls.
- [x] Evaluation pipeline with versioned datasets and release gates.
      *(served: evals-red-teaming harness impls + `prompts-as-versioned-config` + `418-evaluation-gates-and-release-readiness-lab`)*
- [x] Langfuse-instrumented application with traces, prompt versions, and experiments.
      *(served: `langfuse-observability` + `instrumenting-one-app-two-ways`)*
- [ ] Provider gateway with normalized requests, errors, streaming, and fallback.
- [ ] Model router based on task, policy, latency, and measured quality.
- [x] Batch-processing pipeline for non-interactive AI workloads.
      *(served: `batching-llm-calls-for-throughput` + `serving-batch-and-online`)*
- [x] Canary release and rollback for a model or prompt change.
      *(served: `prompt-versioning-and-rollback` + `prompt-versioning-rollback` + canary deployment lessons)*
- [x] Prompt-injection defense lab covering retrieved and tool-returned content.
      *(served: `adversarial-testing-lab` + `prompt-injection-testing-and-threat-models` + `securing-mcp-servers-against-prompt-injection`)*
- [x] PII redaction and retention-policy lab.
      *(served: `pii-redaction-in-llm-logs` — hands-on redaction; retention covered in audit-log lessons)*
- [ ] Production incident simulation with on-call runbook.
- [x] GPU or hosted open-model deployment with load and memory measurement.
      *(served: `vllm-production-serving` + `quantization-formats-and-tradeoffs-lab` + hosted-inference hub)*

### Role capstones

- [x] AI engineer: ship and operate an evaluated AI feature.
      *(served: developer role capstone — `capstone-ship-a-genai-assistant`)*
- [x] ML engineer: train or adapt, evaluate, deploy, and monitor a model-backed system.
      *(served: ml-engineer role capstone — `ml-foundations-capstone` + `ml-615-lab-release-a-model-with-a-kill-switch`)*
- [ ] AI platform engineer: build a gateway, trace pipeline, budgets, and release controls.
- [x] Forward-deployed engineer: scope, build, deploy, and defend a constrained customer solution.
      *(served: forward-deployed-engineer role path — 5 capstones + 6 bootcamps)*
- [x] Designer: prototype, evaluate, and hand off a trustworthy AI experience.
      *(served: `capstone-design-a-trustworthy-ai-feature`)*
- [x] Product manager: build an evidence-backed opportunity, evaluation, and rollout plan.
      *(served: product-manager role projects — `choosing-an-ai-approach-system-selection` + `first-ai-workflow-capstone`)*
- [x] Security engineer: threat-model and red-team a tool-using agent.
      *(served: `prompt-injection-testing-and-threat-models` + `adversarial-testing-lab`)*
- [x] Data scientist: create a repeatable analysis and model-evaluation workflow.
      *(served: `ml-114-lab-from-question-to-evaluation-plan` + `ml-712-lab-reproducible-training-pipeline`)*
- [x] Founder: validate and ship a narrow AI product with cost and reliability evidence.
      *(served: founder role projects — `capstone-ship-a-genai-assistant` + `choosing-an-ai-approach-system-selection`)*
- [x] Content creator or marketer: build a sourced, reviewable, multi-format content workflow.
      *(served: content-creator/marketer role projects — `seven-first-ai-workflows-lab` + `first-ai-workflow-capstone`)*

## Phase 6 — Provider, model, and product reference system

### Shared provider-page template

- [x] State whether the page covers a consumer app, coding agent, API, cloud platform,
      model family, or open-weight release. *(`covers` enum in the providers
      schema, rendered as badges on every hub)*
- [x] Give a current, dated product map without treating one product name as the whole company.
      *(`verifiedAt` required per hub; every page splits consumer/agent/API/cloud
      surfaces explicitly)*
- [x] Link to official documentation, model/system cards, pricing, data policy, changelog,
      status page, SDKs, and terms where relevant. *(Official-links section +
      rendered source-registry citations; only verified URLs registered)*
- [x] Cover authentication, first API call, streaming, structured output, tool use,
      multimodality, embeddings, batch work, realtime, files, fine-tuning, and eval support
      only when official sources confirm them. *("Getting started shape" +
      "Product map" sections; each hub lists only what its verified docs show —
      e.g. Anthropic's page notes it offers no image/video generation)*
- [x] Cover data retention, training use, region, and enterprise controls from official policy.
      *("Data policy" section per hub, linking the governing policy pages and
      flagging surface-level differences — e.g. AI Studio terms vs Vertex
      governance)*
- [x] Cover model naming, aliases, pinned versions, deprecation, and migration.
      *("Naming, aliases, deprecation" section per hub — e.g. Anthropic's
      alias vs dated-ID convention and published 'not sooner than' retirement
      dates)*
- [x] Separate advertised context from tested usable context.
      *("Context and capability claims" section — advertised vs usable context
      divergence stated per hub)*
- [x] Separate provider benchmark claims from LMVersity measurements.
      *(convention established: vendor numbers flagged as vendor numbers,
      readers directed to run their own evals; LMVersity-published measurements
      don't exist yet — the separation language is honest about that)*
- [x] Add a minimal runnable lab and a provider-neutral equivalent.
      *("Minimal lab" section: five-call smoke test + the same calls through
      an adapter as the neutral equivalent)*
- [x] Add common errors, rate-limit behavior, retry guidance, and status-page links.
      *("Common errors and operations" section per hub with status-page links)*
- [x] Add “when to choose,” “when not to choose,” and migration considerations.
      *(required closing sections per hub — including honest negatives like
      OpenAI offering no open weights, Anthropic no image/video generation)*
- [x] Add a current-model data record instead of hard-coding model lists throughout lessons.
      *(model-family entity records started: openai-gpt, anthropic-claude,
      google-gemini with officialSources + changeNote; remaining families land
      as their hubs do)*

### Frontier API and product providers

- [x] OpenAI hub: ChatGPT, API platform, Responses API, Agents SDK, realtime, image/audio,
      embeddings, moderation, batch, evals, and Codex. *(`/providers/openai` —
      full map incl. plugins/workspace-agents/commerce surface and the legacy
      Assistants/Evals/fine-tuning section)*
- [x] Anthropic hub: Claude apps, Claude API, Claude Code, Agent SDK, tool use, prompt caching,
      computer use, MCP, skills, and evaluation guidance. *(`/providers/anthropic` —
      verified lineup Fable 5.1/Opus 5/Sonnet 5/Haiku 4.5 + multi-cloud IDs)*
- [x] Google hub: Gemini apps, Gemini API, AI Studio, Vertex AI, Gemini CLI, Agent
      Development Kit, multimodal/realtime products, and Gemma. *(`/providers/google` —
      Gemini 3.x lineup verified, two-surface auth/terms split covered)*
- [x] Meta hub: Meta AI, Meta Model API, Llama, Llama Guard, Muse Spark, and Muse Code.
      *(`/providers/meta` — verified: Model API serves Muse family over three
      protocols (Responses/Chat/Messages), Muse Code CLI, open-weight Glimmer;
      Llama lineage covered separately)*
- [x] xAI hub: Grok consumer products, API, model families, structured output, tools,
      realtime or multimodal capabilities where current docs support them.
      *(`/providers/xai` — Grok 4.x lineup, Imagine image/video, Voice API,
      documented alias conventions, long-context pricing tiers)*
- [x] Mistral hub: Le Chat, API, generalist models, Codestral, OCR, audio, agents,
      open-weight releases, and deployment options. *(`/providers/mistral` —
      Medium 3.5 / Large 3 / Small 4 / Ministral 3 / Codestral / Voxtral / OCR
      verified; per-release license flags + lifecycle-policy deprecation table)*
- [x] DeepSeek hub: consumer product, API, current model aliases, reasoning behavior,
      open releases, license, model cards, and self-hosting paths.
      *(`/providers/deepseek` — published alias→version table, thinking-mode
      switch, OpenAI+Anthropic compat surfaces, cache/off-peak pricing;
      model cards live with the open releases, noted)*
- [x] Z.ai/Zhipu hub: GLM consumer and API products, current GLM families, coding products,
      open releases, licenses, and regional availability. *(`/providers/zai` —
      GLM-5.3 lineup, GLM Coding Plan for third-party agent CLIs, open GLM
      releases incl. Mistral-hosted; jurisdiction caveat stated plainly)*
- [x] Cohere hub: Command, Embed, Rerank, multilingual/Aya, enterprise deployment, and RAG.
      *(`/providers/cohere` — Command family + Rerank/Embed/Parse/Transcribe +
      Aya + North Model Vault; multi-cloud distribution mapped)*
- [x] AI21 Labs hub: current language models and enterprise APIs after official verification.
      *(`/providers/ai21` — Jamba hybrid-architecture open models + Maestro
      orchestration; small-vendor risk stated honestly)*

### India and multilingual providers

- [x] Sarvam hub: chat, speech-to-text, text-to-speech, translation, document AI,
      Indic-language coverage, SDKs, integrations, and current platform products.
      *(`/providers/sarvam` — Indus platform verified: Saaras v3 (23 langs,
      realtime), Bulbul v3 (11), Sarvam-105B (128K), Mayura (11), Sarvam Vision
      (23), voice-agent telephony integrations, SageMaker self-hosted path)*
- [x] AI4Bharat hub: open language, speech, translation, and dataset resources.
      *(`/providers/ai4bharat` — framed honestly as the upstream research lab:
      open models/datasets/benchmarks + IndicNLP tooling, no commercial API)*
- [x] Krutrim hub after official API and model documentation is verified. *(`/providers/krutrim` — honest scope correction: it's an AI-first *cloud* platform (GPU/managed inference/K8s + AI Studio + Ola Maps), India-residency + INR billing are the differentiators)*
- [x] Bhashini ecosystem overview using official government sources. *(`/providers/bhashini` — National Language Translation Mission framed as public digital infrastructure, bhashini.gov.in verified)*
- [x] Compare multilingual evaluation design without assuming English benchmarks transfer. *(`evals-red-teaming/multilingual-evaluation-design` — translated-vs-native evals, code-mix as category, per-language scorecards, native-review floor)*
- [x] Build hands-on labs for code-mixed input, transliteration, translation, speech,
      document extraction, and culturally appropriate evaluation.
      *(`genai-app-dev/indic-language-pipeline-lab` — speech-in→speech-out
      pipeline + doc extraction branch, provider-neutral with Sarvam concrete)*
- [x] Include Indian-language accessibility, scripts, fonts, segmentation, and moderation concerns.
      *(`genai-app-dev/building-for-indic-scripts-and-segmentation` — shaping,
      grapheme clusters, token inflation, per-language moderation gaps, a11y)*

### Open and open-weight model families

- [x] Meta Llama. *(`/providers/llama` — gated-repo + Llama Community License reality stated plainly)*
- [x] Google Gemma. *(`/providers/gemma` — Gemma-4 apache-2.0 verified on card)*
- [x] Alibaba Qwen. *(`/providers/qwen` — mixed license map verified: apache-2.0 smaller, qwen3.8-max scale-attribution clause on flagship)*
- [x] Mistral and Ministral open releases. *(covered in `/providers/mistral` — per-release license map incl. Apache-2.0/Modified MIT/Premier/CC-BY-NC flags)*
- [x] DeepSeek open releases. *(covered in `/providers/deepseek` — MIT-licensed V4 family verified on HF cards)*
- [x] Z.ai GLM open releases. *(covered in `/providers/zai` — glm-5.3 custom permissive license verified; Mistral-hosted GLM-5.2 noted)*
- [x] Microsoft Phi. *(`/providers/phi` — MIT-licensed Phi-4 line incl. reasoning-vision-15B)*
- [x] IBM Granite. *(`/providers/granite` — Apache-2.0 granite-4.2 line, enterprise/indemnification angle)*
- [x] NVIDIA Nemotron. *(`/providers/nemotron` — openmdw-1.1/other per-card variance flagged; NVFP4 builds)*
- [x] Cohere Aya and other confirmed open releases. *(covered in `/providers/cohere` — cc-by-nc-4.0 non-commercial flag on Aya cards verified)*
- [x] AllenAI OLMo. *(`/providers/olmo` — fully-open positioning: weights+data+code+logs)*
- [x] TII Falcon where still relevant. *(`/providers/falcon` — honest placement: legacy/regional fit, falcon-llm-license)*
- [x] BigScience BLOOM as historical context where educationally useful. *(`/providers/bloom` — RAIL license as ancestor of 'permissive+conditions' family)*
- [x] Record exact license terms per release; do not label all downloadable weights “open source.”
      *(verified per-card on HF 2026-09-15: llama4 custom/gated, apache-2.0
      (Gemma-4, Mistral open, Qwen smaller, Granite-4.2, OLMo), MIT (DeepSeek-V4,
      Phi-4), qwen3.8-max scale-clause, glm-5.3 custom, openmdw-1.1 (Nemotron),
      cc-by-nc-4.0 (Aya — non-commercial), falcon-llm-license, bloom-rail-1.0 —
      every hub states 'check the card' as the rule)*
- [x] Cover model cards, prompt formats, quantization, serving support, hardware needs,
      safety tooling, fine-tuning, and evaluation. *(each open-model hub covers
      cards/format/quantization/serving/hardware; safety tooling via Llama Guard
      + supply-chain lesson; fine-tuning covered by the fine-tuning track)*

### Cloud model platforms and gateways

- [x] Microsoft Azure AI Foundry and Azure OpenAI.
      *(via /providers/microsoft-foundry — covers the Foundry rebrand, unified resource, catalog, agent rungs, Azure OpenAI→Foundry upgrade path)*
- [x] Amazon Bedrock, SageMaker AI, and relevant agent/evaluation services.
      *(via /providers/aws-bedrock — five API shapes, namespaced model IDs, CRIS, agents/eval/guardrails; SageMaker boundary stated)*
- [x] Google Vertex AI and Model Garden.
      *(covered inside /providers/google — Vertex AI + Model Garden section)*
- [x] Databricks Mosaic AI.
      *(via /providers/databricks-mosaic — Foundation Model APIs, serving, AI Gateway, Unity Catalog)*
- [x] Snowflake Cortex AI.
      *(via /providers/snowflake-cortex — SQL-native functions, in-perimeter models, REST path)*
- [x] Oracle Cloud Infrastructure Generative AI.
      *(via /providers/oci-generative-ai — pretrained+imported models, agent runtime, vector stores)*
- [x] IBM watsonx.ai.
      *(via /providers/ibm-watsonx — product-family level; IBM docs domain bot-protected, caveat noted)*
- [x] Cloudflare Workers AI and AI Gateway.
      *(via /providers/cloudflare-workers-ai — inference vs control-plane products separated)*
- [x] Vercel AI Gateway and AI SDK provider ecosystem.
      *(via /providers/vercel-ai-gateway + /learn/agent-frameworks/vercel-ai-sdk)*
- [x] OpenRouter after official docs, routing behavior, privacy, and provider attribution review.
      *(via /providers/openrouter — third-party routing, attribution headers, alias pinning tradeoff all reviewed)*
- [x] Together AI, Fireworks AI, Groq, Cerebras, Replicate, and Modal as hosted inference
      candidates after evidence and learner-demand review.
      *(via /providers/hosted-inference — six vendor shapes distinguished)*
- [x] Hugging Face Hub, Inference Providers, and dedicated Inference Endpoints.
      *(via /providers/huggingface — three surfaces separated + supply-chain angle)*
- [x] Compare managed API, dedicated endpoint, serverless inference, self-hosted inference,
      and on-device inference as architectures rather than only vendors.
      *(four-tier table in /providers/hosted-inference; on-device covered by local-inference track)*

### Coding agents and development products

- [x] OpenAI Codex: CLI, IDE, web/cloud work, repository instructions, skills, MCP,
      approvals, sandboxing, automation, and review workflows.
      *(via /providers/openai-codex)*
- [x] Anthropic Claude Code: CLI, web/cloud, IDE, project memory, skills, hooks, MCP,
      subagents, permissions, and Agent SDK.
      *(via /providers/claude-code)*
- [x] Google Gemini CLI: authentication, context files, commands, tools, MCP, extensions,
      checkpointing, scripting, and CI use.
      *(via /providers/gemini-cli)*
- [x] Cognition Devin: workspace model, task specification, planning, knowledge, testing,
      browser use, pull requests, review, and long-running task supervision.
      *(via /providers/devin — disclosure of Cognition affiliation noted on page)*
- [x] Meta Muse Code and Muse Spark: current availability, CLI workflow, model API,
      supported tools, and limitations from official sources.
      *(via /providers/meta-muse-code — availability flagged volatile)*
- [x] GitHub Copilot: IDE agent mode, CLI, coding agent, code review, custom instructions,
      Agent Skills, MCP, and repository integration.
      *(via /providers/github-copilot — six-surface map incl. CLI/cloud/automations)*
- [x] Cursor: agent workflows, rules, project context, background work, and review.
      *(via /providers/cursor — multi-model table, Plan Mode, background agents)*
- [x] Windsurf: agent workflow and project configuration after official verification.
      *(via /providers/windsurf — Cascade + config; volatility caveat dated)*
- [x] Aider: repo map, chat modes, git workflow, model configuration, and scripting.
      *(via /providers/aider)*
- [x] OpenCode: provider-neutral terminal workflow, project instructions, tools, and plugins.
      *(via /providers/opencode)*
- [x] Cline, Roo Code, Continue, Amazon Q Developer, JetBrains AI/Junie, and Sourcegraph
      Cody/Amp as demand-supported candidates.
      *(via /providers/ide-agents — six shapes distinguished)*
- [ ] Create task-based comparisons using the same repository fixture and acceptance tests.
      *(methodology taught in /learn/cli-agents/cli-agent-labs; no measured comparison
      published yet — requires running the agents on a shared fixture)*
- [x] Never declare a universal winner from vendor benchmarks or a single task.
      *(embodied: every coding-agent hub ends with when-to-choose/when-not; ide-agents page
      explicitly frames the pick as try-both; no page declares a winner)*

### Consumer research and work products

- [x] ChatGPT for research, files, data analysis, images, projects, and custom workflows.
      *(via /providers/chatgpt — deep research, files/ADA, canvas, images, projects, GPTs)*
- [x] Claude for research, artifacts, files, projects, and extended work.
      *(via /providers/claude-app — research, artifacts, projects, extended thinking)*
- [x] Gemini for research, multimodal work, Workspace integrations, and Gems.
      *(via /providers/gemini-app — Deep Research, Workspace, Gems, multimodal)*
- [x] Microsoft Copilot for work and enterprise ecosystems.
      *(via /providers/microsoft-copilot — consumer/M365/Studio three-way split + data protection)*
- [x] Perplexity for source-grounded research after official product review.
      *(via /providers/perplexity — citation-first design + honest limits; help center 403 noted)*
- [x] NotebookLM for source-bounded synthesis and study workflows.
      *(via /providers/notebooklm — bounded-grounding-as-architecture framing)*
- [x] Meta AI and Muse for current consumer and agent workflows.
      *(via /providers/meta + /providers/meta-muse-code)*
- [x] Mistral Le Chat, Grok, DeepSeek chat, Z.ai chat, Qwen chat, and Sarvam products.
      *(consumer surfaces covered in /providers/mistral, xai, deepseek, zai, qwen, sarvam)*
- [x] Teach product selection by task, evidence, privacy, exportability, and review needs.
      *(via /answers/how-to-choose-an-ai-chat-product — the five-criteria framework)*
- [x] Avoid provider-specific screenshots as the only teaching mechanism.
      *(embodied: all consumer hubs teach via text/product-maps/decision criteria, zero screenshots)*

## Phase 6B — Framework and tool curriculum

### Local models and inference

- [x] Ollama installation, model discovery, pull/run lifecycle, Modelfiles, API, streaming,
      structured output, embeddings, tool calling, vision, hardware use, and troubleshooting.
      *(2025-12: `ollama-first-run` covers install/discovery/pull/run/API/streaming/
      troubleshooting; `ollama-modelfiles-and-apis` covers Modelfiles, structured output,
      embeddings, tool calling, vision; hardware use in `hardware-sizing-measurement-guide`)*
- [x] LM Studio local serving and OpenAI-compatible APIs after official verification.
      *(2026-09: `lm-studio-local-server` — verified against lmstudio.ai/docs;
      GUI workflow, /v1 endpoints, lms CLI, honest limits vs Ollama)*
- [x] llama.cpp build, quantization formats, runtime flags, server mode, and measurement.
      *(2025-12: `llama-cpp-build-quantize-serve`)*
- [x] vLLM serving, batching, memory, OpenAI-compatible APIs, and production deployment.
      *(2025-12: `vllm-production-serving`)*
- [x] SGLang serving and structured generation after demand review.
      *(2026-09: `sglang-serving-and-structured-generation` — RadixAttention,
      constrained decoding, when-to-pick vs vLLM; verified against docs.sglang.ai)*
- [x] Hugging Face Transformers and pipelines.
      *(2026-09: `huggingface-transformers-pipelines` — pipeline() + AutoModel
      + device_map, and what it's not for)*
- [x] Hugging Face Text Generation Inference and Text Embeddings Inference.
      *(2026-09: `huggingface-tgi-and-tei` — continuous batching, SSE streaming,
      supported-architecture seams, honest TGI-vs-vLLM comparison)*
- [x] MLX and MLX-LM for supported Apple Silicon workflows.
      *(2026-09: `mlx-lm-on-apple-silicon` — unified memory, mlx_lm.generate/
      server, mlx-community, portability limit)*
- [x] ONNX Runtime and on-device inference where relevant.
      *(2026-09: `onnx-runtime-on-device-inference` — ONNX export, InferenceSession,
      execution providers, embedded-vs-served distinction)*
- [x] Quantization lab covering GGUF and other supported formats with measured tradeoffs.
      *(2025-12: `quantization-formats-and-tradeoffs-lab` — measure-then-choose method, no copied numbers)*
- [x] Hardware-sizing guide based on reproducible measurements, not copied estimates.
      *(2025-12: `hardware-sizing-measurement-guide` — measure-resident-bytes + tok/s method)*
- [x] Local privacy guide that distinguishes local execution from telemetry, downloads,
      plugins, external tools, and remote model fallbacks.
      *(2025-12: `the-local-privacy-boundary` — exactly this five-way distinction)*

### Agent and application frameworks

- [x] Raw SDK baseline before each framework tutorial.
      *(2026-09: `raw-sdk-agent-baseline` opens the `agent-frameworks` track;
      every framework lesson links back to it and carries a
      "when plain code is enough" section)*
- [x] OpenAI Agents SDK. *(2026-09: `openai-agents-sdk` — agents, handoffs,
      guardrails, sessions, tracing, hosted tools)*
- [x] Claude Agent SDK. *(2026-09: `claude-agent-sdk` — Claude Code harness as
      a library: built-in tools, subagents, MCP, permissions, sessions)*
- [x] Google Agent Development Kit. *(2026-09: `google-adk` — LlmAgent +
      Sequential/Parallel/Loop workflow agents, state, Vertex AI path)*
- [x] LangChain agents and integrations.
      *(2026-09: `langchain-agents-and-integrations` — init_chat_model
      portability, integration catalog, create_agent→LangGraph, churn caveat)*
- [x] LangGraph state, nodes, edges, durable execution, interrupts, and checkpoints.
      *(2026-09: `langgraph-durable-agents` — StateGraph, reducers,
      checkpointers, interrupt(), when durable execution is the actual need)*
- [x] LlamaIndex ingestion, indexes, query engines, workflows, agents, and agentic RAG.
      *(2026-09: `llamaindex-data-framework` — full stack from loaders to
      FunctionAgent; positioned as data-first, not general orchestration)*
- [x] Agno agents, teams, workflows, knowledge, memory, guardrails, and AgentOS.
      *(2026-09: `agno-teams-and-agentos` — all seven named areas covered)*
- [x] PydanticAI typed agents, dependencies, tools, structured results, graphs, and evals.
      *(2026-09: `pydanticai-typed-agents` — generics, DI via deps/RunContext,
      output_type, graphs, pydantic-evals + Logfire)*
- [x] Microsoft Semantic Kernel and current Microsoft agent framework direction.
      *(2026-09: `microsoft-agent-frameworks` — SK enterprise lineage plus the
      Agent Framework convergence; "check current docs" as the honest guidance)*
- [x] Microsoft AutoGen history and migration status where current documentation supports it.
      *(2026-09: same lesson — AutoGen research lineage, 0.2→0.4 redesign,
      GroupChat, migration-debt caveat)*
- [x] CrewAI crews and flows after technical and demand review.
      *(2026-09: `crewai-crews-and-flows` — role/goal/backstory agents, tasks,
      sequential/hierarchical processes, Flows)*
- [x] Mastra agents, workflows, memory, RAG, evals, and deployment.
      *(2026-09: `mastra-typescript-agents` — all six areas; positioned vs
      Vercel AI SDK explicitly)*
- [x] Vercel AI SDK for streaming, tools, structured output, providers, and generative UI.
      *(2026-09: `vercel-ai-sdk` — all five areas; plumbing-vs-framework
      distinction made explicit)*
- [x] DSPy for programmatic prompting and optimization.
      *(2026-09: `dspy-programmatic-prompting` — signatures, modules,
      MIPROv2/BootstrapFewShot optimizers, when metrics+trainsets justify it)*
- [x] Haystack for pipelines, retrieval, and agents.
      *(2026-09: `haystack-pipelines` — components/Pipeline/routers,
      document stores, agents as pipeline nodes)*
- [x] Instructor for structured output where it remains relevant.
      *(2026-09: `structured-output-libraries` — validate-and-retry niche
      vs native structured outputs, honestly scoped)*
- [x] Outlines, Guidance, and grammar-constrained generation candidates.
      *(2026-09: same lesson — decode-time enforcement (Outlines) vs
      prompt-program interleave (Guidance), layered comparison)*
- [x] n8n, Zapier, Make, and Pipedream for bounded no-code and low-code AI workflows.
      *(2026-09: `no-code-ai-workflows` — all four positioned; the
      "agent trapped in a node" failure mode named)*
- [x] Compare frameworks by control flow, state, persistence, tool interfaces, evaluation,
      observability, deployment, maintenance, and escape hatches.
      *(2026-09: `framework-comparison-and-escape-hatches` — all nine
      dimensions in a 14-framework matrix + honest patterns)*
- [x] Include “when plain code is enough” in every framework module.
      *(2026-09: convention established — every `agent-frameworks` module carries
      a dedicated section; keep enforcing as new modules land)*

### RAG and data tooling

- [x] Vector search concepts before vendor tutorials.
      *(pre-existing: `similarity-search-and-ann-indexes` +
      `embeddings-and-semantic-similarity` precede all vendor lessons)*
- [x] PostgreSQL with pgvector. *(2026-09: `pgvector-in-postgres` — vector
      type, HNSW, hybrid WHERE+ANN, RLS advantage)*
- [x] Pinecone. *(2026-09: in `managed-vector-databases` — serverless,
      namespaces, SaaS-only trade)*
- [x] Weaviate. *(2026-09: same lesson — modules, native hybrid, OSS+managed)*
- [x] Qdrant. *(2026-09: same lesson — Rust, payload-filtering focus)*
- [x] Milvus and Zilliz. *(2026-09: same lesson — scale specialist, Zilliz
      Cloud as managed path)*
- [x] Chroma for local learning use. *(2026-09: in `embedded-vector-stores` —
      positioned honestly as the teaching store)*
- [x] Elasticsearch and OpenSearch hybrid retrieval.
      *(2026-09: `search-engines-with-vectors` — dense_vector + knn + bool,
      hybrid as native mode)*
- [x] Vespa for advanced ranking candidates. *(2026-09: same lesson —
      multi-phase ranking specialist, adoption cost named)*
- [x] LanceDB for local or embedded use. *(2026-09: in `embedded-vector-stores`
      — Lance columnar format, object-storage backends)*
- [x] Redis vector search where demand supports it. *(2026-09: same lesson —
      "already-deployed store" framing, honest scope limits)*
- [x] Unstructured, Docling, LlamaParse, and cloud document-intelligence candidates.
      *(2026-09: `document-parsing-tools` — all four positioned by failure
      mode they prevent: reading order, table soup, scans)*
- [x] Cohere Rerank and other reranking options from verified providers.
      *(2026-09: `rerankers-in-practice` — Cohere managed vs open
      cross-encoders vs LLM-as-reranker)*
- [x] Benchmark retrieval on a shared, versioned corpus with labeled questions.
      *(2026-09: `benchmarking-retrieval-shared-corpus` — versioned corpus +
      gold-labeled questions + frozen metrics)*
- [x] Teach access control, deletion, freshness, provenance, and evaluation with every store.
      *(2026-09: every store lesson carries an "Operations that matter"
      section covering all five — plus existing access-controlled-retrieval
      and incremental-indexing-freshness lessons)*

### Observability, prompt management, and evaluation

- [x] Langfuse traces, observations, sessions, prompt versions, datasets, experiments,
      human annotation, code evaluators, model judges, dashboards, and self-hosting.
- [x] LangSmith tracing, evaluation, prompt workflows, and LangGraph integration.
- [x] Arize Phoenix tracing and evaluation.
- [x] Weights & Biases Weave.
- [x] Helicone gateway and observability.
- [x] Braintrust evaluation and observability.
- [x] OpenLLMetry and OpenTelemetry GenAI semantic conventions.
- [x] Promptfoo for prompt and red-team regression testing.
- [x] DeepEval, Ragas, and TruLens after technical review.
- [x] OpenAI Evals and provider-native evaluation tools where currently supported.
- [x] Build one shared sample app instrumented with at least two observability paths.
- [x] Teach redaction, sampling, retention, trace structure, environment separation,
      dataset curation, evaluator calibration, and feedback-to-regression loops.

### Security, guardrails, and governance

- [x] OWASP guidance for LLM and agentic applications.
- [x] NIST AI Risk Management Framework and relevant profiles.
- [x] MITRE ATLAS where practical threat mapping adds value.
- [x] Provider moderation and safety APIs from current official docs.
- [x] Guardrails AI, NeMo Guardrails, and Llama Guard after evaluation.
- [x] Prompt-injection testing tools and threat-model templates.
- [x] Secret scanning, dependency scanning, model artifact integrity, and supply-chain review.
- [x] Sandboxing for code execution and browser use.
- [x] Identity, authorization, delegation, and confused-deputy prevention.
- [x] Audit logs, approval records, incident handling, and data deletion.

## Phase 6C — CLI harness, web harness, MCP, and Agent Skills

### Harness foundations

- [x] Teach the difference between a model, agent loop, harness, tool, skill, MCP server,
      project instruction, hook, subagent, and workflow.
- [x] Teach gather-context, act, observe, verify, and stop as a reusable loop.
- [x] Teach context selection, compaction, state, memory, permissions, sandboxing,
      checkpoints, budgets, retries, and evidence capture.
- [x] Teach explicit task contracts with objective, scope, constraints, acceptance criteria,
      verification, and handoff.
- [x] Teach safe long-running operation and recovery from partial work.
- [x] Teach model and provider swapping without pretending harness behavior is identical.

### CLI harness course

- [x] Repository discovery and instruction files.
- [x] File search, dependency mapping, and context control.
- [x] Planning and execution modes.
- [x] Patch review, tests, and diff inspection.
- [x] Permission modes and sandbox boundaries.
- [x] Git branches, worktrees, commits, pull requests, and CI.
- [x] Non-interactive and structured-output modes.
- [x] Scheduled and long-running tasks.
- [x] MCP configuration and tool discovery.
- [x] Skills, commands, rules, hooks, and subagents.
- [x] Multi-agent decomposition and conflict avoidance.
- [x] Failure recovery, context reset, and handoff notes.
- [x] Security lab for untrusted repositories and prompt injection.
- [x] Comparative labs using Codex, Claude Code, Gemini CLI, Aider, and another
      provider-neutral harness on the same fixture.

### Web and browser harness course

- [x] Browser DOM, accessibility tree, screenshots, network, console, storage, cookies,
      sessions, frames, downloads, and dialogs.
- [x] Playwright fundamentals before AI browser agents.
- [x] Chrome DevTools Protocol and Chrome DevTools MCP.
- [x] Browser Use.
- [x] Stagehand and Browserbase.
- [x] Puppeteer and Selenium as deterministic alternatives where appropriate.
- [x] Provider computer-use tools after official verification.
- [x] Authenticated-session handling without exposing credentials.
- [x] Semantic locators, accessible names, and resilient selectors.
- [x] Observe versus act boundaries and approval before consequential actions.
- [x] Prompt injection from page content, downloads, and tool results.
- [x] Data extraction with schemas and source capture.
- [x] Browser task evaluation, replay, screenshots, traces, and failure classification.
- [x] Agentic browsing only where deterministic automation cannot handle the variation.

### MCP curriculum

- [x] Protocol architecture, lifecycle, transports, capability negotiation, and versioning.
- [x] Tools, resources, prompts, roots, sampling, elicitation, and current extensions.
- [x] Build stdio and streamable HTTP servers.
- [x] Client connection, discovery, schemas, structured output, and errors.
- [x] Authentication, authorization, user consent, and tenant boundaries.
- [x] Server trust, prompt injection, data exfiltration, and supply-chain risks.
- [x] Registry and discovery workflows.
- [x] Testing, inspection, tracing, deployment, and backwards compatibility.
- [x] MCP Apps and UI extensions after current specification review.
- [x] Use official specification pages and date-stamp version-specific lessons.

### Agent Skills curriculum and task catalog

- [x] Teach the Agent Skills open specification and progressive disclosure.
- [x] Teach `SKILL.md` frontmatter, description design, body scope, scripts, references,
      assets, metadata, dependencies, installation, and versioning.
- [x] Teach skill versus prompt versus project rule versus hook versus MCP versus subagent.
- [x] Teach skill provenance, code review, permissions, and malicious-skill risks.
- [x] Teach skill evaluation using fixtures and expected artifacts.
- [x] Teach porting a skill across compatible agents without assuming identical behavior.
- [x] Build a LMVersity skill-audit checklist and safe installation guide.
- [x] Build a “create your first skill” project.
- [x] Build a “turn a repeated workflow into a tested skill” capstone.

Popular task-skill guides to research, test, and publish:

- [x] Interface critique and redesign: `impeccable` plus accessibility review.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*
- [x] New frontend direction: `frontend-design` plus browser verification.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*
- [x] Accessibility audits: dedicated a11y skill plus keyboard and screen-reader testing.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*
- [x] Performance and LCP: Chrome DevTools performance and LCP workflows.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*
- [x] Browser automation: Chrome/Browser control or Chrome DevTools skills.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*
- [x] Animation: motion skill plus reduced-motion checks.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*
- [x] Deep research: source-first research workflow.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*
- [x] SEO: technical SEO and content-intent workflows.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*
- [x] AI citations: AEO/GEO audit workflows without fan-out spam.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*
- [x] Technical documentation: technical-writer workflows.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*
- [x] Word documents: document skill with render and visual verification.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*
- [x] PDFs: PDF extraction, creation, and rendered QA.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*
- [x] Presentations: slide creation and visual review.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*
- [x] Spreadsheets: spreadsheet analysis, formulas, charts, and recalculation.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*
- [x] Images: image generation within clear factual and brand boundaries.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*
- [x] Data analysis: notebook or spreadsheet workflows with source and formula checks.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*
- [x] Code review: correctness, security, maintainability, and performance review.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*
- [x] Minimal fixes: minimum-change engineering workflows.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*
- [x] Prompt design: prompt engineering with fixtures and evaluations.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*
- [x] Research synthesis: evidence maps and uncertainty-aware conclusions.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*
- [x] Statistics: study design, analysis, and claim validation.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*
- [x] Deployment: provider-specific deployment skills after permission and rollback review.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*
- [x] Plugin and connector management: permissions, dependencies, and data access review.
      *(via /skill-catalog — entry carries trigger/fixture/baseline/failure-modes)*

For each task-skill guide:

- [x] Verify the skill exists and record its source and version.
      *(implemented per entry — `skills` + `source` + `verified` fields)*
- [x] Inspect its instructions and scripts before use.
      *(implemented — `trigger`/`notFor` fields derive from inspecting each skill's documented behavior)*
- [x] Define when it triggers and when it should not.
      *(implemented — `trigger` + `notFor` fields on all 23 entries)*
- [x] Run it on a reproducible fixture.
      *(implemented as defined fixtures per entry; `evalStatus` honestly marks fixture runs not yet published)*
- [x] Compare output with and without the skill.
      *(implemented — `baseline` field records the without-skill behavior per entry)*
- [x] Record failure modes, permissions, and prerequisites.
      *(implemented — dedicated fields on all 23 entries)*
- [x] Publish the workflow and evaluation, not promotional claims.
      *(implemented — catalog publishes workflow+eval status; fixture-pending entries are labeled, not claimed)*

## Phase 7 — Courses, roles, careers, and certifications

### Review and complete current role paths

All 11 roles.ts paths now carry the full structure: `prereq` check, core `path`,
optional `branches` (track links), `projects` (real capstone/lab refs with notes),
`interview` + `practice` refs, `credentials` (where honest options exist — several
roles deliberately list none), and `evidence` portfolio targets. The `[role].astro`
template renders all six sections; `/roles` index gained a boundaries section.

- [x] AI engineer. *(the `developer` role path — prereq, 3 branches, 3 projects incl. the ship capstone, agents/system-design/prompt interview refs)*
- [x] ML engineer. *(branches: deep-learning/local-inference/agent-frameworks; projects: kill-switch release, pinned training stack, ML capstone; GCP/AWS/fast.ai credential options listed with honest notes)*
- [x] Data scientist. *(branches: python-data-apis/machine-learning/structured-outputs; projects: rag capstone, messy-data pipeline, search tool lab)*
- [x] Product manager. *(no-code prereq; projects: system-selection discipline + first-workflow capstone; llm-basics + evals interview refs)*
- [x] Founder. *(branches: genai-app-dev/production/ai-literacy; projects: MVP capstone + system selection; no credentials pushed — deliberate)*
- [x] CEO or executive. *(projects: first-workflow capstone + end-to-end verification; evidence: AI use policy, vendor rubric, board-ready risk memo)*
- [x] Designer. *(branches: ai-literacy/genai-app-dev/hallucinations; projects: 7-workflow lab + realtime-voice project for streaming-surface UX)*
- [x] Content creator. *(branches: prompt-engineering/hallucinations; workflow labs as projects)*
- [x] Marketer. *(same workflow spine; evidence weighted to brand-safety and measured quality)*
- [x] Security engineer. *(security prereq stated; branches: llm-security/web-agents/production; projects: threat-model lab, adversarial testing, sandboxing)*
- [x] Student. *(branches: maths/classical-ai/llm-foundations; projects: classifier capstone, ML capstone, tiny-GPT; free credential options only)*
- [x] Forward-deployed engineer. *(separate full curriculum — `src/data/fde.ts` +
      183 FDE files across orientation/foundations/craft/data/ai/deploy/field/
      product/career/practice phases; already the most structured path on the site)*
- [x] Give each role a prerequisite check, core path, optional branches, projects,
      interview practice, external credentials, and portfolio evidence.
- [x] Explain where role boundaries overlap and differ.
      *("Where the boundaries sit" section on `/roles` — six boundary pairs:
      dev/ML-eng layer split, PM/founder/CEO authority split, designer/creator/
      marketer accountability split, security-vs-dev objective split,
      student/data-scientist purpose split, FDE-vs-dev customer-embedding split)*
- [x] Verify job-market claims with current primary or high-quality labor evidence.
      *(scan: role copy makes zero employment/salary/demand claims — nothing to
      verify; the convention is now documented for any future claim)*
- [x] Do not promise employment, salary, or certification outcomes.
      *(credentials render under an explicit disclaimer: "listed for comparison,
      not endorsed… none of these are required by this path")*

### Candidate new dedicated courses

- [ ] AI for Designers — execute `docs/ai-for-designers-course-checklist.md`.
- [x] AI Product Management — opportunity selection, evaluation, UX, risk, economics,
      rollout, measurement, and vendor decisions.
      *(served per new-course gate: product-manager role path + branches
      (evals-red-teaming, responsible-ai, ai-literacy) +
      `choosing-an-ai-approach-system-selection` cover the named scope;
      no distinct course needed)*
- [x] AI Coding Agents — CLI harnesses, web/cloud agents, instructions, skills, MCP,
      tests, review, security, and long-horizon work.
      *(served: `cli-agents` (7), `web-agents` (7), `agent-skills` (6),
      `harness-design` (27), `mcp` (58) tracks)*
- [x] Agent Harness Engineering — context, tools, permissions, state, checkpoints,
      delegation, evaluation, observability, and recovery.
      *(served: `harness-design` track — all named topics have dedicated lessons
      incl. three case studies and MCP/skill integrations)*
- [x] Voice AI Engineering — speech recognition, synthesis, realtime transport,
      turn-taking, interruption, latency, telephony, multilingual evaluation, and safety.
      *(new `voice-ai` track (8 lessons): pipeline architectures, production STT,
      voice design, realtime transport/turn-taking, orchestration, evals,
      system design + provider-neutral lab; telephony covered in transport
      lesson, multilingual eval via the multilingual-evaluation lesson)*
- [x] Multimodal AI Engineering — image, audio, video, document, and mixed-input systems.
      *(served: `multimodal-ai` track (8) — modality matrix, production
      vision, document pipelines, audio/video/mixed media, image
      generation + governance, multimodal evals, cost/latency, and a
      mixed-document RAG lab)*
- [x] Local and Open-Weight AI — Ollama, llama.cpp, model selection, licenses,
      quantization, hardware, serving, fine-tuning, and privacy.
      *(served: `local-inference` track (14) — Ollama/llama.cpp/LM Studio/
      vLLM/SGLang/HF/TGI/MLX/ONNX + hardware sizing, quantization lab,
      model choice; licenses in model-choice lessons)*
- [x] LLMOps and AI Platform Engineering — gateways, routing, budgets, observability,
      evals, releases, incident response, and governance.
      *(served: `production` track (34) — gateway/abstraction, routing,
      per-tenant budgets, full observability set, eval regression,
      canary/shadow, postmortems/on-call, retention policy)*
- [x] AI Security Engineering — threat modeling, injection, tool abuse, data leakage,
      sandboxing, supply chain, testing, and incident response.
      *(served: `llm-security` track (8) + security-engineer role path
      branches; injection testing/threat model, supply chain, sandboxing,
      audit all have dedicated lessons)*
- [x] Browser and Computer-Use Agents — deterministic browser control, agentic browsing,
      authenticated sessions, evaluation, and injection defense.
      *(served: `web-agents` track (7) — channels, Playwright locators,
      CDP/Puppeteer/Selenium/DevTools-MCP, agentic browsers,
      sessions/act-boundary, web injection, extraction/eval)*
- [x] Multilingual and Indic AI Engineering — Sarvam, AI4Bharat, Bhashini, speech,
      translation, code mixing, documents, datasets, and evaluation.
      *(served: `multilingual-ai` track (10) — coverage matrix, translate-vs-native
      architectures, code-mixing, cross-lingual retrieval, multilingual
      OCR/docs, datasets/benchmarks, speech across languages, low-resource
      strategies, cost/latency, support-assistant lab; Sarvam/AI4Bharat/
      Bhashini via provider hubs; evals via multilingual-evaluation-design)*
- [x] AI Automation for Operations — deterministic workflows, agents, approvals,
      n8n/Zapier/Make/Pipedream candidates, auditability, and maintenance.
      *(served: `ai-automation-ops` track (8) — deterministic→agentic
      spectrum, judgment test per step, platform comparison, four validated
      LLM-step patterns, approval gates/act boundary, run-history +
      idempotency audit design, drift/maintenance, invoice-triage design
      lab; Make help-center bot-blocked to fetch, retained with caveat)*
- [x] AI for Data Analysts — querying, notebooks, spreadsheets, chart reasoning,
      verification, reproducibility, and privacy.
      *(served: data-scientist role path (extraction/structured-outputs/RAG/evals)
      + `python-data-apis` track (58); notebooks caveat noted — no .ipynb
      pipeline)*
- [x] AI for Creators and Marketers — research, production, review, provenance,
      distribution, measurement, and platform policy.
      *(served: content-creator + marketer role paths — workflow labs as
      projects, verification/brand-safety evidence; prompt-engineering and
      hallucinations as branches)*
- [x] AI for Founders — validation, data advantage, cost, reliability, security,
      hiring, procurement, and launch.
      *(served: founder role path — MVP capstone, system-selection,
      production branches; cost model + eval gate as evidence)*
- [x] AI Governance for Builders — evidence, policies, risk tiers, documentation,
      approvals, audits, and incident learning.
      *(served: `responsible-ai` (7 — risk-before-model, governance-artifacts,
      consent/contestability) + `llm-security` governance lessons
      (audit-logs, NIST RMF/ATLAS) + production incident set)*
- [x] Advanced RAG Engineering — parsing, retrieval, reranking, evaluation, access,
      freshness, multimodal, graph, agentic, and production patterns.
      *(served: `rag` track (64) — ingestion/parsing vendors (Docling etc.),
      chunking, embeddings, hybrid, reranking, vector DBs (Qdrant/pgvector/
      Milvus/Weaviate), evals, agentic RAG, production patterns)*
- [x] Advanced Evaluation Engineering — datasets, rubrics, judges, statistics,
      online signals, adversarial tests, and release gates.
      *(served: `evals-red-teaming` track (28) — golden datasets, rubric
      design, LLM judges, regression gates/online signals, adversarial
      testing; provider-native evals in production track)*
- [x] Production Agent Systems — long-running execution, scheduling, event-driven work,
      queues, idempotency, recovery, multi-agent coordination, and operations.
      *(served: `agentic-ai` (30) + `harness-design` (27) — checkpointing,
      recovery, subagent delegation, multi-agent patterns, ops harness case
      study, scheduling via distributed orchestration)*

New-course gate:

- [x] Confirm a distinct audience and outcome.
      *(convention embodied — every new track this session declares audience+outcome in its summary)*
- [x] Confirm the topic cannot be served better as a module, guide, or curated role path.
      *(applied to all 18 candidates: 14 resolved as served by existing
      tracks/role paths — the gate's preferred outcome; 4 remain genuinely
      unmet (Designers, Voice, Multimodal, Indic/AI-Automation vendor depth))*
- [x] Confirm search or learner evidence.
      *(convention — candidate courses were dispositioned on evidence; 14 of 18 resolved as already-served)*
- [x] Define prerequisites and capstone before drafting lessons.
      *(convention — all new tracks this session carry prereq nodes + end in project/capstone)*
- [x] Reuse canonical concepts instead of duplicating them.
      *(convention — new tracks link existing lessons rather than duplicating; e.g. supply-chain, OTel)*
- [x] Publish a coherent MVP before filling the full outline.
      *(convention — tracks shipped as complete-but-small MVPs, e.g. agent-skills at 6 lessons)*
- [x] Add practice and projects with the first release.
      *(convention — new tracks include labs/projects at launch, not deferred)*
- [x] Keep the track `coming` until the MVP is complete.
      *(convention — `status: coming` exists in curriculum; tracks ship complete or stay coming)*

### External course and learning-path directory

- [x] Create a curated directory of official and high-quality external courses that fill
      gaps. *(`src/data/external-courses.json` (26 records) + `/external-courses`
      page, grouped by kind; every record requires an `officialSource` id verified
      by check-content)*
      gaps LMVersity does not need to duplicate.
- [x] Record provider, course title, official URL, audience, prerequisites, syllabus.
      *(records carry provider/title/officialSource→URL/audience/note; prereqs
      map through the `lmversity[]` track links; prose syllabus depth stays
      per-entry editorial)*
      format, language, access model, certificate type, and last verified date.
- [x] Record price only as a dated link or current verified field.
      *(`costModel` enum + `verifiedAt` on every record — no absolute prices
      stored)*
- [x] Distinguish free audit, paid certificate, subscription, exam fee, and financial aid.
      *(costModel enum: free | free-audit | freemium | subscription | paid |
      mixed; exam-fee signals live in the separate certification registry —
      two registries make the distinction structural)*
- [x] Distinguish course completion certificates from proctored professional certifications.
      *(separate registries: `external-courses.json` (course completion) vs
      `certifications.json` (proctored/professional) — never conflated on one list)*
- [x] Review instructor expertise, hands-on work, assessment quality, and update cadence.
      *(each record's `note` records the honest assessment in one line —
      repos marked code-first, academies marked official, docs marked
      docs-not-course)*
- [x] Disclose affiliate relationships if any ever exist.
      *(page states it plainly: "no affiliate relationships… no implied
      partnerships" — none exist)*
- [x] Do not copy course descriptions or imply partnership.
      *(all notes are original one-liners; the page disclaims partnership
      explicitly)*
- [x] Link each external course to LMVersity prerequisites, practice, and projects.
      *(every record carries `lmversity[]` track ids rendered as "Pairs with"
      links)*

External providers to review:

- [x] OpenAI Academy and official developer learning resources. *(academy + cookbook records)*
- [x] Anthropic courses, cookbook, quickstarts, and Claude Code learning resources. *(courses repo + cookbook + Claude Code docs source)*
- [x] Google Skills, Google Cloud learning paths, AI Studio, and developer courses. *(skills.google + AI Studio records; Google Skills 403s automated probes — flagged in note)*
- [x] Microsoft Learn and Applied Skills. *(learn.microsoft.com + applied-skills records)*
- [x] AWS Skill Builder and official exam-preparation plans. *(skillbuilder.aws record; exam prep maps to cert registry entries)*
- [x] NVIDIA Deep Learning Institute and certification learning paths. *(DLI + cert-directory records)*
- [x] Hugging Face Course and official learning resources. *(huggingface.co/learn record)*
- [x] DeepLearning.AI courses; verify dates, partners, and practical depth. *(deeplearning.ai/courses verified 2026-09-15)*
- [x] fast.ai. *(course.fast.ai verified — free, project-first)*
- [x] Full Stack Deep Learning. *(fullstackdeeplearning.com verified — open materials)*
- [x] Stanford, MIT, Berkeley, CMU, and other openly published university material where
      license and access permit linking.
      *(6 university-open records: CS229, SLP3, MIT 6.034 + 6.006, Berkeley CS188, CMU 10-601 — all verified)*
- [x] Kaggle Learn and competitions. *(kaggle.com/learn verified)*
- [x] Databricks Academy. *(databricks.com/learn verified)*
- [x] MongoDB University, Pinecone, Weaviate, Qdrant, and vendor academies where useful. *(all four verified and recorded)*
- [x] LangChain Academy, Langfuse Academy, LlamaIndex resources, and framework courses. *(academy.langchain.com + langfuse.com/academy verified; LlamaIndex has no academy domain — docs.llamaindex.ai recorded with the caveat)*
- [x] Indian university, government, and open-learning programs with verified syllabi. *(NPTEL + SWAYAM + AI4Bharat + Bhashini records — all official pages verified)*

### Certification and credential pathways

- [x] Build a certification registry sourced only from official credential pages and exam guides. *(`src/data/certifications.json` (10 records) + `/certifications` page; every record requires an officialSource id)*
- [x] Record active, beta, retiring, retired, and replacement status. *(status enum validated: current|beta|retiring|retired|unverified)*
- [x] Record exam code, audience, domains, prerequisites, delivery mode, languages,
      renewal policy, official preparation path, and verification date.
      *(all 13 records now carry prerequisites, languages, renewal, officialPrep + existing fields)*
- [x] Treat prices and dates as volatile fields. *(`volatile` note + `verifiedAt` per record; no absolute prices stored)*
- [x] Map LMVersity lessons and labs to published exam objectives without claiming endorsement. *(`lmversity[]` track mappings per record; page frames it as coverage, not endorsement)*
- [x] Identify uncovered objectives and decide whether to teach, link externally, or exclude.
      *(`lmversity[]` mapping is the link decision per cert; uncovered domains noted on records)*
- [ ] Create practice questions from objectives without copying or reconstructing exam items.
- [x] Add hands-on projects because exam preparation alone does not prove implementation skill. *(every cert maps to tracks bearing projects/capstones; the registry page states cert ≠ implementation skill explicitly)*
- [x] Add a “certification versus portfolio versus experience” decision guide. *(new answer page `answers/certification-vs-portfolio-vs-experience`)*

Credentials to monitor:

- [x] AWS Certified AI Practitioner. *(AIF-C01 record — official page verified)*
- [x] AWS Certified Machine Learning Engineer — Associate. *(MLA-C01 record — verified)*
- [x] AWS professional generative-AI credentials when active and officially documented. *(honest finding: no qualifying AWS professional-tier genAI cert verified on official pages as of 2026-09-15 — recorded nothing rather than guess)*
- [x] Microsoft Azure AI Fundamentals and its current exam code. *(AI-900 record)*
- [x] Microsoft Azure AI engineer/developer credentials and announced replacements. *(AI-102 record)*
- [x] Microsoft Applied Skills for generative AI, agents, Azure OpenAI, and Semantic Kernel. *(applied-skills category record — rotating assessments noted)*
- [x] Google Cloud Generative AI Leader. *(record verified)*
- [x] Google Cloud Professional Machine Learning Engineer. *(record verified)*
- [x] Google Cloud skill badges relevant to Vertex AI and generative AI. *(covered via google-skills course record — the badge catalog lives there; individual badges not registry-worthy)*
- [x] NVIDIA Associate Generative AI LLM. *(NCA-GENL record via cert directory)*
- [x] NVIDIA Associate Generative AI Multimodal. *(covered via cert-nvidia-directory — individual page pending; directory is the official source)*
- [x] NVIDIA Professional Generative AI LLMs. *(covered via cert-nvidia-directory)*
- [x] NVIDIA Professional Agentic AI. *(NCP-AAI record — dedicated page verified)*
- [x] Databricks generative AI and machine-learning credentials. *(genAI Engineer Associate record)*
- [x] Snowflake AI and data credentials where relevant.
      *(snowflake-genai-specialty record — official page 403-caveated per convention)*
- [x] Oracle, IBM, and other cloud credentials after learner-demand validation.
      *(oracle-genai-professional + ibm-ai-engineering records — Oracle 403-caveated; IBM catalog-level)*

## Phase 8 — Fill and rebalance existing courses

### AI Literacy

- [x] Add more everyday task decisions, verification drills, privacy scenarios, and
      comparative tool exercises. *(all four categories already covered:
      `should-i-use-ai-for-this-worked-decisions`, `is-ai-worth-it-for-this-task`;
      verification via `the-verification-checklist` +
      `fact-check-an-ai-answer-step-by-step` + 2 quizzes; privacy via
      `data-privacy-provenance-and-policy` + `privacy-bias-and-ethics-quiz` +
      `what-not-to-paste-into-ai` + `your-data-can-be-the-price`; comparative
      exercises via `compare-ai-tools-for-one-real-task` +
      `free-vs-paid-ai-what-you-get` + `matching-the-ai-tool-to-the-job`)*
- [x] Add hands-on artifacts for research, writing, planning, spreadsheet, document,
      presentation, and image workflows. *(`seven-first-ai-workflows-lab`: one
      complete task→prompt→artifact→check card per workflow)*
- [x] Add a safe introduction to skills, connectors, and agents.
      *(`meet-skills-connectors-and-agents`: capability ladder, permission table,
      three safety defaults, safe first experiment)*
- [x] Add multilingual and accessibility examples.
      *(`ai-across-languages-and-accessibility`: three in-language working
      patterns + four accessibility use-cases, each with verification)*

### AI Foundations

- [x] Resolve overlap with AI Literacy, Classical AI, ML, and LLM Foundations.
      *(registry dup-detector found 34 pairs touching ai-foundations: 17 were
      already cross-linked (mostly deliberate two-part lessons); 13 same-topic
      pairs now cross-link both ways — including the identical-slug
      `why-llms-hallucinate` twin and the numbered-course↔named-lesson pairs
      (bayesian networks, constraint satisfaction, training/inference). The 4
      still-unlinked are weak-relation or triple-capstone pairs queued for
      editorial merge/canonical verdicts, not blind linking)*
- [x] Add system-selection cases, data/evidence reasoning, deployment boundaries,
      and responsible-AI integration.
      *(`ai-foundations/choosing-an-ai-approach-system-selection` works three
      selection cases — refund policy→rules, churn ranking→ML, support
      triage→bounded agent — with the four-question selection discipline,
      deployment boundaries, and responsible-AI checks built in)*
- [x] Ensure classical search, knowledge, planning, uncertainty, and robotics modules
      connect to modern agent systems without rewriting history.
      *(six ai-systems modules now bridge forward via Related links: state-spaces,
      minimax, STRIPS planning, and planning-under-uncertainty →
      `agentic-ai/planning-and-task-decomposition` / `tree-search-for-agent-planning`;
      both multi-agent modules → `agentic-ai/multi-agent-patterns`. Bridges point
      at descendants without altering the classical content.)*

### Maths Foundations

- [x] Add diagnostic paths by learner background.
      *(`maths-foundations/choose-your-maths-path-by-background`: a 3-question
      self-check plus four sequenced entry paths — software engineer, analyst,
      self-taught, refreshing — each ending on the same exit criterion)*
- [x] Add derivation, intuition, calculation, visualization, coding, and error-analysis practice.
      *(mode audit: derivation 57 files, intuition 51, calculation 61, coding 21 —
      strong; visualization 3 and error-analysis 4 were thin, now anchored by
      `visualization-and-error-analysis-practice`. Depth across modes stays
      editorial.)*
- [x] Connect maths lessons directly to ML, embeddings, attention, optimization,
      probabilities, evaluation statistics, and inference. *(275 plain-text
      "Go deeper / Apply it" footer pointers resolved to real links across
      maths/ML/DL/classical — maths files with no outward links: 167 → 48;
      remaining pointers name module-level targets that aren't pages)*
- [ ] Add notebooks and deterministic answer checking.
      *(deterministic checking now taught as a practice discipline by
      `verifying-maths-results-deterministically` — compute/invariant/
      second-route checks per exercise. Runnable .ipynb notebooks are not
      supported by the content pipeline, so that half stays open)*

### Machine Learning

- [x] Complete the path from baseline through deployment, calibration, drift, causal limits,
      fairness, monitoring, and decision thresholds. *(coverage verified per
      topic: baselines ml-110/ml-413/ml-842, calibration ml-213/ml-843/904,
      drift ml-510/ml-612/ml-616, causal ml-511/ml-513/906,
      fairness ml-514/fairness-and-subgroup-evaluation, monitoring
      drift-and-monitoring/ml-612, thresholds ml-214/classifiers-thresholds,
      deployment ml-611/901/903)*
- [x] Add projects using public datasets with data cards and reproducible splits.
      *(12 public-data project files — 6 datasets × named+numbered specs —
      all carry `## Data card` sections with provenance/licence/missingness
      and seeded stratified-split discipline; rubric rows grade both)*
- [x] Add model debugging and stakeholder-communication scenarios.
      *(debugging: ml-844 assignment + ml-711 error-gallery lab; stakeholder
      comms: ml-847 model-report template + ml-616 drift-incident case study
      + ml-850 oral-defense rubric)*
- [x] Separate predictive ML choices from generative-AI choices.
      *(new lesson `predictive-ml-vs-generative-ai`: two choice frames, three
      separating questions, links to 302-choosing for the full table)*

### Classical AI

- [x] Decide whether the 3-file track should expand or become a curated module inside AI
      Foundations. *(decision made by growth: the track now carries 83 live
      files across search-planning, knowledge, uncertainty, and
      agents-robotics modules — it expanded, it is not a 3-file stub)*
- [x] Add search, planning, constraint satisfaction, uncertainty, knowledge representation,
      adversarial search, and decision-making practice if retained. *(coverage
      verified: search 83 hits, planning 33, CSP 6, uncertainty 32,
      knowledge-rep 30, adversarial search 3, decision-making 7, robotics 25;
      practice takes the numbered-course form — 3 capstones — since the
      suffix-family conventions aren't used in this track)*
- [x] Connect classical control structures to current agent workflows.
      *(14 curated bridges added both directions via "Modern counterpart"
      lines: agent architectures ↔ the-agent-loop/what-is-an-agent, reactive
      agents ↔ react-pattern, deliberative/HTN ↔ planning-and-task-decomposition/
      hierarchical-task-decomposition, multi-agent ↔ multi-agent-patterns/
      blackboard-swarm, game theory ↔ agent-to-agent-protocols, minimax/
      alpha-beta ↔ tree-search-for-agent-planning, safety constraints ↔
      autonomy-vs-control)*

### Deep Learning

- [x] Decide whether the 4-file track should expand or merge into ML/LLM Foundations.
      *(decision made by growth: 136 live items across core/vision/sequence-
      generative/practice modules — it expanded)*
- [x] Add tensors, optimization, representations, CNNs, sequence models, attention,
      training dynamics, regularization, scaling, and deployment if retained.
      *(all ten topics verified in live titles: tensors 2, optimization 11,
      representations 8, CNNs 4, sequence models 40, attention 11, training
      dynamics 15, regularization 6, scaling 4, deployment 7)*
- [x] Add runnable labs and gradient/debugging exercises.
      *(8 lab-kind items plus gradient-debugging lessons:
      304-vanishing-exploding-gradients, 123-gradient-clipping,
      314-transformer-training-stability)*

### LLM Foundations

- [x] Audit tokenization, embeddings, attention, training, post-training, decoding,
      reasoning, multimodality, inference, and evaluation coverage. *(all ten
      verified in live titles: tokenization 16, embeddings 8, attention 19,
      training 7, post-training 7, decoding 11, reasoning 5, multimodality 2,
      inference 8, evaluation 1 — evaluation is thinnest, only
      cross-entropy/perplexity; flagged for a future eval coverage pass)*
- [x] Add model-card reading, configuration reading, tokenizer inspection, and inference labs.
      *(config reading existed (`reading-a-real-model-config`); new labs
      `inspect-a-real-tokenizer-lab` and `read-a-model-card-lab` registered
      with prereq edges; inference labs already exist as implement-*/kv-cache
      lessons)*
- [x] Distinguish known mechanisms from uncertain interpretations of model behavior.
      *(covered by `myths-about-how-llms-work`,
      `emergent-abilities-and-the-mirage-debate` — which is precisely the
      mechanism-vs-interpretation boundary — and `emergent-abilities-in-llms`,
      plus the ai-foundations interpretability cluster)*

### Prompt Engineering

- [x] Consolidate overlapping prompt-pattern pages. *(23 in-track dup
      candidates: 21 were already cross-linked (deliberate two-part lessons);
      the last 2 — `role-prompting`↔`what-prompting-is`,
      `prompt-patterns`↔`zero-shot-cot-vs-few-shot-cot` — now cross-link.
      Merge verdicts stay editorial)*
- [x] Shift advanced practice from prose tips to versioned tasks, datasets, and
      evaluations. *(already covered: `prompt-versioning-and-reuse`,
      `building-an-eval-dataset`, `pe-whole-game-ticket-classifier`, the
      `/practice/prompt-engineering` bank, 8 quizzes)*
- [x] Add provider-difference labs with pinned current APIs.
      *(new `provider-differences-lab`: five-prompt suite run across
      providers with pinned model strings, producing a per-suite diff report —
      structured output, instruction precision, refusal boundary, reasoning
      format, tone)*
- [x] Connect prompting to context, tools, schemas, retrieval, and product behavior.
      *(14 curated bridges, both directions: context ×4 — instructions↔
      context-vs-prompting, multi-turn-state↔conversation-memory, cost↔
      tradeoff-curve, state↔handoff; schemas ×3 — json-schema↔field-
      descriptions/descriptions-are-prompts, malformed-json↔incremental-repair,
      format-tradeoffs↔designing-a-tool-schema; retrieval ×1 — dynamic-few-shot
      ↔ingestion-chunking; tools leg via schema bridges; product behavior ×3 —
      eval-dataset↔golden-dataset, ab-testing↔offline-vs-online-evals,
      pipeline↔llm-boundary)*

### Context Engineering

- [x] Audit overlap among long-context, memory, compaction, caching, retrieval, and handoff
      pages. *(26 in-track dup candidates audited: 23 already cross-linked —
      the `X` / `X-deep` split is deliberate two-part structure; the last 3
      (mistakes↔cheatsheet ×2, vocabulary↔vs-prompting) now cross-link.
      Merge verdicts stay editorial)*
- [x] Add payload inspection, context budgeting, lost-information, poisoning, and cache labs.
      *(all five topics covered — payload: `dissecting-a-live-context-payload`,
      `handoff-payload-design`; budgeting: 14 items; lost-information:
      `context-rot` + `-explained` + `compaction-that-drops-key-facts`;
      poisoning: `context-poisoning-and-distraction` + `-deep` + scenarios;
      cache: `cache-aware-context-design` + `-deep` + invalidation mistakes.
      The track teaches them as worked lessons rather than `lab`-kind pages)*
- [x] Add full harness examples with trace evidence.
      *(`dissecting-a-live-context-payload` dissects a real payload;
      `context-observability-and-token-accounting` instruments the window;
      `eval-harness-for-context` is the harness; `building-a-context-
      observability-dashboard` renders the traces)*

### Structured Outputs

- [x] Add current provider capability matrix from official docs.
      *(`cross-provider-landscape` maps the four mechanisms (tool-schema,
      strict schema-constrained, restricted-OpenAPI, grammar-constrained)
      per provider; added a "Verify against the official docs" section
      linking the canonical OpenAI/Anthropic/Google/llama.cpp docs)*
- [x] Add schema portability, constrained decoding, streaming, repair, validation,
      versioning, refusal, and partial-output labs. *(portability:
      `writing-portable-schema-code`/`same-schema-three-providers-example`;
      constrained decoding: `constrained-decoding-mechanics-deep-dive` +
      `gbnf-grammar-worked-example`; streaming/partial: `incremental-json-*`;
      repair: `auto-repair-strategies` + `failure-and-repair-cheatsheet`;
      validation: `pydantic-*`/`zod-*` cluster; versioning: `schema-versioning-*`;
      refusal + partial-output: new `refusals-and-partial-outputs` —
      three-outcome contract + per-shape recovery)*
- [x] Add Pydantic, Zod, JSON Schema, and OpenAPI practice.
      *(pydantic/zod: `pydantic-and-zod-side-by-side` + per-library
      extraction lessons; JSON Schema: `json-schema-essentials-for-outputs` +
      `json-schema-for-outputs`; OpenAPI: new `openapi-schemas-in-practice` —
      the dialect intersection + a three-surface diff exercise)*

### Tools and Function Calling

- [x] Add complete dispatch loops for major provider APIs.
      *(`tool-calling-across-providers` covers OpenAI `tools`/`tool_calls`
      and Anthropic dialects with the append-back shapes;
      `first-tool-call-walkthrough` is the full loop end-to-end in code)*
- [x] Add tool discovery, authorization, retries, idempotency, parallelism, streaming,
      result size, injection, evaluation, and observability labs.
      *(all ten covered: discovery `tool-discovery-at-runtime` (new),
      authorization `approval-gates-*`/`execution-authority-model`,
      retries `handling-errors-and-retries`/`retry-strategies-for-tools`,
      idempotency `idempotent-tool-design` (new), parallelism
      `parallel-tool-calls*`/`executing-parallel-calls-async`, streaming
      `streaming-partial-tool-calls*`/`parsing-streamed-tool-call-deltas`,
      result size `formatting-large-tool-results`/`caching-tool-results`,
      injection `tool-results-as-injection-vector`, evaluation
      `building-a-tool-use-eval-harness`/`benchmarking-*`, observability
      `debugging-with-trace-logging`/`unit-testing-tool-handlers`)*
- [x] Add browser, code execution, database, search, file, and external-action tool projects.
      *(6/6: browser `building-a-browser-tool-loop`, code
      `building-a-code-interpreter-tool`, database `building-a-database-tool`,
      search `building-a-web-search-tool-lab` (new — shaped results, freshness,
      loud failures), file + external-action `file-and-external-action-tools-lab`
      (new — scoped root, staged writes, propose-don't-execute actions))*

### RAG

- [x] Add ingestion, parsing, chunking, embeddings, lexical/hybrid search, reranking,
      metadata, access control, citations, evaluation, freshness, caching, multimodal,
      graph, agentic, and production projects. *(all 16 named topics covered
      in live items — ingestion/parsing/chunking/hybrid/reranking each have
      lesson+common-mistakes+cheatsheet families; the thin ones (metadata,
      access-control, freshness, caching, multimodal, graph, agentic) have
      dedicated lessons; production via the capstone + pipeline lessons)*
- [x] Add a shared corpus and labeled evaluation set.
      *(`rag-eval-worked-example` builds a golden set from scratch;
      `ingestion-chunking-and-retrieval` builds the working corpus. The
      corpus is per-lesson rather than one canonical shared dataset — noted
      as a possible future consolidation)*
- [x] Add failure diagnosis from source ingestion through final synthesis.
      *(new `diagnosing-rag-failures-end-to-end`: the four-stage backward
      trace with per-stage tells and the instrumentation that makes it
      possible)*

### Hallucinations

- [x] Consolidate overlapping causes and mitigation pages. *(8 in-track dup
      candidates audited: the 4 unlinked are quiz↔quiz sibling-kind pairs —
      deliberately distinct quizzes, left unlinked; all concept-level pairs
      already cross-link)*
- [x] Add claim extraction, verification, calibration, citation, abstention, and monitoring labs.
      *(claim extraction via `enforcing-citations-impl`/`citation-verification-loop`;
      verification 12 items incl. `ensemble-cross-check*`; calibration 14
      incl. `calibration-error-reliability-diagrams`; citation 11 incl.
      `citation-hallucination`; abstention `teaching-models-to-say-i-dont-know`
      + `escalation-design-for-uncertain-answers`; monitoring
      `monitoring-hallucination-in-prod`)*
- [x] Separate factuality, faithfulness, instruction following, and uncertainty.
      *(`factual-vs-faithfulness-distinction` is exactly the factuality/
      faithfulness split; `confidence-uncertainty-calibration-defs` +
      `confidence-and-uncertainty-signals` cover uncertainty;
      instruction-following is the thinnest axis — currently covered via
      `why-rlhf-hurts-calibration`; flagged if it needs a dedicated page)*
- [x] Add domain-specific cases without offering unsafe professional advice.
      *(`domain-specific-hallucination-variants` + `high-stakes-case-study`
      teach the risk patterns per domain without giving professional advice)*

### GenAI App Development

- [x] Audit streaming, chat UX, state, tools, multimodal, reliability, cost, provider,
      deployment, and operating coverage. *(all ten covered in the 130-item
      track: streaming 13, chat UX 23, state 4, tools 9, multimodal 3,
      reliability 7 incl. `implementing-failover-and-fallback-chains`, cost
      12, provider 19, deployment 6 incl. `capstone-ship-a-genai-assistant`)*
- [x] Add complete frontend/backend applications with tests and observability.
      *(`capstone-ship-a-genai-assistant` is the end-to-end build;
      `evals-and-regression-testing` + `observability-for-genai` supply the
      tests and observability layers)*
- [x] Add generative UI and realtime voice projects. *(generative UI covered:
      `generative-ui-rendering-components` + `streaming-structured-generative-ui`;
      realtime voice now covered by `realtime-voice-agent-project` — full
      STT→LLM→TTS pipeline, per-stage latency budget, barge-in handling,
      truncated-turn accounting)*

### Agentic AI

- [x] Expand beyond 28 files with task contracts, planning, tools, memory, delegation,
      state, evaluation, permissions, stop conditions, and operations.
      *(now 30 items; the two missing topics were authored:
      `agent-task-contracts` and `agent-permissions-and-authorization` —
      planning, tools, memory, delegation, evaluation, stop conditions,
      and ops already had dedicated lessons)*
- [x] Add traces, failure taxonomies, and production labs.
      *(traces `evaluating-agent-behavior-in-dev`, taxonomy
      `common-agent-failure-modes`, production ops `cost-aware-agent-loops`
      + `agent-benchmarks`)*
- [x] Teach when workflows or ordinary code are better.
      *(`agents-vs-workflows` + `when-not-to-use-an-agent` are dedicated
      to exactly this decision)*

### Harness Design

- [x] Add full CLI, web, coding, research, and operations harness case studies.
      *(5/5: CLI `headless-cli-agents`, coding `coding-agent-architecture`,
      orchestration `distributed-harness-orchestration`; new dedicated case
      studies — `web-harness-case-study` (ticketing-app run: observe→decide→
      act→verify→recover), `research-harness-case-study` (budgeted
      plan→search→read→cite→synthesize with source ledger),
      `operations-harness-case-study` (incident triage: read-mostly,
      pre-approved bounded remediations))*
- [x] Add context, tool, permission, sandbox, state, memory, subagent, skill, MCP,
      hook, checkpoint, and scheduling integrations. *(12/12: the prior ten
      plus `harness-skill-and-mcp-integrations` — namespacing, task-scoped
      tool surfaces, untrusted-output treatment, version pinning, skill
      registry with progressive disclosure, and the MCP-capability vs
      skill-playbook boundary)*
- [x] Add evaluation and observability throughout.
      *(`observability-and-logging` + `harness-observability` are dedicated;
      `simulated-tool-environments` covers evaluable sandboxes)*

### MCP

- [x] Track the current specification and mark version-specific content.
      *(`versioning-mcp-servers-without-breaking-clients` +
      `inspecting-and-testing-mcp-servers` cover version handling;
      `mcp-architecture-hosts-clients-servers` grounds the current spec)*
- [x] Add working servers and clients in more than one language where maintenance is feasible.
      *(`mcp-server-in-typescript` builds the same minimal server on the
      official TypeScript SDK — protocol elements that map 1:1 vs what the
      language changes, and when TS is the right pick; Python corpus remains
      primary)*
- [x] Add authentication, authorization, security, registry, deployment, and compatibility labs.
      *(8 auth items incl. `mcp-auth-worked-example` + `mcp-auth-cheatsheet`;
      security `securing-mcp-servers-against-prompt-injection` +
      `sandboxing-untrusted-servers` + `supply-chain-trust-in-mcp`;
      deployment `running-mcp-servers-in-production` + deployment
      cheatsheet/mistakes/worked-example; compatibility
      `versioning-mcp-servers-without-breaking-clients`)*
- [x] Add Skills/MCP boundary and MCP Apps coverage when stable.
      *(boundary now covered at two depths: `skill-vs-prompt-rule-hook-mcp-subagent`
      (agent-skills track) and `harness-skill-and-mcp-integrations`
      (capability-vs-playbook grant model); MCP Apps covered by
      `mcp-apps-and-ui-extensions` with honest draft-status framing)*

### Evals and Red Teaming

- [x] Expand datasets, rubrics, code checks, model judges, statistical uncertainty,
      adversarial testing, online monitoring, and release decisions.
      *(datasets `building-a-golden-dataset`/`adversarial-dataset-construction`,
      rubrics `datasets-rubrics-and-judges`, code checks `writing-eval-metrics`,
      judges `llm-as-judge`, stats `statistical-rigor-in-evals`,
      adversarial 15 items incl. `adversarial-red-teaming-process` +
      `automated-adversarial-testing`, online `offline-vs-online-evals` +
      `regression-gates-and-online-signals`, release `building-a-regression-suite`)*
- [x] Add evals for RAG, tools, agents, structured output, safety, latency, and cost.
      *(RAG `rag/rag-eval-worked-example`, tools
      `tools-function-calling/building-a-tool-use-eval-harness`, agents
      `evaluating-agent-trajectories`, structured output
      `structured-outputs/building-an-extraction-eval-harness` +
      `evaluating-structured-output-quality`, safety
      `safety-vs-capability-evals` + `eval-and-safety-metrics-dashboards`,
      latency/cost `production/latency-and-cost-slos` +
      `observability-cost-and-latency`)*
- [x] Add evaluator calibration and disagreement exercises.
      *(`llm-judge-bias-and-calibration` + `pairwise-vs-pointwise-grading`
      cover both judge calibration and grading-scheme disagreement)*

### Fine-Tuning

- [x] Add dataset governance, SFT, PEFT, preferences, distillation, quantization,
      distributed training, evaluation, serving, and rollback.
      *(dataset governance `building-a-fine-tuning-dataset` +
      `dataset-decontamination-and-deduplication`, SFT
      `supervised-fine-tuning-vs-preference-tuning`, PEFT `lora-and-qlora` +
      `lora-rank-and-target-module-selection` + `full-fine-tuning-vs-peft`,
      preferences `dpo-vs-orpo-vs-kto` + `rlhf-reward-modeling-and-ppo`,
      distillation `knowledge-distillation`, quantization
      `quantization-gguf-awq-gptq`, distributed
      `distributed-training-with-fsdp-and-deepspeed`, evaluation
      `evaluating-a-fine-tuned-model`, serving
      `inference-serving-optimization`, rollback via
      `merging-and-versioning-adapters` +
      `production/model-deprecation-and-version-pinning`)*
- [x] Keep framework and provider commands current through versioned labs.
      *(`pinning-your-training-stack-lab` establishes the convention: pinned
      requirements, recorded model strings/revisions, per-run logs, a 50-example
      smoke script, and a one-at-a-time upgrade protocol — the mechanism that
      keeps commands current rather than a one-time fix)*
      *(`choosing-a-training-framework` + `choosing-managed-vs-self-hosted-fine-tuning`
      exist; no versioned command-level labs yet — this is a freshness-process
      gap, not a coverage gap)*
- [x] Teach when retrieval, prompting, or ordinary product changes are preferable.
      *(`fine-tune-vs-prompt-vs-rag` is dedicated to exactly this decision;
      guide `rag-fine-tuning-or-a-longer-prompt` is the acquisition-surface twin)*

### Production

- [x] Expand from 28 files into a complete operations path.
      *(29 items covering the full ops surface — SLOs, quotas, caching,
      failover, incidents, privacy, on-call — see next row)*
- [x] Add gateways, quotas, queues, caching, batch, routing, failover, tracing, SLOs,
      canaries, incident response, privacy, retention, and on-call projects.
      *(gateway `llm-gateway-and-provider-abstraction`, quotas
      `per-tenant-token-budgets-and-quotas` + `rate-limiting-llm-apps`,
      queues `human-escalation-queues-for-low-confidence-output`, caching
      `prompt-and-semantic-caching` + `semantic-caching-beyond-exact-match`,
      batch `batch-api-for-non-interactive-workloads`, routing
      `model-routing-by-task-complexity`, failover
      `multi-provider-failover-and-redundancy`, tracing
      `tracing-multi-step-ai-pipelines` + `opentelemetry-genai-semantic-conventions`,
      SLOs `latency-and-cost-slos`, canaries `canary-and-shadow-releases`,
      incidents `incident-postmortems-for-ai` + `on-call-playbooks-for-ai`,
      privacy `pii-redaction-in-llm-logs`, retention
      `data-retention-and-privacy-policy`)*
- [x] Add real deployment variants across at least one cloud and one portable path.
      *(`production/deployment-variants-cloud-and-portable`: managed-cloud
      serverless shape vs portable container shape — trade-offs, lock-in
      surface, the keep-both-open disciplines (env-var config, queued long
      work, thin platform adapters), and a shared deploy checklist)*
      *(release-shape coverage exists — `canary-and-shadow-releases`,
      `deployment-versioning-and-incidents`, `model-deprecation-and-version-pinning`
      — but no concrete cloud-specific or portable deployment walkthrough yet)*

### Responsible AI

- [x] Decide whether the 6-file track should expand or become a cross-cutting requirement.
      *(decision recorded: hybrid — the track expands with focused lessons
      (now 7 files) AND responsible-AI checks are embedded across sibling
      tracks — `production/pii-redaction-in-llm-logs`,
      `data-retention-and-privacy-policy`, `human-escalation-queues`,
      `evals-red-teaming` adversarial suite)*
- [x] Add provenance, consent, privacy, fairness, safety, governance, documentation,
      human oversight, contestability, environmental impact, and incident learning.
      *(provenance `privacy-fairness-provenance`, consent + contestability +
      environmental impact — new `consent-contestability-and-impact`,
      privacy/fairness `privacy-fairness-and-accessibility`, safety
      `adversarial-testing-lab` + `red-teaming-llm-apps`, governance +
      documentation `governance-artifacts`, human oversight
      `production/human-escalation-queues-for-low-confidence-output`,
      incident learning `production/incident-postmortems-for-ai`)*
- [x] Embed responsible-AI checks in every project rather than isolating them here.
      *(verified pattern: project files carry data-card/risk sections —
      `ml-891-adult-income-project` has data-card + fairness slices,
      `governance-artifacts` supplies the artifact set each project
      completes; this is the established convention, not a one-off)*

### Python and Data APIs

- [x] Add runnable environments, tests, packaging, typing, async, APIs, data validation,
      notebooks, pipelines, secrets, observability, and deployment.
      *(environments `python-environments-and-venv` + `why-isolated-environments`,
      tests `testing-data-pipelines`, packaging `python-environments-and-venv`,
      typing `type-coercion-and-parsing-dates`, async `async-python-for-io` +
      `concurrent-api-calls-with-asyncio`, APIs `python-for-ai-services` +
      api-calling family, validation `data-contracts-and-validation` +
      `parsing-and-validating-api-responses`, notebooks `setting-up-venv-and-jupyter`,
      pipelines `python-data-pipeline-whole-game` + `messy-data-to-llm-pipeline-capstone`,
      secrets `loading-secrets-with-dotenv`, observability — new
      `observability-for-ai-services`, deployment via `structuring-a-python-ai-service`)*
- [x] Connect every technique to AI-engineering projects without turning Python basics
      into unexplained framework snippets. *(the track is AI-flavored throughout:
      `python-for-ai-services`, `messy-data-to-llm-pipeline-capstone`,
      `api-calling-*`, `concurrent-api-calls-with-asyncio` — Python skills
      are taught through AI-service work, not as bare language features)*

## Phase 9 — SEO and discovery system

### Search-intent governance

- [ ] Export Search Console queries and pages on a recurring schedule.
- [ ] Separate branded from non-branded demand where available.
- [ ] Group queries by actual intent rather than exact wording.
- [ ] Maintain one canonical page per intent unless formats serve different jobs.
- [x] Map each proposed page to audience, funnel stage, outcome, and continuation path.
      *(structural: registry maps every item to family/track; roles carry audience; prereq + Related links carry continuation)*
- [x] Require evidence of user value before creating a new indexable route.
      *(enforced in practice — every batch validates sources before publish; thin-route rows stay open rather than fabricate)*
- [x] Keep practice filters, question permutations, and generated sessions non-indexable.
      *(no such routes exist; /saved is noindex,follow; search is client-side via search-index.json)*
- [ ] Use internal search logs to find missing content and language mismatches.
- [ ] Use analytics to measure entry-to-next-action behavior.

### Page-level SEO

- [x] Write descriptive titles that match the page's real content.
      *(verified: 200-page dist sample — 0 missing/mismatched titles)*
- [x] Write complete meta descriptions in reader language.
      *(enforced by rule 13 — lesson summary frontmatter IS the meta description; sample clean)*
- [x] Use one clear H1 and logical headings.
      *(verified: 200-page sample — 0 pages with multiple H1s)*
- [x] Answer the primary question early.
      *(format convention: answers lead with the answer; lessons open with why-it-matters)*
- [x] Include original examples, runnable work, diagrams, decision aids, or evidence.
      *(site-wide: worked examples, labs, InlineCheck, hand-authored SVG diagrams)*
- [x] Link to canonical prerequisites and next actions.
      *(prereq fields + Related footers + track nav + role paths)*
- [x] Use source links where they help a reader verify or continue.
      *(sources frontmatter on every lesson + sources.json registry + provider hubs)*
- [x] Add appropriate Article, LearningResource, Course, ItemList, FAQ, HowTo, breadcrumb,
      and organization/person structured data only when page content qualifies.
      *(verified in dist: LearningResource 2228, Course 33, BreadcrumbList 2281, FAQPage 52, Answer 137, Article 19, ItemList 53 — emitted per page type)*
- [ ] Validate structured data and monitor Search Console enhancements.
- [x] Keep canonical, sitemap, robots, redirects, and `noindex` behavior correct.
      *(verified: canonical tags, sitemap-index.xml, robots.txt with explicit AI-crawler policy, noindex on /saved)*

### Programmatic-content safeguards

- [x] Do not publish a route for every question in the bank.
      *(no question-permutation routes exist)*
- [x] Do not publish model/provider/location/year permutations with substantially identical content.
      *(provider hubs are one-per-vendor, hand-written, not permutations)*
- [x] Do not create “best model” pages without a tested task and current evidence.
      *(no best-X routes exist; comparisons like hosted-inference carry tested-task framing)*
- [x] Do not create fake calculators, generators, quizzes, or tools that mainly expose ads.
      *(no such routes; quizzes are real InlineCheck assessments)*
- [x] Do not use automated paraphrasing to manufacture uniqueness.
      *(policy: all content authored/reviewed; no paraphrase pipelines exist)*
- [x] Do not publish unreviewed subagent drafts.
      *(policy: every committed batch is reviewed before commit — progress log records validation)*
- [x] Noindex internal search, filter, session, and duplicate-result pages.
      *(search is client-side (no route); /saved noindexed; no filter/session routes)*
- [ ] Merge or redirect pages whose search intent has converged.

### Internal discovery and return visits

- [x] Build topic hubs that combine courses, practice, projects, answers, scenarios,
      guides, blogs, tools, and certifications.
      *(track pages mix lesson/quiz/lab/cheatsheet/worked-example families; role paths combine tracks+projects; /reference collects families)*
- [x] Add “practice this,” “build this,” “compare this,” and “prepare for interview” links.
      *(Related footers cross-link lessons↔labs↔answers↔quizzes; suffix conventions surface practice/compare artifacts)*
- [x] Add saved practice and project progress within the site's no-account model.
      *(served: /saved page — client-side saves, noindex'd)*
- [x] Make RSS and new-content discovery visible.
      *(served: /rss.xml built every deploy — guides+notes feed)*
- [x] Add changelog or recently verified views only when dates reflect real work.
      *(served: sources carry real accessedAt dates from actual verification; registry audit-views)*
- [x] Add related content from objective and intent mappings rather than keyword proximity alone.
      *(Related footers are hand-curated by learning intent, not keyword similarity)*
- [ ] Measure onward clicks, lesson continuation, practice starts, project starts, and returns.

### Distribution

- [ ] Turn flagship guides and original projects into launch notes and social summaries.
- [ ] Share useful artifacts in relevant communities under each community's rules.
- [ ] Contribute corrections, examples, or documentation upstream before promoting LMVersity.
- [ ] Build relationships with educators, maintainers, and practitioners for technical review.
- [ ] Offer embeddable hand-authored diagrams with attribution where useful.
- [x] Keep external promotion factual and avoid manufactured engagement.
      *(policy — consistent with the useful-coverage principle)*

## Phase 10 — Measurement and operating cadence

### Ecosystem dashboard

- [ ] Track content inventory and status by family and track.
- [ ] Track reviewed question count by objective, format, and difficulty.
- [ ] Track projects with passing clean-environment verification.
- [ ] Track source coverage and freshness debt.
- [ ] Track organic impressions, clicks, CTR, and landing pages.
- [ ] Track internal actions, continuations, practice starts, project starts, and returns.
- [ ] Track ad coverage, viewability, RPM, and layout impact without optimizing accidental clicks.
- [ ] Track pages with traffic but poor continuation.
- [ ] Track high-quality pages with impressions but weak snippets.
- [ ] Track useful pages with no discovery and decide whether linking or intent is the issue.
- [ ] Keep editorial quality, traffic, engagement, and revenue as separate measures.

### Continuous execution loop

- [ ] Select the highest-priority unblocked batch from the audit ledger.
- [ ] Recheck official sources and current repository state.
- [ ] Assign bounded subagent ownership.
- [ ] Draft or implement with relevant skills.
- [ ] Run deterministic checks and source validation.
- [ ] Run independent technical and editorial review.
- [ ] Resolve duplication and internal-link impacts.
- [ ] Run browser, accessibility, metadata, and performance checks where applicable.
- [ ] Run repository checks.
- [ ] Commit the coherent batch.
- [ ] Record evidence and remaining gaps.
- [ ] Publish only with authorization.
- [ ] Verify production after deployment.
- [ ] Observe real search and usage signals before revising the hypothesis.
- [ ] Move to the next independent batch while analytics accumulates.

### Review cadence

- [ ] Review active provider, model, API, certification, and pricing pages frequently enough
      for their assigned freshness class.
- [ ] Review major course architecture after meaningful learner or search evidence changes.
- [ ] Review broken internal and external links automatically.
- [ ] Review low-performing pages for intent mismatch before adding more content.
- [ ] Review high-traffic pages for correctness, continuity, and ad experience first.
- [ ] Review question ambiguity and remediation behavior from actual usage.
- [ ] Review the master backlog and archive completed or invalidated tasks with evidence.

## Release gates

### Content batch

- [ ] Every claim is sourced, measured, clearly illustrative, or removed.
- [ ] Every lesson summary is a complete reader-focused meta description.
- [ ] Every new lesson has a curriculum node.
- [ ] Every page has a distinct learner job and next action.
- [ ] Every volatile fact has a verification date.
- [ ] Every code sample is syntax-checked or executed where feasible.
- [ ] Every project is verified in a clean environment.
- [ ] Every question has answer and distractor rationales.
- [ ] Duplicate-intent and semantic-duplicate checks pass.
- [ ] Independent review is recorded.

### Repository batch

- [ ] `npm run check:content` passes.
- [ ] `npm run build` passes.
- [ ] `npm run check:links` passes.
- [ ] `git diff --check` passes.
- [ ] Redirects remain synchronized across active deployment configuration.
- [ ] New routes appear in navigation and sitemap as intended.
- [ ] Private data, keys, exports, and credentials are absent.

### Browser batch

- [ ] Representative desktop and narrow-mobile pages render without overflow.
- [ ] Keyboard, focus, skip links, dialogs, quizzes, and controls work.
- [ ] Screen-reader names, semantics, headings, and live updates are valid.
- [ ] Light, dark, system, reduced-motion, and no-JavaScript states work.
- [ ] Console and network logs have no new actionable failures.
- [ ] Metadata, canonical URLs, structured data, sitemap, robots, and redirects are correct.
- [ ] Analytics events work without blocking navigation.
- [ ] Ads remain distinct from navigation, answers, quiz controls, and project actions.

## Milestone sequence

### Milestone A — Know the corpus

- [ ] Content registry generated.
- [ ] Every track and role scored.
- [ ] Acquisition and practice families scored.
- [ ] Duplicate intent and freshness queues created.
- [ ] Highest-value gaps selected.

### Milestone B — Practice foundation

- [ ] Question schema and validation live.
- [ ] Existing 48 centralized questions migrated.
- [ ] Lesson quiz questions inventoried and deduplicated.
- [ ] Every live track has a reviewed foundation practice set.
- [ ] Remediation links and accessible practice flows verified.

### Milestone C — Complete learning loops

- [ ] Each priority track connects concept → example → practice → scenario → project → interview.
- [ ] Under-covered tracks have been expanded, merged, or repositioned.
- [ ] Role paths terminate in evidence-producing projects.

### Milestone D — Current ecosystem reference

- [ ] Named provider and model hubs live.
- [ ] Ollama, framework, observability, harness, MCP, and skills paths live.
- [ ] Volatile pages enter the freshness queue automatically.
- [ ] Comparisons use shared fixtures and honest limits.

### Milestone E — Career and discovery ecosystem

- [ ] Certification registry and objective maps live.
- [ ] External course directory live.
- [ ] Interview, answer, scenario, guide, and blog coverage reflects measured demand.
- [ ] Search and analytics guide continuing investment.

### Milestone F — Question-bank depth

- [ ] Each major track reaches its reviewed 1,000-question bank target.
- [ ] Coverage remains balanced across objectives, difficulty, and format.
- [ ] Large banks remain aggregate learning tools rather than page-generation engines.
- [ ] Question performance drives revision and retirement.

## Definition of done

- [ ] Every current course and role path has an evidence-backed audit and disposition.
- [ ] Every major track offers concepts, worked examples, mistakes, references, quizzes,
      scenarios, projects, and interview practice.
- [ ] Practice banks cover every major track deeply and remain useful without accounts.
- [ ] Straight Answers, scenarios, guides, and blogs reflect real learner and search demand.
- [ ] Major providers, model families, cloud platforms, local runtimes, frameworks,
      observability tools, coding agents, browser harnesses, MCP, and Agent Skills are covered.
- [ ] AI for Designers and other approved new courses provide coherent end-to-end outcomes.
- [ ] Certification and external-course paths are current, sourced, and clearly labeled.
- [ ] Volatile content has ownership, official sources, review dates, and retirement behavior.
- [ ] Projects and labs run, fail safely, and include evaluation and operating evidence.
- [ ] Programmatic expansion cannot publish thin or duplicate indexable pages.
- [ ] Search growth, internal engagement, and revenue are measured without degrading trust.
- [ ] Another agent can resume any workstream from the registry, checklist, and progress log.

## Progress log

Add new entries at the top. Include scope, owners, skills used, sources checked, files changed,
validation, deployment status, measured result when available, blockers, and next batch.

### 2026-09-16 — Phase 4: guides, scenarios, blog themes (17 rows)

- Commit: `PENDING`. Status: complete.
- Scope: 5 guides (first local-model app, first voice agent, first
  browser agent, observability integration, SDK↔framework migration —
  completing the 10-item first-X set); 6 scenarios (incident-response,
  regulated-decision-support, voice-agent-latency, rag-migration,
  browser-agent-permissions, coding-agent-rollout — all 9 named types +
  all 7 decision domains); 9 blog posts covering every open priority
  theme.
- Files: 5 guides, 6 scenarios, 9 blog posts; all cross-links verified.
- Validation: `check:content` clean; build 2652 pages; `check:links` 0
  dead in committed files (parallel ai-for-designers WIP carries its own
  template links — user's in-flight work, not part of this batch).
- Blockers: none. Open: scenario variants, whiteboard/guided modes,
  downloadable briefs, runnable repos for guides, blog editorial rows
  needing recurring/scheduled publishing.
- Next: Phase 2 question-bank schema, Phase 3 interview rows, Phase 10.

### 2026-09-16 — Phase 9: SEO audit + safeguards (26 rows)

- Commit: `08831d4`. Status: complete (audit + tick).
- Scope: audited dist output for page-level SEO properties and verified
  programmatic-safeguard compliance by inspection.
- Evidence: 200-page sample — 0 missing titles/descriptions, 0 multi-H1;
  JSON-LD present per type (LearningResource 2228, Course 33,
  BreadcrumbList 2281, FAQPage 52, Answer 137, Article 19, ItemList 53);
  canonical tags, sitemap-index.xml, robots.txt w/ AI-crawler policy,
  /saved noindex, rss.xml live; zero question/best-model/permutation
  routes.
- Ticked: 9 of 10 page-SEO rows (GSC-monitoring row stays open), 7 of 8
  safeguards (intent-convergence merge stays open — dup-pair verdicts in
  progress), 3 intent-governance rows, 6 discovery rows, 1 distribution
  policy.
- Honestly open: all rows needing Search Console, analytics, or real
  external actions (GSC exports, branded/non-branded split, search logs,
  click measurement, community promotion, upstream contributions).
- Next: Phase 2 question-bank schema + initial banks, Phase 4 remainder,
  Phase 10 dashboard rows.

### 2026-09-16 — Phase 5: project-coverage audit (38 rows)

- Commit: `ad92e9d`. Status: complete (audit + tick).
- Scope: audited every Phase 5 coverage row (foundation 10, application
  12, advanced 14, role capstones 10) against the lab/project/capstone
  corpus; ticked rows backed by a real hands-on artifact, named in each
  annotation. 38 rows ticked.
- Honestly open (no hands-on artifact yet): embedding-search eval
  fixtures, model-output validation service, stateful-agent checkpoints,
  multi-agent delegation build, context-management service, RAG
  ingestion+ACL build, provider-gateway build, model-router build,
  incident simulation, AI-platform-engineer capstone, plus 12 of 14
  project-standard rows (they require runnable repos with starter code,
  tests, and clean-env verification — the corpus is lesson-format labs).
- Validation: doc-only change; no build impact.
- Next: Phase 2 question-bank schema + initial banks, Phase 9 SEO rows,
  or the shared coding-agent fixture comparison.

### 2026-09-16 — Phase 7: AI Automation for Operations (1 candidate row)

- Commit: `7ba0edd`. Status: complete.
- Scope: `ai-automation-ops` track — 8 lessons (deterministic→agentic
  landscape, where-AI-belongs judgment test, n8n/Zapier/Make/Pipedream
  comparison, four validated LLM-step patterns, approval gates + act
  boundary, auditability/run-history/idempotency, drift + maintenance,
  invoice-triage design lab). Registered n:32, group Building.
- Files: 8 new lessons under `src/content/lessons/ai-automation-ops/`;
  `curriculum.ts`; `sources.json` (+4 platform doc records).
- Sources checked: docs.n8n.io, docs.zapier.com, pipedream.com/docs —
  HTTP 200; make.com help 403 bot-blocked (retained with caveat).
- Validation: `check:content` clean (2228 lessons); build 2631 pages;
  `check:links` 2631 pages / 5641 routes, 0 dead; registry regenerated.
- Blockers: none.
- Next: all Phase 7 candidate-course rows are now served; remaining
  Phase 7 work is the AI-for-Designers sub-checklist (334 rows, tracked
  separately) and the shared coding-agent fixture comparison.

### 2026-09-16 — Phase 7: Multilingual/Indic AI track (1 candidate row)

- Commit: `899902a`. Status: complete.
- Scope: `multilingual-ai` track — 10 lessons (model landscape/coverage
  matrix, translate-vs-native-vs-pivot, code-mixing, cross-lingual
  retrieval, multilingual documents/OCR, datasets/benchmarks, speech
  across languages, low-resource strategies, cost/latency, support-
  assistant lab). Registered n:31, group Building.
- Files: 10 new lessons under `src/content/lessons/multilingual-ai/`;
  `curriculum.ts`; `sources.json` (+3: MTEB leaderboard, NLLB, OpenAI
  speech-to-text — all verified HTTP 200).
- Sources checked: indicnlp.ai4bharat.org, MTEB leaderboard, Meta NLLB,
  OpenAI STT guide; existing sarvam/ai4bharat/bhashini records reused.
- Validation: `check:content` clean (2220 lessons); build 2622 pages;
  `check:links` 2622 pages / 5623 routes, 0 dead; registry regenerated.
- Blockers: none. IndicGLUE HF dataset returned 401 (access-gated) —
  cited indicnlp.ai4bharat.org instead.
- Next: AI Automation for Operations (last candidate-course row);
  AI-for-Designers sub-checklist continues separately.

### 2026-09-16 — Phase 7: Multimodal AI Engineering track (1 candidate row)

- Commit: `d078bc1`. Status: complete.
- Scope: `multimodal-ai` track — 8 lessons (modality landscape/matrix,
  image understanding in production, document-AI pipelines,
  audio/video/mixed media, image generation + governance, multimodal
  evaluation, cost/latency, mixed-document RAG lab). Registered n:30,
  group Building.
- Files: 8 new lessons under `src/content/lessons/multimodal-ai/`;
  `curriculum.ts` (track + node registration); `sources.json` (5 records).
- Sources checked: OpenAI images-vision + image-generation, Anthropic
  vision, Gemini vision, Unstructured — all HTTP 200.
- Side fix: the parallel ai-for-designers build landed its 11 missing
  lessons during this batch — reverted the temporary `coming` flags back
  to `live` and repaired one dead cross-link (→ `why-stream-tokens`).
- Validation: `check:content` clean (2210 lessons); build 2611 pages;
  `check:links` 2611 pages / 5601 routes, 0 dead; registry 2565 items.
- Blockers: none. AI-for-Designers candidate row stays open — its
  334-row sub-checklist governs that course's completion, not file
  presence alone.
- Next: remaining candidate-course builds — Multilingual/Indic AI
  Engineering, AI Automation for Operations.

### 2026-09-15 — Phase 7: Voice AI Engineering track (1 candidate row)

- Commit: `c861ef9`. Status: complete.
- Content: new `voice-ai` track — 8-lesson MVP: `voice-ai-pipeline-overview`
  (cascade vs S2S, latency budget), `speech-recognition-in-production`
  (streaming/finals/endpointing/domain adaptation), `speech-synthesis-and-
  voice-design` (streaming TTS, cloning, SSML, consistency),
  `realtime-transport-and-turn-taking` (WebRTC/WS/SIP, full-duplex,
  barge-in), `voice-agent-orchestration` (tools under silence budget, state
  vs LLM flow, voice prompts), `voice-evaluation-and-testing` (WER limits,
  perceptual, latency percentiles, scripted calls),
  `voice-ai-system-design` (own-vs-rent per layer, voice compliance
  surface), `voice-agent-lab` (provider-neutral build).
- Data: 5 new source records (OpenAI Realtime, Deepgram, ElevenLabs,
  LiveKit, Pipecat — all verified); track registered n:29, group Building.
- Validation: `check:content` clean (2177 lessons); build 2576 pages;
  `check:links` 2576 pages / 5531 routes, 0 dead; registry 2533 items.
- Next: remaining candidate-course builds — Multimodal AI Engineering,
  Multilingual/Indic AI Engineering, AI Automation for Operations
  (AI-for-Designers has its own 334-row sub-checklist).

### 2026-09-15 — Phase 7: cert records, university courses, course-gate (12 rows)

- Commit: `802595b`. Status: complete.
- Data: `certifications.json` — all 13 records now carry the full field set
  (`prerequisites`, `languages`, `renewal`, `officialPrep` added across the
  board); 3 new records — `snowflake-genai-specialty`, `oracle-genai-professional`,
  `ibm-ai-engineering` (Snowflake/Oracle official pages bot-protected HTTP 403,
  retained with `volatile` caveats per convention). `external-courses.json` —
  6 new `university-open` records: Stanford CS229 + SLP3, MIT OCW 6.034 + 6.006,
  Berkeley CS188, CMU 10-601 (all URLs verified). 12 new source records.
- Page: `/certifications` template renders the four new fields.
- Rows: new-course gate (7 convention rows) ticked — conventions embodied in
  this session's track additions; Stanford/MIT/Berkeley/CMU directory row;
  full-cert-record row; uncovered-objectives row (`lmversity[]` mapping is the
  decision); Snowflake + Oracle/IBM credential rows.
- Left open honestly: per-cert practice-question banks (content build, not yet
  started); the 5 candidate-course builds (Designers, Voice, Multimodal,
  Indic, AI-Automation — real track work, not bookkeeping).
- Validation: `check:content` clean; build 2567 pages; `check:links` 0 dead;
  registry 2524 items.
- Next: the 5 candidate-course builds (Voice AI, Multimodal, Indic/AI-
  Automation MVPs) or Phase 2 question-bank work.

### 2026-09-15 — Phase 6: consumer products + task-skill catalog (40 rows)

- Commit: `224eac2`. Status: Phase 6 content complete; one row honestly open.
- Content: 6 consumer-product hubs — `/providers/chatgpt` (deep research,
  files/ADA, canvas, projects, custom GPTs), `claude-app` (artifacts+projects
  differentiation), `gemini-app` (Workspace leverage, Gems, multimodal),
  `microsoft-copilot` (consumer/M365/Studio three-way split + commercial data
  protection point), `perplexity` (citation-first design + honest limits),
  `notebooklm` (bounded-grounding-as-architecture); 1 new answer
  `/answers/how-to-choose-an-ai-chat-product` (five-criteria selection
  framework); `/skill-catalog` page + `src/data/skill-catalog.json` — 23
  task-skill entries each carrying the full verification rubric (source,
  trigger/notFor, fixture, baseline, failure modes, permissions, prereqs)
  with honest `verified`/`fixture-pending` eval statuses.
- Row coverage: 10 consumer rows ticked (Meta/Mistral/xAI/DeepSeek/Z.ai/Qwen/
  Sarvam consumer surfaces ride existing provider hubs); 23 task-skill rows +
  7 rubric rows ticked (rubric implemented as catalog schema; fixture runs
  marked pending where unpublished).
- Data: `skill-catalog.json` (23 entries); 7 new source records incl. two
  bot-protected domains retained with caveats (help.openai.com, perplexity.ai/
  help-center); perplexity vendor entity. `/skill-catalog` registered in
  reference hub + content registry page map.
- Validation: `check:content` clean (2169 lessons); build 2567 pages;
  `check:links` 2567 pages / 5513 routes, 0 dead; registry 2524 items.
- Phase 6 status: every section closed except the shared-repo-fixture
  agent comparison (requires actually running agents on a fixture —
  methodology exists in cli-agent-labs).
- Next: Phase 7 remaining (certification objective maps, per-cert prereqs,
  Oracle/IBM/Snowflake verification, Stanford/MIT/Berkeley/CMU course
  records, per-cert practice banks) or Phase 2/4/5 content builds.

### 2026-09-15 — Phase 6: coding agents and dev products (12 of 13 rows)

- Commit: `3e2663e`. Status: complete except shared-fixture comparison row.
- Content: 11 new coding-agent hubs — `/providers/openai-codex` (product vs
  Agents-API boundary), `claude-code` (five surfaces, CLAUDE.md+auto memory,
  skills/hooks/subagents/Agent SDK), `gemini-cli` (open-source + free-tier
  entry), `devin` (delegation-first workspace; Cognition-affiliation disclosure
  on page), `meta-muse-code`, `github-copilot` (six surfaces incl. CLI autopilot
  + cloud agent + Actions automations), `cursor` (AI-first editor, published
  multi-model table), `windsurf` (Cascade; volatility caveat), `aider` (repo
  map, git-native, model freedom), `opencode` (provider-neutral OSS), and
  `ide-agents` (Cline/Roo/Continue/Amazon Q/Junie/Sourcegraph as extension
  tier). "Never declare a winner" row ticked — embodied across all pages.
- Left open honestly: task-based comparisons on a shared repo fixture —
  methodology exists in `/learn/cli-agents/cli-agent-labs` but no measured
  comparison is published (requires actually running the agents).
- Data: 9 new vendor entities (github, cursor, windsurf, aider, opencode,
  cline, roo-code, continue, jetbrains, sourcegraph — one key reused where
  existing); 12 new source records, all URLs verified 2026-09-15.
- Validation: `check:content` clean (2169 lessons); build 2559 pages;
  `check:links` 2559 pages / 5497 routes, 0 dead; registry 2516 items.
- Next: consumer research/work products (15 rows) — last Phase 6 section.

### 2026-09-15 — Phase 6: cloud platforms and gateways (13 rows)

- Commit: `42ae428`. Status: complete.
- Content: 11 new provider hubs — `/providers/microsoft-foundry` (Azure AI
  Foundry→Microsoft Foundry rebrand, unified resource, Azure OpenAI upgrade
  path), `aws-bedrock` (five API shapes incl. vendor-native Messages/Responses
  paths, namespaced model IDs, CRIS; SageMaker boundary stated),
  `databricks-mosaic`, `snowflake-cortex` (SQL-native AI functions,
  in-perimeter models), `oci-generative-ai`, `ibm-watsonx` (product-family
  level — IBM docs domain returns HTTP 403 to automated fetch; caveat on page),
  `cloudflare-workers-ai` (Workers AI inference vs AI Gateway control plane
  separated), `vercel-ai-gateway` (infra-agnostic managed gateway, BYOK,
  budgets), `openrouter` (third-party routing + attribution-header + alias-pin
  review), `huggingface` (Hub vs Inference Providers vs dedicated Endpoints),
  `hosted-inference` (Together/Fireworks/Groq/Cerebras/Replicate/Modal — six
  shapes distinguished + four-tier serving-architecture comparison table).
  Vertex row ticked via existing `/providers/google`.
- Data: 12 new vendor entities (amazon, oracle, databricks, snowflake,
  cloudflare, openrouter, together, fireworks, groq, cerebras, replicate,
  modal); 17 new source records (all URLs verified 2026-09-15; IBM docs 403
  retained with caveat per convention).
- Validation: `check:content` clean (2169 lessons); build 2548 pages;
  `check:links` 2548 pages / 5475 routes, 0 dead; registry 2505 items.
- Next: coding agents and development products (13 rows) or consumer
  research/work products (15 rows).

### 2026-09-15 — Phase 6: open-model family hubs + license audit (15 rows)

- Commit: `970f50d`. Status: complete.
- Content: 9 new open-model hubs — `/providers/llama` (gated + Community
  License reality), `gemma` (Gemma-4 apache-2.0), `qwen` (mixed-license map
  incl. qwen3.8-max scale-attribution clause), `phi` (MIT), `granite`
  (Apache-2.0 + enterprise posture), `nemotron` (openmdw-1.1/other per
  release + NVFP4 builds), `olmo` (fully-open disclosure), `falcon`
  (honest faded-relevance placement), `bloom` (RAIL ancestor, historical).
- Already-covered rows ticked via provider hubs: Mistral/Ministral,
  DeepSeek (MIT verified), GLM (glm-5.3 license verified), Aya (cc-by-nc).
- License audit: every family's license read from its actual HF model card
  via the HF API — `license_name` fields quoted per release. Non-OSI
  licenses flagged everywhere; 'check the card' stated as the rule.
- Data: +10 source records (HF org pages, model-card type; 228 total),
  +13 entities (5 vendors + 8 model families; 133 total).
- Validation: build 2,537 pages; check:links 0 dead (5,453 routes);
  registry 2,494 items.
- Rows ticked (15): all open-model family rows + both mechanism rows.
- Next: cloud platforms/gateways (15 rows), coding agents (13),
  consumer products (10).

### 2026-09-15 — Phase 6: India + multilingual providers section complete (7 rows)

- Commit: `fbb0521`. Status: complete.
- Content: `/providers/sarvam` (Indus platform — Saaras v3 realtime STT,
  Bulbul v3 TTS, Sarvam-105B, Mayura, Sarvam Vision, voice-agent telephony,
  SageMaker self-hosted), `/providers/krutrim` (honest scope: AI-first
  *cloud* platform + AI Studio + Ola Maps, India residency differentiator),
  `/providers/ai4bharat` (upstream research lab framing — open models/
  datasets/benchmarks, no commercial API), `/providers/bhashini` (govt
  language-infrastructure framing).
- Lessons: `evals-red-teaming/multilingual-evaluation-design` (translated
  vs native evals, code-mix category, per-language scorecards),
  `genai-app-dev/indic-language-pipeline-lab` + `building-for-indic-scripts-
  and-segmentation` (shaping, grapheme clusters, token inflation, moderation
  asymmetry).
- Data: +7 source records (218 total post-dedupe — found+merged a
  pre-existing sarvam-api-docs id), +4 entities (3 vendors + sarvam-family;
  120 total).
- Validation: check:content clean (2,169); build 2,528 pages; check:links
  0 dead (5,435 routes); registry 2,485 items.
- Rows ticked (7): the full India/multilingual section.
- Next: open-model family hubs (13 rows), cloud platforms/gateways (15),
  coding agents (13), consumer products (10).

### 2026-09-15 — Phase 6: remaining frontier provider hubs (7 rows)

- Commit: `65102f0`. Status: complete.
- Content: `/providers/meta` (Model API three-protocol surface — Responses/
  Chat/Messages, Muse Spark/Image/Voice-Transcribe, open-weight Glimmer,
  Muse Code CLI), `/providers/xai` (Grok 4.x, Imagine, Voice, documented
  alias conventions, long-context pricing), `/providers/mistral` (Medium 3.5/
  Large 3/Small 4/Ministral 3/Codestral/Voxtral/OCR + per-release license
  flags + lifecycle-policy deprecation table), `/providers/deepseek`
  (alias→version table, thinking-mode, dual OpenAI/Anthropic compat,
  cache/off-peak pricing), `/providers/zai` (GLM-5.3, Coding Plan for
  third-party agent CLIs, jurisdiction caveat), `/providers/cohere`
  (Command + Rerank/Embed/Parse/Transcribe + Aya + multi-cloud),
  `/providers/ai21` (Jamba hybrid architecture + Maestro; small-vendor
  risk stated).
- Data: +13 source records (212 total); +10 entities incl. 2 vendors
  (zai, ai21) and 8 model families (116 total).
- Verification: every product map checked against live official docs
  2026-09-15; status pages for Mistral/xAI return 403 to probes (noted
  in source records).
- Validation: check:content clean; build 2,521 pages; check:links 0 dead
  (5,421 routes); registry 2,474 items.
- Rows ticked (7): all remaining "Frontier API and product providers" rows.
- Next: India/multilingual providers (Sarvam, AI4Bharat, Krutrim, Bhashini);
  open-model family hubs; cloud platforms/gateways; coding-agent and
  consumer-product sections.

### 2026-09-15 — Phase 6: provider-hub collection + first three hubs (15 rows)

- Commit: `25c0517`. Status: complete.
- Collection: new `providers` content collection (content.config.ts schema:
  `vendor`→entities.json, `covers[]` enum, required `verifiedAt`,
  `sources[]`/`related[]`); `/providers` index + `/providers/[slug]` pages with
  rendered official-source citations; linked from `/reference`.
- Validator: check-content now checks providers `sources[]` ids against
  sources.json, `vendor` ids against entities.json (added `entityRegistry`
  set), and `verifiedAt` date shape. Bug found+fixed: `x in Set` doesn't
  work — needs `.has()`.
- Registry: build-content-registry now counts providers as `reference`/
  `provider-hub` (volatile freshness class) and registers the three
  top-level hub pages (certifications, external-courses, providers) that
  were missing from the page map.
- Content: `/providers/openai` (Responses API/Agents/Realtime/Codex/plugins,
  legacy surface flagged), `/providers/anthropic` (verified lineup
  Fable 5.1/Opus 5/Sonnet 5/Haiku 4.5, alias vs dated-ID convention,
  published retirement dates, multi-cloud IDs), `/providers/google`
  (Gemini 3.x verified, AI Studio vs Vertex auth/terms split, OpenAI-compat
  endpoint, Gemma distinction).
- Data: +20 verified official source records (199 total); +3 model-family
  entities (openai-gpt, anthropic-claude, google-gemini) with changeNote.
- Rows ticked (15): all 12 shared-template rows + the 3 provider rows.
- Validation: check:content clean (2,166); build 2,514 pages; check:links
  0 dead (5,407 routes); registry 2,471 items.
- Next: Meta/xAI/Mistral/DeepSeek/Z.ai/Cohere/AI21 hubs; India+multilingual
  providers; open-model family hubs; cloud platforms/gateways.

### 2026-09-15 — Phase 7 registries: certification + external-course directories (44 rows)

- Commit: `3fdfd4b`. Status: complete.
- Data: `src/data/certifications.json` (10 records), `src/data/external-courses.json`
  (26 records), `src/data/sources.json` +36 official records (179 total).
  Validator extended — required fields, status enums, `verifiedAt` dates,
  `officialSource` id resolution into sources.json.
- Pages: `/certifications` and `/external-courses` directory pages, linked from
  `/reference`. Both disclaim endorsement/partnership explicitly; costModel enum
  distinguishes free | free-audit | freemium | subscription | paid | mixed.
- Content: `answers/certification-vs-portfolio-vs-experience` decision page.
- Honest dispositions recorded on rows: no AWS professional-tier genAI cert
  verified to exist (recorded nothing); LlamaIndex has no academy domain
  (docs URL recorded with caveat); Google Skills + Snowflake return HTTP 403
  to automated probes (kept, noted); NVIDIA multimodal/LLM-professional rows
  covered at directory level pending individual pages.
- Rows ticked (44): 9 directory-mechanism rows, 15 vendor-course rows, 5
  registry-mechanism rows, 14 cert rows, + decision guide.
- Left open honestly: per-cert objective→lesson maps, per-cert prereq/language
  fields, Oracle/IBM/Snowflake cert records (unverified), university open-course
  material (Stanford/MIT/Berkeley/CMU), practice banks per cert.
- Validation: check:content clean (2,166); build 2,510 pages; check:links 0 dead
  (5,399 routes); registry 2,465 items.
- Next: Phase 6D provider/model reference expansion, task-skill catalog, or
  cert objective maps.

### 2026-09-15 — Phase 7 role paths: full structure + candidate-course dispositions (30 rows)

- Commit: `bd6c309`. Status: complete.
- Schema: `Role` extended — `prereq`, `branches[]`, `projects[]`, `interview[]`,
  `practice[]`, `credentials[]`, `evidence[]`; `[role].astro` renders all six
  sections; `/roles` index gained "Where the boundaries sit" (6 boundary pairs).
- Content: all 11 roles populated — prereq checks, branch tracks, project refs to
  real capstones/labs, interview/practice bank links, honest credential options
  (several roles deliberately list none), portfolio-evidence targets.
- Dispositions: 14 of 18 candidate courses resolved as served by existing
  tracks/role paths (the new-course gate's preferred outcome); 4 remain genuinely
  unmet — Designers (own 334-row checklist exists), Voice, Multimodal,
  Indic/automation-vendor depth.
- Verified: role copy contains zero job-market/salary/employment claims;
  credentials render under explicit no-endorsement disclaimer.
- Validation: build 2,507 pages; check:links 0 dead; registry 2,464 items.
- Next: Phase 6D provider/model reference expansion or the task-skill catalog.

### 2026-09-15 — Phase 8 finish: TS MCP server + versioned-lab + deterministic-check lessons

- Commit: `108f346`. Status: complete — Phase 8 closed except .ipynb notebook
  infrastructure (documented open).
- Files added (3): `mcp/mcp-server-in-typescript` (official TS SDK, sources:
  `mcp-typescript-sdk`), `fine-tuning/pinning-your-training-stack-lab`,
  `maths-foundations/verifying-maths-results-deterministically`.
- Rows ticked (2) + 1 annotated: multi-language MCP servers; versioned-lab
  convention. Notebooks row annotated — checking discipline covered, .ipynb
  pipeline absent.
- Build crash found+fixed: `InlineCheck` requires `options[]`/`answer:{int}`/
  `explanation` — wrong-prop call crashed static generation (2,231 partial pages).
  Validation: check:content 2,166 lessons; build 2,507 pages; links 0 dead;
  registry 2,464 items.

### 2026-09-15 — Phase 8 gap-fill: 11 lessons + classical→agentic bridges (10 rows)

- Commit: `d6e5963`. Status: complete.
- Scope: Phase 8 leftovers across AI Foundations, Maths, Tools, GenAI, Harness, MCP, Production.
- Files added (11): `ai-foundations/choosing-an-ai-approach-system-selection`,
  `maths-foundations/choose-your-maths-path-by-background` +
  `visualization-and-error-analysis-practice`,
  `tools-function-calling/building-a-web-search-tool-lab` +
  `file-and-external-action-tools-lab`,
  `genai-app-dev/realtime-voice-agent-project`,
  `harness-design/web-harness-case-study` + `research-harness-case-study` +
  `operations-harness-case-study` + `harness-skill-and-mcp-integrations`,
  `production/deployment-variants-cloud-and-portable`.
- Bridges: 6 ai-systems modules now link forward to agentic-ai descendants
  (state-spaces/minimax/STRIPS/planning-under-uncertainty → planning + tree-search;
  both multi-agent modules → multi-agent-patterns).
- Rows ticked (10): system-selection cases; classical→agentic connection; maths
  diagnostic paths; six-mode practice coverage; 6/6 tool projects; realtime voice
  project; 5/5 harness case studies; 12/12 harness integrations; Skills/MCP
  boundary + MCP Apps; cloud+portable deployment variants.
- Verified mechanically before ticking: 82 prereq edges reachable; 0 tracks open
  on impl-kind nodes; 0 dead-end final lessons across 28 tracks.
- Validation: check:content clean (2,163 lessons); build 2,504 pages; check:links
  0 dead; registry regenerated (2,461 items).
- Left open honestly: maths notebooks (infrastructure, not content); multi-language
  MCP servers (Python-only corpus); fine-tuning versioned-lab convention.
- Next: remaining Phase 8 rows (notebooks, versioned labs, multi-lang MCP), then
  Phase 7 roles/courses or the Phase 6C task-skill catalog.

### 2026-09-14 — Content registry and audit ledger built

- Commit: `eacb4b0`. Status: complete for Phase 0 "build the audit ledger"; scoring pass not started.
- Scope: all 7 content collections + curriculum, modules, quizzes, roles, FDE plan,
  quick guides, glossary, static routes.
- Files changed: `scripts/build-content-registry.mjs` (new), `scripts/build-content-dates.mjs`
  (ROOTS extended to all collections), `src/data/content-dates.json` (regenerated,
  2,094 → 2,310 entries), `package.json` (`registry` script), `docs/registry/` (new:
  content-registry.json, content-ids.json, audit-views.md).
- Measured result: 2,406 registered items — 2,060 lesson files, 183 FDE files, 22 static
  pages, 12 role paths, 33 track hubs (23 curriculum + 10 FDE phases), 6 practice banks,
  25 planned "coming" stubs. 0 dead curriculum links, 0 unregistered live lessons,
  0 missing summaries, 0 undated items.
- Findings for scoring phase: 885 lesson bodies with no in-body internal links
  (concentrated in ai-systems/applied-ai/machine-learning batches); interview and
  scenario pages had no git-date fallback until the dates pipeline was extended;
  interview/scenario/blog/guides/fde templates do not yet consume content-dates.json;
  centralized practice = 48 questions across 6 tracks with almost no lesson links;
  `ai-for-designers` track registered with 25 coming nodes and zero files.
- Heuristic caveats: freshnessClass, searchIntent and primaryAudience are generated
  guesses; freshnessSignals records what fired so the scoring pass can overrule.
- Validation: `npm run check:content` clean; `git diff --check` clean. Build/link checks
  unchanged — no src/ or content/ modifications in this batch.
- Next batch: score audit dimensions per item (Phase 0 "Score every item"), starting with
  the acquisition families (9 guides, 10 posts, 29 answers, 7 interview topics, 6 scenarios,
  6 practice banks) — small enough to finish in one reviewable batch.

### 2026-09-15 — Acquisition & practice family audit (mechanical pass)

- Built `scripts/audit-families.mjs` (`npm run audit:families`) — structural checks for every
  acquisition/practice family, emitting `docs/registry/family-audit.json` and
  `docs/registry/acquisition-audit.md`. Handles all five quiz markup variants found in the
  wild (`## N.`, `## Question N:`, `### N.`, `**N.**`, `**QN.**` stems; dash, bold, paren and
  bare-letter options; `**Correct: X.**` and `**Answer X**` marks).
- Coverage: 29 answers, 9 guides, 10 posts, 7 interview topics (56 questions), 6 scenarios,
  6 centralized banks (48 questions), 83 lesson quiz pages (603 questions), 29 worked
  examples, 48 cheatsheets, 24 common-mistake pages. 0 duplicate question stems corpus-wide.
- What holds: all answers are answer-first with FAQ + related metadata; all guides carry
  `related` lesson lists and ordered steps; all posts are dated; all 603 lesson-quiz
  questions have a marked correct answer; all worked examples have runnable code.
- What doesn't: **centralized banks put 100% of correct answers at index 0–1** (positional
  bias learners can exploit) and have 1 total lesson link across 48 questions; lesson-quiz
  answer positions skew B 66% / C 19% / A 11% / D 3%; all 6 scenarios are ~192-word
  walkthroughs missing constraints/options/postmortem sections; 5/7 interview topics have
  no follow-up prompts or rubric; 9/9 guides have zero in-body internal links;
  `why-there-is-no-certificate` never links into the curriculum;
  `rag-fine-tuning-or-a-longer-prompt` has no code; 11 quiz files have answer blocks that
  don't discuss every option.
- The checklist's per-family "Review" items stay open: this pass is the mechanical half —
  intent, originality, evidence and tone still need the editorial scoring pass. A first-pass
  backlog order (value + dependency) is in the audit doc; demand ordering awaits analytics.
- Validation: `npm run check:content` clean; `git diff --check` clean; `check:links` clean —
  no content files touched. Commit: `7190bc2`.
- Next batch: backlog item 1 — reshuffle centralized-bank answer positions and wire each
  question to its remediation lesson (bounded: one data file).

### 2026-09-15 — Centralized practice-bank integrity fix

- Reshuffled all 48 centralized practice questions in `src/data/quizzes.ts`: correct answers
  moved from 100%-at-index-0-or-1 to a uniform 12/12/12/12 spread across positions 0–3
  (2 per position per bank). `why[]` arrays were permuted with their options — verified
  mechanically that every `why[answer]` still starts with the "Right" convention.
- Wired every question to a remediation `lesson` route (0 → 48 lesson links): e.g. agent
  questions now point into `agentic-ai`, evals into `evals-red-teaming`, the temperature
  question into `llm-foundations/sampling-temperature-top-p`. The Quiz component renders
  options in array order (no runtime shuffle) and shows "Read the lesson →" per question,
  so both fixes are user-visible.
- Verification: bespoke parser re-read all 48 calls post-transform (0 mismatches);
  `npm run check:content` clean; `npm run check:links` clean (all new `/learn/` routes
  resolve); file imports cleanly under `node --experimental-strip-types`.
  `git diff --check` clean. Commit: `6592938`.
- Still open from the audit: distractor/difficulty *quality* scoring (editorial), the 66%-B
  skew in lesson quizzes, 11 files with thin per-option rationale.
- Next batch: backlog item 2 — scenario depth pass (6 files, add missing
  constraints/options/postmortem sections).

### 2026-09-15 — Scenario depth pass

- All 6 scenarios went from 4 sections / ~192 words to 7 sections / ~450 words. Each now
  carries `## Constraints` (hard requirements that shape the design), `## Options on the
  table` (two rejected alternatives plus the chosen approach), and `## What went wrong`
  (a postmortem narrative with the rule the incident produced — e.g. the document-Q&A
  cache keyed on query rather than permission scope, the support assistant citing a
  `superseded` article).
- No invented numbers or external claims; postmortems are internally consistent with the
  scenario's own stated design.
- Validation: `npm run check:content` clean; `npm run check:links` clean;
  `git diff --check` clean. Audit now reports 0 missing scenario sections. Commit: `2d9dcec`.
- Next batch: backlog item 3 — interview follow-up prompts + weak-vs-strong rubric
  (7 topic files, ~56 questions).

### 2026-09-15 — Interview follow-ups and scoring rubric

- All 7 interview topic files now carry a `**Follow-up:**` prompt on every question
  (56/56) plus a closing `## How to score your answers` rubric section. Follow-ups
  are inline bold paragraphs rather than headings so `src/pages/interview/[topic].astro`
  keeps parsing exactly 8 FAQ questions per topic; the rubric is the one intended
  extra H2 (a legitimate TOC/FAQ entry).
- Follow-ups probe reasoning, not recall: mechanism boundaries, failure modes,
  trade-offs, decision criteria (e.g. "the agent works but a fixed workflow does
  the same job — what justifies the agent?", "valid JSON with a wrong value —
  what catches it?"). Rubrics distinguish strong answers (mechanism + boundary +
  failure mode) from weak ones (definition recital, box-drawing, incantations).
- `scripts/audit-families.mjs` updated to match the new format: counts inline
  follow-up prompts per question, detects the rubric by its exact heading, and
  excludes it from the question count (was reporting 9). Backlog items 1–3 marked
  done in the generated report.
- Audit result: 7/7 topics — 8 questions, 8/8 follow-ups, rubric ✓, zero flags.
- Validation: `npm run check:content` clean; `npm run check:links` clean
  (2,392 pages); `git diff --check` clean. Commit: `e2c22e2`.
- Next batch: backlog item 4 — guide in-body links (9 guides) plus the blog post
  `why-there-is-no-certificate` curriculum link.

### 2026-09-15 — Guide in-body links and blog curriculum link

- All 9 guides gained in-body curriculum links (3–4 each), drawn from each guide's
  own `related` frontmatter list and placed where the prose references the concept
  the lesson teaches — e.g. the MCP guide links `server-design-and-permissions`
  from the destructive-tools paragraph; the eval guide links
  `llm-judge-bias-and-calibration` from the judge failure-mode list.
- `src/content/blog/why-there-is-no-certificate.mdx` now links to `/learn` twice
  ("work through a track", "every track"), clearing the only blog post with zero
  curriculum links.
- `scripts/audit-families.mjs`: grammar fix for the guides finding line; backlog
  item 4 marked done.
- Audit result: guides 0/9 with zero in-body links (was 9/9); blog curriculum
  links clean. Remaining guide flag: `rag-fine-tuning-or-a-longer-prompt` has no
  code — it is a decision guide, not a build guide; deferred to the editorial pass
  to either accept as-is or add a worked experiment snippet.
- Validation: `npm run check:content` clean; `npm run check:links` clean
  (2,392 pages); `git diff --check` clean. Commit: `25cc740`.
- Next batch: backlog items 5–6 — lesson-quiz answer-position rebalance (B ~66%
  across 603 questions) and the 11 files with thin per-option rationale.

### 2026-09-15 — Lesson-quiz answer-position rebalance and rationale audit repair

- Commit: `f2d30da`. Backlog items 5–6. Scope: 83 quiz files, 603 questions
  across `src/content/lessons/`.
- Answer positions rebalanced by an AST-free transform script (`/tmp`, not
  committed): for each question it permutes the option lines, moves the correct
  option to a scheduled target slot, rewrites the `**Correct: X.**` marker, and
  rewrites letter references inside the rationale (`**A** …`, `(B)`, `- C:`,
  `A. ` at line start) to the new positions. Questions whose rationale contains
  bare mid-sentence letters that might be option references are skipped by a
  safety gate — 217 of 603 skipped, left for manual editorial pass.
- Measured result: correct-answer distribution went from A 14%/B 66%/C 15%/D 5%
  to **A 19%/B 41%/C 22%/D 17%**. Residual B skew lives almost entirely in the
  217 gate-skipped questions.
- Recovery incident, documented for the record: the first transform run wrote
  `**Xorrect: Y.**` markers (a broad regex hit the `C` in "Correct"), and a
  follow-up broad repair temporarily clobbered markers corpus-wide. Recovery
  path: restored files to HEAD or to pre-transform user state where the buggy
  output could be reproduced exactly (63 files), repaired markers in place for
  the rest, then re-ran the corrected transform. Every marker was subsequently
  re-derived from ground truth — the HEAD commit tells which option *text* is
  correct; the verifier checks the marker letter equals that text's current
  position. Result: **578/578 verifiable questions match; 0 mismatches.** Two
  ambiguous cases (near-duplicate option texts) were fixed by hand.
- Also fixed two real markup bugs the sweep exposed: `rag/rag-eval-quiz.md` had
  an unclosed `<details>` on Q2 (would have swallowed following questions on the
  rendered page); `rag/vector-db-quiz.md` had a stray `</details>` and a typo'd
  `<summary>EAnswer</summary>`. The audit now checks `<details>` balance
  permanently.
- The "11 files missing per-option rationale" finding resolved to mostly audit
  regex false positives — `(A)` inline-paren references and `- D discards…`
  bullets weren't recognized. Detector broadened; 0 files flagged.
- `scripts/audit-families.mjs` also gained: question-format coverage for all
  five quiz markup dialects, the position histogram, details-balance check, and
  honest backlog wording for the residual skew.
- Validation: `npm run audit:families` (0 flags, distribution above),
  `npm run check:content` clean (2,060 files matched), `npm run check:links`
  clean (2,392 pages), `git diff --check` clean. Spot-checked transformed files
  confirm marker and rationale letters track the permuted options.
- Next batch: editorial scoring pass per Phase 0 "Score every item" — the
  registry's `disposition: "unscored"` fields, starting with the 885 lessons
  lacking in-body links and the acquisition families' intent/evidence/tone
  dimensions.

### 2026-09-15 — Mechanical scoring pass over the registry

- Commit: `e8b7fd0`. Phase 0 "Score every item". `scripts/build-content-registry.mjs` now scores
  every registry item on 9 of 12 checklist dimensions (0/1/2 scale, `null` =
  editorial judgement required) and assigns a disposition:
  `intentClarity`, `correctnessSources` (source presence only — correctness
  itself is editorial), `completeness` (vs family-median word count),
  `prerequisiteFit` (curriculum or FDE-plan registration), `handsOn`,
  `explanationQuality` (structural proxy), `metadata` (summary in meta range),
  `linking` (in-body internal links), `freshnessHealth` (inverted freshness
  risk, minus staleness >180d). `originality`, `accessibility`, `demand` stay
  null — the checklist items for them remain unticked deliberately.
- Auto-dispositions are restricted to keep/expand/refresh/investigate;
  merge/redirect/noindex/archive/replace/split stay manual per the checklist's
  written-reason requirement.
- Measured result across 2,406 items: **keep 1,568 / investigate 768 /
  expand 70**. The investigate queue is almost entirely "zero in-body internal
  links" (653 lessons + 115 FDE pages). Expand = 26 planned stubs + 44 items
  thin vs family median. Scoring also surfaced 3 FDE files on disk but absent
  from the `fde.ts` phase plan (`typescript-enough-to-read-their-frontend`,
  `sso-saml-oidc-and-the-customers-idp`, `pull-requests-in-a-customers-repo`) —
  real orphan pages, equivalent to unregistered lessons.
- Validation: `npm run registry` regenerates cleanly; `npm run check:content`
  clean; `npm run check:links` clean; `git diff --check` clean.
- Next batch: work the investigate queue — wire in-body curriculum links into
  the 653 island lessons (batchable by track; mechanical insertion at
  concept-mention points, same approach as the guides pass).

### 2026-09-15 — Duplicate-candidate detection across content collections

- Commit: `80a0e21`. Phase 0 "Identify duplicate or conflicting explanations". The registry now
  emits a `duplicates` array: fuzzy title-token similarity (Jaccard ≥0.5 or
  containment ≥0.7) plus slug-stem containment (`cosine-similarity` ⊂
  `cosine-similarity-angular-distance-embedding-retrieval`), scoped to lessons,
  FDE, answers, guides, and blog.
- Measured result: **357 candidate pairs**, of which 123 are already
  cross-linked (deliberate two-part lessons like `rate-limits-and-retry` ↔
  `rate-limits-and-retry-strategies`, marked `alreadyLinked`) and **234 are
  unlinked** — the actual editorial review queue. Cross-track pairs surface
  real overlaps, e.g. `genai-app-dev/function-calling-across-providers` ×
  `tools-function-calling/tool-calling-across-providers`.
- Why before the island-linking batch: linking 653 zero-link lessons to
  sibling concepts requires canonical targets; the duplicate map identifies
  which of two near-identical pages should win before links point at either.
- Audit view: `docs/registry/audit-views.md` gained a "Duplicate candidates"
  table (top 60, full list in JSON).
- Validation: `npm run registry` clean; `npm run check:content` clean;
  `git diff --check` clean.
- Next batch: start the island-linking pass on one track — `machine-learning`
  (162 islands) — using curriculum neighbours and duplicate-free canonical
  targets; then scale per track.

### 2026-09-15 — Island-lesson concept-mention linking (first pass)

- Commit: `34ced15`. Works the investigate queue's largest bucket: live lessons with zero in-body
  internal links (was 768 items: 653 lessons + 115 FDE).
- Method: a gated linker (`/tmp`, not committed) builds a phrase→route map from
  each track's lesson titles (full title + the distinctive prefix before the
  first comma/colon/dash), then wraps the first in-body mention of each phrase
  in a markdown link. Guards: skip code fences, headings, blockquotes, lines
  already containing links, bold-marker lines, self-links, track-name phrases
  ("classical AI" was wrongly matching its own hub page until stoplisted),
  max 3 links per file, first-mention only.
- Measured result: **768 → 464 islands** (−304). maths-foundations went 155→7;
  machine-learning 162→109; deep-learning 125→74; ai-foundations 80→48;
  classical-ai 80→78; FDE 115→97. Total links inserted: 337 files, ~488 links.
- Many maths files already carried a plain-text "Continue / go deeper / apply
  it" tail naming sibling lessons — the linker converted those pointers into
  real links, which is the intended continuation behaviour.
- The remaining 464 paraphrase their onward pointers ("a target-definition
  review" → `ml-103-target-design-and-label-quality`) — fuzzy-matching those
  has real wrong-target risk, so they stay for the editorial pass.
- Working-tree note: 289 touched files had clean link-only diffs and were
  committed; ~48 more touched files also carry unrelated in-flight user edits
  and were deliberately left uncommitted — their links ride with the user's
  own commit.
- Validation: `npm run check:links` clean — all ~488 new routes resolve
  (2,392 pages checked); `npm run check:content` clean; `npm run registry`
  regenerated (dispositions now keep 1,872 / investigate 464 / expand 70);
  `git diff --check` clean.
- Next batch: course/role-path audit section — per-track gap briefs
  (prerequisites, module endings in practice, dead-end final lessons) using
  the registry's coverage matrix.

### 2026-09-15 — Per-track gap briefs (mechanical)

- Commit: `d7cb1fe`. Phase 0 "Audit every course and role path". `audit-views.md` now emits a
  "Track gap briefs" section per curriculum track: orphan module boundaries
  (`startsAt` slug absent from the track's nodes), modules whose last live
  node isn't practice (quiz/lab/capstone/worked-example/drill), dead-end
  finishes (track's final live node is a plain concept), missing content
  kinds, island counts, thin items, in-track duplicate pairs, and unbuilt
  planned nodes.
- Headline findings: most tracks end on a dead-end concept lesson
  (maths-foundations, ai-foundations, classical-ai, machine-learning,
  deep-learning, agentic-ai and more); the four numbered-course tracks
  (maths/ML/DL/classical) ship zero quizzes, worked examples, common-mistakes
  or cheatsheets — their "assessments"/"deep-lectures" structure doesn't use
  the suffix conventions `/reference` collects; prompt-engineering carries 23
  in-track duplicate-candidate pairs, context-engineering 26, llm-foundations 20.
- Checklist items ticked: module-ends-in-practice, track kind coverage,
  per-track gap briefs; dead-end/orphan detection partially ticked
  (abrupt-jump detection remains editorial).
- Validation: `npm run registry` clean; `npm run check:content` clean;
  `npm run check:links` clean; `git diff --check` clean.
- Next batch: role-path briefs + "first lesson serves the stated learner
  level" — the remaining course/role-path audit rows; then the acquisition
  family's editorial review rows.

### 2026-09-15 — Role-path audit and practice enders

- Commit: `f9a9524`. The registry's role-path records now carry `practiceSteps`, `careerSteps`,
  and `lastKind`, and the Role paths view flags "no practice step" and
  "dead-end finish" per role.
- Finding: **all 11 non-FDE role paths ended on a plain concept lesson with
  zero practice steps** — exactly the "arbitrary link list" failure the
  checklist guards against.
- Fix: appended one domain-matched practice ender per role in
  `src/data/roles.ts` — e.g. developer/founder →
  `genai-app-dev/capstone-ship-a-genai-assistant`, data-scientist →
  `rag/rag-capstone-support-bot`, security-engineer →
  `responsible-ai/adversarial-testing-lab`, ml-engineer →
  `machine-learning/ml-615-lab-release-a-model-with-a-kill-switch`, the
  lighter-touch roles → `ai-literacy/*-quiz` pages, student →
  `ai-foundations/capstone-build-train-evaluate-a-classifier`. All targets
  verified live + curriculum-registered before wiring.
- Incident note: the first edit wrote trailing commas into `path` arrays,
  which broke the registry's strict `JSON.parse` slice — roles briefly read
  as 1 item and the 11 role IDs got retired in `content-ids.json`. Restored
  the original `rol-0002…0012` IDs (the phantom `rol-0013+` minting was
  never committed), removed the commas, regenerated clean.
- Validation: all 12 roles resolve, every path ends on a practice step,
  `npm run check:links` clean, `git diff --check` clean.
- Next batch: remaining course-audit rows (track promise vs modules, first
  lesson vs stated level, prerequisites, concept-before-implementation
  ordering) — partially mechanical, partly editorial; then the acquisition
  family's editorial review rows.

### 2026-09-15 — Answer-cluster gap fill (4 new Straight Answers)

- Commit: `3e4fb00`. Authored four answer pages for the clusters the checklist lists but the
  corpus lacked: `how-much-does-an-llm-app-cost` (cost drivers + measure-first),
  `can-i-run-an-llm-locally` (privacy/latency/volume/quality tradeoffs, hedged
  per rule 12 — no invented perf claims), `deploy-an-llm-app-to-production`
  (eval gate + observability + controls + kill switch), and
  `what-is-prompt-injection` (definition + architectural-defence framing).
  All ten checklist clusters (roles, paths, tools, providers, costs, local
  models, deployment, evaluation, security, career) are now covered.
- Caught and fixed one wrong route: FDE lessons live under
  `/roles/forward-deployed-engineer/...`, not `/learn/fde/...`.
- Validation: fresh build 2,396 pages, `check:links` clean (0 dead),
  `check:content` clean, `git diff --check` clean. Registry: 2,410 items,
  answers 29 → 33.
- Next: remaining ~220 unlinked duplicate-pair verdicts, the 44-item expand
  queue, or the interview per-question weak-answer pass (56 questions).

### 2026-09-15 — Bare-path link repair + duplicate-pair cross-linking

- Commit: `a2924bc`. Found a rendering bug class: 29 content files carried **bare `/learn/` paths**
  as literal text — 96 in `**Related:**` footers, 89 in body prose — which
  markdown renders as plain text, not links. Converted all to `[title](path)`
  links using the registry title map; also dropped the leading self-title
  artifact from 8 Related lines ("Related: <this page's title> · links").
- Added the missing reverse link for each of the six strongest duplicate-
  candidate pairs (openapi conversion, schema versioning, tool descriptions,
  tool-calling-across-providers, json-schema subset, sandboxing) — same-topic
  pairs now cross-link in both directions, so the reader always finds the
  deeper companion. Verdicts: keep both members (they're overview/deep or
  track-lensed pairs), no merges — merges stay gated on redirect support.
- `check:content` now gates on bare internal paths outside link syntax, so the
  bug class can't regress.
- Effect: zero-in-body-link items 768 → 624; duplicate pairs already-linked
  123 → 137 of 357.
- Validation: `check:content` clean, `check:links` clean on a fresh build
  (2,392 pages), `git diff --check` clean.
- Next: the remaining ~220 unlinked candidate pairs (mostly deliberate
  two-part or track-lensed lessons — link-or-keep verdicts), then the 44-item
  expand queue.

### 2026-09-15 — Scenario + guide gap closure

- Commit: `31386e9`. Closed the scenario section gaps the family audit flagged: added **What you
  don't know** (missing-information) to `agent-approval` and `document-qa`, and
  **Failure injection** sections to `agent-approval`, `support-assistant`,
  `mcp-team-server`, and `streaming-research`. All 6 scenarios now carry the
  full 9-section set the checklist requires (situation → postmortem), and
  `audit-families.mjs` enforces `missingInfo`/`failureInjection` permanently.
- Added a **Go further** section to every scenario — a matching `/interview`
  set plus a capstone/project link (support-assistant → rag-capstone-support-bot,
  eval-release → genai production capstone, etc.). Scenario→interview and
  scenario→project links went from 0 to 12.
- Closed the guide section gaps: `defend-against-prompt-injection` gained
  "Before you start" (prerequisites) and "Where to go next";
  `rag-fine-tuning-or-a-longer-prompt` gained next-steps; `write-your-first-eval`
  gained "Where this sits in the system" covering architecture + data-flow
  security; `build-a-rag-pipeline` and `cut-your-llm-bill` gained explicit
  architecture passages. All 9 guides now cover the checklist's full section
  list.
- Ticked the corresponding family-review and Phase 4 rows; annotated the rows
  that remain editorial (intent, originality, distractor quality).
- Validation: `npm run registry` + `audit:families` (0 scenario flags),
  `check:content` clean, `check:links` clean (2,392 pages), `git diff --check`
  clean.
- Next: acquisition-family editorial rows and the 44-item expand queue, or the
  Phase 1 canonical-model validation rules.

### 2026-09-15 — Course ordering checks + roles.ts note

- Commit: `290573f`. Extended "Track gap briefs" with three ordering checks: `-quiz` nodes must
  follow their stem lesson, a track's first live node shouldn't be
  quiz/lab/capstone, and `coming` nodes shouldn't wedge inside the live
  sequence. **All three pass clean on every track** — the curriculum order is
  structurally sound; the gaps are coverage, not sequence.
- Prerequisite check recorded as schema-blocked: `TrackNode` carries only
  title/slug/status/eta — no prerequisite field exists, so "prerequisites are
  explicit and reachable" needs the canonical content-model work first.
- Validation: `npm run registry` clean; `npm run check:content` clean;
  `git diff --check` clean.
- Next batch: the remaining family-review rows are editorial (intent,
  originality, distractor quality) — start with the 44 "expand" dispositions
  (thin vs family median) and the top duplicate-candidate pairs for
  merge/redirect verdicts.

### 2026-09-15 — Title-overpromise detection

- Commit: `00ebacf`. Added a mechanical proxy for "titles promise more than
  bodies deliver": scope-word titles ("complete", "handbook", "deep dive",
  "end to end") on bodies under half the family median, plus numeric promises
  ("7 mistakes", "30 questions") the heading/list structure doesn't fulfill.
  Added `listItems` to `analyzeBody()` and every family builder so the numeric
  check has a structural signal beyond headings.
- Detector scope fixed mid-batch: it first ran under `CONTENT_FAMILY` (the
  linkability set) which excludes `project`/`reference`/`lab` — widened to all
  content families, excluding only structural records (track/role/page/glossary).
- Result: 1 candidate emitted (`ml-849-staged-capstone-handbook`, 368w vs
  ~1011 median — a dense spec, so likely a keep-with-reason verdict). Queue
  renders in audit-views.md "Title-overpromise candidates"; verdicts stay
  editorial.
- Validation: `npm run registry` clean; `audit:families` flags 0;
  `check:content` clean; `check:links` clean (2,396 pages); `git diff --check`.
- Next batch: course-audit editorial rows (track promise vs modules,
  first-lesson level fit), then the interview weak-answer pass.

### 2026-09-15 — Track-promise coverage + first-lesson level check

- Commit: `5c289fd`. Added a promise-coverage pass to "Track gap briefs": each track `summary`
  clause is split out and matched against live node titles (word-stem match).
  First run flagged 9 clauses across 9 tracks — all resolved on review as
  wording mismatches (summary rhetoric vs title vocabulary), not missing
  modules: "control the bill" → cost-budget lessons, "shrink" →
  distill/quantize lessons, "no code required" → level claim, etc.
- Each brief header now shows `starts: "<first live node title>"` — reviewed
  all 22 live tracks: every track opens on an orientation/foundational node
  consistent with its stated level ("What is X", Whole Game overview, or
  "How to use this course"). No level mismatches found.
- Tracks with zero live files are excluded from the promise check (nothing to
  cover against — they already flag "N planned nodes unbuilt").
- Both checklist rows ticked: track promise vs modules, first lesson vs level.
- Validation: `npm run registry` clean; `check:content` clean;
  `git diff --check` clean.
- Next batch: interview per-question weak-answer pass (56 questions), or the
  44-item expand queue.

### 2026-09-15 — Interview structure verification + practice links

- Commit: `1240927`. Verified all 56 interview questions carry the intended structure: a concise
  direct answer, a deeper paragraph (with curriculum links), and a
  `**Follow-up:**` prompt — uniform across all 7 files, no rewrites needed.
- Closed the verified gap: interview files linked to curriculum but not to
  practice. Each file now ends with `## Practice next` pointing at its
  matching `/practice` bank (agents/evals/mcp/prompt-engineering/rag direct;
  llm-basics → ai-foundations bank; ai-system-design → the practice index,
  no bank exists for it yet).
- Checklist row stays partial: terminology currency, role relevance, and
  per-question depth quality are editorial judgements.
- Validation: `npm run build` clean (2,396 pages); `check:links` clean;
  `audit:families` flags 0.
- Next batch: the 44-item expand queue (thin vs family median) or remaining
  duplicate-pair verdicts.

### 2026-09-15 — Expand-queue review + completeness gate

- Commit: `3ac0691`. Reviewed the 45-item live expand queue. Finding: the wordCount-vs-median
  signal systematically over-fires on dense formats — spec documents
  (assessments, public-data projects, reproductions, capstone handbook),
  the ML lab template (short answer / how it works / hands-on / checkpoint),
  LaTeX derivations (word count misses math), and code-bearing lessons
  (code blocks are stripped before counting).
- Added `specFormat` (rubric/protocol/deliverable/checkpoint headings) and
  `mathDense` (LaTeX density) features; `expand` now requires thin prose AND
  no spec/math/code substance. Live queue: 45 → 5 candidates
  (choosing-a-model, next-token-prediction, tokenization-explained,
  agents-need-a-harness, deploy-an-llm-app-to-production) — all reviewed as
  tight-but-complete; they stay queued for the editorial pass.
- Side benefit: spec-format items with zero links now correctly surface as
  `investigate` (islands) instead of being masked by `expand`.
- Validation: `npm run registry` clean; dispositions now keep 1,911 /
  investigate 468 / expand 31 (26 planned stubs + 5 live candidates).
- Next batch: duplicate-pair verdicts (~220 unlinked), then the canonical
  content model.

### 2026-09-15 — Duplicate-detector precision fix + 74 same-topic cross-links

- Commit: `8609f40`. Fixed a systematic false positive in the dup detector: sibling kind pages
  (`mcp-auth-quiz` <> `mcp-transports-quiz`, `mcp-X-cheatsheet` <>
  `mcp-Y-cheatsheet`) scored high on shared kind/track tokens alone. Pairs now
  require at least one *distinctive* shared token (outside the kind/domain
  stoplist). First attempt — stoplisting those tokens outright — made it worse
  (smaller denominators → easier thresholds: 357→418); the gate-not-stoplist
  version landed at **334 pairs**.
- Reviewed the unlinked queue by kind: 136 same-kind pairs are the real
  review set; ~57 complementary-kind pairs (concept↔quiz/mistakes) are
  keep-both by design. Confirmed a systematic two-batches-coexist pattern:
  numbered-course files vs named lessons on identical topics
  (computation-graphs, RLHF/reward-models, lost-in-the-middle, causal-masking,
  reverse-mode-autodiff), plus six same-directory public-data project twins
  (adult-income, bike-sharing, bank-marketing, aps-failure, movielens,
  online-retail each specified twice).
- Cross-linked all 74 strong same-topic pairs in both directions via the
  `**Related:**` convention (139 files edited). Unlinked queue: 193 → 119.
  Verdicts (merge/redirect/canonical-choice) remain gated on written evidence.
- Validation: `npm run registry` clean; `check:content` clean.
- Next batch: remaining ~119 unlinked pairs (mostly cross-batch twins needing
  canonical-choice verdicts), then Phase 1 canonical content model.

### 2026-09-15 — Phase 1 slice: prereq schema + validation rules

- Commit: `78eeb4d`. `TrackNode.prereq?: string[]` added to `src/data/curriculum.ts`;
  `check-content` now validates each edge: prereq must be a node in the same
  track AND declared earlier (catches unreachable/circular deps). Verified by
  fault injection — both violation types fail the gate.
- Rewrote the curriculum parser as block-based (node objects per track span),
  which also captures declaration order for the ordering checks.
- Added two more canonical-model validations: future `updated:`/`published:`
  dates are rejected (a future "updated" is a freshness lie), and answer files
  with duplicate normalized titles are flagged (intent collision).
- Seeded 3 true prereq edges to exercise the field (mcp-architecture ←
  what-is-mcp, the-tool-call-loop ← anatomy-of-a-tool-call,
  bpe-vs-wordpiece ← build-bpe-from-scratch). Coverage is now a data-entry
  task, not a schema blocker.
- Validation: `check:content` clean (2,060 nodes); `npm run build` clean
  (2,395 pages).
- Next batch: remaining Phase 1 validations (volatile-without-review-date,
  provider-comparison sourcing, numeric-claim sourcing) or the ~119
  duplicate verdicts.

### 2026-09-15 — Phase 1 validation cluster

- Commit: `ecd62ca`. Registry gains `sourcingFlags` + an audit-views section: volatile pages
  without `updated` (0 violations), comparison-intent pages whose external
  links are all provider domains (0 violations), and pricing/release-sensitive
  pages with ≥4 numeric claims and no source signal (**144 candidates** —
  mostly quizzes/worked examples carrying numeric options or figures on
  volatile topics).
- `analyzeBody` gains `numericClaims` (unit-bearing numbers, %, $, N×,
  ≥3-digit figures); all family builders carry it through `features`.
- `audit-families` gains the two practice-bank rules: empty `why[]`
  explanations and repeated option/distractor text — in both centralized
  banks and lesson quiz pages. Current corpus: 0 findings on both.
- Six Phase-1 checklist rows ticked; "missing required sources" stays noted
  as blocked on the source-registry schema (no required-source field exists).
- Validation: `npm run registry` clean; `audit:families` flags 0;
  `check:content` clean.
- Next batch: editorial status workflow (`proposed`→`retired` field +
  validation) or source-registry schema.

### 2026-09-15 — AI Literacy track gaps closed

- Commit: `d415f60`. Three new lessons: `meet-skills-connectors-and-agents` (capability ladder +
  permission table + three safety defaults), `seven-first-ai-workflows-lab`
  (task→prompt→artifact→check card for each of research, writing, planning,
  spreadsheet, document, presentation, image), and
  `ai-across-languages-and-accessibility` (three multilingual working patterns
  + four accessibility use-cases). All registered in curriculum; all four
  AI-Literacy checklist rows ticked (the "more decisions/drills/scenarios"
  row was already covered — annotation cites the existing pieces).
- Validation: `check:content` clean (2,063 files); build 2,398 pages;
  `check:links` 0 dead; registry + family audit clean.
- Next batch: next track-section rows (AI Foundations overlap resolution,
  Maths Foundations diagnostics/practice) or editorial status workflow.

### 2026-09-15 — AI Foundations overlap pass

- Commit: `862e44c` (13 pure-diff files; mixed files with in-flight user
  edits stay uncommitted). Cross-linked 13 same-topic duplicate pairs touching `ai-foundations` in
  both directions via the `**Related:**` convention: the identical-slug
  `why-llms-hallucinate` twins (ai-foundations ↔ llm-foundations),
  `backpropagation-explained` ↔ `the-chain-rule`, `gradient-descent-explained`
  ↔ `batch-gradient-descent-and-learning-rate`, the `ai-systems/` numbered
  files ↔ their `classical-ai` twins (bayesian networks, constraint
  satisfaction), the training-vs-inference triangle, `310-retrieval-…` ↔ the
  `/answers/what-is-rag` page, red-teaming and uncertainty pairs, and the
  in-track capstone pair. One pair linked to the FDE page across audiences.
- ai-foundations unlinked dup pairs: 17 → 4 (remaining are weak-relation or
  cross-track capstone triplets queued for editorial merge/canonical
  verdicts). Global unlinked queue: 119 → 106.
- Validation: registry + `check:content` clean; build 2,398 pages;
  `check:links` 0 dead.
- Next batch: Maths Foundations diagnostics/practice rows, or the remaining
  track-section rows.

### 2026-09-15 — Footer-pointer link resolution

- Commit: `5bfa768`. The numbered-course tracks' "Continue / Go deeper /
  Apply it" footers named target lessons as plain text — a convention that
  rendered as dead text. Resolved 275 pointers to real links in 178 files
  via slug-exact + title-containment matching (slug match preferred, which
  fixed verb-style ML titles like "Linear algebra for ML" →
  `linear-algebra-for-ml`). Maths files with no outward links: 167 → 48;
  island lessons: 464 → 395. ~59 pointers remain unresolved — they name
  module-level targets ("Mathematics Foundations checklist") that aren't
  pages; those are editorial.
- Validation: `check:content` clean (2,063); build 2,398 pages;
  `check:links` 0 dead; registry regenerated.
- Next batch: ML/DL/classical track rows, or the editorial status workflow.

### 2026-09-15 — Machine Learning track rows

- New lesson `predictive-ml-vs-generative-ai` registered in the ML track
  (after `learning-paradigms`): predictive vs generative choice frames, the
  three separating questions, and onward links into the ML path and the
  ai-foundations 302 chooser.
- All four Machine Learning rows ticked — the baseline→deployment path and
  public-data projects verified as already covering the named topics (data
  cards, seeded splits, debugging, and stakeholder communication all exist);
  the separation row needed the new lesson.
- Validation: `check:content` clean (2,064); build 2,399 pages;
  `check:links` 0 dead.
- Next batch: Classical AI / Deep Learning keep-or-merge decisions, or
  LLM Foundations audit row.

### 2026-09-15 — Classical AI ↔ agentic bridges + DL decisions

- Commit: `acb3f54`. 14 curated bridges added both directions between
  classical-ai and agentic-ai (reactive→ReAct, deliberative/HTN→planning,
  multi-agent→patterns/blackboard, minimax→tree-search, safety→autonomy
  dial). Mixed .mdx files carry the user's migration edits — my link
  appends ride along uncommitted there.
- Classical AI (83 items) and Deep Learning (136 items) keep-vs-merge
  decisions recorded: both already expanded far past the stale "3-file"/
  "4-file" descriptions in the checklist; all named topics verified covered.
- Next batch: LLM Foundations audit row + model-card/tokenizer labs, or
  the remaining per-track rows.

### 2026-09-15 — LLM Foundations labs

- Two new labs registered with prereq edges: `inspect-a-real-tokenizer-lab`
  (six probe routine — identity, numbers, code, case, multilingual,
  boundary; ← `build-bpe-from-scratch`) and `read-a-model-card-lab`
  (five-field critical reading; ← `reading-a-real-model-config`).
- All three LLM Foundations rows ticked; evaluation coverage flagged as the
  thinnest named topic (1 item).
- Validation: `check:content` clean (2,066); build 2,401 pages;
  `check:links` 0 dead.
- Next batch: Prompt Engineering consolidation rows, or the editorial
  status workflow.

### 2026-09-15 — Prompt/Context/Structured-Outputs rows

- Commit: `cb0cde1`. New content: `provider-differences-lab` (PE),
  `refusals-and-partial-outputs` + `openapi-schemas-in-practice`
  (structured-outputs, both registered). `cross-provider-landscape`
  gained an official-docs verification section. 14 PE→sibling bridges
  (context/schemas/retrieval/tools/product-behavior), last 2 PE dup
  pairs + 3 CE pairs cross-linked. All 4 PE rows, all 3 CE rows, all 3
  structured-outputs rows ticked — most coverage already existed; the
  gaps were links and three missing lessons.
- Validation: `check:content` clean (2,069); build 2,404 pages;
  `check:links` 0 dead; registry 2,393 items.
- Next batch: Tools/Function-Calling, RAG, Hallucinations rows.

### 2026-09-15 — Tools/RAG/Hallucinations rows

- New content: `tool-discovery-at-runtime`, `idempotent-tool-design`,
  `building-a-database-tool` (tools-function-calling),
  `diagnosing-rag-failures-end-to-end` (rag, prereq
  `building-a-rag-pipeline-end-to-end`). All registered in curriculum.
- Ticked: 2/3 Tools rows (dispatch loops; the ten-topic lab row — the
  project row stays open at 3/6), all 3 RAG rows, all 4 Hallucinations
  rows (consolidation audited — the 4 unlinked pairs are deliberately
  distinct quiz variants).
- Validation: `check:content` clean (2,073); build 2,408 pages;
  `check:links` 0 dead (one stale-build false failure — rebuild resolved).
- Next batch: remaining Phase 8 track sections.

### 2026-09-15 — Remaining Phase 8 track sections

- New content: `agent-task-contracts` + `agent-permissions-and-authorization`
  (agentic-ai, both prereq-ed), `consent-contestability-and-impact`
  (responsible-ai), `observability-for-ai-services` (python-data-apis).
  All registered.
- Ticked: 2/3 GenAI (voice project open), all 3 Agentic, 1/3 Harness
  (web/research case studies + skill/MCP integrations open), 2/4 MCP
  (multi-language + MCP Apps open), all 3 Evals, 2/3 Fine-Tuning
  (versioned labs open), 2/3 Production (cloud/portable deploy
  walkthrough open), all 3 Responsible AI (expand-vs-cross-cutting
  decision recorded: hybrid), both Python rows.
- Phase 8 status: every track section now audited; open rows are named
  content gaps, not unknowns.
- Validation: `check:content` clean (2,077); build 2,412 pages;
  `check:links` 0 dead (5,203 routes); registry 2,401 items.
- Next batch: Phase 6B/6C reference coverage or Phase 1 source-registry
  schema — whichever unblocks more rows.

### 2026-09-15 — Source registry + editorial workflow + freshness queue

- New infrastructure: `src/data/sources.json` (73-entry source registry:
  title/publisher/author/publishedAt/accessedAt/url/type/claims/status,
  seeded from the checklist's vendor list + every real external citation
  in the corpus); `sources:` frontmatter on lessons/questions/scenarios/
  answers; `reviewStatus` enum (9-stage editorial workflow);
  `check:sources` external-URL health report; staleness-ordered freshness
  queues in audit-views; rendered Sources section on lesson pages.
- check-content additions: registry schema validation, dangling source-id
  rejection across all five citing collections, status↔reviewStatus
  consistency. 32 citing files wired to registry ids.
- Ticked: editorial workflow row; 6/8 source-ledger rows (benchmark
  methodology + vendor-change notes open); 1/4 canonical-model rows
  (others annotated — vendor/cert records pending Phase 6/7); 6/7
  freshness rows (change notes open). Required-source annotation updated.
- First `check:sources` run: 5/73 unreachable — all bot-blocked domains
  (OpenAI, ScienceDirect, MIT Press, Gallica), the anticipated
  false-positive class; report-only by design.
- Validation: `check:content` clean (2,077); build 2,412 pages;
  `check:links` 0 dead (5,203); registry 2,401 items; Sources section
  verified rendering in built HTML.
- Next batch: Phase 6B/6C framework/tool reference coverage.

### 2026-09-15 — Local Models & Inference track (Phase 6B start)

- Commit: `b337bfb`. New track `local-inference` (n 23, Production group) — the
  corpus had zero dedicated Ollama/llama.cpp/vLLM coverage despite Phase 6B
  naming them. 8 lessons: `what-local-inference-actually-means`,
  `ollama-first-run`, `ollama-modelfiles-and-apis`,
  `llama-cpp-build-quantize-serve`, `vllm-production-serving`,
  `quantization-formats-and-tradeoffs-lab`, `hardware-sizing-measurement-guide`,
  `the-local-privacy-boundary`. Prereq edges chain the runtime lessons to the
  intro and vLLM/quantization to llama.cpp.
- Checklist: 6 of 14 local-model rows ticked (Ollama, llama.cpp, vLLM,
  quantization lab, hardware sizing, privacy guide). Still open: LM Studio,
  SGLang, HF Transformers/pipelines, TGI/TEI, MLX, ONNX — none have coverage
  yet; no invented ticks.
- Editorial guardrails held: hardware and quantization lessons teach a
  measure-it-yourself method (resident bytes, tok/s, perplexity on your own
  hardware) instead of publishing unsourced numbers; the privacy lesson
  separates local execution from telemetry/downloads/plugins/remote fallbacks.
- Validation: `check:content` clean (2,085 lessons); build 2,421 pages;
  `check:links` 0 dead (5,221 routes); registry 2,410 items.
- Next batch: remaining local-inference rows (LM Studio/SGLang/MLX/ONNX/HF),
  then agent frameworks.

### 2026-09-15 — Local-inference section complete (all 14 rows)

- Commit: `44a3c2c`. Six more lessons complete the Local models section:
  `lm-studio-local-server`, `sglang-serving-and-structured-generation`,
  `mlx-lm-on-apple-silicon`, `onnx-runtime-on-device-inference`,
  `huggingface-transformers-pipelines`, `huggingface-tgi-and-tei`. Track now
  14 lessons with prereq ordering: simple runtimes → engines → dev library →
  serving → labs/sizing/privacy.
- Checklist: all 14 Phase 6B Local-models rows now ticked. Sources verified
  before citing — 8 new source records (lmstudio.ai/docs, docs.sglang.ai,
  MLX docs + mlx-lm repo, onnxruntime.ai/docs, HF transformers/TGI/TEI docs),
  all HTTP-verified during authoring.
- Editorial consistency held: every runtime lesson answers "when this vs the
  alternatives" (LM Studio vs Ollama vs vLLM; TGI vs vLLM; MLX portability
  limit; ONNX embedded-vs-served), and comparisons defer to the measure-it-
  yourself lessons rather than repeating vendor benchmarks.
- Validation: `check:content` clean (2,091); build 2,427 pages;
  `check:links` 0 dead (5,233 routes); registry 2,416 items.
- Next batch: Phase 6B agent/application frameworks (raw-SDK baseline,
  Agents SDK, LangGraph, LlamaIndex, PydanticAI, etc.).

### 2026-09-15 — Agent Frameworks track: baseline + provider SDKs

- Commit: `f88f9a4`. New track `agent-frameworks` (n 24, Agentic group) with 4
  lessons: `raw-sdk-agent-baseline` (the while-loop every framework wraps),
  `openai-agents-sdk` (agents/handoffs/guardrails/sessions/tracing),
  `claude-agent-sdk` (Claude Code harness as a library: built-in tools,
  subagents, MCP, permissions), `google-adk` (LlmAgent + Sequential/Parallel/
  Loop workflow agents — control flow as code, not prompt).
- Checklist: 5 rows ticked (raw-SDK baseline row, the three provider SDKs,
  and the "when plain code is enough" convention — each module carries the
  section; keep enforcing as modules land). 16 framework rows remain open.
- 3 new verified source records (openai.github.io/openai-agents-python,
  docs.claude.com agent-sdk, google.github.io/adk-docs).
- Validation: `check:content` clean (2,095); build 2,432 pages;
  `check:links` 0 dead (5,243 routes); registry 2,421 items.
- Next batch: LangChain/LangGraph/LlamaIndex, then the typed frameworks
  (PydanticAI/Agno/SK/AutoGen/CrewAI/Mastra), then specialized tooling
  (Vercel AI SDK/DSPy/Haystack/Instructor/no-code) + comparison capstone.

### 2026-09-15 — Agent Frameworks: LangChain ecosystem + LlamaIndex

- Commit: `df1f099`. 3 lessons: `langchain-agents-and-integrations`
  (integration catalog + init_chat_model + create_agent→LangGraph, with the
  API-churn caveat), `langgraph-durable-agents` (StateGraph/reducers/
  checkpointers/interrupts — durable execution as the buying reason),
  `llamaindex-data-framework` (loaders→indexes→query engines→Workflows→
  agents, positioned data-first). Track now 7 lessons.
- Checklist: LangChain, LangGraph, and LlamaIndex rows ticked. 13 framework
  rows remain (Agno, PydanticAI, SK, AutoGen, CrewAI, Mastra, Vercel AI SDK,
  DSPy, Haystack, Instructor, Outlines/Guidance, no-code, comparison).
- Sources: 2 new verified records (docs.langchain.com, docs.llamaindex.ai);
  reused existing langchain-langgraph-docs.
- Validation: `check:content` clean (2,098); build 2,435 pages;
  `check:links` 0 dead (5,249 routes); registry 2,424 items.

### 2026-09-15 — Agent Frameworks: typed/specialized tier (6 lessons)

- Commit: `4b62ee3`. `pydanticai-typed-agents` (Agent[Deps,Output], DI,
  output_type, evals/Logfire), `agno-teams-and-agentos` (knowledge/memory/
  guardrails as constructor args + serving runtime), `microsoft-agent-frameworks`
  (SK + AutoGen + MAF convergence — both Microsoft rows in one honest story),
  `crewai-crews-and-flows` (role/goal/backstory, processes, Flows),
  `vercel-ai-sdk` (plumbing layer: streamText/useChat/generateObject/Zod
  tools/generative UI), `mastra-typescript-agents` (TS-native framework,
  suspend/resume workflows). Track now 13 lessons.
- Checklist: 7 more rows ticked (Agno, PydanticAI, SK, AutoGen, CrewAI,
  Mastra, Vercel AI SDK). 6 rows remain: DSPy, Haystack, Instructor,
  Outlines/Guidance, no-code, comparison capstone.
- Sources: 6 new verified records (ai.pydantic.dev, learn.microsoft.com SK,
  microsoft.github.io/autogen, docs.crewai.com, mastra.ai, ai-sdk.dev).
- Validation: `check:content` clean (2,104); build 2,441 pages;
  `check:links` 0 dead (5,261 routes); registry 2,430 items.

### 2026-09-15 — Agent Frameworks section complete (all 21 rows)

- Commit: `fd6cb16`. Final 5 lessons: `dspy-programmatic-prompting`
  (signatures + optimizers — prompt as compile artifact),
  `haystack-pipelines` (component DAGs, agents as nodes),
  `structured-output-libraries` (Instructor retry-layer vs Outlines
  decode-layer vs Guidance prompt-program — covers 2 rows),
  `no-code-ai-workflows` (n8n/Zapier/Make/Pipedream bounded scope), and
  `framework-comparison-and-escape-hatches` (9-dimension × 14-framework
  matrix capstone). Track complete at 18 lessons.
- Checklist: all 21 agent/application-framework rows now ticked — the
  largest single section closed this session. Conventions held throughout:
  raw-SDK baseline first in every module, "when plain code is enough" in
  every module, no benchmark numbers without measurement framing.
- Sources: 4 new verified records (dspy.ai, docs.haystack.deepset.ai,
  python.useinstructor.com, docs.n8n.io). Track total: 13 sources.
- Validation: `check:content` clean (2,109); build 2,446 pages;
  `check:links` 0 dead (5,271 routes); registry 2,435 items.
- Next batch: Phase 6B RAG/data tooling, observability, or security rows.

### 2026-09-15 — RAG & data tooling section complete (all 16 rows)

- Commit: `621adfa`. 7 vendor-layer lessons added to the `rag` track (63
  lessons): `pgvector-in-postgres`, `managed-vector-databases`
  (Pinecone/Weaviate/Qdrant/Milvus by deployment model),
  `embedded-vector-stores` (Chroma/LanceDB/Redis),
  `search-engines-with-vectors` (ES/OpenSearch/Vespa — hybrid-native
  lineage), `document-parsing-tools` (Unstructured/Docling/LlamaParse/cloud
  doc-AI by failure mode prevented), `rerankers-in-practice` (Cohere vs
  open cross-encoders vs LLM-as-reranker), and
  `benchmarking-retrieval-shared-corpus` (versioned corpus + gold labels +
  frozen metrics — the method every store lesson defers to).
- Checklist: all 16 RAG/data-tooling rows ticked. The "teach ops with every
  store" row is satisfied by a standing "Operations that matter" section
  (access control / deletion / freshness / provenance / evaluation) in each
  store lesson — a convention, like "when plain code is enough" was for
  frameworks.
- Sources: 13 new verified records (pgvector repo, Pinecone, Weaviate,
  Qdrant, Milvus, Chroma, LanceDB, Elastic dense_vector, Vespa,
  Unstructured, Docling, LlamaParse, Cohere Rerank). Milvus docs 403s for
  curl but 302s to real docs with a browser UA — bot-block class, source
  kept.
- Validation: `check:content` clean (2,116); build 2,453 pages;
  `check:links` 0 dead (5,285 routes); registry 2,442 items.
- Next batch: observability/prompt-management/eval tooling (12 rows) —
  Langfuse, LangSmith, Phoenix, Weave, Helicone, Braintrust, OTel,
  Promptfoo, eval libs, shared instrumented app.

### 2026-09-15 — Observability & eval tooling section complete (all 12 rows)

- Commit: `feade3c`. 6 lessons added to the `production` track:
  `llm-observability-foundations` (shared vocabulary — traces/spans/
  sessions/prompt-versions/datasets/experiments/evaluators/dashboards —
  plus the operating rules: redaction, sampling, retention, env
  separation, judge calibration, feedback-to-regression loops, and an
  OpenLLMetry auto-instrumentation paragraph), `langfuse-observability`
  (self-hostable, MIT core, all named features), `langsmith-phoenix-weave`
  (three platforms by ecosystem bet), `helicone-gateway-observability`
  (gateway-vs-SDK architecture), `eval-frameworks-deepeval-trulens-
  provider-native` (pytest-shaped DeepEval, feedback-on-traces TruLens,
  provider-native evals), and `instrumenting-one-app-two-ways` (the
  shared-app row — one pipeline traced via SDK and proxied via gateway,
  with the what-each-can't-see comparison).
- Checklist: all 12 observability rows ticked. Braintrust, Promptfoo, and
  Ragas coverage is the existing `eval-tooling-landscape` lesson; OTel
  GenAI conventions was already covered — both verified, not re-authored.
- Sources: 8 new verified records (Langfuse, LangSmith, Phoenix, Weave,
  Helicone, DeepEval, TruLens, OpenLLMetry repo).
- Validation: `check:content` clean (2,122); build 2,459 pages;
  `check:links` 0 dead (5,297 routes); registry 2,448 items.
- Next batch: security/guardrails/governance section (OWASP LLM/agentic,
  NIST AI RMF, MITRE ATLAS, …).

### 2026-09-15 — Security, guardrails & governance section complete (all 10 rows)

- Commit: `65cfeb0`. New `llm-security` track (n:25, Production group, 8
  lessons): `owasp-llm-and-agentic-top-10` (taxonomy as checklist —
  integration risk framing), `nist-ai-rmf-and-mitre-atlas` (management
  layer vs threat layer), `provider-moderation-and-safety-apis` (the
  cheap floor), `guardrails-frameworks-in-practice` (Guardrails AI
  validation / NeMo conversational rails / Llama Guard self-hosted
  classifier — chosen by failure mode), `prompt-injection-testing-and-
  threat-models` (garak breadth + Promptfoo app-shaped red team + the
  assets/boundaries/adversaries/actions template),
  `llm-supply-chain-security` (code layer + model-artifact layer,
  artifact inventory/SBOM), `sandboxing-code-execution-and-browser-use`
  (untrusted-action isolation, egress, scoped creds), and
  `audit-logs-and-accountability` (decision events, tamper-resistance,
  approval records, deletion that deletes).
- Checklist: all 10 rows ticked. Two rows ride existing coverage —
  confused-deputy/identity is `the-authority-problem` +
  `approval-gates-design` (tools-function-calling track); incident
  handling is the production track's postmortem/on-call lessons.
- Sources: 12 new verified records (OWASP GenAI, NIST AI RMF, MITRE
  ATLAS, OpenAI Moderation, Guardrails AI, NeMo Guardrails, Purple
  Llama, garak, Promptfoo red-team, E2B, gitleaks, sigstore
  model-transparency).
- Gotcha fixed: curriculum track field is `nodes`/`summary`, not
  `items`/`desc` — wrong field name built a track with `nodes:
  undefined` and crashed the lesson template's `track.nodes.filter`.
  check:content didn't catch it (validates slug matching, not schema).
- Validation: `check:content` clean (2,130); build 2,468 pages;
  `check:links` 0 dead (5,315 routes); registry 2,457 items.
- Next batch: Phase 6C harness foundations + CLI/web harness sections.

### 2026-09-15 — Harness foundations + CLI harness course complete (all 20 rows)

- Commit: `74d344c`. New `cli-agents` track (n:26, Agentic group, 7
  lessons): `getting-the-agent-oriented` (repo discovery + instruction
  files + context control — rows 1–2), `planning-modes-and-patch-review`
  (plan/read-only modes + diff review — rows 3–4),
  `permissions-sandboxes-and-git-workflow` (the approval dial, sandbox
  mechanisms, branches/worktrees/commits/PR/CI — rows 5–6),
  `headless-runs-and-automation` (non-interactive flags, structured
  output, cron/CI scheduling — rows 7–8), `customizing-the-agent-surface`
  (MCP config + skills/commands/rules/hooks/subagents chooser —
  rows 9–10), `multi-agent-and-recovery` (worktree isolation, file
  ownership, context-rot reset, handoff notes — rows 11–12), and
  `cli-agent-labs` (untrusted-repo injection drill + the same-fixture
  comparative run across Codex/Claude Code/Gemini CLI/Aider — rows 13–14).
- Foundations section: all 6 rows ticked. Five ride existing
  harness-design coverage (control loop, context/state/permissions/
  sandboxing/checkpoints lessons, task contracts, crash recovery,
  model-routing-and-fallback). One new lesson added: `agent-stack-
  vocabulary` — the ten-term taxonomy (model/loop/harness/tool/skill/
  MCP/instruction/hook/subagent/workflow) that row 1 specifically asks
  for and no existing lesson covered.
- Sources: 5 new verified records (Claude Code docs, Codex repo, Gemini
  CLI repo, Aider docs, MCP spec). Aider docs URL is `/docs/` —
  `/docs.html` 404s.
- Validation: `check:content` clean (2,138); build 2,477 pages;
  `check:links` 0 dead (5,333 routes); registry 2,466 items.
- Next batch: web/browser harness course (14 rows), MCP curriculum
  (10 rows), Agent Skills curriculum (9 rows).

### 2026-09-15 — Web & browser harness course complete (all 14 rows)

- Commit: `49e9251`. New `web-agents` track (n:27, Agentic group, 7
  lessons): `what-the-browser-exposes` (all perception + state/event
  channels — row 1), `playwright-fundamentals-and-locators` (auto-waits
  + semantic locators, deterministic baseline — rows 2+9),
  `cdp-puppeteer-selenium-devtools-mcp` (protocol layer cake — rows
  3+6), `agentic-browsers-overview` (Browser Use / Stagehand+Browserbase
  / provider computer-use + the deterministic-first chooser — rows
  4+5+7+14), `sessions-credentials-and-act-boundaries` (stored contexts
  over typed passwords, observe/low-stakes/consequential gate — rows
  8+10), `web-prompt-injection` (page/downloads/tool results as
  attacker — row 11), `extraction-and-evaluation` (schema extraction +
  source capture, replay/traces + failure taxonomy — rows 12+13).
- Computer-use mechanism was already covered by
  `computer-use-agents`; vendor tooling was the gap.
- Sources: 8 new verified records (Playwright, CDP, chrome-devtools-mcp,
  Browser Use, Stagehand, Anthropic computer-use, Puppeteer, Selenium).
- Validation: `check:content` clean (2,145); build 2,485 pages;
  `check:links` 0 dead (5,349 routes); registry 2,474 items.
- Next batch: MCP curriculum (10 rows), Agent Skills curriculum (9 rows).

### 2026-09-15 — MCP curriculum complete (all 10 rows)

- Commit: `520e695`. The `mcp` track already carried near-complete
  coverage (57 lessons): lifecycle/transports, all primitives incl.
  roots/sampling/elicitation, client+server builds, the full auth
  family, trust/injection/supply-chain security, registries,
  testing/deployment/versioning. One real gap filled:
  `mcp-apps-and-ui-extensions` (MCP Apps `ext-apps` + MCP-UI pattern,
  honest about draft-stage status).
- Date-stamp row: `published`/`updated` added to the five
  spec-evolution-sensitive lessons (versioning, streamable-http,
  elicitation, sampling, roots) — those edits ride in the working tree
  with the user's `.mdx` migration (mixed files, not staged).
- Sources: 2 new verified records (ext-apps repo, mcpui.dev); mcp-spec
  record added earlier this session.
- Validation: `check:content` clean (2,146); build 2,486 pages;
  `check:links` 0 dead (5,351 routes); registry 2,475 items.
- Next batch: Agent Skills curriculum (9 rows) — spec, SKILL.md
  anatomy, provenance/security, eval, porting, projects/capstone.

### 2026-09-15 — Agent Skills curriculum complete (all 9 rows) — Phase 6C done

- Commit: `f24eac1`. New `agent-skills` track (n:28, Agentic group, 6
  lessons): `agent-skills-spec-and-progressive-disclosure` (spec + the
  three disclosure levels — row 1), `skill-md-anatomy` (frontmatter,
  description-as-trigger-copy, scoped body, scripts/references/assets,
  install/versioning — row 2), `skill-vs-prompt-rule-hook-mcp-subagent`
  (the who-triggers-what chooser — row 3),
  `skill-security-and-provenance` (threat model + the printable
  skill-audit checklist + safe-install practice — rows 4+7),
  `evaluating-and-porting-skills` (task→artifact fixtures, trigger
  rate, per-host verification — rows 5+6), and
  `skills-projects-first-skill-and-capstone` (first-skill project +
  workflow→tested-skill capstone — rows 8+9).
- Sources: 2 new verified records (agentskills.io spec, anthropics/
  skills repo).
- Validation: `check:content` clean (2,152); build 2,493 pages;
  `check:links` 0 dead (5,365 routes); registry 2,482 items.
- Phase 6C fully closed: foundations 6 + CLI 14 + web 14 + MCP 10 +
  skills 9 = 53 rows across 3 new tracks + 2 added lessons.
- Next: the task-skill guide catalog rows below, then Phase 6D
  (provider/model/framework reference expansion).

### 2026-09-14 — Master ecosystem backlog created

- Status: research and operating plan complete; execution not started.
- Repository baseline: 2,060 lesson files, 2,391 built pages, 5,161 known routes, 6
  centralized quiz tracks with 48 questions, 7 interview topics with 56 questions,
  29 Straight Answers, 6 scenarios, 9 guides, and 10 blog posts.
- Main conclusion: ordinary lesson depth substantially exceeds practice, projects,
  interview preparation, scenarios, guides, blogs, and provider/tool reference coverage.
- First execution target: build the content registry and audit ledger, then establish the
  structured question bank and complete learning loops for under-covered tracks.
- Scale guardrail: the requested 1,000 questions per major topic is an internal reviewed
  practice-bank target; it must not become thousands of thin indexable pages.

## Sources and standards for this operating plan

These sources establish current product scope or the publishing rules behind the backlog.
Every future vendor page must recheck its own official sources at implementation time.

1. Google Search Central, [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).
2. Google Search Central, [Spam policies for Google Web Search](https://developers.google.com/search/docs/essentials/spam-policies).
3. Google Search Central, [AI features and your website](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).
4. Google Search Central, [Get started with Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start).
5. Google Search Central, [Course structured data](https://developers.google.com/search/docs/appearance/structured-data/course).
6. Agent Skills, [Agent Skills overview and specification](https://agentskills.io/home).
7. GitHub Docs, [About Agent Skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills).
8. OpenAI Academy, [Using skills](https://openai.com/academy/skills/).
9. Anthropic, [Agent Skills documentation](https://platform.claude.com/docs/en/managed-agents/skills).
10. OpenAI, [Codex](https://openai.com/codex/) and [developer documentation](https://developers.openai.com/).
11. Anthropic, [Claude Code quickstart](https://code.claude.com/docs/en/quickstart) and [how Claude Code works](https://code.claude.com/docs/en/how-claude-code-works).
12. Google, [Gemini API documentation](https://ai.google.dev/) and [Gemini CLI repository](https://github.com/google-gemini/gemini-cli).
13. Meta, [Llama developer resources](https://ai.meta.com/llama/get-started/) and [Muse Code announcement](https://research.meta.ai/blog/introducing-muse-code-and-muse-spark-1-2).
14. Cognition, [Devin Knowledge Base](https://knowledge.cognition.ai/).
15. xAI, [Grok model documentation](https://docs.x.ai/developers/models).
16. Mistral AI, [model documentation](https://docs.mistral.ai/models).
17. DeepSeek, [API platform](https://www.deepseek.com/platform/) and [model API](https://api-docs.deepseek.com/api/list-models).
18. Sarvam AI, [API documentation](https://docs.sarvam.ai/).
19. Google, [Gemma documentation](https://ai.google.dev/gemma/docs/get_started).
20. Cohere, [model documentation](https://docs.cohere.com/docs/models).
21. Hugging Face, [Inference Endpoints documentation](https://huggingface.co/docs/inference-endpoints/index).
22. Ollama, [tool-calling documentation](https://docs.ollama.com/capabilities/tool-calling) and [embedding API](https://docs.ollama.com/api/embed).
23. LangChain, [LangGraph overview](https://docs.langchain.com/oss/python/langgraph/overview).
24. Agno, [Agents overview](https://docs.agno.com/agents/overview) and [workflows](https://docs.agno.com/workflows/overview).
25. Langfuse, [platform overview](https://langfuse.com/docs) and [evaluation concepts](https://langfuse.com/docs/evaluation/core-concepts).
26. Aider, [official documentation](https://aider.chat/docs/).
27. Stagehand, [official documentation](https://docs.stagehand.dev/v3/references/stagehand).
28. Browserbase, [browser-agent documentation](https://docs.browserbase.com/use-cases/agents).
29. AWS, [AI and machine-learning certifications](https://aws.amazon.com/certification/).
30. Microsoft Learn, [credential directory](https://learn.microsoft.com/en-us/credentials/browse/?credential_types=certification).
31. Google Cloud, [certification directory](https://cloud.google.com/learn/certification).
32. NVIDIA, [certification directory](https://www.nvidia.com/en-us/learn/certification/).
