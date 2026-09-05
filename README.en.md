# Tiny Project Health — TinyManager Project Health

[🇮🇷 فارسی](README.md) · [🇬🇧 English](README.en.md)

> A fast answer to a manager’s question: **“Is this project actually healthy, or does it need attention?”** without forcing manual KPI entry.

## Status

**Foundation — 0.1.0**

The executable module has not been released yet. This repository currently defines the product and module contract.

## Design principle

Project Health should derive as much as possible from existing TinyManager data:

- overdue deadlines
- open/high risks
- overdue delegations
- long-running Waiting For items
- pending decisions
- freshness of the latest update

The manager should only be asked when a required signal cannot be inferred.

Future flow:

```text
Manager: “How is the Aria project doing?”
↓
Tiny AI resolves the project
↓
Collect signals from modules
↓
Health score + main reasons
↓
Recommend the next action
```

## Target output

```text
Project Health: 72 / 100
🟡 Needs attention

Main reasons:
- 2 overdue deadlines
- 1 high-score risk
- 3 days since the latest update
```

## Planned capabilities

- explainable Health Score
- Green / Attention / Critical state
- Shared Projects
- Dashboard widget
- short-term trend
- visible reasons behind every score
- Tiny AI queries and actions

## Planned Tiny AI actions

- `tiny-project-health.calculate`
- `tiny-project-health.explain`
- `tiny-project-health.recommend-next-action`

## Architecture

TypeScript + React, runnable standalone and as a module inside [TinyManager](https://github.com/webtanan-sketch/tinymanager).

## License

MIT
