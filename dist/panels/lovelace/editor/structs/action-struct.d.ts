export declare const actionConfigStructConfirmation: import("superstruct").Struct<boolean | {
    text: string;
    excemptions: {
        user: string;
    }[];
}, null>;
export declare const actionConfigStructType: import("superstruct").Struct<{
    action: "assist" | "call-service" | "more-info" | "navigate" | "none" | "perform-action" | "toggle" | "url";
    confirmation: boolean | {
        text: string;
        excemptions: {
            user: string;
        }[];
    };
}, {
    action: import("superstruct").Struct<"assist" | "call-service" | "more-info" | "navigate" | "none" | "perform-action" | "toggle" | "url", {
        assist: "assist";
        "call-service": "call-service";
        "more-info": "more-info";
        navigate: "navigate";
        none: "none";
        "perform-action": "perform-action";
        toggle: "toggle";
        url: "url";
    }>;
    confirmation: import("superstruct").Struct<boolean | {
        text: string;
        excemptions: {
            user: string;
        }[];
    }, null>;
}>;
export declare const actionConfigStruct: import("superstruct").Struct<any, null>;
