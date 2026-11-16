import { LitElement } from "lit";
import "./state-badge";
import "../ha-icon-button";
import "../ha-settings-row";
declare global {
    interface HASSDomEvents {
        "delete-favorite-entity": {
            index: number;
        };
    }
    interface HTMLElementTagNameMap {
        "ha-favorite-entity-list-item": HaFavoriteEntityListItem;
    }
}
export declare class HaFavoriteEntityListItem extends LitElement {
    entityId: string;
    index: number;
    private _stateObj?;
    private _registries;
    private _i18n;
    protected render(): import("lit-html").TemplateResult<1>;
    private _delete;
    static styles: import("lit").CSSResult;
}
