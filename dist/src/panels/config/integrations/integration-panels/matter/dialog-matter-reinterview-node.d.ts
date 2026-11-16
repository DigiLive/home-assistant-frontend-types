import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-spinner";
import "../../../../../components/ha-dialog-footer";
import "../../../../../components/ha-dialog";
import type { HomeAssistant } from "../../../../../types";
import type { MatterReinterviewNodeDialogParams } from "./show-dialog-matter-reinterview-node";
declare class DialogMatterReinterviewNode extends LitElement {
    hass: HomeAssistant;
    private device_id?;
    private _status?;
    private _open;
    showDialog(params: MatterReinterviewNodeDialogParams): Promise<void>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _startReinterview;
    closeDialog(): void;
    private _dialogClosed;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-matter-reinterview-node": DialogMatterReinterviewNode;
    }
}
export {};
