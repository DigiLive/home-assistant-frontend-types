import type { ReactiveController, ReactiveControllerHost } from "@lit/reactive-element/reactive-controller";
import type { LitElement } from "lit";
import type { Ref } from "lit/directives/ref";
/**
 * Does what CSS scroll anchoring does in Chrome and Firefox but not in Safari.
 * Point the ref at the element that grows, not at the scroller. Turns native
 * anchoring off on that scroller, so growth elsewhere in it is no longer
 * compensated either.
 */
export declare class PreserveScrollPositionController implements ReactiveController {
    private _target;
    private _element?;
    private _scroller?;
    private _observer?;
    private _height;
    constructor(host: ReactiveControllerHost & LitElement, target: Ref<HTMLElement>);
    hostConnected(): void;
    hostUpdated(): void;
    hostDisconnected(): void;
    private _sync;
    private _detach;
    private _resolveScroller;
    private _compensate;
}
