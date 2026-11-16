import type { ReactiveController, ReactiveControllerHost } from "@lit/reactive-element/reactive-controller";
import type { HaSlider } from "../../components/ha-slider";
import type { MediaPlayerEntity } from "../../data/media-player";
export interface MediaProgressControllerOptions {
    getStateObj: () => MediaPlayerEntity | undefined;
    getSlider: () => HaSlider | undefined;
}
/**
 * Drives a media progress slider: ticks it while the media plays, holds it
 * on the target after a seek until the player state catches up, and leaves
 * it alone while the user drags it. The controller owns the slider value;
 * the host must not bind `.value` and reads `progress` for position text.
 */
export declare class MediaProgressController implements ReactiveController {
    /** Current position in media seconds, pending seek included. */
    progress?: number;
    private _host;
    private _options;
    private _interval?;
    private _pendingPosition?;
    private _pendingSince;
    constructor(host: ReactiveControllerHost, options: MediaProgressControllerOptions);
    hostUpdate(): void;
    hostUpdated(): void;
    hostDisconnected(): void;
    /**
     * Report a seek so the displayed position moves to the target immediately
     * instead of jumping back until the player state reflects the seek.
     */
    seek(position: number): void;
    private _tick;
    private _syncInterval;
    private _stopInterval;
    private _computeProgress;
    private _applyPendingSeek;
    private _writeSlider;
}
