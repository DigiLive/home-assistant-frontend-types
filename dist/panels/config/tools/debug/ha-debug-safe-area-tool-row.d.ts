import { LitElement } from "lit";
import "../../../../components/ha-switch";
import "../../../../components/item/ha-list-item-base";
declare class HaDebugSafeAreaToolRow extends LitElement {
    private _localize;
    private _enabled;
    protected render(): import("lit-html").TemplateResult<1>;
    private _checkedChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-debug-safe-area-tool-row": HaDebugSafeAreaToolRow;
    }
}
export {};
