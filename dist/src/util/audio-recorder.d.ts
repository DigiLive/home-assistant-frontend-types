export declare class AudioRecorder {
    private _active;
    private _callback;
    private _context;
    private _stream;
    private _source;
    private _recorder;
    constructor(callback: (data: Int16Array) => void);
    get active(): boolean;
    get sampleRate(): number | undefined;
    static get isSupported(): false | {
        new (contextOptions?: AudioContextOptions): AudioContext;
        prototype: AudioContext;
    };
    start(): Promise<void>;
    stop(): Promise<void>;
    close(): void;
    private _createContext;
}
