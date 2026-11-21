import { LitElement } from "lit";
import "../../../panels/config/cloud/login/cloud-login";
import type { HomeAssistant } from "../../../types";
export declare class CloudStepSignin extends LitElement {
    hass: HomeAssistant;
    email?: string;
    render(): import("lit-html").TemplateResult<1>;
    private _loggedIn;
    private _forgotPassword;
    static styles: (import("lit").CSSResult[] | import("lit").CSSResult)[];
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-step-signin": CloudStepSignin;
    }
}
