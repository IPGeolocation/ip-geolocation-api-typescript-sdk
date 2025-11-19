# Security


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**threat_score** | **number** |  | [optional] [default to undefined]
**is_tor** | **boolean** |  | [optional] [default to undefined]
**is_proxy** | **boolean** |  | [optional] [default to undefined]
**proxy_type** | **string** |  | [optional] [default to undefined]
**proxy_provider** | **string** |  | [optional] [default to undefined]
**is_anonymous** | **boolean** |  | [optional] [default to undefined]
**is_known_attacker** | **boolean** |  | [optional] [default to undefined]
**is_spam** | **boolean** |  | [optional] [default to undefined]
**is_bot** | **boolean** |  | [optional] [default to undefined]
**is_cloud_provider** | **boolean** |  | [optional] [default to undefined]
**cloud_provider** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Security } from 'ipgeolocation-sdk-ts';

const instance: Security = {
    threat_score,
    is_tor,
    is_proxy,
    proxy_type,
    proxy_provider,
    is_anonymous,
    is_known_attacker,
    is_spam,
    is_bot,
    is_cloud_provider,
    cloud_provider,
};
```

[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)
