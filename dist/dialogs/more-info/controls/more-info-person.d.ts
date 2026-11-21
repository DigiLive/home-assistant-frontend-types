import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../components/ha-button";
import "../../../components/map/ha-map";
declare class MoreInfoPerson extends LitElement {
    stateObj?: HassEntity;
    private _localize;
    private _states;
    private _user?;
    private _entityArray;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleAction;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-person": MoreInfoPerson;
    }
}
export {};
