import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { LocalizeFunc } from "../../../../../common/translations/localize";
import "../../../../../components/ha-form/ha-form";
import type { NumericStateCondition } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
export default class HaNumericStateCondition extends LitElement {
    hass: HomeAssistant;
    condition: NumericStateCondition;
    disabled: boolean;
    private _inputAboveIsEntity?;
    private _inputBelowIsEntity?;
    static get defaultConfig(): NumericStateCondition;
    static checkUiSupport(_localize: LocalizeFunc, condition: NumericStateCondition): Error | undefined;
    shouldUpdate(changedProperties: PropertyValues<this>): boolean;
    private _data;
    private _schema;
    willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-numeric_state": HaNumericStateCondition;
    }
}
