import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-md-button-menu";
import "../../../../components/ha-md-menu-item";
import "../../../../components/ha-md-divider";
import "../../../../components/ha-card";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-textfield";
import type { AutomationClipboard, Trigger } from "../../../../data/automation";
import type { EntityRegistryEntry } from "../../../../data/entity_registry";
import type { HomeAssistant } from "../../../../types";
import "./types/ha-automation-trigger-calendar";
import "./types/ha-automation-trigger-conversation";
import "./types/ha-automation-trigger-device";
import "./types/ha-automation-trigger-event";
import "./types/ha-automation-trigger-geo_location";
import "./types/ha-automation-trigger-homeassistant";
import "./types/ha-automation-trigger-list";
import "./types/ha-automation-trigger-mqtt";
import "./types/ha-automation-trigger-numeric_state";
import "./types/ha-automation-trigger-persistent_notification";
import "./types/ha-automation-trigger-state";
import "./types/ha-automation-trigger-sun";
import "./types/ha-automation-trigger-tag";
import "./types/ha-automation-trigger-template";
import "./types/ha-automation-trigger-time";
import "./types/ha-automation-trigger-time_pattern";
import "./types/ha-automation-trigger-webhook";
import "./types/ha-automation-trigger-zone";
export interface TriggerElement extends LitElement {
    trigger: Trigger;
}
export declare const handleChangeEvent: (element: TriggerElement, ev: CustomEvent) => void;
export default class HaAutomationTriggerRow extends LitElement {
    hass: HomeAssistant;
    trigger: Trigger;
    disabled: boolean;
    first?: boolean;
    last?: boolean;
    private _warnings?;
    private _yamlMode;
    private _requestShowId;
    private _triggered?;
    private _triggerColor;
    private _yamlEditor?;
    _clipboard?: AutomationClipboard;
    _entityReg: EntityRegistryEntry[];
    private _triggerUnsub?;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected updated(changedProps: PropertyValues<this>): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _subscribeTrigger;
    private _doSubscribeTrigger;
    private _handleUiModeNotAvailable;
    private _setClipboard;
    private _onDelete;
    private _onDisable;
    private _idChanged;
    private _onYamlChange;
    private _onUiChanged;
    private _switchUiMode;
    private _switchYamlMode;
    private _showTriggeredInfo;
    private _renameTrigger;
    private _showTriggerId;
    private _duplicateTrigger;
    private _copyTrigger;
    private _cutTrigger;
    private _moveUp;
    private _moveDown;
    private _toggleYamlMode;
    expand(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-row": HaAutomationTriggerRow;
    }
}
