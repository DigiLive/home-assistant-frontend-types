/**
 * Returns the URL if it is safe to use as a link target, `undefined` otherwise.
 * Only absolute `http:` and `https:` URLs pass, the same check
 * `ha-attribute-value` already applies to attribute links.
 *
 * Use for every URL that reaches the frontend as data — from an integration
 * manifest, an add-on, a config flow or an entity attribute — so that a
 * `javascript:` URI can never become a clickable link.
 */
export declare const sanitizeHttpUrl: (url: string | null | undefined) => string | undefined;
/** Whether the URL is a `homeassistant://` deep link into the frontend. */
export declare const isHomeAssistantUrl: (url: string | null | undefined) => boolean;
/**
 * Turns a `homeassistant://` deep link into an in-app path, or returns
 * `undefined` when it does not point inside the frontend. Rewriting the scheme
 * on its own is not enough: `homeassistant:///example.com` would become
 * `//example.com`, which resolves to another origin.
 */
export declare const homeAssistantUrlToPath: (url: string | null | undefined) => string | undefined;
/**
 * Sanitizes a URL that may be either an external link or a `homeassistant://`
 * deep link, returning something safe to bind to an `href`.
 */
export declare const sanitizeLinkUrl: (url: string | null | undefined) => string | undefined;
