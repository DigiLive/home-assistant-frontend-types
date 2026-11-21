import type { LovelaceResource } from "../../../data/lovelace/resource";
import type { HomeAssistant } from "../../../types";
export declare const loadLovelaceResources: (resources: NonNullable<LovelaceResource[]>, hass: HomeAssistant) => void;
export declare const loadLovelaceResourcesAndWait: (resources: NonNullable<LovelaceResource[]>, hass: HomeAssistant) => Promise<void>;
