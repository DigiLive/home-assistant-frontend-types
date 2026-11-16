import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-icon-next";
import "../../../components/ha-tooltip";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCard, LovelaceGridOptions } from "../types";
import type { StatisticsGraphCardConfig } from "./types";
export declare const DEFAULT_DAYS_TO_SHOW = 30;
export declare class HuiStatisticsGraphCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<import("../editor/config-elements/hui-statistics-graph-card-editor").HuiStatisticsGraphCardEditor>;
    static getStubConfig(hass: HomeAssistant, entities: string[], entitiesFill: string[]): StatisticsGraphCardConfig;
    private _config?;
    private _statistics?;
    private _metadata?;
    private _unit?;
    private _entities;
    private _entityIds;
    private _historyLinkId;
    private _colors;
    private _interval?;
    private _statTypes?;
    private _energyStart?;
    private _energyEnd?;
    private _stateObjs?;
    private _formatEntityName;
    private _localize;
    private _api;
    constructor();
    disconnectedCallback(): void;
    connectedCallback(): void;
    getCardSize(): number;
    getGridOptions(): LovelaceGridOptions;
    setConfig(config: StatisticsGraphCardConfig): void;
    private _computeNames;
    private _computeColors;
    willUpdate(changedProps: PropertyValues): void;
    private _fetchInitialStatistics;
    private _setFetchStatisticsTimer;
    private get _period();
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private get _intervalTimeout();
    private _getStatisticsMetaData;
    private _getStatistics;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-statistics-graph-card": HuiStatisticsGraphCard;
    }
}
