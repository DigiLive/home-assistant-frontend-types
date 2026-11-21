import type { HassioAddonsInfo } from "../../../../data/hassio/addon";
import type { HomeAssistant } from "../../../../types";
export declare const checkForAppUpdates: (element: HTMLElement, hass: HomeAssistant) => Promise<HassioAddonsInfo | undefined>;
