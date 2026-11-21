import type { ReactiveController, ReactiveControllerHost } from "lit";
import type { LovelaceElement, LovelaceElementConfig } from "../../elements/types";
import type { PictureElementsEditorBridge } from "./editor-bridge";
export interface EditorPreviewTarget {
    root?: HTMLElement;
    elements?: LovelaceElement[];
    configs?: LovelaceElementConfig[];
}
/**
 * Makes a picture-elements card editable while it is the preview of the card
 * editor: a click on an element selects it, a drag moves it, and a click on
 * the image positions the selected element. The elements' own actions don't
 * run meanwhile. The host binds the listeners and the `editing`/`dragging`
 * classes on the elements' container; this controller marks the `selected`
 * and `movable` (draggable right away) elements.
 */
export declare class PictureElementsEditorPreviewController implements ReactiveController {
    private _host;
    private _target;
    private _bridge?;
    private _connected;
    private _press?;
    private _marked?;
    private _resizeObserver?;
    private _observed?;
    constructor(host: ReactiveControllerHost & {
        preview: boolean;
    }, target: () => EditorPreviewTarget);
    set bridge(bridge: PictureElementsEditorBridge | undefined);
    get editing(): boolean;
    get dragging(): boolean;
    hostConnected(): void;
    hostDisconnected(): void;
    hostUpdated(): void;
    private _bridgeChanged;
    private _observe;
    private get _editor();
    private _elementIndex;
    pointerDown: {
        handleEvent: (ev: PointerEvent) => void;
        capture: boolean;
        passive: boolean;
    };
    private _canDrag;
    private _position;
    pointerMove: (ev: PointerEvent) => void;
    pointerUp: (ev: PointerEvent) => void;
    pointerCancel: (ev: PointerEvent) => void;
    private _endPress;
    keyDown: {
        handleEvent: (ev: KeyboardEvent) => void;
        capture: boolean;
        passive: boolean;
    };
    blockAction: {
        handleEvent: (ev: Event) => void;
        capture: boolean;
        passive: boolean;
    };
    blockTouch: {
        handleEvent: (ev: TouchEvent) => void;
        capture: boolean;
        passive: boolean;
    };
}
