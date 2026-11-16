export declare const setViewTransitionDisabled: (disabled: boolean) => void;
/**
 * Executes a synchronous callback within a View Transition if supported, otherwise runs it directly.
 *
 * @param callback - Synchronous function to execute. The callback will be passed a boolean indicating whether the view transition is available.
 * @returns Promise that resolves when the transition completes (or immediately if not supported)
 *
 * @example
 * ```typescript
 * withViewTransition(() => {
 *   this.large = !this.large;
 * });
 * ```
 */
export declare const withViewTransition: (callback: (viewTransitionAvailable: boolean) => void) => Promise<void>;
