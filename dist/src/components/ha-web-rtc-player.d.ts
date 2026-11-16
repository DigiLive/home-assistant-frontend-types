import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-alert";
import "./ha-spinner";
export type WebRtcMicrophoneState = "off" | "connecting" | "on" | "denied";
/**
 * A WebRTC stream is established by first sending an offer through a signal
 * path via an integration. An answer is returned, then the rest of the stream
 * is handled entirely client side.
 */
export declare class HaWebRtcPlayer extends LitElement {
    private _api;
    private _connection;
    private _localize;
    entityid?: string;
    aspectRatio?: number;
    fitMode?: "cover" | "contain" | "fill";
    controls: boolean;
    muted: boolean;
    autoPlay: boolean;
    playsInline: boolean;
    posterUrl?: string;
    private _error?;
    private _reconnectPoster?;
    private _videoEl;
    private _clientConfig?;
    private _peerConnection?;
    private _remoteStream?;
    private _localReturnAudioTrack?;
    private _microphoneSender?;
    private _timerRunning;
    private _microphoneConnecting;
    private _microphoneDenied;
    private _microphoneRequest;
    get microphoneState(): WebRtcMicrophoneState;
    get microphoneTrack(): MediaStreamTrack | undefined;
    toggleMicrophone(): Promise<void>;
    private _captureReconnectFrame;
    private _fireMicrophoneChanged;
    private _unsub?;
    private _sessionId?;
    private _candidatesList;
    private _hiddenCleanupTimeout?;
    private _cleanUpCount;
    private _handleVisibilityChange;
    protected render(): TemplateResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _startWebRtc;
    private _startNegotiation;
    private _iceConnectionStateChanged;
    private _handleOfferEvent;
    private _handleIceCandidate;
    private _addTrack;
    private _handleAnswer;
    private _getMicrophoneTrack;
    private _failStart;
    private _cleanUp;
    private _loadedData;
    private _videoResized;
    private _startTimer;
    private _stopTimer;
    private _logEvent;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-web-rtc-player": HaWebRtcPlayer;
    }
    interface HASSDomEvents {
        "microphone-changed": {
            state: WebRtcMicrophoneState;
        };
    }
}
