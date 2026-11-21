import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { AlertBadgeConfig } from "../../badges/types";
import type { LovelaceBadgeEditor } from "../../types";
export declare class HuiAlertBadgeEditor extends LitElement implements LovelaceBadgeEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: AlertBadgeConfig): void;
    private _schema;
    private _formData;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
    private _computeHelperCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-alert-badge-editor": HuiAlertBadgeEditor;
    }
}
