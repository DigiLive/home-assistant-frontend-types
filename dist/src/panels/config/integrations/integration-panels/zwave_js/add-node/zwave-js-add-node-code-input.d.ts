import { LitElement } from "lit";
import "../../../../../../components/ha-alert";
import "../../../../../../components/input/ha-input";
export declare class ZWaveJsAddNodeCodeInput extends LitElement {
    value: string;
    description: string;
    placeholder: string;
    referenceKey: string;
    error?: string;
    numeric: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private _handleKeyup;
    private _handleChange;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave-js-add-node-code-input": ZWaveJsAddNodeCodeInput;
    }
    interface HASSDomEvents {
        "z-wave-submit": any;
    }
}
