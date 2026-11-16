import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { NumericThresholdSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-button-toggle-group";
import "../ha-input-helper-text";
import "../ha-select";
import "./ha-selector";
type ThresholdType = "above" | "below" | "between" | "outside" | "any";
export interface ThresholdValueEntry {
    active_choice?: string;
    number?: number;
    entity?: string;
    unit_of_measurement?: string;
}
export interface NumericThresholdValue {
    type: ThresholdType;
    value?: ThresholdValueEntry;
    value_min?: ThresholdValueEntry;
    value_max?: ThresholdValueEntry;
}
export declare class HaNumericThresholdSelector extends LitElement {
    hass: HomeAssistant;
    selector: NumericThresholdSelector;
    value?: NumericThresholdValue;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    private _type?;
    private _getMode;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected updated(changedProperties: PropertyValues<this>): void;
    private _getUnitOptions;
    private _getEntityFilter;
    protected render(): import("lit-html").TemplateResult<1>;
    private _buildTypeOptions;
    private _renderUnitSelect;
    private _renderValueRow;
    private _typeChanged;
    private _choiceChanged;
    private _valueChoiceChanged;
    private _valueMinChoiceChanged;
    private _valueMaxChoiceChanged;
    private _entryChanged;
    private _valueChanged;
    private _valueMinChanged;
    private _valueMaxChanged;
    private _unitFieldChanged;
    private _unitChanged;
    private _unitMinChanged;
    private _unitMaxChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-numeric_threshold": HaNumericThresholdSelector;
    }
}
export {};
