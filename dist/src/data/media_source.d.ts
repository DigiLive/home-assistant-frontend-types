import type { LocalizeFunc } from "../common/translations/localize";
import type { HomeAssistant } from "../types";
import type { MediaPlayerItem, SearchMediaResult } from "./media-player";
export interface ResolvedMediaSource {
    url: string;
    mime_type: string;
}
export declare const resolveMediaSource: (hass: Pick<HomeAssistant, "callWS">, media_content_id: string) => Promise<ResolvedMediaSource>;
export declare const RESOLVE_CACHE_TIME: number;
export declare const resolveMediaSourceWithCache: (hass: Pick<HomeAssistant, "callWS" | "hassUrl">, media_content_id: string) => Promise<ResolvedMediaSource>;
export declare const browseLocalMediaPlayer: (callWS: HomeAssistant["callWS"], mediaContentId?: string) => Promise<MediaPlayerItem>;
export declare const searchMedia: (callWS: HomeAssistant["callWS"], mediaContentId: string | undefined, searchQuery: string, mediaFilterClasses?: string[]) => Promise<SearchMediaResult>;
export declare const MANUAL_MEDIA_SOURCE_PREFIX = "__MANUAL_ENTRY__";
export declare const isManualMediaSourceContentId: (mediaContentId: string) => boolean;
export declare const isMediaSourceContentId: (mediaId: string) => boolean;
export declare const isLocalMediaSourceContentId: (mediaId: string) => boolean;
export declare const isImageUploadMediaSourceContentId: (mediaId: string) => boolean;
export declare const getImageEntityIdFromMediaSourceContentId: (mediaId: string) => string | undefined;
export declare const uploadLocalMedia: (fetchWithAuth: HomeAssistant["fetchWithAuth"], localize: LocalizeFunc, media_content_id: string, file: File) => Promise<any>;
export declare const removeLocalMedia: (callWS: HomeAssistant["callWS"], media_content_id: string) => Promise<unknown>;
export declare const isStreamingMedia: (url: string) => boolean;
