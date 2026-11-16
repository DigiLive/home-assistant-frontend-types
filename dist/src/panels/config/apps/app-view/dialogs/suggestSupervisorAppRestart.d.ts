import type { LitElement } from "lit";
import type { HassioAddonDetails } from "../../../../../data/hassio/addon";
import type { HomeAssistant } from "../../../../../types";
export declare const suggestSupervisorAppRestart: (element: LitElement, hass: HomeAssistant, addon: HassioAddonDetails) => Promise<void>;
