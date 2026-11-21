import "@home-assistant/webawesome/dist/components/divider/divider";
import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/entity/ha-battery-icon";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-icon";
import "../../../components/ha-icon-button";
import "../../../components/ha-icon-button-next";
import "../../../components/ha-icon-next";
import "../../../components/item/ha-list-item-base";
import "../../../components/item/ha-list-item-button";
import "../../../components/list/ha-list-nav";
import "../../../components/ha-spinner";
import "../../../components/ha-svg-icon";
import "../../../components/ha-tooltip";
import type { ConfigEntry } from "../../../data/config_entries";
import type { EntityRegistryEntry } from "../../../data/entity/entity_registry";
import type { IntegrationManifest } from "../../../data/integration";
import "../../../layouts/hass-error-screen";
import "../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../types";
import "../../logbook/ha-logbook";
import "./device-detail/ha-device-child-devices-card";
import "./device-detail/ha-device-entities-card";
import "./device-detail/ha-device-info-card";
import "./device-detail/ha-device-linked-devices-card";
import "./device-detail/ha-device-via-devices-card";
export interface EntityRegistryStateEntry extends EntityRegistryEntry {
    stateName?: string | null;
}
export interface DeviceAction {
    href?: string;
    target?: string;
    action?: (ev: Event) => void;
    label: string;
    icon?: string;
    trailingIcon?: string;
    classes?: string;
}
export interface DeviceAlert {
    level: "warning" | "error" | "info";
    text: string;
}
export declare class HaConfigDevicePage extends LitElement {
    hass: HomeAssistant;
    entries: ConfigEntry[];
    manifests: IntegrationManifest[];
    deviceId: string;
    narrow: boolean;
    isWide: boolean;
    private _related?;
    private _diagnosticDownloadLinks;
    private _deleteButtons;
    private _deviceActions;
    private _deviceAlerts;
    private _deviceAlertsActionsTimeout?;
    private _esphomeSetup?;
    private _esphomeSetupRequest;
    _entityReg: EntityRegistryEntry[];
    private _logbookTime;
    private _columnsController;
    private _integrations;
    private _entities;
    private _getEntitiesSorted;
    private _getRelated;
    private _getQuickLinkCounts;
    private _deviceIdInList;
    private _entityIds;
    private _entitiesByCategory;
    private _batteryEntity;
    private _batteryChargingEntity;
    willUpdate(changedProps: PropertyValues<this>): void;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    protected updated(changedProps: PropertyValues<this>): void;
    disconnectedCallback(): void;
    protected render(): typeof nothing | TemplateResult<1>;
    private _fetchData;
    private _updateESPHomeSetup;
    private _getDiagnosticButtons;
    private _getDeleteActions;
    private _getDeviceActions;
    private _getDeviceAlerts;
    private _computeEntityName;
    private _onImageLoad;
    private _onImageError;
    private _findRelated;
    private _showAddToDialog;
    private _addToDashboard;
    private _renderIntegrationInfo;
    private _handleToolbarMenuAction;
    private _resetEntityIds;
    private _showSettings;
    private _enableDevice;
    private _signUrl;
    private _deviceActionSelected;
    private _deviceActionClicked;
    private _voiceAssistantSetup;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-device-page": HaConfigDevicePage;
    }
}
