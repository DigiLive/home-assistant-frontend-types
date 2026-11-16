import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-gauge";
import type { EntityRegistryDisplayEntry } from "../../../data/entity/entity_registry";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { GaugeCardConfig } from "./types";
export declare const DEFAULT_MIN = 0;
export declare const DEFAULT_MAX = 100;
export declare const severityMap: {
    red: string;
    green: string;
    yellow: string;
    normal: string;
};
declare class HuiGaugeCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): GaugeCardConfig;
    layout?: string;
    private _config?;
    private _stateObj?;
    _entity?: EntityRegistryDisplayEntry;
    private _i18n;
    private _formatters;
    private _hassConfig;
    private _themes;
    getCardSize(): number;
    setConfig(config: GaugeCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    getGridOptions(): LovelaceGridOptions;
    protected updated(changedProps: PropertyValues): void;
    private _computeSeverity;
    private _severityLevels;
    private _handleAction;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-gauge-card": HuiGaugeCard;
    }
}
export {};
