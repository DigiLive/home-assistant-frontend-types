import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-control-circular-slider";
import "../../../components/ha-icon-button";
import "../../../components/ha-state-icon";
import type { EntityRegistryDisplayEntry } from "../../../data/entity/entity_registry";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import type { LightCardConfig } from "./types";
export declare class HuiLightCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): LightCardConfig;
    private _config?;
    private _stateObj?;
    _entity?: EntityRegistryDisplayEntry;
    private _i18n;
    private _formatters;
    private _hassConfig;
    private _themes;
    private _api;
    private _brightnessTimout?;
    getCardSize(): number;
    setConfig(config: LightCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected updated(changedProps: PropertyValues): void;
    private _dragEvent;
    private _showBrightness;
    private _hideBrightness;
    private _setBrightness;
    private _computeBrightness;
    private _computeColor;
    private _handleAction;
    private _handleMoreInfo;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-light-card": HuiLightCard;
    }
}
