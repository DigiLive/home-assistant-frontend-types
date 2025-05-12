import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-md-button-menu";
import "../../../../components/ha-md-menu-item";
import "../../../../components/ha-md-divider";
import "../../../../components/ha-card";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-service-icon";
import "../../../../components/ha-tooltip";
import type { AutomationClipboard } from "../../../../data/automation";
import type { EntityRegistryEntry } from "../../../../data/entity_registry";
import type { FloorRegistryEntry } from "../../../../data/floor_registry";
import type { LabelRegistryEntry } from "../../../../data/label_registry";
import type { Action } from "../../../../data/script";
import type { HomeAssistant } from "../../../../types";
import "./types/ha-automation-action-choose";
import "./types/ha-automation-action-condition";
import "./types/ha-automation-action-delay";
import "./types/ha-automation-action-device_id";
import "./types/ha-automation-action-event";
import "./types/ha-automation-action-if";
import "./types/ha-automation-action-parallel";
import "./types/ha-automation-action-play_media";
import "./types/ha-automation-action-repeat";
import "./types/ha-automation-action-sequence";
import "./types/ha-automation-action-service";
import "./types/ha-automation-action-set_conversation_response";
import "./types/ha-automation-action-stop";
import "./types/ha-automation-action-wait_for_trigger";
import "./types/ha-automation-action-wait_template";
export declare const getType: (action: Action | undefined) => "action" | "service" | "stop" | "parallel" | "play_media" | "delay" | "wait_template" | "wait_for_trigger" | "condition" | "event" | "device_id" | "repeat" | "choose" | "if" | "sequence" | "variables" | "set_conversation_response";
export interface ActionElement extends LitElement {
    action: Action;
}
export declare const handleChangeEvent: (element: ActionElement, ev: CustomEvent) => void;
export default class HaAutomationActionRow extends LitElement {
    hass: HomeAssistant;
    action: Action;
    narrow: boolean;
    disabled: boolean;
    first?: boolean;
    last?: boolean;
    _clipboard?: AutomationClipboard;
    _entityReg: EntityRegistryEntry[];
    _labelReg: LabelRegistryEntry[];
    _floorReg: Record<string, FloorRegistryEntry>;
    private _warnings?;
    private _uiModeAvailable;
    private _yamlMode;
    private _yamlEditor?;
    protected willUpdate(changedProperties: PropertyValues): void;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleUiModeNotAvailable;
    private _setClipboard;
    private _onDisable;
    private _runAction;
    private _onDelete;
    private _onYamlChange;
    private _onUiChanged;
    private _switchUiMode;
    private _switchYamlMode;
    private _renameAction;
    private _duplicateAction;
    private _copyAction;
    private _cutAction;
    private _moveUp;
    private _moveDown;
    private _toggleYamlMode;
    expand(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-action-row": HaAutomationActionRow;
    }
}
