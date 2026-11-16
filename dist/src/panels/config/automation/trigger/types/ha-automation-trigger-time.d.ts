import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { LocalizeFunc } from "../../../../../common/translations/localize";
import "../../../../../components/ha-form/ha-form";
import type { TimeTrigger } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import type { TriggerElement } from "../ha-automation-trigger-row";
export declare class HaTimeTrigger extends LitElement implements TriggerElement {
    hass: HomeAssistant;
    trigger: TimeTrigger;
    disabled: boolean;
    private _inputMode;
    static get defaultConfig(): TimeTrigger;
    static checkUiSupport(localize: LocalizeFunc, trigger: TimeTrigger): Error | undefined;
    private _schema;
    shouldUpdate(changedProperties: PropertyValues<this>): boolean;
    private _data;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-time": HaTimeTrigger;
    }
}
