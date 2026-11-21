import type { PropertyValues } from "lit";
import { LitElement } from "lit";
interface BranchConfig {
    x: number;
    height: number;
    start: boolean;
    end: boolean;
    track: boolean;
    trackEnd: boolean;
}
/**
 * @attribute active
 * @attribute track
 */
export declare class HatGraphBranch extends LitElement {
    disabled: boolean;
    selected: boolean;
    start: boolean;
    short: boolean;
    end: boolean;
    _branches: BranchConfig[];
    private _totalWidth;
    private _maxHeight;
    private _slot?;
    private _trackObserver;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(changedProps: PropertyValues): void;
    private _updateBranches;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hat-graph-branch": HatGraphBranch;
    }
}
export {};
