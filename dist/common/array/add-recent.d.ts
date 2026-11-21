/**
 * Add a value to a most recently used list. The value goes first, also when it
 * was already in the list, and the list is capped at `max`.
 * Entries rejected by `isValid` are dropped first, so they don't take up slots.
 */
export declare const addRecent: <T>(list: readonly T[] | undefined, value: T, max: number, isValid?: (item: T) => boolean) => T[];
