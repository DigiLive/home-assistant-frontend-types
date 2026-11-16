import type { Connection } from "home-assistant-js-websocket";
import type { HuiBadge } from "../panels/lovelace/badges/hui-badge";
import type { HuiCard } from "../panels/lovelace/cards/hui-card";
import type { HuiSection } from "../panels/lovelace/sections/hui-section";
import type { LovelacePath } from "../panels/lovelace/editor/lovelace-path";
import type { Lovelace } from "../panels/lovelace/types";
import type { HomeAssistant } from "../types";
import type { LovelaceSectionConfig } from "./lovelace/config/section";
import type { LegacyLovelaceConfig } from "./lovelace/config/types";
import type { LovelaceViewConfig } from "./lovelace/config/view";
export interface LovelacePanelConfig {
    mode: "yaml" | "storage";
}
export interface LovelaceViewElement extends HTMLElement {
    hass?: HomeAssistant;
    lovelace?: Lovelace;
    narrow?: boolean;
    index?: number;
    path?: LovelacePath;
    cards?: HuiCard[];
    badges?: HuiBadge[];
    sections?: HuiSection[];
    isStrategy: boolean;
    initialRenderComplete?: Promise<void>;
    setConfig(config: LovelaceViewConfig): void;
}
export interface LovelaceSectionElement extends HTMLElement {
    hass?: HomeAssistant;
    lovelace?: Lovelace;
    preview?: boolean;
    path?: LovelacePath;
    cards?: HuiCard[];
    badges?: HuiBadge[];
    sections?: HuiSection[];
    isStrategy: boolean;
    importOnly?: boolean;
    setConfig(config: LovelaceSectionConfig): void;
}
export declare const subscribeLovelaceUpdates: (conn: Connection, urlPath: string | null, onChange: () => void) => Promise<() => Promise<void>>;
export declare const getLovelaceCollection: (conn: Connection, urlPath?: string | null) => import("home-assistant-js-websocket").Collection<import("./lovelace/config/types").LovelaceRawConfig>;
export declare const getLegacyLovelaceCollection: (conn: Connection) => import("home-assistant-js-websocket").Collection<LegacyLovelaceConfig>;
