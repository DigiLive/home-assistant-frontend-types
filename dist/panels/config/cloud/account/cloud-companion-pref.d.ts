import { LitElement } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
import "../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../types";
export declare class CloudCompanionPref extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-companion-pref": CloudCompanionPref;
    }
}
