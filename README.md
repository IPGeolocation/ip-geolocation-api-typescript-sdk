# IP Geolocation API Typescript SDK

## Introduction

[IPGeolocation API](https://ipgeolocation.io) is the solution to identify country code (ISO2 and ISO3 standard), country name, continent code, continent name, country capital, state/province, district, city, zip code, latitude and longitude of city, is country belongs to Europian Union, calling code, top level domain (TLD), languages, country flag, internet service provider (ISP), connection type, organization, geoname ID, currency code, currency name, time zone ID, time zone offset, current time in the time zone, is time zone in daylight saving time, and total daylight savings. This document provides important information to help you get up to speed with IPGeolocation API using IP Geolocation API Typescript SDK.

Developers can use this Typescript SDK for software and web projects related to, but not limited to:

1. Display native language and currency
2. Redirect based on the country
3. Digital rights management
4. Web log stats and analysis
5. Auto-selection of country, state/province and city on forms
6. Filter access from countries you do not do business with
7. Geo-targeting for increased sales and click-through

## Quick Start Guide

You need a valid 'IPGeolocation API key' to use this SDK. [Sign up](https://ipgeolocation.io/signup) here and get your free API key if you don't have one.

**Note:** Complete documentation to use this SDK is also available at [IP Geolocation API Typescript SDK Documentation](https://ipgeolocation.io/documentation/ip-geolocation-api-typescript-sdk-201809051239).

## System Requirements

Internet connection is required to run this component.

## Installation

### NPM

```cli
$ npm install ip-geolocation-api-sdk-typescript
```
## Documentation
Use the following URL to visit documentation
[https://ipgeolocation.io/documentation.html](https://ipgeolocation.io/documentation.html)

## Basic Usage

### Setup API

```ts
import { IPGeolocationAPI } from './node_modules/ip-geolocation-api-sdk-typescript/IPGeolocationAPI';

// Create IPGeolocationAPI object. Constructor takes two parameters.
// 1) API key (Optional: To authenticate your requests through "Request Origin", you can skip it.)
// 2) Async (Optional: It is used to toggle "async" mode in the requests. By default, it is true.)
let ipgeolocationApi = new IPGeolocationAPI("YOUR_API_KEY", false); 
```

### Geolocation Lookup

```ts
import { GeolocationParams } from './node_modules/ip-geolocation-api-sdk-typescript/GeolocationParams';

// Function to handle API response
function handleResponse(json) {
    console.log(json);
}

// Get complete geolocation for the calling machine's IP address
ipgeolocationApi.getGeolocation(handleResponse);

// Get complete geolocation in Russian** for IP address (1.1.1.1)
let geolocationParams = new GeolocationParams();
geolocationParams.setIPAddress('1.1.1.1');
geolocationParams.setLang('ru');

ipgeolocationApi.getGeolocation(handleResponse, geolocationParams);

// Get custom geolocation (only "geo, time_zone and currency" fields/objects) for an IP address (1.1.1.1)
let geolocationParams = new GeolocationParams();
geolocationParams.setIPAddress('1.1.1.1'); 
geolocationParams.setFields('geo,time_zone,currency');

ipgeolocationApi.getGeolocation(handleResponse, geolocationParams);

// Exclude fields/obejects from complete geolocation in Italian language
let geolocationParams = new GeolocationParams();
geolocationParams.setExcludes('continent_name,country_code3,time_zone');
geolocationParams.setLang('it');

ipgeolocationApi.getGeolocation(handleResponse, geolocationParams);
```

### Bulk Geolocations Lookup

```ts
// Query geolocation in German** for multiple IP addresses and all fields
let geolocationParams = new GeolocationParams();
geolocationParams.setLang('de');
geolocationParams.setIPAddresses(['1.1.1.1', '2.2.2.2', '3.3.3.3']);

ipgeolocationApi.getGeolocation(handleResponse, geolocationParams);

// Specify the required fields/objects for multiple IP addresses
let geolocationParams = new GeolocationParams();
geolocationParams.setIPAddresses(['1.1.1.1', '2.2.2.2', '3.3.3.3']);
geolocationParams.setFields('geo');

ipgeolocationApi.getGeolocation(geolocationParams, geoResponse);
```

### Timezone API

```ts
import { TimezoneParams } from './node_modules/ip-geolocation-api-sdk-typescript/TimezoneParams';

// Get time zone information by time zone ID
let timezoneParams = new TimezoneParams();
timezoneParams.setTimezone('America/Los_Angeles');

ipgeolocationApi.getTimezone(handleResponse, timezoneParams);

// Get time zone information by latitude and longitude of the location
let timezoneParams = new TimezoneParams();
timezoneParams.setLocation('37.1838139', '-123.8105225');

ipgeolocationApi.getTimezone(handleResponse, timezoneParams);

// Get time zone information for IP address (1.1.1.1) and geolocation information Japanese**
let timezoneParams = new TimezoneParams();
timezoneParams.setIPAddress('1.1.1.1');

ipgeolocationApi.getTimezone(handleResponse, timezoneParams);

// Query time zone information for calling machine's IP address
ipgeolocationApi.getTimezone(handleResponse);
```

### UserAgent API

```ts
// Get user agent information for single user agent string
ipgeolocationApi.getUserAgent(handleResponse, "AppleTV6,2/11.1");

// Get user agents information in bulk by providing array of user agent strings
var uaStrings:string[] = ["AppleTV6,2/11.1", "Roku4640X/DVP-7.70 (297.70E04154A)", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:15.0) Gecko/20100101 Firefox/15.0.1"];
ipgeolocationApi.getBulkUserAgent(handleResponse, uaStrings);
```

** IPGeolocation provides geolocation information in the following languages:

* English (en)
* German (de)
* Russian (ru)
* Japanese (ja)
* French (fr)
* Chinese Simplified (cn)
* Spanish (es)
* Czech (cs)
* Italian (it)

By default, geolocation information is returned in English. Response in a language other than English is available to paid users only.

### Commands To Run Typescript Application

1. tsc *.ts
2. node Main.js
