import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import "../../../../components/ha-selector/ha-selector-select";
import "../../../../components/ha-switch";
import type { HomeAssistant } from "../../../../types";
import type { MapCardConfig } from "../../cards/types";
import "../../components/hui-entity-editor";
import type { LovelaceCardEditor } from "../../types";
import "../conditions/ha-card-conditions-editor";
import "../hui-sub-element-editor";
export declare const mapEntitiesConfigStruct: import("superstruct").Struct<string | {
    entity: string;
    name: string;
    color: string;
    label_mode: string;
    attribute: string;
    unit: string;
    focus: boolean;
}, null>;
export declare class HuiMapCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    private _subElementEditorConfig?;
    private _shouldDisableOptions;
    private _possibleGeoSources?;
    private _locationEntities;
    private _entityContext;
    private _contextProvider;
    private _schema;
    private _subForm;
    private _formData;
    setConfig(config: MapCardConfig): void;
    private _geoSourcesStrings;
    get _geo_location_sources(): string[];
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    private _entityHasLocation;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    renderConditions(): import("lit-html").TemplateResult<1>;
    private _conditionsChanged;
    private _goBack;
    private _editDetailElement;
    private _handleSubEntityChanged;
    private _selectSchema;
    private _entitiesValueChanged;
    private _geoSourcesChanged;
    private _valueChanged;
    protected willUpdate(changedProperties: PropertyValues): void;
    private _computeLabelCallback;
    private _computeHelperCallback;
    private _deleteOptions;
    private _orderProperties;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-map-card-editor": HuiMapCardEditor;
    }
}
