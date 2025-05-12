import { LitElement } from "lit";
import "../../../../../../components/ha-fade-in";
import "../../../../../../components/ha-spinner";
export declare class ZWaveJsAddNodeLoading extends LitElement {
    description?: string;
    delay: number;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave-js-add-node-loading": ZWaveJsAddNodeLoading;
    }
}
