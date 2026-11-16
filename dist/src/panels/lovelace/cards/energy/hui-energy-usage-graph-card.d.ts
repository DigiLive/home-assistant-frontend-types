import { LitElement, nothing } from "lit";
import "../../../../components/chart/ha-chart-base";
import "../../../../components/ha-card";
import "./common/hui-energy-graph-chip";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceCard } from "../../types";
import type { EnergyUsageGraphCardConfig } from "../types";
export declare class HuiEnergyUsageGraphCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<import("../../editor/config-elements/hui-energy-graph-card-editor").HuiEnergyGraphCardEditor>;
    private _config?;
    static getStubConfig(_hass: HomeAssistant, _entities: string[], _entitiesFill: string[]): EnergyUsageGraphCardConfig;
    private _chartData;
    private _yAxisFractionDigits;
    private _legendData?;
    private _start;
    private _end;
    private _compareStart?;
    private _compareEnd?;
    private _total?;
    private _i18n;
    private _hassConfig;
    private _states;
    private _formatters;
    private _ui;
    constructor();
    getCardSize(): Promise<number> | number;
    setConfig(config: EnergyUsageGraphCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _formatTotal;
    private _createOptions;
    private _getStatistics;
    private _getLegendData;
    private _processTotal;
    private _processDataSet;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-energy-usage-graph-card": HuiEnergyUsageGraphCard;
    }
}
