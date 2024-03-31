import { GeolocationParams } from './GeolocationParams';
import { TimezoneParams } from './TimezoneParams';
import { XMLHttpRequest } from 'xmlhttprequest';

export class IPGeolocationAPI {
    apiKey: string | null;
    async: boolean;

    constructor(apiKey: string | null = null, async: boolean = true) {
        this.apiKey = apiKey;
        this.async = async;
    }

    public getGeolocation(callback: (json: any) => any, geolocationParams: GeolocationParams | null = null): void {
        if (geolocationParams && geolocationParams.getIPAddresses().length === 0) {
            if (this.apiKey) {
                this.getRequest("ipgeo", this.buildGeolocationUrlParams(this.apiKey, geolocationParams), callback);
            } else {
                throw new Error('API Key invalid');
            }
        } else {
            const jsonData = JSON.stringify({
                "ips": geolocationParams!.getIPAddresses()
            });

            if (this.apiKey && geolocationParams) {
                this.postRequest("ipgeo-bulk", this.buildGeolocationUrlParams(this.apiKey, geolocationParams), jsonData, callback);
            }
        }
    }

    public getTimezone(callback: (json: any) => any, timezoneParams: TimezoneParams | null = null): void {
        if (this.apiKey && timezoneParams) {
            this.getRequest("timezone", this.buildTimezoneUrlParams(this.apiKey, timezoneParams), callback);
        } else {
            throw new Error('You need to provide a API Key valid or your Timezone is invalid');
        }
    }

    public getUserAgent(callback: (json: any) => any, uaString: string | null = null): void {
        var jsonData: string = JSON.stringify({
            "uaString": uaString
        });

        if (this.apiKey) {
            this.postRequest('user-agent', "apiKey=" + this.apiKey, jsonData, callback);
        } else {
            throw new Error('You need to provide a API Key');
        }
    }

    public getBulkUserAgent(callback: (json: any) => any, uaStrings = []): void {
        var jsonData: string = JSON.stringify({
            "uaStrings": uaStrings
        });

        this.postRequest('user-agent-bulk', "apiKey=" + this.apiKey, jsonData, callback);
    }

    public getApiKey() {
        return this.apiKey;
    }

    public isAsync() {
        return this.async;
    }

    private buildGeolocationUrlParams(apiKey: string | null = null, geolocationParams: GeolocationParams | null = null): string {
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

    private buildTimezoneUrlParams(apiKey: string | null = null, timezoneParams: TimezoneParams | null = null) {
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

    private getRequest(subUrl: string, urlParams: string = "", callback: (json: any) => any): void {
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

                if (callback) {
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

    private postRequest(subUrl: string, urlParams: string = "", requestData: {} = {}, callback: (json: any) => any): void {
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

                if (callback) {
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
        xhr.send(requestData as XMLHttpRequestBodyInit);
    }
}















