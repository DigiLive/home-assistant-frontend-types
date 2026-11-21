import type { HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import type { HomeAssistant, HomeAssistantApi } from "../types";
export declare const CAMERA_ORIENTATIONS: number[];
export declare const STREAM_TYPE_HLS = "hls";
export declare const STREAM_TYPE_WEB_RTC = "web_rtc";
export type StreamType = typeof STREAM_TYPE_HLS | typeof STREAM_TYPE_WEB_RTC;
export { CameraEntityFeature } from "./feature/camera_entity_feature";
interface CameraEntityAttributes extends HassEntityAttributeBase {
    model_name?: string;
    access_token?: string;
    brand?: string;
    motion_detection?: boolean;
}
export interface CameraEntity extends HassEntityBase {
    attributes: CameraEntityAttributes;
}
export interface CameraPreferences {
    preload_stream: boolean;
    orientation: number;
}
export interface CameraThumbnail {
    content_type: string;
    content: string;
}
export interface Stream {
    url: string;
}
export type WebRtcOfferEvent = WebRtcId | WebRtcAnswer | WebRtcCandidate | WebRtcError;
export interface WebRtcId {
    type: "session";
    session_id: string;
}
export interface WebRtcAnswer {
    type: "answer";
    answer: string;
}
export interface WebRtcCandidate {
    type: "candidate";
    candidate: RTCIceCandidateInit;
}
export interface WebRtcError {
    type: "error";
    code: string;
    message: string;
}
export interface WebRtcOfferResponse {
    id: string;
}
export declare const cameraUrlWithWidthHeight: (base_url: string, width: number, height: number) => string;
export declare const computeMJPEGStreamUrl: (entity: CameraEntity) => string | undefined;
export declare const fetchThumbnailUrlWithCache: (hass: Pick<HomeAssistant, "callWS" | "hassUrl">, entityId: string, width: number, height: number) => Promise<string>;
export declare const fetchThumbnailUrl: (hass: Pick<HomeAssistant, "callWS" | "hassUrl">, entityId: string) => Promise<string>;
export declare const downloadCameraSnapshot: (api: HomeAssistantApi, entityId: string) => Promise<void>;
export declare const fetchStreamUrl: (hass: Pick<HomeAssistant, "callWS" | "hassUrl">, entityId: string, format?: "hls") => Promise<Stream>;
export declare const webRtcOffer: (hass: Pick<HomeAssistant, "connection">, entity_id: string, offer: string, callback: (event: WebRtcOfferEvent) => void) => Promise<() => Promise<void>>;
export declare const addWebRtcCandidate: (hass: Pick<HomeAssistant, "callWS">, entity_id: string, session_id: string, candidate: RTCIceCandidateInit) => Promise<unknown>;
export declare const fetchCameraPrefs: (hass: HomeAssistant, entityId: string) => Promise<CameraPreferences>;
type ValueOf<T extends any[]> = T[number];
export declare const updateCameraPrefs: (hass: HomeAssistant, entityId: string, prefs: {
    preload_stream?: boolean;
    orientation?: ValueOf<typeof CAMERA_ORIENTATIONS>;
}) => Promise<CameraPreferences>;
export declare const isCameraMediaSource: (mediaContentId: string) => boolean;
export declare const getEntityIdFromCameraMediaSource: (mediaContentId: string) => string;
export interface CameraCapabilities {
    frontend_stream_types: StreamType[];
    two_way_audio: boolean;
}
export declare const fetchCameraCapabilities: (hass: Pick<HomeAssistant, "callWS">, entity_id: string) => Promise<CameraCapabilities>;
export interface WebRTCClientConfiguration {
    configuration: RTCConfiguration;
    dataChannel?: string;
}
export declare const fetchWebRtcClientConfiguration: (hass: Pick<HomeAssistant, "callWS">, entityId: string) => Promise<WebRTCClientConfiguration>;
