import { LitElement } from "lit";
import "./chips/ha-assist-chip";
import "./chips/ha-chip-set";
import "./chips/ha-input-chip";
import "./ha-generic-picker";
import "./ha-input-helper-text";
import type { PickerComboBoxItem } from "./ha-picker-combo-box";
import "./ha-sortable";
type ClockDatePartSection = "weekday" | "day" | "month" | "year" | "separator";
interface ClockDatePartSectionData {
    id: ClockDatePartSection;
    title: string;
    items: PickerComboBoxItem[];
}
/**
 * Filters out sections whose group already has a value in `value`, so only
 * one non-separator value per group can be selected in the picker. The whole
 * group of the item at `excludeIndex` (the one being edited) stays
 * selectable, even if that group has more than one value in `value` (e.g. a
 * pre-existing config authored outside the picker via YAML).
 * The separator group is always kept.
 */
export declare const getAvailableClockDatePartSections: (sections: ClockDatePartSectionData[], value: string[], excludeIndex?: number) => ClockDatePartSectionData[];
export declare class HaClockDateFormatPicker extends LitElement {
    disabled: boolean;
    required: boolean;
    label?: string;
    value?: string[] | string;
    helper?: string;
    private _i18n;
    private _hassConfig;
    private _picker?;
    private _editIndex?;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderHelper;
    private _getValueItems;
    private _renderValueChip;
    private _addItem;
    private _editItem;
    private get _value();
    private _toValue;
    private _buildSections;
    private _getSectionHeaders;
    private _getItems;
    private _getItemLabel;
    private _getPickerValue;
    private _moveItem;
    private _removeItem;
    private _pickerValueChanged;
    private _setValue;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-clock-date-format-picker": HaClockDateFormatPicker;
    }
}
export {};
