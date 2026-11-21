import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-state-icon";
import "../../../components/tile/ha-tile-badge";
import "../../../components/tile/ha-tile-container";
import "../../../components/tile/ha-tile-icon";
import "../../../components/tile/ha-tile-info";
import "../../../state-display/state-display";
import type { HomeAssistant } from "../../../types";
import "../card-features/hui-card-features";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { TileCardConfig } from "./types";
export declare class HuiTileCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): TileCardConfig;
    static getDefaultConfig(): Partial<TileCardConfig>;
    hass?: HomeAssistant;
    layout?: string;
    private _config?;
    private _featureContext;
    private _timerFinished;
    protected willUpdate(changedProps: PropertyValues): void;
    private _timerFinishedAnimationEnded;
    setConfig(config: TileCardConfig): void;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    private _computeIconLabel;
    private _handleAction;
    private _handleIconAction;
    private _computeStateColor;
    private _featurePosition;
    private _featureLayout;
    private _featureRows;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-tile-card": HuiTileCard;
    }
}
