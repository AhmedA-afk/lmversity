# LMVersity growth and monetization checklist

Last updated: 2026-09-14

Owner: Devin

Primary goal: increase qualified organic traffic, useful internal clicks, pages read per visit, return visits, viewable ad impressions, and sustainable ad revenue.

This plan must not optimize accidental or induced ad clicks. Google AdSense requires ad clicks to come from genuine reader interest. Keep advertisements visually distinct and away from navigation, quizzes, download controls, and other frequently clicked elements.

## How to maintain this checklist

- [ ] Update `Last updated` whenever any checkbox changes.
- [ ] Check a task only after its acceptance criteria have been verified.
- [ ] Add a dated note to the progress log for every completed group of tasks.
- [ ] Record the relevant commit, pull request, preview URL, report, or account screenshot in the progress log.
- [ ] Leave account-side tasks unchecked until an authorized operator verifies them in the relevant account.
- [ ] Do not rewrite or delete existing lesson content solely to satisfy word-count thresholds.
- [ ] Do not add a number, benchmark, date, market estimate, or citation unless it is supported by a real source.
- [ ] Preserve unrelated worktree changes. This repository may contain concurrent content work.
- [ ] Run `npm run check:content`, `npm run build`, and `npm run check:links` before marking a code or content phase complete.

Task labels:

- `CODE`: repository implementation.
- `CONTENT`: editorial work.
- `ADSENSE`: action or verification inside Google AdSense.
- `SEARCH`: action or verification inside a webmaster/search platform.
- `ANALYTICS`: measurement configuration or reporting.
- `DECISION`: owner decision required before dependent work starts.

## Progress dashboard

- [ ] P0 — Ad delivery, privacy, and policy correctness complete.
- [ ] P1 — Measurement and baseline reporting complete.
- [ ] P1 — Search cannibalization and technical SEO cleanup complete.
- [ ] P1 — Evidence and content-quality program operating.
- [ ] P2 — Mobile retention and page-speed improvements complete.
- [ ] P2 — Organic acquisition program operating from measured demand.
- [ ] P2 — Monetization experiments operating with guardrails.
- [ ] Final verification and handoff complete.

Current milestone: P0 — make the existing monetization setup correct, measurable, and consistent with the site’s privacy claims.

Current blockers:

- Vercel Web Analytics is still disabled on the project, so `/_vercel/insights/script.js`
  404s on every production page and the console carries a MIME-type error for it. No
  analytics data is being collected.
- `npm run check:content` exits 1 on `main` with 407 pre-existing lesson-frontmatter
  problems (missing `summary:`, body-level H1s). The in-flight component-kit retrofit
  fixes them; the linter shipped ahead of its fixes. Not a build gate.
- `/stats` still renders with `type="article"` and emits an `Article` node, which
  contradicts the recorded decision to keep it a `WebPage` with only a `dateModified`.
- AdSense account access is needed to decide whether Auto ads are enabled and to create or retrieve responsive ad-unit IDs.
- AdSense account access is needed to verify Privacy & Messaging and the consent-management configuration.
- Search Console and analytics account access will be needed for query, CTR, indexing, and behavior baselines.

## Verified baseline

These were confirmed during the 2026-09-14 audit and do not count as implementation progress.

- [x] The production build completes.
- [x] `npm run check:content` reports 2,060 lesson files matched to curriculum nodes.
- [x] `npm run check:links` checks 2,391 pages against 5,161 known routes and reports no dead internal links.
- [x] The build produces a sitemap index and a sitemap containing the public pages.
- [x] Canonical URLs, meta descriptions, Open Graph tags, Twitter cards, breadcrumbs, and JSON-LD are generated centrally.
- [x] `robots.txt` allows ordinary search crawlers and the explicitly listed answer-engine crawlers.
- [x] `/saved` and `/kit` are excluded from the sitemap and carry `noindex`.
- [x] Lessons have strong continuation paths: track contents, table of contents, quizzes where present, related lessons, saved progress, and previous/next navigation.
- [x] A named author and author profile links are present in the site configuration and structured data.
- [x] The homepage and lesson template were inspected at desktop and narrow mobile widths.
- [x] The repository already contains optional Plausible and Umami integrations.
- [x] `ads.txt` is generated with the configured AdSense publisher ID.

## P0 — Ship the implementation pass

The implementation set shipped on 2026-09-14 as `83f245d` and is live. The content
retrofit deliberately stayed behind and is still in the working tree.

- [x] `CODE` Commit the working-tree changes to `public/site.js`, `src/components/AdSlot.astro`,
      `src/components/Footer.astro`, `src/components/Layout.astro`, `src/components/TopBar.astro`,
      `src/data/site.ts`, `src/pages/blog/[slug].astro`, `src/styles/global.css`, `vercel.json`
      and `public/_headers`.
- [x] `CODE` Add the untracked files that belong in the repository, including `src/pages/stats.astro`
      and this checklist.
- [ ] `CODE` ~~Create a release branch…~~ **Not followed.** On the owner's instruction the
      implementation set was committed directly to `main` as `83f245d` and pushed. Every
      untracked file and deletion was classified first, nothing was staged with a blanket
      `git add .`, the content retrofit was held back in a pathspec stash, and the isolated
      set was built and link-checked before the push. The remaining ~450-file content
      retrofit still warrants this branch-and-preview flow.
- [ ] `CODE` Put the component-kit content retrofit through the release-branch and preview
      flow above; it is still uncommitted.
- [x] `CODE` Confirm the production Vercel deployment succeeds.
- [x] `CODE` Re-fetch a lesson page from production and confirm no `<ins class="adsbygoogle">`
      without a `data-ad-slot` remains.
- [x] `CODE` Re-fetch the homepage from production and confirm the footer no longer claims
      "No cookies · no tracking" while AdSense loads.
