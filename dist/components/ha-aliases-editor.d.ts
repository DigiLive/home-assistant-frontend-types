import { LitElement, nothing } from "lit";
import "./input/ha-input-multi";
declare class AliasesEditor extends LitElement {
    private _localize;
    aliases: string[];
    disabled: boolean;
    sortable: boolean;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _aliasesChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-aliases-editor": AliasesEditor;
    }
}
export {};
