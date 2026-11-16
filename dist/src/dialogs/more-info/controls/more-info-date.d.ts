import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../components/ha-date-input";
declare class MoreInfoDate extends LitElement {
    stateObj?: HassEntity;
    private _locale;
    private _api;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _dateChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-date": MoreInfoDate;
    }
}
export {};
