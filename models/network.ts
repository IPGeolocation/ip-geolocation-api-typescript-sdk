/* tslint:disable */
/* eslint-disable */
/**
 * IPGeolocation.io - IP intelligence products
 * Ipgeolocation provides a set of APIs to make ip based decisions.
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { NetworkAsn } from './network-asn';
// May contain unused imports in some cases
// @ts-ignore
import type { NetworkCompany } from './network-company';

/**
 * 
 * @export
 * @interface Network
 */
export interface Network {
    /**
     * 
     * @type {NetworkAsn}
     * @memberof Network
     */
    'asn'?: NetworkAsn;
    /**
     * 
     * @type {string}
     * @memberof Network
     */
    'connection_type'?: string;
    /**
     * 
     * @type {NetworkCompany}
     * @memberof Network
     */
    'company'?: NetworkCompany;
}

