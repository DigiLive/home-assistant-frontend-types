import type { HomeAssistant } from "../../types";
type HassioDockerRegistries = Record<string, {
    username: string;
}>;
type HassioDockerRegistryCredentials = Record<string, {
    username: string;
    password: string;
}>;
export declare const fetchHassioDockerRegistries: (hass: HomeAssistant) => Promise<{
    registries: HassioDockerRegistries;
}>;
export declare const addHassioDockerRegistry: (hass: HomeAssistant, data: HassioDockerRegistryCredentials) => Promise<void>;
export declare const removeHassioDockerRegistry: (hass: HomeAssistant, registry: string) => Promise<void>;
export {};
