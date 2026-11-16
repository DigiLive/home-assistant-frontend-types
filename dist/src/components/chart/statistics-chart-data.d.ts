import type { BarSeriesOption, LineSeriesOption, ZRColor } from "echarts/types/dist/shared";
import type { HassEntities } from "home-assistant-js-websocket";
import type { LocalizeFunc } from "../../common/translations/localize";
import type { Statistics, StatisticsMetaData, StatisticType } from "../../data/recorder";
import type { HomeAssistantFormatters } from "../../types";
export interface StatisticsChartLegendItem {
    id: string;
    name: string;
    color?: ZRColor;
    borderColor?: ZRColor;
    noLabelClick?: boolean;
}
export interface StatisticsChartDataParams {
    states: HassEntities;
    formatEntityName: HomeAssistantFormatters["formatEntityName"];
    localize: LocalizeFunc;
    statisticsData: Statistics;
    statisticsMetaData: Record<string, StatisticsMetaData>;
    names?: Record<string, string>;
    colors?: Record<string, string | undefined>;
    unit?: string;
    endTime?: Date;
    statTypes: StatisticType[];
    chartType: "line" | "line-stack" | "bar" | "bar-stack";
    period?: string;
    hideLegend: boolean;
    hiddenStats: ReadonlySet<string>;
    computedStyle: CSSStyleDeclaration;
    now: Date;
}
export interface StatisticsChartData {
    datasets: (LineSeriesOption | BarSeriesOption)[];
    legendData: StatisticsChartLegendItem[];
    statisticIds: string[];
    /** Chart unit, inferred from statistics metadata when not set explicitly */
    unit?: string;
    yAxisFractionDigits: number;
}
/**
 * Transforms raw statistics into ECharts series for `statistics-chart`.
 * Pure data processing: all environment inputs (current time, theme style,
 * entity states, names and localize) are injected so the transform is
 * deterministic and benchmarkable.
 */
export declare function generateStatisticsChartData(params: StatisticsChartDataParams): StatisticsChartData | undefined;
