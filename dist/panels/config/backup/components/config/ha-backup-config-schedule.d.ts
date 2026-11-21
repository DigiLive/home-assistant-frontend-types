import { LitElement } from "lit";
import "../../../../../components/ha-checkbox";
import "../../../../../components/ha-expansion-panel";
import "../../../../../components/ha-select";
import "../../../../../components/ha-time-input";
import "../../../../../components/ha-tip";
import "../../../../../components/item/ha-list-item-base";
import "../../../../../components/item/ha-row-item";
import "../../../../../components/list/ha-list-base";
import type { BackupConfig } from "../../../../../data/backup";
import type { SupervisorUpdateConfig } from "../../../../../data/supervisor/update";
import type { HomeAssistant } from "../../../../../types";
import "./ha-backup-config-retention";
export type BackupConfigSchedule = Pick<BackupConfig, "schedule" | "retention">;
declare class HaBackupConfigSchedule extends LitElement {
    hass: HomeAssistant;
    value?: BackupConfigSchedule;
    supervisor: boolean;
    supervisorUpdateConfig?: SupervisorUpdateConfig;
    private _getData;
    private _setData;
    protected render(): import("lit-html").TemplateResult<1>;
    private _scheduleChanged;
    private _scheduleTimeChanged;
    private _timeChanged;
    private _daysChanged;
    private _updatePreferenceChanged;
    private _retentionChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-config-schedule": HaBackupConfigSchedule;
    }
    interface HASSDomEvents {
        "update-config-changed": {
            value: Partial<SupervisorUpdateConfig>;
        };
    }
}
export {};
