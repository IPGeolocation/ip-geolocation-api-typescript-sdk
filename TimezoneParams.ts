export class TimezoneParams {
    timezone: string;
    ip: string;
    latitude: number;
    longitude: number;

    constructor() {
        this.timezone = "";
        this.ip = "";
        this.latitude = 1000.0;
        this.longitude = 1000.0;
    }

    setTimezone(timezone = "") {
        this.timezone = timezone;
    }

    getTimezone() {
        return this.timezone;
    }

    setIp(ip = "") {
        this.ip = ip;
    }

    getIp() {
        return this.ip;
    }

    setLocation(latitude = 0, longitude = 0) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    getLatitude() {
        return this.latitude;
    }

    getLongitude() {
        return this.longitude;
    }
}
