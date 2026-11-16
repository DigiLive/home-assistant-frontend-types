import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-card";
import "../../../../components/chart/ha-chart-base";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceCard } from "../../types";
import type { EnergyDevicesDetailGraphCardConfig } from "../types";
export declare class HuiEnergyDevicesDetailGraphCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<import("../../editor/config-elements/hui-energy-devices-card-editor").HuiEnergyDevicesCardEditor>;
    private _config?;
    static getStubConfig(_hass: HomeAssistant, _entities: string[], _entitiesFill: string[]): EnergyDevicesDetailGraphCardConfig;
    private _chartData;
    private _yAxisFractionDigits;
    private _data?;
    private _legendData?;
    private _start;
    private _end;
    private _compareStart?;
    private _compareEnd?;
    private _hiddenStats;
    private _i18n;
    private _hassConfig;
    private _states;
    private _formatters;
    private _registries;
    private _ui;
    constructor();
    getCardSize(): Promise<number> | number;
    setConfig(config: EnergyDevicesDetailGraphCardConfig): void;
    protected willUpdate(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _formatTotal;
    private _datasetHidden;
    private _datasetUnhidden;
    private _handleLegendLabelClick;
    private _createOptions;
    private _processStatistics;
    private _getStatIdFromId;
    private _getSeriesArea;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-energy-devices-detail-graph-card": HuiEnergyDevicesDetailGraphCard;
    }
}
