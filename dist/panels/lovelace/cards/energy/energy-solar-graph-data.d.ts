import type { BarSeriesOption, LineSeriesOption } from "echarts/charts";
import type { HassEntities } from "home-assistant-js-websocket";
import type { LocalizeFunc } from "../../../../common/translations/localize";
import type { EnergyData, EnergySolarForecasts } from "../../../../data/energy";
import type { HomeAssistant } from "../../../../types";
export interface EnergySolarGraphDataParams {
    localize: LocalizeFunc;
    states: HassEntities;
    formatEntityName: HomeAssistant["formatEntityName"];
    darkMode: boolean;
    energyData: EnergyData;
    /**
     * Solar forecasts resolved by the caller (the async fetch stays in the
     * component); `undefined` when no forecast data is available.
     */
    forecasts: EnergySolarForecasts | undefined;
    computedStyles: CSSStyleDeclaration;
    /** Fallback for `energyData.end` (the component uses `endOfToday()`). */
    now: Date;
}
export interface EnergySolarGraphData {
    chartData: (BarSeriesOption | LineSeriesOption)[];
    total: number;
    start: Date;
    end: Date;
    compareStart?: Date;
    compareEnd?: Date;
    yAxisFractionDigits: number;
}
/**
 * Transforms an `EnergyData` collection update into the ECharts series and
 * derived state for `hui-energy-solar-graph-card`. Pure data processing: all
 * environment inputs (current time, theme style, localize, entity states and
 * names, resolved forecasts) are injected so the transform is deterministic
 * and benchmarkable.
 */
export declare function generateEnergySolarGraphData(params: EnergySolarGraphDataParams): EnergySolarGraphData;
