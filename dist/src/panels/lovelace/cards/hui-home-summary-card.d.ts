import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/tile/ha-tile-container";
import "../../../components/tile/ha-tile-icon";
import "../../../components/tile/ha-tile-info";
import type { LovelaceCard, LovelaceGridOptions } from "../types";
import type { HomeSummaryCard } from "./types";
export declare class HuiHomeSummaryCard extends LitElement implements LovelaceCard {
    private _config?;
    private _energyData?;
    private _i18n;
    private _registries;
    private _hassConfig;
    private _summaryState?;
    constructor();
    setConfig(config: HomeSummaryCard): void;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    private _handleAction;
    private get _hasCardAction();
    private _computeSecondaryLoading;
    private _computeSummaryState;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-home-summary-card": HuiHomeSummaryCard;
    }
}
