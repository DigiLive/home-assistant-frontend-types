import { type QueryParamValues, type SearchParamsSource } from "./query-params";
export declare const marketplaceFilterQueryParamConfig: {
    readonly list: readonly ["status", "type", "source"];
};
export type MarketplaceFilterQueryParams = QueryParamValues<typeof marketplaceFilterQueryParamConfig>;
export declare const decodeMarketplaceFilterQueryParams: (searchParams: SearchParamsSource) => MarketplaceFilterQueryParams;
export declare const createMarketplaceFilterQueryString: (values: MarketplaceFilterQueryParams) => string;
export declare const sortedMarketplaceFilterQueryString: (values: MarketplaceFilterQueryParams) => string;
