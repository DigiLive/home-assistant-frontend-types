import { LitElement, nothing, type PropertyValues, type TemplateResult } from "lit";
import "../../../components/chips/ha-assist-chip";
import "../../../components/ha-card";
import "../../../components/ha-segmented-bar";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceCardEditor, LovelaceGridOptions } from "../types";
import type { DistributionCardConfig } from "./types";
export declare class HuiDistributionCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFallback: string[]): DistributionCardConfig;
    private _config?;
    private _configEntities?;
    private _entityIds;
    private _stateObjs?;
    private _formatters;
    private _localize;
    private _hassConfig;
    private _themes;
    private _hiddenEntities;
    private _expandLegend;
    private _legendFit;
    setConfig(config: DistributionCardConfig): void;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    private _validateDeviceClasses;
    private _convertToSegments;
    private _computeLegendItems;
    private _toggleEntity;
    private _handleSegmentClick;
    private _handleLegendClick;
    private _handleLegendKeydown;
    private _toggleExpandLegend;
    private _renderLegend;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-distribution-card": HuiDistributionCard;
    }
}
