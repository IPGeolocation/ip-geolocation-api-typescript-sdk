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

    setIPAddress(ipAddress: string = ""): void {
        this.ipAddress = ipAddress;
    }

    getIPAddress(): string {
        return this.ipAddress;
    }

    setFields(fields: string = ""): void {
        this.fields = fields;
    }

    getFields(): string {
        return this.fields;
    }

    setExcludes(excludes: string = ""): void {
        this.excludes = excludes;
    }

    getExcludes(): string {
        return this.excludes;
    }

    setLang(lang: string = "en"): void {
        this.lang = lang;
    }

    getLang(): string {
        return this.lang;
    }

    setIPAddresses(ipAddresses : string[] = []): void {
        if(ipAddresses.length > 50) {
            console.log("Max. number of IP addresses cannot be more than 50.");
        } else {
            this.ipAddresses = ipAddresses;
        }
    }

    getIPAddresses(): string[] {
        return this.ipAddresses;
    }
}
