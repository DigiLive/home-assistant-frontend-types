import { ReactiveElement } from "lit";
import type { SecurityAlertEntityConfig } from "../../../../data/frontend";
import type { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
import type { ShortcutItem } from "../../../../data/home_shortcuts";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceStrategyDependency } from "../types";
export interface HomeOverviewViewStrategyConfig {
    type: "home-overview";
    alert_entities?: SecurityAlertEntityConfig[];
    favorite_entities?: string[];
    home_panel?: boolean;
    hide_welcome_message?: boolean;
    hide_suggested_entities?: boolean;
    shortcuts?: ShortcutItem[];
}
export declare const preloadHomeEnergyPreferences: (hass: HomeAssistant) => Promise<any>;
export declare class HomeOverviewViewStrategy extends ReactiveElement {
    static registryDependencies: readonly LovelaceStrategyDependency[];
    static shouldRegenerate(config: HomeOverviewViewStrategyConfig, oldHass: HomeAssistant, newHass: HomeAssistant): boolean;
    static generate(config: HomeOverviewViewStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "home-overview-view-strategy": HomeOverviewViewStrategy;
    }
}
