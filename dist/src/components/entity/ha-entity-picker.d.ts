import { LitElement, type PropertyValues } from "lit";
import type { HaEntityPickerEntityFilterFunc } from "../../data/entity/entity";
import type { EntitySelectorExtraOption } from "../../data/selector";
import "../ha-combo-box-item";
import "../ha-generic-picker";
import "../ha-icon";
import "../ha-svg-icon";
import "./state-badge";
export declare class HaEntityPicker extends LitElement {
    private _states;
    private _registries;
    private _i18n;
    private _config;
    autofocus: boolean;
    disabled: boolean;
    required: boolean;
    allowCustomEntity: any;
    showEntityId: boolean;
    label?: string;
    ariaLabel: string | null;
    value?: string;
    helper?: string;
    placeholder?: string;
    searchLabel?: string;
    createDomains?: string[];
    /**
     * Show entities from specific domains.
     * @type {Array}
     * @attr include-domains
     */
    includeDomains?: string[];
    /**
     * Show no entities of these domains.
     * @type {Array}
     * @attr exclude-domains
     */
    excludeDomains?: string[];
    /**
     * Show only entities of these device classes.
     * @type {Array}
     * @attr include-device-classes
     */
    includeDeviceClasses?: string[];
    /**
     * Show only entities with these unit of measuments.
     * @type {Array}
     * @attr include-unit-of-measurement
     */
    includeUnitOfMeasurement?: string[];
    /**
     * List of allowed entities to show.
     * @type {Array}
     * @attr include-entities
     */
    includeEntities?: string[];
    /**
     * List of entities to be excluded.
     * @type {Array}
     * @attr exclude-entities
     */
    excludeEntities?: string[];
    entityFilter?: HaEntityPickerEntityFilterFunc;
    /**
     * Extra options shown alongside entities. The `id` is used as the value
     * when the option is selected (it does not need to be a valid entity id).
     */
    extraOptions?: EntitySelectorExtraOption[];
    hideClearIcon: boolean;
    addButton: boolean;
    addButtonLabel?: string;
    private _picker?;
    private _pendingEntityId?;
    private _relatedIdSets?;
    private get _hasRelatedContext();
    protected willUpdate(changedProperties: PropertyValues): void;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    private _findExtraOption;
    private _renderExtraOptionStart;
    private _valueRenderer;
    private get _showEntityId();
    private _rowRenderer;
    private _getAdditionalItems;
    private _getCreateItems;
    private _getEntitiesMemoized;
    private _sortByRelatedContext;
    private _getItems;
    private _shouldHideClearIcon;
    protected render(): import("lit-html").TemplateResult<1>;
    private _searchFn;
    open(): Promise<void>;
    private _valueChanged;
    private _setValue;
    private _notFoundLabel;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-picker": HaEntityPicker;
    }
}
