export declare const pictureHeaderFooterConfigStruct: import("superstruct").Struct<{
    image: string;
    type: string;
    alt_text?: string | undefined;
    double_tap_action?: any;
    hold_action?: any;
    tap_action?: any;
}, {
    type: import("superstruct").Struct<string, null>;
    image: import("superstruct").Struct<string, null>;
    tap_action: import("superstruct").Struct<any, null>;
    hold_action: import("superstruct").Struct<any, null>;
    double_tap_action: import("superstruct").Struct<any, null>;
    alt_text: import("superstruct").Struct<string | undefined, null>;
}>;
export declare const buttonsHeaderFooterConfigStruct: import("superstruct").Struct<{
    entities: {
        entity: string;
        image?: string | undefined;
        name?: string | undefined;
        icon?: string | undefined;
        double_tap_action?: any;
        hold_action?: any;
        show_icon?: boolean | undefined;
        show_name?: boolean | undefined;
        tap_action?: any;
    }[];
    type: string;
}, {
    type: import("superstruct").Struct<string, null>;
    entities: import("superstruct").Struct<{
        entity: string;
        image?: string | undefined;
        name?: string | undefined;
        icon?: string | undefined;
        double_tap_action?: any;
        hold_action?: any;
        show_icon?: boolean | undefined;
        show_name?: boolean | undefined;
        tap_action?: any;
    }[], import("superstruct").Struct<{
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
    }>>;
}>;
export declare const graphHeaderFooterConfigStruct: import("superstruct").Struct<{
    entity: string;
    type: string;
    detail?: number | undefined;
    hours_to_show?: number | undefined;
}, {
    type: import("superstruct").Struct<string, null>;
    entity: import("superstruct").Struct<string, null>;
    detail: import("superstruct").Struct<number | undefined, null>;
    hours_to_show: import("superstruct").Struct<number | undefined, null>;
}>;
export declare const headerFooterConfigStructs: import("superstruct").Struct<any, null>;
