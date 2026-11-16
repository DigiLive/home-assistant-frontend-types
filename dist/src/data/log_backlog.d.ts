export declare const ANSI_ESCAPE: RegExp;
export declare class LogStreamMerger {
    private readonly _streams;
    private readonly _limit;
    private _seen;
    constructor(_streams: number, _limit: number);
    merge(batches: string[][]): string[];
    private _isNew;
}
