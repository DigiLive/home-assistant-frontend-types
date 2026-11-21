import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-dialog";
import "../../../components/input/ha-input-search";
import type { HassDialog } from "../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../types";
import "./dashboard-card";
import type { NewDashboardDialogParams } from "./show-dialog-new-dashboard";
declare class DialogNewDashboard extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _open;
    private _params?;
    private _filter;
    private _localizedStrategies;
    private _customStrategies;
    showDialog(params: NewDashboardDialogParams): void;
    closeDialog(): boolean;
    private _dialogClosed;
    private _generateDefaultConfig;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleSearchChange;
    private _filterStrategies;
    private _filterCustomStrategies;
    private _generateStrategyConfig;
    private _loadCustomStrategies;
    private _selected;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-new-dashboard": DialogNewDashboard;
    }
}
export {};
