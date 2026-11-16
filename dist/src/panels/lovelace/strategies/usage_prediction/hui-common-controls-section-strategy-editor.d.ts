import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { LovelaceStrategyEditor } from "../types";
import type { CommonControlsSectionStrategyConfig } from "./common-controls-section-strategy";
export declare class HuiCommonControlsSectionStrategyEditor extends LitElement implements LovelaceStrategyEditor {
    private _localize;
    private _config?;
    setConfig(config: CommonControlsSectionStrategyConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _computeLabel;
    private _computeHelper;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-common-controls-section-strategy-editor": HuiCommonControlsSectionStrategyEditor;
    }
}