- [x] `CODE` Reload a page carrying the KaTeX bundle and confirm the `font-src` violation is gone.
- [x] `DECISION` Keep `/stats` as a `WebPage` with its sourced verification date as
      `dateModified`; no reliable publication date exists for an `Article` node.
- [ ] `CODE` Make `/stats` match that decision — it still passes `type="article"` to
      `Layout`, so the live page emits an `Article` node with `dateModified` and no
      `datePublished`.

Acceptance criteria:

- [x] The live site and the repository agree on ad markup, placement, footer wording and CSP.
- [x] The production console reports no CSP violation on a page containing maths.

## P0 — Repair ad delivery

### Choose one AdSense implementation

- [x] `DECISION` Inspect AdSense → Ads → By site and record whether Auto ads are enabled for `lmversity.com`.
- [x] `DECISION` Choose one initial implementation:
  - Recommended starting point: controlled responsive manual units with Auto ads disabled while the baseline is collected.
  - Alternative: Auto ads using only the global AdSense code, with the repository’s manual `<ins>` units removed.
- [x] `ADSENSE` Record the selected implementation and the account settings in the progress log.
- [x] `CODE` Update comments in `src/data/site.ts`, `src/components/Layout.astro`, and `src/components/AdSlot.astro` so they describe the selected implementation accurately.

Acceptance criteria:

- [ ] The repository uses either valid manual ad units or Auto ads, without an ambiguous hybrid.
- [ ] The selected behavior is documented in code and in this checklist’s progress log.

### Complete the recommended manual-unit path

Complete this subsection if manual units are selected.

- [ ] `ADSENSE` Create or retrieve one responsive display ad unit for lessons.
- [ ] `ADSENSE` Create or retrieve one responsive display ad unit for guides.
- [ ] `ADSENSE` Create or retrieve one responsive display ad unit for blog posts.
- [ ] `ADSENSE` Create or retrieve one responsive display ad unit for the stats page.
- [ ] `CODE` Add the four real `data-ad-slot` IDs to `site.ads.slots` in `src/data/site.ts`.
- [x] `CODE` Make `AdSlot.astro` render nothing unless both the publisher ID and the requested slot ID exist.
- [x] `CODE` Make a missing or unknown `kind` fail during type checking or the build instead of emitting an incomplete unit.
- [x] `CODE` Remove the second, invalid `<AdSlot />` at the bottom of `src/pages/blog/[slug].astro`.
- [x] `CODE` Confirm that each intended template emits exactly one ad unit unless a later experiment explicitly changes that number.
- [x] `CODE` Move the global AdSense script to the document `<head>` as Google’s implementation guide recommends.
- [x] `CODE` Ensure the global AdSense script is emitted only once per page.
- [x] `CODE` Keep the `Advertisement` label visible and semantically connected to the unit.
- [x] `CODE` Reserve realistic responsive slot space at each supported breakpoint rather than using one universal `min-height: 90px`.
- [x] `CODE` Prevent an unfilled or blocked unit from leaving a large empty gap indefinitely.

Acceptance criteria:

- [ ] Built manual units contain `data-ad-client`, a non-empty `data-ad-slot`, responsive format attributes, and one initialization call.
- [ ] A rendered lesson, guide, blog post, and stats page each show the expected ad request in browser network tools.
- [ ] There are no `adsbygoogle.push()` configuration errors in the browser console.
- [ ] An ad blocker or unfilled inventory does not break layout or navigation.

### Complete the Auto ads path

Complete this subsection only if Auto ads are selected.

- [ ] `CODE` Remove manual `AdSlot` containers and their initialization calls.
- [ ] `CODE` Keep only the single global AdSense script and account meta tag.
- [ ] `ADSENSE` Review every enabled Auto ads format.
- [ ] `ADSENSE` Disable formats that obscure lesson content, interrupt quizzes, or create accidental-click risk.
- [ ] `ADSENSE` Add page exclusions for internal or low-value pages such as `/saved`, `/kit`, `/privacy`, and `/terms` where appropriate.
- [ ] `ADSENSE` Record enabled formats, page exclusions, and ad-load settings in the progress log.

Acceptance criteria:

- [ ] No empty manual ad placeholders remain in generated HTML.
- [ ] Auto ads do not cover lesson navigation, search, quizzes, or completion controls on desktop or mobile.

## P0 — Fix placement and invalid-click risk

- [x] `CODE` Remove the lesson ad from its current position directly between Mark complete/Save and Previous/Next navigation.
- [x] `CODE` Select a clearly separated lesson placement that does not resemble curriculum navigation or an answer option.
- [x] `CODE` Keep adequate visual spacing between ads and interactive controls at every breakpoint.
- [x] `CODE` Check guide, blog, and stats placements for the same issue.
- [x] `CODE` Ensure ad labels use only an allowed label such as `Advertisement`.
- [x] `CODE` Do not place arrows, “support us” language, download prompts, or attention-drawing decoration beside an ad.
- [x] `CODE` Do not add click handlers, overlays, custom refresh behavior, or code that modifies an ad iframe.
- [ ] `ADSENSE` Check Policy center for invalid traffic, Confirmed Click, or placement warnings.

Acceptance criteria:

- [ ] A reader can identify every advertisement without confusing it with content or navigation.
- [ ] Mobile screenshots show clear separation from Previous, Next, quiz answers, Save, and Mark complete.
- [ ] AdSense Policy center has no unresolved placement warning attributable to the changed templates.

## P0 — Make privacy and consent claims accurate

