import { LitElement } from "lit";
import "../../../../components/ha-form/ha-form";
import type { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
declare global {
    interface HASSDomEvents {
        "view-config-changed": {
            config: LovelaceViewConfig;
            valid?: boolean;
        };
    }
}
export declare class HuiViewEditor extends LitElement {
    private _localize;
    isNew: boolean;
    private _config;
    private _error;
    private _customMaxColumns?;
    private _customMaxColumnsDraft?;
    private _suggestedPath;
    private _schema;
    set config(config: LovelaceViewConfig);
    private get _maxColumns();
    private get _isCustomMaxColumns();
    get _type(): string;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeError;
    private _computeLabel;
    private _computeHelper;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-view-editor": HuiViewEditor;
    }
}
