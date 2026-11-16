import type { HomeAssistant } from "../../../types";
import type { BadgeSuggestion } from "./types";
export type { BadgeSuggestion, BadgeSuggestionProvider } from "./types";
export { BADGE_SUGGESTION_PROVIDERS } from "./registry";
export interface BadgeSuggestions {
    core: BadgeSuggestion[];
    custom: BadgeSuggestion[];
}
export declare const generateBadgeSuggestions: (hass: HomeAssistant, entityId: string | undefined) => BadgeSuggestions;
