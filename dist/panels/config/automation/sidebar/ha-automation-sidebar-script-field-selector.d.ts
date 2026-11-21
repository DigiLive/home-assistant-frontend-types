import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-dropdown-item";
import type { ScriptFieldSidebarConfig } from "../../../../data/automation";
import type { HomeAssistant } from "../../../../types";
import "../../script/ha-script-field-selector-editor";
import type HaAutomationConditionEditor from "../action/ha-automation-action-editor";
import "./ha-automation-sidebar-card";
export default class HaAutomationSidebarScriptFieldSelector extends LitElement {
    hass: HomeAssistant;
    config: ScriptFieldSidebarConfig;
    isWide: boolean;
    disabled: boolean;
    yamlMode: boolean;
    narrow: boolean;
    sidebarKey?: number;
    private _warnings?;
    editor?: HaAutomationConditionEditor;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChangedSidebar;
    private _yamlChangedSidebar;
    get canToggleYamlMode(): boolean;
    toggleYamlMode(): void;
    focusYamlEditor(): Promise<void>;
    private _handleDropdownSelect;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-sidebar-script-field-selector": HaAutomationSidebarScriptFieldSelector;
    }
}
