---
title: "What is a Forward Deployed Engineer (FDE)?"
description: "A Forward Deployed Engineer embeds with a customer to ship a vendor's AI or software platform into production, then feeds what they learn back into the product."
intent: definition
updated: "2026-09-08"
featured: true
faq:
  - q: "Is a Forward Deployed Engineer the same as a solutions engineer?"
    a: "No. Both work directly with customers, but an FDE is expected to write production code and feed field learnings back into the core product on a mandated cycle. A solutions engineer's job usually ends at a working demo or a services contract."
  - q: "Where did the Forward Deployed Engineer title come from?"
    a: "Palantir in the 2010s. Its internal roles were Delta (Forward Deployed Software Engineer, coding, customer-facing) and Echo (Deployment Strategist, non-engineer, relationship and adoption), distinct from Devs who built the core product for many customers at once."
  - q: "Do I need a computer science degree to become an FDE?"
    a: "Not necessarily. Across a set of real postings researched for this site, a degree was a hard requirement in only a minority of listings; customer-facing experience, Python, and evidence of shipping under ambiguity mattered more."
  - q: "Can an FDE role turn into a consulting job?"
    a: "Yes, and this is the most cited criticism of the title. Without the feedback loop into product, an FDE function collapses into a low-margin professional-services arm wearing a software-engineering label."
  - q: "Is Forward Deployed Engineer a good first AI job in India?"
    a: "It's a hard first job from zero. The labs and top vendors typically want several years of experience, but startup and platform-vendor FDE and FDE-adjacent roles (solutions-engineer-that-builds-PoCs) are a more realistic entry point."
related:
  - /roles/forward-deployed-engineer
  - /roles/forward-deployed-engineer/orientation
  - /roles/forward-deployed-engineer/career
  - /roles/forward-deployed-engineer/field
  - /roles/forward-deployed-engineer/product
  - /guides/ship-your-first-ai-feature-to-production
---

A Forward Deployed Engineer (FDE) is a software engineer who embeds inside a customer's
organization, often on-site part of the week, to take a vendor's platform from "purchased"
to "running the customer's actual workflow in production." They scope the problem, write
real code in the customer's environment, and are expected to send what they learn back to
the vendor's core product team.

## The short version

- An FDE does hands-on engineering work at a specific customer, not generic pre-sales support.
- The role's defining trait is a mandated feedback loop: field learnings must reach the product or research team, not stay with the customer.
- The title started at Palantir in the 2010s and has since spread to OpenAI, Anthropic, Databricks, Scale AI, and dozens of AI-native startups.
- Two archetypes exist in practice: applied-AI FDEs (agents, evals, RAG, MCP) and platform/infrastructure FDEs (data plumbing, Kubernetes, on-prem deployment).
- Without the feedback loop, the job is functionally a consulting or professional-services role, and that gap is the role's most common and most legitimate criticism.

## Where the title came from

Palantir created the modern shape of the role in the 2010s with two customer-facing paths
sitting inside its Business Development organization. **Delta**, the Forward Deployed Software
Engineer, wrote code and was held to the same interview bar as core engineers. **Echo**, the
Deployment Strategist, was a non-engineer domain expert who owned the customer relationship,
adoption, and internal politics. Palantir's core, product-building engineers were internally
called **Devs** — the shorthand distinction was that a Dev builds "one capability, many
customers" while a Delta builds "one customer, many capabilities." For years, Palantir
reportedly employed more FDEs than core software engineers. Palantir's own Foundry platform
was, in large part, an attempt to productize the repetitive "cruft work" its FDEs had been
doing by hand at customer sites.

The title spread outward from there. Scale AI and C3.ai picked it up in the late 2010s.
More recently, OpenAI built an FDE function that grew from a handful of people to dozens
within a couple of years, alongside a separate, larger deployment organization. Anthropic,
Databricks, Cohere, Glean, Harvey, Sierra, Decagon, Cognition, Retool, Snowflake, and Vercel
all now hire under the FDE name or something functionally identical to it. A widely read
2025 essay from venture firm a16z, "Trading Margin for Moat," is often credited with turning
FDE into what recruiters started calling "the hottest job" in AI.

## How it differs from a solutions engineer

