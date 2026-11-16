import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-adaptive-dialog";
import "../../../components/ha-icon-next";
import "../../../components/ha-list";
import "../../../components/ha-list-item";
import "../../../components/ha-spinner";
import "../../../components/ha-tip";
import "../../../components/input/ha-input-search";
import type { Blueprints } from "../../../data/blueprint";
import type { HomeAssistant } from "../../../types";
import type { NewAutomationDialogParams } from "./show-dialog-new-automation";
declare class DialogNewAutomation extends LitElement {
    hass: HomeAssistant;
    private _open;
    private _params?;
    private _mode;
    blueprints?: Blueprints;
    private _loadingBlueprints;
    private _filter;
    showDialog(params: NewAutomationDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
    private _processedBlueprints;
    private _blueprintFuseIndex;
    private _filteredBlueprints;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleSearchChange;
    private _blueprint;
    private _blank;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-new-automation": DialogNewAutomation;
    }
}
export {};
