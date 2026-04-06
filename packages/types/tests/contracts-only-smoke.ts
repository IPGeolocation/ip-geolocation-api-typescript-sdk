import type {
  ApiResponse,
  BulkLookupResult,
  BulkLookupIpGeolocationRequestInit,
  HeaderEntry,
  IpGeolocationClientConfigInit,
  IpGeolocationResponse,
  LookupIpGeolocationRequestInit,
  RequestHeaders,
  ResponseFormat,
} from "../src";

const config: IpGeolocationClientConfigInit = {
  apiKey: "test-key",
  connectTimeoutMs: 1_000,
};

const tupleHeaders: RequestHeaders = [
  ["X-Test", "1"],
  ["X-Trace", ["a", "b"]],
] as const satisfies readonly HeaderEntry[];

const mapHeaders: RequestHeaders = new Map<string, string>([["X-Test", "1"]]);

const singleRequest: LookupIpGeolocationRequestInit = {
  ip: "8.8.8.8",
  include: ["security"],
  headers: tupleHeaders,
  output: "json",
};

const bulkRequest: BulkLookupIpGeolocationRequestInit = {
  ips: ["8.8.8.8", "1.1.1.1"],
  headers: mapHeaders,
  output: "json",
};

const xmlFormat: ResponseFormat = "xml";

async function lookup(
  request: LookupIpGeolocationRequestInit,
): Promise<ApiResponse<IpGeolocationResponse>> {
  void request;

  return {
    data: {
      ip: "8.8.8.8",
      security: {
        isVpn: false,
      },
    },
    metadata: {
      creditsCharged: undefined,
      successfulRecords: undefined,
      statusCode: 200,
      durationMs: 1,
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

function handleBulkResults(results: readonly BulkLookupResult[]): void {
  for (const result of results) {
    if (result.success) {
      void result.data.ip;
      continue;
    }

    void result.error.message;
  }
}

void config;
void singleRequest;
void bulkRequest;
void xmlFormat;
void lookup;
void handleBulkResults;
