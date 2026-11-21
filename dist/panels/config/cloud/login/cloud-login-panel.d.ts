import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-alert";
import "../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../types";
import "./cloud-login";
export declare class CloudLoginPanel extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    email?: string;
    flashMessage?: string;
    private _cloudLoginElement?;
    protected firstUpdated(): void;
    protected render(): TemplateResult;
    private _focusEmail;
    private _handleForgotPassword;
    private _dismissFlash;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-login-panel": CloudLoginPanel;
    }
    interface HASSDomEvents {
        "cloud-email-changed": {
            value: string;
        };
        "flash-message-changed": {
            value: string;
        };
    }
}
