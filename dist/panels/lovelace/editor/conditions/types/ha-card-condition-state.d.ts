import { LitElement } from "lit";
import "../../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../../types";
import type { StateCondition } from "../../../common/validate-condition";
export declare class HaCardConditionState extends LitElement {
    hass: HomeAssistant;
    condition: StateCondition;
    disabled: boolean;
    private _entityContext?;
    static get defaultConfig(): StateCondition;
    protected static validateUIConfig(condition: StateCondition): void;
    private _schema;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
