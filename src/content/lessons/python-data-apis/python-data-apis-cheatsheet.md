---
title: "Python and Data APIs Cheatsheet"
track: "python-data-apis"
status: live
summary: "The data-plumbing reference — which library for which job, the async/retry/pagination patterns, and the dataframe traps."
duration: "6 min read"
---

The Python-and-data track compressed to the library picks, the API patterns, and the dataframe traps that catch everyone.

## Which library for which job

| The job | The tool | Why |
|---|---|---|
| HTTP calls | `httpx` or `requests` | Sync or async, timeouts as a first-class param |
| Async HTTP | `httpx` / `aiohttp` | Concurrency without threads |
| Validation / schemas | `pydantic` | Typed models that raise on bad data |
| Dataframes | `pandas` / `polars` | pandas is ubiquitous; polars is faster and saner on dtypes |
| Retry logic | `tenacity` | Backoff, jitter, stop conditions declaratively |
| Env config | `pydantic-settings` / `python-dotenv` | Secrets from env, never hardcoded |

## The API-call patterns that matter

- **Timeout always** — `requests.get(url, timeout=10)`; a call without a timeout can hang forever.
- **Retry with backoff + jitter** — a retry storm is self-inflicted; exponential backoff and a cap.
- **Pagination is a loop** — `next` / cursor / page params until exhausted; don't assume the first page is the data.
- **Status codes are data** — 429 is a rate limit, not an error to retry blindly; read `Retry-After`.
- **Idempotency keys** — a retried POST can double-create; send the key, let the server dedup.

## The dataframe traps in one line each

- **SettingWithCopy** — a slice assigned in place mutates a view, not the frame; use `.loc`.
- **`NaN` ≠ missing** — `NaN != NaN`; check with `.isna()`, not `==`.
- **`apply` is a for-loop** — vectorize or it's the slow path.
- **dtype drift** — a column that was `int` becomes `object` after a join or a missing value; check `.dtypes` after every transform.
- **`inplace=True` chains** — it returns `None` in modern pandas; assign the result instead.

## The five checks before you ship a data job

1. Does every HTTP call have a timeout?
2. Does every retry have a cap and backoff?
3. Are secrets in env, not the source?
4. Does the code handle an empty page / missing field / rate limit?
5. Is the dataframe's schema asserted, or assumed?

## Which lesson for which question

- "Why did my API call hang?" → timeout, above
- "Why did the retried POST double-charge?" → idempotency keys, above
- "Why did the column type change?" → dtype drift, above
- "Why is `apply` slow?" → vectorization, above

**Related:** [API calling common mistakes](/learn/python-data-apis/api-calling-common-mistakes), [Data cleaning common mistakes](/learn/python-data-apis/data-cleaning-common-mistakes), [Python practice](/practice/python-data-apis)
