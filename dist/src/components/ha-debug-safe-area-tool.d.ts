import { LitElement, nothing } from "lit";
import "./ha-button";
import "./ha-icon-button";
import "./ha-svg-icon";
import "./ha-switch";
import "./input/ha-input";
export declare class HaDebugSafeAreaTool extends LitElement {
    private _i18n?;
    private _config;
    private _open;
    private _position;
    private _dragStart?;
    private _dragged;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _update;
    private _applyPreset;
    private _sideChanged;
    private _highlightChanged;
    private _toggleOpen;
    private _pointerDown;
    private _pointerMove;
    private _pointerUp;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-debug-safe-area-tool": HaDebugSafeAreaTool;
    }
}
