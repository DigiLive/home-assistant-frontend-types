import type { PropertyValues } from "lit";
import { LitElement } from "lit";
export type BottomSheetPosition = "collapsed" | "half" | "full";
/**
 * A bottom sheet that slides up from the bottom of the screen without blocking
 * the page behind it. It sits in the top layer, above the toolbar, like other
 * sheets; a backdrop fades in as it rises from half to full height, and a tap
 * on it brings the sheet back to half.
 *
 * It rests collapsed, at half or at full height and snaps to the nearest of
 * them when a drag ends, or to the next one in the direction of a quick swipe.
 * The handle drags with a mouse or a finger. On touch the whole sheet drags
 * too, until it is at full height: then its content scrolls, and pulling down
 * from the top brings the sheet down again. Dragging down collapses it to
 * `minHeight` so a host keeps a strip of content reachable. Only `closeSheet`
 * closes it, unless it is `dismissable`: then a drag that pulls it below its
 * lowest stop closes it with a downward swipe, or once it is almost out of the
 * screen. A quick swipe that ends above the lowest stop still stops there.
 *
 * @fires bottom-sheet-closed - Fired when the bottom sheet is closed
 * @fires bottom-sheet-resized - Fired with the sheet's height in pixels
 * whenever it settles at a new height, or when `halfHeight` changes
 *
 * @cssprop --ha-bottom-sheet-handle-padding - How far below the handle the
 * grab area reaches; shrink it when content sits right under the handle
 */
export declare class HaSnapBottomSheet extends LitElement {
    private _sheet;
    private _backdrop;
    private _handle;
    /**
     * The height in pixels of the strip the collapsed sheet keeps visible, e.g.
     * what a host measures; the sheet adds the bottom safe area below it.
     * Without it the sheet does not collapse.
     */
    minHeight?: number;
    /** Names the sheet for assistive technologies */
    label?: string;
    dismissable: boolean;
    private _shown;
    private _position;
    private _dragHeight?;
    private _dismissOffset?;
    private _gesture;
    private _dragging;
    private _dragStartHeight;
    private _pendingTouch?;
    private _reported?;
    private _closing;
    get position(): BottomSheetPosition;
    get halfHeight(): number;
    snapTo(position: BottomSheetPosition): void;
    closeSheet(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    protected updated(changedProperties: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _collapsedHeight;
    private _height;
    private _showPopovers;
    private _backdropOpacity;
    private _handleBackdropClick;
    private _handleViewportResize;
    private _handleMouseDown;
    private _handleMouseMove;
    private _handleMouseUp;
    private _removeMouseListeners;
    private _handleTouchStart;
    private _handleTouchMove;
    private _handleTouchEnd;
    private _startDrag;
    private _moveDrag;
    private _endDrag;
    private _stopAfterDrag;
    private _stops;
    private _fullHeight;
    private _transitionsDone;
    private _reportWhenSettled;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-snap-bottom-sheet": HaSnapBottomSheet;
    }
    interface HASSDomEvents {
        "bottom-sheet-closed": undefined;
        "bottom-sheet-resized": {
            height: number;
        };
    }
}
