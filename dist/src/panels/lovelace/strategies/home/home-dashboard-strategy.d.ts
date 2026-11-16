import { ReactiveElement } from "lit";
import type { SecurityAlertEntityConfig } from "../../../../data/frontend";
import type { ShortcutItem } from "../../../../data/home_shortcuts";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceStrategyEditor, LovelaceStrategyDependency } from "../types";
export interface HomeDashboardStrategyConfig {
    type: "home";
    alert_entities?: SecurityAlertEntityConfig[];
    favorite_entities?: string[];
    home_panel?: boolean;
    hide_welcome_message?: boolean;
    hide_suggested_entities?: boolean;
    shortcuts?: ShortcutItem[];
}
export declare class HomeDashboardStrategy extends ReactiveElement {
    static registryDependencies: readonly LovelaceStrategyDependency[];
    static generate(config: HomeDashboardStrategyConfig, hass: HomeAssistant): Promise<LovelaceConfig>;
    static getConfigElement(): Promise<LovelaceStrategyEditor>;
}
declare global {
    interface HTMLElementTagNameMap {
        "home-dashboard-strategy": HomeDashboardStrategy;
    }
}
