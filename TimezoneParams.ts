export class TimezoneParams {

    timezone :string;
    latitude :number;
    longitude :number;
    ipAddress :string;
    lang: string;

    constructor() {
        this.timezone = "";
        this.latitude = 1000.0;
        this.longitude = 1000.0;
        this.ipAddress = "";
        this.lang = "en";
    }

    setTimezone(timezone = "") {
        this.timezone = timezone;
    }

    getTimezone() {
        return this.timezone;
    }

    setLocation(latitude = 1000.0, longitude = 1000.0) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    setIPAddress(ipAddress = "") {
        this.ipAddress = ipAddress;
    }

    getIPAddress() {
        return this.ipAddress;
    }

    setLang(lang = "en") {
        this.lang = lang;
    }

    getLang() {
        return this.lang;
    }

    getLatitude() {
        return this.latitude;
    }

    getLongitude() {
        return this.longitude;
    }

}