- [x] `CODE` Make the footer text conditional on the configured services.
- [x] `CODE` When AdSense is enabled, replace `No cookies · no tracking · no account required` with accurate, concise wording and a privacy link.
- [x] `CODE` Keep the existing no-cookie wording only when no advertising or cookie-setting service loads.
- [x] `CONTENT` Review `/privacy` against the actual AdSense and analytics configuration.
- [x] `CONTENT` Remove or qualify any claim that depends on unverified AdSense account settings.
- [x] `CONTENT` Ensure the policy discloses Google and any other third-party advertising vendors actually in use.
- [x] `CONTENT` Include the required personalized-advertising and opt-out information.
- [ ] `ADSENSE` Verify that a Google-certified CMP is configured for traffic where Google requires one.
- [ ] `ADSENSE` Verify Privacy & Messaging behavior for the EEA, UK, and Switzerland.
- [ ] `ADSENSE` Record the CMP name, configuration owner, and verification date in the progress log without storing account credentials.
- [ ] `CODE` Add or expose a privacy-choice entry point if the selected CMP requires one.
- [x] `CODE` Verify the Content Security Policy permits only the domains required by the selected advertising and consent setup.

Acceptance criteria:

- [ ] Footer, privacy policy, actual network requests, and AdSense/CMP account configuration agree.
- [ ] Consent behavior is tested in an appropriate preview or production environment.
- [ ] No credential, publisher-account screenshot containing private data, or consent token is committed to the repository.

## P1 — Establish measurement before growth experiments

### Search measurement

- [ ] `SEARCH` Verify ownership of the canonical `https://lmversity.com` property in Google Search Console, preferably as a domain property.
- [ ] `SEARCH` Submit `https://lmversity.com/sitemap-index.xml`.
- [ ] `SEARCH` Record current indexed-page status and the major exclusion reasons.
- [ ] `SEARCH` Export or record the current search-performance baseline by page, query, country, and device.
- [ ] `SEARCH` Identify pages with impressions but low CTR relative to other LMVersity pages in similar positions.
- [ ] `SEARCH` Identify queries where two or more LMVersity URLs compete.
- [ ] `SEARCH` Verify Bing Webmaster Tools ownership and sitemap submission.
- [ ] `SEARCH` Verify the existing IndexNow workflow succeeds after a production build.

Do not commit private Search Console exports containing account identifiers. Store an aggregated handoff report or a redacted export location in the progress log.

### Site analytics

- [x] `DECISION` Choose Plausible or Umami; do not enable both for the initial baseline.
- [ ] `ANALYTICS` Create or identify the site property and record its non-secret site identifier.
- [x] `CODE` Configure the selected provider through the existing `site.analytics` block.
- [x] `CODE` Verify analytics loads only when a valid provider and ID are present.
- [x] `CONTENT` Update the privacy page before analytics ships.
- [ ] `ANALYTICS` Track aggregate pageviews, entry pages, exit pages, referrers, countries, and devices.
- [ ] `ANALYTICS` Add events for `curriculum_start`, `track_open`, `next_lesson`, `related_lesson`, `guide_open`, `search_open`, `search_result_open`, `lesson_complete`, `lesson_save`, and `share_or_copy_link` if that action exists.
- [x] `CODE` Use one small event helper rather than scattering provider-specific calls through templates.
- [x] `CODE` Ensure analytics failure never blocks navigation or content rendering.
- [ ] `ANALYTICS` Verify events on a preview or production property without generating ad clicks.

Acceptance criteria:

- [ ] A dashboard can show landing page → internal action → next page for the main content families.
- [ ] Privacy wording names the enabled provider and describes what is collected.
- [ ] No analytics script loads when the provider is disabled.

### Revenue measurement

- [ ] `ADSENSE` Capture baseline page RPM, impression RPM, ad impressions, coverage, and viewability by ad unit and device.
- [ ] `ADSENSE` Give manual units stable, descriptive names that identify template and placement.
- [ ] `ADSENSE` Verify every intended template appears separately in AdSense reports.
- [ ] `ANALYTICS` Track session depth and return visits alongside AdSense revenue, without attempting to identify which individual reader clicked an ad.
- [ ] `ANALYTICS` Create a weekly scorecard containing organic clicks, indexed pages, landing-page CTR, pages per visit, next-page rate, returning visitors, ad coverage, viewability, and page RPM.

## P1 — Resolve search cannibalization and duplicate intent

The audit found 12 duplicate-title groups across the lesson library. Ten groups occur inside a single track and affect 20 pages. A shared title is not automatically a defect, but same-track pairs require an explicit intent review.

- [x] `CONTENT` Compare `tools-function-calling/caching-tool-results.md` with `tools-function-calling/tool-result-caching.mdx`.
- [x] `CONTENT` Compare `tools-function-calling/code-execution-as-a-tool-concept.md` with `tools-function-calling/code-execution-as-a-tool.mdx`.
- [x] `CONTENT` Compare `tools-function-calling/computer-use-and-browser-tools-concept.md` with `tools-function-calling/computer-use-and-browser-tools.mdx`.
- [x] `CONTENT` Compare `tools-function-calling/handling-errors-and-retries.md` with `tools-function-calling/handling-tool-errors-and-retries.mdx`.
- [x] `CONTENT` Compare `tools-function-calling/parallel-tool-calls-mechanics.md` with `tools-function-calling/parallel-tool-calls.mdx`.
- [x] `CONTENT` Compare `tools-function-calling/streaming-partial-tool-calls-concept.md` with `tools-function-calling/streaming-partial-tool-calls.mdx`.
- [x] `CONTENT` Compare `tools-function-calling/token-cost-of-schemas-deep.md` with `tools-function-calling/token-cost-of-tool-schemas.mdx`.
- [x] `CONTENT` Compare `genai-app-dev/handling-api-keys-and-secrets.mdx` with `genai-app-dev/secrets-and-key-management.md`.
- [x] `CONTENT` Compare `genai-app-dev/prompt-caching-for-speed-and-cost.mdx` with `genai-app-dev/prompt-caching.md`.
- [x] `CONTENT` Compare `genai-app-dev/prompt-versioning-and-rollback.md` with `genai-app-dev/prompt-versioning-rollback.mdx`.
- [x] `CONTENT` Review the cross-track `Why LLMs Hallucinate` pages for distinct audiences and search intent.
- [x] `CONTENT` Review repeated `Foundations Quiz` titles; keep them only if the track name makes the distinction clear to readers and search engines.
- [ ] `SEARCH` Use Search Console query and canonical data when deciding which page should survive.
- [ ] `CONTENT` For true duplicates, merge the strongest material into one page.
- [ ] `CODE` Add permanent redirects from removed URLs in `vercel.json`.
- [ ] `CODE` Keep `_redirects` and any other maintained redirect configuration synchronized with `vercel.json`.
- [x] `CONTENT` For pages that remain separate, give each a unique title, summary, purpose, and internal anchor text.
- [x] `CODE` Remove deleted pages from `src/data/curriculum.ts` or register replacement pages correctly.
- [x] `CODE` Run the link and content checks after every consolidation batch.

