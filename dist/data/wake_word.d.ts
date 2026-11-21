import type { HomeAssistant } from "../types";
export interface WakeWord {
    id: string;
    name: string;
    phrase: string | null;
}
export declare const fetchWakeWordInfo: (hass: HomeAssistant, entity_id: string) => Promise<{
    wake_words: WakeWord[];
}>;
