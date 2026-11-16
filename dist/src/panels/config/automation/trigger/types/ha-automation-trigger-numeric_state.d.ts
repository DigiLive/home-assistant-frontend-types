import { LitElement } from "lit";
import "../../../../../components/ha-form/ha-form";
import type { NumericStateTrigger } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
export declare class HaNumericStateTrigger extends LitElement {
    hass: HomeAssistant;
    trigger: NumericStateTrigger;
    disabled: boolean;
    static get defaultConfig(): NumericStateTrigger;
    private _unwrapForValue;
    private _unwrapThresholdValue;
    private _data;
    render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-numeric_state": HaNumericStateTrigger;
    }
}
