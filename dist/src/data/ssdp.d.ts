import { type Connection, type UnsubscribeFunc } from "home-assistant-js-websocket";
import type { DataTableRowData } from "../components/data-table/ha-data-table";
export interface SSDPDiscoveryData extends DataTableRowData {
    name: string | null;
    ssdp_usn: string;
    ssdp_st: string;
    upnp: Record<string, unknown>;
    ssdp_location: string | null;
    ssdp_nt: string | null;
    ssdp_udn: string | null;
    ssdp_ext: string | null;
    ssdp_server: string | null;
    ssdp_headers: Record<string, unknown>;
    ssdp_all_locations: string[];
    x_homeassistant_matching_domains: string[];
}
export declare const subscribeSSDPDiscovery: (conn: Connection, callbackFunction: (ssdpDiscoveryData: SSDPDiscoveryData[]) => void) => UnsubscribeFunc;
