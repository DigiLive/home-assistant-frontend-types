import type { FrontendLocaleData } from "./translation";
import type { HomeAssistant } from "../types";
export declare const DOMAIN = "radio_frequency";
export interface RadioFrequencyTransmitter {
    entity_id: string;
    device_id: string | null;
    config_entry_id: string | null;
    supported_frequency_ranges: [number, number][];
    supported_modulations: string[];
}
interface RadioFrequencyTransmitterList {
    transmitters: RadioFrequencyTransmitter[];
}
export declare const fetchRadioFrequencyTransmitters: (hass: HomeAssistant) => Promise<RadioFrequencyTransmitterList>;
export declare const formatFrequency: (hz: number, locale: FrontendLocaleData) => string;
export declare const formatFrequencyRange: (range: readonly [number, number], locale: FrontendLocaleData) => string;
export declare const formatFrequencyRanges: (ranges: readonly (readonly [number, number])[], locale: FrontendLocaleData) => string;
export {};
