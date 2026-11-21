import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../components/ha-time-input";
declare class MoreInfoTime extends LitElement {
    stateObj?: HassEntity;
    private _locale;
    private _api;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _stopEventPropagation;
    private _timeChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-time": MoreInfoTime;
    }
}
export {};
