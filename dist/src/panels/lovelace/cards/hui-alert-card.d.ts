import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-relative-time";
import "../../../components/ha-state-icon";
import "../../../components/tile/ha-tile-container";
import "../../../components/tile/ha-tile-icon";
import "../../../components/tile/ha-tile-info";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { AlertCardConfig } from "./types";
export declare class HuiAlertCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): AlertCardConfig;
    private _config?;
    private _stateObj?;
    private _formatters;
    setConfig(config: AlertCardConfig): void;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleAction;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-alert-card": HuiAlertCard;
    }
}
