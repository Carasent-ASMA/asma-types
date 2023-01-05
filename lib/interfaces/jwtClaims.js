//import type { roles_enum, feature_names_enum } from "asma-genql-directory/lib"
/**
 *  R roles_enum
 */
export function isRecipientJwtClaims(claims) {
    return (claims === null || claims === void 0 ? void 0 : claims.role.toUpperCase()) === 'RECIPIENT';
}
/**
 *
 * @param claims R roles_enum
 * F feature_names_enum
 * @returns
 */
export function isTherapistJwtClaims(claims) {
    var _a;
    return (claims === null || claims === void 0 ? void 0 : claims.role.toUpperCase()) === 'THERAPIST' || ((_a = claims === null || claims === void 0 ? void 0 : claims.role) === null || _a === void 0 ? void 0 : _a.toUpperCase()) === 'SUPER_USER';
}
/**
 *
 * @param claims R roles_enum
 * @returns
 */
export function isAdminJwtClaims(claims) {
    return (claims === null || claims === void 0 ? void 0 : claims.role.toUpperCase()) === 'ADMIN';
}
//# sourceMappingURL=jwtClaims.js.map