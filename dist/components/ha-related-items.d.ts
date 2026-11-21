import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { ItemType, RelatedResult } from "../data/search";
import "./ha-icon";
import "./ha-icon-next";
import "./ha-state-icon";
import "./ha-svg-icon";
import "./item/ha-list-item-button";
import "./list/ha-grouped-list";
export declare class HaRelatedItems extends LitElement {
    itemType: ItemType;
    itemId: string;
    exclude?: (keyof RelatedResult)[];
    empty: boolean;
    private _entries?;
    private _blueprints?;
    private _related?;
    private _states;
    private _devices;
    private _areas;
    private _i18n;
    private _formatEntityName;
    private _darkMode?;
    private _hassUrl;
    private _brandsAccessToken?;
    private _api;
    private _fetchConfigEntries;
    private _fetchBlueprints;
    protected willUpdate(changedProps: PropertyValues): void;
    protected updated(changedProps: PropertyValues<this>): void;
    private _relatedEntities;
    private _getConfigEntries;
    private _isExcluded;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderEntityRow;
    private _renderBrandIcon;
    private _renderBlueprintRow;
    private _findRelated;
    private _openMoreInfo;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-related-items": HaRelatedItems;
    }
}
