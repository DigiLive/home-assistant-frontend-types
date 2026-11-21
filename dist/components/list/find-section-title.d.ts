/**
 * Find the title of the section the first visible row belongs to, in a list
 * where section headers are plain strings followed by their items.
 *
 * Returns undefined while a header is the first visible row, or the next one
 * is about to scroll into its place, so a sticky title does not overlap it.
 * @param items - The list rows, with headers as strings
 * @param firstVisible - Index of the first visible row
 */
export declare const findSectionTitle: (items: readonly unknown[], firstVisible: number) => string | undefined;
