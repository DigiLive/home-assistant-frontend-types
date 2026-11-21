import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/entity/state-info";
import "../components/ha-button";
declare class StateCardLock extends LitElement {
    private _localize;
    private _api;
    stateObj: HassEntity;
    inDialog: boolean;
    protected render(): TemplateResult;
    private _callService;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-lock": StateCardLock;
    }
}
export {};
