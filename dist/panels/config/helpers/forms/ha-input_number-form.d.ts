import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-device-class-picker";
import "../../../../components/ha-icon-picker";
import "../../../../components/radio/ha-radio-group";
import "../../../../components/radio/ha-radio-option";
import "../../../../components/ha-selector/ha-selector-unit-of-measurement";
import "../../../../components/input/ha-input";
import type { InputNumber } from "../../../../data/input_number";
import type { HomeAssistant } from "../../../../types";
declare class HaInputNumberForm extends LitElement {
    hass: HomeAssistant;
    new: boolean;
    disabled: boolean;
    private _item?;
    private _name;
    private _icon;
    private _max?;
    private _min?;
    private _mode?;
    private _step?;
    private _device_class?;
    private _unit_of_measurement?;
    private _focusElement?;
    set item(item: InputNumber);
    focus(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _unitContext;
    private _pickerValueChanged;
    private _modeChanged;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-input_number-form": HaInputNumberForm;
    }
}
export {};
