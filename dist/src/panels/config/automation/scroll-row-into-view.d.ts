/**
 * Brings a row into the part of the editor that is visible above the bottom
 * sheet, which covers as much as the row's scroll-margin-bottom. A row already
 * there stays put; otherwise it is centered there, or aligned to the top when
 * it is taller than that space.
 */
export declare const scrollRowIntoView: (row: HTMLElement) => void;
