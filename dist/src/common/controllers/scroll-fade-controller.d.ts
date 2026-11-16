import { type ReactiveControllerHost } from "lit";
export declare const scrollFadeStyles: import("lit").CSSResult;
export declare class ScrollFadeController {
    start: boolean;
    end: boolean;
    private _host;
    private _element?;
    private _resizeObserver;
    constructor(host: ReactiveControllerHost);
    target(): any;
    private _setElement;
    private _update;
}
