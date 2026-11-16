import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { Statistics, StatisticsMetaData, StatisticType } from "../../data/recorder";
import "./ha-chart-base";
import "./ha-chart-tooltip-marker";
export declare const supportedStatTypeMap: Record<StatisticType, StatisticType>;
export declare class StatisticsChart extends LitElement {
    statisticsData?: Statistics;
    metadata?: Record<string, StatisticsMetaData>;
    names?: Record<string, string>;
    colors?: Record<string, string | undefined>;
    unit?: string;
    startTime?: Date;
    endTime?: Date;
    statTypes: StatisticType[];
    chartType: "line" | "line-stack" | "bar" | "bar-stack";
    minYAxis?: number;
    maxYAxis?: number;
    fitYData: boolean;
    hideLegend: boolean;
    logarithmicScale: boolean;
    isLoadingData: boolean;
    clickForMoreInfo: boolean;
    period?: string;
    daysToShow?: number;
    height?: string;
    expandLegend?: boolean;
    private _chartData;
    private _legendData;
    private _statisticIds;
    private _chartOptions?;
    private _hiddenStats;
    private _i18n;
    private _hassConfig;
    private _formatEntityName;
    private _themes;
    private _states;
    private _entities;
    private _api;
    private _computedStyle?;
    private _yAxisFractionDigits;
    willUpdate(changedProps: PropertyValues): void;
    firstUpdated(): void;
    protected render(): TemplateResult;
    private _datasetHidden;
    private _datasetUnhidden;
    private _handleLegendLabelClick;
    private _renderTooltip;
    private _createOptions;
    private _getStatisticsMetaData;
    private _generateData;
    private _clampYAxis;
    private _roundYAxis;
    private _formatYAxisLabel;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "statistics-chart": StatisticsChart;
    }
}
