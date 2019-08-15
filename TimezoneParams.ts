export class TimezoneParams {
  public timezone: string;
  public latitude: string;
  public longitude: string;
  public ipAddress: string;
  public lang: string;

  constructor() {
    this.timezone = "";
    this.latitude = "1000.0";
    this.longitude = "1000.0";
    this.ipAddress = "";
    this.lang = "en";
  }

  public setTimezone(timezone: string = ""): void {
    this.timezone = timezone;
  }

  public getTimezone(): string {
    return this.timezone;
  }

  public setLocation(
    latitude: string = "1000.0",
    longitude: string = "1000.0"
  ): void {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  public setIPAddress(ipAddress: string = ""): void {
    this.ipAddress = ipAddress;
  }

  public getIPAddress(): string {
    return this.ipAddress;
  }

  public setLang(lang: string = "en"): void {
    this.lang = lang;
  }

  public getLang(): string {
    return this.lang;
  }

  public getLatitude(): string {
    return this.latitude;
  }

  public getLongitude(): string {
    return this.longitude;
  }
}
