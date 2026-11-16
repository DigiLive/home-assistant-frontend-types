import type { HassEntity } from "home-assistant-js-websocket";
import { ReactiveElement } from "lit";
import { type EntityFilter } from "../../../common/entity/entity_filter";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { SecurityAlertEntityConfig } from "../../../data/frontend";
import type { HomeAssistant } from "../../../types";
export interface SecurityViewStrategyConfig {
    type: "security";
    alert_entities?: SecurityAlertEntityConfig[];
    favorite_entities?: string[];
}
export declare const securityEntityFilters: EntityFilter[];
export declare const isSecurityPanelEntity: (hass: Pick<HomeAssistant, "states" | "entities" | "devices" | "areas" | "floors">, stateObj: HassEntity) => boolean;
export declare class SecurityViewStrategy extends ReactiveElement {
    static generate(config: SecurityViewStrategyConfig, hass: HomeAssistant): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "security-view-strategy": SecurityViewStrategy;
    }
}
