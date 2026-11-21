import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { HistoryGraphCardConfig } from "../../cards/types";
import "../../components/hui-entity-editor";
import type { LovelaceCardEditor } from "../../types";
import "../hui-sub-element-editor";
export declare class HuiHistoryGraphCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    private _subElementEditorConfig?;
    private _schema;
    setConfig(config: HistoryGraphCardConfig): void;
    private _subForm;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _goBack;
    private _editDetailElement;
    private _handleSubEntityChanged;
    private _valueChanged;
    private _entitiesChanged;
    private _shouldDisableColorOption;
    private _deleteColorOption;
    private _orderProperties;
    private _computeHelperCallback;
    private _computeLabelCallback;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-history-graph-card-editor": HuiHistoryGraphCardEditor;
    }
}
