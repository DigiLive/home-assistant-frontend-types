import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/entity/state-badge";
import "../../../../components/ha-button";
import "../../../../components/ha-combo-box-item";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-section-title";
import "../../../../components/ha-svg-icon";
import type { LovelaceCardConfig } from "../../../../data/lovelace/config/card";
import type { HomeAssistant } from "../../../../types";
import "./hui-suggestion-card";
import "./hui-suggestion-entity-tree";
/**
 * @element hui-suggestion-picker
 *
 * @summary Entity tree with card suggestions for the picked entity.
 *
 * @slot - Footer below the entity tree, e.g. an action bar.
 *
 * @cssprop --ha-suggestion-picker-main-padding-bottom - Space at the end of the scrolling suggestions.
 * @cssprop --ha-suggestion-picker-tree-padding-bottom - Space at the end of the scrolling entity tree.
 *
 * @fires suggestion-picked - Fired with the config of the picked suggestion.
 * @fires browse-cards - Fired when the user wants to browse all cards.
 */
export declare class HuiSuggestionPicker extends LitElement {
    hass: HomeAssistant;
    prioritizedCardTypes?: string[];
    private _entityId?;
    private _narrow;
    private _narrowMql?;
    private _entityTree?;
    focus(): Promise<void>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleNarrowChange;
    private _computeSuggestions;
    protected render(): TemplateResult<1>;
    private _renderMainContent;
    private _renderBrowseCard;
    private _renderSelectedEntity;
    private _renderEmptyState;
    private _suggestionKeys;
    private _suggestionKey;
    private _renderSuggestionsGrid;
    private _suggestions;
    private _browseCards;
    private _handleEntityPicked;
    private _clearEntity;
    private _pickSuggestion;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-suggestion-picker": HuiSuggestionPicker;
    }
    interface HASSDomEvents {
        "browse-cards": undefined;
        "suggestion-picked": {
            config: LovelaceCardConfig;
        };
    }
}
