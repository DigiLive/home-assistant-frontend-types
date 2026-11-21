import type { CSSResultGroup, TemplateResult } from "lit";
import "../ha-checkbox";
import "../ha-ripple";
import { HaListItemBase } from "./ha-list-item-base";
export type HaListItemOptionAppearance = "line" | "checkbox";
export type HaListItemOptionSelectionPosition = "start" | "end";
/**
 * @element ha-list-item-option
 * @extends {HaListItemBase}
 *
 * @summary
 * Selectable list row (role `option`). Selection state is driven by the parent
 * `ha-list-selectable`; reflects `aria-selected`. When `appearance="checkbox"`, renders
 * a decorative `<ha-checkbox>` (clicks on the row are handled by the listbox).
 *
 * @csspart checkbox - Wrapper around the `<ha-checkbox>` when `appearance="checkbox"`.
 * @csspart ripple - The ripple effect element.
 *
 * @cssprop --ha-list-item-selected-background - Background color when selected (`appearance="line"`).
 *
 * @attr {boolean} selected - Whether the option is selected. Set by the parent `ha-list-selectable`.
 * @attr {boolean} indeterminate - Draws the checkbox in an indeterminate state, for a row that stands for a partially selected set.
 * @attr {string} value - Value identifying the option.
 * @attr {("line"|"checkbox")} appearance - Visual style. "line" highlights the row; "checkbox" renders an `ha-checkbox`.
 * @attr {("start"|"end")} selection-position - Side the checkbox sits on when `appearance="checkbox"`.
 */
export declare class HaListItemOption extends HaListItemBase {
    selected: boolean;
    indeterminate: boolean;
    value?: string;
    appearance: HaListItemOptionAppearance;
    selectionPosition: HaListItemOptionSelectionPosition;
    protected readonly defaultRole = "option";
    interactive: boolean;
    update(changed: Map<string, unknown>): void;
    protected _renderBase(inner: TemplateResult): TemplateResult;
    private _renderRipple;
    private _renderCheckbox;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-list-item-option": HaListItemOption;
    }
}
