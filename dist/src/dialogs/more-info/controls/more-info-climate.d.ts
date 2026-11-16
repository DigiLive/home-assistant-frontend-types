import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-attribute-icon";
import "../../../components/ha-control-select-menu";
import "../../../components/ha-icon-button-group";
import "../../../components/ha-icon-button-toggle";
import "../../../components/ha-select";
import "../../../components/ha-switch";
import type { ClimateEntity } from "../../../data/climate";
import "../../../state-control/climate/ha-state-control-climate-humidity";
import "../../../state-control/climate/ha-state-control-climate-temperature";
import "../components/ha-more-info-control-select-container";
declare class MoreInfoClimate extends LitElement {
    stateObj?: ClimateEntity;
    private _localize;
    private _api;
    private _formatters;
    private _mainControl;
    private _renderPresetModeIcon;
    private _renderFanModeIcon;
    private _renderSwingModeIcon;
    private _renderSwingHorizontalModeIcon;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _setMainControl;
    private _handleFanModeChanged;
    private _handleOperationModeChanged;
    private _handleSwingmodeChanged;
    private _handleSwingHorizontalmodeChanged;
    private _handlePresetmodeChanged;
    private _callServiceHelper;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-climate": MoreInfoClimate;
    }
}
export {};
