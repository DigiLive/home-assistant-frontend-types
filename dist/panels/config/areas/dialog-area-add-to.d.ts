import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-adaptive-dialog";
import "../../../dialogs/add-to/ha-add-to-action-list";
import type { AreaAddToDialogParams } from "./show-dialog-area-add-to";
declare class DialogAreaAddTo extends LitElement {
    private _i18n;
    private _areas;
    private _params?;
    private _open;
    showDialog(params: AreaAddToDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderOptions;
    private _handleActionSelected;
    private _handleCreateScene;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-area-add-to": DialogAreaAddTo;
    }
}
export {};
