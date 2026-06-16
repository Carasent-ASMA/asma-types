/**
 * Breakpoints module — single source of truth for TypeScript consumers.
 *
 * @remarks
 * Layout ranges:
 * - mobile: `<= 743px`
 * - tablet: `744px - 1023px`
 * - tablet-desktop: `1024px - 1279px`
 * - desktop: `>= 1280px`
 *
 * SCSS in `asma-ui-core/src/styles/_breakpoints.scss` mirrors these values
 * manually because SCSS cannot import TypeScript. If you change values here,
 * update the SCSS file too.
 *
 * @example
 * ```ts
 * import { breakpoints, twScreens, mediaQueries } from 'asma-types'
 * ```
 *
 * @see asma-ui-core/src/styles/_breakpoints.scss
 */
export declare const breakpoints: {
    readonly tablet: 744;
    readonly tabletDesktop: 1024;
    readonly desktop: 1280;
    readonly mobileMax: number;
    readonly tabletMax: number;
    readonly tabletDesktopMax: number;
};
/**
 * Tailwind `screens` configuration.
 *
 * @remarks
 * Passed directly into `theme.extend.screens` in `tailwind.config.ts`.
 */
export declare const twScreens: {
    readonly tablet: "744px";
    readonly 'tablet-desktop': "1024px";
    readonly desktop: "1280px";
    readonly 'max-mobile': {
        readonly max: `${number}px`;
    };
    readonly 'max-tablet': {
        readonly max: `${number}px`;
    };
    readonly 'max-tablet-desktop': {
        readonly max: `${number}px`;
    };
};
/**
 * CSS media queries for runtime responsive checks.
 *
 * @remarks
 * Passed directly into `useMediaQuery()` implementations.
 */
export declare const mediaQueries: {
    readonly mobile: `(max-width: ${number}px)`;
    readonly tablet: `(min-width: 744px) and (max-width: ${number}px)`;
    readonly tabletDesktop: `(min-width: 1024px) and (max-width: ${number}px)`;
    readonly desktop: "(min-width: 1280px)";
};
//# sourceMappingURL=breakpoints.d.ts.map