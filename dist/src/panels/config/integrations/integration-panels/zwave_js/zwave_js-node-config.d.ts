import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/buttons/ha-progress-button";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-card";
import "../../../../../components/ha-generic-picker";
import "../../../../../components/ha-select";
import "../../../../../components/ha-selector/ha-selector-boolean";
import "../../../../../components/ha-settings-row";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/input/ha-input";
import "../../../../../layouts/hass-error-screen";
import "../../../../../layouts/hass-loading-screen";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
import "../../../ha-config-section";
import "./zwave_js-custom-param";
declare class ZWaveJSNodeConfig extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    configEntryId?: string;
    deviceId: string;
    private _nodeMetadata?;
    private _config?;
    private _canResetAll;
    private _results;
    private _error?;
    private _resetDialogProgress;
    private _unsubConfigParamUpdates?;
    private _resultTimeouts;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected updated(changedProps: PropertyValues<this>): void;
    protected render(): TemplateResult;
    private _generateConfigBox;
    private _subscribeConfigParameterUpdates;
    private _unsubscribeConfigParameterUpdates;
    private _handleConfigParameterUpdate;
    private _isEnumeratedBool;
    private _handleNewValue;
    private _switchToggled;
    private _dropdownSelected;
    private _pickerValueChanged;
    private _handleEnumeratedPickerValueChanged;
    private _numericInputChanged;
    private _getEnumeratedPickerItems;
    private _enumeratedPickerValueRenderer;
    private _getManualEntryItems;
    private _getComboBoxValueChangedCallback;
    private _updateConfigParameter;
    private _clearResultTimeout;
    private _clearAllResultTimeouts;
    private _setResult;
    private _setError;
    private _fetchData;
    private _openResetDialog;
    private _resetAllConfigParameters;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave_js-node-config": ZWaveJSNodeConfig;
    }
}
export {};
