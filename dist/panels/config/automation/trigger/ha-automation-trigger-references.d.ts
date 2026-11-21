import { LitElement } from "lit";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-tooltip";
import "../../../../components/ha-trigger-icon";
import type { TriggerCondition } from "../../../../data/automation";
import type { HomeAssistant } from "../../../../types";
export declare class HaAutomationTriggerReferences extends LitElement {
    condition: TriggerCondition;
    hass: HomeAssistant;
    private _entityReg;
    private _triggers?;
    protected render(): import("lit-html").TemplateResult<1>[][] | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-references": HaAutomationTriggerReferences;
    }
}
