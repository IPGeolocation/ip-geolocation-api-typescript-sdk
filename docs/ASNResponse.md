# ASNResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip** | **string** | IP address for which ASN information is returned. Present if the \&#39;ip\&#39; query parameter is used or no IP is specified (defaults to requester\&#39;s IP). | [optional] [default to undefined]
**asn** | [**ASNResponseAsn**](ASNResponseAsn.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ASNResponse } from 'ipgeolocation-sdk-ts';

const instance: ASNResponse = {
    ip,
    asn,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
