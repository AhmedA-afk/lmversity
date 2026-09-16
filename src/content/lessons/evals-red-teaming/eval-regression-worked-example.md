---
title: "Worked Example: An Eval That Passed and Shipped a Regression"
track: "evals-red-teaming"
status: live
summary: "A prompt change scored 94% and shipped — walk through how the aggregate hid a 30-point regression on one slice, and the per-dimension gate that catches it."
updated: "2026-09-16"
duration: "10 min read"
---

The commonest eval failure isn't a bad eval — it's a good eval read at the wrong level of aggregation. This example constructs one and finds the regression the average hid.

## The setup

A customer-support assistant. The golden set has 200 items across four categories: `billing` (60), `technical` (60), `account` (50), `other` (30). A prompt change is proposed. The eval scores it: baseline 91%, candidate 94%. Ship it.

## What the aggregate hid

The per-category breakdown the 94% averaged over:

| Category | Baseline | Candidate | Delta |
|---|---|---|---|
| billing | 92% | 96% | +4 |
| technical | 95% | 98% | +3 |
| account | 88% | 93% | +5 |
| other | 90% | 60% | **−30** |

The candidate regressed `other` by 30 points — and the 60/60/50/30 weighting meant the 30-point collapse on 15% of the set only cost ~4.5 points of average, which the +4/+3/+5 gains more than covered. The aggregate said "better." One category got catastrophically worse.

## Why this happens

The prompt change added specificity for the three big categories — which made it worse on the tail category that didn't match the new pattern. The eval caught the regression; the *aggregate score* didn't. The bug isn't the eval — it's reading a weighted average as "the score."

## The fix: a per-dimension gate

The gate isn't "candidate > baseline on the average" — it's "candidate ≥ baseline − threshold on every category." The candidate's −30 on `other` fails that gate even though the aggregate passed. The regression is visible before it ships, not after.

## What the example teaches

- **The average is a summary, not a verdict.** A +3 average composed of +4/+3/+5/−30 is a different thing than +3 uniform — and only the breakdown shows it.
- **The slice is where the risk lives.** The tail category is where a prompt change's assumptions break — and where a regression can be largest while the aggregate looks fine.
- **The gate is the contract.** "No dimension regresses" is a different, stronger claim than "the average improved" — and it's the one that keeps a silent regression from shipping.

## The check

Never ship on an aggregate score. Report per-dimension deltas and gate on the worst slice, not the average — a regression the mean covers is still a regression.

**Related:** [Eval mistakes](/learn/evals-red-teaming/eval-mistakes), [Eval harness project](/learn/evals-red-teaming/eval-harness-project), [Evals practice](/practice/evals)
