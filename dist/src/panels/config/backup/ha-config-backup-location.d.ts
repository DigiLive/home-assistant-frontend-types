import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/animation/ha-fade-in";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "../../../components/ha-icon-button";
import "../../../components/ha-spinner";
import "../../../components/ha-switch";
import "../../../components/item/ha-row-item";
import type { BackupAgent, BackupConfig } from "../../../data/backup";
import "../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../types";
import "./components/config/ha-backup-config-retention";
import "./components/ha-backup-data-picker";
declare class HaConfigBackupDetails extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    agentId: string;
    config?: BackupConfig;
    agents: BackupAgent[];
    private _agent?;
    private _error?;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _isEncryptionTurnedOn;
    private _fetchAgent;
    private _updateAgentConfig;
    private _retentionChanged;
    private _updateAgentEncryption;
    private _turnOnEncryption;
    private _turnOffEncryption;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-backup-location": HaConfigBackupDetails;
    }
}
export {};
