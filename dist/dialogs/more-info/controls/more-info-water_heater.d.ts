import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-attribute-icon";
import "../../../components/ha-control-select-menu";
import type { WaterHeaterEntity } from "../../../data/water_heater";
import "../../../state-control/water_heater/ha-state-control-water_heater-temperature";
import "../components/ha-more-info-control-select-container";
declare class MoreInfoWaterHeater extends LitElement {
    stateObj?: WaterHeaterEntity;
    private _localize;
    private _api;
    private _formatters;
    private _renderOperationModeIcon;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleOperationModeChanged;
    private _handleAwayModeChanged;
    private _callServiceHelper;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-water_heater": MoreInfoWaterHeater;
    }
}
export {};
