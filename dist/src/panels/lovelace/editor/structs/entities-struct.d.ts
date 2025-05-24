export declare const entitiesConfigStruct: import("superstruct").Struct<string | {
    entity: string;
    image?: string | undefined;
    name?: string | undefined;
    icon?: string | undefined;
    confirmation?: boolean | {
        text?: string | undefined;
        excemptions?: {
            user: string;
        }[] | undefined;
    } | undefined;
    format?: "time" | "date" | "datetime" | "relative" | "total" | undefined;
    double_tap_action?: any;
    hold_action?: any;
    tap_action?: any;
    state_color?: boolean | undefined;
    secondary_info?: string | undefined;
}, null>;
