import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
/**
 * @element ha-row-item
 * @extends {LitElement}
 *
 * @summary
 * Generic row layout primitive. Renders a horizontal row with optional
 * leading/trailing slots and a stacked middle column (headline +
 * supporting text). Role-agnostic; use `ha-list-item-base` and its
 * subclasses for list semantics.
 *
 * @slot start - Leading container (usually icon/avatar).
 * @slot end - Trailing container (usually meta/chevron).
 * @slot headline - Primary text (overrides the `headline` attribute).
 * @slot supporting-text - Secondary text (overrides the `supporting-text` attribute).
 * @slot content - Escape hatch: replaces the entire middle column (headline + supporting-text).
 *
 * @csspart base - The outer container.
 * @csspart start - The leading slot wrapper.
 * @csspart content - The middle column wrapper.
 * @csspart headline - The headline wrapper.
 * @csspart supporting-text - The supporting-text wrapper.
 * @csspart end - The trailing slot wrapper.
 *
 * @cssprop --ha-row-item-padding-block - Vertical padding inside the row.
 * @cssprop --ha-row-item-padding-inline - Horizontal padding inside the row.
 * @cssprop --ha-row-item-gap - Gap between start, content, and end.
 * @cssprop --ha-row-item-min-height - Minimum row height.
 *
 * @attr {string} headline - Primary text. Overridden by the `headline` slot.
 * @attr {string} supporting-text - Secondary text. Overridden by the `supporting-text` slot.
 * @attr {boolean} disabled - Dims the row and blocks pointer events.
 */
export declare class HaRowItem extends LitElement {
    headline?: string;
    supportingText?: string;
    disabled: boolean;
    protected readonly _slotController: any;
    private _hasStart;
    private _hasEnd;
    private _onSlotChange;
    protected render(): TemplateResult;
    protected _renderBase(inner: TemplateResult): TemplateResult;
    protected _renderInner(): TemplateResult;
    protected _renderStart(): TemplateResult;
    protected _renderEnd(): TemplateResult;
    protected _renderDefaultContent(): TemplateResult;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-row-item": HaRowItem;
    }
}
