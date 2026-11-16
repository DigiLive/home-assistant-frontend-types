import type { PictureElementsCardConfig } from "../types";
export declare const PICTURE_ELEMENTS_EDITOR_BRIDGE: unique symbol;
export interface PictureElementsEditorHandlers {
    selectElement: (index: number) => void;
    moveElement: (index: number, left: number, top: number) => void;
    clickImage: (x: number, y: number) => void;
}
export declare class PictureElementsEditorBridge extends EventTarget {
    readonly handlers: PictureElementsEditorHandlers;
    private _active;
    private _selectedIndex?;
    private _handOvers;
    constructor(handlers: PictureElementsEditorHandlers);
    get active(): boolean;
    get selectedIndex(): number | undefined;
    setState(active: boolean, selectedIndex?: number): void;
    needsHandOver(config: PictureElementsCardConfig): boolean;
}
