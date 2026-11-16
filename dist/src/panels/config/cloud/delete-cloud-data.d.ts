import type { HomeAssistant } from "../../../types";
export declare const confirmDeleteCloudData: (element: HTMLElement, hass: HomeAssistant, { signOutFirst }?: {
    signOutFirst?: boolean;
}) => Promise<boolean>;
