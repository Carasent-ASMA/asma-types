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
    customer_id: IUUID;
    name: string;
    journal_user_id?: string;
    journal_role: string | null;
    brukerBrukerNavn: string | null;
    vt?: number;
    exp?: number;
}
export interface IAdminJwtClaims<R extends string, F extends string> extends ITherapistOrSuperUserJwtClaims<R, F> {
}
/**
 * R roles_enum
 */
export interface IRecipientJwtClaims<R extends string> extends IBaseJwtClaims<R> {
    access_level: 1 | 2 | 3 | 4;
    related_customers: string;
    identity: string;
    srv_urls: ISrvUrls;
}
/**
 * R roles_enum
 * F feature_names_enum
 */
export interface ITherapistOrSuperUserJwtClaims<R extends string, F extends string = any> extends IBaseJwtClaims<R> {
    region: string;
    services: IService;
    brukerBrukerNavn: string;
    features: F[];
    srv_urls: ISrvUrls;
}
export interface IService {
    [key: string]: string[];
}
export interface ISrvUrls {
    [key: string]: string;
}
export interface IAiLearningJwtClaims<R extends string> extends IBaseJwtClaims<R> {
    region: string;
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
export declare function isTherapistJwtClaims<R extends string, F extends string>(claims?: IBaseJwtClaims<R>): claims is ITherapistOrSuperUserJwtClaims<R, F>;
/**
 *
 * @param claims R roles_enum
 * @returns
 */
export declare function isAdminJwtClaims<R extends string, F extends string = any>(claims?: IBaseJwtClaims<R>): claims is IAdminJwtClaims<R, F>;
export declare function isAiLearningJwtClaims<R extends string>(claims?: IBaseJwtClaims<R>): claims is IRecipientJwtClaims<R>;
//# sourceMappingURL=jwtClaims.d.ts.map