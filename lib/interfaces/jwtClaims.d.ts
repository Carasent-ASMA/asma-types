/**
 * R roles_enum
 */
export interface IBaseJwtClaims<R extends string> {
    user_id: string;
    role: R;
    vt?: number;
    exp?: number;
}
export interface IAdminJwtClaims<R extends string> extends IBaseJwtClaims<R> {
    name?: string;
}
/**
 * R roles_enum
 */
export interface IRecipientJwtClaims<R extends string> extends IBaseJwtClaims<R> {
    access_level: 1 | 2 | 3 | 4;
    name: string;
    related_customers: string;
    identity: string;
    customer_id?: string;
}
/**
 * R roles_enum
 * F feature_names_enum
 */
export interface ITherapistOrSuperUserJwtClaims<R extends string, F extends string> extends IBaseJwtClaims<R> {
    name: string;
    region: string;
    customer_id: string;
    journal_user_id?: string;
    brukerBrukerNavn?: string;
    services: IService;
    features: F[];
    srv_urls: ISrvUrls;
}
export interface IService {
    [key: string]: string[];
}
export interface ISrvUrls {
    [key: string]: string;
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
export declare function isAdminJwtClaims<R extends string>(claims?: IBaseJwtClaims<R>): claims is IAdminJwtClaims<R>;
//# sourceMappingURL=jwtClaims.d.ts.map