export class GeolocationParams  {

      ip: string;
      fields: string;
      ips: any;
      
    constructor() {
	 this.ip = "";
	 this.fields = "";
     this.ips = "";
    }

    setIp(ip = "") {
      this.ip = ip;
    }

    getIp() {
        return this.ip;
    }

    setFields(fields = "") {
        this.fields = fields;
    }

    getFields() {
        return this.fields;
    }

    setIps(ips : any = null) {
        if(ips.length > 50) {
            console.log("Max. number of IP addresses cannot be more than 50.");
        } else {
            this.ips = ips;
        }
    }

    getIps() {
        return this.ips;
    }
}