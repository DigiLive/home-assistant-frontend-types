import type { HassEntities } from "home-assistant-js-websocket";
import type { LocalizeFunc } from "../../../common/translations/localize";
import { type SearchParamsSource } from "../../../common/url/query-params";
import type { DataTableRowData } from "../../../components/data-table/ha-data-table";
import type { RepositoryBase } from "../../../data/marketplace/repository";
import type { HomeAssistant } from "../../../types";
import type { MarketplaceTab } from "./ha-marketplace-dashboard";
export declare const STATUS_ORDER: readonly ["pending-restart", "pending-upgrade", "installed", "new", "default"];
export declare const STATUS_FILTER = "status";
export declare const TYPE_FILTER = "type";
export declare const SOURCE_FILTER = "source";
export declare const SOURCE_ORDER: readonly ["catalog", "custom"];
export type RepositoryFilters = Partial<Record<typeof STATUS_FILTER | typeof TYPE_FILTER | typeof SOURCE_FILTER, string[]>>;
export interface MarketplaceRepository extends RepositoryBase {
    update_skipped?: boolean;
}
export declare const marketplaceUpdateEntityIds: (entities: HomeAssistant["entities"]) => string[];
export declare const skippedUpdateRepositories: (entityIds: string[], entities: HomeAssistant["entities"], devices: HomeAssistant["devices"], states: HassEntities) => string[];
export declare const applySkippedUpdates: (repositories: RepositoryBase[], skipped: string[]) => MarketplaceRepository[];
export declare const statusesOfTab: (tab: MarketplaceTab) => readonly (typeof STATUS_ORDER)[number][];
export declare const filtersOfTab: (filters: RepositoryFilters, tab: MarketplaceTab) => RepositoryFilters;
export declare const statusFilterOfTab: (filters: RepositoryFilters, tab: MarketplaceTab, picked?: string[]) => string[];
export declare const timestamp: (value: string | number) => number;
export declare const filterRepositories: (repositories: RepositoryBase[], localize: LocalizeFunc, filters?: RepositoryFilters) => DataTableRowData[];
export interface BrowseSettings {
    search?: string;
    sorting?: {
        column: string;
        direction: "asc" | "desc";
    };
    filters: RepositoryFilters;
}
export declare const browseUrl: ({ search, sorting, filters, }: BrowseSettings) => string;
export interface BrowseLink {
    search: string;
    filters: RepositoryFilters;
}
export declare const browseLinkFromUrl: (searchParams: SearchParamsSource) => BrowseLink | undefined;
