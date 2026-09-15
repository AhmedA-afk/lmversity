---
title: "Unstructured, Docling, LlamaParse: the document-parsing layer"
track: "rag"
status: live
summary: "Document-parsing tools turn PDFs and Office files into structured chunks — Unstructured for breadth, Docling for open-source layout understanding, LlamaParse for managed parsing — the stage that decides retrieval quality before embedding starts."
duration: "8 min read"
sources: ["unstructured-docs", "docling-docs", "llamaparse-docs"]
---

## The short answer

The parsing stage decides what your retriever can find, and PDFs are the
enemy: multi-column layouts, tables, figures, headers/footers, scanned
pages. Three tools cover the common choices — **Unstructured** (broad
format coverage, partitioning into typed elements), **Docling** (IBM's
open-source parser with real layout/table understanding), **LlamaParse**
(LlamaIndex's managed parsing service). Cloud document-AI services
(Azure Document Intelligence, Google Document AI, AWS Textract) are the
fourth option — heavier, paid, and strong on forms/scans. This stage
feeds [chunking strategies](/learn/rag/chunking-strategies-for-documents);
garbage in here means no chunking saves you.

## The landscape

- **Unstructured** — the breadth tool: `partition()` turns PDFs, DOCX,
  HTML, email, images into typed elements (`Title`, `NarrativeText`,
  `Table`, `ListItem`). Open-source library plus a paid API; element
  typing is what makes downstream chunking layout-aware rather than
  blind splitting.
- **Docling** — the open-source layout specialist: PDF/DOCX/PPTX/HTML →
  a structured document model with layout analysis and table-structure
  recognition, exporting Markdown/JSON. Runs locally (the
  [local-inference](/learn/local-inference/what-local-inference-actually-means)
  sibling — documents never leave your machine), MIT-licensed.
- **LlamaParse** — the managed service: send a document, get back
  structured Markdown/text with layout preserved; integrates with
  [LlamaIndex](/learn/agent-frameworks/llamaindex-data-framework)
  pipelines. The trade is documents leave your environment — which
  rules it out for sensitive corpora.
- **Cloud document-AI** — Textract/Document Intelligence/Document AI:
  form extraction, OCR at scale, table models. Pick when the workload
  is *forms and scans at volume*, not narrative PDFs.

## The decision that actually matters

The tool choice is secondary to the failure mode it prevents. The three
parse failures that destroy retrieval downstream:

1. **Reading order** — multi-column PDFs interleave columns into nonsense
   text. Layout-aware parsers (Docling, Unstructured's `strategy="hi_res"`)
   fix it; naive text extraction doesn't.
2. **Tables as word soup** — a flattened table retrieves nothing.
   Table-structure-aware parsing preserves rows/cells; check what your
   parser emits for your worst table.
3. **Scanned pages** — image PDFs need OCR, which is a different pipeline
   than text extraction. Know which of your docs are scans before
   choosing.

## Operations that matter

- **Privacy**: Docling and Unstructured (library) run locally; LlamaParse
  and cloud services send documents out. For sensitive corpora the
  parse location is a
  [privacy boundary](/learn/local-inference/the-local-privacy-boundary)
  decision, not a convenience.
- **Freshness**: parsing is upstream of
  [incremental indexing](/learn/rag/incremental-indexing-freshness) —
  a changed doc must re-parse *and* re-chunk, so keep parse output
  versioned alongside source files.
- **Provenance**: keep page numbers and element types through chunking —
  citations need them ([grounding answers](/learn/rag/grounding-answers-with-citations)).
- **Evaluation**: parse quality is measurable — diff extracted tables
  against the PDF on a sample before trusting the pipeline.

## The exercise

Run your three worst documents — a two-column PDF, a heavy-table report,
a scan — through two parsers and diff the element streams. The tool that
survives your worst doc is the right one.

## Go deeper

- [Parsing documents for RAG](/learn/rag/parsing-documents-for-rag) — the pipeline stage in detail.
- [Chunking strategies for documents](/learn/rag/chunking-strategies-for-documents) — what parsed elements feed.
- [Ingestion, chunking, and retrieval](/learn/rag/ingestion-chunking-and-retrieval) — the full upstream path.
