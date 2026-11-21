import { LitElement } from "lit";
import { HaChipBase } from "./ha-chip-base";
export declare class HaChipSet extends LitElement {
    private _children;
    get chips(): HaChipBase[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _updateTabIndices;
    private _handleKeyDown;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-chip-set": HaChipSet;
    }
}
