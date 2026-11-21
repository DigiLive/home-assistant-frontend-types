import { LitElement } from "lit";
import "../../../../components/ha-yaml-editor";
import type { HaYamlEditor } from "../../../../components/ha-yaml-editor";
import type { Condition } from "../../../../data/automation";
import type { ConditionDescription } from "../../../../data/condition";
import type { HomeAssistant } from "../../../../types";
import "../ha-automation-editor-warning";
import "./types/ha-automation-condition-platform";
export default class HaAutomationConditionEditor extends LitElement {
    hass: HomeAssistant;
    condition: Condition;
    disabled: boolean;
    yamlMode: boolean;
    indent: boolean;
    narrow: boolean;
    inSidebar: boolean;
    selected: boolean;
    uiSupported: boolean;
    description?: ConditionDescription;
    yamlEditor?: HaYamlEditor;
    private _collapsibleElement?;
    private _processedCondition;
    protected render(): import("lit-html").TemplateResult<1>;
    private _onYamlChange;
    private _onUiChanged;
    expandAll(): void;
    collapseAll(): void;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-editor": HaAutomationConditionEditor;
    }
}
