import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../components/entity/ha-entity-toggle";
import "../components/entity/state-info";
declare class StateCardAlert extends LitElement {
    private _formatEntityState?;
    stateObj: HassEntity;
    inDialog: boolean;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-alert": StateCardAlert;
    }
}
export {};
