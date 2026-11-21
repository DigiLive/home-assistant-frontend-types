import { LitElement, nothing } from "lit";
import type { LocalizeKeys } from "../common/translations/localize";
import "../components/ha-button";
import "../components/ha-icon-button";
import "../components/ha-toast";
import type { HomeAssistant } from "../types";
export interface ShowToastParams {
    id?: string;
    message: string | {
        translationKey: LocalizeKeys;
        args?: Record<string, string | number>;
    };
    announceMessage?: string | {
        translationKey: LocalizeKeys;
        args?: Record<string, string | number>;
    };
    action?: ToastActionParams;
    secondaryAction?: ToastActionParams;
    dismiss?: () => void;
    duration?: number;
    dismissable?: boolean;
    bottomOffset?: number;
}
export interface ToastActionParams {
    action: () => void;
    primary?: boolean;
    text: string | {
        translationKey: LocalizeKeys;
        args?: Record<string, string | number>;
    };
}
declare class NotificationManager extends LitElement {
    hass: HomeAssistant;
    private _notifications;
    private _stack?;
    private _toasts;
    private _anonymousId;
    showDialog(parameters: ShowToastParams): Promise<void>;
    private _toastClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderAction;
    private _buttonClicked;
    private _secondaryButtonClicked;
    private _dismissClicked;
    private _getNotification;
    private _getToast;
    private _closeNotification;
    private _removeNotification;
    private _showStack;
    private _hideStack;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "notification-manager": NotificationManager;
    }
    interface HASSDomEvents {
        "hass-notification": ShowToastParams;
    }
}
export {};
