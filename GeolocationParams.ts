export class GeolocationParams {

    ipAddress: string;
    ipAddresses: string[];
    lang: string;
    fields: string;
    excludes: string;
    includeHostname: boolean;
    includeHostnameFallbackLive: boolean;
    includeLiveHostname: boolean;
    includeSecurity: boolean;
    includeUserAgent: boolean;

    constructor() {
        this.ipAddress = "";
        this.ipAddresses = [];
        this.lang = "en";
        this.fields = "";
        this.excludes = "";
        this.includeHostname = false;
        this.includeHostnameFallbackLive = false;
        this.includeLiveHostname = false;
        this.includeSecurity = false;
        this.includeUserAgent = false;
    }

    setIPAddress(ipAddress: string = ""): void {
        this.ipAddress = ipAddress;
    }

    getIPAddress(): string {
        return this.ipAddress;
    }

    setIPAddresses(ipAddresses: string[] = []): void {
        if (ipAddresses.length > 50) {
            console.log("Max. number of IP addresses cannot be more than 50.");
        } else {
            this.ipAddresses = ipAddresses;
        }
    }

    getIPAddresses(): string[] {
        return this.ipAddresses;
    }

    setLang(lang: string = "en"): void {
        this.lang = lang;
    }

    getLang(): string {
        return this.lang;
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

    setIncludeHostname(hostname: boolean = false): void {
        this.includeHostname = hostname;
    }

    isIncludeHostname(): boolean {
        return this.includeHostname;
    }

    setIncludeHostnameFallbackLive(hostnameFallbackLive: boolean = false): void {
        this.includeHostnameFallbackLive = hostnameFallbackLive;
    }

    isIncludeHostnameFallbackLive(): boolean {
        return this.includeHostnameFallbackLive;
    }

    setIncludeLiveHostname(liveHostname: boolean = false): void {
        this.includeLiveHostname = liveHostname;
    }

    isIncludeLiveHostname(): boolean {
        return this.includeLiveHostname;
    }


    setIncludeSecurity(security: boolean = false): void {
        this.includeSecurity = security;
    }

    isIncludeSecurity(): boolean {
        return this.includeSecurity;
    }

    setIncludeUserAgent(userAgent: boolean = false): void {
        this.includeUserAgent = userAgent;
    }

    isIncludeUserAgent(): boolean {
        return this.includeUserAgent;
    }

}
