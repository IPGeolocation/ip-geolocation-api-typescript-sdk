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
import type { NetworkMinimalAsn } from './network-minimal-asn';
// May contain unused imports in some cases
// @ts-ignore
import type { NetworkMinimalCompany } from './network-minimal-company';

/**
 * 
 * @export
 * @interface NetworkMinimal
 */
export interface NetworkMinimal {
    /**
     * 
     * @type {NetworkMinimalAsn}
     * @memberof NetworkMinimal
     */
    'asn'?: NetworkMinimalAsn;
    /**
     * 
     * @type {NetworkMinimalCompany}
     * @memberof NetworkMinimal
     */
    'company'?: NetworkMinimalCompany;
}

