# Woes Mintlify Docs

Customer-facing documentation for Woes, the API-native developer support platform.

The docs source is intentionally written without workspace IDs, API secrets, raw customer data, provider internals, or operator-only debug traces.

For future Mintlify updates, write from the customer/admin point of view. Keep
public docs focused on product behavior, user-facing setup, permissions in plain
language, expected results, limitations, and troubleshooting a workspace admin
can act on. Do not include deployment environment variables, internal route
paths, webhook signing details, raw payload behavior, schema or RLS details,
debug-only status codes, or implementation notes that belong in an internal
runbook.

Use `docs.json` as the navigation source of truth.
