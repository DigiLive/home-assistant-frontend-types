import type { HassConfig } from "home-assistant-js-websocket";
import type { EChartsType } from "echarts/core";
import type { LocalizeFunc } from "../../common/translations/localize";
import type { FrontendLocaleData } from "../../data/translation";
import type { HaECSeries } from "../../resources/echarts/echarts";
export interface ChartSonification {
    update: () => void;
    dispose: () => void;
}
export declare const canSonifyChart: (data: HaECSeries, hiddenDatasets?: ReadonlySet<string>) => boolean;
interface SonifyChartOptions {
    cc: HTMLElement;
    localize: LocalizeFunc;
    locale: FrontendLocaleData;
    config: HassConfig;
    formatLabel?: (label: string) => string | undefined;
    onError: (error: string) => void;
}
export declare const sonifyChart: (chart: EChartsType, options: SonifyChartOptions) => Promise<ChartSonification | null>;
export {};
