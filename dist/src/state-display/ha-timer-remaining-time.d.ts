import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues } from "lit";
import { ReactiveElement } from "lit";
declare class HaTimerRemainingTime extends ReactiveElement {
    stateObj: HassEntity;
    private _formatters?;
    private _remainingTime;
    protected createRenderRoot(): this;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected update(changedProps: PropertyValues<this>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-timer-remaining-time": HaTimerRemainingTime;
    }
}
export {};
