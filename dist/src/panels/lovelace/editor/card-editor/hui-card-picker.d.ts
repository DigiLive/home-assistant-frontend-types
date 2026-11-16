import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import { PreserveScrollPositionController } from "../../../../common/controllers/preserve-scroll-position-controller";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-ripple";
import "../../../../components/ha-spinner";
import "../../../../components/input/ha-input-search";
import type { LovelaceCardConfig } from "../../../../data/lovelace/config/card";
import type { LovelaceConfig } from "../../../../data/lovelace/config/types";
import type { HomeAssistant } from "../../../../types";
/**
 * @element hui-card-picker
 *
 * @summary Searchable grid of cards to pick from.
 *
 * @slot - Footer below the scrolling cards, e.g. an action bar.
 *
 * @cssprop --ha-card-picker-content-padding-bottom - Space at the end of the scrolling cards.
 *
 * @attr hide-clipboard - Hides the clipboard card, e.g. when the host offers its own paste action.
 *
 * @fires config-changed - Fired with the config of the picked card.
 */
export declare class HuiCardPicker extends LitElement {
    hass?: HomeAssistant;
    suggestedCards?: string[];
    hideClipboard: boolean;
    private _clipboard?;
    private _cards;
    private _favorites;
    lovelace?: LovelaceConfig;
    cardPicked?: (cardConf: LovelaceCardConfig) => void;
    private _filter;
    private _searchInput?;
    private _content?;
    private _unusedEntities?;
    private _usedEntities?;
    private _suggestedCards;
    private _favoriteElements;
    private _topSection;
    preserveScrollPosition: PreserveScrollPositionController;
    focus(): Promise<void>;
    private _filterCards;
    private _customCards;
    private _otherCards;
    private _energyCards;
    private _manualCard;
    private _favoriteCards;
    private _toCardElement;
    private _favoriteElement;
    protected render(): typeof nothing | TemplateResult<1>;
    protected shouldUpdate(changedProps: PropertyValues<this>): boolean;
    protected firstUpdated(): void;
    protected updated(changedProps: PropertyValues): void;
    private _loadCards;
    private _renderClipboardCard;
    private _renderCard;
    private _setFavorite;
    private _toggleFavorite;
    private _reorderFavorites;
    private _saveFavorites;
    private _persistFavorites;
    private _showSaveError;
    private _handleSearchChange;
    private _cardPicked;
    private _tryCreateCardElement;
    private _rebuildCard;
    private _renderCardElement;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-picker": HuiCardPicker;
    }
}
