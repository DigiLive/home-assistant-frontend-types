import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/ha-control-select";
import "../../components/ha-control-slider";
import type { AlarmControlPanelEntity, AlarmMode } from "../../data/alarm_control_panel";
export declare class HaStateControlAlarmControlPanelModes extends LitElement {
    private _api;
    private _localize;
    stateObj: AlarmControlPanelEntity;
    _currentMode?: AlarmMode;
    private _modes;
    protected willUpdate(changedProp: PropertyValues<this>): void;
    private _getCurrentMode;
    private _setMode;
    private _valueChanged;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-alarm_control_panel-modes": HaStateControlAlarmControlPanelModes;
    }
}
