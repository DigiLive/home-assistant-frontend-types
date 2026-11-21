import type { HomeAssistant, ThemeSettings } from "../types";
declare global {
    interface FrontendUserData {
        theme: ThemeSettings;
    }
}
export declare const subscribeThemePreferences: (hass: HomeAssistant, callback: (data: {
    value: ThemeSettings | null;
}) => void) => Promise<() => Promise<void>>;
export declare const saveThemePreferences: (hass: HomeAssistant, data: ThemeSettings) => Promise<void>;
