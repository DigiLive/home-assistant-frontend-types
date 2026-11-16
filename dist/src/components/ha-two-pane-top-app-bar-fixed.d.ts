import type { PropertyValues } from "lit";
import { HaTopAppBarFixed } from "./ha-top-app-bar-fixed";
export declare class HaTwoPaneTopAppBarFixed extends HaTopAppBarFixed {
    pane: boolean;
    footer: boolean;
    private _contentElement?;
    private _paneElement?;
    protected _isPaneHeader(): boolean;
    protected _renderContent(): import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected updated(changedProperties: PropertyValues<this>): void;
    private _handlePaneScroll;
    protected _registerListeners(): void;
    protected _unregisterListeners(): void;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-two-pane-top-app-bar-fixed": HaTwoPaneTopAppBarFixed;
    }
}
