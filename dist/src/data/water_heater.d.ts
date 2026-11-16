import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
export declare enum WaterHeaterEntityFeature {
    TARGET_TEMPERATURE = 1,
    OPERATION_MODE = 2,
    AWAY_MODE = 4,
    ON_OFF = 8
}
export declare const OPERATION_MODES: readonly ["electric", "gas", "heat_pump", "eco", "performance", "high_demand", "off"];
export type OperationMode = (typeof OPERATION_MODES)[number];
export type WaterHeaterEntity = HassEntityBase & {
    attributes: HassEntityAttributeBase & {
        target_temp_step?: number;
        min_temp: number;
        max_temp: number;
        current_temperature?: number;
        temperature?: number;
        target_temp_high?: number;
        target_temp_low?: number;
        operation_mode?: OperationMode;
        operation_list?: OperationMode[];
        away_mode?: "on" | "off";
    };
};
export declare const compareWaterHeaterOperationMode: (mode1: OperationMode, mode2: OperationMode) => number;
