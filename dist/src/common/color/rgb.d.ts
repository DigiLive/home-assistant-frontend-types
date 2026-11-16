/**
 * Calculates the luminosity of an RGB color.
 * @param rgb - The RGB color to calculate the luminosity of.
 * @returns The luminosity of the color.
 */
export declare const luminosity: (rgb: [number, number, number]) => number;
/**
 * Calculates the contrast ratio between two RGB colors.
 * @param color1 - The first color to calculate the contrast ratio of.
 * @param color2 - The second color to calculate the contrast ratio of.
 * @returns The contrast ratio between the two colors.
 */
export declare const rgbContrast: (color1: [number, number, number], color2: [number, number, number]) => number;
/**
 * Calculates the contrast ratio between two RGB colors.
 * @param rgb1 - The first color to calculate the contrast ratio of.
 * @param rgb2 - The second color to calculate the contrast ratio of.
 * @returns The contrast ratio between the two colors.
 */
export declare const getRGBContrastRatio: (rgb1: [number, number, number], rgb2: [number, number, number]) => number;
/**
 * Tells whether a color can be measured, which a CSS function that is passed
 * through unevaluated cannot, and whether it covers what is behind it
 * @param color - Color (HEX, rgb/rgba, named color) to check
 * @returns Whether a contrast against this color says anything
 */
export declare const isOpaqueColor: (color: string) => boolean;
/**
 * Returns a contrasted color (black or white) for another color
 * @param color - Color (HEX, rgb/rgba, named color) to calculate a contrasted color
 * @returns HEX color, whichever of black and white has the higher contrast ratio
 */
export declare const getContrastedColorHex: (color: string) => string;
