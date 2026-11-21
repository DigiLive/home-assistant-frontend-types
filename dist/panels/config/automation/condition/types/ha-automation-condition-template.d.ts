import { LitElement } from "lit";
import type { TemplateCondition } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import "../../../../../components/ha-form/ha-form";
export declare class HaTemplateCondition extends LitElement {
    hass: HomeAssistant;
    condition: TemplateCondition;
    disabled: boolean;
    static get defaultConfig(): TemplateCondition;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-template": HaTemplateCondition;
    }
}
