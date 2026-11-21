import { LitElement, type PropertyValues, type TemplateResult } from "lit";
import "./ha-button";
import "./ha-svg-icon";
export declare class HaAnsiToHtml extends LitElement {
    content: string;
    wrapDisabled: boolean;
    contextLines: number;
    expandLabel?: (count: number) => string;
    private _pre?;
    private _divs;
    private _filter;
    private _highlight?;
    private _expandedLines;
    private _expandGaps;
    get hasLines(): boolean;
    protected render(): TemplateResult;
    disconnectedCallback(): void;
    protected firstUpdated(_changedProperties: PropertyValues<this>): void;
    static styles: import("lit").CSSResult;
    /**
     * add new lines to the log
     * @param lines log lines
     * @param top should the new lines be added to the top of the log
     */
    parseLinesToColoredPre(lines: string[], top?: boolean): void;
    /**
     * Add a single line to the log
     * @param line log line
     * @param top should the new line be added to the top of the log
     */
    parseLineToColoredPre(line: any, top?: boolean): void;
    private _addLine;
    parseTextToColoredPre(text: any): void;
    /**
     * Filter lines based on a search string, lines and search string will be converted to lowercase
     * @param filter the search string
     * @returns true if there are lines to display
     */
    filterLines(filter: string): boolean;
    private _clearHighlight;
    private _updateExpandButtons;
    private _createExpandRow;
    trimLines(maxLines: number): void;
    clear(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-ansi-to-html": HaAnsiToHtml;
    }
}
