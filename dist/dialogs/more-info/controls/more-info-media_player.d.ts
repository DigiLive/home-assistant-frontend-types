import { LitElement, nothing } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-generic-picker";
import "../../../components/ha-icon-button";
import "../../../components/ha-marquee-text";
import "../../../components/ha-svg-icon";
import "../../../components/ha-tooltip";
import type { MediaPlayerEntity } from "../../../data/media-player";
declare class MoreInfoMediaPlayer extends LitElement {
    stateObj?: MediaPlayerEntity;
    private _localize;
    private _formatters;
    private _api;
    private _connection;
    private _positionSlider?;
    private _volumeSlider?;
    private _sourcePicker?;
    private _soundModePicker?;
    private _volumeStep;
    private _progressController;
    private _debouncedVolumeSet;
    private _volumeController;
    private _computeSourceItems;
    private _computeSoundModeItems;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderEmptyCover;
    private _renderVolumeControl;
    private _renderGrouping;
    private _renderSourceControl;
    private _renderSoundModeControl;
    private _renderControlButton;
    private _getSourceItems;
    private _getSoundModeItems;
    private _handleClick;
    private _toggleMute;
    private _setVolume;
    private _selectSource;
    private _selectSoundMode;
    private _handleSourceChange;
    private _handleSoundModeChange;
    private _handleSourcePicked;
    private _handleSoundModePicked;
    private _openSourcePicker;
    private _openSoundModePicker;
    private _showBrowseMedia;
    private _showGroupMediaPlayers;
    private _handleMediaSeekChanged;
    private _handleVolumePointerDown;
    private _handleVolumePointerUp;
    private _handleVolumeInput;
    private _handleVolumeChange;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-media_player": MoreInfoMediaPlayer;
    }
}
export {};
