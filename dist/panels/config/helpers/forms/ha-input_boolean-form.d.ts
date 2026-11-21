import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-icon-picker";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-tooltip";
import "../../../../components/input/ha-input";
import "../../../../components/radio/ha-radio-group";
import "../../../../components/radio/ha-radio-option";
import type { InputBoolean } from "../../../../data/input_boolean";
import type { HomeAssistant } from "../../../../types";
declare class HaInputBooleanForm extends LitElement {
    hass: HomeAssistant;
    new: boolean;
    disabled: boolean;
    private _item?;
    private _name;
    private _icon;
    private _initial?;
    private _focusElement?;
    set item(item: InputBoolean);
    focus(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _initialChanged;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-input_boolean-form": HaInputBooleanForm;
    }
}
export {};
