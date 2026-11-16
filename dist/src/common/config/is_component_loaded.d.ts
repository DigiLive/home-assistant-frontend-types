import type { HomeAssistant } from "../../types";
/** Return if a component is loaded. */
export declare const isComponentLoaded: (hassConfig: HomeAssistant["config"], component: string) => boolean;
