import type { ControlButton, MediaPlayerEntity } from "../../../data/media-player";
import type { MediaPlayerPlaybackControl } from "./types";
export declare const supportsMediaPlayerPlaybackControl: (stateObj: MediaPlayerEntity, control: MediaPlayerPlaybackControl) => boolean;
export declare const MEDIA_PLAYER_DEFAULT_CONTROLS: MediaPlayerPlaybackControl[];
export declare const getDefaultMediaPlayerControls: (stateObj?: MediaPlayerEntity) => MediaPlayerPlaybackControl[];
export declare const MEDIA_PLAYER_PLAYBACK_CONTROLS_BUTTONS: Record<MediaPlayerPlaybackControl, (stateObj: MediaPlayerEntity) => ControlButton>;
export declare const computeMediaPlayerPlaybackButtons: (stateObj: MediaPlayerEntity, controls: readonly MediaPlayerPlaybackControl[]) => ControlButton[];
