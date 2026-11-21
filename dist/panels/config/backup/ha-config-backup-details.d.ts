import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/animation/ha-fade-in";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-icon-button";
import "../../../components/ha-spinner";
import "../../../components/item/ha-list-item-base";
import "../../../components/list/ha-list-base";
import type { BackupAgent, BackupConfig } from "../../../data/backup";
import "../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../types";
import "./components/ha-backup-details-restore";
import "./components/ha-backup-details-summary";
declare class HaConfigBackupDetails extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    backupId: string;
    config?: BackupConfig;
    agents: BackupAgent[];
    private _backup?;
    private _agents;
    private _error?;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _restore;
    private _fetchBackup;
    private _handleAction;
    private _handleAgentAction;
    private _downloadBackup;
    private _deleteBackup;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-backup-details": HaConfigBackupDetails;
    }
}
export {};
