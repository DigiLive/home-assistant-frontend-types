export declare const hex2rgb: (hex: string) => [number, number, number];
export declare const rgb2hex: (rgb: [number, number, number]) => string;
export declare const rgb2lab: (rgb: [number, number, number]) => [number, number, number];
export declare const lab2rgb: (lab: [number, number, number]) => [number, number, number];
export declare const lab2hex: (lab: [number, number, number]) => string;
export declare const rgb2hsv: (rgb: [number, number, number]) => [number, number, number];
export declare const hsv2rgb: (hsv: [number, number, number]) => [number, number, number];
export declare const rgb2hs: (rgb: [number, number, number]) => [number, number];
export declare const hs2rgb: (hs: [number, number]) => [number, number, number];
/**
 * Attempt to get a HEX color from a color defined in different formats:
 * HEX, rgb/rgba, named color
 * @param color - Color (HEX, rgb/rgba, named color) to be converted to HEX
 * @returns HEX color
 */
export declare function theme2hex(color: string): string;
