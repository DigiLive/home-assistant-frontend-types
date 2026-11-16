import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-dialog";
import "../../../components/ha-dialog-footer";
import "../../../components/ha-markdown";
import "../../../components/ha-svg-icon";
import "../../../dialogs/repairs-flow/dialog-repairs-issue-subtitle";
import type { HomeAssistant } from "../../../types";
import type { RepairsIssueDialogParams } from "./show-repair-issue-dialog";
declare class DialogRepairsIssue extends LitElement {
    hass: HomeAssistant;
    private _issue?;
    private _params?;
    private _open;
    showDialog(params: RepairsIssueDialogParams): void;
    private _dialogClosed;
    closeDialog(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _ignoreIssue;
    private _clickHandler;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-repairs-issue": DialogRepairsIssue;
    }
}
export {};
