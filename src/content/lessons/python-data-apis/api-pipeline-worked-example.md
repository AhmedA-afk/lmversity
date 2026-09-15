---
title: "Worked Example: A Paginated API Pipeline That Silently Dropped Data"
track: "python-data-apis"
status: live
summary: "A data job that fetched 3 pages and silently missed 7 — the pagination bug, the missing timeout, and the assertions that would have caught both."
duration: "10 min read"
---

A data pipeline that "worked" — it fetched data, wrote it, exited cleanly — while silently dropping 70% of the source. This example finds the bug and the assertions that would have caught it.

## The setup

A job that pulls orders from an API and writes them to a table. It runs daily, has run for months, and produces data. The report that uses it has been quietly wrong — the counts are ~30% of the real volume.

## The bug: pagination that looked like it worked

```python
def fetch_orders():
    orders = []
    page = 1
    while True:
        resp = requests.get(f"{API}/orders", params={"page": page})
        data = resp.json()
        orders.extend(data["orders"])
        if not data["orders"]:  # stop when a page is empty
            break
        page += 1
    return orders
```

The API's `page` param is ignored — it expects a `cursor` param. Every request returns page 1's data; the loop never sees an empty `orders` list (page 1 always has data), so it would loop forever — except the same response each time means `orders` grows by the same items and the `page` counter eventually… actually the loop never terminates cleanly on its own; the version that "worked" had an implicit `page < 4` guard someone added, so it fetched 3 copies of page 1 and deduplicated downstream to 1 page's worth of data. 30% of the real volume.

The fix: read the API's actual pagination contract — `data["next_cursor"]` — and loop on it, not on an ignored `page` param.

## The second bug: no timeout

`requests.get` with no `timeout=` — a hung connection hangs the job forever. It hadn't happened yet, but it was a matter of time. `timeout=10` and a retry with backoff.

## The third bug: no assertion on the volume

The job wrote whatever it fetched. No check that the count was plausible — a `assert len(orders) > MIN_EXPECTED` or a comparison to yesterday's volume would have caught the silent drop on day one, not months later.

## What the example teaches

- **"It ran" is not "it worked."** The job produced output every day; the output was wrong every day. Liveness isn't correctness.
- **Read the pagination contract, don't assume it.** `page` vs `cursor` vs `offset` — the API defines it, and guessing wrong fails silently.
- **Assert the volume, not just the success.** A job that writes 30% of the data and exits 0 is a bug that only a sanity check catches.
- **Timeout and retry are not optional.** A call without a timeout is a hang waiting for a network blip.

## The check

For any data job: what's the pagination contract, is there a timeout, is there a retry cap, and is there an assertion that the output is plausible? A job missing any of those is a job that will silently be wrong.

**Related:** [API calling common mistakes](/learn/python-data-apis/api-calling-common-mistakes), [Data cleaning common mistakes](/learn/python-data-apis/data-cleaning-common-mistakes), [Python practice](/practice/python-data-apis)
