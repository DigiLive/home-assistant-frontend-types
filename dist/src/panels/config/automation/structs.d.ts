export declare const baseTriggerStruct: import("superstruct").Struct<{
    trigger: string;
    id: string;
    enabled: boolean;
    note: string;
}, {
    trigger: import("superstruct").Struct<string, null>;
    id: import("superstruct").Struct<string, null>;
    enabled: import("superstruct").Struct<boolean, null>;
    note: import("superstruct").Struct<string, null>;
}>;
export declare const optionStruct: import("superstruct").Struct<{
    alias: string;
    note: string;
    conditions: string | (string | Record<string, unknown>)[] | Record<string, unknown>;
    sequence: Record<string, unknown>[] | Record<string, unknown>;
}, {
    alias: import("superstruct").Struct<string, null>;
    note: import("superstruct").Struct<string, null>;
    conditions: import("superstruct").Struct<string | (string | Record<string, unknown>)[] | Record<string, unknown>, null>;
    sequence: import("superstruct").Struct<Record<string, unknown>[] | Record<string, unknown>, null>;
}>;
export declare const forDictStruct: import("superstruct").Struct<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}, {
    days: import("superstruct").Struct<number, null>;
    hours: import("superstruct").Struct<number, null>;
    minutes: import("superstruct").Struct<number, null>;
    seconds: import("superstruct").Struct<number, null>;
}>;
