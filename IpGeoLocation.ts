export class IpGeoLocation {
    apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    public timezoneByTz(tz="") {
    this.getRequest("timezone", this.apiKey,"","",tz);
    }

    public timezoneByIp(ip="") {
    this.getRequest("timezone", this.apiKey,"",ip,"");
    }

    public timezoneByApikey() {
    this.getRequest("timezone", this.apiKey,"","","");
    }

    public ipgeoByFieldsAndIp(fields="" ,ip="") {
    this.getRequest("ipgeo", this.apiKey, fields, ip,"");
    }
    
    public ipgeoByFields = function(fields="") {
    this.getRequest("ipgeo", this.apiKey, fields, "","");
    }
    
    public ipgeoByIp(ip="") {
    this.getRequest("ipgeo", this.apiKey, "", ip,"");
    }
         
    public ipgeoByApikey(){
    this.getRequest("ipgeo", this.apiKey,"","","");
    }

    public  ipgeoByIps(ips=""){
    this.postRequest("ipgeo-bulk", this.apiKey, ips);
    }

    private getRequest(subUrl=null, apiKey="",fields="",ip="",tz=""){
        var URL = "";
        if(apiKey){
            URL = subUrl;
            URL = URL + ("?apiKey=" + apiKey);
            if(fields){
            URL = URL + "&fields=";
            URL = URL + fields;
            }
            if(ip){
            URL = URL + "&ip=";
            URL = URL + ip;
            }
                if(tz){
            URL = URL + "&tz=";
            URL = URL + tz;
            }
        
            }

        var data = null;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var data = JSON.parse(this.responseText);
            console.log(data);
            return data;
        }
        });
        xhr.open("GET", "https://api.ipgeolocation.io/"+URL+"");
        xhr.send(data);
    }

    private postRequest(subUrl=null, apiKey="", ips=""){

        var data = JSON.stringify({
          "ips": ips
        });
        
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
                    var data = JSON.parse(this.responseText);
                    console.log(data);
                    return data;
          }
        });
        
        xhr.open("POST", "https://api.ipgeolocation.io/"+subUrl+"?apiKey="+apiKey+"");
        xhr.setRequestHeader("Content-Type", "application/json");
        
        xhr.send(data);
        
        }

}
