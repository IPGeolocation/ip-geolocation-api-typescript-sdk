# IP Geolocation API Typescript SDK

## Introduction
IPGeolocation API is the solution to identify country code (ISO2 and ISO3 standard), country name, continent code, continent name, country capital, state/province, district, city, zip code, latitude and longitude of city, is country belongs to Europian Union, calling code, top level domain (TLD), languages, country flag, internet service provider (ISP), connection type, organization, geoname ID, currency code, currency name, time zone ID, time zone offset, current time in the time zone, is time zone in daylight saving time, and total daylight savings. This document provides important information to help you get up to speed with IPGeolocation API using IP Geolocation API Typescript SDK.

Developers can use this Typescript SDK for software and web projects related to, but not limited to:

* Display native language and currency
* Redirect based on the country
* Digital rights management
* Web log stats and analysis
* Auto-selection of country, state/province and city on forms
* Filter access from countries you do not do business with
* Geo-targeting for increased sales and click-through

## Quick Start Guide
In this document, you will go through the basic steps to use IP Geolocation API Typescript SDK.  
You need a valid 'IPGeolocation API key' to use this SDK. [Sign up](https://ipgeolocation.io/signup) here and get your free API key if you don't have one.

## System Requirements  
Internet connection is required to run this component.

## Installation
### NPM
```cli
$ npm install ip-geolocation-api-sdk-typescript
```

## Basic Usage
### Setup API
```ts
import {IPGeolocationAPI} from './node_modules/ip-geolocation-api-sdk-typescript/IPGeolocationAPI';

// Create IPGeolocationAPI object, passing your valid API key
let ipgeolocationApi = new IPGeolocationAPI("YOUR_API_KEY");
```

### Geolocation Lookup
```ts
import {GeolocationParams} from './node_modules/ip-geolocation-api-sdk-typescript/GeolocationParams';

// Query geolocation for the calling machine's IP address for all fields
console.log(ipgeolocationApi.getGeolocation());

// Query geolocation for IP address (1.1.1.1) and all fields
let geolocationParams = new GeolocationParams();
geolocationParams.setIp("1.1.1.1");

console.log(ipgeolocationApi.getGeolocation(geolocationParams));

// Query geolocation for IP address (1.1.1.1) and fields (geo, time_zone and currency)
let geolocationParams = new GeolocationParams();
geolocationParams.setIp("1.1.1.1"); 
geolocationParams.setFields("geo,time_zone,currency");

console.log(ipgeolocationApi.getGeolocation(geolocationParams));
```

### Bulk Geolocations Lookup
```ts
// Query geolocations for multiple IP addresses and all fields
let geolocationParams = new GeolocationParams();
geolocationParams.setIps(['1.1.1.1', '2.2.2.2', '3.3.3.3']);

console.log(ipgeolocationApi.getGeolocation(geolocationParams));

// Query geolocations for multiple IP addresses but only 'geo' field
let geolocationParams = new GeolocationParams();
geolocationParams.setIps(['1.1.1.1', '2.2.2.2', '3.3.3.3']);
geolocationParams.setFields("geo");

console.log(ipgeolocationApi.getGeolocation(geolocationParams));
```

### Time Zone API
```ts
import {GeolocationParams} from './node_modules/ip-geolocation-api-sdk-typescript/TimezoneParams';

// Query time zone information by time zone ID
let timezoneParams = new TimezoneParams();
timezoneParams.setTimezone("America/New_York");

console.log(ipgeolocationApi.getTimezone(timezoneParams));

// Query time zone information by latitude and longitude of the location
let timezoneParams = new TimezoneParams();
timezoneParams.setLocation(37.1838139, -123.8105225);

console.log(ipgeolocationApi.getTimezone(timezoneParams));

// Query time zone information for IP address (1.1.1.1)
let timezoneParams = new TimezoneParams();
timezoneParams.setIp("1.1.1.1");

console.log(ipgeolocationApi.getTimezone(timezoneParams));

// Query time zone information for calling machine’s IP address
console.log(ipgeolocationApi.getTimezone());
```

### Commands To Run Typescript Application
1. tsc *.ts
2. node *.js