Every FDE-adjacent title — solutions engineer, implementation consultant, sales engineer,
technical account manager — does customer-facing technical work. What separates an FDE from
all of them is one structural requirement: **a mandated loop back into the product.** An FDE
is expected to generalize what they build for one customer into something the next customer
needs less custom work for, and to write that learning down for the people who own the roadmap.
A solutions engineer's job is usually complete once the customer's specific instance works;
there's no obligation to change the underlying product. Remove that feedback loop from an FDE
role and, by every account examined for this page, you're left with a professional-services
job that happens to write code — which is exactly the criticism leveled at teams that adopt
the FDE label without the discipline behind it.

## What an FDE actually builds

The day-to-day work spans a wide range, but a consistent set of activities shows up across
Palantir, OpenAI, and startup postings alike:

- Discovery and scoping: pushing back on a customer's stated problem to find the one actually worth solving.
- Rapid prototyping, often with a working demo expected within the first few days on-site.
- Data plumbing — ingestion, cleaning, joining across legacy systems, sometimes including migrations off decades-old databases.
- Systems integration: SSO, document stores, internal APIs, ticketing systems.
- Deploying into constrained environments: a customer's VPC, on-prem hardware, or an air-gapped network.
- Building evals and guardrails before declaring an AI feature "working," not after.
- Shipping the actual AI artifacts — agents, MCP servers, prompt chains, RAG pipelines, fine-tunes.
- Running adoption work: pilots, training sessions, and executive-level updates on progress.
- Writing the internal memo that turns a one-off build into a reusable product component.

Time allocation varies by company and week. Some engineers spend entire days in customer
meetings before writing a line of code; others split roughly a third of their time in
customer conversations, a quarter coding, and the rest on travel and internal work, according
to one self-reported vendor survey (caveated as directional, not a scientific sample). The
common thread is that FDEs oscillate between weeks that look like consulting and weeks that
look like normal software engineering.

## The criticisms, stated plainly

The FDE title attracts real skepticism, and the skepticism is largely deserved when the role
is implemented badly. The most common complaints, echoed across engineering forums and former
employees: it is a "rebranded solutions architect" role wearing better pay and a better title;
travel cadence causes burnout; FDEs often code less than a traditional product engineer; and
a company with more FDEs than product engineers is, functionally, a consultancy regardless of
what it calls itself. The most cited internal warning — from engineers who helped build FDE
functions at other companies — is that copying the model without the feedback discipline is
"a trap that's dangerously easy to turn into a low-margin consulting firm." The counter-argument
from people inside legitimate FDE orgs is consistent: the role only earns its distinct name
when the field genuinely changes what the product team builds next.

## Pay, and what's known about India

Public data on FDE compensation is thin and almost entirely US-centric. Posted base salary
ranges for US roles researched for this site cluster from roughly $135,000 at the low end
(entry-level Palantir and Vercel postings) to $280,000–$320,000 at companies like Anthropic.
Levels.fyi has reported a cross-company median total compensation around $206,000, with
Palantir's own FDE median reported higher. India-based or India-remote postings — from
Databricks, Sarvam, Razorpay, and a handful of smaller companies — exist but, without
exception in the postings gathered for this research, do not state compensation. One vendor's
public claim that international bands run 50–70% of US bands could not be independently
verified and should be treated as a single, self-interested data point rather than a rule.

## Where LMVersity fits

LMVersity's Forward Deployed Engineer path is a full track built around exactly this role: it
covers the engineering craft, enterprise data and integration work, eval-first AI application
building, deploying into someone else's infrastructure, the discovery-to-adoption skills that
don't show up in a normal CS curriculum, and a dedicated section on getting hired in India and
globally. It's free, self-paced, and carries no certificate — the value is the sequence of
lessons and practice, not a credential.

## Go deeper

- [Forward Deployed Engineer path](/roles/forward-deployed-engineer) — the full track, start to finish.
- [FDE · The role, honestly](/roles/forward-deployed-engineer/orientation) — what the job is and isn't, before you commit time to it.
- [FDE · The customer: discovery to adoption](/roles/forward-deployed-engineer/field) — the scoping and adoption skills a CS degree never teaches.
- [FDE · From one customer to product](/roles/forward-deployed-engineer/product) — the generalization discipline that separates the role from consulting.
- [FDE · Getting hired, in India and globally](/roles/forward-deployed-engineer/career) — realistic entry points and interview formats by company.
- [Ship your first AI feature to production](/guides/ship-your-first-ai-feature-to-production) — the kind of build an FDE is expected to do inside someone else's stack.
