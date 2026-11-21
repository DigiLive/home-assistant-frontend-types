import type { HomeAssistant, HomeAssistantApi, HomeAssistantConfig, HomeAssistantConnection, HomeAssistantFormatters, HomeAssistantInternationalization, HomeAssistantRegistries, HomeAssistantUI } from "../../types";
declare const updateRegistries: (hass: HomeAssistant, value?: HomeAssistantRegistries) => HomeAssistantRegistries;
declare const updateInternationalization: (hass: HomeAssistant, value?: HomeAssistantInternationalization) => HomeAssistantInternationalization;
declare const updateApi: (hass: HomeAssistant, value?: HomeAssistantApi) => HomeAssistantApi;
declare const updateConnection: (hass: HomeAssistant, value?: HomeAssistantConnection) => HomeAssistantConnection;
declare const updateUi: (hass: HomeAssistant, value?: HomeAssistantUI) => HomeAssistantUI;
declare const updateConfig: (hass: HomeAssistant, value?: HomeAssistantConfig) => HomeAssistantConfig;
declare const updateFormatters: (hass: HomeAssistant, value?: HomeAssistantFormatters) => HomeAssistantFormatters;
export declare const updateHassGroups: {
    registries: typeof updateRegistries;
    internationalization: typeof updateInternationalization;
    api: typeof updateApi;
    connection: typeof updateConnection;
    ui: typeof updateUi;
    config: typeof updateConfig;
    formatters: typeof updateFormatters;
};
export {};
