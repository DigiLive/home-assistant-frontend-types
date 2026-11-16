import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-relative-time";
declare class MoreInfoAutomation extends LitElement {
    stateObj?: HassEntity;
    private _localize;
    private _api;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _runActions;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-automation": MoreInfoAutomation;
    }
}
export {};
