import type { HomeAssistant } from "../../../types";
import type { CardSuggestion } from "./types";
export type { CardSuggestion, CardSuggestionProvider } from "./types";
export { CARD_SUGGESTION_PROVIDERS } from "./registry";
export interface CardSuggestions {
    core: CardSuggestion[];
    custom: CardSuggestion[];
}
export declare const generateCardSuggestions: (hass: HomeAssistant, entityId: string | undefined) => CardSuggestions;
