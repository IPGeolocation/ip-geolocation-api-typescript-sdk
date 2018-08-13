import {GeolocationParams} from './GeolocationParams';
import {TimezoneParams} from './TimezoneParams';
import {XMLHttpRequest} from './node_modules/xmlhttprequest'
export class IPGeolocationAPI {

    apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    public getApiKey() {
        return this.apiKey;
    }

    public getGeolocation(params : GeolocationParams = null) {
        if(params.getIps())
        { return this.postRequest("ipgeo-bulk", params, this.apiKey);
         }else{
          return this.getRequest("ipgeo", this.buildGeolocationUrlParams(params, this.apiKey));
         }
    }
     
    public getTimezone(params : TimezoneParams = null) {
        return this.getRequest("timezone", this.buildTimezoneUrlParams(params, this.apiKey));
    }

    
    private buildTimezoneUrlParams(params=null, apiKey="") {
    var urlParams = "apiKey=" + apiKey;

    if(params != null) {
        var param = params.getIp();
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
            var param = params.getIp();
           
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
    

    private getRequest(subUrl = "", params = ""){

    var jsonData = null;
    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
    
                jsonData = JSON.parse(this.responseText);
    }
    });
    console.log("https://api.ipgeolocation.io/"+subUrl+"?"+params+"");
    xhr.open("GET", "https://api.ipgeolocation.io/"+subUrl+"?"+params+"", false);
    xhr.send(data);
    
    return jsonData;
    
    }

    private postRequest(subUrl = "", params : GeolocationParams = null, apiKey=""){

        var jsonData = null; 
        var data = JSON.stringify({
          "ips": params.getIps()
        });
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
                    jsonData = JSON.parse(this.responseText);
        }
        });
        xhr.open("POST", "https://api.ipgeolocation.io/"+subUrl+"?apiKey="+apiKey+"", false);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(data);

        return jsonData;
        
    }

}















