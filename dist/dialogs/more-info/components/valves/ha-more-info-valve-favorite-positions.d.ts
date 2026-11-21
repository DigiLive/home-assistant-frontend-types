import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-control-button";
import type { ExtEntityRegistryEntry } from "../../../../data/entity/entity_registry";
import type { ValveEntity } from "../../../../data/valve";
import "../ha-more-info-favorites";
export declare class HaMoreInfoValveFavoritePositions extends LitElement {
    private _api;
    private _localize;
    private _user;
    stateObj: ValveEntity;
    entry?: ExtEntityRegistryEntry | null;
    editMode?: boolean;
    private _favoritePositions;
    protected updated(changedProps: PropertyValues<this>): void;
    private _localizeFavorite;
    private _currentValue;
    private _save;
    private _setFavorites;
    private _move;
    private _applyFavorite;
    private _promptFavoriteValue;
    private _addFavorite;
    private _editFavorite;
    private _deleteFavorite;
    private _renderFavorite;
    private _deleteLabel;
    private _handleFavoriteAction;
    private _handleFavoriteMoved;
    private _handleFavoriteDelete;
    private _handleFavoriteAdd;
    private _handleFavoriteDone;
    private _renderSection;
    protected render(): TemplateResult | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-valve-favorite-positions": HaMoreInfoValveFavoritePositions;
    }
}
