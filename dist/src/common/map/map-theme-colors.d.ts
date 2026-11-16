/**
 * What the active theme says about the map, or undefined when it says nothing -
 * the common case, and the one that keeps the map on the generated style.
 *
 * Every value comes out as `rgba()`, which is both what @versatiles/style takes
 * and what lets a feature's own opacity be put back: the builder throws on a
 * color it cannot parse, and that would cost the card its vector map.
 */
export declare const readMapThemeColors: (element: Element) => Record<string, string> | undefined;
