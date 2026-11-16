import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/buttons/ha-progress-button";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
import "../../../../components/ha-spinner";
import "../../../../components/ha-svg-icon";
import "../../../../components/input/ha-input";
import type { CloudAutoLogin } from "../../../../data/cloud";
import type { HomeAssistant } from "../../../../types";
export declare class CloudRegisterCard extends LitElement {
    hass: HomeAssistant;
    email?: string;
    autoLogin: CloudAutoLogin | null;
    cardLess: boolean;
    private _requestInProgress;
    private _resendInProgress;
    private _attemptInProgress;
    private _autoLoginError?;
    private _error?;
    private _success?;
    private _registeredEmail;
    private _override?;
    private _failedKey;
    private _confirmingReported?;
    private _emailField?;
    private _passwordField?;
    private _confirmTitle?;
    private get _confirming();
    private get _pendingEmail();
    protected willUpdate(changedProps: PropertyValues): void;
    protected updated(changedProps: PropertyValues): void;
    protected render(): TemplateResult;
    private _renderForm;
    private _renderConfirm;
    private _keyDown;
    private _handleSignInInstead;
    private _handleCancelPending;
    private _dismiss;
    private _clearAutoLoginFailure;
    private _handleRegister;
    private _localizeBackendMessage;
    private _websocketErrorMessage;
    private _resolveAutoLoginError;
    private _handleAttemptNow;
    private _handleResendVerifyEmail;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-register-card": CloudRegisterCard;
    }
    interface HASSDomEvents {
        "cloud-cancel-auto-login": undefined;
        "cloud-auto-login-started": undefined;
        "cloud-register-view-changed": {
            confirming: boolean;
        };
        "cloud-sign-in-instead": undefined;
    }
}
