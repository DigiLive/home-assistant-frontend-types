import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { LineChartEntity } from "../../data/history";
import type { ZoomSliderMode } from "./ha-chart-base";
import "./ha-chart-tooltip-marker";
export declare class StateHistoryChartLine extends LitElement {
    data: LineChartEntity[];
    names?: Record<string, string>;
    colors?: Record<string, string | undefined>;
    unit?: string;
    identifier?: string;
    showNames: boolean;
    clickForMoreInfo: boolean;
    startTime: Date;
    endTime: Date;
    paddingYAxis: number;
    chartIndex?: any;
    logarithmicScale: boolean;
    minYAxis?: number;
    maxYAxis?: number;
    fitYData: boolean;
    height?: string;
    expandLegend?: boolean;
    zoomSlider: ZoomSliderMode;
    private _chartData;
    private _entityIds;
    private _datasetToDataIndex;
    private _chartOptions?;
    private _hiddenStats;
    private _yWidth;
    private _visualMap?;
    private _chartTime;
    private _yAxisFractionDigits;
    private _i18n;
    private _hassConfig;
    private _formatters;
    private _entities;
    private _states?;
    private _optionsEntityStates;
    protected render(): TemplateResult<1>;
    private _renderTooltip;
    private _datasetHidden;
    private _datasetUnhidden;
    zoom(start: number, end: number): void;
    private _handleDataZoom;
    private _handleLegendLabelClick;
    willUpdate(changedProps: PropertyValues): void;
    private _hasEntityStatesChanged;
    private _generateData;
    private _formatYAxisLabel;
    private _clampYAxis;
    private _roundYAxis;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-history-chart-line": StateHistoryChartLine;
    }
}
