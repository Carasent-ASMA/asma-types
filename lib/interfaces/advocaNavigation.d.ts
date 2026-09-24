/**
 * Ad Voca navigation destination contract — the single source of truth for the mobile TabBar.
 *
 * @remarks
 * The destination ids mirror the static rows of Ad Voca's `advoca_MenuRedesign` side menu, in menu
 * order. Every id is also a key of `ProtectedRoutesPaths`, so a consumer resolves an id to its route
 * without a second lookup table.
 *
 * Two TabBar slots are fixed and are therefore deliberately absent from the tuple: `home` is always
 * the first slot and `menu` is always the last. `workspaces` promotes the platform-default
 * `WORKSPACES` context group (route `qnr-module/workspaces`); extra tenant-forked context groups
 * remain non-promotable and stay reachable from the routed Menu page.
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
export declare const AdvocaNavigationDestinationIds: readonly ['candidateProfile', 'tiltak', 'documents', 'qnrCompleted', 'workspaces', 'calendar', 'chat'];
/** A single promotable Ad Voca TabBar destination. */
export type AdvocaNavigationDestinationId = (typeof AdvocaNavigationDestinationIds)[number];
/**
 * The feature flags a customer must have enabled for each destination to exist in Ad Voca's menu.
 *
 * @remarks
 * This is the FEATURE-FLAG component of eligibility only, shared so the Directory settings widget
 * offers exactly the destinations the customer's recipients can see. Structural checks (Fretex
 * exclusion, journal-user relation, per-recipient feature overrides) stay consumer-side in Ad Voca —
 * they are per user, not per customer. The names are `feature_names_enum` values; asma-types has no
 * generated Hasura enum, so they are typed as strings and each consumer narrows against its own
 * generated enum (Ad Voca pins parity in its candidate tests).
 */
export declare const advocaNavigationRequiredFeatures: Record<AdvocaNavigationDestinationId, readonly string[]>;
/**
 * Per-customer TabBar configuration, delivered additively on the authenticated token metadata.
 *
 * @property version - Schema version. Consumers fail closed to legacy navigation on any other value.
 * @property destinationIds - The configured middle destinations in the configured order, or `null`
 * when the customer has no configuration row and the client computes promotion itself. An empty
 * array is an explicit choice of Home and Menu only.
 */
export type AdvocaTabBarMetadata = {
    version: 1;
    destinationIds: readonly AdvocaNavigationDestinationId[] | null;
};
//# sourceMappingURL=advocaNavigation.d.ts.map