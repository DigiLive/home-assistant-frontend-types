/**
 * Returns the path if it is safe to navigate to, `undefined` otherwise. Use for
 * paths that can be influenced by a URL parameter or by dashboard config before
 * they end up in an `href` or in `navigate()`.
 */
export declare const sanitizeNavigationPath: (path: string | null | undefined) => string | undefined;
