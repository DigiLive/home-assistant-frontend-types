import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-control-button";
import type { ExtEntityRegistryEntry } from "../../../../data/entity/entity_registry";
import type { TimerEntity } from "../../../../data/timer";
import "../ha-more-info-favorites";
export declare class HaMoreInfoTimerPresets extends LitElement {
    private _api;
    private _localize;
    private _user;
    private _locale?;
    stateObj: TimerEntity;
    entry?: ExtEntityRegistryEntry | null;
    editMode?: boolean;
    private _presets;
    protected updated(changedProps: PropertyValues<this>): void;
    private _localizePreset;
    private _save;
    private _setPresets;
    private _move;
    private _applyPreset;
    private _promptPresetValue;
    private _addPreset;
    private _editPreset;
    private _deletePreset;
    private _renderPreset;
    private _deleteLabel;
    private _handlePresetAction;
    private _handlePresetMoved;
    private _handlePresetDelete;
    private _handlePresetAdd;
    private _handlePresetDone;
    protected render(): TemplateResult | typeof nothing;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-timer-presets": HaMoreInfoTimerPresets;
    }
}