Acceptance criteria:

- [x] Every same-track duplicate-title pair has a recorded keep, merge, redirect, or differentiate decision.
- [ ] Removed URLs permanently redirect to the most relevant surviving page.
- [ ] Search Console eventually reports one intended canonical URL for each consolidated topic.

## P1 — Improve evidence, originality, and editorial trust

The audit found 76 lesson files containing an external URL and one lesson with an explicit Sources, References, or Further Reading heading. This count is a prioritization signal; it does not mean every conceptual sentence requires a citation.

- [ ] `SEARCH` Rank lessons by impressions, clicks, backlinks, and conversions into deeper reading.
- [ ] `CONTENT` Start review with high-impression pages, pages making time-sensitive claims, and pages containing consequential security, financial, legal, or operational guidance.
- [ ] `CONTENT` Add primary sources next to claims that depend on specifications, research results, policies, product behavior, or changing software documentation.
- [ ] `CONTENT` Prefer official documentation, standards, source repositories, original papers, and first-party datasets.
- [ ] `CONTENT` Add a Sources or Further reading section when multiple sources materially support a lesson.
- [ ] `CONTENT` Add tested examples, commands, outputs, failure cases, or reproducible artifacts where they improve the lesson.
- [ ] `CONTENT` State what was tested, on which version or environment, when that context matters.
- [ ] `CONTENT` Add a short disclosure of the editorial and review process if automation or AI substantially assists content creation.
- [ ] `CONTENT` Keep author attribution accurate and avoid implying review by an expert who did not review the page.
- [ ] `CONTENT` Add an author page with relevant experience, editorial standards, correction policy, and contact routes.
- [x] `CONTENT` Link bylines to the author page where readers expect authorship details.
- [x] `CONTENT` Add a visible correction/report-an-error link to lessons, guides, answers, and blog posts.
- [x] `CODE` Pre-fill correction links with the current page URL or title without collecting sensitive reader data.
- [ ] `CONTENT` Maintain a public correction log for material corrections if one can be kept accurately.

Acceptance criteria:

- [ ] The highest-impression pages demonstrate clear sourcing or first-hand work appropriate to their claims.
- [ ] Readers can identify who wrote or reviewed a page and how to report an error.
- [ ] No source is added merely for decoration; every citation supports the nearby claim.

## P1 — Review thin and unusually long search snippets

The audit found 22 lessons below 300 words, 241 below 500 words, 149 raw titles above 60 characters, and 157 summaries above 160 characters. These are review queues, not ranking thresholds.

- [ ] `SEARCH` Intersect each review queue with impressions and clicks before editing.
- [ ] `CONTENT` Review short pages for intent satisfaction, originality, and overlap with adjacent lessons.
- [ ] `CONTENT` Merge a short page when it cannot satisfy a distinct reader need.
- [ ] `CONTENT` Expand a short page only when a concrete example, explanation, source, or decision procedure is missing.
- [ ] `CONTENT` Do not add filler to reach an arbitrary length.
- [ ] `CONTENT` Review long titles whose important query terms appear late.
- [ ] `CONTENT` Rewrite high-impression, low-CTR titles so the page’s actual answer appears early.
- [ ] `CONTENT` Review long summaries as meta descriptions and opening promises.
- [ ] `CONTENT` Keep every lesson `summary` as one complete sentence written for the reader.
- [ ] `SEARCH` Compare CTR before and after each meaningful title or description batch.
- [ ] `CONTENT` Roll back changes that reduce qualified clicks or misrepresent page content.

Acceptance criteria:

- [ ] Every edited title and summary accurately describes the page and matches its target query intent.
- [ ] No library-wide mechanical shortening is performed without evidence.

## P2 — Fix narrow-mobile retention issues

- [x] `CODE` Reproduce the header overflow on a content page at 320px CSS width.
- [x] `CODE` Confirm the overflow is caused by the combined wordmark, search, saved, theme, and menu controls.
- [x] `CODE` Add a smallest-screen header rule that preserves search, theme, and menu access without horizontal overflow.
- [x] `CODE` Hide the separate Saved icon at the smallest breakpoint if necessary because Saved remains available in the mobile menu.
- [x] `CODE` Allow flex children to shrink by adding the necessary `min-width: 0` or equivalent constraint.
- [x] `CODE` Keep every visible header control at an accessible touch size.
- [x] `CODE` Test the closed and open mobile navigation states.
- [x] `CODE` Test at 320px, 360px, 390px, tablet, and desktop widths.
- [x] `CODE` Test homepage, lesson, guide, answer, blog, and track-index templates.
- [x] `CODE` Confirm `document.documentElement.scrollWidth <= window.innerWidth` on representative pages when no intentionally scrollable code or table is active.

