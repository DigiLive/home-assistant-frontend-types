import type { StatisticsMetaData } from "../../../../data/recorder";
export declare const loadClearRangeDialog: () => Promise<typeof import("./dialog-statistics-clear-range")>;
export interface DialogStatisticsClearRangeParams {
    statistic: StatisticsMetaData;
    name: string;
}
export declare const showStatisticsClearRangeDialog: (element: HTMLElement, dialogParams: DialogStatisticsClearRangeParams) => void;
