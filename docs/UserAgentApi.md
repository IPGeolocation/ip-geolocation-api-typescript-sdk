# UserAgentApi

All URIs are relative to *https://api.ipgeolocation.io/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getUserAgentDetails**](#getuseragentdetails) | **GET** /user-agent | Get details of user-agent|
|[**parseBulkUserAgentStrings**](#parsebulkuseragentstrings) | **POST** /user-agent-bulk | Handle multiple user-agent string lookups|
|[**parseUserAgentString**](#parseuseragentstring) | **POST** /user-agent | Handle single User-Agent string|

# **getUserAgentDetails**
> UserAgentData getUserAgentDetails()

User Agent Parser API provides the accurate browser, device, and operating system details from a User Agent String. It also provides information about crawlers and attack sources. You can use these details to customize user experience, prevent crawlers and attackers from accessing your website. 



### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userAgent** | [**string**] |  | (optional) defaults to undefined|
| **output** | [**string**] | Desired output format (json or xml). | (optional) defaults to undefined|


### Return type

**UserAgentData**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | successful response |  -  |
|**400** | Bad Request – Possible reasons include:   - If the user-agent string is empty/null.  |  -  |
|**401** | Unauthorized – Possible reasons include:   - If API key (as apiKey URL parameter) is missing from the request to User Agent API.    - If the provided API key is not valid.   - If your account has been disabled or locked by admin because of any illegal activity.   - If you’re making requests after your subscription trial has been expired.   - If you’ve exceeded your requests limit.   - If your subscription is paused or is not active.   - If you’re accessing a paid feature on free subscription.  |  -  |
|**405** | If wrong HTTP request method is used for calling the endpoints. Only GET and POST methods are allowed. |  -  |
|**429** | Too Many Requests – API usage limits exceeded for current plan |  -  |
|**499** | Client Closed Request – Client terminated connection before completion |  -  |
|**500** | Internal Server Error – Something went wrong on our end |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **parseBulkUserAgentStrings**
> Array<UserAgentData> parseBulkUserAgentStrings()

This endpoint allows you to perform the parsing of multiple User-Angent strings (max. 50,000) at the same time. The requests count per round is equal to total User-Agent strings passed. This feature is `only available for paid plans`.



### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **parseBulkUserAgentStringsRequest** | **ParseBulkUserAgentStringsRequest**|  | |
| **output** | [**string**] | Desired output format (json or xml). | (optional) defaults to undefined|


### Return type

**Array<UserAgentData>**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request – Possible reasons include:   - If the user-agent string is empty/null.   - If the User Agent Strings JSON list is empty, or the provided JSON does not have \&#39;uaStrings\&#39; field while querying /user-agent-bulk endpoint.   - If more than 50,000 user agent strings are provided while quering from /user-agent-bulk endpoint.  |  -  |
|**401** | Unauthorized – Possible reasons include:   - If API key (as apiKey URL parameter) is missing from the request to User Agent API.    - If the provided API key is not valid.   - If your account has been disabled or locked by admin because of any illegal activity.   - If you’re making requests after your subscription trial has been expired.   - If you’ve exceeded your requests limit.   - If your subscription is paused or is not active.   - If you’re accessing a paid feature on free subscription.   - If bulk user agent parsing endpoint is called using free subscription API key.  |  -  |
|**405** | If wrong HTTP request method is used for calling the endpoints. Only POST method is allowed. |  -  |
|**429** | Too Many Requests – API usage limits exceeded for current plan |  -  |
|**499** | Client Closed Request – Client terminated connection before completion |  -  |
|**500** | Internal Server Error – Something went wrong on our end |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


