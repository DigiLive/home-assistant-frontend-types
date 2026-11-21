import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../components/entity/state-info";
import "../components/ha-lawn_mower-action-button";
declare class StateCardLawnMower extends LitElement {
    stateObj: HassEntity;
    inDialog: boolean;
    render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-lawn_mower": StateCardLawnMower;
    }
}
export {};
