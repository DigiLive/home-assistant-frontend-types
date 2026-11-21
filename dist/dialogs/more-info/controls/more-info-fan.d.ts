import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-attribute-icon";
import "../../../components/ha-control-select-menu";
import "../../../components/ha-outlined-icon-button";
import type { FanEntity } from "../../../data/fan";
import "../../../state-control/fan/ha-state-control-fan-speed";
import "../../../state-control/ha-state-control-toggle";
import "../components/ha-more-info-control-select-container";
import "../components/ha-more-info-state-header";
declare class MoreInfoFan extends LitElement {
    private _formatters;
    private _api;
    stateObj?: FanEntity;
    _presetMode?: string;
    private _renderPresetModeIcon;
    private _renderDirectionIcon;
    private _toggle;
    private _handleDirection;
    private _handlePresetMode;
    private _handleOscillating;
    protected updated(changedProps: PropertyValues<this>): void;
    private get _stateOverride();
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-fan": MoreInfoFan;
    }
}
export {};
