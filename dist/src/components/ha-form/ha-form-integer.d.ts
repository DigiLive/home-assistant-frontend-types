import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { LocalizeFunc } from "../../common/translations/localize";
import "../ha-checkbox";
import "../ha-input-helper-text";
import "../ha-slider";
import "../input/ha-input";
import type { HaFormElement, HaFormIntegerData, HaFormIntegerSchema } from "./types";
export declare class HaFormInteger extends LitElement implements HaFormElement {
    localize?: LocalizeFunc;
    schema: HaFormIntegerSchema;
    data?: HaFormIntegerData;
    label?: string;
    helper?: string;
    disabled: boolean;
    private _input?;
    private _lastValue?;
    static shadowRootOptions: {
        clonable?: boolean;
        customElementRegistry?: CustomElementRegistry | null;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
        delegatesFocus: boolean;
    };
    reportValidity(): boolean;
    private _showSlider;
    protected render(): TemplateResult;
    protected updated(changedProps: PropertyValues<this>): void;
    private get _value();
    private _handleCheckboxChange;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-form-integer": HaFormInteger;
    }
}
