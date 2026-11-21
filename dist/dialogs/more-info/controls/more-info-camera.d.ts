import { LitElement, nothing, type PropertyValues } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-camera-stream";
import "../../../components/ha-spinner";
import "../../../components/ha-svg-icon";
import "../../../components/ha-tooltip";
import { type CameraEntity } from "../../../data/camera";
declare class MoreInfoCamera extends LitElement {
    private _localize;
    private _config;
    stateObj?: CameraEntity;
    private _attached;
    private _microphoneState;
    private _streamType?;
    private _supportsTwoWayAudio;
    private _cameraStream?;
    private _microphoneMeter?;
    private _stopAudioLevel?;
    private _appMicrophoneSession?;
    private _appMicrophoneRequest;
    private _unsubAppStreamStopped?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    private _resetMicrophone;
    protected updated(changedProps: PropertyValues): void;
    private _stopMicrophoneMeter;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    /**
     * Browsers only allow microphone access in a secure context (HTTPS). Without
     * it, an app can send the microphone itself in a separate stream, while the
     * video stream keeps running in the frontend.
     */
    private get _useAppMicrophone();
    private _microphoneDisabledReason;
    private _renderMicrophoneButton;
    private _toggleMicrophone;
    private _toggleAppMicrophone;
    private _appErrorMessage;
    private _stopAppMicrophone;
    private _clearAppMicrophoneSession;
    private _appStreamStopped;
    private _streamTypeChanged;
    private _capabilitiesChanged;
    private _microphoneChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-camera": MoreInfoCamera;
    }
}
export {};
