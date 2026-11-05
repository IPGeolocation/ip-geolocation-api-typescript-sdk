import { IpGeolocationClient, Language, SDK_VERSION } from 'ip-geolocation-api-sdk-typescript';
import type { IpGeolocationResponse, Network, Security } from 'ip-geolocation-api-sdk-typescript';
import type {
  IpGeolocationResponse as StandaloneResponse,
  Language as LanguageCode,
  Network as StandaloneNetwork,
  Security as StandaloneSecurity,
} from 'ip-geolocation-api-typescript-types';

import type { IpGeolocationClient as ESMClient } from 'ip-geolocation-api-sdk-typescript' with { 'resolution-mode': 'import' };
import type { IpGeolocationClient as CJSClient } from 'ip-geolocation-api-sdk-typescript' with { 'resolution-mode': 'require' };

const lang: LanguageCode = Language.AR;
const version: `${number}.${number}.${number}` = SDK_VERSION;
type SameNames<A, B> = Exclude<keyof A, keyof B> | Exclude<keyof B, keyof A>;
type Match<T extends never> = T;
export type ClientImportsMatch = Match<Exclude<ESMClient, CJSClient> | Exclude<CJSClient, ESMClient>>;
export type NetworkNamesMatch = Match<SameNames<Network, StandaloneNetwork>>;
export type SecurityNamesMatch = Match<SameNames<Security, StandaloneSecurity>>;

const example = {
  network: { isCdn: false, cdnProviderName: '' },
  security: { proxyDaysSeen7d: 0, botType: 'crawler', isCorporateGateway: false },
} satisfies IpGeolocationResponse & StandaloneResponse;
const makeClient = () => new IpGeolocationClient({});
void [lang, version, example, makeClient];
