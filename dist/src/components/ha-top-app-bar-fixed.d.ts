import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "./ha-icon-button-arrow-prev";
import "./ha-menu-button";
export declare const haTopAppBarFixedStyles: import("lit").CSSResult;
export declare class HaTopAppBarFixed extends LitElement {
    narrow: boolean;
    backButton: boolean;
    centerTitle: boolean;
    protected _barElement: HTMLElement;
    protected _subRowElement?: HTMLElement;
    protected _scrollElement?: HTMLElement;
    private _hasSubRow;
    private _scrollTarget?;
    private _subRowResizeObserver?;
    get scrollTarget(): HTMLElement | Window;
    set scrollTarget(value: HTMLElement | Window);
    protected _isPaneHeader(): boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    protected _renderHeader(): import("lit-html").TemplateResult<1>;
    private _renderNavigationIcon;
    protected _renderContent(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    protected updated(changedProperties: PropertyValues): void;
    disconnectedCallback(): void;
    protected _syncScrollState: () => void;
    private _handleBackClick;
    protected _registerListeners(): void;
    protected _unregisterListeners(): void;
    private _observeSubRowHeight;
    private _unobserveSubRowHeight;
    private _subRowSlotChanged;
    private _updateSubRowHeight;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-top-app-bar-fixed": HaTopAppBarFixed;
    }
}
