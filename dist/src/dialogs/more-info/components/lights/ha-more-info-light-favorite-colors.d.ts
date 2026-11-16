import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { ExtEntityRegistryEntry } from "../../../../data/entity/entity_registry";
import type { LightEntity } from "../../../../data/light";
import "../ha-more-info-favorites";
import "./ha-favorite-color-button";
declare global {
    interface HASSDomEvents {
        "favorite-color-edit-started": any;
    }
}
export declare class HaMoreInfoLightFavoriteColors extends LitElement {
    private _api;
    private _localize;
    private _config;
    stateObj: LightEntity;
    entry?: ExtEntityRegistryEntry | null;
    editMode?: boolean;
    private _favoriteColors;
    protected updated(changedProps: PropertyValues<this>): void;
    private _move;
    private _apply;
    private _save;
    private _add;
    private _edit;
    private _delete;
    private _renderFavorite;
    private _deleteLabel;
    private _handleFavoriteAction;
    private _handleFavoriteMoved;
    private _handleFavoriteDelete;
    private _handleFavoriteAdd;
    private _handleFavoriteDone;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-light-favorite-colors": HaMoreInfoLightFavoriteColors;
    }
}
