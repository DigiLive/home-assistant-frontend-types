import type { ExternalMessaging, WebRtcStreamErrorCode, WebRtcStreamStopped } from "./external_messaging";
export declare const canAppStreamMicrophone: (external?: ExternalMessaging) => boolean;
export declare const isWebRtcStreamErrorCode: (code: string) => code is WebRtcStreamErrorCode;
/**
 * Asks the app to stream the microphone to the camera.
 * Resolves with the session ID once connected, rejects with `{ code, message }`
 * where `code` is a `WebRtcStreamErrorCode`.
 */
export declare const startAppMicrophoneStream: (external: ExternalMessaging, entityId: string) => Promise<string>;
export declare const stopAppMicrophoneStream: (external: ExternalMessaging, sessionId: string) => void;
/**
 * Calls `callback` when the app ends a session without the frontend stopping it.
 * Returns a function to unsubscribe.
 */
export declare const subscribeAppStreamStopped: (callback: (stopped: WebRtcStreamStopped) => void) => (() => void);
