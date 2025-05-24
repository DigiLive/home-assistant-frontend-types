import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { ClockCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiClockCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    private _schema;
    private _data;
    setConfig(config: ClockCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-clock-card-editor": HuiClockCardEditor;
    }
}
