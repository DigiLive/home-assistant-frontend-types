import { LitElement, nothing } from "lit";
import type { PropertyValues } from "lit";
import "../../../../components/chart/ha-chart-base";
import "../../../../components/ha-card";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceCard } from "../../types";
import type { PowerSourcesGraphCardConfig } from "../types";
export declare class HuiPowerSourcesGraphCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<import("../../editor/config-elements/hui-energy-graph-card-editor").HuiEnergyGraphCardEditor>;
    private _config?;
    static getStubConfig(_hass: HomeAssistant, _entities: string[], _entitiesFill: string[]): PowerSourcesGraphCardConfig;
    private _chartData;
    private _yAxisFractionDigits;
    private _energyData?;
    private _states;
    private _legendData?;
    private _start;
    private _end;
    private _compareStart?;
    private _compareEnd?;
    private _i18n;
    private _hassConfig;
    constructor();
    getCardSize(): Promise<number> | number;
    setConfig(config: PowerSourcesGraphCardConfig): void;
    private _statRateIds;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected willUpdate(changedProps: PropertyValues): void;
    private _refreshLegendValues;
    private _formatPower;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _createOptions;
    private _getStatistics;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-power-sources-graph-card": HuiPowerSourcesGraphCard;
    }
}
