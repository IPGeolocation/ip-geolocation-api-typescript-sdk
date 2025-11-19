# TimezoneDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**offset** | **number** |  | [optional] [default to undefined]
**offset_with_dst** | **number** |  | [optional] [default to undefined]
**date** | **string** |  | [optional] [default to undefined]
**date_time** | **string** |  | [optional] [default to undefined]
**date_time_txt** | **string** |  | [optional] [default to undefined]
**date_time_wti** | **string** |  | [optional] [default to undefined]
**date_time_ymd** | **string** |  | [optional] [default to undefined]
**date_time_unix** | **number** |  | [optional] [default to undefined]
**time_24** | **string** |  | [optional] [default to undefined]
**time_12** | **string** |  | [optional] [default to undefined]
**week** | **number** |  | [optional] [default to undefined]
**month** | **number** |  | [optional] [default to undefined]
**year** | **number** |  | [optional] [default to undefined]
**year_abbr** | **string** |  | [optional] [default to undefined]
**is_dst** | **boolean** |  | [optional] [default to undefined]
**dst_savings** | **number** |  | [optional] [default to undefined]
**dst_exists** | **boolean** |  | [optional] [default to undefined]
**dst_start** | [**TimezoneDetailDstStart**](TimezoneDetailDstStart.md) |  | [optional] [default to undefined]
**dst_end** | [**TimezoneDetailDstEnd**](TimezoneDetailDstEnd.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TimezoneDetail } from 'ipgeolocation-sdk-ts';

const instance: TimezoneDetail = {
    name,
    offset,
    offset_with_dst,
    date,
    date_time,
    date_time_txt,
    date_time_wti,
    date_time_ymd,
    date_time_unix,
    time_24,
    time_12,
    week,
    month,
    year,
    year_abbr,
    is_dst,
    dst_savings,
    dst_exists,
    dst_start,
    dst_end,
};
```

[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)
