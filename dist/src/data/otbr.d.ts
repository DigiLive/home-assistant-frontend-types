import type { HomeAssistant } from "../types";
import type { ThreadDataSet } from "./thread";
export interface OTBRInfo {
    active_dataset_tlvs: string | null;
    border_agent_id: string;
    channel: number | null;
    extended_address: string;
    extended_pan_id: string | null;
    url: string;
}
export type OTBRInfoDict = Record<string, OTBRInfo>;
export declare const findOTBRInfoForDataset: (otbrInfo: OTBRInfoDict | undefined, dataset: ThreadDataSet) => OTBRInfo | undefined;
export declare const getOTBRInfo: (hass: HomeAssistant) => Promise<OTBRInfoDict>;
export declare const OTBRCreateNetwork: (hass: HomeAssistant, extended_address: string) => Promise<void>;
export declare const OTBRSetNetwork: (hass: HomeAssistant, extended_address: string, dataset_id: string) => Promise<void>;
export declare const OTBRSetChannel: (hass: HomeAssistant, extended_address: string, channel: number) => Promise<{
    delay: number;
}>;
