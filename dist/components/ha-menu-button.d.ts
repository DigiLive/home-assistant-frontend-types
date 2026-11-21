import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "./ha-icon-button";
declare class HaMenuButton extends LitElement {
    private _connection?;
    private _localize;
    private _narrow;
    private _ui?;
    private _config?;
    private _hasNotifications;
    private _show;
    private _alwaysVisible;
    private _attachNotifOnConnect;
    private _unsubNotifications?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProps: PropertyValues): void;
    private _subscribeNotifications;
    private _toggleMenu;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-menu-button": HaMenuButton;
    }
}
export {};
