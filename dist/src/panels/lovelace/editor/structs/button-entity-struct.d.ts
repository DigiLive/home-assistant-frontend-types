export declare const buttonEntityConfigStruct: import("superstruct").Struct<{
    entity: string;
    image?: string | undefined;
    name?: string | undefined;
    icon?: string | undefined;
    double_tap_action?: any;
    hold_action?: any;
    show_icon?: boolean | undefined;
    show_name?: boolean | undefined;
    tap_action?: any;
}, {
    entity: import("superstruct").Struct<string, null>;
    name: import("superstruct").Struct<string | undefined, null>;
    icon: import("superstruct").Struct<string | undefined, null>;
    image: import("superstruct").Struct<string | undefined, null>;
    show_name: import("superstruct").Struct<boolean | undefined, null>;
    show_icon: import("superstruct").Struct<boolean | undefined, null>;
    tap_action: import("superstruct").Struct<any, null>;
    hold_action: import("superstruct").Struct<any, null>;
    double_tap_action: import("superstruct").Struct<any, null>;
}>;
