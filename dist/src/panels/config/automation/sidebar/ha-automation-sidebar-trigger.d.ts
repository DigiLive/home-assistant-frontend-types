import "@home-assistant/webawesome/dist/components/divider/divider";
import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-dropdown-item";
import type { TriggerSidebarConfig } from "../../../../data/automation";
import type { HomeAssistant } from "../../../../types";
import "../ha-automation-note";
import "../trigger/ha-automation-trigger-editor";
import type HaAutomationTriggerEditor from "../trigger/ha-automation-trigger-editor";
import "./ha-automation-sidebar-card";
export default class HaAutomationSidebarTrigger extends LitElement {
    hass: HomeAssistant;
    config: TriggerSidebarConfig;
    isWide: boolean;
    disabled: boolean;
    yamlMode: boolean;
    narrow: boolean;
    sidebarKey?: number;
    private _warnings?;
    editor?: HaAutomationTriggerEditor;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleUiModeNotAvailable;
    private _valueChangedSidebar;
    private _yamlChangedSidebar;
    private _checkUiSupport;
    get canToggleYamlMode(): boolean;
    toggleYamlMode(): void;
    focusYamlEditor(): Promise<void>;
    private _handleDropdownSelect;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-sidebar-trigger": HaAutomationSidebarTrigger;
    }
}
