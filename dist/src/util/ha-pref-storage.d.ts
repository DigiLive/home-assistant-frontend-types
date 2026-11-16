import type { HomeAssistant } from "../types";
declare const STORED_STATE: readonly ["dockedSidebar", "selectedTheme", "selectedLanguage", "vibrate", "debugConnection", "suspendWhenHidden", "enableShortcuts"];
type StoredHomeAssistant = Pick<HomeAssistant, (typeof STORED_STATE)[number]>;
export declare function storeState(hass: HomeAssistant): void;
export declare function getState(): Partial<StoredHomeAssistant>;
export declare function clearState(): void;
export declare function clearSelectedThemeState(): void;
export {};
