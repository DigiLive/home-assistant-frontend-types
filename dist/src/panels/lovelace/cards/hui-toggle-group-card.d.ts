import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/tile/ha-tile-container";
import "../../../components/tile/ha-tile-icon";
import "../../../components/tile/ha-tile-info";
import type { LovelaceCard, LovelaceGridOptions } from "../types";
import type { ToggleGroupCardConfig } from "./types";
export declare class HuiToggleGroupCard extends LitElement implements LovelaceCard {
    private _config?;
    private _stateObjs?;
    private _localize;
    private _api;
    setConfig(config: ToggleGroupCardConfig): void;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    private _getOnEntities;
    private _computeColor;
    private _computeLabel;
    private _computeIconLabel;
    private _handleTap;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-toggle-group-card": HuiToggleGroupCard;
    }
}
