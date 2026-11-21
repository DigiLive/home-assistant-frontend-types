import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../components/entity/state-info";
import "../components/ha-action-result";
import "../components/ha-control-button";
export declare class StateCardButton extends LitElement {
    private _localize;
    private _api;
    stateObj: HassEntity;
    inDialog: boolean;
    private _result;
    protected render(): import("lit-html").TemplateResult<1>;
    private _pressButton;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-button": StateCardButton;
    }
}
