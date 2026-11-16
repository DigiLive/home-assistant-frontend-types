import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-list";
import "../../../../../components/ha-button";
import "../../../../../components/ha-dialog-footer";
import "../../../../../components/ha-list-item";
import "../../../../../components/ha-spinner";
import "../../../../../components/ha-dialog";
import type { HomeAssistant } from "../../../../../types";
import type { MatterPingNodeDialogParams } from "./show-dialog-matter-ping-node";
declare class DialogMatterPingNode extends LitElement {
    hass: HomeAssistant;
    private device_id?;
    private _status?;
    private _pingResultEntries?;
    private _open;
    showDialog(params: MatterPingNodeDialogParams): Promise<void>;
    private _copyIpToClipboard;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _startPing;
    closeDialog(): void;
    private _dialogClosed;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-matter-ping-node": DialogMatterPingNode;
    }
}
export {};
