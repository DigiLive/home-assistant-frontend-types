import { LitElement, nothing, type PropertyValues } from "lit";
import { type CameraCapabilities, type CameraEntity, type StreamType } from "../data/camera";
import "./ha-hls-player";
import "./ha-web-rtc-player";
declare const MJPEG_STREAM = "mjpeg";
export type CameraStreamType = StreamType | typeof MJPEG_STREAM;
export declare class HaCameraStream extends LitElement {
    private _config;
    private _api;
    private _connection;
    private _formatters?;
    stateObj?: CameraEntity;
    aspectRatio?: number;
    fitMode?: "cover" | "contain" | "fill";
    controls: boolean;
    muted: boolean;
    allowExoPlayer: boolean;
    private _posterUrl?;
    private _connected;
    private _capabilities?;
    private _hlsStreams?;
    private _webRtcStreams?;
    private _webRtcPlayer?;
    private _visibleStreamType?;
    private _thumbnailApi;
    willUpdate(changedProps: PropertyValues): void;
    /** The microphone track sent to the camera, only on WebRTC streams. */
    get microphoneTrack(): MediaStreamTrack | undefined;
    /** Toggles sending the microphone to the camera, only on WebRTC streams. */
    toggleMicrophone(): Promise<void>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(changedProps: PropertyValues<this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderStream;
    private _currentStreams;
    private _getCapabilities;
    private _getPosterUrl;
    private _handleImageLoad;
    private _handleHlsStreams;
    private _handleWebRtcStreams;
    private _streams;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-camera-stream": HaCameraStream;
    }
    interface HASSDomEvents {
        load: undefined;
        "stream-type-changed": {
            type?: CameraStreamType;
        };
        "camera-capabilities-changed": {
            capabilities?: CameraCapabilities;
        };
        streams: {
            hasAudio: boolean;
            hasVideo: boolean;
            codecs?: string[];
        };
    }
}
export {};
