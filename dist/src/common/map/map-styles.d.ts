/** Style ids, in the order the card editor offers them */
export declare const MAP_STYLES: readonly ["default", "colorful", "natural", "muted", "gray", "toner"];
export type MapStyle = (typeof MAP_STYLES)[number];
export declare const DEFAULT_MAP_STYLE: MapStyle;
/** @versatiles/style's cartographies, each a light and a dark palette */
type VersatilesPalette = "colorful" | "natural" | "muted" | "gray" | "toner";
export type MapPalette = VersatilesPalette | `${VersatilesPalette}-dark`;
/**
 * Color adjustments applied to the whole style, straight from
 * @versatiles/style's `recolor`. The tiles.versatiles.org styler writes these.
 */
export interface MapStyleRecolor {
    /** Swap light for dark, keeping the hues */
    invert_brightness?: boolean;
    /** Hue rotation in degrees */
    rotate_hue?: number;
    /** -1 is grayscale, 0 unchanged, 1 twice as saturated */
    saturate?: number;
    gamma?: number;
    contrast?: number;
    brightness?: number;
    tint?: {
        color?: string;
        amount?: number;
    };
    blend?: {
        color?: string;
        amount?: number;
    };
}
/** A style with adjustments, rather than one of the styles as it comes */
export interface CustomMapStyleConfig {
    /** Cartography the adjustments start from; omit for the default */
    base?: MapStyle;
    /** Per-feature colors, keyed as @versatiles/style names them (water, land, natureWood, ...) */
    colors?: Record<string, string>;
    /**
     * Colors for the dark palette. Replaces `colors` rather than merging with
     * it: a light palette showing through the keys a dark one did not name is
     * the mistake this exists to prevent. Without it `colors` is used for both.
     */
    colors_dark?: Record<string, string>;
    recolor?: MapStyleRecolor;
    /** Label options: language, and sizes per kind of label */
    text?: Record<string, unknown>;
    /** Icon scale and spacing */
    icon?: Record<string, unknown>;
    /** Which feature groups are drawn, and from which zoom */
    layers?: boolean | number | Record<string, unknown>;
}
export type MapStyleConfig = MapStyle | CustomMapStyleConfig;
/** A style ready to be loaded: the palette to draw, plus adjustments if any */
export interface ResolvedMapStyle {
    palette: MapPalette;
    /** Options for @versatiles/style; absent means the palette as it comes */
    options?: Record<string, unknown>;
    /** Fetched rather than built: the default, while nothing was added to it */
    shipped?: "light" | "dark";
    /**
     * The style's own colors, without what the theme or the card painted over
     * them. What to fall back on when the builder rejects an adjustment, so a
     * bad value costs the adjustments rather than the cartography.
     */
    baseColors?: Record<string, string>;
}
export declare const isCustomMapStyle: (style: MapStyleConfig | undefined) => style is CustomMapStyleConfig;
export declare const paletteFor: (style: MapStyle, darkMode: boolean) => MapPalette;
/**
 * A picked cartography back into a config value, keeping whatever only YAML can
 * write. A bare name while there is nothing else, an object once there is.
 *
 * The visual editor offers the cartography and nothing else, so without this an
 * edit would drop a hand-written palette without saying so.
 */
export declare const withMapStyleBase: (current: MapStyleConfig | undefined, base: string | undefined) => MapStyleConfig | undefined;
/** A style that does not exist would leave the map blank, so it falls back */
export declare const resolveMapStyle: (style: MapStyleConfig | undefined, darkMode: boolean, 
/** What the active theme paints over the style; see map-theme-colors.ts */
themeColors?: Record<string, string>) => ResolvedMapStyle;
export {};
