import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
import "../../../../components/ha-svg-icon";
import "../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../types";
import "../cloud-signed-out-menu";
export declare class CloudStart extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    protected render(): TemplateResult;
    private _handleSignIn;
    private _handleRegister;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-start": CloudStart;
    }
}
