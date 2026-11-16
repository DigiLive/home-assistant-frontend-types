import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../ha-button";
import "../ha-dialog-footer";
import "../ha-icon-button";
import "../ha-list";
import "../ha-list-item";
import "../ha-sortable";
import "../ha-svg-icon";
import "../ha-dialog";
import type { DataTableSettingsDialogParams } from "./show-dialog-data-table-settings";
export declare class DialogDataTableSettings extends LitElement {
    private _localize;
    private _params?;
    private _columnOrder?;
    private _hiddenColumns?;
    private _lastFixedKeys;
    private _open;
    showDialog(params: DataTableSettingsDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
    private _lastFixedCount;
    private _preserveLastFixed;
    private _sortedColumns;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _columnMoved;
    private _toggle;
    private _reset;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-data-table-settings": DialogDataTableSettings;
    }
}
