import type { HomeAssistant } from "../types";
export interface CommonControlsResult {
    entities: string[];
}
export declare const getCommonControlsUsagePrediction: (hass: HomeAssistant) => Promise<CommonControlsResult>;
