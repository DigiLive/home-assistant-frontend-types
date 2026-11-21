import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../components/entity/state-info";
declare class StateCardEvent extends LitElement {
    private _formatters?;
    stateObj: HassEntity;
    inDialog: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-event": StateCardEvent;
    }
}
export {};
