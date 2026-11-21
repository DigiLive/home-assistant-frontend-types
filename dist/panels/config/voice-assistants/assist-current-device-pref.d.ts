import { LitElement } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../types";
export declare class AssistCurrentDevicePref extends LitElement {
    hass: HomeAssistant;
    protected render(): import("lit-html").TemplateResult<1>;
    private _openSettings;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "assist-current-device-pref": AssistCurrentDevicePref;
    }
}
