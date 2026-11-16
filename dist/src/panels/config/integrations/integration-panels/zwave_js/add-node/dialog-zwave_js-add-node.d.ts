import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../../../../types";
import type { ZWaveJSAddNodeDialogParams } from "./show-dialog-zwave_js-add-node";
import "../../../../../../components/ha-button";
import "../../../../../../components/ha-dialog-header";
import "../../../../../../components/ha-dialog-footer";
import "../../../../../../components/animation/ha-fade-in";
import "../../../../../../components/ha-icon-button";
import "../../../../../../components/ha-qr-scanner";
import "../../../../../../components/ha-dialog";
import "./zwave-js-add-node-added-insecure";
import "./zwave-js-add-node-code-input";
import "./zwave-js-add-node-configure-device";
import "./zwave-js-add-node-failed";
import "./zwave-js-add-node-grant-security-classes";
import "./zwave-js-add-node-loading";
import "./zwave-js-add-node-searching-devices";
import "./zwave-js-add-node-select-method";
import "./zwave-js-add-node-select-security-strategy";
declare class DialogZWaveJSAddNode extends LitElement {
    hass: HomeAssistant;
    private _open;
    private _step?;
    private _entryId?;
    private _controllerSupportsLongRange?;
    private _supportsSmartStart?;
    private _dsk?;
    private _dskPin;
    private _error?;
    private _inclusionStrategy?;
    private _lowSecurity;
    private _lowSecurityReason?;
    private _interviewProgress?;
    private _device?;
    private _deviceOptions?;
    private _requestedGrant?;
    private _securityClasses;
    private _entities;
    private _codeInput;
    private _qrProcessing;
    private _addNodeTimeoutHandle?;
    private _onStop?;
    private _subscribedAddZwaveNode?;
    private _newDeviceSubscription?;
    private _subscribedEntityRegistry?;
    protected render(): typeof nothing | TemplateResult<1>;
    private _renderHeader;
    private _renderStepContent;
    private _renderStepActions;
    private _onBeforeUnload;
    private _showFirstStep;
    showDialog(params: ZWaveJSAddNodeDialogParams): Promise<void>;
    /**
     * prevent esc key, click out of dialog and close tab/browser
     */
    private _shouldPreventClose;
    private _handleCloseOrBack;
    private _methodSelected;
    private _qrScanShowMoreOptions;
    private _searchDevicesShowSecurityOptions;
    private _searchDevicesWithStrategy;
    private _setSecurityStrategy;
    private _startInclusion;
    private _validateQrCode;
    private _getQrCodeValidationError;
    private _qrCodeScanned;
    private _setDeviceOptions;
    private _saveDevice;
    private _navigateToDevice;
    private _subscribeNewDeviceSearch;
    private _addAnotherDevice;
    private _manualQrCodeInputChange;
    private _dskPinChanged;
    private _validateDskAndEnterPin;
    private _grantSecurityClasses;
    private _securityClassChange;
    private _unsubscribeNewDeviceSearch;
    private _unsubscribeAddZwaveNode;
    private _unsubscribeDialog;
    private _dialogClosed;
    closeDialog(): Promise<void>;
    disconnectedCallback(): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-zwave_js-add-node": DialogZWaveJSAddNode;
    }
}
export {};
