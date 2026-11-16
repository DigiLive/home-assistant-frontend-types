import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../ha-svg-icon";
/**
 * @attribute active
 * @attribute track
 */
export declare class HatGraphNode extends LitElement {
    iconPath?: string;
    disabled: boolean;
    error: boolean;
    notEnabled: boolean;
    notTriggered: boolean;
    graphStart: boolean;
    /** Renders the node as a filled diamond, like building block rows in the editor. */
    buildingBlock: boolean;
    noFocus: boolean;
    badge?: number;
    protected updated(changedProps: PropertyValues<this>): void;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hat-graph-node": HatGraphNode;
    }
}
