import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-icon-picker";
import "../../../../components/input/ha-input";
import "../../../../components/radio/ha-radio-group";
import "../../../../components/radio/ha-radio-option";
import type { InputDateTime } from "../../../../data/input_datetime";
import type { HomeAssistant } from "../../../../types";
declare class HaInputDateTimeForm extends LitElement {
    hass: HomeAssistant;
    new: boolean;
    disabled: boolean;
    private _item?;
    private _name;
    private _icon;
    private _mode;
    private _focusElement?;
    set item(item: InputDateTime);
    focus(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _modeChanged;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-input_datetime-form": HaInputDateTimeForm;
    }
}
export {};
