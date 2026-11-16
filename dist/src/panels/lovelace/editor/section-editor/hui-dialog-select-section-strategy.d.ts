import { LitElement, nothing } from "lit";
import "../../../../components/ha-adaptive-dialog";
import "../../../../components/ha-icon-button-arrow-prev";
import "../../../../components/ha-ripple";
import type { HassDialog } from "../../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../../types";
import "../../sections/hui-section";
import type { CreateSectionDialogParams } from "./show-create-section-dialog";
export declare class HuiDialogSelectSectionStrategy extends LitElement implements HassDialog<CreateSectionDialogParams> {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _previews;
    showDialog(params: CreateSectionDialogParams): void;
    closeDialog(): boolean;
    private _dialogClosed;
    private _availableBuiltInTypes;
    private _builtInOptions;
    private _customOptions;
    private _loadPreviews;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderOption;
    private _handleKeyDown;
    private _back;
    private _strategyPicked;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-select-section-strategy": HuiDialogSelectSectionStrategy;
    }
}
