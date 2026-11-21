import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HassDialog } from "../../dialogs/make-dialog-manager";
import "../ha-dialog";
import "../ha-svg-icon";
import "../item/ha-list-item-button";
import "../list/ha-list-base";
import type { DeviceReplacedDialogParams } from "./show-dialog-device-replaced";
export declare class DialogDeviceReplaced extends LitElement implements HassDialog<DeviceReplacedDialogParams> {
    private _params?;
    private _open;
    private _configEntryLookup?;
    private _localize;
    private _devices;
    private _areas;
    private _darkMode?;
    private _hassUrl;
    private _api;
    showDialog(params: DeviceReplacedDialogParams): Promise<void>;
    protected willUpdate(changedProps: PropertyValues): void;
    private _loadConfigEntries;
    closeDialog(): boolean;
    private _dialogClosed;
    private _pick;
    private _items;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-device-replaced": DialogDeviceReplaced;
    }
}
