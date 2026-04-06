# IPGeolocation TypeScript Types

Public TypeScript types for the IPGeolocation IP Location API v3 SDKs.

Use this package if you already have your own HTTP client and only need request, response, bulk result, and metadata types. It does not include a client runtime.

If you want a runtime SDK instead, use:

- `ip-geolocation-api-javascript-sdk`
- `ip-geolocation-api-sdk-typescript`

## Table of Contents

- [Installation](#installation)
- [When To Use This Package](#when-to-use-this-package)
- [What It Exports](#what-it-exports)
- [What It Does Not Export](#what-it-does-not-export)
- [Quick Start](#quick-start)
- [Bulk Result Typing](#bulk-result-typing)
- [Request Header Types](#request-header-types)
- [Notes](#notes)
- [Related Packages](#related-packages)
- [Links](#links)

## Installation

```bash
npm install ip-geolocation-api-typescript-types
```

```ts
import type { IpGeolocationResponse } from "ip-geolocation-api-typescript-types";
```

## When To Use This Package

Use this package when:

- you already have your own `fetch`, `undici`, or another HTTP wrapper
- you want the public IPGeolocation request and response types in your own codebase
- you want the same types used by the runtime SDKs without adopting their transport or parsing code
- you are building your own small wrapper around the IPGeolocation API

Do not use this package if you want:

- a ready-made API client
- built-in request validation
- runtime parsing
- retries, timeouts, or transport handling
- error classes from the runtime SDKs

## What It Exports

### Config Types

- `IpGeolocationClientConfigInit`

### Request Types

- `LookupIpGeolocationRequestInit`
- `BulkLookupIpGeolocationRequestInit`
- `RequestHeaders`
- `HeaderEntry`
- `HeaderValue`
- `NormalizedHeaders`

### Response Types

- `IpGeolocationResponse`
- nested model interfaces such as `Location`, `Security`, `Abuse`, `Asn`, `Company`, `TimeZoneInfo`, and `UserAgent`

### Bulk Result Types

- `BulkLookupResult`
- `BulkLookupSuccess`
- `BulkLookupError`

### Metadata Types

- `ApiResponse<T>`
- `ApiResponseMetadata`
- `ApiResponseMetadataInit`
- `HeaderMultiMap`

### Enum-Like String Types

- `Language`
- `ResponseFormat`
- `LocationConfidence`

## What It Does Not Export

- `IpGeolocationClient`
- request classes such as `LookupIpGeolocationRequest`
- HTTP transport code
- validation logic
- runtime parsing helpers
- error classes
- JSON helper functions
- enum runtime objects such as `Language.EN`

This package is type declarations plus minimal JS stubs for package resolution.

## Quick Start

This example uses your own `fetch` wrapper and the public request and response types from this package.

```ts
import type {
  ApiResponse,
  IpGeolocationResponse,
  LookupIpGeolocationRequestInit,
} from "ip-geolocation-api-typescript-types";

async function lookupIp(
  request: LookupIpGeolocationRequestInit,
): Promise<ApiResponse<IpGeolocationResponse>> {
  const url = new URL("https://api.ipgeolocation.io/v3/ipgeo");

  url.searchParams.set("apiKey", process.env.IPGEO_API_KEY!);

  if (request.ip) {
    url.searchParams.set("ip", request.ip);
  }

  if (request.lang) {
    url.searchParams.set("lang", request.lang);
  }

  if (request.include) {
    url.searchParams.set("include", [...request.include].join(","));
  }

  if (request.fields) {
    url.searchParams.set("fields", [...request.fields].join(","));
  }

  if (request.excludes) {
    url.searchParams.set("excludes", [...request.excludes].join(","));
  }

  if (request.output) {
    url.searchParams.set("output", request.output);
  }

  const response = await fetch(url.toString(), {
    // Adapt request.headers here if your wrapper supports custom headers.
  });

  const data = (await response.json()) as IpGeolocationResponse;

  return {
    data,
    metadata: {
      statusCode: response.status,
      durationMs: 0,
      creditsCharged: undefined,
      successfulRecords: undefined,
      rawHeaders: {},
      headerValues() {
        return [];
      },
      firstHeaderValue() {
        return undefined;
      },
    },
  };
}
```

## Bulk Result Typing

Bulk lookups return a mixed array of success and error results. `BulkLookupResult` matches that shape.

```ts
import type { BulkLookupResult } from "ip-geolocation-api-typescript-types";

function handleBulkResults(results: readonly BulkLookupResult[]): void {
  for (const result of results) {
    if (result.success) {
      console.log(result.data.ip, result.data.location?.countryName);
      continue;
    }

    console.error(result.error.message);
  }
}
```

## Request Header Types

`RequestHeaders` accepts:

- a plain object
- a `Map`
- an iterable of `[name, value]` pairs

It does not depend on the browser `Headers` type, so it works better in shared libraries, Node services, and custom runtimes.

Example:

```ts
import type { RequestHeaders } from "ip-geolocation-api-typescript-types";

const headers: RequestHeaders = [
  ["X-Trace-Id", "abc123"],
  ["X-Env", ["prod", "blue"]],
];
```

## Notes

- This package only gives you the types.
- It does not perform request validation. Invalid values can still typecheck if you widen them to `string`.
- It does not parse or normalize API responses at runtime.
- It does not include transport, timeout, retry, or error handling logic.
- `LocationConfidence` includes `"unknown"` as a defensive fallback type.
- If you want the same runtime behavior as the official SDKs, use the JS or TS runtime package instead.

## Related Packages

- JavaScript runtime SDK: `ip-geolocation-api-javascript-sdk`
- TypeScript runtime SDK: `ip-geolocation-api-sdk-typescript`

## Links

- [npm package](https://www.npmjs.com/package/ip-geolocation-api-typescript-types)
- [GitHub repository](https://github.com/IPGeolocation/ip-geolocation-api-typescript-sdk/tree/main/packages/types)
- [API documentation](https://ipgeolocation.io/documentation/ip-location-api.html)
- [Pricing](https://ipgeolocation.io/pricing.html)
- [Authentication](https://ipgeolocation.io/documentation/api-authentication.html)
