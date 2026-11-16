/**
 * True when the given string looks like a failed load of a content-hashed
 * frontend chunk — i.e. a stale build referencing files that no longer exist
 * on the server after an upgrade. Accepts either a URL (from a resource
 * `error` event) or an error message (from a rejected dynamic `import()`).
 */
export declare const isStaleBuildError: (urlOrMessage: string | undefined) => urlOrMessage is string;
/**
 * Reload the page onto the current build.
 *
 * Returns `true` when a reload was actually initiated, `false` when the loop
 * guard blocked it — so callers can fall back to logging / an error screen
 * instead of silently swallowing a still-failing chunk.
 *
 * Guarded by the time of the last recovery reload in sessionStorage — NOT the
 * boot guard's URL param, which core.ts strips on every connect — so a recovery
 * that
 * boots and then immediately re-triggers the same missing chunk (a deep-linked
 * panel, more-info from the URL, or a preloaded route) cannot reload-loop.
 */
export declare const reloadFresh: () => boolean;
/**
 * Reload onto the current build, but never over unsaved work: when an editor
 * is dirty, show a non-dismissable toast and defer the reload until the dirty
 * state clears. Returns `true` when a reload or the deferral toast was started.
 */
export declare const reloadForUpdate: (rootEl?: HTMLElement) => boolean;
/**
 * Recover from a failed lazy load caused by a stale build (a content-hashed
 * chunk that 404s after an upgrade while the app stayed open).
 *
 * The chunk is probed first: one that is still on the server failed in
 * transport, which a cache-dropping reload cannot fix and would make worse, so
 * that case is left to the caller to surface.
 *
 * On a confirmed stale build:
 * - clean: reload onto the current build.
 * - dirty (an editor has unsaved changes): show a non-dismissable toast and
 *   auto-reload once the user saves/discards, so unsaved work is never lost.
 *
 * Returns `false` when the error is not a chunk-load failure, names a file this
 * build does not ship, or a recent probe did not find the chunk gone.
 * Otherwise a promise — shared across a burst — resolving `true` when recovery
 * started (the caller can skip its own error UI / logging) and `false` for
 * everything else: the chunk was still served, the probe was inconclusive (a
 * network error, a timeout, a 5xx), or the loop guard blocked the reload.
 */
export declare const recoverFromStaleBuild: (urlOrMessage: string | undefined, rootEl?: HTMLElement) => false | Promise<boolean>;
