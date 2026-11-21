import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-spinner";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/item/ha-list-item-base";
import "../../../../../components/list/ha-list-base";
import type { BackupAgent } from "../../../../../data/backup";
import type { ManagerStateEvent } from "../../../../../data/backup_manager";
import type { HomeAssistant } from "../../../../../types";
import "../ha-backup-summary-card";
export declare class HaBackupOverviewProgress extends LitElement {
    hass: HomeAssistant;
    manager: ManagerStateEvent;
    agents: BackupAgent[];
    uploadProgress: Record<string, {
        uploaded_bytes: number;
        total_bytes: number;
    }>;
    private _collapsingAgents;
    private _wasUploadStage;
    private _delayingCollapse;
    private _collapseTimeout?;
    disconnectedCallback(): void;
    private get _heading();
    private get _isUploadStage();
    private get _description();
    private _computeAgentPercent;
    private _computeUploadPercent;
    private _getStageGroupIndex;
    private _getSegmentState;
    private _computeCreateBackupSegments;
    private _renderAgentIcon;
    willUpdate(changedProps: PropertyValues<this>): void;
    private _handleAgentCollapseEnd;
    private _renderSegmentedProgress;
    private _renderAgentProgress;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-backup-overview-progress": HaBackupOverviewProgress;
    }
}
