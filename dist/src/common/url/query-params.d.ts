import type { HassServiceTarget } from "home-assistant-js-websocket";
export type SearchParamsSource = URLSearchParams | Record<string, string> | string;
export interface QueryParamConfig {
    list?: readonly string[];
    date?: readonly string[];
    boolean?: readonly {
        key: string;
        trueValue: string;
    }[];
    string?: readonly string[];
}
type ListKeyOf<C extends QueryParamConfig> = C extends {
    list: readonly (infer K extends string)[];
} ? K : never;
type DateKeyOf<C extends QueryParamConfig> = C extends {
    date: readonly (infer K extends string)[];
} ? K : never;
type BooleanKeyOf<C extends QueryParamConfig> = C extends {
    boolean: readonly {
        key: infer K extends string;
    }[];
} ? K : never;
type StringKeyOf<C extends QueryParamConfig> = C extends {
    string: readonly (infer K extends string)[];
} ? K : never;
export type QueryParamValues<C extends QueryParamConfig> = Partial<Record<ListKeyOf<C>, string[]> & Record<DateKeyOf<C>, Date> & Record<BooleanKeyOf<C>, boolean> & Record<StringKeyOf<C>, string>>;
export type ServiceTargetQueryParams<Key extends keyof HassServiceTarget & string> = Partial<Record<Key, string[]>>;
export declare function decodeQueryParams<C extends QueryParamConfig>(searchParams: SearchParamsSource, config: C): QueryParamValues<C>;
export declare function createQueryString<C extends QueryParamConfig>(values: QueryParamValues<NoInfer<C>>, config: C): string;
/** Whether the search params hold any of the config's params. */
export declare const hasQueryParams: (searchParams: SearchParamsSource, config: QueryParamConfig) => boolean;
/**
 * Replace the config's params in a query string with the given values,
 * keeping every other param exactly as it is written.
 */
export declare function updateQueryString<C extends QueryParamConfig>(current: string, values: QueryParamValues<NoInfer<C>>, config: C): string;
export declare const serviceTargetFromQueryParams: <Key extends keyof HassServiceTarget & string>(params: ServiceTargetQueryParams<Key>, keys: readonly Key[]) => HassServiceTarget | undefined;
export declare const queryParamsFromServiceTarget: <Key extends keyof HassServiceTarget & string>(target: HassServiceTarget, keys: readonly Key[]) => ServiceTargetQueryParams<Key>;
export {};
