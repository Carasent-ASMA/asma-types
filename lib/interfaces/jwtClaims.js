export function isRecipientJwtClaims(claims) {
    return (claims === null || claims === void 0 ? void 0 : claims.role.toUpperCase()) === 'RECIPIENT';
}
export function isTherapistJwtClaims(claims) {
    var _a;
    return (claims === null || claims === void 0 ? void 0 : claims.role.toUpperCase()) === 'THERAPIST' || ((_a = claims === null || claims === void 0 ? void 0 : claims.role) === null || _a === void 0 ? void 0 : _a.toUpperCase()) === 'SUPER_USER';
}
export function isAdminJwtClaims(claims) {
    return (claims === null || claims === void 0 ? void 0 : claims.role.toUpperCase()) === 'ADMIN';
}
//# sourceMappingURL=jwtClaims.js.map