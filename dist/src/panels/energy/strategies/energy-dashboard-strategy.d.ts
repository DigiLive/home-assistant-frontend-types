import { ReactiveElement } from "lit";
import type { LovelaceStrategyConfig } from "../../../data/lovelace/config/strategy";
import type { LovelaceConfig } from "../../../data/lovelace/config/types";
import type { HomeAssistant } from "../../../types";
import type { LovelaceStrategyDependency } from "../../lovelace/strategies/types";
export interface EnergyDashboardStrategyConfig extends LovelaceStrategyConfig {
    type: "energy";
    default_collection?: string;
    hidden_cards?: string[];
}
export declare class EnergyDashboardStrategy extends ReactiveElement {
    static registryDependencies: readonly LovelaceStrategyDependency[];
    static generate(_config: EnergyDashboardStrategyConfig, hass: HomeAssistant): Promise<LovelaceConfig>;
    static noEditor: boolean;
}
declare global {
    interface HTMLElementTagNameMap {
        "energy-dashboard-strategy": EnergyDashboardStrategy;
    }
}