Acceptance criteria:

- [x] No whole-page horizontal scrolling occurs at supported phone widths.
- [x] Search, theme selection, Saved, and navigation remain reachable.
- [x] Focus indicators and keyboard navigation remain visible.

## P2 — Improve performance without weakening the design

- [ ] `CODE` Measure homepage, lesson, guide, answer, blog, and stats templates on mobile and desktop before changing performance code.
- [ ] `CODE` Record Lighthouse accessibility, SEO, best-practices, and performance results for the representative pages.
- [ ] `CODE` Check field Core Web Vitals in Search Console or PageSpeed Insights when enough field data exists.
- [x] `CODE` Keep the homepage SVG emblem as the immediate visual fallback.
- [x] `CODE` Skip the Three.js hero download on narrow screens, reduced-data connections, or other conditions where it adds little value.
- [x] `CODE` Verify the large Three.js chunk is not requested when the enhanced scene is skipped.
- [x] `CODE` Keep reduced-motion behavior working.
- [ ] `CODE` Replace width animations in quiz progress and interactive widgets with a lower-cost approach where this produces a measurable improvement.
- [ ] `CODE` Audit the largest generated HTML pages and identify whether repeated inline SVG, navigation, or duplicated markup dominates their size.
- [ ] `CODE` Reduce repeated markup only when it does not damage static rendering, accessibility, crawlability, or offline resilience.
- [ ] `CODE` Confirm self-hosted fonts remain cached and do not block rendering longer than necessary.
- [ ] `CODE` Confirm ad slots reserve space and do not become a major CLS source.
- [ ] `CODE` Re-run the representative-page measurements after changes and attach results to the progress log.

Acceptance criteria:

- [ ] The homepage keeps its authored visual identity and meaningful first paint.
- [ ] Representative mobile pages meet the agreed performance target or show a documented improvement from baseline.
- [ ] Ads do not introduce visible layout jumps during normal loading.

## P2 — Grow organic acquisition from measured demand

- [ ] `SEARCH` Create a query-opportunity backlog from Search Console rather than brainstorming pages without demand evidence.
- [ ] `SEARCH` Prioritize queries where LMVersity already receives impressions near the first page or where one strong page can complete an existing topic cluster.
- [ ] `CONTENT` Assign one primary search job to every new acquisition page.
- [ ] `CONTENT` Use `/answers` for direct question intent.
- [ ] `CONTENT` Use `/guides` for task-completion intent.
- [ ] `CONTENT` Use `-compared` pages for genuine comparison intent.
- [ ] `CONTENT` Use `-worked-example` pages for concrete example intent.
- [ ] `CONTENT` Use `-common-mistakes` pages for failure and troubleshooting intent.
- [ ] `CONTENT` Use `-cheatsheet` pages for lookup intent.
- [ ] `CONTENT` Use `-quiz` pages only when practice is the actual reader need.
- [ ] `CONTENT` Answer the query clearly near the beginning, then connect it to the deeper curriculum.
- [ ] `CONTENT` Add contextual links from relevant lessons and hubs using descriptive anchor text.
- [ ] `CONTENT` Add links back from the acquisition page into the appropriate track, guide, practice page, and next useful answer.
- [ ] `CONTENT` Avoid publishing near-duplicate answer pages for small keyword variations.
- [ ] `SEARCH` Request indexing only for important new or materially changed pages.
- [ ] `SEARCH` Review results after enough impressions accumulate; improve, consolidate, or retire pages based on evidence.

Acceptance criteria:

- [ ] Every new acquisition page has recorded source query evidence, a distinct intent, and a useful curriculum destination.
- [ ] New pages are linked from at least one relevant existing page and registered in navigation where appropriate.
- [ ] Growth reports distinguish additional impressions from qualified clicks and deeper reading.

## P2 — Increase useful internal clicks and return visits

- [ ] `ANALYTICS` Measure the current next-lesson click rate by landing-page family.
- [ ] `ANALYTICS` Measure related-lesson, guide, practice, and track-open rates.
- [ ] `CONTENT` Improve continuation copy on pages with traffic but weak onward navigation.
- [ ] `CODE` Keep one dominant next action near the end of each page.
- [ ] `CODE` Avoid presenting a large undifferentiated list of choices at the main continuation point.
- [ ] `CONTENT` Prefer specific next-action labels such as the lesson or task name over generic `Read more` labels.
- [ ] `CODE` Add a simple copy-link/share control if analytics shows meaningful sharing or direct-return behavior.
- [ ] `CODE` Ensure sharing works without third-party tracking scripts.
- [x] `DECISION` Decide whether an email digest is worth the privacy, consent, and operational cost.
- [x] `CONTENT` If no email list is added, make RSS more visible on blog, guide, and high-intent answer pages.
- [ ] `CODE` Keep local progress and Saved functional without an account.
- [ ] `ANALYTICS` Measure whether completion and saving correlate with return visits.

Acceptance criteria:

- [ ] The primary continuation action is obvious on representative pages.
- [ ] Internal click improvements are supported by event data rather than assumed from visual changes.
- [ ] Any new return channel has accurate privacy text and an explicit owner.

## P2 — Build authority and distribution

