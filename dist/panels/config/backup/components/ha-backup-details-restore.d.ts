import { LitElement } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
import type { BackupContentExtended, BackupData } from "../../../../data/backup";
import type { HomeAssistant } from "../../../../types";
import "./ha-backup-data-picker";
declare class HaBackupDetailsRestore extends LitElement {
    hass?: HomeAssistant;
    private _localize;
    backup: BackupContentExtended;
    haRequired: boolean;
    translationKeyPanel: "page-onboarding.restore" | "config.backup";
    private _selectedData?;
    protected willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
    private _restore;
    private _selectedBackupChanged;
    private _isHomeAssistantRequired;
    private get _isRestoreDisabled();
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-details-restore": HaBackupDetailsRestore;
    }
    interface HASSDomEvents {
        "backup-restore": {
            selectedData?: BackupData;
        };
    }
}
export {};
