import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { TimelineEntity } from "../../data/history";
import type { ZoomSliderMode } from "./ha-chart-base";
import "./ha-chart-tooltip-marker";
export declare class StateHistoryChartTimeline extends LitElement {
    data: TimelineEntity[];
    narrow: boolean;
    names?: Record<string, string>;
    unit?: string;
    identifier?: string;
    showNames: boolean;
    insideLabels: boolean;
    clickForMoreInfo: boolean;
    chunked: boolean;
    startTime: Date;
    endTime: Date;
    paddingYAxis: number;
    chartIndex?: any;
    zoomSlider: ZoomSliderMode;
    private _chartData;
    private _chartOptions?;
    private _yWidth;
    private _chartTime;
    private _i18n;
    private _hassConfig;
    private _states?;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderItem;
    private _renderTooltip;
    willUpdate(changedProps: PropertyValues): void;
    private _createOptions;
    zoom(start: number, end: number): void;
    private _handleDataZoom;
    private _generateData;
    private _handleChartClick;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-history-chart-timeline": StateHistoryChartTimeline;
    }
}
