# GeolocationXMLResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip** | **string** |  | [optional] [default to undefined]
**hostname** | **string** |  | [optional] [default to undefined]
**domain** | **string** |  | [optional] [default to undefined]
**location** | [**Location**](Location.md) |  | [optional] [default to undefined]
**country_metadata** | [**CountryMetadata**](CountryMetadata.md) |  | [optional] [default to undefined]
**network** | [**Network**](Network.md) |  | [optional] [default to undefined]
**currency** | [**Currency**](Currency.md) |  | [optional] [default to undefined]
**security** | [**Security**](Security.md) |  | [optional] [default to undefined]
**abuse** | [**Abuse**](Abuse.md) |  | [optional] [default to undefined]
**time_zone** | [**TimeZone**](TimeZone.md) |  | [optional] [default to undefined]
**user_agent** | [**UserAgentData**](UserAgentData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GeolocationXMLResponse } from 'ipgeolocation-sdk-ts';

const instance: GeolocationXMLResponse = {
    ip,
    hostname,
    domain,
    location,
    country_metadata,
    network,
    currency,
    security,
    abuse,
    time_zone,
    user_agent,
};
```

[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)
