import type { HomeAssistant } from "../types";
import type { StatisticsMetaData } from "./recorder";
type StatisticIdsType = "mean" | "sum";
type StatisticIdsApi = Pick<HomeAssistant, "callWS">;
export declare const getStatisticIds: (hass: StatisticIdsApi, statistic_type?: StatisticIdsType) => Promise<StatisticsMetaData[]>;
export {};
