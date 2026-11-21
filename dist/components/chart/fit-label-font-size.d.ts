interface FitLabelOptions {
    /** Font size the label is measured at, and the largest size returned */
    fontSize: number;
    width: number;
    height: number;
    /** Height of the label at `fontSize` before ECharts wraps it */
    unwrappedHeight: number;
}
/**
 * Largest font size at which an ECharts label with `overflow: "break"`,
 * wrapped at `width`, fits in `height` without breaking a word.
 */
export declare function fitLabelFontSize(text: string, { fontSize: baseFontSize, width, height, unwrappedHeight }: FitLabelOptions): number;
export {};
