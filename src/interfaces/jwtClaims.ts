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
export type IUUID = `${string}-${string}-${string}-${string}-${string}`
export interface IBaseJwtClaims<R extends string,J extends string = 'ADCURIS'|'ADOPUS'|'UNKNOWN'> {
    user_id: IUUID
    role: R
    journal: J
    subdomain: string
    genesis_set: string
    name: string
    journal_role: string
    region: string
    srv_urls: ISrvUrls
    genesis_role?: string
    customer_id?: IUUID
    brukerBrukerNavn?: string
    journal_user_id?: string
    vt?: number
    exp?: number
}

export interface IAdminJwtClaims<R extends string> extends ITherapistOrSuperUserJwtClaims<R> {}
/**
 * R roles_enum
 */
export interface IRecipientJwtClaims<R extends string> extends IBaseJwtClaims<R> {
    access_level: 1 | 2 | 3 | 4
    related_customers: string
    identity: string
}
/**
 * R roles_enum
 * F feature_names_enum
 */
export interface ITherapistOrSuperUserJwtClaims<R extends string> extends IBaseJwtClaims<R> {
}
export interface IService {
    [key: string]: string[]
}

export interface ISrvUrls {
    [key: string]: string
}

export interface IAiLearningJwtClaims<R extends string> extends IBaseJwtClaims<R> {
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
export function isTherapistJwtClaims<R extends string>(claims?: IBaseJwtClaims<R>): claims is ITherapistOrSuperUserJwtClaims<R> {
    return claims?.role.toUpperCase() === 'THERAPIST' || claims?.role?.toUpperCase() === 'SUPER_USER'
}
/**
 * 
 * @param claims R roles_enum
 * @returns 
 */
export function isAdminJwtClaims<R extends string>(claims?: IBaseJwtClaims<R>): claims is IAdminJwtClaims<R> {
    return claims?.role.toUpperCase() === 'ADMIN'
}

export function isAiLearningJwtClaims<R extends string>(claims?: IBaseJwtClaims<R>): claims is IRecipientJwtClaims<R> {
    return claims?.role.toUpperCase() === 'AI_LEARNING'
}
