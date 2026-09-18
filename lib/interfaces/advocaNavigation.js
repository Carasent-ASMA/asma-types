/**
 * Ad Voca navigation destination contract — the single source of truth for the mobile TabBar.
 *
 * @remarks
 * The destination ids mirror the static rows of Ad Voca's `advoca_MenuRedesign` side menu, in menu
 * order. Every id is also a key of `ProtectedRoutesPaths`, so a consumer resolves an id to its route
 * without a second lookup table.
 *
 * Two TabBar slots are fixed and are therefore deliberately absent from the tuple: `home` is always
 * the first slot and `menu` is always the last. Dynamic, tenant-forked destinations (context groups)
 * are never promotable and are absent as well — they stay reachable from the routed Menu page.
 *
 * Consumers:
 * - Ad Voca derives its TabBar candidate list from this tuple;
 * - Directory generates the `advoca_tabbar_config.destination_ids` allow-list from it and offers the
 *   same set as choices in the navigation settings widget.
 *
 * @example
 * ```ts
 * import { AdvocaNavigationDestinationIds, type AdvocaTabBarMetadata } from 'asma-types'
 * ```
 *
 * @see ProtectedRoutesPaths
 */
/**
 * Promotable Ad Voca TabBar destinations, ordered exactly as the `advoca_MenuRedesign` side menu
 * renders them.
 *
 * @remarks
 * The order is part of the contract: it is the tie-break for computed promotion and the order in
 * which the Directory settings widget lists the available choices.
 */
export const AdvocaNavigationDestinationIds = [
    'candidateProfile',
    'tiltak',
    'documents',
    'qnrCompleted',
    'calendar',
    'chat',
];
//# sourceMappingURL=advocaNavigation.js.map