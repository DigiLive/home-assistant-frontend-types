import { LitElement } from "lit";
import type { HomeAssistant } from "../../../../../types";
import type { TimeCondition } from "../../../common/validate-condition";
import "../../../../../components/ha-form/ha-form";
export declare class HaCardConditionTime extends LitElement {
    hass: HomeAssistant;
    condition: TimeCondition;
    disabled: boolean;
    static get defaultConfig(): TimeCondition;
    protected static validateUIConfig(condition: TimeCondition): void;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-card-condition-time": HaCardConditionTime;
    }
}
