import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/entity/state-badge";
import "../../../../components/ha-button";
import "../../../../components/ha-combo-box-item";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-section-title";
import "../../../../components/ha-svg-icon";
import type { LovelaceBadgeConfig } from "../../../../data/lovelace/config/badge";
import type { HomeAssistant } from "../../../../types";
import "../card-editor/hui-suggestion-entity-tree";
import "./hui-suggestion-badge";
/**
 * @element hui-badge-suggestion-picker
 *
 * @summary Entity tree with badge suggestions for the picked entity.
 *
 * @slot - Footer below the entity tree, e.g. an action bar.
 *
 * @cssprop --ha-suggestion-picker-main-padding-bottom - Space at the end of the scrolling suggestions.
 * @cssprop --ha-suggestion-picker-tree-padding-bottom - Space at the end of the scrolling entity tree.
 *
 * @fires badge-suggestion-picked - Fired with the config of the picked suggestion.
 * @fires browse-badges - Fired when the user wants to browse all badges.
 */
export declare class HuiBadgeSuggestionPicker extends LitElement {
    hass: HomeAssistant;
    prioritizedBadgeTypes?: string[];
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
    private _renderBrowseBadge;
    private _renderSelectedEntity;
    private _renderEmptyState;
    private _suggestionKeys;
    private _suggestionKey;
    private _renderSuggestionsGrid;
    private _suggestions;
    private _browseBadges;
    private _handleEntityPicked;
    private _clearEntity;
    private _pickSuggestion;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-badge-suggestion-picker": HuiBadgeSuggestionPicker;
    }
    interface HASSDomEvents {
        "browse-badges": undefined;
        "badge-suggestion-picked": {
            config: LovelaceBadgeConfig;
        };
    }
}
