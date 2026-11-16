/**
 * Returns `baseSlug` if it is not in `taken`, otherwise `baseSlug-2`, `baseSlug-3`, …
 */
export declare function pickAvailableDashboardUrlPath(baseSlug: string, taken: ReadonlySet<string>): string;
