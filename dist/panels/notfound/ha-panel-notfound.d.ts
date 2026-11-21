import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant, PanelInfo, Route } from "../../types";
import "../lovelace/hui-root";
declare class HaPanelNotFound extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    route?: Route;
    panel?: PanelInfo;
    private _lovelace?;
    willUpdate(changedProps: PropertyValues<this>): void;
    private _setup;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _setLovelace;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-notfound": HaPanelNotFound;
    }
}
export {};
