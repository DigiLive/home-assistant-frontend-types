import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { SankeyCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiEnergySankeyCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: SankeyCardConfig): void;
    private _schema;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeHelperCallback;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-energy-sankey-card-editor": HuiEnergySankeyCardEditor;
    }
}
