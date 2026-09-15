---
title: "Choose your maths path by background"
track: "maths-foundations"
status: live
summary: "A diagnostic guide to entering the maths track: which modules to take in order for a software engineer, an analyst, a self-taught learner, or someone refreshing rusty fundamentals."
duration: "5 min read"
---

## The short answer

This track has ~190 lessons and no single correct entry point. The right path depends on what you already know and what you're learning maths *for*. Pick the background closest to yours below, follow its sequence, and skip what you can already pass a quick self-check on.

## Diagnostic self-check

Before choosing a path, test yourself on three questions:

1. Can you multiply two matrices and explain what the result *means* geometrically?
2. Can you compute a derivative of a composite function (chain rule) by hand?
3. Can you state Bayes' rule and use it on a concrete two-outcome example?

Each "no" points at a pillar — linear algebra, calculus, or probability — that your path should front-load rather than discover mid-lesson.

## Path 1: Software engineer, comfortable with code

You think in code and learn fastest when maths is executable.

- Start: vectors and matrices as operations you'll implement — [linear algebra module] then embeddings math.
- Then: gradients and the chain rule, because backprop is just the chain rule with bookkeeping.
- Then: probability up to Bayes and expectation — enough to read eval metrics and sampling parameters honestly.
- Defer: formal proofs, measure-theoretic probability, and optimization theory until a specific lesson demands them.

## Path 2: Analyst or data practitioner

You already handle data and uncertainty; your gap is usually the linear-algebra and optimization machinery.

- Start: probability refresher, then straight into linear algebra — you'll use it immediately for PCA-style reasoning and embeddings.
- Then: optimization and gradient descent — the least-squares intuition you have transfers directly.
- Then: calculus selectively — chain rule and partial derivatives, skipping epsilon-delta formalism.
- Watch for: statistics lessons on estimation and inference — these are your bridge into evaluation statistics.

## Path 3: Self-taught, no formal maths since school

The failure mode here is starting with proofs. Start with *meaning*.

- Start: the intuition lessons — what a vector *is*, what a derivative *measures*, what a probability *commits you to*.
- Then: one worked example per concept before any symbolic exercise.
- Then: alternate concept → calculation → coding practice in tight loops.
- Watch for: notation anxiety — every symbol in this track is introduced in context; if a lesson assumes notation you don't have, back up one lesson rather than pushing through.

## Path 4: Refreshing rusty fundamentals

You learned this once; the knowledge is latent, not absent.

- Start: the cheatsheets and worked examples — they resurface notation fastest.
- Diagnose: take each pillar's first quiz cold; the result tells you whether to review or skip the module.
- Then: read only the lessons your quiz flagged, plus the modules added since your training (embeddings, attention math, modern optimization).

## What every path shares

However you enter, the exit criteria are the same: you can read the maths inside the [Machine Learning](/learn/machine-learning) and [Deep Learning](/learn/deep-learning) tracks without stopping to decode notation. When a downstream lesson cites a concept you don't hold, that citation is your syllabus — follow the link, learn that one thing, return.

**Related:** [Machine Learning track](/learn/machine-learning), [Deep Learning track](/learn/deep-learning), [AI Foundations](/learn/ai-foundations)
