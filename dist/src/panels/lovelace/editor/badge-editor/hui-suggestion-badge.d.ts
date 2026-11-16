import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-ripple";
import type { HomeAssistant } from "../../../../types";
import type { BadgeSuggestion } from "../../badge-suggestions/types";
import "../../badges/hui-badge";
export declare class HuiSuggestionBadge extends LitElement {
    hass: HomeAssistant;
    suggestion: BadgeSuggestion;
    protected render(): TemplateResult;
    private _handleClick;
    private _handleKeyDown;
    static readonly styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-suggestion-badge": HuiSuggestionBadge;
    }
    interface HASSDomEvents {
        "pick-badge-suggestion": {
            suggestion: BadgeSuggestion;
        };
    }
}
