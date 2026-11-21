import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../ha-relative-time";
import "../ha-tooltip";
import "./state-badge";
declare class StateInfo extends LitElement {
    stateObj?: HassEntity;
    inDialog: boolean;
    color?: string;
    private _formatEntityName?;
    private _localize;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-info": StateInfo;
    }
}
export {};
