export declare const MAX_HISTORY = 100;
/** Return the code the user ran before, oldest first. */
export declare const loadHistory: (userId: string) => string[];
/** Add code the user ran to the history, and return the new history. */
export declare const addToHistory: (userId: string, history: string[], code: string) => string[];
/** Return if the user unlocked pasting into the console. */
export declare const loadPasteAllowed: (userId: string) => boolean;
/** Remember the user unlocked pasting into the console. */
export declare const savePasteAllowed: (userId: string) => void;
