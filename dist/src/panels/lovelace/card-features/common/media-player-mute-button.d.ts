import { nothing } from "lit";
import type { TemplateResult } from "lit";
import type { LocalizeFunc } from "../../../../common/translations/localize";
import "../../../../components/ha-control-button";
import "../../../../components/ha-svg-icon";
import { type MediaPlayerEntity } from "../../../../data/media-player";
import type { HomeAssistant } from "../../../../types";
export declare const renderMuteButton: (localize: LocalizeFunc, stateObj: MediaPlayerEntity, showMuteButton: boolean | undefined, disabled: boolean, onToggleMute: (ev: Event) => void) => TemplateResult | typeof nothing;
export declare const toggleMediaPlayerMute: (ev: Event, callService: HomeAssistant["callService"], stateObj: MediaPlayerEntity, el: HTMLElement) => void;
