export interface DebugConsoleRun {
    id: number;
    code: string;
}
/**
 * The code a console is running. Runs go on side by side, like in the console
 * of a web browser, so code that waits does not hold up the next.
 */
export declare class DebugConsoleRuns {
    private readonly _changed;
    pending: DebugConsoleRun[];
    private _nextId;
    private _generation;
    constructor(_changed: () => void);
    /**
     * Run code, and return its result, or nothing when the log got cleared in
     * the meantime.
     */
    run<T>(code: string, execute: (code: string) => Promise<T>): Promise<T | undefined>;
    /** Forget the results of runs still going, as the log they belong to is gone. */
    clear(): void;
}
