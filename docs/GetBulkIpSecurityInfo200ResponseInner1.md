# GetBulkIpSecurityInfo200ResponseInner1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip** | **string** |  | [optional] [default to undefined]
**hostname** | **string** |  | [optional] [default to undefined]
**security** | [**Security**](Security.md) |  | [optional] [default to undefined]
**location** | [**LocationMinimal**](LocationMinimal.md) |  | [optional] [default to undefined]
**network** | [**NetworkMinimal**](NetworkMinimal.md) |  | [optional] [default to undefined]
**time_zone** | [**TimeZone**](TimeZone.md) |  | [optional] [default to undefined]
**user_agent** | [**UserAgentData**](UserAgentData.md) |  | [optional] [default to undefined]
**country_metadata** | [**CountryMetadata**](CountryMetadata.md) |  | [optional] [default to undefined]
**currency** | [**Currency**](Currency.md) |  | [optional] [default to undefined]
**message** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GetBulkIpSecurityInfo200ResponseInner1 } from 'ipgeolocation-sdk-ts';

const instance: GetBulkIpSecurityInfo200ResponseInner1 = {
    ip,
    hostname,
    security,
    location,
    network,
    time_zone,
    user_agent,
    country_metadata,
    currency,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
