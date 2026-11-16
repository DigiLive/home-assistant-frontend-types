import { LitElement, nothing } from "lit";
import "../../../../components/chart/ha-chart-base";
import "../../../../components/ha-card";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceCard } from "../../types";
import type { EnergyGasGraphCardConfig } from "../types";
import "./common/hui-energy-graph-chip";
import "../../../../components/ha-tooltip";
export declare class HuiEnergyGasGraphCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<import("../../editor/config-elements/hui-energy-graph-card-editor").HuiEnergyGraphCardEditor>;
    private _config?;
    static getStubConfig(_hass: HomeAssistant, _entities: string[], _entitiesFill: string[]): EnergyGasGraphCardConfig;
    private _chartData;
    private _yAxisFractionDigits;
    private _start;
    private _end;
    private _compareStart?;
    private _compareEnd?;
    private _unit?;
    private _total?;
    private _gasStatIds?;
    private _i18n;
    private _hassConfig;
    private _gasUnits?;
    private _gasPrecisions?;
    private _states;
    private _formatters;
    private _ui;
    constructor();
    getCardSize(): Promise<number> | number;
    setConfig(config: EnergyGasGraphCardConfig): void;
    private get _displayPrecision();
    private get _gasFormatOptions();
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _formatTotal;
    private _createOptions;
    private _getStatistics;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-energy-gas-graph-card": HuiEnergyGasGraphCard;
    }
}
