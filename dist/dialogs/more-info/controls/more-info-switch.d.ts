import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../state-control/ha-state-control-toggle";
import "../components/ha-more-info-state-header";
declare class MoreInfoSwitch extends LitElement {
    private _localize;
    stateObj?: HassEntity;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-switch": MoreInfoSwitch;
    }
}
export {};
