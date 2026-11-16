/**
 * Whether a touch inside a bottom sheet belongs to its content rather than to
 * the sheet: it started in something scrolled away from its top, or in a
 * control that drags on its own. Only the path up to the sheet is checked.
 */
export declare const isSwipeLocked: (path: EventTarget[], sheet: EventTarget) => boolean;
