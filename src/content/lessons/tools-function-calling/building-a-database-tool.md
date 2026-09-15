---
title: "Lab: build a read-only database tool"
track: "tools-function-calling"
status: live
summary: "Build a parameterized, read-only database tool with allowlisted tables, result-size caps, and per-call logging — the template for every data-access tool you'll write."
duration: "20 min read"
---

## The short answer

A database tool is not "let the model write SQL". It's a small set of named, parameterized queries — `get_order(id)`, `search_customers(name)` — where the model picks the operation and fills the blanks, and your code owns the SQL, the permissions, and the result size. This lab builds that pattern end to end.

## Why this matters

The naive version — a `run_sql(query)` tool — puts a text model in charge of your database. It will write plausible SQL that scans a million rows, reads a table you didn't intend, or, on a bad day, generates something destructive. The parameterized pattern keeps the model's job small (choose the operation, supply the arguments) and keeps everything else in code you control.

## The build

**1. Define operations, not queries.** Each operation is a named function with a typed signature:

```python
TOOLS = {
  "get_order": {
    "description": "Look up one order by its ID. Returns status, total, and line items.",
    "params": {"order_id": "string"},
  },
  "search_customers": {
    "description": "Find customers by name fragment. Returns up to 10 matches.",
    "params": {"name": "string"},
  },
}
```

**2. Own the SQL.** Each operation maps to a parameterized statement you wrote — never model text spliced into SQL:

```python
def get_order(order_id):
    return db.execute(
        "SELECT id, status, total FROM orders WHERE id = %s LIMIT 1",
        [order_id],
    )
```

**3. Read-only by construction.** The connection uses a database role that *cannot* write — not "the tool doesn't generate writes" but "the credential refuses them". Defense in depth: the allowlist limits which tables the tool knows about; the role limits what the account can do at all.

**4. Cap the result.** Truncate rows at a fixed limit, truncate long text fields, and return a row count so the model knows whether it saw everything — a 10-row cap silently returning 10 of 900 matches produces confidently wrong answers.

**5. Log the call.** Operation name, arguments, row count, duration. The trace that answers "why did the agent claim that customer doesn't exist?" lives here.

## The schema the model sees

The tool definition describes operations, not SQL — the description is the model's entire guide to when to call it:

```json
{
  "name": "get_order",
  "description": "Look up one order by ID. Use when the user asks about a specific order. Returns status, total, line items.",
  "parameters": {
    "type": "object",
    "properties": {"order_id": {"type": "string", "description": "The order ID, e.g. 'ORD-1234'"}},
    "required": ["order_id"]
  }
}
```

## Extend it

The same pattern becomes the other data tools: a **file tool** is operations over a sandboxed directory (`read_file(path)`, `list_files(dir)`) with path validation and size caps; a **search tool** is `search(query, filters)` over an index you control. One shape — named ops, owned implementation, capped results, logged calls — covers database, file, and search alike.

## The checkpoint

Your tool is done when a prompt injection in a customer name can't reach a second table, a huge result can't blow the context window, and every call lands in a log you can read.

## Go deeper

- [Executing tool calls safely](/learn/tools-function-calling/executing-tool-calls-safely) — the wider safety model this sits inside.
- [Tool results as an injection vector](/learn/tools-function-calling/tool-results-as-injection-vector) — what comes back can attack too.
- [Designing a tool schema](/learn/tools-function-calling/designing-a-tool-schema) — the description-writing craft.
