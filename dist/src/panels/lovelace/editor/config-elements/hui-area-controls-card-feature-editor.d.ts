import { LitElement, nothing } from "lit";
import "../../../../components/ha-area-controls-picker";
import "../../../../components/ha-form/ha-form";
import "../../../../components/chips/ha-input-chip";
import "../../../../components/ha-sortable";
import "../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../types";
import { type AreaControlsCardFeatureConfig } from "../../card-features/types";
import type { AreaCardFeatureContext } from "../../cards/hui-area-card";
import type { LovelaceCardFeatureEditor } from "../../types";
export declare class HuiAreaControlsCardFeatureEditor extends LitElement implements LovelaceCardFeatureEditor {
    hass?: HomeAssistant;
    context?: AreaCardFeatureContext;
    private _config?;
    setConfig(config: AreaControlsCardFeatureConfig): void;
    private _schema;
    private _supportedControls;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _getItemLabel;
    private _itemMoved;
    private _removeItem;
    private _controlChanged;
    private _updateControls;
    private _valueChanged;
    private _computeLabelCallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-area-controls-card-feature-editor": HuiAreaControlsCardFeatureEditor;
    }
}
