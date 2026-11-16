import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/animation/ha-fade-in";
import "../../components/ha-adaptive-dialog";
import "../../components/ha-alert";
import "../../components/ha-expansion-panel";
import "../../components/ha-icon-next";
import "../../components/ha-spinner";
import "../../components/item/ha-list-item-button";
import "../../components/list/ha-list-base";
import "../../components/progress/ha-progress-bar";
import type { HomeAssistant } from "../../types";
import "./automation-restart-status";
declare class DialogRestart extends LitElement {
    hass: HomeAssistant;
    private _open;
    private _loadingHostInfo;
    private _loadingBackupInfo;
    private _hostInfo?;
    private _dialogOpen;
    showDialog(): Promise<void>;
    private _loadBackupState;
    private _loadHostInfo;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _reload;
    private _getBackupProgressMessage;
    private _restartAction;
    private _hostAction;
    private _handleAction;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-restart": DialogRestart;
    }
}
export {};
