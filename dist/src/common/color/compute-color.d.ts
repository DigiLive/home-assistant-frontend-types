export declare const THEME_COLORS: Set<string>;
/**
 * Compose a CSS variable out of a theme color
 * @param color - Theme color (examples: `red`, `primary-text`)
 * @returns CSS variable in `--xxx-color` format;
 * initial color if not found in theme colors
 */
export declare function computeCssVariableName(color: string): string;
/**
 * Compose a CSS variable out of a theme color & then resolve it
 * @param color - Theme color (examples: `red`, `primary-text`)
 * @returns Resolved CSS variable in `var(--xxx-color)` format;
 * initial color if not found in theme colors
 */
export declare function computeCssColor(color: string): string;
/**
 * Get a color from document's styles
 * @param color - Named theme color (examples: `red`, `primary-text`)
 * @param style - Styles to resolve against, defaults to the document body
 * @returns Resolved color; initial color if not found in the styles
 */
export declare function resolveThemeColor(color: string, style?: CSSStyleDeclaration): string;
/**
 * Validates if a string is a valid color.
 * Accepts: hex colors (#xxx, #xxxxxx), theme colors, and valid CSS color names.
 */
export declare function isValidColorString(color: string | undefined): boolean;
