import type { LineSeriesOption } from "echarts/charts";
import type { HassEntities } from "home-assistant-js-websocket";
import type { LocalizeFunc } from "../../../../common/translations/localize";
import type { CustomLegendOption } from "../../../../components/chart/ha-chart-base";
import type { EnergyData } from "../../../../data/energy";
export interface PowerSourcesGraphDataParams {
    localize: LocalizeFunc;
    formatPower: (powerWatts: number) => string;
    states: HassEntities;
    energyData: EnergyData;
    computedStyles: CSSStyleDeclaration;
    /** Previous chart start, used for the "showing today" current-state check. */
    start: Date;
    /** Previous chart end, used for the "showing today" current-state check. */
    end: Date;
    /** Current time, injected (was `Date.now()`). */
    now: number;
}
export interface PowerSourcesGraphData {
    chartData: LineSeriesOption[];
    legendData: CustomLegendOption["data"];
    yAxisFractionDigits: number;
    start: Date;
    end: Date;
}
export declare function getPowerLegendValues(energyData: EnergyData, states: HassEntities, formatPower: (powerWatts: number) => string): Record<string, string>;
/**
 * Transforms an energy collection update (`EnergyData` + prefs) into the
 * ECharts series, legend, and derived state for the power sources graph card.
 * Pure data processing: all environment inputs (current time, theme style,
 * localize, current entity states) are injected so the transform is
 * deterministic and benchmarkable.
 */
export declare function generatePowerSourcesGraphData(params: PowerSourcesGraphDataParams): PowerSourcesGraphData;
