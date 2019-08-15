export class GeolocationParams {
  public ipAddress: string;
  public fields: string;
  public excludes: string;
  public lang: string;
  public ipAddresses: string[];

  constructor() {
    this.ipAddress = "";
    this.fields = "";
    this.excludes = "";
    this.lang = "en";
    this.ipAddresses = [];
  }

  public setIPAddress(ipAddress: string = ""): void {
    this.ipAddress = ipAddress;
  }

  public getIPAddress(): string {
    return this.ipAddress;
  }

  public setFields(fields: string = ""): void {
    this.fields = fields;
  }

  public getFields(): string {
    return this.fields;
  }

  public setExcludes(excludes: string = ""): void {
    this.excludes = excludes;
  }

  public getExcludes(): string {
    return this.excludes;
  }

  public setLang(lang: string = "en"): void {
    this.lang = lang;
  }

  public getLang(): string {
    return this.lang;
  }

  public setIPAddresses(ipAddresses: string[] = []): void {
    if (ipAddresses.length > 50) {
      // tslint:disable-next-line:no-console
      console.log("Max. number of IP addresses cannot be more than 50.");
    } else {
      this.ipAddresses = ipAddresses;
    }
  }

  public getIPAddresses(): string[] {
    return this.ipAddresses;
  }
}
