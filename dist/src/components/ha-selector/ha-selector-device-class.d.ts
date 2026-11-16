import { LitElement } from "lit";
import type { DeviceClassSelector } from "../../data/selector";
import "../ha-device-class-picker";
export declare class HaDeviceClassSelector extends LitElement {
    selector: DeviceClassSelector;
    value?: string | string[];
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-device_class": HaDeviceClassSelector;
    }
}
