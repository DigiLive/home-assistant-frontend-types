import { LitElement } from "lit";
import type { PropertyValues } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import "../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../types";
import "./components/config/ha-backup-config-addon";
declare class HaConfigBackupAppUpdateBackups extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _supervisorUpdateConfig?;
    private _error?;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _getSupervisorUpdateConfig;
    private _supervisorUpdateConfigChanged;
    private _debounceSaveSupervisorUpdateConfig;
    private _saveSupervisorUpdateConfig;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-backup-app-update-backups": HaConfigBackupAppUpdateBackups;
    }
}
export {};
