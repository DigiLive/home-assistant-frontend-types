import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/entity/state-badge";
import "../../../components/ha-card";
import "../../../components/ha-icon";
import "../../../components/ha-relative-time";
import type { HomeAssistant } from "../../../types";
import "../components/hui-timestamp-display";
import "../components/hui-warning-element";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import { migrateGlanceCardConfig } from "./migrate-card-config";
import type { GlanceCardConfig } from "./types";
export { migrateGlanceCardConfig };
export declare class HuiGlanceCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): GlanceCardConfig;
    private _config?;
    private _entityIds?;
    private _stateObjs?;
    private _entityEntries?;
    private _localize;
    private _hassConfig;
    private _formatters;
    private _themes;
    private _configEntities?;
    getCardSize(): number;
    setConfig(config: GlanceCardConfig): void;
    protected render(): typeof nothing | TemplateResult<1>;
    protected updated(changedProps: PropertyValues): void;
    static styles: import("lit").CSSResult;
    /** Reuses the previous record while every selected entry is unchanged. */
    private _selectEntityEntries;
    private _renderEntity;
    private _handleAction;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-glance-card": HuiGlanceCard;
    }
}
