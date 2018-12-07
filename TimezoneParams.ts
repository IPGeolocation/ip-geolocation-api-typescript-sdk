export class TimezoneParams {

    timezone: string;
    latitude: string;
    longitude: string;
    ipAddress: string;
    lang: string;

    constructor() {
        this.timezone = "";
        this.latitude = "1000.0";
        this.longitude = "1000.0";
        this.ipAddress = "";
        this.lang = "en";
    }

    setTimezone(timezone: string = ""):  void {
        this.timezone = timezone;
    }

    getTimezone(): string {
        return this.timezone;
    }

    setLocation(latitude: string = "1000.0", longitude: string = "1000.0"): void {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    setIPAddress(ipAddress: string = ""): void {
        this.ipAddress = ipAddress;
    }

    getIPAddress(): string {
        return this.ipAddress;
    }

    setLang(lang: string = "en"): void {
        this.lang = lang;
    }

    getLang(): string {
        return this.lang;
    }

    getLatitude(): string {
        return this.latitude;
    }

    getLongitude(): string {
        return this.longitude;
    }
}

