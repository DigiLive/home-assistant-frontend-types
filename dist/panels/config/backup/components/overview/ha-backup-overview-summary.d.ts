import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/item/ha-list-item-base";
import "../../../../../components/list/ha-list-base";
import type { BackupConfig, BackupContent } from "../../../../../data/backup";
import type { HomeAssistant } from "../../../../../types";
import "../ha-backup-summary-card";
declare class HaBackupOverviewBackups extends LitElement {
    hass: HomeAssistant;
    backups: BackupContent[];
    config: BackupConfig;
    fetching: boolean;
    private _sortedBackups;
    private _lastBackup;
    private _lastUploadedBackup;
    private _renderSummaryCard;
    protected render(): import("lit-html").TemplateResult<1>;
    private _createAdditionalBackupDescription;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-overview-summary": HaBackupOverviewBackups;
    }
}
export {};
