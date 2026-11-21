import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-footer";
import "../../../../components/radio/ha-radio-group";
import "../../../../components/radio/ha-radio-option";
import type { HomeAssistant } from "../../../../types";
import type { DialogStatisticsUnitsChangedParams } from "./show-dialog-statistics-fix-units-changed";
export declare class DialogStatisticsFixUnitsChanged extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _action?;
    showDialog(params: DialogStatisticsUnitsChangedParams): void;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleActionChanged;
    private _cancel;
    private _fixIssue;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-statistics-fix-units-changed": DialogStatisticsFixUnitsChanged;
    }
}
