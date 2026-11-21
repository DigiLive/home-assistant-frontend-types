import { LitElement, nothing } from "lit";
import type { CSSResultGroup } from "lit";
import "../../../../components/ha-adaptive-dialog";
import "../../../../dialogs/add-to/ha-add-to-action-list";
import type { DeviceAddToDialogParams } from "./show-dialog-device-add-to";
export declare class DialogDeviceAddTo extends LitElement {
    private _i18n;
    private _params?;
    private _open;
    showDialog(params: DeviceAddToDialogParams): void;
    closeDialog(): void;
    protected firstUpdated(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderOptions;
    private _addSceneSection;
    private _handleActionSelected;
    private _handleAddToAction;
    private _handleCreateScene;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-device-add-to": DialogDeviceAddTo;
    }
}
