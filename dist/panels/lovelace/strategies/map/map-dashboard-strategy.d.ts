import { ReactiveElement } from "lit";
import type { LovelaceDashboardSuggestions } from "../../../../data/lovelace/dashboard";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceStrategyDependency } from "../types";
import type { MapViewStrategyConfig } from "./map-view-strategy";
export type MapDashboardStrategyConfig = MapViewStrategyConfig;
export declare class MapDashboardStrategy extends ReactiveElement {
    static registryDependencies: readonly LovelaceStrategyDependency[];
    static generate(config: MapDashboardStrategyConfig): Promise<LovelaceConfig>;
    static noEditor: boolean;
    static getCreateSuggestions(hass: HomeAssistant): LovelaceDashboardSuggestions;
}
declare global {
    interface HTMLElementTagNameMap {
        "map-dashboard-strategy": MapDashboardStrategy;
    }
}
