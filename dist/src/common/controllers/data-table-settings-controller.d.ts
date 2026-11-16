import type { ReactiveController, ReactiveControllerHost } from "@lit/reactive-element/reactive-controller";
import type { SortingChangedEvent } from "../../components/data-table/ha-data-table";
import type { HASSDomEvent } from "../dom/fire_event";
export interface DataTableSettingsKeys {
    /** Session storage key for the search. */
    search?: string;
    /** Local storage key for the sorting. */
    sorting?: string;
    /** Local storage key for the grouping. */
    grouping?: string;
}
export interface DataTableSettingsOptions {
    /** The grouping when none is stored. */
    defaultGrouping?: string;
}
/**
 * Keeps the search, sorting and grouping a user picks on a data table page.
 * What a link applies (`link` on the table's events) is shown, but not
 * stored, as links often carry someone else's choices. Bind
 * `searchChanged`, `sortingChanged` and `groupingChanged` to the table's
 * events.
 */
export declare class DataTableSettingsController implements ReactiveController {
    private _host;
    private _keys;
    private _options;
    /** The search shown, which can be a link's. */
    search: string;
    /** The grouping shown, which can be a link's. */
    grouping?: string;
    private _sessionStorage;
    private _localStorage;
    private _queryParams;
    constructor(_host: ReactiveControllerHost, _keys: DataTableSettingsKeys, _options?: DataTableSettingsOptions);
    /** The stored sorting, for the table to start with. */
    get sorting(): SortingChangedEvent | undefined;
    /** Show a search, like one a page reads from a link, without storing it. */
    showSearch(value: string): void;
    searchChanged: (ev: HASSDomEvent<HASSDomEvents["search-changed"]>) => void;
    sortingChanged: (ev: HASSDomEvent<SortingChangedEvent>) => void;
    groupingChanged: (ev: HASSDomEvent<HASSDomEvents["grouping-changed"]>) => void;
    private _navigated;
    private _storedSearch;
    private _storedGrouping;
}
