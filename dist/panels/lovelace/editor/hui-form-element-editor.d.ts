import type { PropertyValues } from "lit";
import type { LovelaceConfigForm } from "../types";
import { HuiElementEditor } from "./hui-element-editor";
export declare class HuiFormElementEditor extends HuiElementEditor {
    form: LovelaceConfigForm;
    protected getConfigForm(): Promise<LovelaceConfigForm | undefined>;
    protected updated(changedProperties: PropertyValues<this>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-form-element-editor": HuiFormElementEditor;
    }
}
