export interface IpGeolocationClientConfigInit {
  apiKey?: string | null;
  requestOrigin?: string | null;
  baseUrl?: string | null;
  connectTimeoutMs?: number | null;
  readTimeoutMs?: number | null;
}

export type Language =
  | "en"
  | "de"
  | "ru"
  | "ja"
  | "fr"
  | "cn"
  | "es"
  | "cs"
  | "it"
  | "ko"
  | "fa"
  | "pt";

export type ResponseFormat = "json" | "xml";

export type LocationConfidence = "high" | "medium" | "low" | "unknown";

export type HeaderValue = string | readonly string[];
export type HeaderEntry = readonly [string, HeaderValue];
export type RequestHeaders =
  | Readonly<Record<string, HeaderValue>>
  | ReadonlyMap<string, HeaderValue>
  | Iterable<HeaderEntry>;
export type NormalizedHeaders = Readonly<Record<string, readonly string[]>>;
export type HeaderMultiMap = Readonly<Record<string, readonly string[]>>;

export interface LookupIpGeolocationRequestInit {
  ip?: string | null;
  lang?: Language | string | null;
  include?: Iterable<string> | null;
  fields?: Iterable<string> | null;
  excludes?: Iterable<string> | null;
  userAgent?: string | null;
  headers?: RequestHeaders | null;
  output?: ResponseFormat | string | null;
}

export interface BulkLookupIpGeolocationRequestInit {
  ips: Iterable<string>;
  lang?: Language | string | null;
  include?: Iterable<string> | null;
  fields?: Iterable<string> | null;
  excludes?: Iterable<string> | null;
  userAgent?: string | null;
  headers?: RequestHeaders | null;
  output?: ResponseFormat | string | null;
}

export interface ApiResponseMetadataInit {
  creditsCharged?: number | null;
  successfulRecords?: number | null;
  statusCode: number;
  durationMs: number;
  rawHeaders?: HeaderMultiMap | null;
}

export interface ApiResponseMetadata {
  readonly creditsCharged: number | undefined;
  readonly successfulRecords: number | undefined;
  readonly statusCode: number;
  readonly durationMs: number;
  readonly rawHeaders: HeaderMultiMap;
  headerValues(name: string): readonly string[];
  firstHeaderValue(name: string): string | undefined;
}

export interface ApiResponse<T> {
  data: T;
  metadata: ApiResponseMetadata;
}

export interface Abuse {
  route?: string;
  country?: string;
  name?: string;
  organization?: string;
  kind?: string;
  address?: string;
  emails?: readonly string[];
  phoneNumbers?: readonly string[];
}

export interface Asn {
  asNumber?: string;
  organization?: string;
  country?: string;
  type?: string;
  domain?: string;
  dateAllocated?: string;
  rir?: string;
}

export interface Company {
  name?: string;
  type?: string;
  domain?: string;
}

export interface CountryMetadata {
  callingCode?: string;
  tld?: string;
  languages?: readonly string[];
}

export interface Currency {
  code?: string;
  name?: string;
  symbol?: string;
}

export interface DstTransition {
  utcTime?: string;
  duration?: string;
  gap?: boolean;
  dateTimeAfter?: string;
  dateTimeBefore?: string;
  overlap?: boolean;
}

export interface Location {
  continentCode?: string;
  continentName?: string;
  countryCode2?: string;
  countryCode3?: string;
  countryName?: string;
  countryNameOfficial?: string;
  countryCapital?: string;
  stateProv?: string;
  stateCode?: string;
  district?: string;
  city?: string;
  locality?: string;
  accuracyRadius?: string;
  confidence?: LocationConfidence;
  dmaCode?: string;
  zipcode?: string;
  latitude?: string;
  longitude?: string;
  isEu?: boolean;
  countryFlag?: string;
  geonameId?: string;
  countryEmoji?: string;
}

export interface Network {
  connectionType?: string;
  route?: string;
  isAnycast?: boolean;
}

export interface Security {
  threatScore?: number;
  isTor?: boolean;
  isProxy?: boolean;
  proxyProviderNames?: readonly string[];
  proxyConfidenceScore?: number;
  proxyLastSeen?: string;
  isResidentialProxy?: boolean;
  isVpn?: boolean;
  vpnProviderNames?: readonly string[];
  vpnConfidenceScore?: number;
  vpnLastSeen?: string;
  isRelay?: boolean;
  relayProviderName?: string;
  isAnonymous?: boolean;
  isKnownAttacker?: boolean;
  isBot?: boolean;
  isSpam?: boolean;
  isCloudProvider?: boolean;
  cloudProviderName?: string;
}

export interface TimeZoneInfo {
  name?: string;
  offset?: number;
  offsetWithDst?: number;
  currentTime?: string;
  currentTimeUnix?: number;
  currentTzAbbreviation?: string;
  currentTzFullName?: string;
  standardTzAbbreviation?: string;
  standardTzFullName?: string;
  isDst?: boolean;
  dstSavings?: number;
  dstExists?: boolean;
  dstTzAbbreviation?: string;
  dstTzFullName?: string;
  dstStart?: DstTransition;
  dstEnd?: DstTransition;
}

export interface UserAgentDevice {
  name?: string;
  type?: string;
  brand?: string;
  cpu?: string;
}

export interface UserAgentEngine {
  name?: string;
  type?: string;
  version?: string;
  versionMajor?: string;
}

export interface UserAgentOperatingSystem {
  name?: string;
  type?: string;
  version?: string;
  versionMajor?: string;
  build?: string;
}

export interface UserAgent {
  userAgentString?: string;
  name?: string;
  type?: string;
  version?: string;
  versionMajor?: string;
  device?: UserAgentDevice;
  engine?: UserAgentEngine;
  operatingSystem?: UserAgentOperatingSystem;
}

export interface IpGeolocationResponse {
  ip?: string;
  domain?: string;
  hostname?: string;
  location?: Location;
  countryMetadata?: CountryMetadata;
  network?: Network;
  currency?: Currency;
  asn?: Asn;
  company?: Company;
  security?: Security;
  abuse?: Abuse;
  timeZone?: TimeZoneInfo;
  userAgent?: UserAgent;
}

export interface BulkLookupSuccess {
  success: true;
  data: IpGeolocationResponse;
}

export interface BulkLookupError {
  success: false;
  error: {
    message?: string;
  };
}

export type BulkLookupResult = BulkLookupSuccess | BulkLookupError;
