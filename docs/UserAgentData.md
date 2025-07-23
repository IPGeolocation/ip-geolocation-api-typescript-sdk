# UserAgentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_agent_string** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**version** | **string** |  | [optional] [default to undefined]
**version_major** | **string** |  | [optional] [default to undefined]
**device** | [**UserAgentDataDevice**](UserAgentDataDevice.md) |  | [optional] [default to undefined]
**engine** | [**UserAgentDataEngine**](UserAgentDataEngine.md) |  | [optional] [default to undefined]
**operating_system** | [**UserAgentDataOperatingSystem**](UserAgentDataOperatingSystem.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UserAgentData } from 'ipgeolocation-sdk-ts';

const instance: UserAgentData = {
    user_agent_string,
    name,
    type,
    version,
    version_major,
    device,
    engine,
    operating_system,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
