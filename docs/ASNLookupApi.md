# ASNLookupApi

All URIs are relative to *https://api.ipgeolocation.io/v2*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAsnInfo**](#getasninfo) | **GET** /asn | |

# **getAsnInfo**
> ASNResponse getAsnInfo()

ASN API provides comprehensive details for an ASN including the as name,  organization name, the country of registration, associated domain, and its  type (ISP, host provider, or business). The API also shows the allocation  date of provided ASN and if it is currently allocated or not. It also contains  the routing information including peering, upstreams, and downstreams to help  understand the relationship between different ASNs.  Example Use Cases:  - Looking up ASN information for an IP address (e.g., `GET /asn?ip=8.8.8.8`)  - Retrieving ASN information for a specific ASN number (e.g., `GET /asn?asn=12345`)  - Getting peering relationships for an ASN (e.g., `GET /asn?asn=12345&include=peers`) 


### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ip** | [**string**] | query parameter \&#39;ip\&#39;. | (optional) defaults to undefined|
| **asn** | [**number**] | query paramter \&#39;asn\&#39;. | (optional) defaults to undefined|
| **include** | [**string**] | This parameter can have four options: a) peers b) downstreams c) upstreams d) routes e) whois_response. You may add any of them in comma-separated way. In order to get the ASN details with peering data, pass peers string in the include parameter like mentioned below. | (optional) defaults to undefined|
| **excludes** | [**string**] | You can exclude fields from the response according to you requirement with the exception of ip field. For example, you want to remove date_allocated and allocation_status from api response, you can put the keys in excludes parameter like this. | (optional) defaults to undefined|
| **fields** | [**string**] | You can filter out only those fields which you want to see in the response by using the fields parameter. To retrieve only the AS organization, its country and downstreams in api response, you can put the keys in fields parameter like this. API will combine these fields with the default ASN response. Note: Parameters &#x60;peers, downstreams, upstreams, routes, whois_response&#x60; can be used in both &#x60;include&#x60; , and &#x60;fields&#x60;. If you use include and fields at the same time, fields parameter will be considered only. | (optional) defaults to undefined|


### Return type

**ASNResponse**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**400** | Bad Request – Possible reasons include:   - If the provided IPv4, IPv6 address, or ASN is invalid.    - If special character(s) ( ) [ ] { } | ^ &#x60; is passed in the API URL either as paramter or its value. Specially in case of API key.        |  -  |
|**401** | Unauthorized – Possible reasons include:   - Missing or invalid API key   - Account unverified, locked, or disabled   - Accessing API with an unauthorized key   - Subscription expired or downgraded   - If your account has been disabled or locked to use by the admin due to abuse or illegal activity.   - When the request to IP ASN API is made using API key for a database subscription   - When the request to IP ASN API is made on the \&#39;paused\&#39; subscription.   - If you’re making API requests after your subscription trial has been expired.   - If your active until date has passed and you need to upgrade your account.  |  -  |
|**404** | Not Found – Possible reasons include:   - If the IPv4, IPv6, or ASN name does not exist in our database.    - If the IPv4, IPv6, or ASN  is passed as a path variable, instead of url parameter as ip&#x3D;.      - If the wrong endpoint is called, that does not exist in our API.  |  -  |
|**405** | Method Not Allowed – Only GET is allowed for &#x60;/asn&#x60; endpoint |  -  |
|**429** | Too Many Requests – Possible reasons include:   - If the API usage limit has reached for the free subscriptions, or paid subscriptions with the status \&#39;past due\&#39;, \&#39;deleted\&#39; or \&#39;trial expired\&#39;.    - If the surcharge API usage limit has reached against the subscribed plan.     |  -  |
|**499** | Client Closed Request – Client terminated connection before completion |  -  |
|**500** | Internal Server Error – Something went wrong on our end |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

