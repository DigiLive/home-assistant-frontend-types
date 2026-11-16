import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-markdown";
import "../../../components/ha-spinner";
import "../../../components/progress/ha-progress-bar";
import type { UpdateEntity } from "../../../data/update";
import "../components/update/ha-more-info-update-backup";
declare class MoreInfoUpdate extends LitElement {
    stateObj?: UpdateEntity;
    private _localize;
    private _formatters;
    private _api;
    private _i18n;
    private _entityEntry?;
    private _devices;
    private _connection;
    private _config;
    private _user?;
    private _releaseNotes?;
    private _error?;
    private _installError?;
    private _backupState;
    private _markdownLoading;
    private _backupElement?;
    private _backupEventsUnsub?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _subscribeBackupEvents;
    private _backupInProgressMessage;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderLoader;
    protected firstUpdated(): void;
    private _markdownLoaded;
    private _fetchReleaseNotes;
    private _handleInstall;
    private _canShowSupervisorLogs;
    private _appSlug;
    private _handleShowSupervisorLogs;
    private _showSupervisorLogs;
    private _isShown;
    private _localizeInstallError;
    private _handleSkip;
    private _handleClearSkipped;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-update": MoreInfoUpdate;
    }
}
export {};
