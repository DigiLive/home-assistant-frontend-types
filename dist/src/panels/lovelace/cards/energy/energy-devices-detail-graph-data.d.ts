import type { BarSeriesOption } from "echarts/charts";
import type { HassEntities } from "home-assistant-js-websocket";
import type { LocalizeFunc } from "../../../../common/translations/localize";
import type { CustomLegendOption } from "../../../../components/chart/ha-chart-base";
import type { EnergyData } from "../../../../data/energy";
import type { HomeAssistantFormatters } from "../../../../types";
import type { EnergyDevicesDetailGraphCardConfig } from "../types";
import type { FrontendLocaleData } from "../../../../data/translation";
declare const UNIT = "kWh";
export interface EnergyDevicesDetailGraphDataParams {
    localize: LocalizeFunc;
    locale: FrontendLocaleData;
    states: HassEntities;
    formatEntityName: HomeAssistantFormatters["formatEntityName"];
    darkMode: boolean;
    energyData: EnergyData;
    config: EnergyDevicesDetailGraphCardConfig;
    computedStyles: CSSStyleDeclaration;
    now: Date;
    /**
     * Numeric suffix appended to the untracked dataset's series id so it always
     * sorts after the device datasets. The original card sourced this from a
     * fresh `Date.now()` read (distinct from `now`, which is `endOfToday()`);
     * it is injected here to keep the transform pure and deterministic.
     */
    untrackedOrder: number;
}
export interface EnergyDevicesDetailGraphData {
    chartData: BarSeriesOption[];
    yAxisFractionDigits: number;
    legendData: CustomLegendOption["data"];
    start: Date;
    end: Date;
    compareStart?: Date;
    compareEnd?: Date;
}
declare const getStatIdFromId: (id: string) => string;
/**
 * Transforms an `EnergyData` collection update into the ECharts bar series and
 * derived chart state for `hui-energy-devices-detail-graph-card`. Pure data
 * processing: all environment inputs (current time via `now`, theme style,
 * localize, entity states and names, config) are injected so the transform is
 * deterministic and benchmarkable.
 */
export declare function generateEnergyDevicesDetailGraphData(params: EnergyDevicesDetailGraphDataParams): EnergyDevicesDetailGraphData;
export { getStatIdFromId, UNIT };
