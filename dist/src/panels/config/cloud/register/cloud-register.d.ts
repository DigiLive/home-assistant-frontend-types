import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { CloudStatus } from "../../../../data/cloud";
import "../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../types";
import "../cloud-signed-out-menu";
import "./cloud-register-card";
export declare class CloudRegister extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    email?: string;
    cloudStatus?: CloudStatus;
    private _confirming;
    protected render(): TemplateResult;
    private _viewChanged;
    private _handleSignInInstead;
    private _handleConfirmBack;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-register": CloudRegister;
    }
}
