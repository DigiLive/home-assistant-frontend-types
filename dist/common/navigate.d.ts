declare global {
    interface HASSDomEvents {
        "location-changed": NavigateOptions;
    }
}
export interface NavigateOptions {
    replace?: boolean;
    data?: Record<string, unknown>;
}
/**
 * State of the current history entry. Always read through this, the app writes
 * to the main window and a panel running in an iframe has its own history.
 */
export declare const getHistoryState: () => any;
/**
 * Merge into the current history entry's state, keeping what is already there.
 * Entries carry the app's own bookkeeping (`from`, `root`, dialog state), so
 * they must never be replaced wholesale.
 */
export declare const updateHistoryState: (patch: Record<string, unknown>) => void;
/**
 * Rewrite the URL of the current history entry without navigating and without
 * touching its state. For query parameter cleanup.
 */
export declare const replaceCurrentUrl: (url: string) => void;
/**
 * Stash a destination URL in the current history entry's state. If the page
 * is refreshed while a dialog is open, urlSyncMixin will navigate to this URL
 * on load instead of cleaning up the stale dialog state by going back.
 * The current URL is not changed.
 */
export declare const setRefreshUrl: (path: string) => void;
/**
 * Lets a page with unsaved changes (e.g. the automation editor) veto
 * navigation. `isDirty` is read live at navigation time; `prompt` resolves
 * true when navigation may proceed.
 */
export interface UnsavedChangesGuard {
    isDirty(): boolean;
    prompt(): Promise<boolean>;
}
export declare const registerUnsavedChangesGuard: (guard: UnsavedChangesGuard) => void;
export declare const unregisterUnsavedChangesGuard: (guard: UnsavedChangesGuard) => void;
export declare const navigate: (path: string, options?: NavigateOptions) => Promise<boolean>;
/**
 * Whether the previous history entry is a page this app navigated away from.
 * `history.length` cannot answer this: a login redirect goes through
 * `location.assign`, which leaves /auth/authorize right behind the requested
 * page, and going back there would bounce the user out of the app.
 */
export declare const canGoBack: () => boolean;
/**
 * Navigate back to the page we came from, falling back to a path when the
 * previous entry is not ours (deep link, login redirect, fresh tab).
 * Deliberately not guarded against unsaved changes: pages with such a guard
 * confirm in their own back handlers, and delete flows leave through here
 * after the edited item is already gone.
 */
export declare const goBack: (fallbackPath?: string) => Promise<void>;
/**
 * Handles a history pop before the router acts on it. A pop cannot be cancelled,
 * so one away from a page with unsaved changes holds the route and prompts;
 * `resume` runs once the user agrees to leave. The prompt must add no history
 * entry of its own, or the entries the pop left would be truncated.
 */
export declare const handleHistoryPop: (resume: () => void) => void;
