import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../../types";
import type { PictureCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiPictureCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    private _schema;
    setConfig(config: PictureCardConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _processData;
    private _valueChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-picture-card-editor": HuiPictureCardEditor;
    }
}
