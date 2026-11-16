import { LitElement } from "lit";
import "../animation/ha-fade-in";
import "./ha-skeleton-text";
/**
 * Placeholder for log lines while a log loads. It covers its nearest
 * positioned ancestor and shows as many whole lines as fit, so it never
 * scrolls. Like the data table's loading rows, the label is given to assistive
 * technology rather than shown.
 *
 * @cssprop --ha-skeleton-log-padding - The space around the lines. Defaults to `var(--ha-space-2)`.
 */
export declare class HaSkeletonLog extends LitElement {
    label?: string;
    private _lineCount;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-skeleton-log": HaSkeletonLog;
    }
}
