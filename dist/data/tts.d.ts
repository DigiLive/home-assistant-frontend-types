import type { HomeAssistant } from "../types";
export interface TTSEngine {
    engine_id: string;
    supported_languages: string[];
    name?: string;
    deprecated?: boolean;
}
export interface TTSVoice {
    voice_id: string;
    name: string;
}
export declare const convertTextToSpeech: (hass: HomeAssistant, data: {
    platform: string;
    message: string;
    cache?: boolean;
    language?: string;
    options?: Record<string, unknown>;
}) => Promise<{
    url: string;
    path: string;
}>;
export declare const isTTSMediaSource: (mediaContentId: string) => boolean;
export declare const getProviderFromTTSMediaSource: (mediaContentId: string) => string;
export declare const listTTSEngines: (callWS: HomeAssistant["callWS"], language?: string, country?: string) => Promise<{
    providers: TTSEngine[];
}>;
export declare const getTTSEngine: (callWS: HomeAssistant["callWS"], engine_id: string) => Promise<{
    provider: TTSEngine;
}>;
export declare const listTTSVoices: (callWS: HomeAssistant["callWS"], engine_id: string, language: string) => Promise<{
    voices: TTSVoice[] | null;
}>;
