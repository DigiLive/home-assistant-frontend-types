import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { DistributionCardConfig } from "../../cards/types";
import "../../components/hui-entity-editor";
import type { LovelaceCardEditor } from "../../types";
import "../hui-sub-element-editor";
export declare class HuiDistributionCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    private _subElementEditorConfig?;
    private _configEntities?;
    setConfig(config: DistributionCardConfig): void;
    private _schema;
    private _entityFilter;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _entitiesChanged;
    private _editDetailElement;
    private _goBack;
    private _handleSubElementChanged;
    private _computeLabelCallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-distribution-card-editor": HuiDistributionCardEditor;
    }
}
