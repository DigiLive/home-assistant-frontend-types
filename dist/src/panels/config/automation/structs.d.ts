export declare const baseTriggerStruct: import("superstruct").Struct<{
    trigger: string;
    enabled?: boolean | undefined;
    id?: string | undefined;
}, {
    trigger: import("superstruct").Struct<string, null>;
    id: import("superstruct").Struct<string | undefined, null>;
    enabled: import("superstruct").Struct<boolean | undefined, null>;
}>;
export declare const forDictStruct: import("superstruct").Struct<{
    days?: number | undefined;
    hours?: number | undefined;
    minutes?: number | undefined;
    seconds?: number | undefined;
}, {
    days: import("superstruct").Struct<number | undefined, null>;
    hours: import("superstruct").Struct<number | undefined, null>;
    minutes: import("superstruct").Struct<number | undefined, null>;
    seconds: import("superstruct").Struct<number | undefined, null>;
}>;
