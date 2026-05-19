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
 * @property tablet - Minimum width for tablet view.
 * @property tabletDesktop - Minimum width for tablet-desktop view.
 * @property desktop - Minimum width for desktop view.
 * @property mobileMax - Maximum width for mobile view.
 * @property tabletMax - Maximum width for tablet view.
 * @property tabletDesktopMax - Maximum width for tablet-desktop view.
 */
const tablet = 744
const tabletDesktop = 1024
const desktop = 1280

export const breakpoints = {
    tablet,
    tabletDesktop,
    desktop,
    mobileMax: tablet - 1,
    tabletMax: tabletDesktop - 1,
    tabletDesktopMax: desktop - 1,
} as const

/**
 * Tailwind `screens` configuration.
 *
 * @remarks
 * Passed directly into `theme.extend.screens` in `tailwind.config.ts`.
 */
export const twScreens = {
    // min-width (mobile-first)
    tablet: `${breakpoints.tablet}px`,
    'tablet-desktop': `${breakpoints.tabletDesktop}px`,
    desktop: `${breakpoints.desktop}px`,
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
    tablet: `(min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.tabletMax}px)`,
    tabletDesktop: `(min-width: ${breakpoints.tabletDesktop}px) and (max-width: ${breakpoints.tabletDesktopMax}px)`,
    desktop: `(min-width: ${breakpoints.desktop}px)`,
} as const
