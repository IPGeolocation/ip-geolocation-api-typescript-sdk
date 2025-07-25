# AstronomyApi

All URIs are relative to *https://api.ipgeolocation.io/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAstronomyDetails**](#getastronomydetails) | **GET** /astronomy | |

# **getAstronomyDetails**
> AstronomyResponse getAstronomyDetails()

The Astronomy API provides the location-based rise and set times for the Sun and Moon along with the current position, distance from earth, and azimuth of the Sun and the Moon for a specific date at the queried time. 



### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ip** | [**string**] | query paramter \&#39;ip\&#39;. If not provided, will be your network IP | (optional) defaults to undefined|
| **location** | [**string**] | query paramter \&#39;location\&#39;. If not provided, will be your ip location | (optional) defaults to undefined|
| **lat** | [**string**] | query paramter \&#39;lat\&#39;. | (optional) defaults to undefined|
| **_long** | [**string**] | query paramter \&#39;long\&#39;. | (optional) defaults to undefined|
| **date** | [**string**] | The date (YYYY-MM-DD) to lookup for. default will be the current date | (optional) defaults to undefined|
| **elevation** | [**number**] | query parameter \&#39;elevation\&#39; | (optional) defaults to undefined|
| **output** | [**string**] | Desired output format. | (optional) defaults to undefined|
| **lang** | [**&#39;en&#39; | &#39;de&#39; | &#39;ru&#39; | &#39;ja&#39; | &#39;fr&#39; | &#39;cn&#39; | &#39;es&#39; | &#39;cs&#39; | &#39;it&#39; | &#39;ko&#39; | &#39;fa&#39; | &#39;pt&#39;**]**Array<&#39;en&#39; &#124; &#39;de&#39; &#124; &#39;ru&#39; &#124; &#39;ja&#39; &#124; &#39;fr&#39; &#124; &#39;cn&#39; &#124; &#39;es&#39; &#124; &#39;cs&#39; &#124; &#39;it&#39; &#124; &#39;ko&#39; &#124; &#39;fa&#39; &#124; &#39;pt&#39;>** | By default, the API responds in English. You can change the response language by passing the language code as a query parameter &#x60;lang&#x60;. Multi language feature is available only for &#x60;paid users&#x60;. | (optional) defaults to undefined|


### Return type

**AstronomyResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**400** | Bad Request – Possible reasons include:   - Invalid or not found location/address   - Special characters in API key or value   - Invalid date format (expected: yyyy-MM-dd)   - IP not found in the database  |  -  |
|**401** | Unauthorized – Possible reasons include:   - Missing or invalid API key   - Account unverified, locked, or disabled   - Accessing API with an unauthorized key   - Subscription expired or downgraded  |  -  |
|**405** | Method Not Allowed – Only GET is allowed for &#x60;/astronomy&#x60; endpoint |  -  |
|**429** | Too Many Requests – API usage limits exceeded for current plan |  -  |
|**499** | Client Closed Request – Client terminated connection before completion |  -  |
|**500** | Internal Server Error – Something went wrong on our end |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

