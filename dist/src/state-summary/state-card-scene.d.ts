import "@material/mwc-button";
import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../components/entity/state-info";
import type { HomeAssistant } from "../types";
declare class StateCardScene extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    inDialog: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _activateScene;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-scene": StateCardScene;
    }
}
export {};
