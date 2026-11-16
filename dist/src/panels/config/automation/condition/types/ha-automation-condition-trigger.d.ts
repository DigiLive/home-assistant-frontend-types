import { LitElement } from "lit";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-button";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/ha-trigger-icon";
import "../../../../../components/item/ha-list-item-option";
import "../../../../../components/list/ha-list-selectable";
import type { TriggerCondition } from "../../../../../data/automation";
import type { HomeAssistant } from "../../../../../types";
export declare class HaTriggerCondition extends LitElement {
    hass: HomeAssistant;
    condition: TriggerCondition;
    disabled: boolean;
    private _triggers?;
    private _entityReg;
    static get defaultConfig(): TriggerCondition;
    protected render(): string | import("lit-html").TemplateResult<1>;
    private _handleSelected;
    private _handleDeselected;
    private _selectId;
    private _fixDuplicateIds;
    private _missingIds;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-trigger": HaTriggerCondition;
    }
}
