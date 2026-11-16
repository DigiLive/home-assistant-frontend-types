import type { PageNavigation } from "../../layouts/hass-tabs-subpage";
import type { HomeAssistant } from "../../types";
export interface NavigationFilterOptions {
    /** Whether there are Bluetooth config entries (pre-fetched by caller) */
    hasBluetoothConfigEntries?: boolean;
}
/**
 * Filters navigation pages based on visibility rules.
 * Handles special cases like Bluetooth (requires config entries)
 * and external app configuration.
 */
export declare const filterNavigationPages: (hass: HomeAssistant, pages: PageNavigation[], options?: NavigationFilterOptions) => PageNavigation[];
