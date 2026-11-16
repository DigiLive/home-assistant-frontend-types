import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-svg-icon";
import type { DebugConsoleObjects, DebugConsoleValue } from "../../../../data/debug_console";
/**
 * A value in the console. Objects expand into a tree, loading their children
 * from the backend on demand, like the object inspector in browser consoles.
 */
export declare class ToolsDebugConsoleValue extends LitElement {
    objects: DebugConsoleObjects;
    private _i18n;
    value?: DebugConsoleValue;
    key?: string;
    /** Set for a property that is only evaluated once selected. */
    getter: boolean;
    /** The object the getter belongs to. */
    parentId?: string;
    private _expanded;
    private _children?;
    private _error?;
    private _evaluated?;
    private _evaluating;
    private _request;
    private _inspecting;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private get _value();
    private _renderPrimitive;
    private _renderChild;
    private _toggle;
    private _evaluate;
    static readonly styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "tools-debug-console-value": ToolsDebugConsoleValue;
    }
}
