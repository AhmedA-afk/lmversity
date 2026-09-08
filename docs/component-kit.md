# Component kit for lesson bodies

Lesson prose is the primary way in. These components give a mechanism a second
way in: a labelled aside, a numbered procedure, a side-by-side, a vendor tab
set, a checkpoint question, or a small interactive model of the thing itself.
They never carry a fact the prose does not also carry, and nothing in them is
generated.

Files: `src/components/kit/*` (structure) and `src/components/widgets/*`
(interactive). Diagrams stay in `src/components/diagrams/*` under
`docs/visual-system.md` §3. Check page: `/kit` (noindex).

A lesson that uses any of these must be `.mdx`, with imports at the top of the
file, after the frontmatter. In MDX, a bare `{`, `}` or `<` in prose is a
syntax error; write `\{`, `\}`, `\<` or put the text in backticks.

## Structure

```mdx
import Callout from '../../../components/kit/Callout.astro';
import Steps from '../../../components/kit/Steps.astro';
import Step from '../../../components/kit/Step.astro';
import Compare from '../../../components/kit/Compare.astro';
import Pane from '../../../components/kit/Pane.astro';
import Tabs from '../../../components/kit/Tabs.astro';
import Tab from '../../../components/kit/Tab.astro';
import InlineCheck from '../../../components/kit/InlineCheck.astro';
```

**Callout** `kind="breaks" | "production" | "vendors" | "note" | "try"`, optional `title`.
Brass (`breaks`) marks what goes wrong; indigo marks what to do. One to three
short paragraphs inside. Use `breaks` for the failure that the section is
really about; `production` for the operational rule; `vendors` where
Anthropic, OpenAI, Google or open models differ.

```mdx
<Callout kind="breaks" title="Overlap hides the boundary, it does not remove it">
A chunk boundary inside a table still splits the header from its rows.
</Callout>
```

**Steps / Step** for any procedure the reader performs in order. Three to
seven steps. Each `Step` has a `title` and a body; code fences are fine inside.

```mdx
<Steps>
  <Step title="Label twenty examples first">Before any prompt work, write the answers you would accept.</Step>
  <Step title="Run the baseline">One plain prompt, no retrieval. Record the score.</Step>
</Steps>
```

**Compare / Pane** for two things set against each other: naive vs robust,
before vs after, prompt A vs prompt B, post-filter vs pre-filter. `Pane`
takes `title` and `tone="good" | "bad" | "neutral"`. Keep panes short and
parallel; code inside is fine.

```mdx
<Compare title="Post-filter vs pre-filter">
  <Pane title="Post-filter" tone="bad">Retrieve top-k, then drop what the user cannot see.</Pane>
  <Pane title="Pre-filter" tone="good">Pass the user's permissions into the search itself.</Pane>
</Compare>
```

**Tabs / Tab** for the same thing shown per vendor, per language, or per
approach. `Tabs group="vendor"` remembers the reader's choice across the whole
site. Without JavaScript every panel shows, stacked, so nothing is hidden.

```mdx
<Tabs group="vendor">
  <Tab label="Anthropic">…</Tab>
  <Tab label="OpenAI">…</Tab>
  <Tab label="Open models">…</Tab>
</Tabs>
```

**InlineCheck** one question, answered in place, explanation shown after any
answer. Place it after the section that teaches the thing it asks about. The
question must be answerable from that section alone; the wrong options must be
plausible misreadings, not jokes. One to three per lesson.

```mdx
<InlineCheck
  question="Where must permission filtering happen in a RAG system?"
  options={['In the system prompt', 'In retrieval, before anything reaches the prompt', 'In a post-processing step on the answer']}
  answer={1}
  explanation="By the time a chunk is in the prompt the model has read it. Only retrieval can guarantee a restricted chunk is never a candidate."
/>
```

## Widgets

```mdx
import Tokenizer from '../../../components/widgets/Tokenizer.astro';
import Sampler from '../../../components/widgets/Sampler.astro';
import Chunker from '../../../components/widgets/Chunker.astro';
import Similarity from '../../../components/widgets/Similarity.astro';
import AgentLoop from '../../../components/widgets/AgentLoop.astro';
```

| Widget | What it is | Where it belongs |
|---|---|---|
| `<Tokenizer text="…" />` | A real tokenizer (cl100k_base, o200k_base) in the browser, lazy-loaded | Tokenization, context windows, cost, "why models are bad at spelling" |
| `<Sampler />` | Temperature, top-k, top-p over one illustrative distribution, labelled as illustrative | Decoding, sampling parameters, logits to tokens |
| `<Chunker text="…" />` | Size, overlap and boundary strategy on a paragraph, with overlap shown | Chunking lessons |
| `<Similarity />` | Draggable vectors with dot, cosine, distance; bag-of-words cosine on two sentences | Embeddings, similarity search, "what cosine measures" |
| `<AgentLoop />` | A scripted trace stepped one event at a time, with a failing-tool branch | The agent loop, tool use, error handling, stopping conditions |

Each widget states on the page what it is and is not. Do not add a widget to a
lesson because it is nearby in topic; add it where the lesson's own paragraph
would be clearer with the thing in front of the reader. One widget per lesson.
The `text` prop, where it exists, should be the lesson's own example.

## Diagrams

Unchanged: `docs/visual-system.md` §3 is binding, `scripts/check-diagrams.mjs`
enforces it. A new diagram is a component in `src/components/diagrams/`, built
from `Figure.astro` and the `dg-*` primitives, seven shapes at most, brass for
the thing that breaks, one sentence caption. Reuse an existing diagram where it
fits before drawing a new one.

## Rules for retrofitting a lesson

1. Facts do not change. No new numbers, claims, vendors, or citations. Restructure what is there.
2. The prose still reads whole with every component removed.
3. One widget at most; one to three checks; diagrams only where the prose describes a pipeline, loop, layout or failure path.
4. The file becomes `.mdx`; escape `{ } <` in prose; keep code fences and math untouched.
5. Run `node scripts/check-mdx.mjs <files>` and, if a diagram was added, `node scripts/check-diagrams.mjs`.
