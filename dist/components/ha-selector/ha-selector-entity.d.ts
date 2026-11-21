import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { EntitySelector } from "../../data/selector";
import "../entity/ha-entities-picker";
import "../entity/ha-entity-picker";
export declare class HaEntitySelector extends LitElement {
    selector: EntitySelector;
    private _entitySources?;
    private _configEntries?;
    value?: any;
    label?: string;
    helper?: string;
    placeholder?: any;
    disabled: boolean;
    required: boolean;
    private _createDomains;
    private _api;
    private _connection?;
    private _states;
    private _entities;
    private _devices;
    private _deviceIntegrationLookup;
    private _dataNeeds;
    private _fetchedConfigEntries;
    private _fetchedEntitySources;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected updated(changedProps: PropertyValues): void;
    private _filterEntities;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-entity": HaEntitySelector;
    }
}
