import "@home-assistant/webawesome/dist/components/drawer/drawer";
import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { HASSDomEvent } from "../common/dom/fire_event";
declare global {
    interface HASSDomEvents {
        "hass-drawer-closed": undefined;
        "hass-layout-transition": {
            active: boolean;
            reason?: string;
        };
    }
    interface HTMLElementEventMap {
        "hass-drawer-closed": HASSDomEvent<HASSDomEvents["hass-drawer-closed"]>;
        "hass-layout-transition": HASSDomEvent<HASSDomEvents["hass-layout-transition"]>;
    }
}
export declare class HaDrawer extends LitElement {
    private static readonly _SWIPE_AXIS_TOLERANCE;
    direction: "ltr" | "rtl";
    type: "" | "dismissible" | "modal";
    open: boolean;
    private _modalDrawer?;
    private _sidebarShell?;
    private _sidebarTransitionActive;
    private _transitionTarget?;
    private _gestureRecognizer;
    private _touchStartY;
    private _touchDeltaY;
    private get _modal();
    protected render(): TemplateResult;
    protected updated(_: PropertyValues<this>): void;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    private _handleAfterHide;
    private _closeModalDrawer;
    private _handleDrawerTransitionStart;
    private _handleDrawerTransitionEnd;
    private _handleTouchStart;
    private _startSwipeTracking;
    private _handleTouchMove;
    private _handleTouchEnd;
    private _unregisterSwipeHandlers;
    private _resetSwipeTracking;
    private _syncTransitionListeners;
    private _removeTransitionListeners;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-drawer": HaDrawer;
    }
}