- [ ] `CONTENT` Identify the strongest original lessons, guides, diagrams, tools, and stats pages that deserve promotion.
- [ ] `CONTENT` Turn tested examples or datasets into linkable assets only when they provide value beyond the article itself.
- [ ] `CONTENT` Create concise distribution briefs for relevant developer communities, professional networks, newsletters, and educational resource lists.
- [ ] `DECISION` Obtain explicit authorization before Devin or another agent posts, messages, or submits anything externally.
- [ ] `CONTENT` Tailor each authorized external post to the community rather than duplicating promotional copy.
- [ ] `CONTENT` Lead with the useful artifact or explanation; do not ask communities to click ads or artificially inflate traffic.
- [ ] `ANALYTICS` Use referrer and engagement data to learn which distribution channels bring readers who continue to another page.
- [ ] `CONTENT` Maintain relationships with relevant authors and maintainers through useful corrections, citations, and contributions where authorized.
- [ ] `SEARCH` Track earned links and referral traffic without buying links or using link-exchange schemes.

Acceptance criteria:

- [ ] Every external action is explicitly authorized and recorded.
- [ ] Distribution success is judged by qualified visits and continued reading, not raw clicks alone.

## P2 — Run monetization experiments safely

- [ ] `DECISION` Do not begin placement experiments until valid ad delivery and baseline reporting are working.
- [ ] `ADSENSE` Define one hypothesis per experiment, such as improving viewability without reducing next-page rate.
- [ ] `ADSENSE` Change one major placement or format variable at a time.
- [ ] `ADSENSE` Record start date, affected templates, device scope, and configuration.
- [ ] `ANALYTICS` Compare page RPM, viewability, ad coverage, pages per visit, next-page rate, return rate, and Core Web Vitals.
- [ ] `ADSENSE` Monitor Policy center and Confirmed Click status throughout the experiment.
- [ ] `ADSENSE` Stop any experiment that increases accidental-click signals, blocks content, or creates a material page-experience regression.
- [ ] `CODE` Keep enough spacing and reserved space when changing sizes or placements.
- [ ] `ADSENSE` Do not use paid-to-click, autosurf, click-exchange, incentivized traffic, or any traffic source prohibited by AdSense.
- [ ] `ADSENSE` Do not click live ads during testing; inspect requests and use AdSense reporting instead.
- [ ] `ADSENSE` Document the winner, loser, and decision with evidence.

Acceptance criteria:

- [ ] Every retained ad change improves a defined revenue metric without a material engagement, performance, or policy regression.
- [ ] Experiment history makes it possible to reverse a poor change quickly.

## Final technical verification

- [x] Run `npm run check:content` and record the result.
- [x] Run `npm run build` and record the result.
- [x] Run `npm run check:links` and record the result.
- [x] Verify `/ads.txt` contains the intended publisher ID.
- [x] Verify `/robots.txt` and `/sitemap-index.xml` return successfully in production.
- [ ] Validate representative structured data with Google’s Rich Results Test or Schema Markup Validator.
- [x] Inspect canonical, title, description, author, published/modified dates, Open Graph image, and JSON-LD on one page from every public template.
- [x] Test the homepage, lesson, guide, answer, blog, stats, privacy, and 404 pages on mobile and desktop.
- [x] Test keyboard navigation, focus visibility, menu operation, search, quiz controls, saving, completion, and theme switching.
- [x] Check browser console and network logs for ad, consent, analytics, CSP, mixed-content, and runtime failures.
- [x] Confirm page-level horizontal overflow is absent at supported widths.
- [ ] Confirm ads remain distinct from navigation and interactive controls.
- [x] Confirm footer and privacy claims match actual network behavior.
- [x] Confirm no account identifier, secret, export containing private data, or credential was committed.
- [x] Add the final measurement baseline and remaining account-side blockers to the progress log.

## Definition of done

- [ ] Ads use a valid, deliberate implementation and render as expected.
- [ ] Privacy and consent behavior is accurate and verified.
- [ ] Search Console, analytics, and AdSense reporting provide a usable baseline.
- [ ] Same-track duplicate intent has been resolved or explicitly differentiated.
- [ ] High-opportunity pages follow an evidence-based editorial review process.
- [ ] Narrow-mobile layouts have no whole-page overflow.
- [ ] Representative page performance has been measured after advertising is active.
- [ ] Organic content work is driven by observed query demand.
- [ ] Monetization experiments have documented hypotheses and policy guardrails.
- [ ] Required repository checks pass.
- [ ] The progress log contains enough evidence for another developer to continue without repeating the audit.

## Progress log

Add new entries at the top.

### 2026-09-14 — Implementation set deployed as `83f245d`

- Pushed `bf38c15..83f245d` to `origin/main`; Vercel served the new build ~60s later.
- Scope: 85 files — the ad, privacy, SEO, mobile and a11y set, the two maths-foundations
  authoring docs moved to `docs/internal/` with their redirects, and 41 tracked `.pyc`
  files removed to match the new `.gitignore` rules. `.github/workflows/check.yml` and
  `.devin/mcp_config.json` were deliberately left untracked.
- Held back: the component-kit content retrofit (~426 lesson files, 11 `.md`→`.mdx`
  conversions, `kit/InlineCheck.astro`, `fix-lesson-heads.mjs`), stashed by pathspec,
  restored afterwards with no conflicts. The working tree reconciles exactly: 537
  baseline entries = 452 still dirty + 85 committed.
- **Caught before the push:** the pathspec stash silently reverted the deletion half of
  the staged `maths-foundations` rename, so the isolated build produced 2,393 pages with
  `/learn/maths-foundations/lesson-index` and `research-benchmarks` still live while
  `_redirects` was adding 301s for those exact URLs — a redirect shadowing a live page.
  The rename was re-completed and the build re-run: 2,391 pages, `check:links` clean over
  5,161 routes, both URLs absent from `dist/`.
