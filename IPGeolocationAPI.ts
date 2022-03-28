import { GeolocationParams } from './GeolocationParams';
import { TimezoneParams } from './TimezoneParams';
import { XMLHttpRequest } from 'xmlhttprequest';
export class IPGeolocationAPI {

    apiKey: string;
    async: boolean;

    constructor(apiKey: string = null, async: boolean = true) {
        this.apiKey = apiKey;
        this.async = async;
    }

    public getGeolocation(callback, geolocationParams: GeolocationParams = null): void {
        if (geolocationParams && geolocationParams.getIPAddresses().length === 0) {
            this.getRequest("ipgeo", this.buildGeolocationUrlParams(this.apiKey, geolocationParams), callback);
        } else {
            const jsonData = JSON.stringify({
                "ips": geolocationParams.getIPAddresses()
            });

            this.postRequest("ipgeo-bulk", this.buildGeolocationUrlParams(this.apiKey, geolocationParams), jsonData, callback);
        }
    }

    public getTimezone(callback, timezoneParams: TimezoneParams = null): void {
        this.getRequest("timezone", this.buildTimezoneUrlParams(this.apiKey, timezoneParams), callback);
    }

    public getUserAgent(callback, uaString: string = null): void {
        var jsonData: string = "{\"uaString\":\"" + uaString + "\"}";
        this.postRequest('user-agent', "apiKey=" + this.apiKey, jsonData, callback);
    }

    public getBulkUserAgent(callback, uaStrings = []): void {
        var jsonData: string = "{\"uaStrings\":[";
        for (let i = 0; i < uaStrings.length; i++) {
            if (i === 0) {
                jsonData = jsonData.concat("\"" + uaStrings[i] + "\"");
            } else {
                jsonData = jsonData.concat(",");
                jsonData = jsonData.concat("\"" + uaStrings[i] + "\"");
            }
        }
        jsonData = jsonData.concat("]}");

        this.postRequest('user-agent-bulk', "apiKey=" + this.apiKey, jsonData, callback);
    }

    public getApiKey() {
        return this.apiKey;
    }

    public isAsync() {
        return this.async;
    }

    private buildGeolocationUrlParams(apiKey: string = null, geolocationParams: GeolocationParams = null): string {
        let urlParams = "";

        if (apiKey) {
            urlParams = urlParams.concat("apiKey=", apiKey)
        }

        if (geolocationParams) {
            if (geolocationParams.getIPAddress()) {
                if (urlParams) {
                    urlParams = urlParams.concat("&");
                }
                urlParams = urlParams.concat("ip=", geolocationParams.getIPAddress());
            }

            if (geolocationParams.getFields()) {
                if (urlParams) {
                    urlParams = urlParams.concat("&");
                }
                urlParams = urlParams.concat("fields=", geolocationParams.getFields());
            }

            if (geolocationParams.getExcludes()) {
                if (urlParams) {
                    urlParams = urlParams.concat("&");
                }
                urlParams = urlParams.concat("excludes=", geolocationParams.getExcludes());
            }

            if (geolocationParams.getLang()) {
                if (urlParams) {
                    urlParams = urlParams.concat("&");
                }
                urlParams = urlParams.concat("lang=", geolocationParams.getLang());
            }

            if (geolocationParams.isIncludeHostname() || geolocationParams.isIncludeHostnameFallbackLive() || geolocationParams.isIncludeLiveHostname() || geolocationParams.isIncludeSecurity() || geolocationParams.isIncludeUserAgent()) {
                var val: string = "";
                var includeHost = false;
                if (geolocationParams.isIncludeHostname()) {
                    val = "hostname";
                    includeHost = true;
                } else if (geolocationParams.isIncludeHostnameFallbackLive()) {
                    val = "hostnameFallbackLive";
                    includeHost = true;
                } else if (geolocationParams.isIncludeLiveHostname()) {
                    val = "liveHostname";
                    includeHost = true;
                }
                if (geolocationParams.isIncludeSecurity()) {
                    if (includeHost) {
                        val = val + ",security";
                    } else {
                        val = "security";
                    }
                }
                if (geolocationParams.isIncludeUserAgent()) {
                    if (includeHost || geolocationParams.isIncludeSecurity()) {
                        val = val + ",useragent";
                    } else {
                        val = "useragent";
                    }
                }
                if (urlParams) {
                    urlParams = urlParams.concat('&');
                }
                urlParams = urlParams.concat('include=', val);
            }
        }
        return urlParams;
    }

    private buildTimezoneUrlParams(apiKey: string = null, timezoneParams: TimezoneParams = null) {
        let urlParams = "";

        if (apiKey) {
            urlParams = urlParams.concat("apiKey=", apiKey);
        }

        if (timezoneParams) {
            if (timezoneParams.getIPAddress()) {
                if (urlParams) {
                    urlParams = urlParams.concat("&");
                }
                urlParams = urlParams.concat("ip=", timezoneParams.getIPAddress());
            }

            if (timezoneParams.getTimezone()) {
                if (urlParams) {
                    urlParams = urlParams.concat("&");
                }
                urlParams = urlParams.concat("tz=", timezoneParams.getTimezone());
            }

            if (timezoneParams.getLocation()) {
                if (urlParams) {
                    urlParams = urlParams.concat('&');
                }
    
                urlParams = urlParams.concat('location=', timezoneParams.getLocation());
            }
    
            if (timezoneParams.getLatitude() >= -90 && timezoneParams.getLatitude() <= 90 && timezoneParams.getLongitude() >= -180 && timezoneParams.getLongitude() <= 180) {
                if (urlParams) {
                    urlParams = urlParams.concat("&");
                }
                urlParams = urlParams.concat("lat=" + timezoneParams.getLatitude() + "&long=" + timezoneParams.getLongitude());
            }

            if (timezoneParams.getLang()) {
                if (urlParams) {
                    urlParams = urlParams.concat("&");
                }
                urlParams = urlParams.concat("lang=", timezoneParams.getLang());
            }
        }
        return urlParams;
    }

    private getRequest(subUrl: string, urlParams: string = "", callback): void {
        let jsonData = {};
        let xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                if (this.status == 0) {
                    jsonData = {
                        "message": "Internet is not connected!"
                    };
                } else {
                    jsonData = JSON.parse(this.responseText);
                }

                if (callback && typeof (callback) === typeof (Function)) {
                    callback(jsonData);
                } else {
                    console.error(`Passed callback '${callback}' is not a valid Function.`)
                }
            }
        });

        xhr.withCredentials = true;
        xhr.open("GET", "https://api.ipgeolocation.io/".concat(subUrl, "?", urlParams, ""), this.async, null, null);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.send(null);
    }

    private postRequest(subUrl: string, urlParams: string = "", requestData: {} = {}, callback): void {
        let jsonData = {};
        let xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                if (this.status == 0) {
                    jsonData = {
                        "message": "Internet is not connected!"
                    };
                } else {
                    jsonData = JSON.parse(this.responseText);
                }

                if (callback && typeof (callback) === typeof (Function)) {
                    callback(jsonData);
                } else {
                    console.error(`Passed callback '${callback}' is not a valid Function.`)
                }
            }
        });

        xhr.withCredentials = true;
        xhr.open("POST", "https://api.ipgeolocation.io/".concat(subUrl, "?", urlParams, ""), this.async, null, null);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(requestData);
    }
}















