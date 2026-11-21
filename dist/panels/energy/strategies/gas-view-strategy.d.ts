import { ReactiveElement } from "lit";
import type { HomeAssistant } from "../../../types";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { EnergyViewStrategyConfig } from "./energy-cards";
import type { LovelaceStrategyDependency } from "../../lovelace/strategies/types";
export declare class GasViewStrategy extends ReactiveElement {
    static registryDependencies: readonly LovelaceStrategyDependency[];
    static generate(_config: EnergyViewStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "gas-view-strategy": GasViewStrategy;
    }
}
