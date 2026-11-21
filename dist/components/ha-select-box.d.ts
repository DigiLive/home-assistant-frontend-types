import type { ContextType } from "@lit/context";
import { LitElement } from "lit";
import { internationalizationContext, uiContext } from "../data/context";
import "./radio/ha-radio-group";
import "./radio/ha-radio-option";
interface SelectBoxOptionImage {
    src: string;
    src_dark?: string;
    flip_rtl?: boolean;
}
export interface SelectBoxOption {
    label?: string;
    description?: string;
    image?: string | SelectBoxOptionImage;
    value: string;
    disabled?: boolean;
}
export declare class HaSelectBox extends LitElement {
    options: SelectBoxOption[];
    value?: string;
    disabled?: boolean;
    maxColumns?: number;
    stackedImage: boolean;
    protected _i18n?: ContextType<typeof internationalizationContext>;
    protected _ui?: ContextType<typeof uiContext>;
    render(): import("lit-html").TemplateResult<1>;
    private _renderOption;
    private _radioChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-select-box": HaSelectBox;
    }
}
export {};
