import { LitElement, type PropertyValues } from "lit";
import type { ActionRelatedContext } from "../panels/lovelace/components/hui-action-editor";
import "./ha-generic-picker";
import "./ha-domain-icon";
import "./ha-icon";
export declare class HaNavigationPicker extends LitElement {
    label?: string;
    value?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    excludePaths?: string[];
    addButtonLabel?: string;
    private _loading;
    context?: ActionRelatedContext;
    private _i18n;
    private _panels?;
    private _registries?;
    private _hassConfig?;
    private _connection?;
    private _api?;
    protected firstUpdated(): void;
    private _navigationItems;
    private _configEntryLookup;
    private _navigationGroups;
    private _getRelatedItems;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueRenderer;
    private _rowRenderer;
    private _fuseIndexes;
    private _getItems;
    private _sortBySortingLabel;
    private _loadNavigationItems;
    protected updated(changedProps: PropertyValues<this>): void;
    private _loadRelatedItems;
    private _fetchRelatedItems;
    private _pathInfoOptions;
    private _loadConfigEntries;
    private _valueChanged;
    private _setValue;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-navigation-picker": HaNavigationPicker;
    }
}
