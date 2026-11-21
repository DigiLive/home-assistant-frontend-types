import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-icon-next";
import "../../../../../components/ha-spinner";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/item/ha-list-item-base";
import "../../../../../components/item/ha-list-item-button";
import "../../../../../components/list/ha-list-base";
import "../../../../../components/list/ha-list-nav";
import "../../../../../components/progress/ha-progress-ring";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
declare class ZWaveJSConfigDashboard extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    configEntryId: string;
    private _configEntry?;
    private _network?;
    private _provisioningEntries?;
    private _status?;
    private _dataCollectionOptIn?;
    private _multipleNetworks;
    private _restoreFileInput?;
    private _dialogOpen;
    private _s2InclusionUnsubscribe?;
    private _unsubscribeBackup?;
    private _unsubscribeRestore?;
    private _backupProgress?;
    private _restoreProgress?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(): Promise<void>;
    protected render(): typeof nothing | TemplateResult<1>;
    private _renderNetworkStatus;
    private _renderNetworkCard;
    private _renderNavigationCard;
    private _renderBackupCard;
    private _renderErrorScreen;
    private _handleBack;
    private _fetchData;
    private _addNodeClicked;
    private _removeNodeClicked;
    private _openConfigFlow;
    private _downloadBackup;
    private _restoreButtonClick;
    private _handleRestoreFileSelected;
    private _openInclusionDialog;
    private _handleInclusionDialogClosed;
    private _subscribeS2Inclusion;
    private _unsubscribeS2Inclusion;
    private _handleBackupMessage;
    private _handleRestoreMessage;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave_js-config-dashboard": ZWaveJSConfigDashboard;
    }
}
export {};
