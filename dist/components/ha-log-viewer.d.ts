import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "./ha-ansi-to-html";
import "./ha-button";
import "./ha-svg-icon";
export declare class HaLogViewer extends LitElement {
    maxLines: number;
    filter: string;
    wrapDisabled: boolean;
    private _i18n;
    private _newLogsIndicator;
    private _noMatches;
    private _logElement;
    private _ansiToHtml;
    private _lines;
    private _followFrame?;
    private _ready;
    get lines(): string[];
    addLines(lines: string[]): void;
    clear(): void;
    scrollToBottom(): void;
    disconnectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProps: PropertyValues<this>): Promise<void>;
    protected updated(changedProps: PropertyValues<this>): void;
    private _renderLines;
    private _debouncedFilter;
    private _applyFilter;
    private _trimLines;
    private _isScrolledToBottom;
    private _handleScroll;
    private _followBottom;
    private _cancelFollowBottom;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-log-viewer": HaLogViewer;
    }
}
