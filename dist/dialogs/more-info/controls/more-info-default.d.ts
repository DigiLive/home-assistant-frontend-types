import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement } from "lit";
import type { HomeAssistant } from "../../../types";
declare class MoreInfoDefault extends LitElement {
    hass: HomeAssistant;
    stateObj?: HassEntity;
    protected render(): symbol;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-default": MoreInfoDefault;
    }
}
export {};
