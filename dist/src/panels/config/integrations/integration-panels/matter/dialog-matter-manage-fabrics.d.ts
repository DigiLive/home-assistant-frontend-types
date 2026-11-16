import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-list";
import "../../../../../components/ha-list-item";
import "../../../../../components/ha-spinner";
import "../../../../../components/ha-dialog";
import type { HomeAssistant } from "../../../../../types";
import type { MatterManageFabricsDialogParams } from "./show-dialog-matter-manage-fabrics";
declare class DialogMatterManageFabrics extends LitElement {
    hass: HomeAssistant;
    private device_id?;
    private _nodeDiagnostics?;
    private _open;
    showDialog(params: MatterManageFabricsDialogParams): Promise<void>;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _fetchNodeDetails;
    private _removeFabric;
    closeDialog(): void;
    private _dialogClosed;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-matter-manage-fabrics": DialogMatterManageFabrics;
    }
}
export {};
