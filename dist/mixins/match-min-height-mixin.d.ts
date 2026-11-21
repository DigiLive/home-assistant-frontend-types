import type { LitElement } from "lit";
import type { StyleInfo } from "lit/directives/style-map";
import type { Constructor } from "../types";
/**
 * Public interface added by {@link MatchMinHeightMixin}.
 *
 * Declared separately so consumers can reference the mixin's contributed
 * members in their own type annotations, per the Lit mixin authoring guide.
 */
export declare class MatchMinHeightMixinInterface {
    /** Most recently observed height of `matchMinHeightTarget`, in pixels. */
    protected _matchedMinHeight?: number;
    /**
     * `StyleInfo` exposing the matched height as a `min-height` declaration.
     * Pass to `styleMap` to keep a layout at least as tall as the target
     * element. Empty until a height has been observed.
     */
    protected get _matchMinHeightStyle(): StyleInfo;
    /**
     * Element whose height should be matched as a `min-height` floor. Override
     * with a getter that returns a `@query` result. Return `null` to pause
     * observation (e.g. while the element is not rendered).
     */
    protected get matchMinHeightTarget(): HTMLElement | null;
}
/**
 * Mixin that observes a target element's height and exposes it as a
 * `min-height` style. Useful for keeping a sibling layout (e.g. a YAML
 * editor) at least as tall as another (e.g. a UI form) to avoid content
 * shift when toggling between them.
 *
 * Subclasses override `matchMinHeightTarget` (typically returning a
 * `@query`-decorated element) to specify which element to observe.
 */
export declare const MatchMinHeightMixin: <T extends Constructor<LitElement>>(superClass: T) => Constructor<MatchMinHeightMixinInterface> & T;
