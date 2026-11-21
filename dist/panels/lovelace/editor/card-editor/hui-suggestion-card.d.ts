import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-ripple";
import type { HomeAssistant } from "../../../../types";
import "../../cards/hui-card";
import type { CardSuggestion } from "../../card-suggestions/types";
export declare class HuiSuggestionCard extends LitElement {
    hass: HomeAssistant;
    suggestion: CardSuggestion;
    private _preview?;
    protected willUpdate(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private _handleClick;
    private _handleKeyDown;
    static readonly styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-suggestion-card": HuiSuggestionCard;
    }
    interface HASSDomEvents {
        "pick-suggestion": {
            suggestion: CardSuggestion;
        };
    }
}
