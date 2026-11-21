/**
 * Return a shallow copy of an object with every key removed whose value is
 * `undefined` or equals that key's default, so a key left at its default
 * (whether absent or explicit) does not count as a difference. A key's default
 * comes from `defaults` when present, otherwise `false`.
 *
 * Non-plain-object values are returned unchanged; only top-level keys are
 * compared.
 */
export declare const stripDefaults: <T>(value: T, defaults?: Record<string, unknown>) => T;
