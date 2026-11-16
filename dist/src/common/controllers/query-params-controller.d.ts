import type { ReactiveController, ReactiveControllerHost } from "@lit/reactive-element/reactive-controller";
import { type QueryParamConfig, type QueryParamValues } from "../url/query-params";
export interface QueryParamsControllerOptions {
    /** Whether the host keeps its state in the URL. */
    enabled: () => boolean;
    /**
     * Called when the page of the host is navigated to while the host is
     * connected, like a second link to an open page or coming back to it. Read
     * the URL with `searchParams()` and apply it, then `write()` the state back.
     */
    navigated: () => void;
    /**
     * The path of the host's page, for a page that can first be connected on
     * a sub-path it sends on to itself, like an add link. Defaults to the path
     * the host is first connected on.
     */
    path?: string;
}
/**
 * Keeps part of a page's state in the query string of the URL, so it can be
 * shared, bookmarked and reloaded. Writes replace the current history entry,
 * so Back leaves the page instead of undoing each change, and only touch the
 * config's params. The controller only acts while the host is connected and
 * the URL is still the page it was first connected on.
 */
export declare class QueryParamsController<C extends QueryParamConfig> implements ReactiveController {
    private _host;
    private _config;
    private _options;
    private _path?;
    private _pending?;
    private _pendingTimeout?;
    private _hostUpdated;
    private _connected;
    constructor(_host: ReactiveControllerHost, _config: C, _options: QueryParamsControllerOptions);
    hostConnected(): void;
    hostUpdated(): void;
    hostDisconnected(): void;
    /** The current search params, or undefined when not on the host's page. */
    searchParams(): URLSearchParams | undefined;
    /**
     * Write values to the URL. Pass `debounced` for values that change while
     * typing; any later write replaces a pending one.
     */
    write(values: QueryParamValues<NoInfer<C>>, debounced?: boolean): void;
    /**
     * Write a pending debounced write now, like when typing ends, before
     * something like a dialog adds a history entry it would land on.
     */
    flush(): void;
    private _cancelPending;
    private _isActive;
    private _navigated;
    private _write;
}
