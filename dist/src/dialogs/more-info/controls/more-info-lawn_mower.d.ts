import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/entity/ha-battery-icon";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/ha-svg-icon";
import type { LawnMowerEntity } from "../../../data/lawn_mower";
import "../../../state-control/lawn_mower/ha-state-control-lawn_mower-status";
import "../components/ha-more-info-state-header";
declare class MoreInfoLawnMower extends LitElement {
    private _i18n;
    private _api;
    private _states;
    private _entities;
    stateObj?: LawnMowerEntity;
    private _deviceEntities;
    private get _supportsStartPause();
    private get _showPause();
    private get _startPauseIcon();
    private get _startPauseLabel();
    private get _startPauseDisabled();
    private _renderBattery;
    private _handleStartPause;
    private _handleStop;
    private _handleDock;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-lawn_mower": MoreInfoLawnMower;
    }
}
export {};
