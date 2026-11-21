import type { PageNavigation } from "../../layouts/hass-tabs-subpage";
import type { HomeAssistant, HomeAssistantConfig } from "../../types";
export declare const canShowPage: (hass: HomeAssistantConfig & Pick<HomeAssistant, "entities">, page: PageNavigation) => boolean;
export declare const isLoadedIntegration: (hass: HomeAssistantConfig, page: PageNavigation) => boolean;
export declare const isCore: (page: PageNavigation) => boolean;
