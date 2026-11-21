import { LitElement } from "lit";
import type { ActionHandlerOptions } from "../../data/lovelace/action_handler";
import "../ha-ripple";
export declare class HaTileContainer extends LitElement {
    featurePosition: "bottom" | "inline";
    vertical: boolean;
    fixedInfoHeight: boolean;
    interactive: boolean;
    actionHandlerOptions?: ActionHandlerOptions;
    private _hasFeatures;
    private _handleFeaturesSlotChange;
    private _handleFocus;
    private _handleBlur;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tile-container": HaTileContainer;
    }
}
