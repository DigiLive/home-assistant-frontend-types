import { LitElement } from "lit";
import "../../../../../components/ha-form/ha-form";
import type { SunCondition } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import type { ConditionElement } from "../ha-automation-condition-row";
export declare class HaSunCondition extends LitElement implements ConditionElement {
    hass: HomeAssistant;
    condition: SunCondition;
    disabled: boolean;
    private _formType;
    connectedCallback(): void;
    static get defaultConfig(): SunCondition;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
    private _typeSelected;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-sun": HaSunCondition;
    }
}
