import { type NavigationFilterOptions } from "../common/config/filter_navigation_pages";
import type { PickerComboBoxItem } from "../components/ha-picker-combo-box";
import type { PageNavigation } from "../layouts/hass-tabs-subpage";
import type { FuseWeightedKey } from "../resources/fuseMultiTerm";
import type { HomeAssistant } from "../types";
import type { HassioAddonInfo } from "./hassio/addon";
export interface NavigationComboBoxItem extends PickerComboBoxItem {
    path: string;
    image?: string;
    iconColor?: string;
    app?: Pick<HassioAddonInfo, "slug" | "icon">;
}
export interface BaseNavigationCommand {
    path: string;
    primary: string;
    secondary?: string;
    icon_path?: string;
    iconPath?: string;
    iconColor?: string;
    image?: string;
    app?: Pick<HassioAddonInfo, "slug" | "icon">;
}
export interface ActionCommandComboBoxItem extends PickerComboBoxItem {
    action: string;
    domain?: string;
}
export interface NavigationInfo extends PageNavigation {
    primary: string;
}
export declare const generateNavigationCommands: (hass: HomeAssistant, apps?: HassioAddonInfo[], filterOptions?: NavigationFilterOptions) => NavigationComboBoxItem[];
export declare const generateActionCommands: (hass: HomeAssistant) => ActionCommandComboBoxItem[];
export declare const commandComboBoxKeys: FuseWeightedKey[];
export declare const navigateComboBoxKeys: FuseWeightedKey[];
