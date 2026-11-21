export interface LovelaceStrategyConfig {
    type: string;
    [key: string]: any;
}
/** Must stay aligned with `STRATEGIES.dashboard` in `panels/lovelace/strategies/get-strategy.ts`. */
export declare const LOVELACE_BUILTIN_DASHBOARD_STRATEGY_TYPES: readonly ["original-states", "map", "iframe", "areas", "home", "energy"];
export type LovelaceBuiltinDashboardStrategyType = (typeof LOVELACE_BUILTIN_DASHBOARD_STRATEGY_TYPES)[number];
/** Dashboard strategy id from the new-dashboard picker: built-in key or `custom:…`. */
export type LovelaceDashboardStrategyTypeId = LovelaceBuiltinDashboardStrategyType | `custom:${string}`;
