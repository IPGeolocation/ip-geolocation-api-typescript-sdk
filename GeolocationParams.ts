export class GeolocationParams  {

    ipAddress: string;
    fields: string;
    excludes: string;
    lang: string;
    ipAddresses: string[];
      
    constructor() {
	    this.ipAddress = "";
        this.fields = "";
        this.excludes = "";
        this.lang = "en";
        this.ipAddresses = [];
    }

    setIPAddress(ipAddress = "") {
        this.ipAddress = ipAddress;
    }

    getIPAddress() {
        return this.ipAddress;
    }

    setFields(fields = "") {
        this.fields = fields;
    }

    getFields() {
        return this.fields;
    }

    setExcludes(excludes = "") {
        this.excludes = excludes;
    }

    getExcludes() {
        return this.excludes;
    }

    setLang(lang = "en") {
        this.lang = lang;
    }

    getLang() {
        return this.lang;
    }

    setIPAddresses(ipAddresses : string[] = []) {
        if(ipAddresses.length > 50) {
            console.log("Max. number of IP addresses cannot be more than 50.");
        } else {
            this.ipAddresses = ipAddresses;
        }
    }

    getIPAddresses() {
        return this.ipAddresses;
    }
}
