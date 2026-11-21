import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-duration-input";
import type { ExtEntityRegistryEntry } from "../../../data/entity/entity_registry";
import type { TimerEntity } from "../../../data/timer";
import "../components/ha-more-info-state-header";
import "../components/timers/ha-more-info-timer-presets";
declare class MoreInfoTimer extends LitElement {
    stateObj?: TimerEntity;
    entry?: ExtEntityRegistryEntry | null;
    editMode?: boolean;
    private _localize;
    private _api;
    private _formatters;
    private _duration?;
    private _finished;
    private _remainingTime;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    private _finishedAnimationEnded;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _durationChanged;
    private _start;
    private _handleActionClick;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-timer": MoreInfoTimer;
    }
}
export {};
