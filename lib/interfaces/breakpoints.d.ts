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
/**
 * Numeric breakpoint values.
 *
 * @property mobileMax - Maximum width for mobile view.
 * @property tabletMin - Minimum width for tablet view.
 * @property tabletMax - Maximum width for tablet view.
 * @property tabletDesktopMin - Minimum width for tablet-desktop view.
 * @property tabletDesktopMax - Maximum width for tablet-desktop view.
 * @property desktopMin - Minimum width for desktop view.
 */
export declare const breakpoints: {
    readonly mobileMax: 743;
    readonly tabletMin: 744;
    readonly tabletMax: 1023;
    readonly tabletDesktopMin: 1024;
    readonly tabletDesktopMax: 1279;
    readonly desktopMin: 1280;
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
        readonly max: "743px";
    };
    readonly 'max-tablet': {
        readonly max: "1023px";
    };
    readonly 'max-tablet-desktop': {
        readonly max: "1279px";
    };
};
/**
 * CSS media queries for runtime responsive checks.
 *
 * @remarks
 * Passed directly into `useMediaQuery()` implementations.
 */
export declare const mediaQueries: {
    readonly mobile: "(max-width: 743px)";
    readonly tablet: "(min-width: 744px) and (max-width: 1023px)";
    readonly tabletDesktop: "(min-width: 1024px) and (max-width: 1279px)";
    readonly desktop: "(min-width: 1280px)";
};
//# sourceMappingURL=breakpoints.d.ts.map