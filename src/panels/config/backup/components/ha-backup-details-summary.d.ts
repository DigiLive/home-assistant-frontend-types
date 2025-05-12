import { LitElement } from "lit";
import "../../../../components/ha-card";
import "../../../../components/ha-md-list";
import "../../../../components/ha-md-list-item";
import type { HomeAssistant } from "../../../../types";
import { type BackupContentExtended } from "../../../../data/backup";
declare class HaBackupDetailsSummary extends LitElement {
    hass: HomeAssistant;
    backup: BackupContentExtended;
    isHassio: boolean;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-details-summary": HaBackupDetailsSummary;
    }
}
export {};
