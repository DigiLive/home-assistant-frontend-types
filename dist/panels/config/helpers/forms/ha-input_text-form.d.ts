import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-form/ha-form";
import "../../../../components/ha-icon-picker";
import "../../../../components/radio/ha-radio-group";
import "../../../../components/radio/ha-radio-option";
import "../../../../components/input/ha-input";
import type { InputText } from "../../../../data/input_text";
import type { HomeAssistant } from "../../../../types";
declare class HaInputTextForm extends LitElement {
    hass: HomeAssistant;
    new: boolean;
    disabled: boolean;
    private _item?;
    private _name;
    private _icon;
    private _max?;
    private _min?;
    private _mode?;
    private _pattern?;
    private _focusElement?;
    set item(item: InputText);
    focus(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _modeChanged;
    private _valueChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-input_text-form": HaInputTextForm;
    }
}
export {};
