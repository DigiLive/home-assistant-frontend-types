/**
 * Shared behavior of the toolbar back arrow. The arrow is a link to the
 * declared parent page so it can be opened in a new tab, but a plain click
 * returns to the page the user came from instead.
 */
export declare const handleBackClick: (ev: MouseEvent, backPath?: string, backCallback?: () => void) => void;
