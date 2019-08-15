import { GeolocationParams } from "./GeolocationParams";
import { TimezoneParams } from "./TimezoneParams";

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

export class IPGeolocationAPI {
  private static buildGeolocationUrlParams(
    apiKey: string = "",
    geolocationParams: GeolocationParams | null = null
  ): string {
    let urlParams = "";

    if (apiKey) {
      urlParams = urlParams.concat("apiKey=", apiKey);
    }

    if (geolocationParams) {
      if (geolocationParams.getIPAddress()) {
        if (urlParams) {
          urlParams = urlParams.concat("&");
        }
        urlParams = urlParams.concat("ip=", geolocationParams.getIPAddress());
      }

      if (geolocationParams.getFields()) {
        if (urlParams) {
          urlParams = urlParams.concat("&");
        }
        urlParams = urlParams.concat("fields=", geolocationParams.getFields());
      }

      if (geolocationParams.getExcludes()) {
        if (urlParams) {
          urlParams = urlParams.concat("&");
        }
        urlParams = urlParams.concat(
          "excludes=",
          geolocationParams.getExcludes()
        );
      }

      if (geolocationParams.getLang()) {
        if (urlParams) {
          urlParams = urlParams.concat("&");
        }
        urlParams = urlParams.concat("lang=", geolocationParams.getLang());
      }
    }
    return urlParams;
  }

  private static buildTimezoneUrlParams(
    apiKey: string = "",
    timezoneParams: TimezoneParams | null = null
  ) {
    let urlParams = "";

    if (apiKey) {
      urlParams = urlParams.concat("apiKey=", apiKey);
    }

    if (timezoneParams) {
      if (timezoneParams.getIPAddress()) {
        if (urlParams) {
          urlParams = urlParams.concat("&");
        }
        urlParams = urlParams.concat("ip=", timezoneParams.getIPAddress());
      }

      if (timezoneParams.getTimezone()) {
        if (urlParams) {
          urlParams = urlParams.concat("&");
        }
        urlParams = urlParams.concat("tz=", timezoneParams.getTimezone());
      }

      if (
        timezoneParams.getLatitude() !== "1000.0" &&
        timezoneParams.getLongitude() !== "1000.0"
      ) {
        if (urlParams) {
          urlParams = urlParams.concat("&");
        }
        urlParams = urlParams.concat(
          "lat=",
          timezoneParams.getLatitude(),
          "&long=",
          timezoneParams.getLongitude()
        );
      }

      if (timezoneParams.getLang()) {
        if (urlParams) {
          urlParams = urlParams.concat("&");
        }
        urlParams = urlParams.concat("lang=", timezoneParams.getLang());
      }
    }
    return urlParams;
  }

  public apiKey: string;
  public async: boolean;

  constructor(apiKey: string = "", async: boolean = true) {
    this.apiKey = apiKey;
    this.async = async;
  }

  public getApiKey() {
    return this.apiKey;
  }

  public isAsync() {
    return this.async;
  }

  public getGeolocation(
    callback: any,
    geolocationParams: GeolocationParams | null = null
  ): void {
    if (geolocationParams && geolocationParams.getIPAddresses().length === 0) {
      this.getRequest(
        "ipgeo",
        IPGeolocationAPI.buildGeolocationUrlParams(
          this.apiKey,
          geolocationParams
        ),
        callback
      );
    } else {
      const jsonData = JSON.stringify({
        ips: geolocationParams && geolocationParams.getIPAddresses()
      });

      this.postRequest(
        "ipgeo-bulk",
        IPGeolocationAPI.buildGeolocationUrlParams(
          this.apiKey,
          geolocationParams
        ),
        jsonData,
        callback
      );
    }
  }

  public getTimezone(
    callback: any,
    timezoneParams: TimezoneParams | null = null
  ): void {
    this.getRequest(
      "timezone",
      IPGeolocationAPI.buildTimezoneUrlParams(this.apiKey, timezoneParams),
      callback
    );
  }

  private getRequest(
    subUrl: string,
    urlParams: string = "",
    callback: any
  ): void {
    let jsonData = {};
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function() {
      // @ts-ignore
      const { responseText, status, readyState } = this;

      if (readyState === 4) {
        if (status == 0) {
          jsonData = {
            message: "Internet is not connected!"
          };
        } else {
          jsonData = JSON.parse(responseText);
        }

        if (callback && typeof callback === typeof Function) {
          callback(jsonData);
        } else {
          // tslint:disable-next-line:no-console
          console.error(
            `Passed callback '${callback}' is not a valid Function.`
          );
        }
      }
    });

    xhr.withCredentials = true;
    xhr.open(
      "GET",
      "https://api.ipgeolocation.io/".concat(subUrl, "?", urlParams, ""),
      this.async,
      null,
      null
    );
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send(null);
  }

  private postRequest(
    subUrl: string,
    urlParams: string = "",
    requestData: {} = {},
    callback: any
  ): void {
    let jsonData = {};
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function() {
      // @ts-ignore
      const { responseText, status, readyState } = this;

      if (readyState === 4) {
        if (status === 0) {
          jsonData = {
            message: "Internet is not connected!"
          };
        } else {
          jsonData = JSON.parse(responseText);
        }

        if (callback && typeof callback === typeof Function) {
          callback(jsonData);
        } else {
          // tslint:disable-next-line:no-console
          console.error(
            `Passed callback '${callback}' is not a valid Function.`
          );
        }
      }
    });

    xhr.withCredentials = true;
    xhr.open(
      "POST",
      "https://api.ipgeolocation.io/".concat(subUrl, "?", urlParams, ""),
      this.async,
      null,
      null
    );
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(requestData);
  }
}
