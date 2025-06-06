import "@material/mwc-button/mwc-button";
import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-area-picker";
import "../../../components/ha-icon";
import "../../../components/ha-icon-button-next";
import "../../../components/ha-icon-picker";
import "../../../components/ha-list-item";
import "../../../components/ha-radio";
import "../../../components/ha-select";
import "../../../components/ha-settings-row";
import "../../../components/ha-state-icon";
import "../../../components/ha-switch";
import "../../../components/ha-labels-picker";
import "../../../components/ha-textfield";
import type { ConfigEntry } from "../../../data/config_entries";
import type { ExtEntityRegistryEntry } from "../../../data/entity_registry";
import type { HomeAssistant } from "../../../types";
export declare class EntityRegistrySettingsEditor extends LitElement {
    hass: HomeAssistant;
    entry: ExtEntityRegistryEntry;
    hideName: boolean;
    hideIcon: boolean;
    disabled: boolean;
    helperConfigEntry?: ConfigEntry;
    private _name;
    private _icon;
    private _entityId;
    private _deviceClass?;
    private _switchAsDomain;
    private _switchAsInvert;
    private _areaId?;
    private _labels?;
    private _disabledBy;
    private _hiddenBy;
    private _device?;
    private _unit_of_measurement?;
    private _precision?;
    private _precipitation_unit?;
    private _pressure_unit?;
    private _temperature_unit?;
    private _visibility_unit?;
    private _wind_speed_unit?;
    private _cameraPrefs?;
    private _numberDeviceClassConvertibleUnits?;
    private _sensorDeviceClassConvertibleUnits?;
    private _sensorNumericalDeviceClasses?;
    private _weatherConvertibleUnits?;
    private _defaultCode?;
    private _noDeviceArea?;
    private _origEntityId;
    private _deviceClassOptions?;
    protected willUpdate(changedProperties: PropertyValues): void;
    private _precisionLabel;
    private _isInvalidDefaultCode;
    protected updated(changedProps: PropertyValues): Promise<void>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    updateEntry(): Promise<{
        close: boolean;
        entry: ExtEntityRegistryEntry;
    }>;
    private _waitForEntityRegistryUpdate;
    private _nameChanged;
    private _iconChanged;
    private _copyEntityId;
    private _entityIdChanged;
    private _deviceClassChanged;
    private _unitChanged;
    private _defaultcodeChanged;
    private _precipitationUnitChanged;
    private _precisionChanged;
    private _pressureUnitChanged;
    private _temperatureUnitChanged;
    private _visibilityUnitChanged;
    private _windSpeedUnitChanged;
    private _switchAsDomainChanged;
    private _switchAsInvertChanged;
    private _useDeviceAreaChanged;
    private _areaPicked;
    private _labelsChanged;
    private _fetchCameraPrefs;
    private _handleCameraPrefsChanged;
    private _handleCameraOrientationChanged;
    private _enabledChanged;
    private _hiddenChanged;
    private _openDeviceSettings;
    private _handleVoiceAssistantsClicked;
    private _showOptionsFlow;
    private _switchAsDomainsSorted;
    private _deviceClassesSorted;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "entity-registry-settings-editor": EntityRegistrySettingsEditor;
    }
}
