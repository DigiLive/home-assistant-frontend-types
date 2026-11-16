import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { DateCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiDateCardEditor extends LitElement implements LovelaceCardEditor {
    private _localize;
    private _config?;
    private _schema;
    private _data;
    setConfig(config: DateCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
    private _computeHelperCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-date-card-editor": HuiDateCardEditor;
    }
}
