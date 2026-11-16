import type { PageNavigation } from "../layouts/hass-tabs-subpage";
import type { HomeAssistant, PanelInfo } from "../types";
export declare const APP_PANEL = "app";
export declare const HOME_PANEL = "home";
export declare const MY_REDIRECT_PANEL = "_my_redirect";
export declare const NOT_FOUND_PANEL = "notfound";
export declare const PROFILE_PANEL = "profile";
export declare const LOVELACE_PANEL = "lovelace";
/** Panels that are internal/system-level and should not appear in user-facing navigation UIs. */
export declare const SYSTEM_PANELS: string[];
/** Panel to show when no panel is picked. */
export declare const DEFAULT_PANEL = "home";
export declare const hasLegacyOverviewPanel: (hass: HomeAssistant) => boolean;
export declare const getLegacyDefaultPanelUrlPath: () => string | null;
export declare const getDefaultPanelUrlPath: (hass: HomeAssistant) => string;
export declare const getDefaultPanel: (hass: HomeAssistant) => PanelInfo;
export declare const getPanelNameTranslationKey: (panel: PanelInfo) => `panel.${string}`;
export declare const getPanelTitle: (hass: Pick<HomeAssistant, "localize">, panel: PanelInfo) => string | undefined;
export declare const getPanelTitleFromUrlPath: (hass: Pick<HomeAssistant, "localize" | "panels">, urlPath: string) => string | undefined;
/**
 * Get subpage title for config panel routes.
 * Returns the specific subpage title (e.g., "Automations") if found,
 * or undefined to fall back to the panel title (e.g., "Settings").
 *
 * @param hass HomeAssistant instance
 * @param path Full route path (e.g., "/config/automation/dashboard")
 * @param configSections Config sections metadata for resolving subpage titles
 * @returns Localized subpage title, or undefined if not found
 */
export declare const getConfigSubpageTitle: (hass: HomeAssistant, path: string, configSections: Record<string, PageNavigation[]>) => string | undefined;
export declare const getPanelIcon: (panel: PanelInfo) => string | undefined;
export declare const getPanelIconPath: (panel: PanelInfo) => string | undefined;
export declare const FIXED_PANELS: string[];
export interface PanelMutableParams {
    title?: string | null;
    icon?: string | null;
    require_admin?: boolean | null;
    show_in_sidebar?: boolean | null;
}
export declare const updatePanel: (hass: HomeAssistant, urlPath: string, updates: PanelMutableParams) => Promise<unknown>;
