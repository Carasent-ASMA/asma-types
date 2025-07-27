/**
 * R roles_enum
 */
export type IUUID = `${string}-${string}-${string}-${string}-${string}`;
export interface IBaseJwtClaims<R extends string, J extends string = 'ADCURIS' | 'ADOPUS' | 'UNKNOWN'> {
    user_id: IUUID;
    role: R;
    journal: J;
    subdomain: string;
    genesis_set: string;
    name: string;
    srv_urls: ISrvUrls;
    customer_id: IUUID;
    journal_user_id?: string;
    vt?: number;
    exp?: number;
}
export interface IAdminJwtClaims<R extends string> extends ITherapistOrSuperUserJwtClaims<R> {
}
/**
 * R roles_enum
*/
export interface IRecipientJwtClaims<R extends string> extends IBaseJwtClaims<R> {
    access_level: 1 | 2 | 3 | 4;
    related_customers: string;
    identity: string;
}
/**
 * R roles_enum
 * F feature_names_enum
*/
export interface ITherapistOrSuperUserJwtClaims<R extends string> extends IBaseJwtClaims<R> {
    genesis_role: string;
    /**@deprecated use journal_user_name instead*/
    brukerBrukerNavn: string;
    journal_user_name: string;
    region: string;
    journal_role: string;
}
export interface IService {
    [key: string]: string[];
}
export interface ISrvUrls {
    [key: string]: string;
}
export interface IAiLearningJwtClaims<R extends string> extends ITherapistOrSuperUserJwtClaims<R> {
}
/**
 *  R roles_enum
 */
export declare function isRecipientJwtClaims<R extends string>(claims?: IBaseJwtClaims<R>): claims is IRecipientJwtClaims<R>;
/**
 *
 * @param claims R roles_enum
 * F feature_names_enum
 * @returns
 */
export declare function isTherapistJwtClaims<R extends string>(claims?: IBaseJwtClaims<R>): claims is ITherapistOrSuperUserJwtClaims<R>;
/**
 *
 * @param claims R roles_enum
 * @returns
 */
export declare function isAdminJwtClaims<R extends string>(claims?: IBaseJwtClaims<R>): claims is IAdminJwtClaims<R>;
export declare function isAiLearningJwtClaims<R extends string>(claims?: IBaseJwtClaims<R>): claims is IRecipientJwtClaims<R>;
//# sourceMappingURL=jwtClaims.d.ts.map