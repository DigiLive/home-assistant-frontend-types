import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { LocalizeFunc } from "../../../../../common/translations/localize";
import "../../../../../components/ha-form/ha-form";
import type { StateTrigger } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
import type { TriggerElement } from "../ha-automation-trigger-row";
export declare class HaStateTrigger extends LitElement implements TriggerElement {
    hass: HomeAssistant;
    trigger: StateTrigger;
    disabled: boolean;
    static get defaultConfig(): StateTrigger;
    static checkUiSupport(localize: LocalizeFunc, trigger: StateTrigger): Error | undefined;
    private _schema;
    private _matchSelector;
    shouldUpdate(changedProperties: PropertyValues<this>): boolean;
    private _unwrapForValue;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _toMatchValue;
    private _applyMatchValue;
    private _applyAnyStateExclusive;
    private _normalizeStates;
    private _computeLabelCallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-state": HaStateTrigger;
    }
}
