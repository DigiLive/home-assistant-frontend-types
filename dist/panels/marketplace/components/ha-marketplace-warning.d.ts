import { LitElement } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-checkbox";
import "../../../components/ha-dialog";
import "../../../components/ha-dialog-footer";
import "../../../components/ha-svg-icon";
import "../../../components/item/ha-list-item-base";
import "../../../components/list/ha-list-base";
export declare class HaMarketplaceWarning extends LitElement {
    private _i18n;
    private _api;
    private _understood;
    private _accepting;
    private _error?;
    private _leaving;
    protected render(): import("lit-html").TemplateResult<1>;
    private _understoodChanged;
    private _goBack;
    private _accept;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-marketplace-warning": HaMarketplaceWarning;
    }
}
