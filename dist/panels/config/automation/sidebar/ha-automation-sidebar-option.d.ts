import "@home-assistant/webawesome/dist/components/divider/divider";
import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-dropdown-item";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-yaml-editor";
import type { HaYamlEditor } from "../../../../components/ha-yaml-editor";
import type { OptionSidebarConfig } from "../../../../data/automation";
import type { HomeAssistant } from "../../../../types";
import "../ha-automation-note";
import "./ha-automation-sidebar-card";
export default class HaAutomationSidebarOption extends LitElement {
    hass: HomeAssistant;
    config: OptionSidebarConfig;
    isWide: boolean;
    disabled: boolean;
    narrow: boolean;
    yamlMode: boolean;
    sidebarKey?: number;
    private _warnings?;
    editor?: HaYamlEditor;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _yamlChanged;
    private _checkUiSupport;
    get canToggleYamlMode(): boolean;
    toggleYamlMode(): void;
    focusYamlEditor(): Promise<void>;
    private _handleDropdownSelect;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-sidebar-option": HaAutomationSidebarOption;
    }
}
