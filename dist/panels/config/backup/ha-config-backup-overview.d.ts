import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-icon";
import "../../../components/ha-icon-next";
import "../../../components/ha-spinner";
import "../../../components/ha-svg-icon";
import type { BackupAgent, BackupConfig, BackupContent, BackupInfo } from "../../../data/backup";
import type { ManagerStateEvent } from "../../../data/backup_manager";
import type { CloudStatus } from "../../../data/cloud";
import "../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../types";
import "./components/overview/ha-backup-overview-backups";
import "./components/overview/ha-backup-overview-app-update-backup";
import "./components/overview/ha-backup-overview-onboarding";
import "./components/overview/ha-backup-overview-progress";
import "./components/overview/ha-backup-overview-settings";
import "./components/overview/ha-backup-overview-summary";
import "./components/config/ha-backup-config-encryption-key";
declare class HaConfigBackupOverview extends LitElement {
    hass: HomeAssistant;
    cloudStatus?: CloudStatus;
    narrow: boolean;
    route: Route;
    manager: ManagerStateEvent;
    info?: BackupInfo;
    backups: BackupContent[];
    fetching: boolean;
    config?: BackupConfig;
    agents: BackupAgent[];
    uploadProgress: Record<string, {
        uploaded_bytes: number;
        total_bytes: number;
    }>;
    private _config?;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    connectedCallback(): void;
    private _uploadBackup;
    private _encryptionKeyChanged;
    private _debounceSaveConfig;
    private _saveConfig;
    private _handleOnboardingButtonClick;
    private _setupAutomaticBackup;
    private _newBackup;
    private get _needsOnboarding();
    protected render(): TemplateResult;
    private _handleDropdownSelect;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-backup-overview": HaConfigBackupOverview;
    }
}
export {};
