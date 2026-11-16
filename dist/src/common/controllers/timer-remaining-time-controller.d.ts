import type { ReactiveController, ReactiveControllerHost } from "@lit/reactive-element/reactive-controller";
import type { HassEntity } from "home-assistant-js-websocket";
/**
 * Tracks the live remaining time of a timer entity. While the timer is
 * active, the host is re-rendered every second with an updated
 * `timeRemaining`, computed from the entity's `finishes_at` attribute.
 *
 * The host must call `setStateObj` whenever its timer entity changes.
 */
export declare class TimerRemainingTimeController implements ReactiveController {
    timeRemaining?: number;
    private _host;
    private _stateObj?;
    private _interval?;
    constructor(host: ReactiveControllerHost);
    setStateObj(stateObj: HassEntity | undefined): void;
    hostConnected(): void;
    hostDisconnected(): void;
    private _startInterval;
    private _clearInterval;
    private _calculateRemaining;
}
