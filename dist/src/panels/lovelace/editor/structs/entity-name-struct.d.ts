export declare const entityNameStruct: import("superstruct").Struct<string | (string | {
    type: "text";
    text: string;
} | {
    type: "area" | "device" | "entity" | "floor" | "parent_device";
})[] | {
    type: "text";
    text: string;
} | {
    type: "area" | "device" | "entity" | "floor" | "parent_device";
}, null>;
