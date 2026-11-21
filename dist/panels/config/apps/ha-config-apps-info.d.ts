import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "../../../components/ha-svg-icon";
import "../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../types";
declare class HaConfigAppsInfo extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    protected render(): TemplateResult;
    private _dismiss;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-apps-info": HaConfigAppsInfo;
    }
}
export {};
