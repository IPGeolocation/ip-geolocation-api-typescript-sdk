import {GeolocationParams} from './GeolocationParams';
import {TimezoneParams} from './TimezoneParams';
import {XMLHttpRequest} from 'xmlhttprequest';
export class IPGeolocationAPI {

    apiKey: string;

    constructor(apiKey: string = null) {
        this.apiKey = apiKey;
    }

    public getApiKey() {
        return this.apiKey;
    }

    public getGeolocation(params : GeolocationParams = null, callback) {
        if(params && params.getIPList())
        { return this.postRequest("ipgeo-bulk", params, this.apiKey, callback);
         }else {
          return this.getRequest("ipgeo", this.buildGeolocationUrlParams(params, this.apiKey), callback);
         }
    }
     
    public getTimezone(params : TimezoneParams = null, callback) {
        return this.getRequest("timezone", this.buildTimezoneUrlParams(params, this.apiKey), callback);
    }

    private buildTimezoneUrlParams(params=null, apiKey="") {
    var urlParams = "apiKey=" + apiKey;

    if(params != null) {
        var param = params.getIP();
        if(param && param != "") {
            urlParams = urlParams + "&ip=" + param;
        }

        param = params.getTimezone();
        if(param && param != "") {
            urlParams = urlParams + "&tz=" + param;
        }

        var latitude = params.getLatitude();
        var longitude = params.getLongitude();
        if(latitude && latitude != 1000.0 && longitude && longitude != 1000.0) {
            urlParams = urlParams + "&lat=" + latitude + "&long=" + longitude;
        }
    }
    return urlParams;
    }

    private buildGeolocationUrlParams(params=null, apiKey="") {
        
        var urlParams = "apiKey=" + apiKey;
        if(params != null) {
            var param = params.getIP();
           
            if(param && param != "") {
                urlParams = urlParams + "&ip=" + param;
            }

            param = params.getFields();
        
            if(param && param != "") {
                urlParams = urlParams + "&fields=" + param;
            }
        }

        return urlParams;
    }
    

    private getRequest(subUrl = "", params = "", callback){

    var jsonData = null;
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {

        if(this.status == 0){
            jsonData = {
            "message": "Internet is not connected!"
            };
        }else{
              jsonData = JSON.parse(this.responseText);
        }

        if (callback && typeof(callback) === typeof(Function)) {
	        callback(jsonData);
	    }

    }
    });
    xhr.open("GET", "https://api.ipgeolocation.io/"+subUrl+"?"+params+"", true);
    xhr.send(data);
    return jsonData;
    
    }

    private postRequest(subUrl = "", params : GeolocationParams = null, apiKey="", callback){

        var jsonData = null; 
        var data = JSON.stringify({
          "ips": params.getIPList()
        });
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                if(this.status == 0){
                    jsonData = {
                    "message": "Internet is not connected!"
                    };
                }else{
                      jsonData = JSON.parse(this.responseText);
                }

	           if (callback && typeof(callback) === typeof(Function)) {
		        callback(jsonData);
		        }

            }
        });
        xhr.open("POST", "https://api.ipgeolocation.io/"+subUrl+"?apiKey="+apiKey+"", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);

        return jsonData;
        
    }

}















