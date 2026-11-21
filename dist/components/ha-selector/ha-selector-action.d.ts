import { LitElement } from "lit";
import type { EntityRegistryEntry } from "../../data/entity/entity_registry";
import type { Action } from "../../data/script";
import type { ActionSelector } from "../../data/selector";
import "../../panels/config/automation/action/ha-automation-action";
import type { HomeAssistant } from "../../types";
export declare class HaActionSelector extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    selector: ActionSelector;
    value?: Action;
    label?: string;
    disabled: boolean;
    _entityReg: EntityRegistryEntry[] | undefined;
    private _actionElement?;
    private _actions;
    expandAll(): void;
    collapseAll(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-action": HaActionSelector;
    }
}
