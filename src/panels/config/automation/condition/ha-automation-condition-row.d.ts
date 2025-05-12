import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-md-button-menu";
import "../../../../components/ha-md-menu-item";
import "../../../../components/ha-md-divider";
import "../../../../components/ha-card";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-icon-button";
import type { AutomationClipboard, Condition } from "../../../../data/automation";
import type { EntityRegistryEntry } from "../../../../data/entity_registry";
import type { HomeAssistant } from "../../../../types";
import "./ha-automation-condition-editor";
export interface ConditionElement extends LitElement {
    condition: Condition;
}
export declare const handleChangeEvent: (element: ConditionElement, ev: CustomEvent) => void;
export default class HaAutomationConditionRow extends LitElement {
    hass: HomeAssistant;
    condition: Condition;
    disabled: boolean;
    first?: boolean;
    last?: boolean;
    _clipboard?: AutomationClipboard;
    private _yamlMode;
    private _warnings?;
    private _testing;
    private _testingResult?;
    _entityReg: EntityRegistryEntry[];
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleUiModeNotAvailable;
    private _handleChangeEvent;
    private _setClipboard;
    private _onDisable;
    private _onDelete;
    private _switchUiMode;
    private _switchYamlMode;
    private _testCondition;
    private _renameCondition;
    private _duplicateCondition;
    private _copyCondition;
    private _cutCondition;
    private _moveUp;
    private _moveDown;
    private _toggleYamlMode;
    expand(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-row": HaAutomationConditionRow;
    }
}
