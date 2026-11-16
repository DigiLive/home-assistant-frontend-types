import { LitElement } from "lit";
export type ToastCloseReason = "dismiss" | "action" | "timeout" | "programmatic";
export interface ToastClosedEventDetail {
    reason: ToastCloseReason;
}
export declare class HaToast extends LitElement {
    labelText: string;
    announceText?: string;
    timeoutMs: number;
    bottomOffset: number;
    stacked: boolean;
    private _toast?;
    private _actionElements?;
    private _dismissElements?;
    private _active;
    private _visible;
    private _dismissTimer?;
    private _closeReason;
    private _transitionId;
    disconnectedCallback(): void;
    show(): Promise<void>;
    hide(reason?: ToastCloseReason): Promise<void>;
    close(reason?: ToastCloseReason): void;
    private _setDismissTimer;
    private _isPopoverOpen;
    private _showToastPopover;
    private _hideToastPopover;
    private _waitForTransitionEnd;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HASSDomEvents {
        "toast-closed": ToastClosedEventDetail;
    }
    interface HTMLElementTagNameMap {
        "ha-toast": HaToast;
    }
}
