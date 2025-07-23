# TimeZone


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**offset** | **number** |  | [optional] [default to undefined]
**offset_with_dst** | **number** |  | [optional] [default to undefined]
**current_time** | **string** |  | [optional] [default to undefined]
**current_time_unix** | **number** |  | [optional] [default to undefined]
**is_dst** | **boolean** |  | [optional] [default to undefined]
**dst_savings** | **number** |  | [optional] [default to undefined]
**dst_exists** | **boolean** |  | [optional] [default to undefined]
**dst_start** | [**TimeZoneDstStart**](TimeZoneDstStart.md) |  | [optional] [default to undefined]
**dst_end** | [**TimeZoneDstEnd**](TimeZoneDstEnd.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TimeZone } from 'ipgeolocation-sdk-ts';

const instance: TimeZone = {
    name,
    offset,
    offset_with_dst,
    current_time,
    current_time_unix,
    is_dst,
    dst_savings,
    dst_exists,
    dst_start,
    dst_end,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
