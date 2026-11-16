import { LitElement, nothing, type PropertyValues } from "lit";
import type { PlatformCondition, PlatformTrigger } from "../../../data/automation";
import type { ConditionDescription } from "../../../data/condition";
import type { TriggerDescription } from "../../../data/trigger";
export declare class HaAutomationRowThreshold extends LitElement {
    config: PlatformTrigger | PlatformCondition;
    description?: TriggerDescription | ConditionDescription;
    private _i18n;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _getThreshold;
    private _getLabel;
    private _unit;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-row-threshold": HaAutomationRowThreshold;
    }
}
