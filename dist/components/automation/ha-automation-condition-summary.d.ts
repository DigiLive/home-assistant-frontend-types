import { LitElement } from "lit";
import type { Condition } from "../../data/automation";
import type { ConditionDescription } from "../../data/condition";
import "../../panels/config/automation/ha-automation-row-options";
import "../../panels/config/automation/ha-automation-row-threshold";
import "../../panels/config/automation/target/ha-automation-row-targets";
import "../ha-svg-icon";
import "../ha-tooltip";
export declare class HaAutomationConditionSummary extends LitElement {
    protected _targetExpandGroup: boolean;
    label: string;
    condition?: Condition;
    description?: ConditionDescription;
    isNew: boolean;
    private _i18n;
    private _getEntityTarget;
    private _getDeviceTarget;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-summary": HaAutomationConditionSummary;
    }
}
