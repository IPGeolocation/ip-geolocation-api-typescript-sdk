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

    public getApiKey() {
        return this.apiKey;
    }

    public isAsync() {
        return this.async;
    }

    public getGeolocation(callback, geolocationParams: GeolocationParams = null): void {
        if(geolocationParams && geolocationParams.getIPAddresses().length === 0) {
            this.getRequest("ipgeo", this.buildGeolocationUrlParams(this.apiKey, geolocationParams), callback);
        } else {
            const jsonData = JSON.stringify({
                "ips": geolocationParams.getIPAddresses()
            });

            this.postRequest("ipgeo-bulk", this.buildGeolocationUrlParams(this.apiKey, geolocationParams), jsonData, callback);
        }
    }

    private buildGeolocationUrlParams(apiKey: string = null, geolocationParams: GeolocationParams = null): string {
        let urlParams = "";

        if(apiKey) {
            urlParams = urlParams.concat("apiKey=", apiKey)
        }

        if(geolocationParams) {
            if(geolocationParams.getIPAddress()) {
                if(urlParams) {
                    urlParams = urlParams.concat("&");
                }
                urlParams = urlParams.concat("ip=", geolocationParams.getIPAddress());
            }
    
            if(geolocationParams.getFields()) {
                if(urlParams) {
                    urlParams = urlParams.concat("&");
                }
                urlParams = urlParams.concat("fields=", geolocationParams.getFields());
            }
        
            if(geolocationParams.getExcludes()) {
                if(urlParams) {
                    urlParams = urlParams.concat("&");
                }
                urlParams = urlParams.concat("excludes=", geolocationParams.getExcludes());
            }
        
            if(geolocationParams.getLang()) {
                if(urlParams) {
                    urlParams = urlParams.concat("&");
                }
                urlParams = urlParams.concat("lang=", geolocationParams.getLang());
            }
        }
        return urlParams;
    }
     
    public getTimezone(callback, timezoneParams: TimezoneParams = null): void {
        this.getRequest("timezone", this.buildTimezoneUrlParams(this.apiKey, timezoneParams), callback);
    }

    private buildTimezoneUrlParams(apiKey: string = null, timezoneParams: TimezoneParams = null) {
        let urlParams = "";

        if(apiKey) {
            urlParams = urlParams.concat("apiKey=", apiKey);
        }

        if(timezoneParams) {
            if(timezoneParams.getIPAddress()) {
                if(urlParams) {
                    urlParams = urlParams.concat("&");
                }
                urlParams = urlParams.concat("ip=", timezoneParams.getIPAddress());
            }

            if(timezoneParams.getTimezone()) {
                if(urlParams) {
                    urlParams = urlParams.concat("&");
                }
                urlParams = urlParams.concat("tz=", timezoneParams.getTimezone());
            }

            if(timezoneParams.getLatitude() !== "1000.0" && timezoneParams.getLongitude() !== "1000.0") {
                if(urlParams) {
                    urlParams = urlParams.concat("&");
                }
                urlParams = urlParams.concat("lat=", timezoneParams.getLatitude(), "&long=", timezoneParams.getLongitude());
            }
        
            if(timezoneParams.getLang()) {
                if(urlParams) {
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
                if (this.status == 0){
                    jsonData = {
                        "message": "Internet is not connected!"
                    };
                } else {
                    jsonData = JSON.parse(this.responseText);
                }

                if (callback && typeof(callback) === typeof(Function)) {
                    callback(jsonData);
                } else {
                    console.error(`Passed callback '${callback}' is not a valid Function.`)
                }
            }
        });

        xhr.withCredentials = true;
        xhr.open("GET", "https://api.ipgeolocation.io/".concat(subUrl, "?", urlParams, ""), this.async);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.send(null);
    }

    private postRequest(subUrl: string, urlParams: string = "", requestData: {} = {}, callback): void {
        let jsonData = {}; 
        let xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                if (this.status == 0){
                    jsonData = {
                        "message": "Internet is not connected!"
                    };
                } else {
                      jsonData = JSON.parse(this.responseText);
                }

	            if (callback && typeof(callback) === typeof(Function)) {
		            callback(jsonData);
		        } else {
                    console.error(`Passed callback '${callback}' is not a valid Function.`)
                }
            }
        });
        
        xhr.withCredentials = true;
        xhr.open("POST", "https://api.ipgeolocation.io/".concat(subUrl, "?", urlParams, ""), this.async);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(requestData);        
    }
}















