---
title: "Image generation in products: when it serves the product vs decorates it"
track: "multimodal-ai"
status: live
summary: "Text-to-image in real products: the generation/editing API surface, prompt-to-output quality control, when generated imagery is the feature vs the decoration, and the governance boundaries."
duration: "9 min read"
sources: ["openai-image-gen-docs", "google-vision-docs"]
---

## The short answer

Image generation is a real product capability — and the modality where
"can generate" most often gets mistaken for "should generate". The
discipline: generation serves the product when the image *is* the
deliverable (user-requested art, personalized visuals, mockups, editing)
and decorates it when it's filler a photo library or illustration would
do better. The governance boundary — never generate anything asserting
fact, text, or likeness — is what separates product imagery from
liability.

## The API surface

Generation APIs offer: **text→image** (the baseline), **editing**
(masked inpainting, variation, style transfer — often more product-useful
than generation-from-scratch), **control parameters** (size, quality,
style hints, seed for reproducibility), and **multi-turn/image-context**
(newer models that edit a provided image by instruction — the
"productify" capability). Quality tiers map to cost: draft-quality for
iteration, high-quality for the deliverable — the economics mirror the
text tiering you already know.

## Quality control — the part demos skip

Generated images are nondeterministic: the same prompt yields different
outputs, and quality is a distribution not a guarantee. Production
control means: **prompt templates** (structured prompts with style/subject/
constraints as variables — not freeform user text straight to the model),
**output filtering** (NSFW/policy checks on output, not just input),
**rejection sampling** (generate N, keep the best by a scored criterion —
the quality lever), and **regeneration UX** (the "try again" affordance is
part of the feature, because output variance is the product reality).

## When generation is the feature vs decoration

**It's the product when**: the user asked for an image (design tools,
avatars, creative features), personalization is the value (custom
illustrations, product mockups), or editing saves real work (background
replacement, object removal, style adaptation). **It's decoration when**:
a stock photo or illustration serves the same purpose at a fraction of
the cost and risk — which is most "add AI imagery" pitches. The honest
test: if the image doesn't carry information or user intent, generation
is paying premium price for commodity pixels.

## The governance boundaries

Non-negotiables: never generate anything asserting a fact (no fake
charts, diagrams, or data a reader could mistake for real), no embedded
text (it renders wrong and invents content), no real-person likeness
(the consent/deepfake line), and brand/style constraints enforced in the
prompt template — not hoped for. These aren't stylistic preferences;
they're the line between product imagery and content liability. This
site's own image rules exist for exactly this reason.
