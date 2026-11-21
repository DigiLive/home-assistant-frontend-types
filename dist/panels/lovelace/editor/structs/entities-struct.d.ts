export declare const entitiesConfigStruct: import("superstruct").Struct<string | {
    entity: string;
    name: string | (string | {
        type: "text";
        text: string;
    } | {
        type: "area" | "device" | "entity" | "floor" | "parent_device";
    })[] | {
        type: "text";
        text: string;
    } | {
        type: "area" | "device" | "entity" | "floor" | "parent_device";
    };
    icon: string;
    image: string;
    secondary_info: string | string[];
    time_format: "date" | "datetime" | "relative" | "time" | "total" | {
        type: "date" | "datetime" | "relative" | "time" | "total";
        style: "long" | "short";
    };
    color: string;
    tap_action?: any;
    hold_action?: any;
    double_tap_action?: any;
    confirmation: boolean | {
        text: string;
        excemptions: {
            user: string;
        }[];
    };
    show_last_changed: boolean;
    show_state: boolean;
}, null>;
export declare const graphEntitiesConfigStruct: import("superstruct").Struct<string | {
    entity: string;
    name: string | (string | {
        type: "text";
        text: string;
    } | {
        type: "area" | "device" | "entity" | "floor" | "parent_device";
    })[] | {
        type: "text";
        text: string;
    } | {
        type: "area" | "device" | "entity" | "floor" | "parent_device";
    };
    color: string;
}, null>;
