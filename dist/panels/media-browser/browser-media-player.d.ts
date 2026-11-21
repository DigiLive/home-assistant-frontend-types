import type { MediaPlayerEntity, MediaPlayerItem } from "../../data/media-player";
import type { ResolvedMediaSource } from "../../data/media_source";
import type { HomeAssistant } from "../../types";
export declare class BrowserMediaPlayer {
    hass: HomeAssistant;
    item: MediaPlayerItem;
    resolved: ResolvedMediaSource;
    private onChange;
    private onError;
    private player;
    buffering: boolean;
    private _removed;
    constructor(hass: HomeAssistant, item: MediaPlayerItem, resolved: ResolvedMediaSource, volume: number, onChange: () => void, onError: () => void);
    private _handleChange;
    private _handleError;
    pause(): void;
    play(): void;
    setVolume(volume: number): void;
    seek(position: number): void;
    remove(): void;
    static idleStateObj(): MediaPlayerEntity;
    toStateObj(): MediaPlayerEntity;
}
