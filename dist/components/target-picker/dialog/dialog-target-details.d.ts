import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HassDialog } from "../../../dialogs/make-dialog-manager";
import type { HomeAssistant } from "../../../types";
import "../../ha-adaptive-dialog";
import "../../ha-button";
import "../../ha-dialog-footer";
import "../../ha-icon-button";
import "../../ha-icon-next";
import "../../ha-svg-icon";
import "../../list/ha-list-base";
import "../ha-target-picker-item-row";
import type { TargetDetailsDialogParams } from "./show-dialog-target-details";
declare class DialogTargetDetails extends LitElement implements HassDialog {
    hass: HomeAssistant;
    private _params?;
    private _opened;
    private _entitySources?;
    private _entitySourcesLoaded;
    private _initialExclusions;
    private _exclusions;
    private _exclusionsRequest;
    private _deviceIntegrationLookup;
    showDialog(params: TargetDetailsDialogParams): void;
    private _resolveExclusions;
    closeDialog(): boolean;
    private _dialogClosed;
    private _hasIntegration;
    protected updated(changedProperties: PropertyValues): void;
    private _loadEntitySources;
    private _filterEntities;
    private _filterDevices;
    private _combinedFilter;
    private _selectorTarget;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _selectionChanged;
    private _explainExclusion;
    private _apply;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-dialog-target-details": DialogTargetDetails;
    }
}
export {};
