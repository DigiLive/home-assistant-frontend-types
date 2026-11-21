import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-card";
import "../../../../../components/ha-icon-next";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/item/ha-list-item-button";
import "../../../../../components/list/ha-list-nav";
import type { HomeAssistant } from "../../../../../types";
declare class HaBackupOverviewAppUpdateBackup extends LitElement {
    hass: HomeAssistant;
    private _supervisorUpdateConfig?;
    protected firstUpdated(): void;
    connectedCallback(): void;
    private _fetchSupervisorUpdateConfig;
    private _appUpdateBackupDescription;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-overview-app-update-backup": HaBackupOverviewAppUpdateBackup;
    }
}
export {};
