type roles_enum = 'RECIPIENT' | 'SUPER_USER' | 'THERAPIST' | 'USER'
type feature_names_enum =
    | 'autoImportableQnr'
    | 'dashboardTraceability'
    | 'ordersOverviewOnSelectedRecipientsForQnr'
    | 'predefinedUserForQnr'
    | 'rejectableQnr'
    | 'signByTherapistDocument'
    | 'test'

export interface IBaseJwtClaims {
    user_id: string
    role: roles_enum
    vt?: number
    exp?: number
}

export interface IAdminJwtClaims extends IBaseJwtClaims {
    name?: string
}

export interface IRecipientJwtClaims extends IBaseJwtClaims {
    access_level: 1 | 2 | 3 | 4
    name: string
    related_customers: string
    identity: string
    customer_id?: string
}
export interface ITherapistOrSuperUserJwtClaims extends IBaseJwtClaims {
    name: string
    region: string
    customer_id: string
    journal_user_id?: string
    brukerBrukerNavn?: string
    services: IService
    features: feature_names_enum[]
    srv_urls: ISrvUrls
}
export interface IService {
    [key: string]: string[]
}

export interface ISrvUrls {
    [key: string]: string
}

export function isRecipientJwtClaims(claims?: IBaseJwtClaims): claims is IRecipientJwtClaims {
    return claims?.role.toUpperCase() === 'RECIPIENT'
}
export function isTherapistJwtClaims(claims?: IBaseJwtClaims): claims is ITherapistOrSuperUserJwtClaims {
    return claims?.role.toUpperCase() === 'THERAPIST' || claims?.role?.toUpperCase() === 'SUPER_USER'
}

export function isAdminJwtClaims(claims?: IBaseJwtClaims): claims is IAdminJwtClaims {
    return claims?.role.toUpperCase() === ('ADMIN' as roles_enum)
}
