import "@home-assistant/webawesome/dist/components/divider/divider";
import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-dropdown-item";
import type { ActionSidebarConfig } from "../../../../data/automation";
import type { DomainManifestLookup } from "../../../../data/integration";
import type { HomeAssistant } from "../../../../types";
import type HaAutomationConditionEditor from "../action/ha-automation-action-editor";
import "../ha-automation-note";
import "./ha-automation-sidebar-card";
import "../action/ha-automation-action-editor";
export default class HaAutomationSidebarAction extends LitElement {
    hass: HomeAssistant;
    config: ActionSidebarConfig;
    manifests?: DomainManifestLookup;
    isWide: boolean;
    disabled: boolean;
    yamlMode: boolean;
    narrow: boolean;
    sidebarKey?: number;
    private _warnings?;
    editor?: HaAutomationConditionEditor;
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
        "ha-automation-sidebar-action": HaAutomationSidebarAction;
    }
}
