import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/item/ha-list-item-button";
import "../../../components/item/ha-row-item";
import "../../../components/list/ha-list-base";
import type { DiagnosticInfo } from "../../../data/diagnostics";
import type { EntityRegistryEntry } from "../../../data/entity/entity_registry";
import type { IntegrationManifest } from "../../../data/integration";
import type { HomeAssistant } from "../../../types";
import "./ha-config-entry-device-row";
import { type ConfigEntryData } from "./ha-config-integration-page";
import "./ha-config-sub-entry-row";
export declare class HaConfigEntryRow extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    manifest?: IntegrationManifest;
    diagnosticHandler?: DiagnosticInfo;
    entities: EntityRegistryEntry[];
    data: ConfigEntryData;
    private _expanded;
    private _devicesExpanded;
    protected render(): TemplateResult<1>;
    private _configPanel;
    private _getEntities;
    private _toggleExpand;
    private _toggleOwnDevices;
    private _handleMenuAction;
    private _showOptions;
    private _applicationCredentialForRemove;
    private _removeApplicationCredential;
    private _handleReload;
    private _handleReconfigure;
    private _handleCopy;
    private _handleRename;
    private _signUrl;
    private _handleDisable;
    private _handleEnable;
    private _handleDelete;
    private _handleSystemOptions;
    private _addSubEntry;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-entry-row": HaConfigEntryRow;
    }
}
