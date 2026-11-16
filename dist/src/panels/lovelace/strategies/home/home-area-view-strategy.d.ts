import { ReactiveElement } from "lit";
import type { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceStrategyDependency } from "../types";
export interface HomeAreaViewStrategyConfig {
    type: "home-area";
    area?: string;
    home_panel?: boolean;
}
export declare class HomeAreaViewStrategy extends ReactiveElement {
    static registryDependencies: readonly LovelaceStrategyDependency[];
    static generate(config: HomeAreaViewStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "home-area-view-strategy": HomeAreaViewStrategy;
    }
}
