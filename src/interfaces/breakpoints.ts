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
 */
export const breakpoints = {
    tablet: 744,
    tabletDesktop: 1024,
    desktop: 1280,
} as const

/**
 * Derived ceiling values for max-width checks.
 */
const ceilings = {
    mobile: breakpoints.tablet - 1,
    tablet: breakpoints.tabletDesktop - 1,
    tabletDesktop: breakpoints.desktop - 1,
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
    'max-mobile': { max: `${ceilings.mobile}px` },
    'max-tablet': { max: `${ceilings.tablet}px` },
    'max-tablet-desktop': { max: `${ceilings.tabletDesktop}px` },
} as const

/**
 * CSS media queries for runtime responsive checks.
 *
 * @remarks
 * Passed directly into `useMediaQuery()` implementations.
 */
export const mediaQueries = {
    mobile: `(max-width: ${ceilings.mobile}px)`,
    tablet: `(min-width: ${breakpoints.tablet}px) and (max-width: ${ceilings.tablet}px)`,
    tabletDesktop: `(min-width: ${breakpoints.tabletDesktop}px) and (max-width: ${ceilings.tabletDesktop}px)`,
    desktop: `(min-width: ${breakpoints.desktop}px)`,
} as const
