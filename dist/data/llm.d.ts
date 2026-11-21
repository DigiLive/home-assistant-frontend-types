import type { HomeAssistant } from "../types";
export interface LLMApi {
    id: string;
    name: string;
}
export declare const fetchLLMApis: (hass: HomeAssistant) => Promise<LLMApi[]>;
