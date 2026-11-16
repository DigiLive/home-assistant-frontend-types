import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/entity/ha-battery-icon";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/ha-control-select-menu";
import "../../../components/ha-icon";
import "../../../components/ha-svg-icon";
import "../../../components/ha-icon-next";
import type { VacuumEntity } from "../../../data/vacuum";
import "../../../state-control/vacuum/ha-state-control-vacuum-status";
import "../components/ha-more-info-control-select-container";
import "../components/ha-more-info-state-header";
declare class MoreInfoVacuum extends LitElement {
    private _i18n;
    private _formatters;
    private _api;
    private _states;
    private _entities;
    stateObj?: VacuumEntity;
    private _deviceEntities;
    private get _stateOverride();
    private _renderBattery;
    private _callVacuumService;
    private _handleStartPause;
    private _handleStop;
    private _handleReturnHome;
    private _handleLocate;
    private _handleCleanSpot;
    private _handleCleanAreas;
    private _handleFanSpeedChanged;
    private get _supportsStartPause();
    private get _startPauseIcon();
    private get _startPauseLabel();
    private get _startPauseDisabled();
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-vacuum": MoreInfoVacuum;
    }
}
export {};
