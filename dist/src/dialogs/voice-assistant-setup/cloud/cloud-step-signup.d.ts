import { LitElement } from "lit";
import "../../../components/ha-spinner";
import "../../../panels/config/cloud/register/cloud-register-card";
import type { HomeAssistant } from "../../../types";
export declare class CloudStepSignup extends LitElement {
    hass: HomeAssistant;
    private _autoLogin;
    private _loading;
    private _email?;
    private _unsubCloudEvents?;
    private _statusRead;
    private _wasLoggedIn?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    private _watchCloudStatus;
    private _loadInitialStatus;
    private _refreshCloudStatus;
    private _readCloudStatus;
    private _emailChanged;
    private _signIn;
    private _cancelAutoLogin;
    static styles: (import("lit").CSSResult[] | import("lit").CSSResult)[];
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-step-signup": CloudStepSignup;
    }
}
