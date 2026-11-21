export type MicrophoneError = "permission_denied" | "not_found" | "in_use" | "unknown";
export declare class AudioRecorder {
    private _active;
    private _callback;
    private _context;
    private _stream;
    private _source;
    private _recorder;
    constructor(callback: (data: Int16Array) => void);
    get active(): boolean;
    get sampleRate(): number;
    static get isSupported(): boolean;
    start(): Promise<MicrophoneError | undefined>;
    stop(): Promise<void>;
    close(): void;
    private _createContext;
}
