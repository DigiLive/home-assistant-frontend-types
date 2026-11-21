import type { Connection, HassConfig, UnsubscribeFunc } from "home-assistant-js-websocket";
import { type IngressPanelInfoMap } from "./hassio/ingress";
import type { LovelaceRawConfig } from "./lovelace/config/types";
import type { LocalizeFunc, LocalizeKeys } from "../common/translations/localize";
import type { AreaRegistryEntry } from "./area/area_registry";
import type { DeviceRegistryEntry } from "./device/device_registry";
import type { Panels } from "../types";
export interface NavigationPathInfoOptions {
    localize: LocalizeFunc;
    panels: Panels;
    areas: Record<string, AreaRegistryEntry>;
    devices: Record<string, DeviceRegistryEntry>;
}
export interface SubscribeNavigationPathInfoOptions extends NavigationPathInfoOptions {
    config: HassConfig;
    connection: Connection;
}
export interface NavigationPathInfo {
    label: string;
    icon?: string;
    iconPath: string;
}
export declare const DEFAULT_NAVIGATION_PATH_INFO: NavigationPathInfo;
export declare const CONFIG_SUB_ROUTES: Record<string, {
    translationKey: LocalizeKeys;
    iconPath: string;
}>;
/**
 * Resolve a navigation path to a display label and icon.
 * Works synchronously for panels, areas, and devices.
 * For lovelace views, pass the dashboard config to resolve view title/icon.
 */
export declare const computeNavigationPathInfo: (options: NavigationPathInfoOptions, path: string, lovelaceConfig?: LovelaceRawConfig, ingressPanels?: IngressPanelInfoMap) => NavigationPathInfo;
/**
 * Subscribe to navigation path info updates.
 * Resolves synchronously first, then subscribes to lovelace config
 * updates for view paths and ingress panel info for app paths.
 */
export declare const subscribeNavigationPathInfo: (options: SubscribeNavigationPathInfoOptions, path: string, onChange: (info: NavigationPathInfo) => void) => UnsubscribeFunc | undefined;
