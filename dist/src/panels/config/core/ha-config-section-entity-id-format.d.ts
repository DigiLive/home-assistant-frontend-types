import { LitElement } from "lit";
import "../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../types";
import "./ha-config-entity-id-format";
export declare class HaConfigSectionEntityIdFormat extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-section-entity-id-format": HaConfigSectionEntityIdFormat;
    }
}
