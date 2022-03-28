export class TimezoneParams {

    ipAddress: string;
    timezone: string;
    lang: string;
    location: string;
    latitude: number;
    longitude: number;

    constructor() {
        this.ipAddress = "";
        this.timezone = "";
        this.lang = "en";
        this.location = "";
        this.latitude = 1000.0;
        this.longitude = 1000.0;
    }

    setIPAddress(ipAddress: string = ""): void {
        this.ipAddress = ipAddress;
    }

    getIPAddress(): string {
        return this.ipAddress;
    }

    setTimezone(timezone: string = ""): void {
        this.timezone = timezone;
    }

    getTimezone(): string {
        return this.timezone;
    }

    setLang(lang: string = "en"): void {
        this.lang = lang;
    }

    getLang(): string {
        return this.lang;
    }

    setLocation(location: string = ""): void {
        this.location = location;
    }

    getLocation(): string {
        return this.location;
    }

    setCoordinates(la: number = 1000.0, lo: number = 1000.0): void {
        if ((la >= -90 && la <= 90) && (lo >= -180 && lo <= 180)) {
            this.latitude = la;
            this.longitude = lo;
        }
    }

    getLatitude(): number {
        return this.latitude;
    }

    getLongitude(): number {
        return this.longitude;
    }
}

