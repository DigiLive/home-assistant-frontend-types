import { LitElement } from "lit";
import "../../../../components/ha-form/ha-form";
import { type LovelaceViewFooterConfig } from "../../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../../types";
export declare class HuiViewFooterSettingsEditor extends LitElement {
    hass: HomeAssistant;
    config?: LovelaceViewFooterConfig;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabel;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-view-footer-settings-editor": HuiViewFooterSettingsEditor;
    }
}
