# ASNResponseXMLAsn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**as_number** | **string** |  | [optional] [default to undefined]
**organization** | **string** |  | [optional] [default to undefined]
**country** | **string** |  | [optional] [default to undefined]
**asn_name** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**domain** | **string** |  | [optional] [default to undefined]
**date_allocated** | **string** |  | [optional] [default to undefined]
**allocation_status** | **string** |  | [optional] [default to undefined]
**num_of_ipv4_routes** | **number** |  | [optional] [default to undefined]
**num_of_ipv6_routes** | **number** |  | [optional] [default to undefined]
**rir** | **string** |  | [optional] [default to undefined]
**routes** | **Array&lt;string&gt;** | It will only be included in the response, if you set include&#x3D;routes in the request | [optional] [default to undefined]
**upstreams** | [**Array&lt;ASNConnection&gt;**](ASNConnection.md) |  | [optional] [default to undefined]
**downstreams** | [**Array&lt;ASNConnection&gt;**](ASNConnection.md) |  | [optional] [default to undefined]
**peers** | [**Array&lt;ASNConnection&gt;**](ASNConnection.md) |  | [optional] [default to undefined]
**whois_response** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ASNResponseXMLAsn } from 'ipgeolocation-sdk-ts';

const instance: ASNResponseXMLAsn = {
    as_number,
    organization,
    country,
    asn_name,
    type,
    domain,
    date_allocated,
    allocation_status,
    num_of_ipv4_routes,
    num_of_ipv6_routes,
    rir,
    routes,
    upstreams,
    downstreams,
    peers,
    whois_response,
};
```

[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)
