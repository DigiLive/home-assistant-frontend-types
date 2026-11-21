export interface ZWaveJSRebuildNetworkRoutesProgress {
    pending: number[];
    skipped: number[];
    done: number[];
    failed: number[];
}
export declare const zwaveJsRebuildNetworkRoutesProgressContext: {
    __context__: ZWaveJSRebuildNetworkRoutesProgress;
};
