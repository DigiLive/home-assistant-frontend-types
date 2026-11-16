import type { CSSResultGroup, TemplateResult } from "lit";
import { HaRowItem } from "./item/ha-row-item";
/**
 * @element ha-combo-box-item
 * @extends {HaRowItem}
 *
 * @summary
 * Content layout of picker rows and picker fields: icon, overline, headline,
 * supporting text, trailing text and end content. It is presentational only.
 * Interaction comes from the element around it, like `ha-list-item-option` in
 * a picker list or the button of `ha-picker-field`, which slot it into their
 * `content` slot.
 *
 * @slot start - Leading content (icon, badge, image).
 * @slot overline - Small text above the headline.
 * @slot - Headline text. Alternative to the `headline` slot.
 * @slot headline - Primary text.
 * @slot supporting-text - Secondary text. Multiple elements stack as lines.
 * @slot trailing-supporting-text - Meta text between the content and `end`.
 * @slot end - Trailing content (icons, buttons).
 *
 * @csspart base - The outer container.
 * @csspart start - The leading slot wrapper.
 * @csspart content - The text column.
 * @csspart end - The trailing slot wrapper.
 *
 * @cssprop --ha-combo-box-item-min-height - Minimum height of a row with one line of text. Defaults to `48px`.
 * @cssprop --ha-combo-box-item-two-line-min-height - Minimum height of a row with more than one line of text. Defaults to `64px`.
 * @cssprop --ha-combo-box-item-padding-block - Vertical padding. Defaults to `var(--ha-space-3)`.
 * @cssprop --ha-combo-box-item-padding-inline-start - Leading padding. Defaults to `var(--ha-space-4)`.
 * @cssprop --ha-combo-box-item-padding-inline-end - Trailing padding. Defaults to `var(--ha-space-4)`.
 * @cssprop --ha-combo-box-item-gap - Gap between start, content and end, and between elements within start and end. Defaults to `var(--ha-space-4)`.
 * @cssprop --ha-combo-box-item-headline-color - Headline color. Defaults to `var(--primary-text-color)`.
 * @cssprop --ha-combo-box-item-headline-font-weight - Headline font weight. Defaults to `var(--ha-font-weight-normal)`.
 * @cssprop --ha-combo-box-item-start-color - Color of the leading content. Defaults to `var(--secondary-text-color)`.
 * @cssprop --ha-combo-box-item-end-color - Color of the trailing content. Defaults to `var(--secondary-text-color)`.
 * @cssprop --ha-combo-box-item-disabled-opacity - Opacity of the content when disabled. Defaults to `0.3`.
 *
 * @attr {boolean} border-top - Draws a divider above the row.
 * @attr {boolean} multiline - Lets the headline and supporting text wrap instead of truncating.
 */
export declare class HaComboBoxItem extends HaRowItem {
    borderTop: boolean;
    multiline: boolean;
    private readonly _textSlots;
    private _isTwoLine;
    protected _renderBase(inner: TemplateResult): TemplateResult;
    protected _renderInner(): TemplateResult;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-combo-box-item": HaComboBoxItem;
    }
}
