# Changelog

## 3.0.1

- Hide API keys when printing clients and settings, and in request errors and typed bulk error messages.
- Stop redirects from sending lookup data or custom headers to another server.
- Keep the HTTP status if an error response cannot be read. Reject missing or extra rows in typed bulk results.
- Add Arabic (`ar`) for single and bulk lookups. Include CDN, proxy, bot and corporate gateway details in typed results.
- Fix TypeScript imports in CommonJS projects. Preserve names such as `__proto__` in headers and JSON output.

If your code handles every language separately, add a case for `ar`.

## 3.0.0

- Initial TypeScript SDK release for `/v3/ipgeo` and `/v3/ipgeo-bulk`
- Bulk results use `result.data` for success items and `result.error.message` for error items
- Async `IpGeolocationClient` with typed JSON methods and raw JSON/XML methods
- Strict config and request validation
- Typed response models, response metadata, and JSON output helpers
- Live smoke coverage for free-plan and paid-plan behavior
- Live raw-vs-typed parity coverage against the paid API
