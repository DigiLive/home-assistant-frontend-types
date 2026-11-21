export declare const URL_ATTRIBUTES: readonly [readonly ["a", "href"], readonly ["img", "src"], readonly ["source", "src"]];
/**
 * Rewrite the address of every link and image in a piece of HTML.
 *
 * Parsed in a template, which loads nothing, so an image with a relative
 * address is never requested from Home Assistant before it is rewritten. The
 * browser already resolved entities and every way markdown writes a link.
 */
export declare const rewriteHtmlUrls: (html: string, rewrite: (url: string) => string) => string;
