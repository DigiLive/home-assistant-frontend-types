import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../components/automation/ha-automation-row";
import "../../../components/ha-card";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import type { Field } from "../../../data/script";
import type { HomeAssistant } from "../../../types";
import "./ha-script-field-selector-editor";
export default class HaScriptFieldRow extends LitElement {
    hass: HomeAssistant;
    key: string;
    excludeKeys: string[];
    field: Field;
    disabled: boolean;
    narrow: boolean;
    highlight?: boolean;
    private _yamlMode;
    private _selected;
    private _collapsed;
    private _selectorRowSelected;
    private _selectorRowCollapsed;
    private _selectorEditor?;
    private _fieldRowElement?;
    private _selectorRowElement?;
    protected render(): import("lit-html").TemplateResult<1>;
    private _toggleCollapse;
    expand(): void;
    collapse(): void;
    expandSelectorRow(): void;
    collapseSelectorRow(): void;
    private _toggleSelectorRowCollapse;
    expandAll(): void;
    collapseAll(): void;
    private _toggleSidebar;
    private _toggleSelectorSidebar;
    private _selectorValueChanged;
    private _editNote;
    openSidebar(selectorEditor?: boolean, fieldValue?: HaScriptFieldRow["field"]): void;
    private _toggleYamlMode;
    private _onDelete;
    focus(): void;
    focusSelector(): void;
    private _handleDropdownSelect;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-script-field-row": HaScriptFieldRow;
    }
}
