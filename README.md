# ip-geolocation-api-sdk-typescript

## Installation
------------
    npm i ip-geolocation-api-sdk-typescript
------------
    
## Usage
```ts
import {IPGeolocationAPI} from './node_modules/ip-geolocation-api-sdk-typescript/IPGeolocationAPI';
import {GeolocationParams} from './node_modules/ip-geolocation-api-sdk-typescript/IPGeolocationAPI';
import {TimezoneParams} from './node_modules/ip-geolocation-api-sdk-typescript/IPGeolocationAPI';
```
### Setup API
```ts
var api = new IPGeolocationAPI("YOUR_API_KEY");
```

### Geolocation Lookup
```ts
// Query geolocation for IP address (1.1.1.1) and fields (geo, time_zone and currency)
var geolocationParams = new GeolocationParams();
geolocationParams.setIp("1.1.1.1"); 
geolocationParams.setFields("geo,time_zone,currency");

console.log(api.getGeolocation(geolocationParams));

// Query geolocation for IP address (1.1.1.1) and all fields
GeolocationParams geoParams = new GeolocationParams();
geoParams.SetIp("1.1.1.1");

console.log(api.getGeolocation(geolocationParams));

// Query geolocation for the calling machine's IP address for all fields
console.log(api.getGeolocation());
```

### Bulk Geolocations Lookup
```ts
// Query geolocations for multiple IP addresses and all fields
var geolocationParams = new GeolocationParams();
geolocationParams.setIps(['1.1.1.1','2.2.22.2','34.1.1.3']);

console.log(api.getGeolocation(geolocationParams));
```

### Time Zone API
```ts
// Query time zone information by time zone ID
var tzParams = new TimezoneParams();

tzParams.setIp("1.1.1.1");
console.log(obj.getTimezone());
```
## Commands To Run
tsc *.ts
node *.js

