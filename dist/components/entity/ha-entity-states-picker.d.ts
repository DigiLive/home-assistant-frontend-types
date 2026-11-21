import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "./ha-entity-state-picker";
export declare class HaEntityStatesPicker extends LitElement {
    entityId?: string;
    attribute?: string;
    extraOptions?: any[];
    allowCustomValue: any;
    label?: string;
    value?: string[];
    helper?: string;
    disabled: boolean;
    required: boolean;
    hideStates?: string[];
    private _keys;
    private _getKey;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _addValue;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-states-picker": HaEntityStatesPicker;
    }
}
