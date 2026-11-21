import { type Connection } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../../types";
import type { AddonState } from "./addon";
export interface IngressAppInfo {
    name: string;
    slug: string;
    version: string | null;
    state: AddonState | null;
    ingress_url: string | null;
}
export declare const fetchIngressAppInfo: (hass: Pick<HomeAssistant, "callWS">, slug: string) => Promise<IngressAppInfo>;
export declare const createHassioSession: (hass: Pick<HomeAssistant, "callWS">, slug: string) => Promise<string>;
export interface IngressPanelInfo {
    title: string;
    icon: string;
}
export type IngressPanelInfoMap = Record<string, IngressPanelInfo>;
export declare const getIngressPanelInfoCollection: (conn: Connection) => import("home-assistant-js-websocket").Collection<IngressPanelInfoMap>;
export declare const validateHassioSession: (hass: Pick<HomeAssistant, "callWS">, session: string) => Promise<void>;
