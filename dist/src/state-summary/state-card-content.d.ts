import { LitElement } from "lit";
import type { HassEntity } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
import "./state-card-alert";
import "./state-card-button";
import "./state-card-climate";
import "./state-card-configurator";
import "./state-card-cover";
import "./state-card-display";
import "./state-card-event";
import "./state-card-humidifier";
import "./state-card-input_button";
import "./state-card-input_number";
import "./state-card-input_select";
import "./state-card-input_text";
import "./state-card-lawn_mower";
import "./state-card-lock";
import "./state-card-media_player";
import "./state-card-number";
import "./state-card-scene";
import "./state-card-script";
import "./state-card-select";
import "./state-card-text";
import "./state-card-timer";
import "./state-card-toggle";
import "./state-card-update";
import "./state-card-vacuum";
import "./state-card-water_heater";
declare class StateCardContent extends LitElement {
    hass: HomeAssistant;
    stateObj: HassEntity;
    inDialog: boolean;
    protected render(): any;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-card-content": StateCardContent;
    }
}
export {};
