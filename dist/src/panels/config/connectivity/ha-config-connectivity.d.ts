import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-card";
import "../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../types";
import "../dashboard/ha-config-navigation";
import "../ha-config-section";
declare class HaConfigConnectivity extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    constructor();
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-connectivity": HaConfigConnectivity;
    }
}
export {};
