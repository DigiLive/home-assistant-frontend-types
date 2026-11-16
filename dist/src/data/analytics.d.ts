import type { HomeAssistant } from "../types";
export interface AnalyticsPreferences {
    base?: boolean;
    diagnostics?: boolean;
    usage?: boolean;
    statistics?: boolean;
    snapshots?: boolean;
}
export interface Analytics {
    preferences: AnalyticsPreferences;
    onboarded: boolean;
}
export declare const getAnalyticsDetails: (hass: HomeAssistant) => Promise<Analytics>;
export declare const setAnalyticsPreferences: (hass: HomeAssistant, preferences: AnalyticsPreferences) => Promise<{
    preferences: AnalyticsPreferences;
}>;
