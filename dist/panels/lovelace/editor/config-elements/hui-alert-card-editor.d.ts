import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { AlertCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiAlertCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: AlertCardConfig): void;
    private _schema;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
    private _computeHelperCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-alert-card-editor": HuiAlertCardEditor;
    }
}
