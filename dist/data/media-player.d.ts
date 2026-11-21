import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import type { MediaPlayerItemId } from "../components/media-player/ha-media-player-browse";
import type { HomeAssistant, TranslationDict } from "../types";
import { MediaPlayerEntityFeature } from "./feature/media-player_entity_feature";
export { MediaPlayerEntityFeature };
interface MediaPlayerEntityAttributes extends HassEntityAttributeBase {
    media_content_id?: string;
    media_content_type?: string;
    media_artist?: string;
    media_album_name?: string;
    media_album_artist?: string;
    media_track?: number;
    media_playlist?: string;
    media_series_title?: string;
    media_season?: any;
    media_episode?: any;
    app_id?: string;
    app_name?: string;
    media_position_updated_at?: string | number | Date;
    media_duration?: number;
    media_position?: number;
    media_title?: string;
    media_channel?: string;
    icon?: string;
    entity_picture_local?: string;
    is_volume_muted?: boolean;
    volume_level?: number;
    repeat?: string;
    shuffle?: boolean;
    source?: string;
    source_list?: string[];
    sound_mode?: string;
    sound_mode_list?: string[];
    group_members?: string[];
}
export interface MediaPlayerEntity extends HassEntityBase {
    attributes: MediaPlayerEntityAttributes;
    state: "playing" | "paused" | "idle" | "off" | "on" | "unavailable" | "unknown" | "standby" | "buffering";
}
export type MediaPlayerBrowseAction = "pick" | "play";
export declare const BROWSER_PLAYER = "browser";
export type MediaPlayerLayoutType = "grid" | "list" | "auto";
export interface MediaClassBrowserSetting {
    icon: string;
    thumbnail_ratio?: string;
    layout?: "grid";
    show_list_images?: boolean;
}
export declare const MediaClassBrowserSettings: Record<string, MediaClassBrowserSetting>;
export interface MediaPickedEvent {
    item: MediaPlayerItem;
    navigateIds: MediaPlayerItemId[];
}
export interface MediaPlayerThumbnail {
    content_type: string;
    content: string;
}
export interface ControlButton {
    icon: string;
    action: keyof TranslationDict["ui"]["card"]["media_player"];
    disabled?: boolean;
}
export interface MediaPlayerItem {
    title: string;
    media_content_type: string;
    media_content_id: string;
    media_class: keyof TranslationDict["ui"]["components"]["media-browser"]["class"];
    children_media_class?: string | null;
    can_play: boolean;
    can_expand: boolean;
    can_search: boolean;
    search_media_classes?: (keyof TranslationDict["ui"]["components"]["media-browser"]["class"])[] | null;
    thumbnail?: string;
    iconPath?: string;
    children?: MediaPlayerItem[];
    not_shown?: number;
}
export declare const browseMediaPlayer: (callWS: HomeAssistant["callWS"], entityId: string, mediaContentId?: string, mediaContentType?: string) => Promise<MediaPlayerItem>;
export interface SearchMediaResult {
    result: MediaPlayerItem[];
}
export declare const searchMediaPlayer: (callWS: HomeAssistant["callWS"], entityId: string, searchQuery: string, mediaContentId?: string, mediaContentType?: string, mediaFilterClasses?: string[]) => Promise<SearchMediaResult>;
export declare const getCurrentProgress: (stateObj: MediaPlayerEntity) => number;
export declare const computeMediaDescription: (stateObj: MediaPlayerEntity) => string;
export declare const computeMediaControls: (stateObj: MediaPlayerEntity, useExtendedControls?: boolean) => ControlButton[] | undefined;
export declare const formatMediaTime: (seconds: number | undefined) => string;
export declare const cleanupMediaTitle: (title?: string) => string | undefined;
/**
 * Set volume of a media player entity.
 * @param hass Home Assistant object
 * @param entity_id entity ID of media player
 * @param volume_level number between 0..1
 * @returns
 */
export declare const setMediaPlayerVolume: (hass: HomeAssistant, entity_id: string, volume_level: number) => Promise<import("../types").ServiceCallResponse<any>>;
export declare const handleMediaControlClick: (hass: Pick<HomeAssistant, "callService">, stateObj: MediaPlayerEntity, action: string) => Promise<import("../types").ServiceCallResponse<any>>;
export declare const mediaPlayerPlayMedia: (hass: Pick<HomeAssistant, "callService">, entity_id: string, media_content_id: string, media_content_type: string, extra?: {
    enqueue?: "play" | "next" | "add" | "replace";
    announce?: boolean;
}) => Promise<import("../types").ServiceCallResponse<any>>;
export declare const mediaPlayerJoin: (callService: HomeAssistant["callService"], entity_id: string, group_members: string[]) => Promise<import("../types").ServiceCallResponse<any>>;
export declare const mediaPlayerUnjoin: (callService: HomeAssistant["callService"], entity_id: string) => Promise<import("../types").ServiceCallResponse<any>>;
