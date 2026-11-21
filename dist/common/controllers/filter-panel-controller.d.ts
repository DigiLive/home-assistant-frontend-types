import type { ReactiveController, ReactiveControllerHost } from "@lit/reactive-element/reactive-controller";
import { type LitElement } from "lit";
import type { Ref } from "lit/directives/ref";
type FilterPanelHost = ReactiveControllerHost & LitElement & {
    expanded: boolean;
};
/**
 * Layout the controller relies on: the filter is a flex column made of its
 * header (`ha-expansion-panel`) and a `.content` wrapper. Collapsed, it is as
 * tall as its header; expanded, it fills what is left of the pane and hands
 * that space down to the list through the wrapper.
 */
export declare const filterPanelStyles: import("lit").CSSResult;
/**
 * Animates a filter of the filter pane between its collapsed and expanded
 * heights whenever `expanded` changes, and tells the host when to render its
 * content: from the moment it expands until its collapse animation has ended.
 *
 * During the animation the content keeps its final size and the host clips
 * it, so the list is revealed rather than resized.
 */
export declare class FilterPanelController implements ReactiveController {
    showContent: boolean;
    host: FilterPanelHost;
    private _content;
    private _expanded?;
    private _first;
    private _last;
    private _contentHeight;
    private _animation?;
    constructor(host: FilterPanelHost, content: Ref<HTMLElement>);
    hostConnected(): void;
    hostDisconnected(): void;
    hostUpdate(): void;
    snapshot(): void;
    prepare(): void;
    measure(): void;
    play(): void;
    private _finish;
}
export {};