- Production confirmed after the deploy: zero authored `<ins class="adsbygoogle">` on a
  lesson page, one loader script, one ad request, footer reading "No account required ·
  ads by Google — privacy", `font-src 'self' data:` live with the KaTeX violation gone
  from the console, `/learn/maths-foundations/lesson-index` returning a permanent redirect
  (308, Vercel's default for `vercel.json` redirects) to the track page, and `/robots.txt`,
  `/sitemap-index.xml`, `/ads.txt`, `/rss.xml` all 200.
- Still failing in production: `/_vercel/insights/script.js` 404s and logs a MIME-type
  error because Web Analytics is not enabled on the Vercel project.
- `npm run check:content` exits 1 on `main` with 407 pre-existing lesson problems. The
  linter itself is new in this commit and the retrofit that fixes them is still unpushed,
  so the content lint is red until that lands. Build and link check both pass.
- Note: this checklist was edited concurrently while the work was in progress — the
  "Ship the implementation pass" section gained a release-branch/preview flow and the
  `/stats` decision was resolved — and those edits were committed along with everything
  else. The direct-to-`main` push was made on the owner's instruction, before that flow
  was recorded.

### 2026-09-14 — Browser verification pass (local dev + production spot-check)

- Status: the repository passes every browser check that can be run without account
  access. **Production does not, because the repository's fixes were never deployed.**
- **Deployment gap (highest priority).** `git status` shows the whole implementation
  pass as uncommitted: `public/site.js`, `src/components/{AdSlot,Footer,Layout,TopBar}.astro`,
  `src/data/site.ts`, `src/pages/blog/[slug].astro`, `src/styles/global.css` are all
  modified-not-committed, and `src/pages/stats.astro` plus this checklist are untracked.
  `main` is level with `origin/main`. Verified against the live site on the same day:
  `https://lmversity.com/learn/tools-function-calling/anatomy-of-a-tool-call` still ships
  `<ins class="adsbygoogle" data-ad-client="…">` with **no `data-ad-slot`**, placed
  immediately before `<nav class="pager">` (Previous/Next), and `https://lmversity.com/`
  still renders the footer "No cookies · no tracking · no account required" while loading
  AdSense. Those are the exact three P0 defects. Shipping the working tree closes them;
  nothing further needs writing.
- **Live CSP defect found and fixed in the repo.** The production console reports
  `Loading the font 'data:font/woff2;base64,…' violates … "font-src 'self'"`. The source is
  the KaTeX `@font-face` set that Vite inlines as data URIs into the shared CSS bundle
  (`dist/_astro/about.*.css`), so math glyphs fall back on every page carrying that bundle.
  `font-src 'self' data:` added to both `vercel.json` and `public/_headers`, and the stale
  "no analytics script … no embedded frames" comment in `_headers` corrected. Every other
  ad-stack domain observed on production — `pagead2.googlesyndication.com`,
  `googleads.g.doubleclick.net`, `ep1`/`ep2.adtrafficquality.google`,
  `www.google.com/recaptcha` — is already permitted by the policy.
- **Horizontal overflow: clean.** 22 pages × 5 widths (320 / 360 / 390 / 768 / 1280), each
  measured as `documentElement.scrollWidth` vs `innerWidth` inside a real 320px-wide viewport
  so the media queries evaluate honestly, with elements inside `overflow-x` containers
  excluded. One genuine offender found and fixed: long unbreakable inline `<code>` tokens
  (`~/Library/Application Support/Claude/claude_desktop_config.json`) pushed the guide
  template 64px wide at 320px and 24px at 360px. `overflow-wrap: anywhere` added to
  `.prose code` in `global.css`; `pre` code blocks keep their own horizontal scroll. Re-run
  after the fix: zero overflow on all 110 combinations.
- **Mobile header and navigation.** At a true 320px the header shows wordmark + search +
  theme + menu with the Saved icon correctly suppressed; opening the menu keeps
  `scrollWidth` at 306 ≤ 320 and gives twelve 266×38 targets including Saved. Search (29×34)
  and theme (31×34) clear the 24×24 WCAG 2.2 minimum.
- **Keyboard and focus.** 185 tabbable elements on a lesson page, all with a visible
  indicator; the seven apparent misses were links inside a closed `<details>`, which Tab
  never reaches. The skip link appears on first Tab with a visible outline.
- **Search dialog focus handling fixed.** Closing the dialog dropped focus to `<body>`
  instead of the control that opened it, and Tab could walk out of an `aria-modal="true"`
  dialog into the page behind it. `public/site.js` now records the opener, restores focus on
  close, and wraps Tab inside the panel. Re-tested: focus returns to the search button.
- **Interactions verified.** ⌘/Ctrl+K opens search and focuses the input; a query returns
  ranked results (and shows the de-duplicated prompt-caching titles rendering as distinct
  pages); Escape closes and restores focus. The quiz advances, disables answered options,
  shows feedback, moves the progress bar, and drops its no-JS static fallback only when JS
  runs. Save and Mark complete flip label and `aria-pressed`, persist to `fg-bookmarks` /
  `fg-progress`, and surface on `/saved`, which is `noindex, follow`. Theme toggle round-trips
  and persists to `fg-theme`.
- **Metadata and structured data.** All 13 public templates inspected: unique title and
  description, correct canonical, OG image, `summary_large_image`, author, and JSON-LD that
  parses with a single top-level `@context` over an `@graph`. Exactly one AdSense loader per
  page. Two gaps found: blog posts without an `updated` field emitted no `dateModified`
  (fixed — `[slug].astro` now falls back to `published`, matching the guide template), and
  `/stats` initially emitted `Article` with `dateModified` but no `datePublished`. Resolved:
  it now emits its ordinary `WebPage` node with the sourced verification date as
  `dateModified`; there is no recorded publication date from which to create an Article date.
- Ads on production were observed, never clicked. The manual unit rendered `unfilled` at
  390px; no `adsbygoogle.push()` errors appeared in the console on either environment.
  Locally the only 404 is `/_vercel/insights/script.js`, which resolves only once Web
  Analytics is enabled on the Vercel project.
- Checks after all four fixes: `check:content` clean (2,060 files) · build 2,391 pages ·
  `check:links` clean (5,161 routes).
- Not closable here: Rich Results Test / Schema Markup Validator (external tools — an offline
  required-property check passed), ad-vs-control separation and CLS on production (the
  deployed build is pre-fix, and Auto ads placement is chosen account-side), and footer/privacy
  agreement with live network behaviour (fails on production until the deploy lands).

### 2026-09-14 — Implementation pass 1: ad plumbing, placements, privacy, cannibalization, trust, mobile, analytics plumbing

- Status: all code-side P0 work complete and owner decisions recorded; remaining account-side items are ad-unit creation/format review, CMP verification, Search Console baseline, and enabling Web Analytics on the Vercel project.
- Ad delivery: **Auto ads is enabled in the AdSense account (owner-confirmed 2026-09-14)** — the loader script + `google-adsense-account` meta ship in `<head>` whenever `site.ads.client` is set, once per page. Manual `AdSlot` units are kept dormant as the controlled-placement option: nothing renders until a slot id is filled in `site.ads.slots`; unknown `kind` is a type error; duplicate blog unit removed; every template emits at most one unit. Responsive slot heights (100px mobile / 250px ≥720px) and unfilled-inventory collapse added.
- Placement: lesson ad moved below Related/prev-next on lesson and FDE templates; guide and blog units moved after their onward links; stats unit stays below the fold. Only the `Advertisement` label is used; no click handlers or decoration near units.
- Privacy: footer is conditional (`No cookies · no tracking` only when `site.ads.client` is empty; otherwise `ads by Google — privacy`). `/privacy` conditioned on the real config and discloses Google + opt-outs; meta description now says "no first-party cookies" (Google's are third-party). New `site.ads.consent` flag (default `false`) gates the EEA-consent sentence so it can't assert a CMP flow that isn't live — flip it after enabling Privacy & Messaging in AdSense. CSP already permits `fundingchoicesmessages.google.com`; Vercel analytics is same-origin so needs no CSP change.
- Cannibalization: all 12 duplicate-title groups inspected — every pair was a deliberately layered companion, so **zero merges/removals/redirects**; all 10 same-track pairs and both cross-track groups differentiated with titles naming each page's actual angle, synced in `curriculum.ts`. Zero duplicate titles remain.
- Trust: `ReportError` component ships a prefilled GitHub-issue link (title + canonical URL, no reader data) on lesson, FDE, guide, blog, and answer templates. Bylines on all five templates now link to `/about`, which names Ahmed Ansari as editor.
- Mobile: 320px header overflow fixed (smallest-screen rule hides the Saved icon — it remains in the mobile menu — and lets flex children shrink). Three.js hero chunk no longer downloads on ≤760px, `saveData`, or reduced-motion; SVG emblem remains the fallback. Not yet browser-tested across the full breakpoint matrix — needs a device pass.
- Analytics: **Vercel Web Analytics selected (owner decision 2026-09-14)** over Plausible/Umami. Same-origin `/_vercel/insights/script.js` + `window.va` queue shim emitted when `provider === 'vercel'`; `track(name, props)` in `site.js` fans out to Plausible/Umami/`va` whichever global exists and never blocks. Events wired: `search_open`, `search_result_open`, `copy_code`, `lesson_complete`, `lesson_save`, plus `data-event` attributes for `curriculum_start`, `track_open`, `guide_open`, `next_lesson`, `related_lesson`. (`data-event`, not `data-track` — the latter is the progress system.) **Account-side:** Web Analytics must be enabled on the Vercel project for the script to resolve; custom events availability depends on plan. Privacy page names the provider via config.
- Verification: `check:content` clean (2,060 files) · build 2,391 pages · `check:links` clean (5,161 routes). Live: `/robots.txt` 200, `/sitemap-index.xml` 200, `/ads.txt` serves `pub-2004809158099634`. No secrets committed; the publisher ID is public by design.
- Return channel: **email digest declined (owner decision 2026-09-14)** — RSS made visible instead: feed links on blog index, blog posts, guides index, answers index, and footer. `/rss.xml` + `<link rel="alternate">` already ship.
- Owner decisions recorded: (1) Auto ads enabled account-side + manual units kept dormant — hybrid by owner choice; (2) Vercel Web Analytics; (3) no email list — RSS visibility.

### 2026-09-14 — Checklist created

- Status: planning complete; implementation not started.
- Evidence: repository audit, production build, content check, internal-link check, responsive browser inspection, and AdSense/SEO implementation review.
- Verified strengths: clean build, complete curriculum registration, no dead internal links, canonical metadata, structured data, sitemap, strong lesson navigation, and an authored visual system.
- Highest-priority findings: empty manual ad-slot IDs, duplicate blog ad call, ad placement beside lesson controls and navigation, footer/privacy inconsistency, no analytics provider, same-track duplicate titles, limited visible sourcing, and narrow-mobile header overflow.

## Authoritative references

- Google Search people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google Search internal-link guidance: https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- Google Search title-link guidance: https://developers.google.com/search/docs/appearance/title-link
- Google Search Console setup: https://developers.google.com/search/docs/monitor-debug/search-console-start
- Google AdSense code implementation: https://support.google.com/adsense/answer/9274019
- Google AdSense responsive ad units: https://support.google.com/adsense/answer/9183363
- Google AdSense placement policies: https://support.google.com/adsense/answer/1346295
- Google AdSense invalid-traffic guidance: https://support.google.com/adsense/answer/2660562
- Google AdSense privacy-policy requirements: https://support.google.com/adsense/answer/1348695
- Google consent-management requirements: https://support.google.com/adsense/answer/13554116
- Cumulative Layout Shift guidance: https://web.dev/articles/optimize-cls
