import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-control-button";
import type { CoverEntity } from "../../../../data/cover";
import type { ExtEntityRegistryEntry } from "../../../../data/entity/entity_registry";
import "../ha-more-info-favorites";
export declare class HaMoreInfoCoverFavoritePositions extends LitElement {
    private _api;
    private _localize;
    private _user;
    stateObj: CoverEntity;
    entry?: ExtEntityRegistryEntry | null;
    editMode?: boolean;
    private _favoritePositions;
    private _favoriteTiltPositions;
    protected updated(changedProps: PropertyValues<this>): void;
    private _localizeFavorite;
    private _getFavorites;
    private _getCurrentValue;
    private _save;
    private _setFavorites;
    private _move;
    private _applyFavorite;
    private _promptFavoriteValue;
    private _addFavorite;
    private _editFavorite;
    private _deleteFavorite;
    private _renderFavoriteButton;
    private _deleteLabel;
    private _handleFavoriteAction;
    private _handleFavoriteMoved;
    private _handleFavoriteDelete;
    private _handleFavoriteAdd;
    private _handleFavoriteDone;
    private _renderKindSection;
    protected render(): TemplateResult | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-cover-favorite-positions": HaMoreInfoCoverFavoritePositions;
    }
}
