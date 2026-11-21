import { LitElement, nothing } from "lit";
import type { TemplateResult } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-logo-svg";
import "../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../types";
import type { CloudOnboardingDialogParams } from "./show-dialog-cloud-onboarding";
export declare class DialogCloudOnboarding extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _openPanel?;
    private _cloudStatus?;
    private _backupConfig?;
    showDialog(params: CloudOnboardingDialogParams): void;
    closeDialog(): boolean;
    private _dialogClosed;
    protected render(): typeof nothing | TemplateResult<1>;
    private _panelHeader;
    private _panelCompleted;
    private _statusTick;
    private _panelExpanded;
    private _voiceCloudCard;
    private _assistantCard;
    private get _cloudBackupEnabled();
    private _firstIncompletePanel;
    private _refreshStatus;
    private _refreshBackupConfig;
    private _toggleRemote;
    private _toggleWebrtc;
    private _toggleCloudBackup;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-cloud-onboarding": DialogCloudOnboarding;
    }
}
