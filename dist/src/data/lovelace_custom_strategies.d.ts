import type { LovelaceStrategyConfigType } from "../panels/lovelace/strategies/get-strategy";
export interface CustomStrategyEntry {
    type: string;
    name?: string;
    description?: string;
    documentationURL?: string;
    strategyType: LovelaceStrategyConfigType;
}
export interface CustomStrategiesWindow {
    customStrategies?: CustomStrategyEntry[];
}
export declare const customStrategies: CustomStrategyEntry[];
export declare const getCustomStrategiesForType: (strategyType: LovelaceStrategyConfigType) => CustomStrategyEntry[];
export declare const getCustomStrategyEntry: (type: string, strategyType: LovelaceStrategyConfigType) => CustomStrategyEntry;
