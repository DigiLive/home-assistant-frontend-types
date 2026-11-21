import type { HassServiceTarget } from "home-assistant-js-websocket";
import { LitElement } from "lit";
import type { DataTableFiltersValue } from "../data/data_table_filters";
import type { HaEntityPickerEntityFilterFunc } from "../data/entity/entity";
import type { EntitySources } from "../data/entity/entity_sources";
import type { HomeAssistant } from "../types";
import "./ha-target-picker";
/**
 * Ways to narrow down the entities a target selection resolves to. Not to be
 * confused with `EntitySources`, which maps an entity to its integration.
 */
export interface SourceFilters {
    /** Domains (`sensor`) and domains narrowed to a device class (`sensor/power`). */
    types?: string[];
    integrations?: string[];
}
/** Number of picked targets, no matter which type they are. */
export declare const countTargets: (target: HassServiceTarget) => number;
/** Sets one filter from the value of its `data-table-filter-changed` event. */
export declare const setSourceFilter: <T extends SourceFilters>(filters: T, key: keyof T, value: DataTableFiltersValue) => T;
/** Number of filters that have at least one option selected. */
export declare const countSourceFilters: (filters: SourceFilters) => number;
/**
 * Matches an entity against the selected filters: it is kept when it matches
 * every filter that has a selection. Undefined when nothing is selected.
 */
export declare const sourceFilterFunc: (filters: SourceFilters, states: HomeAssistant["states"], entities: HomeAssistant["entities"], entitySources?: EntitySources) => ((entityId: string) => boolean) | undefined;
/** Narrows entity IDs down by the selected filters. */
export declare const applySourceFilters: (entityIds: string[], filters: SourceFilters, states: HomeAssistant["states"], entities: HomeAssistant["entities"], entitySources?: EntitySources) => string[];
/**
 * Picks the targets a page shows. Meant to be placed in an `ha-filter-pane`,
 * above the filters the page narrows them down with.
 *
 * The pages resolve every entity of a target, secondary ones included, so the
 * target picker counts them too.
 */
export declare class HaSourcesPicker extends LitElement {
    hass: HomeAssistant;
    value: HassServiceTarget;
    /** The filters the page applies, so the picker counts what they keep. */
    filters: SourceFilters;
    entityFilter?: HaEntityPickerEntityFilterFunc;
    entitySources?: EntitySources;
    /** Explains what the page shows while no target is picked. */
    description?: string;
    disabled: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    private _activeFilter;
    private _targetsChanged;
    static styles: import("lit").CSSResult;
}
/** Lays out the filters that follow the picker in the pane. */
export declare const sourceFiltersStyles: import("lit").CSSResult;
declare global {
    interface HTMLElementTagNameMap {
        "ha-sources-picker": HaSourcesPicker;
    }
}
