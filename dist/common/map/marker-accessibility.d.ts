/**
 * Marker elements may be focusable buttons on both engines, so the caller's
 * element is the keyboard target and needs a name and a role. MapLibre would
 * otherwise label it "Map marker".
 *
 * What the engine sets is recorded on the element, so a rebuilt marker on a
 * reused element gets fresh attributes while the caller's own are left alone.
 */
export declare const setMarkerAccessibility: (element: HTMLElement, title: string | undefined, focusable: boolean) => void;
/** Removes what setMarkerAccessibility set on the element */
export declare const clearMarkerAccessibility: (element: HTMLElement) => void;
