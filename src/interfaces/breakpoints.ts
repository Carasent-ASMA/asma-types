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
export const breakpoints = {
    mobileMax: 743,
    tabletMin: 744,
    tabletMax: 1023,
    tabletDesktopMin: 1024,
    tabletDesktopMax: 1279,
    desktopMin: 1280,
} as const

/**
 * Tailwind `screens` configuration.
 *
 * @remarks
 * Passed directly into `theme.extend.screens` in `tailwind.config.ts`.
 */
export const twScreens = {
    // min-width (mobile-first)
    tablet: `${breakpoints.tabletMin}px`,
    'tablet-desktop': `${breakpoints.tabletDesktopMin}px`,
    desktop: `${breakpoints.desktopMin}px`,
    // max-width (targeting mobile / compact)
    'max-mobile': { max: `${breakpoints.mobileMax}px` },
    'max-tablet': { max: `${breakpoints.tabletMax}px` },
    'max-tablet-desktop': { max: `${breakpoints.tabletDesktopMax}px` },
} as const

/**
 * CSS media queries for runtime responsive checks.
 *
 * @remarks
 * Passed directly into `useMediaQuery()` implementations.
 */
export const mediaQueries = {
    mobile: `(max-width: ${breakpoints.mobileMax}px)`,
    tablet: `(min-width: ${breakpoints.tabletMin}px) and (max-width: ${breakpoints.tabletMax}px)`,
    tabletDesktop: `(min-width: ${breakpoints.tabletDesktopMin}px) and (max-width: ${breakpoints.tabletDesktopMax}px)`,
    desktop: `(min-width: ${breakpoints.desktopMin}px)`,
} as const
