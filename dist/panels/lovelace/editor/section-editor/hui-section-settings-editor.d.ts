import { LitElement } from "lit";
import "../../../../components/ha-form/ha-form";
import { type LovelaceSectionRawConfig } from "../../../../data/lovelace/config/section";
import type { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
export declare class HuiDialogEditSection extends LitElement {
    private _localize;
    config: LovelaceSectionRawConfig;
    viewConfig: LovelaceViewConfig;
    private get _maxColumns();
    private get _displayedColumnSpan();
    private get _columnSpanFormValue();
    private _schema;
    render(): import("lit-html").TemplateResult<1>;
    private _computeLabel;
    private _computeHelper;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-section-settings-editor": HuiDialogEditSection;
    }
}
