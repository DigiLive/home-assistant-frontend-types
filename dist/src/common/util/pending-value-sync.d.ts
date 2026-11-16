/**
 * Keeps a locally edited value from being overwritten by entity state updates
 * while the change is waiting to be sent or the service call is in flight.
 *
 * Call `schedule()` when the user changes the value and a (debounced) service
 * call is queued, wrap the service call in `run()`, and only copy entity state
 * into the local value when `shouldSync()` returns true. After a successful
 * call the local value is kept until the next state update syncs it. When the
 * call fails, the `resync` callback restores the entity state.
 *
 * Only the latest call is tracked, as it supersedes any earlier ones.
 */
export declare class PendingValueSync {
    private _scheduled;
    private _latestCall?;
    get pending(): boolean;
    /** Mark that a service call has been scheduled for a local change. */
    schedule(): void;
    /**
     * Start over, e.g. when switching entities, so a pending change is not
     * shown for (or sent to) a different entity. Calls already in flight are
     * not aborted, but no longer block state updates or trigger `resync`.
     */
    reset(): void;
    /** Whether an entity state update may be copied into the local value. */
    shouldSync(): boolean;
    /**
     * Run the service call for the scheduled change. If the latest call fails
     * and no new change is scheduled, `resync` is called. Errors are not
     * rethrown, as `callService` already notifies the user when the call fails.
     */
    run(call: () => Promise<unknown>, resync: () => void): Promise<void>;
}
