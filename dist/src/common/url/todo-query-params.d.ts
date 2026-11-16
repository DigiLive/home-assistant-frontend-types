import { type QueryParamValues, type SearchParamsSource } from "./query-params";
export declare const todoQueryParamConfig: {
    readonly string: readonly ["entity_id"];
    readonly boolean: readonly [{
        readonly key: "add_item";
        readonly trueValue: "true";
    }];
};
export type TodoQueryParams = QueryParamValues<typeof todoQueryParamConfig>;
export declare const decodeTodoQueryParams: (searchParams: SearchParamsSource) => TodoQueryParams;
export declare const createTodoQueryString: (values: TodoQueryParams) => string;
