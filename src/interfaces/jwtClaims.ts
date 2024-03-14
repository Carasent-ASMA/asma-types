//import type { roles_enum, feature_names_enum } from "asma-genql-directory/lib"

//type roles_enum = 'RECIPIENT' | 'SUPER_USER' | 'THERAPIST' | 'USER'
// type feature_names_enum =
//     | 'autoImportableQnr'
//     | 'dashboardTraceability'
//     | 'ordersOverviewOnSelectedRecipientsForQnr'
//     | 'predefinedUserForQnr'
//     | 'rejectableQnr'
//     | 'signByTherapistDocument'
//     | 'test'
//
/**
 * R roles_enum
 */
export interface IBaseJwtClaims<R extends string,J extends string = 'ADCURIS'|'ADOPUS'|'UNKNOWN'> {
    user_id: string
    role: R
    journal: J
    subdomain: string
    genesis_set: string
    customer_id: string
    name: string
    journal_user_id?: string
    vt?: number
    exp?: number
}

export interface IAdminJwtClaims<R extends string,F extends string> extends ITherapistOrSuperUserJwtClaims<R, F> {}
/**
 * R roles_enum
 */
export interface IRecipientJwtClaims<R extends string> extends IBaseJwtClaims<R> {
    access_level: 1 | 2 | 3 | 4
    related_customers: string
    identity: string
    srv_urls: ISrvUrls
}
/**
 * R roles_enum
 * F feature_names_enum
 */
export interface ITherapistOrSuperUserJwtClaims<R extends string,F extends string = any> extends IBaseJwtClaims<R> {
    region: string
    brukerBrukerNavn?: string
    services: IService
    features: F[]
    srv_urls: ISrvUrls
}
export interface IService {
    [key: string]: string[]
}

export interface ISrvUrls {
    [key: string]: string
}

export interface IAiLearningJwtClaims<R extends string> extends IBaseJwtClaims<R> {
    region: string
}
/**
 *  R roles_enum 
 */
export function isRecipientJwtClaims<R extends string>(claims?: IBaseJwtClaims<R>): claims is IRecipientJwtClaims<R> {
    return claims?.role.toUpperCase() === 'RECIPIENT'
}
/**
 * 
 * @param claims R roles_enum
 * F feature_names_enum
 * @returns 
 */
export function isTherapistJwtClaims<R extends string, F extends string>(claims?: IBaseJwtClaims<R>): claims is ITherapistOrSuperUserJwtClaims<R,F> {
    return claims?.role.toUpperCase() === 'THERAPIST' || claims?.role?.toUpperCase() === 'SUPER_USER'
}
/**
 * 
 * @param claims R roles_enum
 * @returns 
 */
export function isAdminJwtClaims<R extends string,F extends string = any>(claims?: IBaseJwtClaims<R>): claims is IAdminJwtClaims<R,F> {
    return claims?.role.toUpperCase() === 'ADMIN'
}

export function isAiLearningJwtClaims<R extends string>(claims?: IBaseJwtClaims<R>): claims is IRecipientJwtClaims<R> {
    return claims?.role.toUpperCase() === 'AI_LEARNING'
}
