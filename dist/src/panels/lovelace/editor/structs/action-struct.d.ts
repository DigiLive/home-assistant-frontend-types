export declare const actionConfigStructConfirmation: import("superstruct").Struct<boolean | {
    text?: string | undefined;
    excemptions?: {
        user: string;
    }[] | undefined;
}, null>;
export declare const actionConfigStructType: import("superstruct").Struct<{
    action: "toggle" | "url" | "assist" | "none" | "call-service" | "perform-action" | "more-info" | "navigate";
    confirmation?: boolean | {
        text?: string | undefined;
        excemptions?: {
            user: string;
        }[] | undefined;
    } | undefined;
}, {
    action: import("superstruct").Struct<"toggle" | "url" | "assist" | "none" | "call-service" | "perform-action" | "more-info" | "navigate", {
        toggle: "toggle";
        url: "url";
        assist: "assist";
        none: "none";
        "call-service": "call-service";
        "perform-action": "perform-action";
        "more-info": "more-info";
        navigate: "navigate";
    }>;
    confirmation: import("superstruct").Struct<boolean | {
        text?: string | undefined;
        excemptions?: {
            user: string;
        }[] | undefined;
    } | undefined, null>;
}>;
export declare const actionConfigStruct: import("superstruct").Struct<any, null>;
