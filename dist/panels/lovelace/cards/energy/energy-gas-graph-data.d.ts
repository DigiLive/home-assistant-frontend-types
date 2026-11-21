import type { BarSeriesOption } from "echarts/charts";
import type { HassEntities } from "home-assistant-js-websocket";
import type { EnergyData } from "../../../../data/energy";
import type { HomeAssistant } from "../../../../types";
export interface EnergyGasGraphDataParams {
    states: HassEntities;
    formatEntityName: HomeAssistant["formatEntityName"];
    darkMode: boolean;
    energyData: EnergyData;
    computedStyles: CSSStyleDeclaration;
    /** Current time, injected so the transform is deterministic. */
    now: Date;
}
export interface EnergyGasGraphData {
    chartData: BarSeriesOption[];
    start: Date;
    end: Date;
    compareStart?: Date;
    compareEnd?: Date;
    unit?: string;
    total?: number;
    yAxisFractionDigits: number;
}
/**
 * Transforms an energy collection update (`EnergyData` + config + environment)
 * into the gas graph card's chart series and derived state. Pure data
 * processing: every environment read (current time, theme style, entity
 * states and names) is injected so the transform is deterministic and
 * benchmarkable.
 */
export declare function generateEnergyGasGraphData(params: EnergyGasGraphDataParams): EnergyGasGraphData;
