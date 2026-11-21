import type { ReactiveController, ReactiveControllerHost } from "lit";
export interface TraceRunControllerOptions {
    /** Path of the trace page of the script or automation the host shows. */
    tracePath: () => string;
    /** The run the host shows. */
    shownRunId: () => string | undefined;
    /** Load the trace list and show this run. */
    loadRun: (runId: string) => void;
}
/**
 * Keeps a trace page in step with its URL. A link to another run of the same
 * script or automation, and browser back and forward between such runs, only
 * change the query string, which does not update the route, so the page has
 * to follow the URL itself. Requests are numbered, so a response that arrives
 * after a newer request, or after a run was picked, is dropped.
 */
export declare class TraceRunController implements ReactiveController {
    private readonly _options;
    private _listRequest;
    private _traceRequest;
    private _requestedRunId?;
    constructor(host: ReactiveControllerHost, options: TraceRunControllerOptions);
    /** The run a link asked for while its trace list is still loading. */
    get requestedRunId(): string | undefined;
    hostConnected(): void;
    hostDisconnected(): void;
    /** Start loading the trace list; `runId` is the run to show once it arrives. */
    startListRequest(runId?: string): number;
    /** Whether a later request, a picked run or a history step replaced it. */
    isLatestListRequest(request: number): boolean;
    /** The latest trace list arrived and its run is about to be shown. */
    endListRequest(): void;
    startTraceRequest(): number;
    isLatestTraceRequest(request: number): boolean;
    /** A run picked on the page wins over a linked run that is still loading. */
    cancelLinkRequest(): void;
    /**
     * Put the shown run into the current history entry, without adding one, so
     * that browser history, reloads and the links between traces agree.
     */
    writeRunIdToUrl(runId: string): void;
    private _isTracePage;
    private _syncRunFromUrl;
}
