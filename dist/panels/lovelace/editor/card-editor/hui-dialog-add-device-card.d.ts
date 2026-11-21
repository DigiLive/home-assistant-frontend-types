import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/chips/ha-chip-set";
import "../../../../components/chips/ha-filter-chip";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-yaml-editor";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import "../../cards/hui-card";
import type { AddDeviceCardDialogParams } from "./show-add-device-card-dialog";
export declare class HuiDialogAddDeviceCard extends LitElement implements HassDialog<AddDeviceCardDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _categories;
    private _cardConfig?;
    private _saving;
    private _yamlEditor?;
    showDialog(params: AddDeviceCardDialogParams): void;
    private _availableCategories;
    closeDialog(): boolean;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _categoryToggled;
    private _updateCategories;
    private _save;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-add-device-card": HuiDialogAddDeviceCard;
    }
}
