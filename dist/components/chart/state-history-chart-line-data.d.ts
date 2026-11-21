import type { LineSeriesOption } from "echarts/charts";
import type { VisualMapComponentOption } from "echarts/components";
import type { HassEntities } from "home-assistant-js-websocket";
import type { LineChartEntity } from "../../data/history";
import type { LocalizeFunc } from "../../common/translations/localize";
export declare const CLIMATE_MODE_CONFIGS: readonly [{
    readonly mode: "heat";
    readonly action: "heating";
    readonly cssVar: "--state-climate-heat-color";
}, {
    readonly mode: "cool";
    readonly action: "cooling";
    readonly cssVar: "--state-climate-cool-color";
}, {
    readonly mode: "dry";
    readonly action: "drying";
    readonly cssVar: "--state-climate-dry-color";
}, {
    readonly mode: "fan_only";
    readonly action: "fan";
    readonly cssVar: "--state-climate-fan_only-color";
}];
export interface StateHistoryChartLineDataParams {
    localize: LocalizeFunc;
    states: HassEntities;
    data: LineChartEntity[];
    endTime: Date;
    names?: Record<string, string>;
    colors?: Record<string, string | undefined>;
    showNames: boolean;
    computedStyles: CSSStyleDeclaration;
    now: Date;
}
export interface StateHistoryChartLineData {
    datasets: LineSeriesOption[];
    entityIds: string[];
    datasetToDataIndex: number[];
    visualMap?: VisualMapComponentOption[];
    yAxisFractionDigits: number;
}
/**
 * Transforms processed history (`LineChartEntity[]`) into ECharts series for
 * `state-history-chart-line`. Pure data processing: all environment inputs
 * (current time, theme style, localize, states) are injected so the transform is
 * deterministic and benchmarkable.
 */
export declare function generateStateHistoryChartLineData(params: StateHistoryChartLineDataParams): StateHistoryChartLineData | undefined;
