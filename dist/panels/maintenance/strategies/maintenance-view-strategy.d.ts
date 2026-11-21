import { ReactiveElement } from "lit";
import { type EntityFilter } from "../../../common/entity/entity_filter";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
export interface MaintenanceViewStrategyConfig {
    type: "maintenance";
}
export declare const maintenanceEntityFilters: EntityFilter[];
export declare const filterLowBatteryEntities: (states: HomeAssistant["states"], entities: HomeAssistant["entities"], entityIds: string[]) => string[];
export declare const filterProblemEntities: (states: HomeAssistant["states"], entityIds: string[]) => string[];
export declare const filterUnavailableBatteryEntities: (states: HomeAssistant["states"], entityIds: string[]) => string[];
export declare class MaintenanceViewStrategy extends ReactiveElement {
    static generate(_config: MaintenanceViewStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "maintenance-view-strategy": MaintenanceViewStrategy;
    }
}
