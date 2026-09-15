---
title: "Common Mistakes: Deep Learning Training"
track: "deep-learning"
status: live
summary: "The eight training errors that produce a model that learns nothing or overfits silently — dead activations, LR that was never tuned, and the val set that watched training."
duration: "8 min read"
---

Deep learning errors are quiet: the loss goes down, the model ships, and the bug only shows at inference or on the slice that matters. Each entry names the error and the check that catches it.

## 1. A learning rate that was never searched

**Wrong:** `lr=0.001` — the default — used because it was already there, on a problem where it's an order of magnitude wrong in either direction; the model trains badly or barely, and nobody asked why.
**Right:** The learning rate is the highest-leverage hyperparameter. Sweep it on a log scale before anything else; a bad LR makes every other tuning result uninterpretable.

## 2. Dead ReLUs nobody counted

**Wrong:** Half the activations are zero on every input — a large fraction of the network died during training and contributes nothing, but the loss went down anyway so it was never noticed.
**Right:** Count activation means on a batch. A ReLU that never fires is a neuron that doesn't exist; if a large fraction is dead, the effective capacity is a fraction of the nominal one — lower the LR or change the init.

## 3. The validation set that watched training

**Wrong:** The "val" loss improved every epoch — because the val split was normalized with statistics computed on train+val, or because early stopping watched a val that had leaked in through a shared pipeline.
**Right:** The val set must be truly held out — no shared statistics, no feature selection fitted on it, no stopping decisions from a set that saw the data. Leakage into val is the quietest metric inflation there is.

## 4. Overfitting treated as a validation failure, not a data failure

**Wrong:** The val gap grows, so the fix is more dropout or more weight decay — when the real problem was a train/val distribution mismatch, and regularization was solving the wrong problem.
**Right:** Check the distributions first — if val is drawn from a different population, no amount of regularization closes a gap that isn't overfitting. The fix is data or a different split, not a stronger prior.

## 5. Batch size changed, learning rate stayed

**Wrong:** The batch size doubled for speed and the LR stayed fixed — the effective per-sample update halved, and the "same config" converged to a different point.
**Right:** LR and batch size are coupled. Change one and scale the other — a doubled batch with a fixed LR isn't a faster version of the same run, it's a different run.

## 6. Weight decay applied to the parameters that shouldn't get it

**Wrong:** Weight decay hits batch-norm gains and biases — the parameters that shouldn't be shrunk get pulled toward zero, and the model's scale calibration is quietly wrecked.
**Right:** Exclude norms and biases from weight decay — they're scale parameters, not directions. The bug is invisible until you compare against a run that excluded them.

## 7. Loss reported per-batch, interpreted per-epoch

**Wrong:** The training curve is a smoothed average of batch losses — a plateau that looks like convergence is actually a smoothing artifact hiding divergence.
**Right:** Log the raw batch loss and look at the distribution, not just the mean. A smoothed curve can look flat while the variance explodes — the tail is where the instability lives.

## 8. A metric that improved while the model got worse

**Wrong:** Accuracy went up on the test set — because the test distribution drifted toward easy cases, or because the class balance shifted, and the "improvement" is a different test set wearing the same name.
**Right:** A metric is only comparable on a frozen distribution. If the test set or its composition changed, a higher score doesn't mean a better model — it means a different measurement.

## If you take one habit

Log the distributions, not just the scalars. Most deep-learning bugs hide in the tail — dead activations, exploding batch variance, a val split that drifted — and the mean is where they hide best.

**Related:** [Deep learning practice](/practice/deep-learning), [ML diagnosis practice](/practice/ml-diagnosis), [Loss functions worked example](/learn/ai-foundations/loss-functions-worked-examples)
